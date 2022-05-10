
import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/Fund/GetList',
    method: 'get',
    params: query
  })
}
export function getListExcel(query) {
  return request({
    url: '/api/services/app/Fund/GetFundListExcel',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/Fund/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/Fund/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/Fund/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/Fund/Update',
      method: 'put',
      data
    })
  }
}
export function fetchForDropdown(query) {
  return request({
    url: '/api/services/app/Fund/GetForDropdown',
    method: 'get',
    params: query
  })
}
export function fetchCodesForDropdown() {
  return request({
    url: '/api/services/app/Fund/GetCodesForDropdown',
    method: 'get'
  })
}
