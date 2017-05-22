import types from './types'

export default {
  [types.GET_MINE] (state, payload) {
    state.mine = payload.data
  }
}
