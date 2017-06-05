import types from './types'
import Model from '../../../models/dishList'

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
  }
}
