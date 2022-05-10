import Layout from '@/layout'
import {Order} from '@/utils/app-permission.js'
const routes = {
  path: '/order',
  component: Layout,
  redirect: '/order',
  name: 'Order',
  children: [
    {
      path: '',
      component: () => import('@/views/order/list'),
      name: 'Order list',
      meta: { title: 'Đặt lệnh', icon: 'las la-tasks', breadcrumb: false ,permissions:Order.Order_GetList  }
    }
  ]
}

export default routes
