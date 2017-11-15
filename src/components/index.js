import Vue from 'vue'

import Tabbar from './navigation/Tabbar'
import TabbarItem from './navigation/TabbarItem'
import Toast from './feedback/Toast'
import Confirm from './feedback/Confirm'
import Swiper from './display/Swiper'
import SwiperItem from './display/SwiperItem'
import RouterTransition from './business/RouterTransition'
import Page from './business/Page'

const components = {
  Tabbar,
  TabbarItem,
  Toast,
  Confirm,
  Swiper,
  SwiperItem,
  RouterTransition,
  Page
}

Object.keys(components).forEach(key => {
  Vue.component(components[key].name, components[key])
})
