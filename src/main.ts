import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// import axios from './plugins/axios';
import BootstrapVue from 'bootstrap-vue';

// Vue.config.debug = true;
(Vue as any).config.devtools = true;
(Vue as any).config.productionTip = false;
(Vue as any).config.silent = false;
(Vue as any).config.performance = true;

// (Vue as any).prototype.$http = axios;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
