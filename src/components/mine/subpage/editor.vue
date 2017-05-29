<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}" v-on:click="$router.back()">编辑资料</x-header>
      <group>
        <cell title="头像" is-link @click.native="Onavatarshow" :is-loading="isloadingavatar"></cell>
      </group>
      <group>
        <cell title="昵称"  is-link @click.native="Onnameshow"  :is-loading="isloadingname"></cell>
        <selector style="margin:20px 0 20px 10px;" v-model="value1"  title="性别" :options="genderList" @on-change="ongender"></selector>
        <cell title="常住地" is-link @click.native="Onaddress" :is-loading="isloadingaddress"></cell>
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
        <div>
          <confirm v-model="addressshow" @on-confirm="onConfirmaddress" @on-cancel="oncanceladdress">
            <x-input  placeholder="请输入地址" :max="10" :min="2" v-model="address2"></x-input>
          </confirm>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { XHeader, Group, Cell, Confirm, Actionsheet, XInput, Alert, Selector } from 'vux'

  export default {
    components: {
      XHeader,
      Group,
      Cell,
      Confirm,
      XInput,
      Actionsheet,
      Alert,
      Selector
    },
    data () {
      return {
        avatarshow: false,
        nameshow: false,
        isloadingname: false,
        isloadingavatar: false,
        addressshow: false,
        isloadingaddress: false,
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
      Onaddress () {
        this.addressshow = true
        this.isloadingaddress = true
      },
      onConfirmaddress () {
        this.isloadingaddress = false
      },
      oncanceladdress () {
        this.isloadingaddress = false
      }
    }
  }
</script>
