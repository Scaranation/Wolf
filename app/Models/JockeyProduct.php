<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JockeyProduct extends Model
{
    use HasFactory;

    protected $fillable = ['product_name', 'price', 'details', 'game_id'];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
