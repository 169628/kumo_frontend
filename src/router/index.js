import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/campaign',
      name: 'campaign',
      component: () => import('../views/CampaignView.vue'),
    },
    {
      path: '/device',
      name: 'device',
      component: () => import('../views/DeviceView.vue'),
    },
  ],
})

export default router
