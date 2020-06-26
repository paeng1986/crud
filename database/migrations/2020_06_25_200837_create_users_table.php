<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string("name");
            $table->string("email")->unique();
            $table->string("password");
            $table->integer("level");
            $table->timestamps();
        });

        DB::table("users")->insert([
            "name" => "Rafael Mirasol",
            "email" => "admincrud@gmail.com",
            "password" => password_hash("r00tadmin123", PASSWORD_DEFAULT),
            "level" => 0,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);
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
}
