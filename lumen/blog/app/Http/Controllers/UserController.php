<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function showIndex()
    {
        return response()->json(User::all());
    }
    public function SaveAddNew(Request $r){ 
        
        $user= new User;
        $user->name=$r->name;
        $user->email=$r->email;
        $user->password= password_hash($r->password, PASSWORD_DEFAULT);
        // $user->password=bcrypt($r->password);       
        $user->save();
        return response()->json($user);
    }
    public function showIndexUser($id){
        // dd($id);
      return response()->json(User::find($id));
    }
    public function SaveEditUser(Request $request,$id){
        $user= User::find($id);
        $user->update($request->all());
        return response()->json($user);
    }
    public function DeleteUser($id){
        $user= User::destroy($id);
        return response()->json($user);
    }
    //
}
