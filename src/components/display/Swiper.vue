<template>
  <div class="swiper-container">
    <slot></slot>
    <div class="indicators">
      <span class="indicator"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-swiper',
  props: {
    value: Number,
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>

</style>
