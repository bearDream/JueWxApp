import types from './types'
import Model from '../../../models/dishBusiness'

// 角色的所有请求
export default {
  /**
   * 获取取号页面的商家列表
   */
  getDishBusinesss ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_DISHBUSINESS, {
        data: res.data
      })
    })
  }
}
