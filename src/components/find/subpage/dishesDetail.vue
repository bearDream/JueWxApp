<template>
  <div style="background:#eee">
    <div style="max-height:250px;position:relative;">
      <img class="bg" :src="dish.dishImage">
      <div class="mask">{{dish.dishName}}</div>
    </div>
    <div style="margin-top:2%;background-color: #fff;">
      <div class="title">{{title}}</div>
      <div class="row">
        <div class="icon" :style="{background:'url('+dishesIcon+') no-repeat -8px -247px'}"></div>
        <i style="font-size:20px;position:absolute;top:24%;left:18%;">菜名：</i>
        <i style="font-size:24px;position:absolute;top:24%;left:38%;">{{dish.dishName}}</i>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+dishesIcon+') no-repeat -105px -250px', width: '50%;'}"></span>
          <i style="font-size:20px;">简介：</i>
        </div>
        <div>
          <p style="font-size:15px;padding:5px 20px 5px 20px;">{{dish.dishDesc}}</p>
        </div>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+dishesIcon+') no-repeat -200px -250px'}"></span>
          <i style="font-size:20px;">详细介绍：</i>
        </div>
      </div>
      <p style="font-size:20px;padding:5px 20px 5px 20px;">{{dish.dishContent}}</p>
      <x-button type="primary">查看会做该菜的商家</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
import dishes from '../../../assets/img/dishes.png'
import icon from '../../../assets/img/dishesIcon.png'

export default {
  components: {
    XButton
  },
  data () {
    return {
      dishesIcon: icon,
      title: '菜品详情',
      dish: {
        dishId: '',
        dishImage: dishes,
        dishName: '水果串串香',
        dishDesc: '豆腐、西红柿、柠檬、黄瓜、生菜、洋葱',
        dishContent: '食盐、花椒、味精、辣椒粉、香油、冰糖'
      }
    }
  },
  mounted () {
    if (this.$route.params.dishId === undefined) {
//      this.$router.go(-1)
    }
    this.$set(this.dish, 'dishId', this.$route.params.dishId)
//    this.get()
  },
  methods: {
    get () {
      this.$store.dispatch('getDish', {
        uri: '/' + this.dish.dishId
      }).then(() => {
        console.info(this.$store.getters.getDish)
        let data = this.$store.getters.getDish
        if (data.code !== -1) {
          this.dish = data.data
        }
      })
    }
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
    min-hieght:60px;
    background: #fff;
    padding:2%;
  }
</style>
