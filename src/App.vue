<template>
  <div id="app" class="flex flex-column">
    <router-view></router-view>
    <m-toast :value="$store.toast.show" :message="$store.toast.message"></m-toast>
    <m-confirm :value="$store.confirm.show" :title="$store.confirm.title" :content="$store.confirm.content"
      @cancel="onConfirmCancel" @ok="onConfirmOk"></m-confirm>
  </div>
</template>
<script>
import Vue from 'vue'
import store from './store'
export default {
  data () {
    return {
      confirmPromiseResolve: null,
      confirmPromiseReject: null,
      toastQueue: []
    }
  },
  methods: {
    onConfirmCancel () {
      if (this.confirmPromiseReject) {
        this.confirmPromiseReject()
        store.updateConfirm({ show: false })
      }
    },
    onConfirmOk () {
      if (this.confirmPromiseResolve) {
        this.confirmPromiseResolve()
        store.updateConfirm({ show: false })
      }
    }
  },
  created () {
    Vue.prototype.$store = store
    // TODO:优化，暂时不支持多toast一起调用 toast方法
    Vue.prototype.$toast = (message, duration = 1500) => {
      store.updateToast({ show: true, message })
      setTimeout(() => {
        store.updateToast({ show: false })
      }, duration)
    }
    // confirm 方法
    Vue.prototype.$confirm = (title, content) => {
      store.updateConfirm({ show: true, title, content })
      return new Promise((resolve, reject) => {
        this.confirmPromiseResolve = resolve
        this.confirmPromiseReject = reject
      })
    }
  }
}
</script>
<style lang="stylus">
@import './assets/styles'
@import './assets/fonts/iconfont.css'
@import './assets/base.styl'
</style>
