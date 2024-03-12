// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/CatCityHelper',
    component: () => import('@/App.vue'),
    children: [
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // path without "/"
      {
        path: 'Character',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'Cato',
        name: 'Cato',
        component: () => import(/* webpackChunkName: "Cato" */ '@/views/Cato.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
