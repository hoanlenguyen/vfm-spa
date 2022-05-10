import Layout from '@/layout'

const routes = {
  path: '/applications/',
  component: Layout,
  redirect: '/applications/todo',
  alwaysShow: true, 
  name: 'Applications',
  meta: {
    title: 'Applications',
    icon: 'el-icon-cpu'
  },
  children: [
    {
      path: 'todo',
      component: () => import('@/views/applications/todo/index'),
      name: 'Todo',
      meta: {
        icon: 'stonehub-dot',
        title: 'Todo'
      }
    },
    // {
    //   path: 'notes',
    //   component: () => import('@/views/applications/notes'),
    //   name: 'Notes',
    //   meta: {
    //     icon: 'stonehub-dot',
    //     title: 'Notes'
    //   }
    // },
    // {
    //   path: 'file-manager',
    //   component: () => import('@/views/applications/file-manager'),
    //   name: 'File-manager',
    //   meta: {
    //     icon: 'stonehub-dot',
    //     title: 'File Manager'
    //   }
    // }
  ]
}

export default routes
