window.Vue = require('../../vue/dist/vue.js');
window.App = require('./App.vue');
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
