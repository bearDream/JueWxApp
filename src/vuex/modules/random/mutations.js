import types from './types'

export default {
  [types.GET_RANDOMDISHES] (state, payload) {
    state.randomDishes = payload.data
  }
}
