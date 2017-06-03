import types from './types'
import Model from '../../../models/random'

// 角色的所有请求
export default {
  /**
   * 获取排行列表
   */
  getRandomDishes ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_RANDOMDISHES, {
        data: res.data
      })
    })
  }
}
