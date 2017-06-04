import types from './types'
import Model from '../../../models/businessList'
import TopModel from '../../../models/topBusinessList'
import BusinessModel from '../../../models/business'

// 角色的所有请求
export default {
  /**
   * 获取取号页面的商家列表
   */
  getBusinesss ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_BUSINESSS, {
        data: res.data
      })
    })
  },

  /**
   * 获取一级页面的商家列表
   */
  getTopBusinesss ({commit}, {params}) {
    return new TopModel().GET({params}).then(res => {
      commit(types.GET_TOPBUSINESSS, {
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
