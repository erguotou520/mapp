<template>
  <button class="m-button flex-inline flex-jc-center flex-ai-center font-32" :type="nativeType"
    :class="['btn-t-' + type, 'btn-s-' + size, disabled ? 'btn-disabled' : '']"
    @click="e => $emit('click', e)">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'm-button',
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
@import "../../assets/styles/variable.styl"
.m-button
  height 80px
  border-radius 8px
  color #fff
  border none
  &.btn-t-primary
    background-color $color-primary
    &:active
      background-color darken($color-primary, 10%)
    &.btn-disabled
      background-color rgba($color-primary, 0.5)
  &.btn-t-highlight
    background-color $color-highlight
    &:active
      background-color darken($color-highlight, 10%)
    &.btn-disabled
      background-color rgba($color-highlight, 0.5)
</style>
