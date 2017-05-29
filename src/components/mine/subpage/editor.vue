<template>
  <div>
    <x-header :left-options="{backText: ''}" v-on:click="$router.back()">编辑资料</x-header>
    <group>
      <cell title="头像" is-link @click.native="avatarshow1"></cell>
    </group>
    <group>
      <cell title="昵称" is-link></cell>
    </group>
    <template>
        <div>
          <p>编辑头像</p>
        </div>
    </template>
  </div>
</template>

<script>
  import { XHeader, Group, Cell } from 'vux'

  export default {
    components: {
      XHeader,
      Group,
      Cell,
      date () {
        return {
          avatarshow: false
        }
      },
      methods: {
        avatarshow1 () {
          alert(123)
          this.avatarshow = !this.avatarshow
        }
      }
    }
  }
</script>
