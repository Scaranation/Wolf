<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use App\Models\Game;
use App\Models\JockeyProduct;
use App\Models\TopupProduct;

class StripeController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripe(Request $request): View
    {
        $games = Game::when($request->game_id, function ($query, $gameId) {
            return $query->where('id', $gameId);
        })->get();

        $jockeyProducts = JockeyProduct::all();
        $topupProducts = TopupProduct::all();
        return view('stripe', compact('games', 'jockeyProducts', 'topupProducts'));
    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripePost(Request $request): RedirectResponse
    {
        // Validasi input
        $request->validate([
            'stripeToken' => 'required',
        ]);

        // Set API key Stripe
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            $amount = $request->amount * 100; // Menggunakan total yang dihitung di frontend dan mengonversinya ke sen

            // Membuat charge pembayaran
            Stripe\Charge::create([
                'amount' => $amount, // Jumlah total setelah produk tambahan
                'currency' => 'idr',
                'source' => $request->stripeToken,
                'description' => 'Custom payment from user.',
            ]);

            return redirect()->route('welcome')->with('success', 'Payment successful!');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }
}
