import types from './types'

export default {
  [types.GET_DISHS] (state, payload) {
    state.dishs = payload.data
  },
  [types.GET_DISH] (state, payload) {
    state.dish = payload.data
  }
}
