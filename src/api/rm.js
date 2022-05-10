import request from '@/utils/request'

export function bulkImport(data) {
  return request({
    url: '/api/services/app/RM/ImportExcel',
    method: 'post',
    data
  })
}

export function fetchList(query) {
  return request({
    url: '/api/services/app/RM/GetList',
    method: 'get',
    params: query
  })
}

export function getConsentLetterRequestList(query) {
  return request({
    url: '/api/services/app/RM/GetConsentLetterRequestList',
    method: 'get',
    params: query
  })
}

export function getConsentLetterRequestDetail(query) {
  return request({
    url: '/api/services/app/RM/GetConsentLetterRequestDetail',
    method: 'get',
    params: query
  })
}

export function updateConsentLetterRequestStatus(data) {
  return request({
    url: '/api/services/app/RM/UpdateConsentLetterRequestStatus',
    method: 'put',
    data
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/User/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getExportExcel(query) {
  return request({
    url: '/api/services/app/RM/GetExportExcel',
    method: 'get',
    params: query
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/RM/CreateRMUser',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/RM/Update',
      method: 'put',
      data
    })
  }
}
