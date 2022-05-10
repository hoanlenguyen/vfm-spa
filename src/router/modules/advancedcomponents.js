import Layout from '@/layout'

const advancedcomponentsRouter = {
  path: '/advancedcomponents',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Advanced',
    icon: 'las la-chess-queen'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/advanced-components/tinymce'),
      name: 'tinymce',
      meta: { title: 'Tinymce', icon: 'stonehub-dot', },
    },
    {
      path: 'markdown',
      component: () => import('@/views/advanced-components/markdown'),
      name: 'markdown',
      meta: { title: 'Markdown', icon: 'stonehub-dot', },
    },
    {
      path: 'json-editor',
      component: () => import('@/views/advanced-components/json-editor'),
      name: 'json-editor',
      meta: { title: 'Json Editor', icon: 'stonehub-dot', },
    },
    // {
    //   path: 'count-to',
    //   component: () => import('@/views/advanced-components/count-to'),
    //   name: 'count-to',
    //   meta: { title: 'Count To', icon: 'stonehub-dot', },
    // },
    // {
    //   path: 'dnd-list',
    //   component: () => import('@/views/advanced-components/dnd-list'),
    //   name: 'dnd-list',
    //   meta: { title: 'Dnd-list', icon: 'stonehub-dot', },
    // },
    // {
    //   path: 'drag-dialog',
    //   component: () => import('@/views/advanced-components/drag-dialog'),
    //   name: 'drag-dialog',
    //   meta: { title: 'Drag-dialog', icon: 'stonehub-dot', },
    // },
    // {
    //   path: 'drag-select',
    //   component: () => import('@/views/advanced-components/drag-select'),
    //   name: 'drag-select',
    //   meta: { title: 'Drag-select', icon: 'stonehub-dot', },
    // },
    // {
    //   path: 'dropzone',
    //   component: () => import('@/views/advanced-components/dropzone'),
    //   name: 'dropzone',
    //   meta: { title: 'Dropzone', icon: 'stonehub-dot', },
    // },
    // {
    //   path: 'split-pane',
    //   component: () => import('@/views/advanced-components/split-pane'),
    //   name: 'split-pane',
    //   meta: { title: 'Split-pane', icon: 'stonehub-dot', },
    // },
    {
      path: 'sticky',
      component: () => import('@/views/advanced-components/sticky'),
      name: 'sticky',
      meta: { title: 'Sticky Panels', icon: 'stonehub-dot', },
    },
  ]
}

export default advancedcomponentsRouter
