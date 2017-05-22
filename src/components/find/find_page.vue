<template>
  <div>
    <div style="text-align:center;height: 250px;overflow: hidden">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
    <div class="model_show">
      <p>{{new_show}}</p>
    </div>
    <grid :rows="2" >
      <grid-item v-for="i in list2">
        <img :src='i.img'>
      </grid-item>
    </grid>
    <grid :rows="1">
      <grid-item v-for="i in list2">
        <img :src='i.img'>
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import { Masker, XImg, Grid, GridItem } from 'vux'
  import grid1 from '../../assets/images/grid1.jpg'
  import grid2 from '../../assets/images/grid2.jpg'

  export default {
    components: {
      Masker,
      XImg,
      Grid,
      GridItem
    },
    data () {
      return {
        src: 'https://o5omsejde.qnssl.com/demo/test1.jpg',
        new_show: '今日特价，全部菜系五折',
        list2: [{img: grid1}, {img: grid2}]
      }
    },
    methods: {
      success (src, ele) {
        console.log('success load', src)
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      }
    }
  }
</script>

<style>
  .ximg-demo {
    width: 100%;
    height: auto;
  }
  .ximg-error {
    background-color: yellow;
  }
  .ximg-error:after {
    content: '加载失败';
    color: red;
  }
  .model_show{
    width: 80%;
    height:130px;
    position: absolute;
    top: 80px;
    left: 25%;
    margin-left: -15%;
    background: rgba(255,255,255,0.3);
    text-align: center;
    line-height: 100px;
  }
  .model_show p{
    color: #fff;
    font-size: 20px;
  }
</style>
