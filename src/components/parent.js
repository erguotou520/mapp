export default {
  props: {
    value: [String, Number, Object]
  },
  data () {
    return {
      children: []
    }
  },
  methods: {
    addChild (child) {
      this.children.push(child)
    },
    removeChild (child) {
      const index = this.children.indexOf(child)
      this.children.splice(index, 1)
    }
  }
}
