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
        $productName = $request->query('product_name');
        $details = $request->query('details');
        $price = $request->query('price');

        return view('stripe', compact('productName', 'details', 'price'));
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
