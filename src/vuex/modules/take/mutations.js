import types from './types'

export default {
  [types.GET_NUMBER] (state, payload) {
    state.number = payload.data
  }
}
