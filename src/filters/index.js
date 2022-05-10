// import parseTime, formatTime and set to filter
export { parseTime, formatTime } from '@/utils'
import Vue from "vue"
import moment from 'moment'
import Vue2Filters from "vue2-filters"
Vue.use(Vue2Filters)

Vue.filter('date', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD')
  }
})

Vue.filter('shortDate', function (value) {
  if (value) {
    return moment(String(value)).format('MMM DD')
  }
})

Vue.filter('dateTime', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD HH:mm')
  }
})

Vue.filter('dateTimeFull', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD HH:mm:ss')
  }
})

Vue.filter('shortDateTime', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD hh:mm')
  }
})


/**
 * @param {number} time
 */
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}