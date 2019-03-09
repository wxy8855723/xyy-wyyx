/*
包含多个请求方法的模块
 */
import ajax from './ajax'
export const reqHomeCategory = () => ajax('/home')

export const reqClass = () => ajax('/classify')

export const reqGoods = () => ajax('/goods')


