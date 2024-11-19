<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TopupProduct;
use Illuminate\Http\Request;

class TopupProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $topupGame = TopupProduct::with('game')->get();
        return inertia(
            'Admin/TopupProduct/Index',
            [
                'topupGame' => $topupGame
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/TopupProduct/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required',
            'price' => 'required',
            'details' => 'required',
            'game_id' => 'required'
        ]);

        TopupProduct::create([
            'product_name' => $request->product_name,
            'price' => $request->price,
            'details' => $request->details,
            'game_id' => $request->game_id
        ]);

        return back()->with('success', 'Topup product created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $topupProduct = TopupProduct::find($id);

        if ($topupProduct) {
            $request->validate([
                'product_name' => 'required',
                'price' => 'required',
                'details' => 'required',

            ]);

            $topupProduct->update([
                'product_name' => $request->product_name,
                'price' => $request->price,
                'details' => $request->details,
                'game_id' => $request->game_id
            ]);
            return back()->with('success', 'Topup product updated successfully');
        } else {
            return back()->with('error', 'Topup product not found');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $topupProduct = TopupProduct::find($id);

        if ($topupProduct) {
            $topupProduct->delete();
            return back()->with('success', 'Topup product deleted successfully');
        } else {
            return back()->with('error', 'Topup product not found');
        }
    }
}
