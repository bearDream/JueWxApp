import types from './types'

export default {
  [types.GET_USER] (state, payload) {
    state.user = payload.data
  }
}
