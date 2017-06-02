import types from './types'

export default {
  [types.GET_NUTRITIONDISHES] (state, payload) {
    state.nutritionDishes = payload.data
  },
  [types.GET_NUTRITIONDISH] (state, payload) {
    state.nutritionDish = payload.data
  }
}
