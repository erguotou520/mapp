<template>
  <div class="common-nav-view flex-1 flex flex-column">
    <router-transition></router-transition>
    <m-tabbar router :value="$route.path">
      <m-tabbar-item index="/" label="首页">&#xe64f;</m-tabbar-item>
      <m-tabbar-item index="/list" label="发现">&#xe643;</m-tabbar-item>
      <m-tabbar-item index="/my" label="我的">&#xe659;</m-tabbar-item>
    </m-tabbar>
  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="stylus">
.common-nav-view
  padding-bottom 88px
  .m-tabbar
    position fixed
    bottom 0
    left 0
    width 100%
</style>
