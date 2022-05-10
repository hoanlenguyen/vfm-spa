import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/stockIndex/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/stockIndex/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/stockIndex/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function bulkImport(input) {
  return request({
    url: '/api/services/app/stockIndex/BulkImport',
    method: 'post',
    data: input
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/stockIndex/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/stockIndex/Update',
      method: 'put',
      data
    })
  }
}
export function fetchForDropdown(query) {
  return request({
    url: '/api/services/app/stockIndex/GetForDropdown',
    method: 'get',
    params: query
  })
}