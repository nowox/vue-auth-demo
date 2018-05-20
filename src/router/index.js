import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/auth'

import Counter from '@/components/Counter'
import Login from '@/components/Login'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/', alias: '/counter', component: Counter },
    { path: '/about', component: About }    
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