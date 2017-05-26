import types from './types'

export default {
  [types.GET_FOODS] (state, payload) {
    state.foods = payload.data
  },
  [types.GET_FOOD] (state, payload) {
    state.food = payload.data
  }
}
