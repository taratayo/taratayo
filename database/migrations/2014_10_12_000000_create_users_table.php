<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\MemberStatus;
return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
//            $table->integer('street_address_id');
//            $table->foreignIdFor(MemberStatus::class);
            $table->string('name');
//            $table->string('middle_name')->nullable();
//            $table->string('last_name')->nullable();
//            $table->date('birth_of_date');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
           // $table->integer('phone_number');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
