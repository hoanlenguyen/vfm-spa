import Layout from '@/layout'
import {User} from '@/utils/app-permission.js'

const routes = {
  path: '/rejected',
  redirect: '/rejected',
  component: Layout,
  name: 'Tài khoản bị từ chối',
  meta: {
    title: 'Tài khoản bị từ chối',
    icon: 'las la-user'
  },
  children: [    
    {
      path: '',
      component: () => import('@/views/rejected/list'),
      name: 'Manual Register',
      meta: { title: 'Tài khoản bị từ chối', icon: 'las la-user',breadcrumb: false , permissions:User.User_GetList  }
    }    
  ]
}

export default routes
