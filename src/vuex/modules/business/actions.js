import types from './types'
import Model from '../../../models/businessList'

// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getBusinesss ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      console.info(res.data)
      commit(types.GET_BUSINESSS, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getBusiness ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_BUSINESS, {
        data: res.data
      })
    })
  }
}
