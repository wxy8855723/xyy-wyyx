import {GETGoods,GETHOMEPAGE,GETHOT,GETSHOUYE} from '../mutation-types'
import {reqGoods,reqHomeCategory} from '../../api'

const state = {
  goodsList:[],
  homePage:{}, //首页分类
  hot:[],//热门分类
  shouye:{}

}

const actions = {

  async getGoods ({commit}) {
    const result = await reqGoods()
    if (result.code === 0) {
      commit(GETGoods,result.data)
    }
  },

  async getHomePage ({commit}) {
    const result = await reqHomeCategory()
    if (result.code === 0) {
      const {kingKongList} = result.data.kingKongModule
      commit(GETHOMEPAGE,kingKongList)
    }
  },

  async getHot ({commit}) {
    const result = await reqHomeCategory()
    if (result.code === 0) {
      const {sceneLightShoppingGuideModule} = result.data
      commit(GETHOT,sceneLightShoppingGuideModule)
    }
  },

  async getShouye ({commit}) {
    const result = await reqHomeCategory()
    if (result.code === 0) {
      commit(GETSHOUYE,result.data)
    }
  },


}

const mutations = {
 [GETGoods] (state,result) {
  state.goodsList = result
 },

 [GETHOMEPAGE] (state,result) {
   state.homePage = result
 },

 [GETHOT] (state,result) {
   state.hot = result
 },

 [GETSHOUYE] (state,result) {
   state.shouye = result
 }

}

const getters = {
  navName (state) {
    return state.goodsList.map( item => item.name )
  },

  personalShop3arr (state) {
    let {personalShop} = state.shouye
    if (personalShop) {
      let smallArr = []
      const arr = []
      personalShop.forEach( (item,index) => {
        if (smallArr.length === 0) arr.push(smallArr)
        smallArr.push(item)
        if (smallArr.length === 3) smallArr = []
      })
      return arr
    }
  }


}

export default {
  state,
  actions,
  mutations,
  getters
}
