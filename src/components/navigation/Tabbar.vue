<template>
  <div class="tabbar d-flex flex-row flex-ai-center flex-jc-center bg-white">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-tabbar',
  props: {
    value: {
      type: String
    },
    // 是否使用路由模式，如果是，则点击item时使用item的index进行跳转
    router: {
      type: Boolean,
      default: false
    },
    imageType: {
      type: String,
      // 支持iconfont image, svg模式不好处理子节点的颜色，此时可以用slot处理
      default: 'iconfont'
    }
  },
  data () {
    return {
      bars: []
    }
  },
  computed: {
    activeIndex () {
      return this.bars.map(bar => bar.index).indexOf(this.value) || 0
    }
  },
  methods: {
    addBar (bar) {
      this.bars.push(bar)
    },
    removeBar (bar) {
      this.bars.splice(this.bars.indexOf(bar), 1)
    },
    selectBar (bar) {
      this.$emit('input', bar)
      this.$emit('change', bar)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../assets/styles/variable.styl"
.tabbar
  position relative
  box-shadow 0 -1px 20px rgba($color-primary, .3)
</style>
