import types from './types'
import Model from '../../../models/search'

// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getSearchs ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_SEARCHS, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getSearch ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_SEARCH, {
        data: res.data
      })
    })
  }
}
