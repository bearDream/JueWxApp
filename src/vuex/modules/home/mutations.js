import types from './types'

export default {
  [types.GET_HOMES] (state, payload) {
    state.hoems = payload.data
  },
  [types.GET_HOME] (state, payload) {
    state.home = payload.data
  }
}
