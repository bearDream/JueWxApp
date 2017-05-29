import types from './types'

// 设置地理位置信息
export default {
  /**
   * 设置位置
   */
  setLocation ({commit}, {params}) {
    commit(types.GET_LATITUDE, {
      data: params.latitude
    })
    commit(types.GET_LONTITUDE, {
      data: params.lontitude
    })
  }
}
