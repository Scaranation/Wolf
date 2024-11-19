<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Game extends Model
{
    use HasFactory;
    use HasSlug;

    protected $fillable = ['name', 'description', 'image', 'slug'];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function topupProducts()
    {
        return $this->hasMany(TopupProduct::class);
    }

    public function jockeyProducts()
    {
        return $this->hasMany(JockeyProduct::class);
    }
}
