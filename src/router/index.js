import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/auth'

import Counter from '@/components/Counter'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
      beforeEnter: requireAuth
    }
  ]
})

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}