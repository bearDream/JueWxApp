/**
 * Created by beardream on 2017/5/15.
 */
import Mock from 'mockjs'

export default Mock.mock('http://171590mx26.51mypc.cn/dish', {
  'code': 0,
  'msg': '后台正常',
  'data': {
    'dishId|0-1000': 1,
    'dishName': '@name',
    'businessName': '@name',
    'dishType': '@name',
    'is_favorable|0-1': 1,
    'is_show|0-1': 1,
    'is_top|0-1': 1,
    'order_count|1-100': 100,
    'dish_price|1-100': 100,
    'favorable_price|1-100': 100,
    'addtime': '2017-05-15'
  }
}
)
