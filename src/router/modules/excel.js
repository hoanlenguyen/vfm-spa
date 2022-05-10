import Layout from '@/layout'

const routes = {
  path: '/excel/',
  component: Layout,
  redirect: '/excel/export-excel',
  alwaysShow: true, 
  name: 'Excel',
  meta: {
    title: 'Excel',
    icon: 'las la-infinity'
  },
  children: [
    {
      path: 'export-excel',
      component: () => import('@/views/excel/export-excel'),
      name: 'Export-excel',
      meta: {
        icon: 'stonehub-dot',
        title: 'Export Excel'
      }
    },
    {
      path: 'export-selected',
      component: () => import('@/views/excel/export-selected'),
      name: 'Export-selected',
      meta: {
        icon: 'stonehub-dot',
        title: 'Export Selected'
      }
    },
    {
      path: 'merge-header',
      component: () => import('@/views/excel/merge-header'),
      name: 'Merge-header',
      meta: {
        icon: 'stonehub-dot',
        title: 'Merge Header'
      }
    },
    {
      path: 'upload-excel',
      component: () => import('@/views/excel/upload-excel'),
      name: 'upload-excel',
      meta: {
        icon: 'stonehub-dot',
        title: 'Upload Excel'
      }
    }
  ]
}

export default routes
