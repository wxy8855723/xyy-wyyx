/*
包含多个请求方法的模块
 */
const BASE = '/api'
import ajax from './ajax'
export const reqHomeCategory = () => ajax('/home')

export const reqClass = () => ajax('/classify')

export const reqGoods = () => ajax('/goods')

//获取识物导航列表
export const reqNavList = () => ajax(BASE + '/topic/v1/find/getTabs.json')

//获取识物推荐数据
export const reqRecommend1 = () => ajax(BASE + '/topic/v1/find/recManual.json')

export const reqRecommend2 = () => ajax(BASE + '/topic/v1/find/recAuto.json')

export const reqSearchList = (searchName) => ajax(BASE + '/xhr/search/searchAutoComplete.json?keywordPrefix=' + searchName)

//获取识物晒单数据
export const reqShaidanHeader = () => ajax(BASE + '/topic/v1/look/getCollection.json?id=26')

export const reqShaidanContent = () => ajax(BASE + '/topic/v1/look/getList.json?page=1&size=20&type=1')

//获取短信验证码
export const reqSendCode = (phone) => ajax(BASE + '/sendcode',{phone})
