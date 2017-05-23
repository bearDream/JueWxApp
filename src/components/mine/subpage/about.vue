<template>
  <x-header v-on:click="$router.back()">关于我们</x-header>
</template>
<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    }
  }
</script>
