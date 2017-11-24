<template>
  <page>
    <m-header>
      <span>组件功能展示</span>
      <span slot="right" class="iconfont icon-plus"></span>
    </m-header>
    <div class="scroll-y pos-r">
      <m-cell text="Popup" @click.native="popup1=true"></m-cell>
    </div>
    <m-popup v-model="popup1">
      123
    </m-popup>
  </page>
</template>
<script>
export default {
  data () {
    return {
      popup1: false
    }
  }
}
</script>
<style lang="stylus">
</style>
