import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/FAQ/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/FAQ/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/FAQ/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/FAQ/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/FAQ/Update',
      method: 'put',
      data
    })
  }
}
