import types from './types'

export default {
  [types.GET_RANKINGS] (state, payload) {
    state.rankings = payload.data
  },
  [types.GET_RANKING] (state, payload) {
    state.ranking = payload.data
  }
}
