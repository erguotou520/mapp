<template>
  <transition name="toast">
    <div class="c-toast-wrapper" v-show="value">
      <span class="toast flex-inline flex-row flex-ai-center">{{message}}</span>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'm-toast',
  props: {
    message: String,
    value: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.toast-wrapper
  position fixed
  left 0
  bottom 20%
  width 100%
  text-align center
.toast
  height 48px
  padding 0 24px
  font-size 24px
  border-radius 24px
  color #fff
  background-color rgba(0, 0, 0, .5)
</style>
