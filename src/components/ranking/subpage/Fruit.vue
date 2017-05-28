<template>
  <x-header v-on:click="$router.back()">水果紫米粥</x-header>
</template>
<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    }
  }
</script>
