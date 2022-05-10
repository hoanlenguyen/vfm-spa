import Vue from 'vue'
import store from '@/store'
import { isString, isArray } from '@/utils/validate'
import settings from '@/settings'

// you can set in settings.js
// exceptionLog:'production' | ['production', 'development']
const { exceptionLog: needExceptionLog } = settings

function checkNeed() {
  const env = process.env.NODE_ENV
  if (isString(needExceptionLog)) {
    return env === needExceptionLog
  }
  if (isArray(needExceptionLog)) {
    return needExceptionLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = function(err, vm, info, a) {
  // Don't ask me why I use Vue.nextTick, it just a hack.
  // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      store.dispatch('exceptionLog/addExceptionLog', {
        err,
        vm,
        info,
        url: window.location.href
      })
      console.error(err, info)
    })
  }
}
