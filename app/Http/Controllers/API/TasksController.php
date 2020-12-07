<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\repositories\TaskRepository;
use Illuminate\Http\Request;

class TasksController extends Controller
{
    public $taskRepository;

    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function index(){
        $tasks = $this->taskRepository->getAll();
        return response()->json([
            'success' => true,
            'message' => 'Tasks List',
            'data'    => $tasks
        ]);
    }

    public function show($id){
        $task = $this->taskRepository->findByID($id);
        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Tasks not found',
                'data'    => null
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message' => 'Tasks Details',
                'data'    => $task
            ]);
        }
        
    }

    public function store(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'name' => 'required',
            'description' => 'required',
            'project_id' => 'required'
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

        $task = $this->taskRepository->create($request);
        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Tasks Not Created'
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message' => 'Tasks Created Successfully.',
                'data'    => $task
            ]);
        }
        
    
    }

    public function update(Request $request, $id){
        $task = $this->taskRepository->findByID($id);
        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Tasks Not Found'
            ]);
        }
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'name' => 'required',
            'description' => 'required',
            'project_id' => 'required'
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

        $task = $this->taskRepository->edit($request, $id);
        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Tasks Not Updated'
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message' => 'Tasks Updated Successfully.',
                'data'    => $task
            ]);
        }
        
    
    }


    public function destroy($id){
        $task = $this->taskRepository->findByID($id);
        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Tasks Not Found'
            ]);
        }
        $task = $this->taskRepository->delete($id);
        if(!$task){
            return response()->json([
                'success' => false,
                'message' => 'Tasks Not Deleted'
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message' => 'Tasks Deleted Successfully.'
            ]);
        }
        
    
    }
}
