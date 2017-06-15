
<template>
  <div style="background-color: #F0F0F0">
    <x-header v-on:click="$router.back()">我的订单</x-header>
    <div >
      <div style="height:44px;width: 100%">
        <sticky scroll-box="vux_view_box_body" :offset="46" :check-sticky-support="false">
          <tab :line-width="1">
            <tab-item selected @click.native="showlist1">全部</tab-item>
            <tab-item @click.native="showlist4">待使用</tab-item>
            <tab-item @click.native="showlist2">待付款</tab-item>
            <tab-item @click.native="showlist3">待评价</tab-item>
          </tab>
        </sticky>
      </div>
      <div v-show="showOrder">
        <!-- 全部订单 -->
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div v-show="show01"  style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee" v-for="item in allList">
            <div class="evaluationl" >
              <img :src="item.businessImage">
            </div>
            <div class="evaluationr">
              <h3 >{{item.name}}</h3>
              <p >数量: 3</p>
              <p >总价: ￥{{item.orderPice}} </p>
              <div class="evaluationrType" >
                <p>
                  <span v-if="item.orderStatus === 1">未使用</span>
                  <span v-else-if="item.orderStatus === 2">未评价</span>
                  <span v-else-if="item.orderStatus === 3">完成</span>
                  <span v-else>未支付</span>
                </p>
              </div>
              <div class="evaluationrBox">
                <p  v-if="item.orderStatus !== 0">
                  <span v-if="item.orderStatus === 1">去使用</span>
                  <span v-else-if="item.orderStatus === 2">评论</span>
                  <span v-else-if="item.orderStatus === 3">再来一单</span>
                </p>
                <p v-else>支付</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 待付款 -->
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div v-show="show02"  style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee"
               v-for="item in allList" v-if="item.orderStatus === 0">
            <div class="evaluationl" >
              <img :src="item.businessImage">
            </div>
            <div class="evaluationr">
              <h3 >{{item.name}}</h3>
              <p >数量: 3</p>
              <p >总价: ￥{{item.orderPice}} </p>
              <div class="evaluationrType" >
                <p>未付款</p>
              </div>
              <div class="evaluationrBox">
                <p>去付款</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 待评价 -->
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div v-show="show03"  style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee"
               v-for="item in allList" v-if="item.orderStatus === 2">
            <div class="evaluationl" >
              <img :src="item.businessImage">
            </div>
            <div class="evaluationr">
              <h3 >{{item.name}}</h3>
              <p >数量: 3</p>
              <p >总价: ￥{{item.orderPice}} </p>
              <div class="evaluationrType" >
                <p>未评价</p>
              </div>
              <div class="evaluationrBox">
                <p>去评价</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 待使用 -->
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div v-show="show04"  style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee"
               v-for="item in allList" v-if="item.orderStatus === 1">
            <div class="evaluationl" >
              <img :src="item.businessImage">
            </div>
            <div class="evaluationr">
              <h3 >{{item.name}}</h3>
              <p >数量: 3</p>
              <p >总价: ￥{{item.orderPice}} </p>
              <div class="evaluationrType" >
                  <p>未使用</p>
              </div>
              <div class="evaluationrBox">
                <p>去使用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="!showOrder">
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee">
              <p style="text-align: center; font-size: 14pt;padding: 10px 5px 10px 5px;">暂时还没有订单哦~</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { XHeader, Sticky, Tab, TabItem } from 'vux'
  import imgl from '../../../assets/img/img_01.png'
  export default {
    components: {
      XHeader,
      Sticky,
      Tab,
      TabItem
    },
    data () {
      return {
        show01: true,
        show02: false,
        show03: false,
        show04: false,
        showOrder: false,
        allList: [{
          businessImage: imgl,
          name: '玫瑰之约-11只蓝色妖姬',
          orderPice: 34,  /** 价格 */
          orderStatus: 1 /** orderStatus 1为已支付 */
        }, {
          businessImage: imgl,
          name: '重庆老火锅',
          orderPice: 58,
          orderStatus: 1
        }, {
          businessImage: imgl,
          name: '涮羊肉',
          orderPice: 168,
          orderStatus: 0
        }, {
          businessImage: imgl,
          name: '海底捞',
          orderPice: 228,
          orderStatus: 1
        }]
      }
    },
    mounted () {
      this.gets()
    },
    methods: {
      gets () {
        this.$store.dispatch('getOrders', {
          uri: 'orders'
        }).then(() => {
          console.info(this.$store.getters.getOrders)
          let res = this.$store.getters.getOrders
          if (res.code !== -1) {
            this.showOrder = true
            let data = res.data
            this.$set(this, 'allList', data)
            console.info(data)
          } else {
            this.showOrder = false
          }
        })
      },
      showlist1 () {
        this.show01 = true
        this.show02 = false
        this.show03 = false
        this.show04 = false
      },
      showlist2 () {
        this.show02 = true
        this.show03 = false
        this.show01 = false
        this.show04 = false
      },
      showlist3 () {
        this.show03 = true
        this.show01 = false
        this.show02 = false
        this.show04 = false
      },
      showlist4 () {
        this.show04 = true
        this.show03 = false
        this.show01 = false
        this.show02 = false
      }
    }
  }
</script>
<style scoped="" lang="less">
  div.evaluationl{
    float: left;width: 100px;height: 100px;overflow: hidden;padding: 10px;
  }

  div.evaluationl img{
    width: 100%;border-radius: 3px;
  }

  div.evaluationr{
    float: right;width: 65%;padding-top: 10px;position:relative;
    color: #7d7e83;
  }
  div.evaluationr>h3{
    font-size: 15px;color: #000;font-weight: bold;overflow: hidden;
    text-overflow: ellipsis;white-space: nowrap;width: 65%;
  }
  div.evaluationrType{
    position: absolute;top: 10px;right: 20px;color: #06C1AF
  }
  div.evaluationrBox{
    position: absolute;bottom: 0;right: 20px;width: 50px;height: 25px;border: 1px solid #F48E2B;border-radius: 3px;color: #f48e2b;text-align: center;line-height: 25px
  }
</style>
