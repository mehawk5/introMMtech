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
    component: Home,
    meta:{
      title: "Personal portfolio"
    }
  },
  {
    path: '/password',
    name: 'password',
    component: Password,
    meta:{
      title: "Password generator"
    }
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: Qrcode,
    meta:{
      title: "QR code generator"
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta as any).title;
  next();
});

export default router
