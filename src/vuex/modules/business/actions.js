import types from './types'
import Model from '../../../models/dish'

// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getBusinessList ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      console.info(res.data)
      commit(types.GET_BUSINESSES, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getBusiness ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_BUSINESS, {
        data: res.data
      })
    })
  },

  /**
   * 删除
   */
  deleteBusiness ({commit}, {params}) {
    return new Model().DELETE({params})
  },

  /**
   * 添加数据
   */
  postBusiness ({commit}, {uri, data}) {
    return new Model().POST({uri, data})
  },

  /**
   * 修改数据
   */
  putBusiness ({commit}, {uri, data}) {
    return new Model().PUT({uri, data})
  }
}
