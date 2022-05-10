import Layout from '@/layout'
import {PaymentHistory} from '@/utils/app-permission.js'

const routes = {
  path: '/paymentHistory',
  component: Layout,
  redirect: '/paymentHistory',
  name: 'paymentHistory',
  children: [
    {
      path: '',
      component: () => import('@/views/paymentHistory/list'),
      name: 'List',
      meta: { title: 'Lịch sử thanh toán', icon: 'el-icon-money', breadcrumb: false, permissions:PaymentHistory.PaymentHistory_GetList }
    }
  ]
}

export default routes
