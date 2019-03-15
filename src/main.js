import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible/flexible'

import App from './app'
import store from './store'
import router from './router'

import './mock/mockServer'

import loading from '../static/loading.gif'

Vue.use(VueLazyload,{
  preLoad:1.3,
  loading
})

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
