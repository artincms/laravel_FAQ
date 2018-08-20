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
this package use laravel taggable system for use this package you should 
publish laravel taggable system with bellow command
<div class="highlight highlight-text-html-php"><pre>
 $ php artisan vendor:publish --provider="ArtinCMS\LTS\LTSServiceProvider" --force
</pre> </div>
<h6>migrate tabales</h6>
<div class="highlight highlight-text-html-php"><pre>
$ php artisan migrate
</pre> </div>

<h1>usage</h1> 
for use this package in frontend of site you can use below 
helper function 
<div class="highlight highlight-text-html-php"><pre>
createTemplate($lang_id)
</pre> </div>
that $lang_id is your language id that use .

