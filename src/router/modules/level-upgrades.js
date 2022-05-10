import Layout from '@/layout'
import {User} from '@/utils/app-permission.js'

const routes = {
  path: '/level-upgrade',
  component: Layout,
  redirect: '/level-upgrade',
  name: 'Nâng cấp hạng mức',
  meta: {
    title: 'Nâng cấp hạng mức',
    icon: 'las la-user'
  },
  children: [
    {
      path: 'pending',
      component: () => import('@/views/level-upgrade/pending/list'),
      name: 'pending',
      meta: { title: 'Tài khoản chờ duyệt', icon: 'stonehub-dot' , permissions:User.User_GetList  }
    },
    {
      path: 'approved',
      component: () => import('@/views/level-upgrade/approved/list'),
      name: 'approved',
      meta: { title: 'Tài khoản đã duyệt', icon: 'stonehub-dot', permissions:User.User_GetList  }
    },
    {
      path: 'rejected',
      component: () => import('@/views/level-upgrade/rejected/list'),
      name: 'rejected',
      meta: { title: 'Tài khoản từ chối', icon: 'stonehub-dot', permissions:User.User_GetList  }
    }
  ]
}

export default routes
