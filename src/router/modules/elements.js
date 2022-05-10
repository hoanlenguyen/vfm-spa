import Layout from '@/layout'

const routes = {
  path: '/elements/',
  component: Layout,
  redirect: '/elements/',
  alwaysShow: true, 
  name: 'Elements',
  meta: {
    title: 'Elements',
    icon: 'weather-sunrise'
  },
  children: [
    {
      path: 'alerts',
      component: () => import('@/views/elements/alerts'),
      name: 'Alerts',
      meta: {
        icon: 'stonehub-dot',
        title: 'Alerts'
      }
    },
    {
      path: 'avatar',
      component: () => import('@/views/elements/avatar'),
      name: 'Avatar',
      meta: {
        icon: 'stonehub-dot',
        title: 'Avatar'
      }
    },
    {
      path: 'badges',
      component: () => import('@/views/elements/badges'),
      name: 'Badges',
      meta: {
        icon: 'stonehub-dot',
        title: 'Badges'
      }
    },
    {
      path: 'breadcrumbs',
      component: () => import('@/views/elements/breadcrumbs'),
      name: 'Breadcrumbs',
      meta: {
        icon: 'stonehub-dot',
        title: 'Breadcrumbs'
      }
    },
    {
      path: 'buttons',
      component: () => import('@/views/elements/buttons'),
      name: 'Buttons',
      meta: {
        icon: 'stonehub-dot',
        title: 'Buttons'
      }
    },
    // {
    //   path: 'button-groups',
    //   component: () => import('@/views/elements/button-groups'),
    //   name: 'Button Groups',
    //   meta: {
    //     icon: 'stonehub-dot',
    //     title: 'Button Groups'
    //   }
    // },
    {
      path: 'dropdown',
      component: () => import('@/views/elements/dropdown'),
      name: 'Dropdown',
      meta: {
        icon: 'stonehub-dot',
        title: 'Dropdown'
      }
    },
    {
      path: 'loading',
      component: () => import('@/views/elements/loading'),
      name: 'Loading',
      meta: {
        icon: 'stonehub-dot',
        title: 'Loading'
      }
    },
    {
      path: 'pagination',
      component: () => import('@/views/elements/pagination'),
      name: 'Pagination',
      meta: {
        icon: 'stonehub-dot',
        title: 'Pagination'
      }
    },
    {
      path: 'popovers',
      component: () => import('@/views/elements/popovers'),
      name: 'Popovers',
      meta: {
        icon: 'stonehub-dot',
        title: 'Popovers'
      }
    },
    {
      path: 'popconfirm',
      component: () => import('@/views/elements/popconfirm'),
      name: 'Popconfirm',
      meta: {
        icon: 'stonehub-dot',
        title: 'Popconfirm'
      }
    },
    {
      path: 'progress-bar',
      component: () => import('@/views/elements/progress-bar'),
      name: 'Progress Bar',
      meta: {
        icon: 'stonehub-dot',
        title: 'Progress Bar'
      }
    },
    {
      path: 'tooltips',
      component: () => import('@/views/elements/tooltips'),
      name: 'Tooltips',
      meta: {
        icon: 'stonehub-dot',
        title: 'Tooltips'
      }
    },
    {
      path: 'treeview',
      component: () => import('@/views/elements/treeview'),
      name: 'Treeview',
      meta: {
        icon: 'stonehub-dot',
        title: 'Treeview'
      }
    }
  ]
}

export default routes
