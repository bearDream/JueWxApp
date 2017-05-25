<template>
  <div>
    <x-header v-on:click="$router.back()">我的发布</x-header>
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
