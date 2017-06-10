import types from './types'

export default {
  [types.GET_SEARCHS] (state, payload) {
    state.searchs = payload.data
  },
  [types.GET_SEARCH] (state, payload) {
    state.search = payload.data
  }
}
