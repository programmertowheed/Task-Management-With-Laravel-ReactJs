<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /**
    * function tasks it return tasks list under project
    * 
    * @return tasks
    */
    public function tasks(){
        return $this->hasMany(Task::class);
    }
}
