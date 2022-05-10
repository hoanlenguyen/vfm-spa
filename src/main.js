import Vue from 'vue'
import Cookies from 'js-cookie'
import '@/styles/master.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/exception-log' // error log

import * as filters from './filters' // global filters
import mixin from './utils/mixin'
import './plugins/element-components'
import './plugins/s-components'
import './plugins/optional-components'
import lang from 'element-ui/lib/locale/lang/vi'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.mixin(mixin)

Vue.prototype.$ELEMENT = {
  size: Cookies.get('size') || 'default',
  i18n: (key, value) => i18n.t(key, value)
}

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
