<template>
  <div style="">
    <blur :blur-amount=40 :url="url" style="height:250px">
      <p class="center">
        <img :src="url">
        <br>
        Dream
      </p>
      <marsker style="border-radius: 2px;">
        <div class="m-buttom"></div>
        <ul class="me_show">
          <li><p>{{attentions}}</p>关注</li>
          <li><p>{{fans}}</p>粉丝</li>
          <li><p>{{editedate}}</p></li>
        </ul>
      </marsker>
    </blur>
    <grid>
      <grid-item  ><img src="../../assets/images/collection.png" alt=""></grid-item>
      <grid-item  ><img src="../../assets/images/vip.png" alt=""></grid-item>
      <grid-item  ><img src="../../assets/images/release.png" alt=""></grid-item>
    </grid>
    <group>
      <cell title='设置' is-link></cell>
      <cell title='每日签到' is-link></cell>
      <cell title='关于我们' is-link></cell>
    </group>
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
      attentions: 888,
      fans: 666,
      editedate: '编辑资料'
    }
  },
  mounted () {
    // 进入页面的钩子函数
  },
  computed: mapState([
    'me'
  ])
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
    height: 50px;
    background: #000;
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
