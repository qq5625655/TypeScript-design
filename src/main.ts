import Vue from 'vue';
import App from '../example/App.vue';
import router from './router';
import store from './store';
import 'highlight.js/styles/color-brewer.css';
// import './styles/common/style.css';
import demoBlock from '../example/views/demoBlock.vue';

import packages from './components/index';
import '../src/styles/index.less';
Vue.use(packages);
Vue.component('demo-block', demoBlock);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
