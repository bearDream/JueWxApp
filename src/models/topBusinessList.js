import REST from '@/utils/rest'
import consts from '@/utils/consts'
import restHelpers from '@/utils/helpers/restHelpers'

// 一级页面的商家列表
export default class extends REST {
  constructor () {
    super()
    this.baseURL = consts.API_URL
    this.errorHandler = restHelpers.errorHandler
    // this.headers = restHelpers.getHeaders()
    this.path = 'business/topBusiness'
  }
}
