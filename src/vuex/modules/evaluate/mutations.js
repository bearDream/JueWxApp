import types from './types'

export default {
  [types.GET_EVALUATES] (state, payload) {
    state.evaluates = payload.data
  }
}
