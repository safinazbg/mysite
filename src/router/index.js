import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import(/* webpackChunkName: "research" */ '../views/Research.vue')
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import(/* webpackChunkName: "cv" */ '../views/CV.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
