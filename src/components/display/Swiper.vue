<!-- refer to: https://github.com/weilao/vue-swiper -->
<template>
  <div class="m-swiper pos-r over-hide" :class="[direction, {'dragging': dragging}]"
     @touchstart="_onTouchStart" @mousedown="_onTouchStart">
    <div class="flex swiper-wrap" ref="swiperWrap" @transitionend="_onTransitionEnd"
       :style="{
          'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)',
          'transition-duration': transitionDuration + 'ms'
       }">
      <slot></slot>
    </div>
    <div class="swiper-pagination" v-show="showDots">
      <span v-for="(slide,index) in slideEls" class="swiper-pagination-bullet"
        :class="{'active': index+1===currentPage}"
        @click="setPage(index+1)">
      </span>
    </div>
  </div>
</template>
<script>
const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'
export default {
  name: 'm-swiper',
  props: {
    direction: {
      type: String,
      default: VERTICAL,
      validator: (value) => [VERTICAL, HORIZONTAL].indexOf(value) > -1
    },
    performanceMode: Boolean,
    showDots: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 500
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      currentPage: 1,
      lastPage: 1,
      translateX: 0,
      translateY: 0,
      startTranslate: 0,
      delta: 0,
      dragging: false,
      startPos: null,
      transitioning: false,
      slideEls: [],
      translateOffset: 0,
      transitionDuration: 0,
      timer: null
    }
  },
  computed: {
    isHorizontal () {
      return this.direction === HORIZONTAL
    },
    isVertical () {
      return this.direction === VERTICAL
    }
  },
  methods: {
    next () {
      const page = this.currentPage
      if (page < this.slideEls.length || this.loop) {
        this.setPage(page + 1)
      } else {
        this._revert()
      }
    },
    prev () {
      const page = this.currentPage
      if (page > 1 || this.loop) {
        this.setPage(page - 1)
      } else {
        this._revert()
      }
    },
    setPage (page, noAnimation) {
      this.lastPage = this.currentPage
      if (page === 0) {
        this.currentPage = this.slideEls.length
      } else if (page === this.slideEls.length + 1) {
        this.currentPage = 1
      } else {
        this.currentPage = page
      }
      if (this.loop) {
        if (this.delta === 0) {
          this._setTranslate(this._getTranslateOfPage(this.lastPage))
        }
        setTimeout(() => {
          this._setTranslate(this._getTranslateOfPage(page))
          if (noAnimation) return
          this._onTransitionStart()
        }, 0)
      } else {
        this._setTranslate(this._getTranslateOfPage(page))
        if (noAnimation) return
        this._onTransitionStart()
      }
    },
    _onTouchStart (e) {
      this.startPos = this._getTouchPos(e)
      this.delta = 0
      this.startTranslate = this._getTranslateOfPage(this.currentPage)
      this.startTime = new Date().getTime()
      this.dragging = true
      this.transitionDuration = 0
      this.$refs.swiperWrap.addEventListener('touchmove', this._onTouchMove, false)
      this.$refs.swiperWrap.addEventListener('touchend', this._onTouchEnd, false)
      this.$refs.swiperWrap.addEventListener('mousemove', this._onTouchMove, false)
      this.$refs.swiperWrap.addEventListener('mouseup', this._onTouchEnd, false)
    },
    _onTouchMove (e) {
      this.delta = this._getTouchPos(e) - this.startPos
      if (!this.performanceMode) {
        this._setTranslate(this.startTranslate + this.delta)
        this.$emit('slider-move', this._getTranslate())
      }
      if (this.isVertical || this.isHorizontal && Math.abs(this.delta) > 0) {
        e.preventDefault()
      }
    },
    _onTouchEnd (e) {
      this.dragging = false
      this.transitionDuration = this.speed
      const isQuickAction = new Date().getTime() - this.startTime < 1000
      // 滑动距离和滑动时间综合判断
      if (this.delta < -100 || (isQuickAction && this.delta < -15)) {
        this.next()
      } else if (this.delta > 100 || (isQuickAction && this.delta > 15)) {
        this.prev()
      } else {
        this._revert()
      }
      this.$refs.swiperWrap.removeEventListener('touchmove', this._onTouchMove)
      this.$refs.swiperWrap.removeEventListener('touchend', this._onTouchEnd)
      this.$refs.swiperWrap.removeEventListener('mousemove', this._onTouchMove)
      this.$refs.swiperWrap.removeEventListener('mouseup', this._onTouchEnd)
    },
    _revert () {
      this.setPage(this.currentPage)
    },
    _getTouchPos (e) {
      const key = this.isHorizontal ? 'pageX' : 'pageY'
      return e.changedTouches ? e.changedTouches[0][key] : e[key]
    },
    _onTransitionStart () {
      this.transitioning = true
      this.transitionDuration = this.speed
      if (this._isPageChanged()) {
        this.$emit('slide-change-start', this.currentPage)
      } else {
        this.$emit('slide-revert-start', this.currentPage)
      }
    },
    _onTransitionEnd () {
      this.transitioning = false
      this.transitionDuration = 0
      this.delta = 0
      if (this._isPageChanged()) {
        this.$emit('slide-change-end', this.currentPage)
      } else {
        this.$emit('slide-revert-end', this.currentPage)
      }
    },
    _isPageChanged () {
      return this.lastPage !== this.currentPage
    },
    _setTranslate (value) {
      const translateName = this.isHorizontal ? 'translateX' : 'translateY'
      this[translateName] = value
    },
    _getTranslate () {
      const translateName = this.isHorizontal ? 'translateX' : 'translateY'
      return this[translateName]
    },
    _getTranslateOfPage (page) {
      if (page === 0) return 0
      const propName = this.isHorizontal ? 'clientWidth' : 'clientHeight'
      return -[].reduce.call(this.slideEls, function (total, el, i) {
        return i > page - 2 ? total : total + el[propName]
      }, 0) + this.translateOffset
    },
    _createLoop () {
      const propName = this.isHorizontal ? 'clientWidth' : 'clientHeight'
      const swiperWrapEl = this.$refs.swiperWrap
      const duplicateFirstChild = swiperWrapEl.firstElementChild.cloneNode(true)
      const duplicateLastChild = swiperWrapEl.lastElementChild.cloneNode(true)
      swiperWrapEl.insertBefore(duplicateLastChild, swiperWrapEl.firstElementChild)
      swiperWrapEl.appendChild(duplicateFirstChild)
      this.translateOffset = -duplicateLastChild[propName]
    },
    // 开始轮播
    _startInterval () {
      if (this.autoPlay) {
        this.timer = setInterval(() => {
          this.next()
        }, this.interval)
      }
    },
    // 关闭轮播
    _stopInterval () {
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
    _onPageHidden () {
      // 页面不可见时关闭循环
      if (document.hidden) {
        this._stopInterval()
      } else {
        // 重新获取是重新开始动画
        this._startInterval()
      }
    }
  },
  mounted () {
    this.slideEls = [].map.call(this.$refs.swiperWrap.children, el => el)
    if (this.loop) {
      this.$nextTick(() => {
        this._createLoop()
        this.setPage(this.currentPage, true)
      })
    } else {
      this.setPage(this.currentPage)
    }
    // 开始轮播
    this._startInterval()
  },
  beforeDestroy () {
    this._stopInterval()
  }
}
</script>
<style lang="stylus">
.m-swiper {
  .swiper-wrap {
    display: flex;
    width: 100%;
    height: 100%;
    transition: all 0ms ease;

    > div {
      overflow: hidden;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
    }
  }

  &.horizontal .swiper-wrap {
    flex-direction: row;
  }

  &.vertical .swiper-wrap {
    flex-direction: column;
  }

  .swiper-pagination {
    position: absolute;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #000000;
      opacity: .2;
      transition: all .5s ease;
    }

    .swiper-pagination-bullet.active {
      background: #007aff;
      opacity: 1;
    }
  }

  &.vertical .swiper-pagination {
    right: 10px;
    top: 50%;
    transform: translate3d(0, -50%, 0);

    .swiper-pagination-bullet {
      display: block;
      margin: 6px 0;
    }
  }

  &.horizontal .swiper-pagination {
    bottom: 10px;
    width: 100%;
    text-align: center;

    .swiper-pagination-bullet {
      display: inline-block;
      margin: 0 3px;
    }
  }
}
</style>
