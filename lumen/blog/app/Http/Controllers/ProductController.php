<?php

namespace App\Http\Controllers;
use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class ProductController extends Controller
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
    public function showProducts(){
        
        return response()->json(Products::all());
    }
   
   
    //
}
