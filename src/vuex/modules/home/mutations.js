import types from './types'

export default {
  [types.GET_HOMES] (state, payload) {
    state.homes = payload.data
  },
  [types.GET_HOME] (state, payload) {
    state.home = payload.data
  }
}
