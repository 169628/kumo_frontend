import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout/AsideView.vue'),
      children: [
        {
          path: '',
          name: 'dashbord',
          component: () => import('@/views/HomeView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/campaign',
          name: 'campaign',
          component: () => import('@/views/CampaignView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/device',
          name: 'device',
          component: () => import('@/views/DeviceView.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/loginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/Page404View.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('kumo')

  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else if (to.path === '/login' && token) {
    next('/')
  } else {
    next()
  }
})

export default router
