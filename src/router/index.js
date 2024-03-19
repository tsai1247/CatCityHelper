// Composables
import { createRouter, createWebHashHistory  } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/Home',  // 當使用者訪問根路徑時，重定向到 /Home
    children: [
      {
        path: '/Home',
        name: '/Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/Character',
        name: '/Character',
        component: () => import('@/components/character/characterView.vue'),
      },
      {
        path: '/Cato',
        name: '/Cato',
        component: () => import('@/components/cato/catoView.vue'),
      },
      {
        path: '/VersionInfo',
        name: '/VersionInfo',
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
  history: createWebHashHistory (process.env.BASE_URL),
  routes,
})

export default router
