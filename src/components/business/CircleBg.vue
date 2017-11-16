<template>
  <svg viewBox="0 0 1366 500">
    <!-- M0,300H1366V49.9C1184.41,18.86,945.17,0,683,0S181.59,18.86,0,49.9Z -->
    <path :class="$style.primary" d="M0,0 L1366,0 L1366,300 C1366,300 1064.00696,500 683,500 C301.993042,500 0,300 0,300 L0,0 Z"/>
  </svg>
</template>
<script>
export default {
  name: 'circle-bg'
}
</script>
<style lang="stylus" module>
@import '../../assets/styles/variable.styl'
.primary
  fill $color-primary
</style>
