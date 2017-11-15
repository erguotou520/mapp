export default {
  props: {
    value: [String, Number, Object]
  },
  data () {
    return {
      children: [],
      activedIndex: this.value !== undefined ? this.value : -1
    }
  },
  watch: {
    value (v) {
      this.activedIndex = v
    }
  },
  methods: {
    addChild (child) {
      this.children.push(child)
      // if child's name is not set, set child's index as the index of children
      if (!child.value) {
        child.setIndex(this.children.length)
      }
      // set the default activedIndex to the first child's index
      if (this.value === undefined && this.children.length === 1) {
        this.activedIndex = child.index
      }
    },
    removeChild (child) {
      const index = this.children.indexOf(child)
      this.children.splice(index, 1)
    }
  }
}
