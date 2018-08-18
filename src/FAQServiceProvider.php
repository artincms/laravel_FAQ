<?php

namespace ArtinCMS\FAQ;

use Illuminate\Support\ServiceProvider;

class FAQServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */

    public function boot()
    {
    	// the main router
        $this->loadRoutesFrom( __DIR__.'/Routes/backend_faq_route.php');
        $this->loadRoutesFrom( __DIR__.'/Routes/frontend_faq_route.php');
	    // the main views folder
	    $this->loadViewsFrom(__DIR__ . '/Views', 'laravel_faq');
	    // the main migration folder for create sms_ir tables

	    // for publish the views into main app
	    $this->publishes([
		    __DIR__ . '/Views' => resource_path('views/vendor/laravel_faq'),
	    ]);

	    $this->publishes([
		    __DIR__ . '/Database/Migrations/' => database_path('migrations')
	    ], 'migrations');

	    // for publish the assets files into main app
	    $this->publishes([
		    __DIR__.'/assets' => public_path('vendor/laravel_faq'),
	    ], 'public');

	    // for publish the sms_ir config file to the main app config folder
	    $this->publishes([
		    __DIR__ . '/Config/FAQ.php' => config_path('laravel_faq.php'),
	    ]);
        $this->publishes([
            __DIR__ . '/Components' => resource_path('assets/js/components/laravel_faq'),
        ]);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
    	// set the main config file
	    $this->mergeConfigFrom(
		    __DIR__ . '/Config/FAQ.php', 'laravel_faq'
	    );

		// bind the FAQ Facade
	    $this->app->bind('FAQ', function () {
		    return new FAQ;
	    });
    }
}
