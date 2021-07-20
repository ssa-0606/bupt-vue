import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sensors',
    name: 'Sensors',
    component: () => import('../views/Sensors.vue')
  },
  {
    path: '/control',
    name: 'Control',
    component: () => import('../views/Control.vue')
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


export default router
