import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import CommonNavView from '../views/CommonNavView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: CommonNavView,
    children: [
      {
        path: '/',
        component: resolve => import('@/views/Home.vue').then(resolve),
        meta: { skipAuth: true, order: 1 }
      },
      {
        path: '/list',
        component: resolve => import('@/views/List.vue').then(resolve),
        meta: { skipAuth: true, order: 2 }
      },
      {
        path: '/my',
        component: resolve => import('@/views/My.vue').then(resolve),
        meta: { skipAuth: true, order: 3 }
      }
    ]
  }
  // {
  //   path: '/auth',
  //   component: resolve => import('@/views/auth/Auth.vue').then(resolve),
  //   redirect: '/auth/login',
  //   children: [
  //     {
  //       path: 'login',
  //       component: resolve => import('@/views/auth/Auth.vue').then(resolve),
  //       meta: { skipAuth: true, order: 1 }
  //     },
  //     {
  //       path: 'register',
  //       component: resolve => import('@/views/auth/Auth.vue').then(resolve),
  //       meta: { skipAuth: true, order: 2 }
  //     },
  //     {
  //       path: 'forgetPassword',
  //       component: resolve => import('@/views/auth/ForgetPassword.vue').then(resolve),
  //       meta: { skipAuth: true, order: 3 }
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.meta.skipAuth) {
    next()
  } else if (store.user.id) {
    // 已登录的跳转到首页
    if (/^\/auth/.test(to.path)) {
      next('/')
    } else {
      next()
    }
  } else {
    next({
      path: '/auth/login'
    })
  }
})

export default router
