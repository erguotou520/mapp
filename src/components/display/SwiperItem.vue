<template>
  <div v-show="selected||index===$parent.targetIndex" class="swiper-item">
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

</style>
