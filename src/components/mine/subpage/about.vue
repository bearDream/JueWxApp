<template>
  <div>
    <x-header v-on:click="$router.back()">蕨菜</x-header>
    <blur :blur-amount=0 :url="url" style="height:220px">

      <div style="border-radius: 2px;width: 100%">
        <div class="m-buttom" >此处为合照</div>
        <!--<div class="m-buttom1"></div>-->
      </div>
    </blur>
    <div class="introduce" style="overflow:auto;">
      <div class="about" style="width: 90%;margin:2.5% 5%;padding:0% 2%;align:center;background-color: rgba(111,111,111, .5)">
        <h1 style="text-align:center;">ABOUT&nbsp;&nbsp;&nbsp;&nbsp;US</h1>
        <p style="text-indent:2em;color: #f2eeee" >JUE团队成立于2017年4月,由10个有意思的人儿组成,
          因为他们设计,规划和编码好看的东西;设计"蕨菜"的出现是建立在一个与现实生活紧密的联系的基础上
          。</p>
        <p style="text-indent:2em;color: #f2eeee;">“蕨菜"是通过"排队等位、餐位预定、点菜收银、移动支付、
          会员管理、营养价值、随机菜品"等服务为商户提供专业成熟的互联网餐厅整体解决方法,
          帮助餐饮客户解决企业经营过程中遇到的"效率、客流、资金、数据、健康、选择"六大难题.
        </p>
      </div>
    </div>
    <div style="padding:8% 2% 8% 2%;background-color:#fff;width:100%;">
      <div   v-for="item in list" style=" color:#59850b; background-color:rgba(255,255,255,0.8);margin-left: 5px;margin-right: 5px;display: inline-block;width:46%;height: 150px;">
        <div  style="width: 100%;height:150px;float: left;cursor:pointer;position: relative;">
          <div  style="height: 155px;width: 100%;padding-top: 110px"
                :style="{backgroundImage: 'url(' + item.img + ')'}">

            <div  style="text-align: center; background-color: rgba(255,255,255, .5);padding: 1px 10px">
              <!--style="position: absolute;width:auto;bottom: 18%;left: 30%;"-->
              {{ item.title }}</div>
            <div  style="text-align: center; background-color: rgba(255,255,255, .5);padding: 1px 10px">
              <!--style="position: absolute;width:auto;bottom: 5%;left: 5%;"-->
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader, Blur } from 'vux'
  import img from '../../../assets/images/7.png'

  import { mapState } from 'vuex'

  import find1 from '../../../assets/img/find1.png'
  import find2 from '../../../assets/img/find2.png'
  import find3 from '../../../assets/img/find3.png'
  import find4 from '../../../assets/img/find4.png'

  import find5 from '../../../assets/img/5-1.png'
  import find6 from '../../../assets/img/5-2.png'
  export default {
    components: {
      XHeader,
      Blur
    },
    computed: mapState([
      'find'
    ]),
    data () {
      return {
        url: img,
        list: [ {
          img: find1,
          title: '张弛',
          content: 'JUE组长,后台程序开发'
        }, {
          img: find2,
          title: '赵鑫宏',
          content: 'JUE组员,后台程序开发'
        }, {
          img: find3,
          title: '沈棋帆',
          content: 'JUE组员,后台程序开发'
        }, {
          img: find4,
          title: '赵棣',
          content: 'JUE组员,WEB前端开发'
        }, {
          img: find5,
          title: '杨家富',
          content: 'JUE组员,WEB前端开发'
        }, {
          img: find6,
          title: '孙露明',
          content: 'JUE组员,WEB前端开发'
        }, {
          img: find1,
          title: '杨娇娇',
          content: 'JUE组员,WEB前端开发'
        }, {
          img: find2,
          title: '罗莎',
          content: 'JUE组员,WEB前端开发'
        }, {
          img: find4,
          title: '张诗唯',
          content: 'JUE组员,UI设计'
        }, {
          img: find5,
          title: '李丹',
          content: 'JUE组员,UI设计'
        }]
      }
    }
  }
</script>

<style scoped>
  .m-buttom {
    display: block;
    position: absolute;
    width: 70%;
    margin-left: 15%;
    cursor: pointer;
    border-radius: 2px;
    height: 40%;
    background: #f3f3f5;
    opacity: 0.5;
    top:20%;
    margin-bottom: 25%;
    text-align: center;
    line-height: 100px;
    color: #000;
    font-size:24px;
    font-weight: bold;
  }
  .m-buttom1 {
    display: block;
    position: absolute;
    width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
    height: 50px;
    background: #f3f3f5;
    opacity: 0.8;
    bottom: 0;
  }
  .me_show{
    display: flex;
    width: 100%;
    height:40px;
    position: absolute;
    bottom: 5px;
    color:#000;
  }
  .me_show li{
    float: left;
    padding-left:20px;
  }
  .me_show li:nth-child(1){
    line-height:40px;
    padding-right: 20px;
    font-size:20px;
  }
  .me_show li:last-child{
    position: absolute;
    right: 0;
    line-height:40px;
    padding-right: 20px;
    font-size:15px;
  }
  /*关于我们的背景图*/
  div.introduce{
    background-image:url(../../../assets/images/4.png);
    background-size:100% 100%;
    background-color:rgba(150,150,150,0.2);
  }
  div.introduce:before{
    content:'';
    display:table;
  }
  body{
    font-size:12px;
  }

  @media screen and (min-width:767px) and (max-width:1080px){
    .title{
      font-size:3em;
      font-weight:bold;
      position: absolute;width:auto;bottom: 18%;left: 34%;
    }
    .content{
      font-size:1.5em;
      font-weight:bold;
      position: absolute;width:auto;bottom: 5%;left: 21%;
    }
    .about h1{
      font-size:2em;
    }
    .about p{
      font-size:2em;
    }
  }
  @media screen and (max-width:767px) {
    .title{
      font-size:1.5em;

      font-weight:bold;
      position: absolute;width:auto;bottom: 18%;left: 30%;
    }
    .content{
      font-size:0.5em;
      font-weight:bold;
      position: absolute;width:auto;bottom: 5%;left: 14%;

    }
    .about h1{
      font-size:1.5em;
    }
    .about p{
      font-size:1em;
      color: #c7c7c7;
    }
  }

  @media screen and (min-width:1080px) {
    .title{
      font-size:4em;
      font-weight:bold;
      position: absolute;width:auto;bottom: 18%;left: 34%;
    }
    .content{
      font-size:2em;
      font-weight:bold;
      position: absolute;width:auto;bottom: 0%;left: 23%;
    }
    .about h1{
      font-size:3em;
    }
    .about p{
      font-size:2em;
    }
  }
  @media screen and (width:320px) {
    .title {
      font-size: 2em;
      font-weight: bold;
      position: absolute;
      width: auto;
      bottom: 18%;
      left: 34%;
    }

    .content {
      font-size: 1em;
      font-weight: bold;
      position: absolute;
      width: auto;
      bottom: 4%;
      left: 0.5%;
    }
  }
  div.introduce+Div{
    content:'';
    display:table;
  }
</style>
