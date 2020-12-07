<?php

namespace App\repositories;
use App\interfaces\CrudInterface;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectRepository implements CrudInterface{
    
    
    public function getAll(){
        $projects = Project::withCount('tasks')->with('tasks')->orderBy('id','desc')->get();
        return $projects;
    }

    public function findByID($id){
        $project = Project::with(
            array('tasks'=> function($query) {
                $query->orderBy('id', 'desc');
            })
         )->find($id);
        return $project;
    }

    public function create(Request $request){
        $project = new Project();
        $project->name = $request->name;
        $project->description = $request->description;
        $project->user_id = 1;
        $project->save();
        return $project;
    }


    public function edit(Request $request, $id){
        $project = $this->findByID($id);
        $project->name = $request->name;
        $project->description = $request->description;
        $project->user_id = $request->user_id;
        $project->status = $request->status;
        $project->save();
        return $project;
    }


    public function delete($id){
        $project = $this->findByID($id);
        if($project->delete()){
            return true;
        }else{
            return false;
        }
        
    }
}
