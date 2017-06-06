import types from './types'

export default {
  [types.GET_DISHLIST] (state, payload) {
    state.dishList = payload.data
  },
  [types.GET_DISH] (state, payload) {
    state.dish = payload.data
  }
}
