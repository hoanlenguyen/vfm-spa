import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/PostCategoryType/GetList',
    method: 'get',
    params: query
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/PostCategoryType/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/PostCategoryType/Update',
      method: 'put',
      data
    })
  }
}
