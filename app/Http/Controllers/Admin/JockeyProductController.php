<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JockeyProduct;
use Illuminate\Http\Request;

class JockeyProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jockeyProducts = JockeyProduct::with('game')->get();
        return inertia(
            'Admin/JockeyProduct/Index',
            [
                'jockeyProducts' => $jockeyProducts
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/JockeyProduct/Create');
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

        JockeyProduct::create([
            'product_name' => $request->product_name,
            'price' => $request->price,
            'details' => $request->details,
            'game_id' => $request->game_id
        ]);

        return back()->with('success', 'Pre-order created successfully');
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
        $jockey = JockeyProduct::find($id);

        if ($jockey) {
            $request->validate([
                'product_name' => 'required',
                'price' => 'required',
                'details' => 'required',

            ]);

            $jockey->update([
                'product_name' => $request->product_name,
                'price' => $request->price,
                'details' => $request->details,
                'game_id' => $request->game_id
            ]);
            return back()->with('success', 'Pre-order updated successfully');
        } else {
            return back()->with('error', 'Pre-order  not found');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $jockey = JockeyProduct::find($id);

        if ($jockey) {
            $jockey->delete();
            return back()->with('success', 'Pre-order deleted successfully');
        } else {
            return back()->with('error', 'Pre-order not found');
        }
    }
}
