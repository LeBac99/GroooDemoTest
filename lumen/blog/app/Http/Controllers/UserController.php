<?php

namespace App\Http\Controllers;
use App\User;
use App\Restart_passwords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
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
        $test= $request->email;
        if(!$email){
            return response(['error'=>['Email không tồn tại!.']], 401);
        }
        $permitted_chars ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $code= substr(str_shuffle($permitted_chars), 0, 30);
        $checkemail= Restart_passwords::where('email',$email->email)->get();
        if(count($checkemail) != 1 ){
            $ressetpassword= new Restart_passwords();
            $ressetpassword->email=$test;
            $ressetpassword->token= $code;
            $ressetpassword->save();
            
        }
        foreach ($checkemail as $mail) {
            $mail->token=$code;
            $mail->save();
        } 
        
        $url= "http://localhost:4200/ressetpassword/$code";
        // dd($url);
        $details=[
            'url'=>$url,
        ];
        Mail::to($test)->send(new MyEmail($details));
        // return "ok"; 
       return response()->json($code);
    }
    public function getpassword($token){
        $email= Restart_passwords::where('token',$token)->first();
        $user= User::where('email',$email->email)->first();
        return response()->json($user);
    }
    public function savepassword(Request $request,$token){
        $user= User::find($token);
        $user->password= password_hash($request->password, PASSWORD_DEFAULT);
        $user->save();
        return response(['thanh cong']);
    }

    //
}
