import Layout from '@/layout'
import {AdminNotification} from '@/utils/app-permission.js'
const routes = {
  path: '/flexible-notification',
  component: Layout,
  redirect: '/flexible-notification',
  name: 'flexible-notification',
  meta: {
    title: 'Flexible notification',
  },
  children: [
    {
      path: '/flexible-notification-list',
      component: () => import('@/views/flexible-notification/list'),
      name: 'flexible-notification',
      meta: {
        icon: 'el-icon-s-opportunity',
        title: 'Flexible Notification',
        breadcrumb: false,
        permissions:AdminNotification.AdminNotification_GetList  //Thảo viết
      }
    },
    
  ]
}

export default routes
