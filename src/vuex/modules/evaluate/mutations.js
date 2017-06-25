import types from './types'

export default {
  [types.GET_EVALUATES] (state, payload) {
    state.evaluates = payload.data
  },
  [types.GET_SENDEVALUATES] (state, payload) {
    state.sendEvaluates = payload.data
  }
}
