<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TopupProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $topupProducts = [
            [
                'product_name' => 'Valorant Point',
                'price' => 10000,
                'details' => '10k topup',
                'game_id' => 1
            ],
            [
                'product_name' => 'Valorant Point',
                'price' => 20000,
                'details' => '20k topup',
                'game_id' => 1
            ],
            [
                'product_name' => 'Valorant Point',
                'price' => 50000,
                'details' => '50k topup',
                'game_id' => 1
            ],
        ];

        foreach ($topupProducts as $topupProduct) {
            \App\Models\TopupProduct::create($topupProduct);
        }
    }
}
