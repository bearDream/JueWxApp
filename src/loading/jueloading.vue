<template>
  <div>
    loading..............
    <img :src="img" style="width: 100%">
  </div>
</template>

<script>
  import jueloading from '../assets/img/jueloading.gif'
  export default {
    name: 'JueLoading',
    data () {
      return {
        img: jueloading
      }
    }
  }
  console.log('jueloading.....')
</script>

<style scoped>
  div{
    font-size:40px;
    color:#f60;
    text-align:center;
  }
</style>
