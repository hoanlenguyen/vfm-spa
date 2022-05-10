import Layout from '@/layout'

const routes = {
  path: '/icons',
  component: Layout,
  redirect: '/icons/svg-icon',
  alwaysShow: true, // will always show the root menu
  name: 'Icons',
  meta: {
    title: 'Icons',
    icon: 'el-icon-files'
  },
  children: [
    {
      path: 'svg-icon-material',
      component: () => import('@/views/icons/svg-icon-material'),
      name: 'Material Icons',
      meta: {
        icon: 'stonehub-dot',
        title: 'Material Icons'
      }
    },
    {
      path: 'svg-icon-weather',
      component: () => import('@/views/icons/svg-icon-weather'),
      name: 'Weather Icons',
      meta: {
        icon: 'stonehub-dot',
        title: 'Weather Icons'
      }
    },
    {
      path: 'svg-icon-entypo',
      component: () => import('@/views/icons/svg-icon-entypo'),
      name: 'Entypo Icons',
      meta: {
        icon: 'stonehub-dot',
        title: 'Entypo Icons'
      }
    },
    {
      path: 'svg-icon',
      component: () => import('@/views/icons/svg-icon'),
      name: 'SVG Icons (All)',
      meta: {
        icon: 'stonehub-dot',
        title: 'SVG Icons (All)'
      }
    },
    {
      path: 'element-icons',
      component: () => import('@/views/icons/element-icon'),
      name: 'Element Icons',
      meta: {
        icon: 'stonehub-dot',
        title: 'Element Icons'
      }
    },
    {
      path: 'fontawesome5',
      component: () => import('@/views/icons/fontawesome5'),
      name: 'Fontawesome 5',
      meta: {
        icon: 'stonehub-dot',
        title: 'Fontawesome 5'
      }
    },
    {
      path: 'lineawesome',
      component: () => import('@/views/icons/lineawesome'),
      name: 'Lineawesome',
      meta: {
        icon: 'stonehub-dot',
        title: 'Lineawesome'
      }
    }
  ]
}

export default routes
