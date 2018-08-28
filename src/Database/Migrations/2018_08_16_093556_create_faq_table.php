<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFaqTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faq_manager', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 255);
            $table->longText('description')->nullable()->default(null);
            $table->integer('lang_id')->unsigned()->default(0);
            $table->string('lang_name', 255)->nullable()->default(null);
            $table->integer('order')->default(0);
            $table->enum('is_active', array('0','1'))->default('1');
            $table->integer('created_by')->unsigned()->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('faq_manager');
    }
}
