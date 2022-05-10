import Layout from '@/layout'
import {Fund,FundNAV} from '@/utils/app-permission.js'

const routes = {
  path: '/fund',
  component: Layout,
  redirect: '/fund',
  name: 'Quỹ',
  meta: {
    title: 'Quỹ',
    icon: 'las la-box'
  },
  children: [
    // {
    //   path: 'free',
    //   component: () => import('@/views/account/free/list'),
    //   name: 'Free list',
    //   meta: { title: 'Tài khoản miễn phí', icon: 'stonehub-dot' }
    // },
    {
      path: 'fund-category',
      component: () => import('@/views/fund/fundCategory/list'),
      name: 'fund-category',
      meta: { title: 'Danh mục quỹ', icon: 'stonehub-dot', permissions:Fund.Fund_GetList  }
    },
    {
      path: 'list',
      component: () => import('@/views/fund/list'),
      name: 'fund',
      meta: { title: 'Danh sách quỹ', icon: 'stonehub-dot', permissions:Fund.Fund_GetList  }
    },
    // {
    //   path: 'fund-components',
    //   component: () => import('@/views/fund/fundComponent/list'),
    //   name: 'fund-components',
    //   meta: { title: 'Danh mục đầu tư', icon: 'stonehub-dot' }
    // },
    {
      path: 'fund-nav',
      component: () => import('@/views/fund/fundNav/list'),
      name: 'fund-nav',
      meta: { title: 'NAV', icon: 'stonehub-dot',permissions:FundNAV.FundNAV_GetList }
    }
  ]
}

export default routes
