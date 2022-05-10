import Layout from '@/layout'

const routes = {
  path: '/auths',
  redirect: '/auths',
  component: Layout,
  alwaysShow: true,
  name: 'Auths',
  meta: {
    title: 'Auth Pages',
    icon: 'las la-user-shield',
    breadcrumb: false
  },
  children: [
    {
      path: 'login-page',
      component: () => import('@/views/auths/login/redirect-to-login'),
      name: 'Login Page',
      meta: {
        icon: 'stonehub-dot',
        title: 'Login',
        breadcrumb: false
      }
    },
    {
      path: 'register-page',
      component: () => import('@/views/auths/redirect-to-register'),
      name: 'Register',
      meta: {
        icon: 'stonehub-dot',
        title: 'Register'
      }
    },
    {
      path: 'forgot-password-page',
      component: () => import('@/views/auths/redirect-to-forgot-password'),
      name: 'forgot-password',
      meta: {
        icon: 'stonehub-dot',
        title: 'Forgot Password'
      }
    }
  ]
}

export default routes
