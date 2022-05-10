import Layout from '@/layout'
import {Post} from '@/utils/app-permission.js'
const routes = {
  path: '/education-library',
  component: Layout,
  redirect: '/education-library',
  name: 'Education library',
  children: [
    {
      path: '',
      component: () => import('@/views/education-library/list'),
      name: 'List',
      meta: { title: 'Education library', icon: 'las la-file', breadcrumb: false, permissions:Post.Post_GetList  }
    }
  ]
}

export default routes
