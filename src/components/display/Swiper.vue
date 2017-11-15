<template>
  <div class="swiper-container flex flex-row">
    <slot></slot>
    <div class="indicators">
      <span class="indicator"></span>
    </div>
  </div>
</template>
<script>
import parent from '../parent'
export default {
  name: 'm-swiper',
  mixins: [parent],
  props: {
    showIndicators: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      targetIndex: -1
    }
  },
  computed: {
    // 当前页
    currentPage () {
      if (this.children.length && this.activedIndex > -1) {
        return this.children[this.activedIndex]
      }
    },
    // 即将前往的页面
    targetPage () {
      if (this.children.length && this.targetIndex > -1) {
        return this.children[this.targetIndex]
      }
    }
  },
  methods: {
    next () {
      this.$emit('input', this.value + 1)
      this.activedIndex++
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.next()
    }, this.interval)
  }
}
</script>
<style lang="stylus" scoped>

</style>
