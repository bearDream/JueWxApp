import types from './types'
import Model from '../../../models/home'

// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getHomes ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_HOMES, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getHome ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_HOME, {
        data: res.data
      })
    })
  },

  /**
   * 删除
   */
  deleteHome ({commit}, {params}) {
    return new Model().DELETE({params})
  },

  /**
   * 添加数据
   */
  postHome ({commit}, {uri, data}) {
    return new Model().POST({uri, data})
  },

  /**
   * 修改数据
   */
  putHome ({commit}, {uri, data}) {
    return new Model().PUT({uri, data})
  }
}
