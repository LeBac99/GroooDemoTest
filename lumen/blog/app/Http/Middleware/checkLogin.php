<?php

namespace App\Http\Middleware;

use Closure;
use App\User;

use Illuminate\Support\Facades\Hash;


class CheckLogin
{ 
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        
        $user = User::where('email',$request->input('email'))->first();

        if($user && Hash::check($request->input('password'), $user->password)) {
            return $next($request);
        }
        return response(['error'=>['Unauthorized.']], 401);
    }
}
/*
Middleware : chek auth
true-> next request =
- Controller : generate token reuturn user + token
false -> return login fail

*/