import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/PaymentHistory/GetList',
    method: 'get',
    params: query
  })
}

export function getListExcel(query) {
  return request({
    url: '/api/services/app/PaymentHistory/GetListExcel',
    method: 'get',
    params: query
  })
}

export function confirmContentPayment(query) {
  return request({
    url: '/api/services/app/PaymentHistory/ConfirmContentPayment',
    method: 'post',
    params: query
  })
}