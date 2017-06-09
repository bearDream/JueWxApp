<template>
  <div style="">
    <blur :blur-amount=0 :url="url" style="height:220px">
      <p class="center">
        <img :src="headImgUrl">
        <br>
        {{username}}
      </p>
        <div class="m-buttom"></div>
        <ul class="me_show">
          <li><p style="text-align: center">{{level}}</p><p style="text-align: center">等级</p></li>
          <li><p style="text-align: center">{{point}}</p><p style="text-align: center">积分</p></li>
          <li v-on:click="GoEditor"><p>{{editedate}}</p></li>
        </ul>
    </blur>
    <grid>
      <grid-item link="subpage/collect">
        <img src="../../assets/images/collection.png" alt="">
        <p style="color: #676767;margin-top: 3px;">我的收藏</p>
      </grid-item>
      <grid-item >
        <img src="../../assets/images/vip.png" alt="">
        <p style="color: #676767;">我的会员</p>
      </grid-item>
      <grid-item >
        <img src="../../assets/images/release.png" alt="">
        <p style="color: #676767;">我的发布</p>
      </grid-item>
    </grid>
    <group>
      <cell title='设置'  link="subpage/site"  is-link></cell>
      <cell title='分享食话食说'  link="subpage/post_article"  is-link></cell>
      <cell title='每日签到' link="subpage/check" is-link></cell>
      <cell title='关于我们' link="subpage/about" is-link></cell>
    </group>
    <br>
    <br>
  </div>

</template>

<script>
import { Flexbox, FlexboxItem, Blur, Masker, Group, Grid, GridItem, Cell } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    Blur,
    Flexbox,
    FlexboxItem,
    Masker,
    Group,
    Grid,
    GridItem,
    Cell
  },
  data () {
    return {
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      headImgUrl: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      level: 888,
      point: 666,
      editedate: '编辑资料',
      username: 'Dream'
    }
  },
  mounted () {
    // 进入页面的钩子函数
  },
  computed: mapState([
    'me'
  ]),
  created () {
    this.get()
  },
  methods: {
    get () {
      this.$store.dispatch('getMineInfo', {
        params: ''
      }).then(() => {
        let userInfo = this.$store.getters.getMine
        if (userInfo.code !== -1) {
          console.info(userInfo.data)
          this.$set(this, 'username', userInfo.data.username)
          this.$set(this, 'headImgUrl', userInfo.data.headImgUrl)
          // 根据登记区分不同名称
          switch (userInfo.data.level) {
            case 1: this.$set(this, 'level', '小白吃货')
              break
            case 2: this.$set(this, 'level', '浅尝辄止')
              break
            case 3:
              this.$set(this, 'level', '初试牛刀')
              break
            case 4:
              this.$set(this, 'level', '资深吃货')
              break
            case 5: this.$set(this, 'level', '食神')
              break
            default:
              this.$set(this, 'level', '未知')
          }
          this.$set(this, 'point', userInfo.data.point)
        }
      })
    },
    GoEditor () {
      this.$router.push({name: 'editor'})
    }
  }
}
</script>

<style scoped>
  .center {
    text-align: center;
    padding-top: 60px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .m-buttom {
    display: block;
    position: absolute;
    width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
    height: 60px;
    background: #f3f3f5;
    opacity: .1;
    bottom: 0;
  }
  .me_show{
    display: flex;
    width: 100%;
    height:40px;
    position: absolute;
    bottom: 5px;
    color:#e9e9e9;
  }
  .me_show li{
    float: left;
    padding-left:20px;
  }
  .me_show li:nth-child(1){
    padding-right: 20px;
    border-right: 1px solid #ddd;
  }
  .me_show li:last-child{
    position: absolute;
    right: 0;
    line-height:40px;
    padding-right: 20px;
  }
</style>
