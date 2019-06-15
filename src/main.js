import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import router from './routes/router'
import store from './store/index'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Router)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
