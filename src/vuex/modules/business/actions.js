import types from './types'
import Model from '../../../models/businessList'
import TopModel from '../../../models/topBusinessList'
import BusinessModel from '../../../models/business'
import DishModel from '../../../models/queryDishBusinessList'

// 角色的所有请求
export default {
  /**
   * 获取取号页面的商家列表
   */
  getBusinesss ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_BUSINESSS, {
        data: res.data
      })
    })
  },
  /**
   * 根据菜品id查询会该菜的商家
   */
  getDishBusinesss ({commit}, {params}) {
    return new DishModel().GET({params}).then(res => {
      commit(types.GET_DISHBUSINESS, {
        data: res.data
      })
    })
  },

  /**
   * 获取一级页面的商家列表
   */
  getTopBusinesss ({commit}, {params}) {
    return new TopModel().GET({params}).then(res => {
      commit(types.GET_TOPBUSINESSS, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getBusiness ({commit}, {params}) {
    return new BusinessModel().GET({params}).then(res => {
      commit(types.GET_BUSINESS, {
        data: res.data
      })
    })
  }
}
