<script>
import parent from '../parent'
export default {
  name: 'm-swiper',
  mixins: [parent],
  props: {
    showDots: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      timer: null
    }
  },
  computed: {
    loopItems () {
      const ret = this.children.slice()
      if (this.children.length < 3) {
        ret.push(ret[0])
      }
      if (this.children.length < 3) {
        ret.push(ret[0])
      }
      return ret.splice(ret.length, 0, ...ret.splice(0, this.activedIndex))
    }
  },
  methods: {
    next () {
      this.$emit('input', this.value + 1)
      this.activedIndex++
    }
  },
  render (h) {
    return h('div', {
      'class': 'swiper flex over-hide'
    }, [
      h('div', {
        'class': 'swiper-items flex-1 flex flex-row',
        'style': {
          transform: `translate3d(${-100 * (this.activedIndex - 1)}%, 0, 0)`
        }
      }, this.loopItems.map(item => item.$slots.default)), h('div', {
        'class': 'indicators'
      }, [h('span', { class: 'indicator' })])
    ])
  },
  mounted () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.next()
      }, this.interval)
    })
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper-items
  transition all .3s ease-in-out
</style>
