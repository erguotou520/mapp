<template>
  <div v-show="maskShow" class="mask-bg flex flex-column flex-ai-center flex-jc-center">
    <transition name="confirm">
      <div v-show="value" class="modal px-4 py-4">
        <div class="modal-body flex flex-column flex-ai-center flex-jc-center mb-4">
          <div class="modal-title text-secondary mb-3">{{title}}</div>
          <p v-if="content" class="modal-content">{{content}}</p>
        </div>
        <div class="modal-btns flex flex-ai-center flex-jc-center">
          <button class="cancel text-center" @click="cancel">取消</button>
          <button class="ok text-center" @click="ok">确定</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'm-confirm',
  props: {
    title: String,
    content: String,
    value: Boolean
  },
  data () {
    return {
      maskShow: false
    }
  },
  watch: {
    value (show) {
      if (show) {
        this.maskShow = true
      } else {
        this.$nextTick(() => {
          // TODO:优化
          setTimeout(() => {
            this.maskShow = false
          }, 200)
        })
      }
    }
  },
  methods: {
    cancel () {
      this.$emit('input', false)
      this.$emit('cancel')
    },
    ok () {
      this.$emit('input', false)
      this.$emit('ok')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/styles/variable.styl"
.modal
  min-width 560px
  max-width 640px
  border-radius 8px
  background-color #fff
.cancel
.ok
  -webkit-appreance none
  height 84px
  width 240px
  border none
  border-radius 4px
.cancel
  margin-right 20px
  background-color #e7ecf2
.ok
  margin-left 20px
  color #fff
  background-color $color-primary
</style>
