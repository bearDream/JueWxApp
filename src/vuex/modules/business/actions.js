import types from './types'
import Model from '../../../models/businessList'
import BusinessModel from '../../../models/business'

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
  getBusiness ({commit}, {params}) {
    return new BusinessModel().GET({params}).then(res => {
      commit(types.GET_BUSINESS, {
        data: res.data
      })
    })
  }
}
