<?php

return [

    /* Important Settings */
    'backend_faq_middlewares'   => explode(',', env('FAQ_BACKEND_MIDDLEWARES', 'web')),
    'frontend_faq_middlewares'  => explode(',', env('FAQ_FRONTEND_MIDDLEWARES', 'web')),
    // you can change default route from sms-admin to anything you want
    'backend_faq_route_prefix'  => env('FAQ_BACKEND_ROUTE_PERFIX', 'FAQ'),
    'frontend_faq_route_prefix' => env('FAQ_FRONTEND_ROUTE_PERFIX', 'FAQ'),
    // ======================================================================
    //allow user to upload private file in filemanager
    'user_model'                => env('FAQ_USER_MODEL', 'App\User'),
    'multi_lang'                => env('FAQ_MULTI_LANG', 'faq_sampleLang'),


];