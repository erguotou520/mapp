<template>
  <div class="flex-1 flex flex-column" :class="[name?`page-${name}`:'']">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'page',
  props: {
    name: { type: String }
  }
}
</script>
