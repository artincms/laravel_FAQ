<?php
Route::group(['prefix' => config('laravel_faq.backend_faq_route_prefix'), 'namespace' => 'ArtinCMS\FAQ\Controllers', 'middleware' => config('laravel_faq.backend_faq_middlewares')], function () {
    Route::get('manageFaq', ['as' => 'FAQ.manageFaq', 'uses' => 'FaqController@manageFaq']);
    Route::post('getFaq', ['as' => 'FAQ.getFaq', 'uses' => 'FaqController@getFaq']);
    Route::post('saveFaq', ['as' => 'FAQ.saveFaq', 'uses' => 'FaqController@saveFaq']);
    Route::post('getEditFaqForm', ['as' => 'FAQ.getEditFaqForm', 'uses' => 'FaqController@getEditFaqForm']);
    Route::post('editFaq', ['as' => 'FAQ.editFaq', 'uses' => 'FaqController@editFaq']);
    Route::post('trashFaq', ['as' => 'FAQ.trashFaq', 'uses' => 'FaqController@trashFaq']);
    Route::post('setFaqStatus', ['as' => 'FAQ.setFaqStatus', 'uses' => 'FaqController@setFaqStatus']);

    //-------------------------------------------autoComplete----------------------------------------------------------------------------------
    Route::post('saveOrderFaqForm', ['as' => 'FAQ.saveOrderFaqForm', 'uses' => 'FaqController@saveOrderFaqForm']);
});