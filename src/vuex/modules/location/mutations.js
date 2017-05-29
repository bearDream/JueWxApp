import types from './types'

export default {
  [types.GET_LONTITUDE] (state, payload) {
    state.lontitude = payload.data
  },
  [types.GET_LATITUDE] (state, payload) {
    state.latitude = payload.data
  }
}
