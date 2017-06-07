import types from './types'
import Model from '../../../models/order'

// 订单的所有请求
export default {
  /**
   * 获取文章列表
   */
  getOrder ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_ORDER, {
        data: res.data
      })
    })
  },

  /**
   * 发送提交订单请求
   */
  submitOrder ({commit}, {data}) {
    return new Model().POST({data}).then(res => {
      commit(types.GET_SUBMITORDER, {
        data: res.data
      })
    })
  }
}
