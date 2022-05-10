import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/ESignHistory/GetList',
    method: 'get',
    params: query
  })
}
export function fetchListOpenTrading(query) {
  return request({
    url: '/api/services/app/ESignHistory/GetListOpenTrading',
    method: 'get',
    params: query
  })
}

export function getESignHistoryExcel(query) {
  return request({
    url: '/api/services/app/ESignHistory/GetListExcel',
    method: 'get',
    params: query
  })
}