<template>
  <div class="flex flex-1 flex-column">
    <div class="tab-nav flex flex-row">
      <span v-for="tab in tabs" class="tab flex-1" :class="[tab.value===value? 'tab-active' : '']" @click="selectTab(tab)">{{tab.label}}</span>
      <div class="line" ref="line" :style="{width: `${100/tabs.length}%`, transform: `translateX(${this.activeIndex * 100}%)`}"></div>
    </div>
    <div class="tab-content flex-1 scroll-y">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-tabs',
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: 0
    }
  },
  data () {
    return {
      tabs: [],
      transitionName: 'slide-right'
    }
  },
  computed: {
    activeIndex () {
      return this.tabs.map(tab => tab.value).indexOf(this.value) || 0
    }
  },
  methods: {
    addTab (tab) {
      this.tabs.push(tab)
    },
    removeTab (tab) {
      this.tabs.splice(this.tabs.indexOf(tab), 1)
    },
    selectTab (tab) {
      this.$emit('input', tab.value)
      this.$emit('change', tab.value)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "./var.styl"
$tab-height = 88px
.tab-nav
  position relative
  height $tab-height
.tab
  flex 1
  height $tab-height
  line-height $tab-height
  font-size 28px
  text-align center
  color $color-text-highlight
.tab-active
  color $color-primary
.line
  position absolute
  bottom 0
  left 0
  height 2px
  background-color $color-primary
  transition all .3s ease-in-out
.tab-content
  padding-top 20px
</style>
