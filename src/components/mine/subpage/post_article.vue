<template>
  <div>
    <x-header v-on:click="$router.back()">发布文章</x-header>
    <div >
      <form action="">
        <input type="image" id="file" >
      </form>
        <label class="cover" for="file">
          <p> + 添加封面</p>
        </label>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    }
  }
</script>
<style>
  .cover{
    display: block;
    margin: 20px;
    width: 90%;
    height: 100px;
    position: relative;
    border: 2px dashed #c9c9c9;
    z-index: 2;
  }
  .cover p{
    color: #c9c9c9;
    font-size: 20px;
    text-align: center;
    position: absolute;
    top:30px;
    left: 35%;
    z-index: 0;
  }
</style>
