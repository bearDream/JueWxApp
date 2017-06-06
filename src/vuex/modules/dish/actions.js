import types from './types'
import Model from '../../../models/dishList'
import DishModel from '../../../models/dish'

// 菜品的所有请求
export default {
  /**
   * 获取菜品页面的商家列表
   */
  getDishList ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_DISHLIST, {
        data: res.data
      })
    })
  },

  /**
   * 获取单个菜品详情
   */
  getDish ({commit}, {uri}) {
    return new DishModel().GET({uri}).then(res => {
      commit(types.GET_DISH, {
        data: res.data
      })
    })
  }
}
