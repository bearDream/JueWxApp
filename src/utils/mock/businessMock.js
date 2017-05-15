/**
 * Created by beardream on 2017/5/15.
 */
import Mock from 'mockjs'

export default Mock.mock('http://171590mx26.51mypc.cn/business', {
  'code': 0,
  'msg': '后台正常',
  'data': {
    'businessId|1-1000': 1,
    'name': '@name',
    'address': '@name',
    'tel|1-11': '18888888888',
    'content': '@name',
    'businessType': '@name',
    'business_image': 'http://p0.meituan.net/deal/4efd67639aba5e5e3decf6c2ef552bea1867608.jpg@460w_280h_1e_1c|http://p1.meituan.net/deal/1df8c93656930f32123eb3fe2c0e45bd1666199.jpg@460w_280h_1e_1c',
    'userId|1-100': 1,
    'is_show|0-1': 1,
    'addtime': '2017-05-15'
  }
}
)
