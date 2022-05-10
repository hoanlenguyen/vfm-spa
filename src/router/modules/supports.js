import Layout from '@/layout'

const routes = {
  path: '/supports/',
  component: Layout,
  redirect: '/supports',
  alwaysShow: true, 
  name: 'Supports',
  meta: {
    title: 'Supports',
    icon: 'material-favorite-border'
  },
  children: [
    {
      path: 'documentation',
      component: () => import('@/views/supports/documentation'),
      name: 'Documentation',
      meta: {
        icon: 'stonehub-dot',
        title: 'Documentation'
      }
    }
  ]
}

export default routes
