<template>
  <x-header v-on:click="$router.back()">营养*早餐</x-header>
</template>
<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    }
  }
</script>
