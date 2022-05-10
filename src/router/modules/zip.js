import Layout from '@/layout'

const routes = {
  path: '/zip/',
  component: Layout,
  redirect: '/zip/export-zip',
  alwaysShow: true, 
  name: 'Zip',
  meta: {
    title: 'Zip',
    icon: 'las la-archive'
  },
  children: [
    {
      path: 'export-zip',
      component: () => import('@/views/zip/index'),
      name: 'Export-zip',
      meta: {
        icon: 'stonehub-dot',
        title: 'Export Zip'
      }
    }
  ]
}

export default routes
