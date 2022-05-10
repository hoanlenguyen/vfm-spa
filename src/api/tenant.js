import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/Tenant/GetAll',
    method: 'get',
    params: query
  })
}

export function fetchListLogFile(query) {
  return request({
    url: '/api/services/app/PartnerLogFile/GetList',
    method: 'get',
    params: query
  })
}


export function deleteItem(id) {
  return request({
    url: '/api/services/app/Tenant/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForDropDown() {
  return request({
    url: '/api/services/app/Tenant/GetForDropDown',
    method: 'get',
  })
}


export function getForEdit(id) {
  return request({
    url: '/api/services/app/Tenant/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/Tenant/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/Tenant/Update',
      method: 'put',
      data
    })
  }
}
