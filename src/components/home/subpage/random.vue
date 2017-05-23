<template>
  <x-header v-on:click="$router.back()">随机来几个菜</x-header>
</template>
<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    }
  }
</script>
