<template>
  <div class="cell flex flex-main-center flex-between">
    <div class="left flex flex-cross-center">
      <slot name="icon"></slot>
      <span class="text" :style="[$slots.icon ? {'margin-left':'10px'}: {}]">{{text}}</span>
    </div>
    <div class="right flex flex-cross-center">
      <span class="value" :style="[$slots.right ? {'margin-right':'10px'}: {}]">{{value}}</span>
      <slot name="right"></slot>
      <div v-if="showArrow" class="arrow"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-cell',
  props: {
    text: String,
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "./var.styl"
.cell
  min-height 48px
  padding 0 10px
  background-color #fff
  border-bottom 1px solid $color-text-disabled
.text
  color $color-text-highlight
  font-size 14px
.value
  color $color-text-primary
  font-size 13px
.arrow
  width 8px
  height @width
  margin-top 3px
  border-right 1px solid $color-text-primary
  border-bottom 1px solid $color-text-primary
  transform rotate(-45deg)
</style>
