import types from './types'

export default {
  [types.GET_ORDER] (state, payload) {
    state.order = payload.data
  },
  [types.GET_SUBMITORDER] (state, payload) {
    state.submitOrder = payload.data
  }
}
