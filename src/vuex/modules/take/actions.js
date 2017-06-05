import types from './types'
import Model from '../../../models/take'
import GetTakeModel from '../../../models/getTakeNum'

// 角色的所有请求
export default {
  /**
   * 发送取号请求
   */
  takeNumber ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      console.info(res.data)
      commit(types.GET_NUMBER, {
        data: res.data
      })
    })
  },

  /**
   * 获取当前号
   */
  getNumber ({commit}, {params}) {
    return new GetTakeModel().GET({params}).then(res => {
      commit(types.GET_NUMBER, {
        data: res.data
      })
    })
  }
}
