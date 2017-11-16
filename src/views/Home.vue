<template>
  <page name="home">
    <div class="scroll-y pb-1">
      <m-swiper class="swiper">
        <m-swiper-item class="bg-white flex flex-jc-center flex-ai-center">这是内容1</m-swiper-item>
        <m-swiper-item class="bg-white flex flex-jc-center flex-ai-center">这是内容2</m-swiper-item>
        <m-swiper-item class="bg-white flex flex-jc-center flex-ai-center">这是内容3</m-swiper-item>
      </m-swiper>
      <div class="flex flex-row flex-jc-center flex-ai-center bg-white mt-1 px-3 py-3">
        <div class="nav-item flex-1 flex flex-column flex-jc-center flex-ai-center">
          <div class="nav-circle flex flex-column flex-jc-center flex-ai-center">
            <svg viewBox="0 0 1024 1024" width="90" height="90">
              <path d="M844.8 793.6c0-38.4-32-64-64-64h-512c-12.8 0-32-12.8-32-32s12.8-25.6 32-25.6h89.6c6.4 0 19.2-12.8 19.2-19.2 0-6.4-6.4-19.2-19.2-19.2H268.8c-38.4 0-64 32-64 64 0 38.4 32 64 64 64H774.4c12.8 0 32 6.4 32 25.6 0 25.6-19.2 32-32 32h-448c-6.4 0-19.2 6.4-19.2 19.2s6.4 19.2 19.2 19.2h448c19.2 0 38.4-6.4 51.2-19.2 19.2-19.2 25.6-32 19.2-44.8z" fill="#4E8CEE"></path>
              <path d="M697.6 352c0 96-172.8 300.8-172.8 300.8S352 448 352 352s76.8-172.8 172.8-172.8 172.8 76.8 172.8 172.8z" fill="#BAD4FF"></path>
              <path d="M524.8 160c-102.4 0-192 83.2-192 192 0 83.2 108.8 230.4 172.8 307.2l6.4 6.4 12.8 19.2 12.8-19.2s6.4-6.4 6.4-12.8c115.2-140.8 166.4-243.2 166.4-300.8 6.4-102.4-76.8-192-185.6-192z m0 32c89.6 0 160 70.4 160 160 0 64-89.6 185.6-140.8 249.6-6.4 12.8-12.8 19.2-19.2 25.6l-19.2-19.2c-51.2-64-140.8-185.6-140.8-249.6C364.8 268.8 435.2 192 524.8 192z" fill="#4E8CEE"></path>
              <path d="M435.2 358.4c0 44.8 38.4 89.6 89.6 89.6s89.6-38.4 89.6-89.6c0-51.2-38.4-89.6-89.6-89.6s-89.6 38.4-89.6 89.6z" fill="#FFFFFF"></path>
              <path d="M524.8 256c-57.6 0-102.4 44.8-102.4 102.4s44.8 102.4 102.4 102.4c57.6 0 102.4-44.8 102.4-102.4 0-57.6-44.8-102.4-102.4-102.4z m70.4 102.4c0 38.4-32 70.4-70.4 70.4-38.4 0-70.4-32-70.4-70.4s32-70.4 70.4-70.4c38.4 0 70.4 32 70.4 70.4z" fill="#4E8CEE"></path>
            </svg>
          </div>
          <div class="font-20 mt-1">旅游</div>
        </div>
        <div class="nav-item flex-1 flex flex-column flex-jc-center flex-ai-center">
          <div class="nav-circle flex flex-column flex-jc-center flex-ai-center">
            <svg viewBox="0 0 1024 1024" width="90" height="90">
              <path d="M646.4 550.4H550.4V512H640c6.4 0 12.8-6.4 19.2-12.8 6.4-6.4 6.4-12.8 6.4-19.2 0-6.4-6.4-19.2-12.8-19.2-6.4-6.4-12.8-6.4-19.2-6.4h-51.2l57.6-64 6.4-6.4c6.4-6.4 6.4-12.8 0-25.6 0-6.4 0-6.4-6.4-12.8-6.4 0-6.4-6.4-19.2-6.4-6.4 0-12.8 6.4-19.2 6.4L524.8 435.2 441.6 345.6c-6.4 0-6.4-6.4-19.2-6.4-6.4 0-12.8 6.4-19.2 6.4-6.4 6.4-6.4 25.6 0 38.4l57.6 70.4h-57.6c-12.8 0-25.6 12.8-25.6 25.6 0 25.6 12.8 32 25.6 32h96v38.4H403.2h-6.4c-6.4 0-6.4 0-12.8 6.4 0 6.4-6.4 12.8-6.4 25.6s12.8 25.6 25.6 25.6h89.6v89.6c0 12.8 12.8 25.6 25.6 25.6s25.6-12.8 25.6-32V601.6h89.6c12.8 0 25.6-12.8 25.6-25.6 12.8-12.8 0-25.6-12.8-25.6z" fill="#BAD4FF"></path>
              <path d="M531.2 902.4h-25.6c-25.6-6.4-51.2-12.8-76.8-25.6-44.8-19.2-89.6-51.2-121.6-83.2s-64-64-89.6-108.8c-12.8-38.4-19.2-70.4-19.2-108.8V268.8H192h6.4c32 0 64 0 89.6-6.4 25.6-6.4 57.6-12.8 83.2-19.2 38.4-12.8 76.8-32 108.8-51.2 19.2-6.4 32-19.2 44.8-32h6.4c25.6 19.2 57.6 32 83.2 51.2 38.4 19.2 76.8 32 121.6 44.8 19.2 6.4 44.8 6.4 64 12.8H851.2v332.8c-6.4 25.6-6.4 51.2-19.2 76.8-19.2 32-38.4 64-64 89.6-44.8 44.8-96 83.2-160 115.2-12.8 6.4-32 12.8-57.6 12.8-6.4 0-12.8 0-19.2 6.4M249.6 320v262.4c0 12.8 0 19.2 6.4 32 0 25.6 12.8 51.2 32 76.8 32 51.2 76.8 89.6 128 121.6l76.8 38.4c12.8 6.4 32 6.4 44.8 6.4l57.6-19.2c38.4-19.2 76.8-44.8 108.8-76.8 32-25.6 57.6-57.6 76.8-96 12.8-25.6 19.2-51.2 19.2-83.2V320c-6.4 0-19.2 0-32-6.4-38.4-6.4-70.4-12.8-102.4-25.6-44.8-19.2-89.6-38.4-134.4-64h-6.4c-32 19.2-64 32-96 51.2-44.8 19.2-89.6 32-134.4 38.4-19.2 6.4-32 6.4-44.8 6.4" fill="#4E8CEE"></path>
            </svg>
          </div>
          <div class="font-20 mt-1">购物</div>
        </div>
        <div class="nav-item flex-1 flex flex-column flex-jc-center flex-ai-center">
          <div class="nav-circle flex flex-column flex-jc-center flex-ai-center">
            <svg viewBox="0 0 1024 1024" width="90" height="90">
              <path d="M179.2 460.8h646.4v230.4H179.2V460.8z" fill="#BAD4FF"></path>
              <path d="M710.4 403.2l-153.6 128-160-115.2c-12.8-6.4-19.2-6.4-32 0l-128 121.6c-6.4 6.4-6.4 19.2 0 32 12.8 6.4 25.6 6.4 32 0L384 460.8 544 576H576l166.4-134.4c6.4-6.4 6.4-19.2 6.4-32-19.2-12.8-25.6-12.8-38.4-6.4z" fill="#4E8CEE"></path>
              <path d="M812.8 224H524.8V192c0-12.8-12.8-19.2-19.2-19.2-19.2 0-25.6 6.4-25.6 19.2v32H192c-25.6 0-51.2 19.2-51.2 51.2v396.8c0 25.6 19.2 51.2 51.2 51.2h294.4v19.2l-128 102.4c-6.4 6.4-12.8 19.2-6.4 32 6.4 6.4 19.2 12.8 25.6 6.4l102.4-83.2s6.4-6.4 12.8-6.4c6.4-6.4 12.8-6.4 19.2 0l12.8 6.4 102.4 83.2c6.4 6.4 6.4 6.4 12.8 6.4 12.8 0 19.2-6.4 19.2-19.2 0-6.4-6.4-12.8-6.4-19.2l-128-102.4v-19.2h294.4c25.6 0 51.2-19.2 51.2-51.2V275.2c-6.4-25.6-32-51.2-57.6-51.2z m6.4 448c0 6.4-6.4 6.4 0 0l-627.2 6.4V275.2v-6.4h620.8c6.4 0 6.4 6.4 6.4 6.4v396.8z" fill="#4E8CEE"></path>
            </svg>
          </div>
          <div class="font-20 mt-1">二手</div>
        </div>
        <div class="nav-item flex-1 flex flex-column flex-jc-center flex-ai-center">
          <div class="nav-circle flex flex-column flex-jc-center flex-ai-center">
            <svg viewBox="0 0 1024 1024" width="90" height="90">
              <path d="M275.2 217.6h326.4v588.8H275.2V217.6z" fill="#BAD4FF"></path>
              <path d="M454.4 313.6h102.4v38.4H454.4v-38.4z m0 140.8h102.4v38.4H454.4v-38.4z m217.6 140.8h32V704h-32V595.2z m0-153.6h32v115.2h-32V441.6zM320 595.2h102.4v38.4H320v-38.4z" fill="#4E8CEE"></path>
              <path d="M793.6 793.6V313.6H627.2v-128h-384v608H172.8v38.4h665.6v-38.4h-44.8z m-38.4-441.6v441.6h-128V352h128z m-160-128v569.6H281.6V224h313.6z" fill="#4E8CEE"></path>
              <path d="M320 454.4h102.4v38.4H320v-38.4z m134.4 140.8h102.4v38.4H454.4v-38.4zM320 313.6h102.4v38.4H320v-38.4z" fill="#4E8CEE"></path>
            </svg>
          </div>
          <div class="font-20 mt-1">房产</div>
        </div>
      </div>
      <div class="mt-1 bg-white px-3 py-3">
        <div class="module-title pl-3 py-2 text-highlight">今日推荐</div>
        <div v-for="n in 2" class="flex flex-row mt-3">
          <div class="flex-1 mr-2">
            <div class="bg-primary" style="height:24vw;"></div>
          </div>
          <div class="flex-1 ml-2">
            <div class="bg-primary" style="height:24vw;"></div>
          </div>
        </div>
        <div class="module-title mt-3 pl-3 py-2 text-highlight">猜您喜欢</div>
        <div v-for="n in 2" class="flex flex-row mt-3">
          <div class="flex-1 mr-2">
            <div class="bg-primary" style="height:24vw;"></div>
          </div>
          <div class="flex-1 ml-2">
            <div class="bg-primary" style="height:24vw;"></div>
          </div>
        </div>
      </div>
      <div class="pt-2 pb-1 text-center text-grey">
        <span class="pos-r bottom-line-text">这是我的底线了</span>
      </div>
    </div>
  </page>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '../assets/styles/variable.styl'
.swiper
  height 360px
.nav-circle
  width 92px
  height @width
  border-radius 50%
  svg
    width 72px
.nav-item
  &:nth-child(1)
    .nav-circle
      background-color #FBAB7E
      background-image linear-gradient(180deg, #FBAB7E 0%, #F7CE68 100%)
  &:nth-child(2)
    .nav-circle
      background-color #8BC6EC
      background-image linear-gradient(180deg, #8BC6EC 0%, #9599E2 100%)
  &:nth-child(3)
    .nav-circle
      background-color #FBDA61
      background-image linear-gradient(180deg, #FBDA61 0%, #FF5ACD 100%)
  &:nth-child(4)
    .nav-circle
      background-color #74EBD5
      background-image linear-gradient(180deg, #74EBD5 0%, #9FACE6 100%)
.module-title
  border-left 4px solid $color-highlight
.bottom-line-text
  &::before
  &::after
    content ''
    display inline-block
    vertical-align middle
    width 240px
    height 1px
  &::before
    margin-right 8px
    background-image linear-gradient(to left, $color-grey-5, $color-grey-1)
  &::after
    margin-left 8px
    background-image linear-gradient(to right, $color-grey-5, $color-grey-1)
</style>
