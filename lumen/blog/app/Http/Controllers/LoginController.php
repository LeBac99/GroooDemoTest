<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

use App\Http\Middleware\Authenticate;

use Illuminate\Support\Facades\Auth;

use App\User;




class LoginController extends Controller

{

  public function __construct()

   {

//        $this->middleware('auth', ['only' =>
//  ['authenticate']]);

   }

   /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */

   public function postLogin(Request $request)

   {
      if(Auth::attempt(['email' => $request->email, 'password' => $request->password]) ){
               
        return "dung mat khau";
                               
                }
        return "sai mat khau";
   }

}    

?>