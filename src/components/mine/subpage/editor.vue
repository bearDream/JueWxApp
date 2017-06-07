<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}" v-on:click="$router.back()">编辑资料</x-header>
      <group>
        <cell title="昵称"  is-link @click.native="Onnameshow"  :is-loading="isloadingname"></cell>
        <selector style="margin:20px 0 20px 10px;" v-model="value1"  title="性别" :options="genderList" @on-change="ongender"></selector>
        <cell title="电话" is-link @click.native="OnTel" :value="user.tel"></cell>
        <cell title="目前进行的身体状态" is-link @click.native="OnBodyStatus" :is-loading="isloadingBody" :value="user.bodyStatus"></cell>
      </group>
    </div>
    <div>
      <template>
        <div>
          <actionsheet v-model="avatarshow"  :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
        </div>
        <div>
          <confirm v-model="nameshow" @on-confirm="onConfirmname" @on-cancel="oncancelname">
            <x-input  placeholder="请输入昵称" :max="5" :min="1" v-model="name2"></x-input>
          </confirm>
        </div>
        <!-- 设置用户的身体状态body_status -->
        <x-dialog v-model="bodyModal">
          <group title="选择你最近期望的身体状态">
            <!--title="绑定手机"-->
            <checker v-model="user.bodyStatus" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
              <checker-item value="1">标准</checker-item>
              <checker-item value="2">塑性</checker-item>
              <checker-item value="3">减脂</checker-item>
            </checker>
          </group>
          <div @click.native="showphone3=false">
            <span class="vux-close"></span>
          </div>
          <div style="padding:15px;">
            <flexbox>
              <flexbox-item>
                <x-button  type="primary" @click.native="setBodyStatus">确&nbsp;&nbsp;认</x-button>
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
      FlexboxItem
    },
    data () {
      return {
        user: {
          tel: '18888888888',
          username: '树袋熊',
          bodyStatus: '1'
        },
        bodyModal: false,
        avatarshow: false,
        nameshow: false,
        isloadingname: false,
        isloadingavatar: false,
        addressshow: false,
        isloadingBody: false,
        name1: 'jue',
        name2: 'jue',
        value1: 'woman',
        menus2: {
          menu1: '拍照',
          menu2: '从相册选择'
        },
        genderList: [{key: 'man', value: '男'}, {key: 'woman', value: '女'}, {key: 'secret', value: '保密'}],
        address2: '昆明理工大学'
      }
    },
    methods: {
      Onavatarshow () {
        this.avatarshow = !this.avatarshow
        this.isloadingavatar = !this.isloadingavatar
      },
      click (key) {
        alert(key)
        this.isloadingavatar = !this.isloadingavatar
      },
      Onnameshow () {
        this.isloadingname = !this.isloadingname
        this.nameshow = !this.nameshow
      },
      onConfirmname () {
        this.name1 = this.name2
        this.isloadingname = false
      },
      oncancelname () {
        this.isloadingname = false
      },
      ongender (key) {
//        alert(key)
        this.value1 = key
      },
      OnBodyStatus () {
        this.bodyModal = true
        this.isloadingBody = true
      },
      OnTel () {
        console.info('this is tel alert')
      },
      setBodyStatus () {
        this.bodyModal = false
        this.isloadingBody = false
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
