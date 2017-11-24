<template>
  <page>
    <m-cell text="Popup" @click.native="popup1=true"></m-cell>
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
