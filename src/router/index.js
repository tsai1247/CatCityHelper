// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/CatCityHelper',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'Character',
        name: 'Character',
        component: () => import('@/components/character/characterView.vue'),
      },
      {
        path: 'Cato',
        name: 'Cato',
        component: () => import('@/components/cato/catoView.vue'),
      },
      {
        path: 'VersionInfo',
        name: 'VersionInfo',
        component: () => import('@/components/versioninfo/versionView.vue'),
      },
    ],
  },
  {
    name: '404',
    path: '/:catchAll(.*)',
    component: () => import(`@/views/error/404.vue`)
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
