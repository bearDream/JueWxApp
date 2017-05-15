import storage from './helpers/storageLite'

const USERINFO = 'userinfo'
const TOKEN = 'token'

export default {
  name: 'auth',

  /**
   * 获取 auth，返回：管理员信息和 token
   * @return {Object}
   */
  get () {
    return {
      [USERINFO]: storage.get(USERINFO),
      [TOKEN]: storage.get(TOKEN)
    }
  },

  /**
   * 登录
   * @param {string} manager 登录管理员
   * @param {string} token 登录 token
   */
  login ({userinfo, token}) {
    console.warn(token)
    console.warn(userinfo)
    storage.set(USERINFO, userinfo)
    storage.set(TOKEN, token)
  },

  /**
   * 登出
   */
  logout () {
    storage.remove(USERINFO)
    storage.remove(TOKEN)
  },

  /**
   * 是否已登录
   * @return {boolean}
   */
  loggedIn () {
    return !!storage.get(USERINFO) && !!storage.get(TOKEN)
  }
}
