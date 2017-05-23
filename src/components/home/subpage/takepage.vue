<template>
  <div>
    <x-header v-on:click="$router.back()">取号</x-header>

    <div class="card-demo-flex card-demo-content">
      <div  >
        <group>
          <cell title="附近" is-link arrow-direction="down"></cell>
        </group>
      </div>
      <div >
        <group>
          <cell title="全部" is-link arrow-direction="down"></cell>
        </group>
      </div>
      <div>
        <group>
          <cell title="排序" is-link arrow-direction="down"></cell>
        </group>
      </div>
    </div>







  </div>
</template>

<script>
  import { Card, Masker, XHeader, TransferDom, Group, Cell } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Masker,
      XHeader,
      Group,
      Cell,
      Card
    },
//    created () {
//      // 数据交互：通过this.$route.params或.query取出数据
//      console.info(this.$route.params)
//    },
    data () {
      return {
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
    methods: {
      business_info (item) {
        alert(item.title)
      }
    }
  }
</script>

<style lang="less">
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01  {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
</style>
