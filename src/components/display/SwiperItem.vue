<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>
<script>
import child from '../child'
export default {
  name: 'm-swiper-item',
  mixins: [child]
}
</script>
<style lang="stylus" scoped>
.swiper-item
  flex 0 0 auto
  width 100%
</style>
