import types from './types'

export default {
  [types.GET_ARTICLE] (state, payload) {
    state.article = payload.data
  },
  [types.GET_ARTICLES] (state, payload) {
    state.articles = payload.data
  }
}
