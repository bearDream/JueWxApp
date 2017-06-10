<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}" v-on:click="$router.back()">编辑资料</x-header>
      <group>
        <cell title="昵称"  is-link @click.native="Onnameshow"  :value="userInfo.username"></cell>
        <selector style="margin:20px 0 20px 10px;" v-model="userInfo.sex"  title="性别" :options="genderList" @on-change="ongender"></selector>
        <cell title="电话" is-link @click.native="OnTel" :value="userInfo.tel"></cell>
        <cell title="目前进行的身体状态" is-link @click.native="OnBodyStatus" :value="userInfo.bodyStatusTrans"></cell>
      </group>
    </div>
    <div>
      <template>
        <div>
          <actionsheet v-model="avatarshow"  :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
        </div>
        <!-- 设置昵称-->
        <x-dialog v-model="usernameModal" hide-on-blur>
          <group title="输入你的昵称">
            <x-input title="昵称" v-model="userInfo.username" :max="25" placeholder="起一个动听的名字吧"></x-input>
            <div style="padding:15px;">
              <flexbox>
                <flexbox-item>
                  <x-button  type="primary" @click.native="update" :show-loading="showButtonLoading">确&nbsp;&nbsp;认</x-button>
                </flexbox-item>
              </flexbox>
            </div>
          </group>
        </x-dialog>
        <!-- 设置电话号码 -->
        <x-dialog v-model="telModal" hide-on-blur>
          <group title="输入你的手机号码">
            <x-input title="电话" v-model="userInfo.tel" :min="11" :max="11" placeholder="11位移动电话"></x-input>
            <div style="padding:15px;">
              <flexbox>
                <flexbox-item>
                  <x-button  type="primary" @click.native="update" :show-loading="showButtonLoading">确&nbsp;&nbsp;认</x-button>
                </flexbox-item>
              </flexbox>
            </div>
          </group>
        </x-dialog>
        <!-- 设置用户的身体状态body_status -->
        <x-dialog v-model="bodyModal" hide-on-blur>
          <group title="选择你最近期望的身体状态">
            <!--title="绑定手机"-->
            <checker v-model="userInfo.bodyStatus" @on-change="checkerChange" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
              <checker-item value='1'>标准</checker-item>
              <checker-item value='2'>塑性</checker-item>
              <checker-item value='3'>减脂</checker-item>
            </checker>
          </group>
          <div @click.native="showphone3=false">
            <span class="vux-close"></span>
          </div>
          <div style="padding:15px;">
            <flexbox>
              <flexbox-item>
                <x-button  type="primary" @click.native="setBodyStatus" :show-loading="showButtonLoading">确&nbsp;&nbsp;认</x-button>
              </flexbox-item>
            </flexbox>
          </div>
        </x-dialog>
      </template>
    </div>
  </div>
</template>

<script>
  import { XHeader, Group, Cell, Confirm, Actionsheet, XInput, Alert, Selector, XDialog, XButton, Checker, CheckerItem, Flexbox, FlexboxItem } from 'vux'
  import { Indicator, Toast } from 'mint-ui'
  export default {
    components: {
      XHeader,
      Group,
      Cell,
      Confirm,
      XInput,
      Actionsheet,
      Alert,
      Selector,
      XDialog,
      XButton,
      Checker,
      CheckerItem,
      Flexbox,
      FlexboxItem,
      Indicator,
      Toast
    },
    data () {
      return {
        user: {
          tel: '18888888888',
          username: '树袋熊',
          bodyStatus: '1'
        },
        userInfo: {
          address: '',
          sex: '',
          username: '',
          bodyStatus: 1,
          tel: '',
          bodyStatusTrans: '' // 根据bodyStatus转化得到具体的文字标准，减脂等
        },
        showButtonLoading: false,
        usernameModal: false,
        telModal: false,
        bodyModal: false,
        avatarshow: false,
        nameshow: false,
        isloadingname: false,
        isloadingavatar: false,
        addressshow: false,
        isloadingBody: false,
        name1: 'jue',
        name2: 'jue',
        menus2: {
          menu1: '拍照',
          menu2: '从相册选择'
        },
        genderList: [{key: '男', value: '男'}, {key: '女', value: '女'}, {key: 'null', value: '保密'}],
        address2: '昆明理工大学'
      }
    },
    mounted () {
      this.get()
    },
    methods: {
      get () {
        this.$store.dispatch('getMineInfo', {
          params: ''
        }).then(() => {
          let userInfo = this.$store.getters.getMine
          if (userInfo.code !== -1) {
            userInfo = userInfo.data
            this.userInfo = userInfo
            this.userInfo.bodyStatus = this.userInfo.bodyStatus.toString()
            switch (parseInt(this.userInfo.bodyStatus)) {
              case 1:
                this.userInfo.bodyStatusTrans = '标准'
                break
              case 2:
                this.userInfo.bodyStatusTrans = '塑性'
                break
              case 3:
                this.userInfo.bodyStatusTrans = '减脂'
                break
              default:
                this.userInfo.bodyStatusTrans = '未设置'
            }
            console.info(this.userInfo)
          } else {
            Toast('网络出错')
          }
        })
      },
      Onavatarshow () {
        this.avatarshow = !this.avatarshow
        this.isloadingavatar = !this.isloadingavatar
      },
      click (key) {
        alert(key)
        this.isloadingavatar = !this.isloadingavatar
      },
      Onnameshow () {
        this.usernameModal = true
      },
      onConfirmname () {
        this.name1 = this.name2
        this.isloadingname = false
      },
      oncancelname () {
        this.isloadingname = false
      },
      ongender (key) {
        this.value1 = key
        this.update()
      },
      OnBodyStatus () {
        this.bodyModal = true
        this.isloadingBody = true
      },
      OnTel () {
        this.telModal = true
        console.info('this is tel alert')
      },
      checkerChange (value) {
        console.info(this.userInfo.bodyStatus)
      },
      setBodyStatus () {
        console.info(this.userInfo.bodyStatus)
        this.isloadingBody = false
        switch (parseInt(this.userInfo.bodyStatus)) {
          case 1:
            this.userInfo.bodyStatusTrans = '标准'
            break
          case 2:
            this.userInfo.bodyStatusTrans = '塑性'
            break
          case 3:
            this.userInfo.bodyStatusTrans = '减脂'
            break
          default:
            this.userInfo.bodyStatusTrans = '未设置'
        }
        this.update()
      },
      update () {
        this.showButtonLoading = true
        this.$store.dispatch('putMine', {
          data: this.userInfo
        }).then(() => {
          this.showButtonLoading = false
          this.usernameModal = false
          this.bodyModal = false
          this.telModal = false
          let userInfo = this.$store.getters.getMine
          if (userInfo.code !== -1) {
            userInfo = userInfo.data
            this.userInfo = userInfo
            this.userInfo.bodyStatus = this.userInfo.bodyStatus.toString()
            switch (parseInt(this.userInfo.bodyStatus)) {
              case 1:
                this.userInfo.bodyStatusTrans = '标准'
                break
              case 2:
                this.userInfo.bodyStatusTrans = '塑性'
                break
              case 3:
                this.userInfo.bodyStatusTrans = '减脂'
                break
              default:
                this.userInfo.bodyStatusTrans = '未设置'
            }
            console.info(this.userInfo)
          } else {
            Toast('网络出错')
          }
        })
      },
      onConfirmBodyStatus () {
        this.isloadingaddress = false
      },
      oncanceladdress () {
        this.isloadingaddress = false
      }
    }
  }
</script>
<style scoped>
  .box {
    padding: 0 15px;
  }
  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
  }
  .demo1-item-selected {
    border: 1px solid green;
  }
  .demo2-item {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
  }
  .demo2-item-selected {
    border-color: green;
  }
  .demo3-item {
    padding: 5px 5px;
    font-size: 0;
  }
  .demo3-item-selected {
    outline: 1px solid #8B8AEE;
  }
  .demo4-item {
    background-color: #ddd;
    color: #222;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 10px;
    line-height: 18px;
    border-radius: 15px;
  }
  .demo4-item-selected {
    background-color: #FF3B3B;
    color: #fff;
  }
  .demo4-item-disabled {
    color: #999;
  }
  .demo5-item {
    width: 70px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
  }
  .demo5-item-selected {
    background: #ffffff url(../../../assets/images/active.png) no-repeat right bottom;
    border-color: #ff4a00;
  }
</style>
