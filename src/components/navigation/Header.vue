<template>
  <div class="header px-3 pos-r flex flex-row flex-jc-between flex-ai-center"
    :class="['bg-' + type]">
    <div class="flex flex-cross-center">
      <span v-if="showBack" class="iconfont icon-back font-30" @click="back"></span>
      <span v-else-if="!$slots.left">&nbsp;</span>
      <slot name="left"></slot>
    </div>
    <div class="title font-32 flex flex-row flex-jc-center flex-ai-center"><slot></slot></div>
    <div class="right flex flex-ai-center flex-jc-end">
      <span v-if="!$slots.right">&nbsp;</span>
      <slot v-else name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-header',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    showBack: {
      type: Boolean,
      default: false
    },
    backUrl: {
      type: String
    },
    preventBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back () {
      if (this.preventBack) {
        this.$emit('back')
      } else if (this.backUrl) {
        this.$router.push(this.backUrl)
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
// @import "../../assets/styles/variable.styl"
.header
  height 88px
  color #fff
.title
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  width 100%
  height 100%
  color #fff
</style>
