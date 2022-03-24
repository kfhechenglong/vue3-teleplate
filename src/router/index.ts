import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/home/Index.tsx')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
