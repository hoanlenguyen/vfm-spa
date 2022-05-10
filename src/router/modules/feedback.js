import Layout from '@/layout'

const routes = {
  path: '/feedback',
  component: Layout,
  redirect: '/feedback',
  name: 'Feedback',
  children: [
    {
      path: '',
      component: () => import('@/views/feedback/list'),
      name: 'Feedback list',
      meta: { title: 'Beta launch feedback', icon: 'las la-address-book', breadcrumb: false }
    }
  ]
}

export default routes
