<template>
  <transition :name="'popup-'+effect">
    <div v-if="value" class="popup flex flex-column" :class="['position-'+effect,full?'full':'']">
      <div class="mask-bg"></div>
      <div class="popup-content flex flex-1" v-clickoutside="()=>$emit('input',false)">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'u-popup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      default: 'bottom'
    },
    full: {
      type: Boolean
    }
  }
}
</script>
<style lang="stylus" scoped>
.popup
  position fixed
  z-index 11
  .popup-content
    position absolute
    left 0
    top 0
    bottom 0
    width 100%
    background-color #f9fafc
    z-index 101
  &.position-top
    top 0
    left 0
    width 100%
    &.full
      bottom 0
  &.position-right
    top 0
    right 0
    bottom 0
    &.full
      width 100%
  &.position-bottom
    left 0
    bottom 0
    width 100%
    &.full
      top 0
  &.position-left
    left 0
    top 0
    bottom 0
    &.full
      width 100%
</style>
