# laravel_FAQ
laravel FAQ Manager  is a laravel package for manage common answer and question.

# Requiments 
<ul>
<li>
PHP >= 7.0
</li>
<li>
Laravel 5.5|5.6
</li>
</ul>

# Installation
<h3>Quick installation</h3> 
<div class="highlight highlight-source-shell"><pre>composer require artincms/laravel_faq</pre></div>
<h6>publish vendor</h6>
 <div class="highlight highlight-text-html-php"><pre>
 $ php artisan vendor:publish --provider="ArtinCMS\FAQ\FAQServiceProvider" --force
</pre> </div>
this package use laravel tagable system for use this package you should 
publish laravel tagable system with bellow command
<div class="highlight highlight-text-html-php"><pre>
 $ php artisan vendor:publish --provider="ArtinCMS\LTS\LTSServiceProvider" --force
</pre> </div>
<h6>migrate tabales</h6>
<div class="highlight highlight-text-html-php"><pre>
$ php artisan migrate
</pre> </div>

<h1>usage</h1> 
<h3>Frontend</h3>
this package use vue js in frontend . for use this package at first you should 
add bellow javascript 

```apple js
    <script src="{{ asset('vendor/laravel_faq/components/faq_b_4.min.js') }}" defer></script>

```

and for create html element you can use bellow html code : 
```apple js
<div id="faq_temp">
    <laravel_faq lang_id=1 :rtl=true></laravel_faq>
</div>
```
that lang_id is id of language you use and rtl is true or false that true meen 
direction of site is rtl and false meen direction of site is ltr



