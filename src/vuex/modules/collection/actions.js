import types from './types'
import Model from '../../../models/collection'

// 角色的所有请求
export default {
  /**
   * 获取排行列表
   */
  getCollections ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_COLLECTIONS, {
        data: res.data
      })
    })
  }
}
