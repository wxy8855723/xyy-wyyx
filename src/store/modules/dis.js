import {reqNavList,reqRecommend1,reqRecommend2,reqShaidanHeader,reqShaidanContent} from '../../api'
import {
  GETNAVLIST,GETRECOMMEND1,GETRECOMMEND2,GETSHAIDANHEADER,GETSHAIDANCONTENT
} from '../mutation-types'

const state = {
  navList:[], //导航列表
  getRecommend1:[],
  getRecommend2:{},
  shaidanheader:{}
}

const actions =  {

  async getNavList ({commit}) {
    const result = await reqNavList()
    if (result.code === '200') {
      commit(GETNAVLIST,result.data)
    }
  },
  /*
  推荐
   */
  async getRecommend1 ({commit}) {
    const result = await reqRecommend1()
    if (result.code === '200') {
      commit(GETRECOMMEND1,result.data)
    }
  },

  async getRecommend2 ({commit}) {
    const result = await reqRecommend2()
    if (result.code === '200') {
      commit(GETRECOMMEND2,result.data)

    }
  },
  /*
  晒单
   */
  async getShaidanHeader ({commit}) {
    const result = await reqShaidanHeader()
    if (result.code === '200') {
      commit(GETSHAIDANHEADER,result.data)

    }
  }

}

const mutations = {
  //获取识物导航数据
  [GETNAVLIST] (state,result) {
    state.navList = result
  },

  //更新推荐分类的数据1
  [GETRECOMMEND1] (state,result) {
      state.getRecommend1 = result
  },

  //更新推荐分类的数据2
  [GETRECOMMEND2] (state,result) {
      state.getRecommend2 = result
  },

  //晒单头部
  [GETSHAIDANHEADER] (state,result) {
    state.shaidanheader = result
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
