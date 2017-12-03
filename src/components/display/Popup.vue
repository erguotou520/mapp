<template>
  <transition :name="'popup-'+position">
    <div v-if="value" class="m-popup flex flex-column" :class="['position-'+position,full?'full':'']">
      <div class="mask-bg" @click="outsideClick"></div>
      <div class="popup-content flex flex-column">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'm-popup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom'
    },
    full: {
      type: Boolean
    },
    backdrop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    outsideClick () {
      if (this.backdrop) {
        this.$emit('input', false)
      }
    }
  }
}
</script>
<style lang="stylus">
.m-popup
  position fixed
  z-index 11
  .popup-content
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
