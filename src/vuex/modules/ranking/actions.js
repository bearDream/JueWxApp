import types from './types'
import Model from '../../../models/ranking'
// import storage from '@/utils/helpers/storageLite'
//
// const USERINFO = 'userinfo'
// const TOKEN = 'token'
// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getRankings ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      console.info(res.data)
      commit(types.GET_RANKINGS, {
        data: res.data
      })
    })
  },

  /**
   * 获取详情
   */
  getRanking ({commit}, {uri}) {
    return new Model().GET({uri}).then(res => {
      commit(types.GET_RANKING, {
        data: res.data
      })
    })
  },

  /**
   * 删除
   */
  deleteRanking ({commit}, {params}) {
    return new Model().DELETE({params})
  },

  /**
   * 添加数据
   */
  postRanking ({commit}, {uri, data}) {
    return new Model().POST({uri, data})
  },

  /**
   * 修改数据
   */
  putRanking ({commit}, {uri, data}) {
    return new Model().PUT({uri, data})
  }
}
