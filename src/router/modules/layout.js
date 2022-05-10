import Layout from '@/layout'

const routes = {
  path: '/layout/',
  component: Layout,
  redirect: '/layout/',
  alwaysShow: true, 
  name: 'Layout',
  meta: {
    title: 'Layout',
    //icon: 'las la-stream'
    icon: 'material-settings-ethernet'
  },
  children: [
    {
      path: 'typography',
      component: () => import('@/views/layout/typography'),
      name: 'Typography',
      meta: {
        icon: 'stonehub-dot',
        title: 'Typography'
      }
    },
    {
      path: 'grid',
      component: () => import('@/views/layout/grid'),
      name: 'Grid',
      meta: {
        icon: 'stonehub-dot',
        title: 'Grid'
      }
    },
    {
      path: 'color',
      component: () => import('@/views/layout/color'),
      name: 'Color',
      meta: {
        icon: 'stonehub-dot',
        title: 'Color'
      }
    },
    {
      path: 'border',
      component: () => import('@/views/layout/border'),
      name: 'Border',
      meta: {
        icon: 'stonehub-dot',
        title: 'Border'
      }
    },
    {
      path: 'flex',
      component: () => import('@/views/layout/flex'),
      name: 'Flex',
      meta: {
        icon: 'stonehub-dot',
        title: 'Flex'
      }
    },
  ]
}

export default routes
