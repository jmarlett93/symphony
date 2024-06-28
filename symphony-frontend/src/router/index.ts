import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/arena',
      name: 'arena',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    { path: '/', redirect: 'login' }
  ]
})

export default router
