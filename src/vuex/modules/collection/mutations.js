import types from './types'

export default {
  [types.GET_COLLECTIONS] (state, payload) {
    state.collections = payload.data
  }
}
