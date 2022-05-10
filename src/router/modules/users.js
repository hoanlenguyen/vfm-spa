import Layout from '@/layout'

const routes = {
  path: '/users',
  component: Layout,
  redirect: '/users',
  hidden: true,
  name: 'Users',
  meta: {
    title: 'Thông tin tài khoản',
    icon: 'las la-user-alt'
  },
  children: [
    {
      path: 'profile',
      component: () => import('@/views/users/profile'),
      name: 'Profile',
      meta: {
        icon: 'stonehub-dot',
        title: 'Thông tin cá nhân',
        breadcrumb: false
      }
    },
    {
      path: 'change-password',
      component: () => import('@/views/users/change-password'),
      name: 'Change-password',
      meta: {
        icon: 'stonehub-dot',
        title: 'Đổi mật khẩu'
      }
    }
  ]
}

export default routes
