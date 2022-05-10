import Layout from '@/layout'

const routes = {
  path: '/401',
  redirect: '/401',
  alwaysShow: true, 
  name: 'Error-page',
  meta: {
    title: 'Error Pages',
    icon: 'las la-exclamation-triangle'
  },
  children: [
    {
      path: '/404',
      component: () => import('@/views/error-page/404'),
      name: '404-page',
      meta: {
        icon: 'stonehub-dot',
        title: '404'
      }
    },
    {
      path: '/401',
      component: () => import('@/views/error-page/401'),
      name: '401-page',
      meta: {
        icon: 'stonehub-dot',
        title: '401'
      }
    }
  ]
}

export default routes
