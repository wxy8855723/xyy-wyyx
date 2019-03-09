import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

import index from './modules/index'
import category from './modules/category'
import dis from './modules/dis'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    index,
    category,
    dis
  },
  getters
})
