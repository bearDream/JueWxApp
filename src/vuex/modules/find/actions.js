import types from './types'
import Model from '../../../models/find'

// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getFinds ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      console.info(res.data)
      commit(types.GET_FINDS, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getFind ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_FIND, {
        data: res.data
      })
    })
  },

  /**
   * 删除
   */
  deleteFind ({commit}, {params}) {
    return new Model().DELETE({params})
  },

  /**
   * 添加数据
   */
  postFind ({commit}, {uri, data}) {
    return new Model().POST({uri, data})
  },

  /**
   * 修改数据
   */
  putFind ({commit}, {uri, data}) {
    return new Model().PUT({uri, data})
  }
}
