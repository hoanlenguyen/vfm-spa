import Layout from '@/layout'
import {Banner} from '@/utils/app-permission.js'

const routes = {
  path: '/banner',
  component: Layout,
  redirect: '/banner',
  name: 'banner',
  children: [
    {
      path: '',
      component: () => import('@/views/banner/list'),
      name: 'List',
      meta: { title: 'Banner', icon: 'el-icon-picture-outline', breadcrumb: false, permissions:Banner.Banner_GetList }
    }
  ]
}

export default routes
