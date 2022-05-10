import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/stockIndexType/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/stockIndexType/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/stockIndexType/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function bulkImport(input) {
  return request({
    url: '/api/services/app/stockIndexType/BulkImport',
    method: 'post',
    data: input
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/stockIndexType/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/stockIndexType/Update',
      method: 'put',
      data
    })
  }
}
export function fetchForDropdown(query) {
  return request({
    url: '/api/services/app/stockIndexType/GetForDropdown',
    method: 'get',
    params: query
  })
}