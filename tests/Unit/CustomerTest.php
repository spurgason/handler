<?php

namespace Tests\Unit;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Collection;
use Tests\TestCase;

class CustomerTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    /**
     * Customer has many users.
     * 
     * @return void
     */
    public function testHasManyUsers()
    {
        $userCount = rand(1,5);

        $customer = Customer::factory()
            ->has(User::factory($userCount), 'users')
            ->create();

        $this->assertTrue($customer->users->contains($customer->users->first()));

        $this->assertInstanceOf(Collection::class, $customer->users);

        $this->assertEquals($customer->users->count(), $userCount);
    }
}
