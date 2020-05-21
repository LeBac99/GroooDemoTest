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
$router->group(['prefix'=>'api'],function($router){
    $router->get('user','UserController@showIndex');
    $router->post('user','UserController@Search');
    $router->post('user/add-user','UserController@SaveAddNew');
 
    $router->get('user/{id}','UserController@showIndexUser');
    $router->put('user/{id}','UserController@SaveEditUser');
    $router->delete('user/{id}','UserController@DeleteUser');

    $router->post('login','UserController@login');
    //product
    $router->get('products','ProductController@showProducts');
    //login
    $router->post('cp-login','LoginController@postLogin');
});
