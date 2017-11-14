export default {
  props: {
    value: [String, Number, Object]
  },
  computed: {
    actived () {
      return this.value === this.$parent.value
    }
  },
  created () {
    this.$parent.addChild(this)
  },
  destroyed () {
    this.$parent.removeChild(this)
  }
}
