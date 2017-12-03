<template>
  <div class="m-cell px-3 flex flex-row flex-ai-center flex-jc-between bg-white">
    <div class="left flex flex-ai-center">
      <slot name="icon"></slot>
      <span class="font-28" :style="[$slots.icon ? {'margin-left':'10px'}: {}]">{{text}}</span>
    </div>
    <div class="right flex flex-ai-center">
      <span class="font-28" :style="[$slots.right ? {'margin-right':'10px'}: {}]">{{value}}</span>
      <slot name="right"></slot>
      <div v-if="showArrow" class="arrow"></div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: 'm-cell',
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
<style lang="stylus">
@import "../../assets/styles/variable.styl"
.m-cell
  position relative
  min-height 96px
  .line
    position absolute
    left 24px
    bottom 0
    right 0
    border-top 1px solid $color-grey-3
  &:last-child .line
    border-top none
  .arrow
    width 16px
    height @width
    margin-top 6px
    border-right 1px solid $color-text-secondary
    border-bottom 1px solid $color-text-secondary
    transform rotate(-45deg)
</style>
