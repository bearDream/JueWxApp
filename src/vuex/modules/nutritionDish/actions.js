import types from './types'
import Model from '../../../models/nutritionDish'
import BusinessModel from '../../../models/business'

// 角色的所有请求
export default {
  /**
   * 获取排行列表
   */
  getNutritionDishes ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_NUTRITIONDISHES, {
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
