<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class StripeController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripe(): View
    {
        return view('stripe');
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
            'amount' => 'required|numeric|min:1',
            'stripeToken' => 'required',
        ]);

        // Set API key Stripe
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            // Membuat charge pembayaran
            Stripe\Charge::create([
                'amount' => $request->amount * 100, // Konversi ke sen (IDR)
                'currency' => 'idr',
                'source' => $request->stripeToken,
                'description' => 'Custom payment from user.',
            ]);

            // return back()->with('success', 'Payment successful!');
            return redirect()->route('welcome')->with('success', 'Payment successful!');

        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }
}
