<template>
  <div style="background:#eee">
    <div style="max-height:250px;position:relative;">
      <img class="bg" :src="dishesbg">
      <div class="mask">{{maskTitle}}</div>
    </div>
    <div style="margin-top:2%;background-color: #fff;">
      <div class="title">{{title}}</div>
      <div class="row">
        <div class="icon" :style="{background:'url('+dishesIcon+') no-repeat -8px -247px'}"></div>
        <i style="font-size:24px;position:absolute;top:24%;left:18%;">菜名：</i>
        <i style="font-size:24px;position:absolute;top:24%;left:38%;">{{dishesName}}</i>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+dishesIcon+') no-repeat -105px -250px'}"></span>
          <i style="font-size:20px;position:absolute;top:17px;left:62px;">材料：</i>
        </div>
        <p style="font-size:20px;margin-left:125px;padding:2%;">{{material}}</p>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+dishesIcon+') no-repeat -200px -250px'}"></span>
          <i style="font-size:20px;position:absolute;top:17px;left:62px;">佐料：</i>
        </div>
        <p style="font-size:20px;margin-left:125px;padding:2%;">{{seasoning}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dishes from '../../../assets/img/dishes.png'
import icon from '../../../assets/img/dishesIcon.png'

export default {
  data () {
    return {
      dishesbg: dishes,
      maskTitle: '水果+串串=香',
      title: '菜品详情',
      dishesName: '水果串串香',
      dishesIcon: icon,
      material: '豆腐、西红柿、柠檬、黄瓜、生菜、洋葱',
      seasoning: '食盐、花椒、味精、辣椒粉、香油、冰糖'
    }
  },
  mounted () {
    // 进入页面的钩子函数
  }
}
</script>

<style scoped="" lang="less">
  .bg{
    display: block;
    width:100%;
    height:250px;
    background-size: cover;
    background-position: center center;
  }
  .mask{
    width: 100%;
    height:60px;
    line-height:60px;
    background-color: rgba(0,0,0,.2);
    font-family:"Microsoft YaHei";
    font-size:26px;
    text-align: center;
    color:#fff;
    position:absolute;
    top:190px;
  }
  .title{
    height:70px;
    line-height:70px;
    text-align: center;
    font-size: 28px;
    font-family:"Adobe Fan Heiti Std B";
    border-bottom: 2px solid #eee;
  }
  .row{
    min-height:60px;
    background: #fff;
    padding:2%;
    border-bottom: 2px solid #eee;
    position: relative;
  }
  .icon{
    display:inline-block;
    width:50px;
    height:50px;
    margin-top:1%;
  }
  .left{
    width:125px;
    min-hieght:60px;
    background: #fff;
    padding:2%;
    float:left;
    position: relative;
  }
</style>
