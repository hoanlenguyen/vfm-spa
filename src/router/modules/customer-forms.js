import Layout from '@/layout'
import {ESignHistory} from '@/utils/app-permission.js'

const routes = {
  path: '/customer-forms',
  component: Layout,
  redirect: '/customer-forms',
  name: 'customer-forms',
  children: [
    {
      path: '',
      component: () => import('@/views/customer-forms/list'),
      name: 'customer-forms-list',
      meta: { title: 'Sao kê hợp đồng', icon: 'el-icon-s-order', breadcrumb: false, permissions:ESignHistory.ESignHistory_GetList }
    }
  ]
}

export default routes
