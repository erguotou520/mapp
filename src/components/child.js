export default {
  props: {
    value: [String, Number, Object]
  },
  data () {
    return { index: this.value !== undefined ? this.value : -1 }
  },
  computed: {
    selected () {
      return this.index === this.$parent.activedIndex
    }
  },
  methods: {
    setIndex (index) {
      this.index = index
    }
  },
  created () {
    this.$parent.addChild(this)
  },
  destroyed () {
    this.$parent.removeChild(this)
  }
}
