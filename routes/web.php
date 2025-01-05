<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GameController as AdminGameController;
use App\Http\Controllers\Admin\JockeyProductController;
use App\Http\Controllers\Admin\TopupProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\User\GameController;
use App\Http\Controllers\User\ProfileController as UserProfileController;
use App\Models\Game;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    $games = Game::all();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'games' => $games
    ]);
})->name('welcome');

Route::controller(StripeController::class)->group(function(){
    Route::get('stripe', 'stripe');
    Route::post('stripe', 'stripePost')->name('stripe.post');
});

Route::resource('game', GameController::class)->names('user.game');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [UserProfileController::class, 'edit'])->name('user.profile.edit');
    Route::patch('/profile', [UserProfileController::class, 'update'])->name('user.profile.update');
    Route::delete('/profile', [UserProfileController::class, 'destroy'])->name('user.profile.destroy');
});

Route::prefix('admin')->middleware(['auth', "role:admin", 'verified'])->group(function () {
    Route::resource('dashboard', DashboardController::class)->names('admin.dashboard');
    Route::resource('game', AdminGameController::class)->names('admin.game');
    Route::resource('jasa-joki', JockeyProductController::class)->names('admin.jasa-joki');
    Route::resource('topup-game', TopupProductController::class)->names('admin.topup-game');
});

Route::get('/map', function () {
    return view('map');
});



require __DIR__ . '/auth.php';
