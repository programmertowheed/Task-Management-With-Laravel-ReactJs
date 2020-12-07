<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /**
    * function project it return project details under task
    * 
    * @return obj project
    */
    public function project(){
        return $this->belongsTo(Project::class);
    }
}
