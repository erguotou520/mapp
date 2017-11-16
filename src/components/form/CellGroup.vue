<template>
  <div class="cell-group bg-white">
    <div v-if="title||$slots.left||$slots.right" class="cell-header px-3 py-2">
      <span v-if="!$slots.left&&title" class="text-grey font-24">{{title}}</span>
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-cell-group',
  props: {
    title: String
  }
}
</script>
<style lang="stylus">
.cell-group + .cell-group
  margin-top 10px
</style>
