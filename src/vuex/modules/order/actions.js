import types from './types'
import Model from '../../../models/order'

// 订单的所有请求
export default {
  /**
   * 根据prepayId获取一个订单信息
   */
  getOrder ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_ORDER, {
        data: res.data
      })
    })
  },

  /**
   * 根据orderId获取一个订单信息
   */
  getOrderInfo ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
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
