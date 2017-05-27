
<template>
  <div>
    <scroller enable-horizontal-swiping=""  :loading="load" >
      <search class="search" @on-submit="onSubmit" :auto-fixed="false" v-model="value2" @on-focus="onFocus" @on-cancel="onCancel"></search>
      <swiper :list="list1" :min-moving-distance="20" auto=""  height="260px">
      </swiper>
    </scroller>
    <grid>
      <grid-item  ><img src="../../assets/images/take.png" alt=""><p>在线取号</p></grid-item>
      <grid-item  ><img src="../../assets/images/nutrition.png" alt=""><p>营养价值</p></grid-item>
      <grid-item  ><img src="../../assets/images/random.png" alt=""><p>随机</p></grid-item>
    </grid>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list2" v-on:click="business_list(item)">
      <masker style="border-radius: 2px;" >
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <divider style="width: 80%;color: #0bb908;margin: auto">{{item.addrase}}</divider>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
  import { Divider, Grid, GridItem, Masker, XInput, Scroller, Swiper, Search } from 'vux'
  import { mapState } from 'vuex'

  export default {
    components: {
      Masker,
      XInput,
      Scroller,
      Swiper,
      Search,
      Grid,
      GridItem,
      Divider
    },
    created () {
      this.gets()
    },
    computed: mapState([
      'jue'
    ]),
    data () {
      return {
        value2: 'vux',
        list1: [{
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400385458&idx=1&sn=78f6b8d99715384bdcc7746596d88359&scene=19#wechat_redirect',
          img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400160890&idx=1&sn=29ef02af25793a11a3f6aec92bfb46c1&scene=19#wechat_redirect',
          img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400094682&idx=1&sn=8231a2053b772b2108784fccc254d28c&scene=19#wechat_redirect',
          img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
        }],
        list2: [{
          title: '藏在111111111111昆明小巷子里的小咖啡馆',
          addrase: 'by join 上海',
          img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
        }, {
          title: '小翠—— 一个特别翠的咖啡馆',
          addrase: 'by join from kunmin',
          img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
        }, {
          title: '昆明探店，来自pizza爱好者的推荐',
          addrase: 'by tom 昆明',
          img: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
        }]

      }
    },
    methods: {
//      business_list (item) {
//        // 数据交互：通过传params或query的方式进行交互
//        this.$router.push({name: 'business', params: { businessId: 1 }})
//        console.info(item)
//      },
//      gets () {
//        this.$store.dispatch('getBusinessList', {
//          params: {
//          }
//        })
//      }
      load (uuid) {
        const _this = this
        setTimeout(function () {
          _this.$broadcast('pulldown:reset', uuid)
        }, 2000)
      },
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      }
    },
    mounted () {
      // 进入页面的钩子函数
    }
  }
</script>

<style lang="less">
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }
  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }
  a{
    text-align: center;
  }
</style>
