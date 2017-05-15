import types from './types'
import Model from '../../../models/dish'

// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getDishs ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      console.info(res.data)
      commit(types.GET_DISHS, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getDish ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_DISH, {
        data: res.data
      })
    })
  },

  /**
   * 删除
   */
  deleteDish ({commit}, {params}) {
    return new Model().DELETE({params})
  },

  /**
   * 添加数据
   */
  postDish ({commit}, {uri, data}) {
    return new Model().POST({uri, data})
  },

  /**
   * 修改数据
   */
  putDish ({commit}, {uri, data}) {
    return new Model().PUT({uri, data})
  }
}
