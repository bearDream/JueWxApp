import types from './types'
import Model from '../../../models/article'

// 文章的所有请求
export default {
  /**
   * 获取文章列表
   */
  getArticles ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_ARTICLES, {
        data: res.data
      })
    })
  },

  /**
   * 获取文章详情
   */
  getArticle ({commit}, {params}) {
    return new Model().GET({params}).then(res => {
      commit(types.GET_ARTICLE, {
        data: res.data
      })
    })
  }
}
