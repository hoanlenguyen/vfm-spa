import Layout from '@/layout'
import {Contact} from '@/utils/app-permission.js'

const routes = {
  path: '/contact',
  component: Layout,
  redirect: '/contact',
  name: 'Contact',
  children: [
    {
      path: '',
      component: () => import('@/views/contact/list'),
      name: 'Contact list',
      meta: { title: 'Liên hệ', icon: 'las la-address-book', breadcrumb: false, permissions:Contact.Contact_GetList }
    }
  ]
}

export default routes
