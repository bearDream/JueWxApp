<template>
  <div>
    <div>
      <div id="headershow" style="width: 100%;overflow: hidden;height: 300px;"
           :style="{backgroundImage: 'url('+src+')'}">
        <masker style="border-radius: 2px;margin:20% auto;
        opacity:0.8;width: 80%;height: 40%; color: rgb(255,255,255)">
          <div slot="content" class="m-title">
            dsfgdfg
            <br/>
            <span>2016-03-18</span>
          </div>
        </masker>
      </div>

    </div>

    <grid :rows="2" >
      <grid-item v-for="i in list2">
        <img :src='i.img'>
      </grid-item>
    </grid>
    <grid :rows="1">
      <grid-item v-for="j in list3">
        <img :src='j.img'>
      </grid-item>
    </grid>


  </div>
</template>

<script>

  import { Masker, XImg, Grid, GridItem } from 'vux'
  import grid1 from '../../assets/images/grid1.jpg'
  import grid2 from '../../assets/images/grid2.jpg'
  import grid3 from '../../assets/images/grid4.jpg'

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
        list2: [{img: grid1}, {img: grid2}],
        list3: [{img: grid3}]
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
