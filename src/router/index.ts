import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Password from '../views/Password.vue'
import Qrcode from '../views/Qrcode.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/password',
    name: 'password',
    component: Password
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: Qrcode
  },
]

const router = new VueRouter({
  routes
})

export default router
