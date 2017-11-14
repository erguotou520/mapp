<template>
  <button class="btn t-c" :type="nativeType"
    :class="['btn-tp-' + type, 'btn-sz-' + size, disabled ? 'btn-disabled' : '']"
    @click="e => $emit('click', e)">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'u-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>
<style lang="stylus">
@import "./var.styl"
.btn
  width 100%
  height 44px
  line-height 42px
  border-radius 4px
  font-size 16px
  font-weight 300
  color #fff
  border none
.btn-tp-primary
  background-color $color-primary
  &:active
    background-color darken($color-primary, 10%)
  &.btn-disabled
    background-color rgba($color-primary, 0.52)
.btn-tp-minor
  background-color $color-btn-minor
  &:active
    background-color darken($color-btn-minor, 10%)
  &.btn-disabled
    background-color rgba($color-btn-minor, 0.52)
.btn-tp-text
  border-radius 0
  color $color-text-primary
  background-color transparent
</style>
