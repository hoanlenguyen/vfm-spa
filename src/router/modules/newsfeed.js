import Layout from '@/layout'
import {Post} from '@/utils/app-permission.js'
const routes = {
  path: '/newsfeed',
  component: Layout,
  redirect: '/newsfeed',
  name: 'newsfeed',
  children: [
    {
      path: '',
      component: () => import('@/views/newsfeed/list'),
      name: 'List',
      meta: { title: 'Newsfeed', icon: 'las la-file', breadcrumb: false ,permissions:Post.Post_GetList  }
    }
  ]
}

export default routes
