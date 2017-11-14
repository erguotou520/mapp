<template>
  <div class="input-field" :class="{'with-border':showBorder}">
    <div v-if="$slots.left" class="left flex flex-main-center flex-cross-center">
      <slot name="left"></slot>
    </div>
    <input class="input" :class="[!!$slots.left ? 'with-left' : '', !!$slots.right ? 'with-right': '']"
      :value="inputVal" v-bind="$props"
      @input="handleInput"
      @focus="e=>$emit('focus', e)"
      @blur="e=>$emit('blur', e)"
      ref="input">
    </input>
    <div v-if="$slots.right" class="right flex flex-main-center flex-cross-center">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number, Date],
    placeholder: String,
    showBorder: Boolean,
    autofocus: true,
    tabindex: String,
    readonly: Boolean
  },
  data () {
    return {
      inputVal: this.value
    }
  },
  watch: {
    value (val) {
      this.inputVal = val
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.$refs.input.value)
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "./var.styl"
$input-height = 36
.input-field
  position relative
  justify-content center
  &.with-border
    .input
      border 1px solid $color-disabled
.left
  position absolute
  left 0
  top 0
  min-width ($input-height)px
  height ($input-height)px
.right
  position absolute
  right 0
  top 0
  min-width ($input-height)px
  height ($input-height)px
.input
  width 100%
  padding-left 10px
  padding-right 10px
  height ($input-height)px
  font-size 14px
  border-radius 2px
  border none
  border-bottom 1px solid $color-text-minor
  background-color transparent
  &:focus
  &:active
    border-color $color-primary
    color $color-primary
    placeholder-color $color-primary
    &::-webkit-input-placeholder
      color $color-primary
.with-left
  padding-left ($input-height)px
.with-right
  padding-right ($input-height)px
</style>
