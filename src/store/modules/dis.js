import {reqNavList,reqRecommend1,reqRecommend2} from '../../api'
import {
  GETNAVLIST,GETRECOMMEND
} from '../mutation-types'

const state = {
  navList:[], //导航列表
  getRecommend1:[],
  getRecommend2:{}


}

const actions =  {

  async getNavList ({commit}) {
    const result = await reqNavList()
    if (result.code === '200') {
      commit(GETNAVLIST,result.data)
    }
  },

  async getRecommend1 ({commit}) {
    const result = await reqRecommend1()
    if (result.code === '200') {
      commit(GETRECOMMEND,result.data)
    }
  },

  async getRecommend2 ({commit}) {
    const result = await reqRecommend2()
    if (result.code === '200') {
      commit(GETRECOMMEND,result.data)

    }
  }



}

const mutations = {
  //获取识物导航数据
  [GETNAVLIST] (state,result) {
    state.navList = result
  },

  //更新推荐分类的数据
  [GETRECOMMEND] (state,result) {
    if (Array.isArray(result)) {
      state.getRecommend1 = result
    } else {
      state.getRecommend2 = result
    }
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
