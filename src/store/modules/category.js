import {reqClass} from '../../api'
import {GETCLASS} from '../mutation-types'

const state = {
  allClass:{}
}

const actions = {

  async getAllClass ({commit}) {
   const result = await reqClass()
   if (result.code === 0) {
     commit(GETCLASS,result.data)
   }
  }

}

const mutations = {

  [GETCLASS] (state,result) {
    state.allClass = result
  }

}

const getters = {


}
export default {
  state,
  actions,
  mutations,
  getters
}
