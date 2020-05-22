<?php

use Illuminate\Database\Seeder;

class CategoresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cates = [
        	['name' => 'Thể thao'],
        	['name' => 'Văn hóa'],
        	['name' => 'Giáo dục'],
        	['name' => 'Chính trị'],
        	['name' => 'Thời sự'],
        	['name' => 'Sức khỏe'],
        	['name' => 'Tôn giáo']
        ];
        DB::table('categories')->insert($cates);
        
    
    }
}
