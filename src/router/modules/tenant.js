import Layout from '@/layout'
import {Tenant} from '@/utils/app-permission.js'

const routes = {
  path: '/tenant',
  component: Layout,
  redirect: '/tenant',
  name: 'tenant',
  meta: {
    title: 'Đối tác',
    icon: 'las la-user'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/tenant/list'),
      name: 'List',
      meta: { title: 'Đối tác', icon: 'las la-user', breadcrumb: false, permissions:Tenant.Tenant_GetList }
    }
  ]
}

export default routes
