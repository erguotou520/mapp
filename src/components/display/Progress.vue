<template>
  <div class="progress">
    <div class="complete" :style="{width:`${percent}%`}"></div>
  </div>
</template>
<script>
export default {
  name: 'u-progress',
  props: {
    percent: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "./var.styl"
.progress
  position absolute
  width 100%
  height 8px
  background-color $color-text-disabled
  .completed
    height 100%
    background-color $color-primary
</style>
