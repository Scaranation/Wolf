<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $games = Game::all();
        return inertia(
            'Admin/Game/Index',
            [
                'games' => $games
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Game/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
        ]);

        $foto = $request->file('image');
        $filename = time() . '.' . $foto->getClientOriginalExtension();
        $path = 'games/' . $filename;
        Storage::disk('public')->put($path, file_get_contents($foto));

        Game::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $path
        ]);

        return back()->with('success', 'Costume created successfully');
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
        $game = Game::find($id);

        if ($game) {
            $game->update([
                'name' => $request->name,
                'description' => $request->description,
            ]);


            $game->update([
                'name' => $request->name,
                'description' => $request->description,
            ]);

            if ($request->hasFile('image')) {
                if ($game->image) {
                    Storage::disk('public')->delete($game->image);
                }

                $foto = $request->file('image');
                $filename = uniqid() . '.' . $foto->getClientOriginalName();
                $path = 'games/' . $filename;
                Storage::disk('public')->put($path, file_get_contents($foto));
                $game->update(['image' => $path]);
            }

            return redirect()->route('admin.game.index')->with('success', 'Data Kostum berhasil diperbarui.');
        } else {
            return redirect()->route('admin.game.index')->with('error', 'Data Kostum gagal diperbarui.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $game = Game::find($id);

        if ($game) {
            // if ($game->image) {
            //     Storage::disk('public')->delete($game->image);
            // }
            $game->delete();
            return back()->with('success', 'Costume deleted successfully');
        } else {
            return back()->with('error', 'Costume not found');
        }
    }
}
