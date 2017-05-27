<template>
  <div>
    <x-header v-on:click="$router.back()">蕨菜</x-header>
    <div class="carousel-wrap" id="carousel">
      <transition-grop tag="ul" class="slide-ul" name="list">
        <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @onmouseenter="stop" @mouseleave="go">
          <a href="#">
            <img :src="list.image">
          </a>
        </li>
      </transition-grop>
      <div class="carousel-items">
        <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { mapState } from 'vuex'
  export default {
    components: {
      XHeader
    },
    data () {
      return {
        slideList: [{
          image: '../../assets/img/carousel1.png'
        }, {
          image: '../../assets/img/carousel1.png'
        }, {
          image: '../../assets/img/carousel1.png'
        }],
        currentIndex: 0,
        timer: ''
      }
    },
    methods: {
      created () {
        this.$nextTick(() => {
          this.timer = setInterval(() => {
            this.autoplay()
          }, 500)
        })
      },
      go () {
        this.time = setInterval(() => {
          this.autoplay()
        })
      },
      stop () {
        clearInterval(this.timer)
        this.timer = null
      },
      change (index) {
        this.currentIndex = index
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
    computed: mapState([
      'ranking'
    ])
  }
</script>

<style scoped>
  .carousel-wrap{
    position: relative;
    height: 30%;
    width:100%;
    overflow:hidden;
    background-color: #fff;
  }
  .slide-ul{
    width:100%;
    height:100%;
  }
  .slide-ul li{
    width:100%;
    height:100%;
    position: absolute;
  }
  .slide-ul li img{
    width:100%;
    height:100%;
  }
  .carousel-items{
    position: absolute;
    z-index:10;
    top:20%;
    width:100%;
    margin:0 auto;
    text-align: center;
    font-size:0;
  }
  .carousel-items span{
    display: inline-block;
    height:5%;
    width:10%;
    margin:0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .carousel-items .active{
    background-color: #59850b;
  }
  .list-enter-active {
    transition: all 1s ease;
    transform: translateX(0)
  }
  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }
  .list-enter {
    transform: translateX(100%)
  }
  .list-leave {
    transform: translateX(0)
  }

</style>
