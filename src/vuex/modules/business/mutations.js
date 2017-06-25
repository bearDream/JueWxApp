import types from './types'

export default {
  [types.GET_BUSINESSS] (state, payload) {
    state.businesss = payload.data
  },
  [types.GET_BUSINESS] (state, payload) {
    state.business = payload.data
  },
  [types.GET_TOPBUSINESSS] (state, payload) {
    state.topBusinesss = payload.data
  },
  [types.GET_DISHBUSINESS] (state, payload) {
    state.dishBusinesss = payload.data
  }
}
