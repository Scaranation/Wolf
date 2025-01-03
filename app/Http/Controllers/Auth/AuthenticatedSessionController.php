<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();
        if (Auth::user() && Auth::user()->role == 'user') {
            return redirect()->route('welcome')->with('success', 'login berhasil  ' . Auth::user()->name . '!');
        } else if (Auth::user() && Auth::user()->role == 'admin') {
            return redirect()->route('admin.dashboard.index')->with('success', 'login berhasil ' . Auth::user()->name . '!');;
        }

        Auth::guard('web')->logout();
        return redirect()->route('login')->with('status', 'You are not authorized to access this page.');
    }
    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/')->with('success', 'logout berhasil!');
    }
}
