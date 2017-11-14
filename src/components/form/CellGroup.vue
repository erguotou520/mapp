<template>
  <div class="cell-group">
    <div class="header">
      <span v-if="!$slots.left&&title" class="title">{{title}}</span>
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'u-cell-group',
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
@import "./var.styl"
.cell-group
  background-color #fff
.header
  padding 8px 10px
  background-color $color-background
.title
  color $color-text-minor
  font-size 12px
.text
  color $color-text-highlight
</style>
