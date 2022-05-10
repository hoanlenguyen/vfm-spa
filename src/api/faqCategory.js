import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/FAQCategory/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/FAQCategory/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/FAQCategory/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function getForDropdown(query) {
  return request({
    url: '/api/services/app/FAQCategory/GetForDropdown',
    method: 'get',
    params: query
  })
}

export function fetchParentForDropdown(query) {
  return request({
    url: '/api/services/app/FAQCategory/GetParentForDropdown',
    method: 'get',
    params: query
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/FAQCategory/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/FAQCategory/Update',
      method: 'put',
      data
    })
  }
}
