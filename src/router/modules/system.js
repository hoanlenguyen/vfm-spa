import Layout from '@/layout'
import {System} from '@/utils/app-permission.js'
const routes = {
  path: '/system',
  component: Layout,
  redirect: '/system',
  name: 'system',
  meta: {
    title: 'Hệ thống',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/exception-logs/index'),
      name: 'Báo cáo hệ thống',
      meta: { title: 'Báo cáo hệ thống', icon: 'stonehub-dot', noCache: true , permissions:System.System_Report }
    },
    {
      path: 'setting',
      component: () => import('@/views/system/setting/list'),
      name: 'Cài đặt chung',
      meta: { title: 'Cài đặt chung', icon: 'stonehub-dot' , permissions:System.System_Setting_General }
    },
    {
      path: 'recurringJob',
      component: () => import('@/views/system/recurringJob/list'),
      name: 'Schedule task',
      meta: { title: 'Schedule task', icon: 'stonehub-dot' }
    },
    {
      path: 'languageTranslate',
      component: () => import('@/views/system/languageTranslate/list'),
      name: 'Dịch ngôn ngữ',
      meta: { title: 'Dịch ngôn ngữ', icon: 'stonehub-dot' , permissions:System.System_Translation }
    },
    {
      path: 'cache',
      component: () => import('@/views/system/cache/list'),
      name: 'Xóa cache',
      meta: { title: 'Xóa cache', icon: 'stonehub-dot' , permissions:System.System_Cache }
    },
  ],
}

export default routes
