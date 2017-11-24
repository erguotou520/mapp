<template>
  <page class="bg-white">
    <div class="scroll-y pos-r">
      <circle-bg class="bg"></circle-bg>
      <div class="nav flex flex-row flex-jc-between mt-1 px-3 py-2 text-white">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="font-32">我的</span>
        <svg viewBox="0 0 1024 1024" width="20" height="20" @click="logout">
          <path fill="#fff" d="M588.8 409.6a25.6 25.6 0 0 0 25.6-25.6v-204.8c0-42.3424-34.4576-76.8-76.8-76.8h-460.8C34.4576 102.4 0 136.8576 0 179.2v614.4c0 38.1952 27.4944 79.872 62.5664 94.8736l264.2944 113.2544c9.1136 3.8912 18.3808 5.8368 27.2384 5.8368 10.9056 0 21.2992-2.9696 30.1568-8.8064 16.0768-10.5984 25.344-29.44 25.344-51.6096v-76.8h128c42.3424 0 76.8-34.4576 76.8-76.8v-204.8a25.6 25.6 0 0 0-51.2 0v204.8a25.6 25.6 0 0 1-25.6 25.6H409.6v-486.4c0-38.1952-27.4944-79.872-62.5664-94.8736L150.3232 153.5488H537.6a25.6 25.6 0 0 1 25.6 25.6v204.8a25.6 25.6 0 0 0 25.6 25.6zM326.8608 284.9792c16.4864 7.0656 31.5392 29.9008 31.5392 47.8208v614.4c0 5.3248-1.4336 8.2944-2.304 8.8576s-4.1472 0.7168-9.0624-1.3824l-264.2944-113.2544C66.2528 834.3552 51.2 811.5712 51.2 793.6v-614.4c0-4.0448 0.9216-7.8336 2.6112-11.264l273.0496 117.0432z"></path>
          <path fill="#fff" d="M939.7248 468.2752l-153.6-153.6a25.6 25.6 0 0 0-36.1984 36.1984l109.8752 109.8752H537.6a25.6 25.6 0 0 0 0 51.2h322.2016l-109.8752 109.8752a25.6 25.6 0 0 0 36.2496 36.1984l153.6-153.6a25.6 25.6 0 0 0 0-36.1984z"></path>
        </svg>
      </div>
      <div class="user-card shadow-card flex flex-column">
        <div class="user-base my-2 flex flex-column flex-jc-center flex-ai-center">
          <img src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png" class="avatar mb-1" alt="">
          <div class="my-1 text-default font-28">二锅头</div>
          <div class="text-secondary font-24">前端攻城狮</div>
        </div>
        <div class="flex flex-row flex-jc-center flex-ai-center my-2">
          <div class="flex-1 text-center">
            <div class="mb-1">3</div>
            <div class="font-24 text-secondary">组织</div>
          </div>
          <div class="flex-1 text-center">
            <div class="mb-1">42</div>
            <div class="font-24 text-secondary">仓库</div>
          </div>
          <div class="flex-1 text-center">
            <div class="mb-1">63</div>
            <div class="font-24 text-secondary">关注</div>
          </div>
        </div>
      </div>
      <div class="bg-grey pb-1">
        <m-cell-group title="个人中心">
          <m-cell text="成为会员" show-arrow></m-cell>
          <m-cell text="收藏" show-arrow></m-cell>
          <m-cell text="钱包" show-arrow></m-cell>
          <m-cell text="用户设置" show-arrow></m-cell>
        </m-cell-group>
        <m-cell-group title="其它">
          <m-cell text="系统设置" show-arrow></m-cell>
          <m-cell text="关于" show-arrow></m-cell>
          <m-cell text="意见反馈" show-arrow></m-cell>
        </m-cell-group>
      </div>
    </div>
  </page>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$confirm('退出', '确认要退出当前系统么？').then(() => {
        this.$router.push('/auth/login')
        this.$toast('您已退出本系统')
      }).catch(() => {})
    }
  }
}
</script>
<style lang="stylus" scoped>
.bg
  position absolute
  top 0
  left 0
  width 100vw
.nav
.user-card
  position relative
  z-index 2
.user-card
  margin 40px auto 80px
  width 600px
.avatar
  width 100px
  height @width
  border-radius 50%
</style>
