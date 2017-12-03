<template>
  <m-input v-bind="$props" class="m-search px-2 py-2"
    @input="e=>$emit('input', e.target.value)"></m-input>
</template>
<script>
export default {
  name: 'm-search',
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: String
  }
}
</script>
<style lang="stylus">
@import "../../assets/styles/variable.styl"
.m-search.m-input
  background-color $color-grey-5
  input
    border-radius 8px
    background-color #fff
    border none !important
    &:focus
    &:active
      color $color-grey-8
      placeholder-color $color-grey-5
</style>
