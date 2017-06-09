<template>
  <div>
    <x-header v-on:click="$router.back()">设置</x-header>
    <group>
      <cell title="意见反馈" @click.native="showPlugin3" is-link></cell>
      <cell title="用户帮助" @click.native="showPlugin5" is-link></cell>
      <div v-transfer-dom>
        <alert v-model="show7" title="蕨菜客服" @on-hide="onHide" content="您需要的帮助？"></alert>
      </div>
    </group>
    <group>
      <cell title="软件关于" @click.native="showPlugin" is-link></cell>
      <div v-transfer-dom>
        <alert v-model="show2" title="关于" @on-hide="onHide" content="Your Message is sent successfully"></alert>
      </div>
      <x-switch style="margin-left: 10px" title='清除缓存' v-model="show3"></x-switch>
      <cell title="联系我们" @click.native="showPlugin1" is-link></cell>
      <div v-transfer-dom>
        <alert v-model="show1" title="蕨菜客服" @on-hide="onHide" content="400-101-201"></alert>
      </div>
      <cell title="去评价" @click.native="showPlugin4" is-link></cell>
    </group>

    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <toast v-model="delSuccess">{{'清除成功'}}</toast>

    <div v-transfer-dom>
      <x-dialog v-model="show5" hide-on-blur>
        <div class="input1"><span class="input2">请输入您的建议</span>
            <x-textarea :max="20" placeholder="请输入..."
                        @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')">
            </x-textarea>
          <!--<x-button type="primary" @click="console.info('................')">确认提交</x-button>-->
          <div @click="show5=false">
            <span class="get">确认提交 </span>
          </div>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="show6" hide-on-blur>
        <div class="input1"><span class="input2">请输入您的评价</span>
          <x-textarea :max="20" placeholder="请输入..."
                      @on-focus="onEvent('focus')"
                      @on-blur="onEvent('blur')">
          </x-textarea>
          <!--<x-button type="primary" @click="console.info('................')">确认提交</x-button>-->
          <div @click="show6=false">
            <span class="get">确认提交 </span>
          </div>
        </div>
      </x-dialog>
    </div>
  </div>

</template>
<script>

  import { XButton, XTextarea, XDialog, XHeader, Actionsheet, Toast, XInput, Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Alert,
      Group,
      Cell,
      XSwitch,
      Actionsheet,
      Toast,
      XInput,
      XDialog,
      XTextarea,
      XButton
    },
    data () {
      return {
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show5: false,
        show6: false,
        show7: false,
        delSuccess: false,
        menus3: {
          'title.noop': '清除缓存吗?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
          delete: '<span style="color:red">清除</span>'
        }
      }
    },
    methods: {
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      showPlugin () {
        this.$set(this, 'show2', true)
      },
      showPlugin1 () {
        this.$set(this, 'show1', true)
      },
      showPlugin3 () {
        this.show5 = true
      },
      showPlugin4 () {
        this.show6 = true
      },
      showPlugin5 () {
        this.$set(this, 'show7', true)
      },
      click (key) {
        console.log(key)
      },
      onDelete () {
        this.delSuccess = true
      },
      onEvent (event) {
        console.log('on', event)
      }
    }
  }
</script>
<style lang="less" scoped>
  .get {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    width: 100%;
    height:40px;
    font-size: 20px;
    background-color: #0bb20c;

  }
  .input1{
    border: 1px solid #fff;
    background: #fff;
  }
  .input2{
    font-size: 20px;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
