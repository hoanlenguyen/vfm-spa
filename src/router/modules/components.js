/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'las la-chess-king'
  },
  children: [
    {
      path: 'tabs',
      component: () => import('@/views/components/tabs'),
      name: 'Tabs',
      meta: {
        icon: 'stonehub-dot',
        title: 'Tabs'
      }
    },
    {
      path: 'collapse',
      component: () => import('@/views/components/collapse'),
      name: 'Collapse',
      meta: {
        icon: 'stonehub-dot',
        title: 'Collapse'
      }
    },
    {
      path: 'cards',
      component: () => import('@/views/components/cards'),
      name: 'Cards',
      meta: {
        icon: 'stonehub-dot',
        title: 'Cards'
      }
    },
    {
      path: 'carousel',
      component: () => import('@/views/components/carousel'),
      name: 'Carousel',
      meta: {
        icon: 'stonehub-dot',
        title: 'Carousel'
      }
    },
    {
      path: 'calendar',
      component: () => import('@/views/components/calendar'),
      name: 'Calendar',
      meta: {
        icon: 'stonehub-dot',
        title: 'Calendar'
      }
    },
    {
      path: 'dialog',
      component: () => import('@/views/components/dialog'),
      name: 'Dialog',
      meta: {
        icon: 'stonehub-dot',
        title: 'Dialog'
      }
    },
    {
      path: 'divider',
      component: () => import('@/views/components/divider'),
      name: 'Divider',
      meta: {
        icon: 'stonehub-dot',
        title: 'Divider'
      }
    },
    {
      path: 'drawer',
      component: () => import('@/views/components/drawer'),
      name: 'Drawer',
      meta: {
        icon: 'stonehub-dot',
        title: 'Drawer'
      }
    },
    {
      path: 'infinite-scroll',
      component: () => import('@/views/components/infinite-scroll'),
      name: 'Infinite-scroll',
      meta: {
        icon: 'stonehub-dot',
        title: 'Infinite Scroll'
      }
    },
    {
      path: 'message',
      component: () => import('@/views/components/message'),
      name: 'Message',
      meta: {
        icon: 'stonehub-dot',
        title: 'Message'
      }
    },
    {
      path: 'message-box',
      component: () => import('@/views/components/message-box'),
      name: 'Message-box',
      meta: {
        icon: 'stonehub-dot',
        title: 'Message Box'
      }
    },
    {
      path: 'notification',
      component: () => import('@/views/components/notification'),
      name: 'Notification',
      meta: {
        icon: 'stonehub-dot',
        title: 'Notification'
      }
    },
    {
      path: 'nav-menu',
      component: () => import('@/views/components/nav-menu'),
      name: 'Nav-menu',
      meta: {
        icon: 'stonehub-dot',
        title: 'Nav Menu'
      }
    },
    {
      path: 'steps',
      component: () => import('@/views/components/steps'),
      name: 'Steps',
      meta: {
        icon: 'stonehub-dot',
        title: 'Steps'
      }
    },
    {
      path: 'timeline',
      component: () => import('@/views/components/timeline'),
      name: 'Timeline',
      meta: {
        icon: 'stonehub-dot',
        title: 'Timeline'
      }
    },
  
  ]
}

export default componentsRouter
