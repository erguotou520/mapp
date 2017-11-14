<template>
  <div class="tabbar-item flex-1 d-flex flex-column flex-ai-center flex-jc-center"
    :class="[actived?'actived':'']" @click="onClick">
    <span v-if="!$slots.normal&&$parent&&$parent.imageType==='iconfont'"
      class="icon-font" :style="{fontFamily}">
      <slot></slot>
    </span>
    <span class="text">{{label}}</span>
  </div>
</template>
<script>
export default {
  name: 'm-tabbar-item',
  props: {
    label: {
      type: String,
      required: true
    },
    index: String,
    // 图片模式的地址
    normalUrl: String,
    activeUrl: String,
    // iconfont模式的字体family
    fontFamily: {
      type: String,
      default: 'iconfont'
    }
  },
  data () {
    return {
      parent: null
    }
  },
  computed: {
    actived () {
      return this.parent && this.parent.value === this.index
    }
  },
  methods: {
    onClick () {
      if (this.parent) {
        this.parent.selectBar(this.index)
        if (this.$router && this.parent.router) {
          this.$router.push(this.index)
        } else {
          this.$emit('click')
        }
      }
    }
  },
  created () {
    let parent = this.$parent
    while (parent.$parent && parent.$options._componentTag !== 'm-tabbar') {
      parent = parent.$parent
    }
    if (parent.$options._componentTag !== 'm-tabbar') {
      return console.error('m-tabbar-item不能单独使用')
    }
    this.parent = parent
  },
  beforeDestroy () {
    this.parent && this.parent.removeBar(this)
  }
}
</script>
<style lang="stylus" scoped>
@import "../assets/styles/variable.styl"
.tabbar-item
  height 88px
  color $color-text-minor
  &.actived
    color $color-primary
  .icon-font
    font-size 36px
  .text
    font-size 24px
</style>
