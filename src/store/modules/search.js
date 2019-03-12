import {reqSearchList} from '../../api'
import {GETSEARCHLIST} from '../mutation-types'
const state = {
  searchList:[]
}

const actions = {

  async getSearchList ({commit},searchName) {
    const result = await reqSearchList(searchName)
    if (result.code === '200') {
      commit(GETSEARCHLIST,result.data)
    }
  }
}

const mutations = {

  [GETSEARCHLIST] (state,result) {
    state.searchList = result
  }
}

export default {
  state,
  actions,
  mutations
}
