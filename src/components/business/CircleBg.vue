<template>
  <svg viewBox="0 0 1366 400">
    <!-- M0,300H1366V49.9C1184.41,18.86,945.17,0,683,0S181.59,18.86,0,49.9Z -->
    <path :class="$style.primary" d="M0 0 V400 H1366 V0 H0Z"/>
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
<style lang="stylus" scoped>
@import '../../assets/styles/variable.styl'
svg
  box-shadow 0 10px 40px 2px rgba($color-primary, .5)
</style>
