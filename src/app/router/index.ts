import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { ROUTES } from '@/shared/constants/routes'
import { RouteNames, RoutePaths } from '@/shared/typings/routes.type'

const routes: (RouteRecordRaw & { name: RouteNames; path: RoutePaths })[] = [
  {
    name: ROUTES.MAIN.name,
    path: ROUTES.MAIN.path,
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    name: ROUTES.ABOUT.name,
    path: ROUTES.ABOUT.path,
    component: () => import('@/pages/AboutPage.vue'),
  },
]

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
