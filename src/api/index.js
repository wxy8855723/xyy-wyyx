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


