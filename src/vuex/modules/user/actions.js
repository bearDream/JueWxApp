import types from './types'
import Model from '../../../models/user'
// import storage from '@/utils/helpers/storageLite'
//
// const USERINFO = 'userinfo'
// const TOKEN = 'token'
// 角色的所有请求
export default {
  /**
   * 获取用户信息
   */
  getUserInfo ({commit}) {
    return new Model().GET().then(res => {
      // console.info(res.data)
      // storage.set(USERINFO, res.data.data)
      // storage.set(TOKEN, res.data.data.token)
      commit(types.GET_USER, {
        data: res.data
      })
    })
  },

  /**
   * 修改数据
   */
  putUser ({commit}, {uri, data}) {
    return new Model().PUT({uri, data})
  }
}
