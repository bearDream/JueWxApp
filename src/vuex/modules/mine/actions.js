import types from './types'
import Model from '../../../models/mine'
// import storage from '@/utils/helpers/storageLite'
//
// const USERINFO = 'userinfo'
// const TOKEN = 'token'
// 角色的所有请求
export default {
  /**
   * 获取用户信息
   */
  getMineInfo ({commit}) {
    return new Model().GET().then(res => {
      // console.info(res.data)
      // storage.set(USERINFO, res.data.data)
      // storage.set(TOKEN, res.data.data.token)
      commit(types.GET_MINE, {
        data: res.data
      })
    })
  },

  /**
   * 修改数据
   */
  putMine ({commit}, {uri, data}) {
    return new Model().PUT({uri, data})
  }
}
