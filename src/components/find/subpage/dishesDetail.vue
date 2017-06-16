<template>
  <div style="background:#eee">
    <x-header :left-options="{backText: ''}" style="background: transparent;position: fixed;" v-on:click="$router.back()"></x-header>
    <div style="max-height:250px;position:relative;">
      <img class="bg" :src="dish.dishImage">
      <div class="mask">{{dish.dishName}}</div>
    </div>
    <div style="margin-top:2%;background-color: #fff;">
      <div class="title">{{title}}</div>
      <div class="row">
        <div class="icon" :style="{background:'url('+dishesIcon+') no-repeat -8px -247px'}"></div>
        <p class="typetitle" >菜名:</p>
        <p style="font-size:20px;position:absolute;top:30%;left:45%;">{{dish.dishName}}</p>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+dishesIcon+') no-repeat -105px -250px', width: '50%;'}"></span>
          <p class="typetitle" >简介:</p>
          <p class="typecontent">{{dish.dishDesc}}</p>
        </div>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+dishesIcon+') no-repeat -200px -250px'}"></span>
          <i class="typetitle" >配料:</i>
          <p class="typecontent">{{dish.dishContent}}</p>
        </div>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+dishhead+') no-repeat -200px -250px'}"></span>
          <i class="typetitle" >热量:</i>
          <p class="p"  v-if="dish.heat === 1">大量</p>
          <p class="p"  v-if="dish.heat === 2">适量</p>
          <p class="p"  v-if="dish.heat === 3">微量</p>
          <p class="p"  v-if="dish.heat === 4">无</p>
        </div>
      </div>
      <div style="border-bottom: 2px solid #eee;">
      <div class="left">
        <span class="icon" :style="{background:'url('+dishesIcon+') no-repeat -200px -250px'}"></span>
        <i class="typetitle" >糖分:</i>
        <p class="p" v-if="dish.sugarContent === 1">大量</p>
        <p class="p" v-if="dish.sugarContent === 2">适量</p>
        <p class="p" v-if="dish.sugarContent === 3">微量</p>
        <p class="p"  v-if="dish.sugarContent === 4">无</p>

      </div>
    </div>
    <div style="border-bottom: 2px solid #eee;">
      <div class="left">
        <span class="icon" :style="{background:'url('+dishesIcon+') no-repeat -200px -250px'}"></span>
        <i class="typetitle" >营养价值分析:</i>
        <p class="p" v-text="dish.grease"></p>
      </div>
    </div>
      <x-button type="primary">找商家</x-button>

    </div>
  </div>
</template>

<script>
import { XButton, XHeader } from 'vux'
import dishes from '../../../assets/img/dishes.png'
import icon from '../../../assets/img/dishesIcon.png'
import dishhead from '../../../assets/img/dishhead.png'

export default {
  components: {
    XButton,
    XHeader
  },
  data () {
    return {
      dishesIcon: icon,
      dishhead: dishhead,
      title: '菜品详情',
      dish: {
        dishId: '',
        dishImage: dishes,
        dishName: '水果串串香',
        dishDesc: '豆腐、西红柿、柠檬、黄瓜、生菜、洋葱',
        dishContent: '食盐、花椒、味精、辣椒粉、香油、冰糖',
        heat: 1, /** 热量，1为低，2为中，3为高 */
        sugarContent: 2, /** 糖分 1为低，2为中，3为高 */
        grease: ''
      }
    }
  },
  mounted () {
    if (this.$route.params.dishId === undefined) {
      this.$router.go(-1)
    }
    this.$set(this.dish, 'dishId', this.$route.params.dishId)
    this.get()
  },
  methods: {
    get () {
      this.$store.dispatch('getDish', {
        uri: '/' + this.dish.dishId
      }).then(() => {
        console.info(this.$store.getters.getDish)
        let data = this.$store.getters.getDish
        if (data.code !== -1) {
          data.data.sugarContent = parseInt(data.data.sugarContent)
          data.data.heat = parseInt(data.data.heat)

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
    position: relative;
    min-hieght:60px;
    background: #fff;
    padding:2%;
  }
  .typetitle{
    font-size:18px;position: absolute;top: 30%;left: 18%
  }
   .typecontent{
    font-size:14px;margin-left: 18%;width: 55%;display: inline-block
  }
  .p{
    position: absolute;left: 35%;top: 35%;font-size: 14px;
  }
</style>
