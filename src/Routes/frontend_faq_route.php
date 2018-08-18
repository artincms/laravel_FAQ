<?php
Route::group(['prefix' => config('laravel_faq.frontend_faq_route_prefix'), 'namespace' => 'ArtinCMS\FAQ\Controllers', 'middleware' => config('laravel_faq.frontend_faq_middlewares')], function () {
    Route::post('getFaqFront', ['as' => 'FAQ.getFaqFront', 'uses' => 'FaqController@getFaqFront']);
});