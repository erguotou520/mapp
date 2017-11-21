import Vue from 'vue'

import Header from './navigation/Header'
import Tabbar from './navigation/Tabbar'
import TabbarItem from './navigation/TabbarItem'
import Toast from './feedback/Toast'
import Confirm from './feedback/Confirm'
import Swiper from './display/Swiper'
import SwiperItem from './display/SwiperItem'
import Cell from './form/Cell'
import CellGroup from './form/CellGroup'
import Button from './form/Button'
import RouterTransition from './business/RouterTransition'
import Page from './business/Page'
import CircleBg from './business/CircleBg'

const components = {
  Header,
  Tabbar,
  TabbarItem,
  Toast,
  Confirm,
  Swiper,
  SwiperItem,
  Cell,
  CellGroup,
  Button,
  RouterTransition,
  Page,
  CircleBg
}

Object.keys(components).forEach(key => {
  Vue.component(components[key].name, components[key])
})
