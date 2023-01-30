import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask';
import router from './routes/router.js';

Vue.use(VueMask);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
