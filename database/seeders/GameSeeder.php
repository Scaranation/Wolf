<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $games = [
            [
                'name' => 'Valorant',
                'description' => 'Tactical first-person shooter with unique agents.',
                'image' => 'games/valorant.jpg'
            ],
            [
                'name' => 'Mobile Legends',
                'description' => 'Popular mobile MOBA game with 5v5 battles.',
                'image' => 'games/mobilelegends.jpg'
            ],
            [
                'name' => 'PUBG',
                'description' => 'Battle royale game where players fight to be the last one standing.',
                'image' => 'games/pubg.jpg'
            ],
            [
                'name' => 'Free Fire',
                'description' => 'Survival shooter game on mobile devices.',
                'image' => 'games/freefire.jpg'
            ],
            [
                'name' => 'Genshin Impact',
                'description' => 'Open-world action RPG with gacha mechanics.',
                'image' => 'games/genshinimpact.jpg'
            ],
            [
                'name' => 'Honkai Star Rail',
                'description' => 'Sci-fi turn-based RPG from miHoYo.',
                'image' => 'games/honkai.jpg'
            ],
            [
                'name' => 'Call of Duty',
                'description' => 'Popular first-person shooter franchise with various game modes.',
                'image' => 'games/cod.jpg'
            ]
        ];

        foreach ($games as $game) {
            \App\Models\Game::create($game);
        }
    }
}
