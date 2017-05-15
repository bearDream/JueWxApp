import types from './types'

export default {
  [types.GET_BUSINESSES] (state, payload) {
    state.businesses = payload.data
  },
  [types.GET_BUSINESS] (state, payload) {
    state.business = payload.data
  }
}
