<template>
  <div class="m-input" :class="{'with-border':showBorder}">
    <div v-if="$slots.left" class="input-left flex flex-js-center flex-ai-center">
      <slot name="left"></slot>
    </div>
    <input class="input" :class="[!!$slots.left ? 'with-left' : '', !!$slots.right ? 'with-right': '']"
      :value="value" v-bind="$props"
      @input="e=>$emit('input', e.target.value)"
      @change="e=>$emit('change', e.target.value)"
      @focus="e=>$emit('focus', e)"
      @blur="e=>$emit('blur', e)"
      ref="input">
    </input>
    <div v-if="$slots.right" class="input-right flex flex-jc-center flex-ai-center">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number, Date],
    placeholder: String,
    showBorder: Boolean,
    autofocus: Boolean,
    tabindex: String,
    readonly: Boolean
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    }
  }
}
</script>
<style lang="stylus">
@import "../../assets/styles/variable.styl"
$input-height = 72
.m-input
  position relative
  justify-content center
  &.with-border
    .input
      border 1px solid $color-disabled
  .input-left
    position absolute
    left 0
    top 0
    min-width ($input-height)px
    height ($input-height)px
  .input-right
    position absolute
    right 0
    top 0
    min-width ($input-height)px
    height ($input-height)px
  .input
    width 100%
    padding-left 20px
    padding-right 20px
    height ($input-height)px
    border-radius 4px
    border none
    border-bottom 1px solid $color-grey-5
    background-color transparent
    &:focus
    &:active
      border-color $color-primary
      color $color-primary
      placeholder-color $color-primary
      outline none
      &::-webkit-input-placeholder
        color $color-primary
  .with-left
    padding-left ($input-height)px
  .with-right
    padding-right ($input-height)px
</style>
