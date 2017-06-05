import types from './types'
import Model from '../../../models/evaluate'

// 评论的所有请求
export default {
  /**
   * 获取评论列表
   */
  getEvaluates ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_EVALUATES, {
        data: res.data
      })
    })
  }
}
