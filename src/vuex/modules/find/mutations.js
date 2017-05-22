import types from './types'

export default {
  [types.GET_FINDS] (state, payload) {
    state.finds = payload.data
  },
  [types.GET_FIND] (state, payload) {
    state.find = payload.data
  }
}
