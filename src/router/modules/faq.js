import Layout from '@/layout'
import {FAQ} from '@/utils/app-permission.js'

const routes = {
  path: '/faq',
  component: Layout,
  redirect: '/faq',
  name: 'Faq',
  meta: {
    title: 'FAQ',
    icon: 'las la-question-circle'
  },
  children: [
    {
      path: 'faq-category',
      component: () => import('@/views/faq/category/list'),
      name: 'faq category',
      meta: { title: 'Danh mục FAQ', icon: 'stonehub-dot' , permissions:FAQ.FAQ_GetList  }
    },
    {
      path: 'list',
      component: () => import('@/views/faq/faq/list'),
      name: 'faq',
      meta: { title: 'FAQ', icon: 'stonehub-dot', breadcrumb: false, permissions:FAQ.FAQ_GetList  }
    }
  ]
}

export default routes
