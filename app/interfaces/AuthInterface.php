<?php

namespace App\interfaces;

use Illuminate\Http\Request;

interface AuthInterface{

    /**
    * checkIfAuthenticated
    * 
    * check if an user is authenticated or not by request
    * 
    * @param Request $request
    * @return bool-> true if Authenticated, false if not
    */
    public function checkIfAuthenticated(Request $request);


    /**
    * registerUser
    * 
    * registerUser an user by request
    * 
    * @param Request $request
    * @return obj user object
    */
    public function registerUser(Request $request);
    

    /**
    * findUserByEmailId
    * 
    * Find an user by Email Address
    * 
    * @param string $email
    * @return obj user object
    */
    public function findUserByEmailId($email);



}