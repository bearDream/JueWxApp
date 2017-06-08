import types from './types'

export default {
  [types.GET_LOGININFO] (state, payload) {
    state.loginInfo = payload.data
  }
}
