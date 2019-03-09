import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible/flexible'

import App from './app'
import store from './store'
import router from './router'

import './mock/mockServer'

Vue.use(VueLazyload,{
  loading:'static/loading.gif'
})

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
