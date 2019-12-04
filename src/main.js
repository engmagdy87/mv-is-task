import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue'
import store from './store/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSearch, faStar
} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

library.add([faSearch, faStar])
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
