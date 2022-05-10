import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/Contact/GetList',
    method: 'get',
    params: query
  })
}
export function getListExcel(query) {
  return request({
    url: '/api/services/app/Contact/GetListExcel',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/Contact/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/Contact/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/Contact/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/Contact/Update',
      method: 'put',
      data
    })
  }
}
