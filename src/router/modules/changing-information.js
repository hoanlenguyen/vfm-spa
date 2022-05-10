import Layout from '@/layout'
import {User} from '@/utils/app-permission.js'

const routes = {
  path: '/changing-information',
  redirect: '/changing-information',
  component: Layout,
  name: 'Yêu cầu sửa đổi thông tin',
  meta: {
    title: 'Yêu cầu sửa đổi thông tin',
    icon: 'las la-user'
  },
  children: [
    {
      path: 'pending',
      component: () => import('@/views/changing-information/pending/list'),
      name: 'pending',
      meta: { title: 'Tài khoản chờ duyệt', icon: 'stonehub-dot', permissions:User.User_GetList  }
    },
    {
      path: 'approved',
      component: () => import('@/views/changing-information/approved/list'),
      name: 'approved',
      meta: { title: 'Tài khoản đã duyệt', icon: 'stonehub-dot', permissions:User.User_GetList  }
    },
    {
      path: 'rejected',
      component: () => import('@/views/changing-information/rejected/list'),
      name: 'rejected',
      meta: { title: 'Tài khoản từ chối', icon: 'stonehub-dot', permissions:User.User_GetList  }
    }
  ]
}

export default routes
