<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\repositories\AuthRepository;

class AuthAPIController extends Controller{

    public $authRepository;

    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }


    public function createToken($user){
        $accessToken = $user->createToken('authToken')->accessToken;
        return $accessToken;
    }


    public function login(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'email' => 'required|string',
            'password' => 'required|string'
        ],[
            'email.required' => 'Please enter email',
            'password.required' => 'Please enter password'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        if($this->authRepository->checkIfAuthenticated($request)){
            $user = $this->authRepository->findUserByEmailId($request->email);
            $accessToken = $this->createToken($user);
            return response()->json([
                'success' => true,
                'message' => "Logged in successfully !!",
                'user' => $user,
                'access_token' => $accessToken
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => "Invalid Email or Password!!",
                'errors' => null
            ]);
        }
    }

    public function register(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'name' => 'required|string|min:3|max:30',
            'email' => 'required|email|max:100|unique:users',
            'password' => 'required|confirmed|min:8'
        ],[
            'name.required' => 'Please enter name',
            'email.required' => 'Please enter email',
            'email.unique' => 'Your email is already register. Please login or create another!!',
            'password.required' => 'Please enter password'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        $user = $this->authRepository->registerUser($request);
        if(!is_null($user)){
            $user = $this->authRepository->findUserByEmailId($request->email);
            $accessToken = $this->createToken($user);
            return response()->json([
                'success' => true,
                'message' => "User created successfully !!",
                'user' => $user,
                'access_token' => $accessToken
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => "User not created!!",
                'errors' => null
            ]);
        }
    }




}
