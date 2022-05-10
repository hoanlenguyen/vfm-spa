import request from '@/utils/request'


export function fetchList(query) {
  return request({
    url: '/api/services/app/RejectedUser/GetList',
    method: 'get',
    params: query
  })
}
export function GetListExcel(query) {
  return request({
    url: '/api/services/app/RejectedUser/GetListExcel',
    method: 'get',
    params: query
  })
}

export function getForEdit(query) {
  return request({
    url: '/api/services/app/RejectedUser/GetForEdit',
    method: 'get',
    params: query
  })
}
