import Layout from '@/layout'
import {AdminNotification} from '@/utils/app-permission.js'
const routes = {
  path: '/notification-template',
  component: Layout,
  redirect: '/notification-template',
  name: 'notification-template',
  meta: {
    title: 'Thông báo đến người dùng',
  },
  children: [
    {
      path: '/notification-template-list',
      component: () => import('@/views/notification-template/list'),
      name: 'notification-template-list',
      meta: {
        icon: 'el-icon-bell',
        title: 'Thông báo đến người dùng',
        breadcrumb: false,
        permissions:AdminNotification.AdminNotification_GetList  //Thảo viết
      }
    },
    
  ]
}

export default routes
