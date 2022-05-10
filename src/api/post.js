import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/Post/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/Post/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/Post/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/Post/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/Post/Update',
      method: 'put',
      data
    })
  }
}
