<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


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

   public function postLogin(Request $r)

   {
   
        $user = User::where('email',$r->email)->first();
        $user->token = str::random(64);
        $user->save();
        return response($user);
      
   }

}    
?>