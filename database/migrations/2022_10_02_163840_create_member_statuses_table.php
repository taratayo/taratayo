<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('member_statuses', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('type');
//            $table->smallInteger('discount');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('member_statuses');
    }
};
