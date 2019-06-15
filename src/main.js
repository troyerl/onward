import Vue from 'vue'

import App from './App.vue'
// import './assets/scss/app.scss'

Vue.config.productionTip = false

import router from './routes/router'
import store from './store/index'

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
