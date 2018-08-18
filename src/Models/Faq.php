<?php

namespace ArtinCMS\FAQ\Models;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $table = 'faq_manager';
    public function user()
    {
        return $this->belongsTo(config('laravel_tagable.userModel'), 'created_by');
    }

    public function tags()
    {
        return $this->morphToMany('ArtinCMS\LTS\Models\Tag' , 'taggable','lts_taggables','taggable_id','tag_id')->withPivot('type')->withTimestamps() ;
    }

}
