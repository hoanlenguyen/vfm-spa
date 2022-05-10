import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/FundCategory/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/FundCategory/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/FundCategory/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/FundCategory/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/FundCategory/Update',
      method: 'put',
      data
    })
  }
}
export function fetchForDropdown(query) {
  return request({
    url: '/api/services/app/FundCategory/GetForDropdown',
    method: 'get',
    params: query
  })
}