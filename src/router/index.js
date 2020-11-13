import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    component: All
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
