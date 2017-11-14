import Vue from 'vue'

import Tabbar from './Tabbar'
import TabbarItem from './TabbarItem'
import Toast from './Toast'
import Confirm from './Confirm'
import RouterTransition from './RouterTransition'
import Page from './Page'

const components = {
  Tabbar,
  TabbarItem,
  Toast,
  Confirm,
  RouterTransition,
  Page
}

Object.keys(components).forEach(key => {
  Vue.component(components[key].name, components[key])
})
