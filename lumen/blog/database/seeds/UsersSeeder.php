<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
    $users= [

        	[
        		'name'=>'Le van Bac',
        		'email'=>'baclvph06267@fpt.edu.vn',
                'avatar'=>'avatar.jpg',
        		'password'=>Hash::make('123456'),
               
        	],
        	
        ];
        DB::table('users')->insert($users);
    }
}