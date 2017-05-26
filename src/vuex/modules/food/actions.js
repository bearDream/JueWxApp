import types from './types'
import Model from '../../../models/food'
// import storage from '@/utils/helpers/storageLite'
//
// const USERINFO = 'userinfo'
// const TOKEN = 'token'
// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getFoods ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      console.info(res.data)
      commit(types.GET_FOODS, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getFood ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_FOOD, {
        data: res.data
      })
    })
  },

  /**
   * 删除
   */
  deleteFood ({commit}, {params}) {
    return new Model().DELETE({params})
  },

  /**
   * 添加数据
   */
  postFood ({commit}, {uri, data}) {
    return new Model().POST({uri, data})
  },

  /**
   * 修改数据
   */
  putFood ({commit}, {uri, data}) {
    return new Model().PUT({uri, data})
  }
}
