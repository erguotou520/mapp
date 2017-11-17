<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-swiper-item'
}
</script>
<style lang="stylus">
.swiper-item
  flex 0 0 auto
  width 100%
</style>
