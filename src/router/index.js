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
  const token = getCookie('kumo')

  if (to.meta.requiresAuth && (!token || token.length == 0)) {
    next('/login')
  } else if (to.path === '/login' && (token || token.length >= 1)) {
    next('/')
  } else {
    next()
  }
})

const getCookie = (name) => {
  return (
    document.cookie
      .split('; ')
      .find((row) => row.startsWith(name + '='))
      ?.split('=')[1] || ''
  )
}

export default router
