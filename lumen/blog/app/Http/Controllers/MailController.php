<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MyEmail;
class MailController extends Controller
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
 
        // return "ok";
    public function mail(){
       $details = [
            'name' => "Le Van Bac",
            'code' => "Mhkl",
            
        ];
        // dd(new MyEmail($details));
        Mail::to('baclvph06267@fpt.edu.vn')->send(new MyEmail($details));
        return "E-mail has been sent Successfully"; 
    }
       
}
