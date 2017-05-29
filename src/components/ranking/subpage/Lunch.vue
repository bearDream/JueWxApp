<template>
  <x-header v-on:click="$router.back()">爱心*午餐</x-header>
</template>
<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    }
  }
</script>
