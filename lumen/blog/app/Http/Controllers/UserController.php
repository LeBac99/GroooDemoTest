<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\MyEmail;
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

    public function showIndex(Request $request)
    {

        return response()->json(User::all());
    }
    public function Search(Request $request){
        if (!$request->has('key') || empty($request->key)) {
            
            $users = User::all();

        } else {
            $kw = $request->key;
            $users = User::where('name', 'like', "%$kw%")
                ->paginate(5);
            $users->withPath("?keyword=$kw");
            
        }
        return response()->json($users);
        
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
    public function login(){
        
       return response()->json(User::all()); 
    }
    public function DeleteUser($id){
        $user= User::destroy($id);
        return response()->json($user);
    }
    public function password(Request $request){
        $email= User::where('email',$request->email)->first();
        $details="ok";
        $test= $email->email;
        // return response($test);
        
        Mail::to($test)->send(new MyEmail($details));
        return response($email);
        
        // return response(['1']);
    }
    public function savePassword(){
        this.password;
    }
    //
}
