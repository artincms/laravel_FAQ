<?php

namespace ArtinCMS\FAQ\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\LaraveTagablesSystem;

class Faq extends Model
{
    use LaraveTagablesSystem;
    protected $table = 'faq_manager';
    public function user()
    {
        return $this->belongsTo(config('laravel_tagable.userModel'), 'created_by');
    }

}
