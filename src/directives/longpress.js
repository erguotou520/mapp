const HANDLER = '_vue_longpress_handler'
// 最大允许的手指位移量
const MAX_MOVE_OFFSET = 10
// 长按时长
const LONG_PRESS_TIMEOUT = 1000

export default {
  bind: (el, binding) => {
    // 触点坐标 x y
    let x = 0
    let y = 0
    // 时长标记
    let z = 0
    let timer = null

    function onTouchStart (e) {
      if (e.touches.length > 1) {
        return false
      }
      z = 0
      timer = setTimeout(() => {
        z = 1
        binding.value()
      }, LONG_PRESS_TIMEOUT)
      x = e.touches[0].clientX
      y = e.touches[0].clientY

      el.addEventListener('touchmove', onTouchMove, false)
      el.addEventListener('touchend', onTouchEnd, false)
    }

    function onTouchMove (e) {
      if (Math.abs(x - e.touches[0].clientX) > MAX_MOVE_OFFSET || Math.abs(y - e.touches[0].clientY) > MAX_MOVE_OFFSET) {
        clearTimeout(timer)
        return false
      }
    }

    function onTouchEnd () {
      if (z !== 1) {
        clearTimeout(timer)
        x = 0
        y = 0
        return false
      } else {
        x = 0
        y = 0
        z = 0
        binding.value()
      }
      el.removeEventListener('touchmove', onTouchMove, false)
      el.removeEventListener('touchend', onTouchEnd, false)
    }

    el.addEventListener('touchstart', onTouchStart, false)
    el[HANDLER] = onTouchStart
  },
  unbind: (el) => {
    el.removeEventListener('touchstart', el[HANDLER], false)
    delete el[HANDLER]
  }
}
