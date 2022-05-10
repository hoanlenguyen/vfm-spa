import Layout from '@/layout'

const routes = [{
  path: '/pdf/',
  component: Layout,
  redirect: '/pdf/export-pdf',
  alwaysShow: true, 
  name: 'Pdf',
  meta: {
    title: 'Pdf',
    icon: 'las la-eraser'
  },
  children: [
    {
      path: 'export-pdf',
      component: () => import('@/views/pdf/index'),
      name: 'Export-pdf',
      meta: {
        icon: 'stonehub-dot',
        title: 'Export Pdf'
      }
    },
  ]
},
{
  path: '/pdf/download',
  component: () => import('@/views/pdf/download'),
  hidden: true
}]

export default routes
