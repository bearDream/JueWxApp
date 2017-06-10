import types from './types'
import Model from '../../../models/collection'

// 角色的所有请求
export default {
  /**
   * 获取收藏列表
   */
  getCollections ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_COLLECTIONS, {
        data: res.data
      })
    })
  },

  /**
   * 取消收藏
   */
  cancelCollections ({commit}, {params}) {
    return new Model().DELETE({params}).then(res => {
      commit(types.GET_COLLECTIONS, {
        data: res.data
      })
    })
  },

  /**
   * 设置收藏
   */
  setCollections ({commit}, {data}) {
    return new Model().POST({data}).then(res => {
      commit(types.GET_COLLECTIONS, {
        data: res.data
      })
    })
  }
}
