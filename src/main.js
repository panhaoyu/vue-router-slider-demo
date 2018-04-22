// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import RouterSlider from 'vue-router-slider'
import RouterSliderStyle from 'vue-router-slider/style.css'

Vue.config.productionTip = false;
Vue.use(RouterSlider);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
