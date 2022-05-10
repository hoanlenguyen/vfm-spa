import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/FlexibleNotification/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/FlexibleNotification/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/FlexibleNotification/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/FlexibleNotification/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/FlexibleNotification/Update',
      method: 'put',
      data
    })
  }
}

 