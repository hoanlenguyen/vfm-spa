import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/fundNav/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/fundNav/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/fundNav/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function bulkImport(input) {
  return request({
    url: '/api/services/app/fundNav/BulkImport',
    method: 'post',
    data: input
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/fundNav/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/fundNav/Update',
      method: 'put',
      data
    })
  }
}
export function fetchForDropdown(query) {
  return request({
    url: '/api/services/app/fundNav/GetForDropdown',
    method: 'get',
    params: query
  })
}