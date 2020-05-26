<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->get('foo', function () {
    return 'Hello World';
});
$router->group(['prefix'=>'api'],function($router){
    $router->get('user','UserController@showIndex');
    $router->post('user/search','UserController@Search');
    $router->post('user/add-user','UserController@SaveAddNew');
 
    $router->get('user/{id}','UserController@showIndexUser');
    $router->put('user/{id}','UserController@SaveEditUser');
    $router->delete('user/{id}','UserController@DeleteUser');

    $router->post('login','UserController@login');
    //product
    $router->get('products','ProductController@showProducts');
    //mail
    $router->get('mail','MailController@mail');
    //password
    $router->post('password','UserController@password');
    $router->get('save-password/{token}','UserController@getpassword');
    $router->put('save-password/{token}','UserController@savepassword');
    //login
    $router->post('cp-login',['middleware'=>'checkLogin','uses'=>'LoginController@postLogin']);   
});


