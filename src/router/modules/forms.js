import Layout from '@/layout'

const routes = {
  path: '/forms/',
  component: Layout,
  redirect: '/forms/',
  alwaysShow: true, 
  name: 'Forms',
  meta: {
    title: 'Forms',
    icon: 'las la-clipboard'
  },
  children: [
    {
      path: 'basic',
      component: () => import('@/views/forms/basic'),
      name: 'Basic',
      meta: {
        icon: 'stonehub-dot',
        title: 'Basic'
      }
    },
    {
      path: 'datepicker',
      component: () => import('@/views/forms/datepicker'),
      name: 'Datepicker',
      meta: {
        icon: 'stonehub-dot',
        title: 'Datepicker'
      }
    },
    {
      path: 'timepicker',
      component: () => import('@/views/forms/timepicker'),
      name: 'Timepicker',
      meta: {
        icon: 'stonehub-dot',
        title: 'Timepicker'
      }
    },
    {
      path: 'datetimepicker',
      component: () => import('@/views/forms/datetimepicker'),
      name: 'Datetimepicker',
      meta: {
        icon: 'stonehub-dot',
        title: 'Datetimepicker'
      }
    },
    {
      path: 'color-picker',
      component: () => import('@/views/forms/color-picker'),
      name: 'Color-picker',
      meta: {
        icon: 'stonehub-dot',
        title: 'Color Picker'
      }
    },
    {
      path: 'input',
      component: () => import('@/views/forms/input'),
      name: 'Input',
      meta: {
        icon: 'stonehub-dot',
        title: 'Input'
      }
    },
    // {
    //   path: 'input-group',
    //   component: () => import('@/views/forms/input-group'),
    //   name: 'Input Group',
    //   meta: {
    //     icon: 'stonehub-dot',
    //     title: 'Input Group'
    //   }
    // },
    {
      path: 'input-number',
      component: () => import('@/views/forms/input-number'),
      name: 'InputNumber',
      meta: {
        icon: 'stonehub-dot',
        title: 'InputNumber'
      }
    },
    // {
    //   path: 'layout',
    //   component: () => import('@/views/forms/layout'),
    //   name: 'Layout',
    //   meta: {
    //     icon: 'stonehub-dot',
    //     title: 'Layout'
    //   }
    // },
    {
      path: 'checkbox',
      component: () => import('@/views/forms/checkbox'),
      name: 'Checkbox',
      meta: {
        icon: 'stonehub-dot',
        title: 'Checkbox'
      }
    },
    {
      path: 'radio',
      component: () => import('@/views/forms/radio'),
      name: 'Radio',
      meta: {
        icon: 'stonehub-dot',
        title: 'Radio'
      }
    },
    {
      path: 'select',
      component: () => import('@/views/forms/select'),
      name: 'Select',
      meta: {
        icon: 'stonehub-dot',
        title: 'Select'
      }
    },
    {
      path: 'switches',
      component: () => import('@/views/forms/switches'),
      name: 'Switches',
      meta: {
        icon: 'stonehub-dot',
        title: 'Switches'
      }
    },
    {
      path: 'cascader',
      component: () => import('@/views/forms/cascader'),
      name: 'Cascader',
      meta: {
        icon: 'stonehub-dot',
        title: 'Cascader'
      }
    },
    {
      path: 'rate',
      component: () => import('@/views/forms/rate'),
      name: 'Rate',
      meta: {
        icon: 'stonehub-dot',
        title: 'Rate'
      }
    },
    {
      path: 'slider',
      component: () => import('@/views/forms/slider'),
      name: 'Slider',
      meta: {
        icon: 'stonehub-dot',
        title: 'Slider'
      }
    },
    {
      path: 'transfer',
      component: () => import('@/views/forms/transfer'),
      name: 'Transfer',
      meta: {
        icon: 'stonehub-dot',
        title: 'Transfer'
      }
    },
    {
      path: 'validation',
      component: () => import('@/views/forms/validation'),
      name: 'Validation',
      meta: {
        icon: 'stonehub-dot',
        title: 'Validation'
      }
    }
  ]
}

export default routes
