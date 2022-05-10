import Layout from '@/layout'
import {User} from '@/utils/app-permission.js'

const routes = {
  path: '/trading',
  redirect: '/trading',
  component: Layout,
  name: 'Tài khoản trading',
  meta: {
    title: 'Tài khoản trading',
    icon: 'las la-user'
  },
  children: [    
    {
      path: '',
      component: () => import('@/views/account/trading/list'),
      name: 'Manual Register',
      meta: { title: 'Tài khoản trading', icon: 'las la-user',breadcrumb: false , permissions:User.User_GetList  }
    }    
  ]
}

export default routes
