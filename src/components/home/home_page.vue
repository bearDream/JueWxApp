
<template>
  <div>
    <scroller enable-horizontal-swiping=""  :loading="load" >
      <search @on-submit="onSubmit" :auto-fixed="false" v-model="value2" @on-focus="onFocus" @on-cancel="onCancel"></search>
      <swiper :list="list1" :min-moving-distance="20" auto=""  height="260px">
        <div class="theme">方便生活从蕨菜开始</div>
      </swiper>
    </scroller>
    <grid>
      <grid-item><img src="../../assets/images/take.png" v-on:click="GoTakePage" alt=""><p>在线取号</p></grid-item>
      <grid-item><img src="../../assets/images/nutrition.png" v-on:click="GoNutritional" alt=""><p>营养价值</p></grid-item>
      <grid-item><img src="../../assets/images/random.png" v-on:click="GoRandom" alt=""><p>随机</p></grid-item>
    </grid>
    <div style="margin: 10px;overflow: hidden;height:40%;" v-for="item in list2" v-on:click="GoFood">
      <div class="m-img"  :style="{backgroundImage: 'url(' + item.coverImage + ')'}">
        <div class="outer">
          <div class="masker" style="border-radius:3px;width:90%;height:80%;position:absolute;top:10%;left:5%;  backgroundColor:rgba(255,255,255,.5);">
            <div slot="content" class="m-title">
              {{item.title}}
              <br/>
              <divider style="width: 50%;color: #000;margin:auto;padding:0;">{{item.addrase}}</divider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Divider, Grid, GridItem, Masker, XInput, Scroller, Swiper, Search } from 'vux'
  import { mapState } from 'vuex'
  import banner from '../../assets/images/bg/home1.png'

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
    computed: mapState([
      'home'
    ]),
    data () {
      return {
        toTake: 'subpage/homeList',
        value2: 'vux',
        list1: [{
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400385458&idx=1&sn=78f6b8d99715384bdcc7746596d88359&scene=19#wechat_redirect',
          img: banner
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400160890&idx=1&sn=29ef02af25793a11a3f6aec92bfb46c1&scene=19#wechat_redirect',
          img: banner
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400094682&idx=1&sn=8231a2053b772b2108784fccc254d28c&scene=19#wechat_redirect',
          img: banner
        }],
        list2: []
//        list2: [{
//          title: '藏在昆明巷子里的北欧小清新咖啡馆',
//          addrase: 'by jenny 上海',
//          coverImage: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
//        }, {
//          title: '小翠—— 一个特别"脆"的饭馆',
//          addrase: 'by Bubble.yuki from kunmin',
//          coverImage: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
//        }, {
//          title: '昆明探店——来自pizza爱好者的推荐',
//          addrase: 'by Anitalyx tom 昆明',
//          coverImage: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
//        }]

      }
    },
    created () {
      this.gets()
    },
    methods: {
      gets () {
        this.$store.dispatch('getHomes', {
          params: {
          }
        }).then(() => {
          if (this.$store.getters.getHomes.code !== -1) {
            console.info(this.$store.getters.getHomes.data.page.list)
            this.$set(this, 'list2', this.$store.getters.getHomes.data.page.list)
          }
        })
      },
      load (uuid) {
        const _this = this
        setTimeout(function () {
          _this.$broadcast('pulldown:reset', uuid)
        }, 2000)
      },
      onSubmit (val) {
        this.$vux.toast.show({
          type: '搜索菜品、用户、商家'
        })
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      },
      GoTakePage () {
        this.$router.push({name: 'takepage'})
      },
      GoNutritional () {
        this.$router.push({name: 'nutritional'})
      },
      GoRandom () {
        this.$router.push({name: 'random'})
      },
      GoFood () {
        this.$router.push({name: 'food'})
      }
    },
    mounted () {
      // 进入页面的钩子函数
    }
  }
</script>

<style lang="less">
  .theme{
    width:66%;
    height:14%;
    border:2px solid #fff;
    color:#fff;
    font-size:26px;
    z-index:10;
    position:fixed;
    top:46%;
    left:20%;
    text-align:center;
  }
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
  .outer{
    width: 85%;
    height: 70%;
    position: absolute;
    top: 14%;
    left: 8%;
    border: 2px solid #fff;
    border-radius: 3px;
  }
  .m-title {
    color: #000;
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
