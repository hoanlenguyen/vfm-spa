import Layout from '@/layout'
import {User} from '@/utils/app-permission.js'
const routes = {
  path: '/manual-register',
  component: Layout,
  redirect: '/manual-register',
  name: 'Manual eKYC',
  meta: {
    title: 'Manual eKYC',
    icon: 'las la-user'
  },
  children: [    
    {
      path: 'pending',
      component: () => import('@/views/account/manual-register/pending/list'),
      name: 'Manual Register',
      meta: { title: 'Tài khoản chờ duyệt', icon: 'stonehub-dot', permissions:User.User_GetList  }
    },
    {
      path: 'approved',
      component: () => import('@/views/account/manual-register/approved/list'),
      name: 'approved',
      meta: { title: 'Tài khoản đã duyệt', icon: 'stonehub-dot', permissions:User.User_GetList }
    },
    // {
    //   path: 'rejected',
    //   component: () => import('@/views/account/manual-register/rejected/list'),
    //   name: 'rejected',
    //   meta: { title: 'Tài khoản từ chối', icon: 'stonehub-dot' }
    // }
  ]
}

export default routes
