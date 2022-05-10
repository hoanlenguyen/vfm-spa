import Layout from '@/layout'
import {StockIndex} from '@/utils/app-permission.js'

const routes = {
  path: '/stockIndex',
  component: Layout,
  redirect: '/stockIndex',
  name: 'Stock Index',
  meta: {
    title: 'Chỉ số thị trường',
    icon: 'las la-box'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/stockIndex/list'),
      name: 'list',
      meta: { title: 'Danh sách', icon: 'stonehub-dot' , permissions:StockIndex.StockIndex_GetList }
    },
    {
      path: 'stock-index-type',
      component: () => import('@/views/stockIndex/stockIndexType/list'),
      name: 'stock-index-type',
      meta: { title: 'Loại chỉ số thị trường', icon: 'stonehub-dot' , permissions:StockIndex.StockIndex_GetList }
    },
  ]
}

export default routes
