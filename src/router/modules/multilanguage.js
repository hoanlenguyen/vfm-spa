import Layout from '@/layout'

const routes = {
  path: '/multilanguage/',
  component: Layout,
  redirect: '/multilanguage/i18n',
  alwaysShow: true, 
  name: 'Multilanguage',
  meta: {
    title: 'Multilanguage',
    icon: 'entypo-language'
  },
  children: [
    {
      path: 'i18n',
      component: () => import('@/views/i18n-demo/index'),
      name: 'I18n',
      meta: {
        icon: 'stonehub-dot',
        title: 'I18n'
      }
    }
  ]
}

export default routes
