window.Vue = require('../../../public/vendor/laravel_gallery_system/packages/vue/dist/vue.js');
Vue.component('laravel_gallery_system', require('./components/laravel_likeable_system/laravel_likeable_system.vue'));
window.$ = require('../../../public/vendor/laravel_gallery_system/packages/jquery/jquery-3.3.1');

window.onload = function () {
    const likeable = new Vue({
        el: '#likeable',
    });
}