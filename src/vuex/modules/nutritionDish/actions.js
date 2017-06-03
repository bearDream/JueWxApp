import types from './types'
import Model from '../../../models/nutritionDish'

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
  getNutritionDish ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_NUTRITIONDISH, {
        data: res.data
      })
    })
  }
}
