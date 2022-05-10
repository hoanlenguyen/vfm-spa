import Layout from '@/layout'

const routes =
{
  path: '/exception-logs',
  component: Layout,
  redirect: '/exception-logs',
  children: [
    {
      path: '',
      component: () => import('@/views/exception-logs/index'),
      name: 'Báo cáo hệ thống',
      meta: { title: 'Báo cáo hệ thống', icon: 'las la-bug', noCache: true }
    }
  ]
}

export default routes
