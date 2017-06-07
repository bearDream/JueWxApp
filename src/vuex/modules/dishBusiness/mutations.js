import types from './types'

export default {
  [types.GET_DISHBUSINESS] (state, payload) {
    state.dishBusiness = payload.data
  }
}
