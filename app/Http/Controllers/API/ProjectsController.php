<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\repositories\ProjectRepository;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public $projectRepository;

    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    public function index(){
        $projects = $this->projectRepository->getAll();
        return response()->json([
            'success' => true,
            'message' => 'Projects List',
            'data'    => $projects
        ]);
    }

    public function show($id){
        $project = $this->projectRepository->findByID($id);
        if(is_null($project)){
            return response()->json([
                'success' => false,
                'message' => 'Project not found',
                'data'    => null
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message' => 'Project Details',
                'data'    => $project
            ]);
        }
        
    }

    public function store(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'name' => 'required',
            'description' => 'required',
            'user_id' => 'required'
        ],[
            'name.required' => 'Please enter a name!!',
            'description.required' => 'Please enter a description!!'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        $project = $this->projectRepository->create($request);
        if(is_null($project)){
            return response()->json([
                'success' => false,
                'message' => 'Project Not Created'
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message' => 'Project Created Successfully.',
                'data'    => $project
            ]);
        }
        
    
    }

    public function update(Request $request, $id){
        $project = $this->projectRepository->findByID($id);
        if(is_null($project)){
            return response()->json([
                'success' => false,
                'message' => 'Project Not Found'
            ]);
        }
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'name' => 'required',
            'description' => 'required',
            'user_id' => 'required'
        ],[
            'name.required' => 'Please enter a name!!',
            'description.required' => 'Please enter a description!!'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        $project = $this->projectRepository->edit($request, $id);
        if(is_null($project)){
            return response()->json([
                'success' => false,
                'message' => 'Projects Not Updated'
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message' => 'Projects Updated Successfully.',
                'data'    => $project
            ]);
        }
        
    
    }


    public function destroy($id){
        $project = $this->projectRepository->findByID($id);
        if(is_null($project)){
            return response()->json([
                'success' => false,
                'message' => 'Project Not Found'
            ]);
        }
        $project = $this->projectRepository->delete($id);
        if(!$project){
            return response()->json([
                'success' => false,
                'message' => 'Projects Not Deleted'
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message' => 'Projects Deleted Successfully.'
            ]);
        }
        
    
    }


}




