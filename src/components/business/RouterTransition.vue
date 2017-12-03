<template>
  <div class="router-transition flex flex-1 flex-column">
    <transition v-if="$route.meta.keepAlive" :name="transitionName">
      <keep-alive>
        <router-view :key="$route.path"></router-view>
      </keep-alive>
    </transition>
    <transition v-else :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'router-transition',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      // 指定了direction
      if (to.meta.direction) {
        this.transitionName = to.meta.direction > 0 ? 'slide-left' : 'slide-right'
        return
      }
      if (from.meta.direction) {
        this.transitionName = from.meta.direction < 0 ? 'slide-left' : 'slide-right'
        return
      }
      const fromOrder = from.meta.order || -1
      const toOrder = to.meta.order || -1
      this.transitionName = fromOrder > toOrder ? 'slide-right' : (fromOrder < toOrder || toOrder !== -1 ? 'slide-left' : '')
    }
  }
}
</script>
<style lang="stylus">
.router-transition
  position relative
  overflow-x hidden
  overflow-y auto
  > [class*=-enter]
  > [class*=-leave]
    position absolute
    left 0
    top 0
    width 100%
</style>
