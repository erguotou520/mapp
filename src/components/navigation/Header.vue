<template>
  <div class="header flex flex-row flex-between flex-main-center"
    :class="['bg-' + type]">
    <div class="left flex-1 flex flex-cross-center">
      <span v-if="showBack" class="gift icon-back" @click="back"></span>
      <span v-else-if="!$slots.left">&nbsp;</span>
      <slot name="left"></slot>
    </div>
    <span class="title"><slot></slot></span>
    <div class="right flex-1 flex flex-cross-center flex-main-end">
      <span v-if="!$slots.right">&nbsp;</span>
      <slot v-else name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-header',
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
@import "./var.styl"
.header
  height 44px
  padding 0 10px
  color #fff
.bg-primary
  background-color $color-primary
.left
.right
  .gift
    font-size 18px
.title
  flex 4
  color #fff
  font-size 16px
  font-weight 300
  line-height 44px
  text-align center
</style>
