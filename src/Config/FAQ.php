<?php

return [

    /* Important Settings */
    'backend_faq_middlewares' => ['web'],
    'frontend_faq_middlewares' => ['web'],
    // you can change default route from sms-admin to anything you want
    'backend_faq_route_prefix' => 'FAQ',
    'frontend_faq_route_prefix' => 'FAQ',
    // SMS.ir Api Key
    'api-key' => env('SMSIR-API-KEY','Your api key'),
    // ======================================================================
    //allow user to upload private file in filemanager
    'userModel'=>'App\User',
    'multiLang'=>'faq_sampleLang'



];