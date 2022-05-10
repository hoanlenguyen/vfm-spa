import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/fundComponent/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/fundComponent/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/fundComponent/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function bulkImport(input) {
  return request({
    url: '/api/services/app/fundComponent/BulkImport',
    method: 'post',
    data: input
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/fundComponent/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/fundComponent/Update',
      method: 'put',
      data
    })
  }
}
