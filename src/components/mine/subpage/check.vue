<template>
  <div>
    <x-header :left-options="{backText: ''}" style="background: transparent;position: fixed;" v-on:click="$router.back()"></x-header>
    <div  style="height:250px;width: 100%">
        <ul class="center">
          <li>{{sumScore}}分</li>
          <li><div class="m-buttom">已签+{{score}}</div></li>
          <li>每签到一次,积分增加{{score}}分</li>
        </ul>
    </div>
    <group>
      <cell title='赚更多积分'  link="subpage/earn"  is-link></cell>
      <cell title='关注微信' link="subpage/concern" is-link></cell>
      <cell title='邀请好友' link="subpage/invite" is-link></cell>
      <cell title='绑定手机'  is-link @click.native="showPhone"></cell>
      <group>

      </group>
    </group>
    <br>
    <br>

    <template>
      <div>
      <x-dialog v-model="showphone3" >
        <group title="手机号码">
          <!--title="绑定手机"-->
          <x-input v-model="icon" name="mobile" :min="11" :max="11" placeholder="请输入手机号码" keyboard="number" ></x-input>
        </group>
        <div @click.native="showphone3=false">
          <span class="vux-close"></span>
        </div>
        <div style="padding:15px;">
          <flexbox>
            <flexbox-item>
              <x-button  type="primary" @click.native="isphone">确&nbsp;&nbsp;认</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button  type="primary" @click.native="showphone3=false">取&nbsp;&nbsp;消</x-button>
            </flexbox-item>
          </flexbox>
        </div>
      </x-dialog>
          <alert v-model="showalert"  :title="this.icon" content="已经绑定到蕨菜"></alert>
      </div>
    </template>








  </div>
</template>
<script>
  import { Alert, Flexbox, FlexboxItem, XButton, XInput, XDialog, XHeader, Blur, Group, Cell, TransferDomDirective as TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Blur,
      Group,
      Cell,
      XDialog,
      XInput,
      XButton,
      Flexbox,
      FlexboxItem,
      Alert
    },
    data () {
      return {
        sumScore: 6689,
        score: 10,
        showphone3: false,
        showalert: false
      }
    },
    methods: {
      showPhone () {
        this.showphone3 = true
      },
      isphone () {
        if (/^[0-9]{11}$/.test(this.icon)) {
          this.showphone3 = false
          setTimeout(() => {
            this.showalert = true
          }, 100)
        }
      }
    }
  }
</script>
<style scoped>
  div.vux-header{
    background:#88C31F;
  }
  div.vux-header+div{
    background:#8FC31F;
    font-size:18px;
    color:#fff;
    height:180px !important;
    margin-top:-1px;
  }
  div.m-buttom{
    display:inline-block;
    padding:8px 50px;
    border:1px solid #fff;
    border-radius:15px;
    margin:15px;
  }
  ul.center>li{
    margin-bottom:10px;
  }
  ul.center>li:nth-child(3) {
    font-size:15px;
    margin-top:-5px;
  }
  .takeSorting{
    height:300px;
    width:200px;
    background: #0bb20c;
  }
  button.weui-btn.weui-btn_primary{
  background:#8FC31F;
    font-weight:bold;
  }

  div.weui-dialog:before{
  content:' ';
  display:table;
  }

</style>
