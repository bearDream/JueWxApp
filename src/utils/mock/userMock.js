/**
 * Created by beardream on 2017/5/15.
 */
import Mock from 'mockjs'

export default Mock.mock('http://171590mx26.51mypc.cn/userInfo', {
  'code': 0,
  'msg': '后台正常',
  'data': {
    'token': 'sadasdasdasqwrwefwe',
    'userId|0-1000': 1,
    'userName': '@name',
    'businessName': '@name',
    'tel|0-11': '18888888888',
    'real_name|0-7': '@name',
    'age|0-100': 1,
    'sex': '男',
    'address|1-100': '@name',
    'logins|1-100': 100,
    'status|0-1': 1,
    'type|0-1': 1,
    'level|0-1': 1,
    'bodystatus|1-3': 1,
    'headImgUrl': 'http://wx.qlogo.cn/mmopen/h36MaPibPOjJLQM8gpjndCOjesCiaIY2MJa61aPKCH4PzpDlAk7uHgdy0Gnjm22x9McG7uCuIGObNunOsib2PUicibia04Ut5cewLM/0'
  }
}
)
