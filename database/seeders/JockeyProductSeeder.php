<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JockeyProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jockeyProducts = [
            [
                'product_name' => 'Joki Ranked',
                'price' => 10000,
                'details' => 'Iron 1 - Iron 3',
                'game_id' => 1
            ],
            [
                'product_name' => 'Jockey Ranked',
                'price' => 20000,
                'details' => 'Bronze 1 - Bronze 3',
                'game_id' => 1
            ],
            [
                'product_name' => 'Jockey Ranked',
                'price' => 50000,
                'details' => 'Gold 1 - Gold 3',
                'game_id' => 1
            ]
        ];

        foreach ($jockeyProducts as $jockeyProduct) {
            \App\Models\JockeyProduct::create($jockeyProduct);
        }
    }
}
