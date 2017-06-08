import types from './types'
import Model from '../../../models/login'
//
// 登录的所有请求
export default {
  /**
   * 登录请求
   */
  login ({commit}) {
    return new Model().GET().then(res => {
      commit(types.GET_LOGININFO, {
        data: res.data
      })
    })
  }
}
