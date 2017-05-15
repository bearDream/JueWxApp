<template>
  <div>
    <x-header v-on:click="$router.back()">商家列表</x-header>
    <br>
    <!--<header class="wx-header">-->
      <!--<div class="center">-->
        <!--<div class="iconfont icon-return-arrow" v-on:click="$router.back()">-->
          <!--<span>返回</span>-->
        <!--</div>-->
        <!--<span>聊天详情</span>-->
      <!--</div>-->
    <!--</header>-->
    <div style="margin: 10px;overflow: hidden;" v-for="item in list" v-on:click="business_info(item)">
      <masker style="border-radius: 2px;" >
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
import { Masker, XHeader, TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Masker,
    XHeader
  },
  created () {
    // 数据交互：通过this.$route.params或.query取出数据
    console.info(this.$route.params)
  },
  data () {
    return {
      list: [{
        title: '洗颜新潮流！人气洁面皂排行榜',
        img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
      }, {
        title: '美容用品 & 日用品（上）',
        img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
      }]
    }
  },
  mounted () {
    // 进入页面的钩子函数
  },
  methods: {
    business_info (item) {
      alert(item.title)
    }
  }
}
</script>

<style lang="less">

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
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
</style>
