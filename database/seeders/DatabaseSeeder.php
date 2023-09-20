<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)
            ->for(Customer::factory())
            ->create();

        User::factory()
            ->for(Customer::factory())
            ->create([
                'name' => 'Admin',
                'email' => 'admin@example.com',
            ]);
    }
}
