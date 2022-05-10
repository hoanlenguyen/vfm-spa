import request from '@/utils/request'

export function fetchList(query) {
    return request({
      url: '/api/services/app/User/GetAdminUsers',
      method: 'get',
      params: query
    })
  }  

export function getForEdit(query) {
    return request({
      url: '/api/services/app/User/GetAdminUserForEdit?id=' + query,
      method: 'get',
    })
  }
  

  export function deleteItem(id) {
    return request({
      url: '/api/services/app/User/Delete',
      method: 'delete',
      params: { id }
    })
  }
  
  export function createOrUpdate(data) {
    if (!data.user.id) {
      return request({
        url: '/api/services/app/User/CreateAdminUser',
        method: 'post',
        data
      })
    } else {
      return request({
        url: '/api/services/app/User/UpdateAdminUser',
        method: 'put',
        data
      })
    }
  }

  export function getAllRoles(query) {
    return request({
      url: '/api/services/app/User/GetAllRoles',
      method: 'get',
    })
  }

  
  export function adminUpdatePassword(data) {
    return request({
      url: '/api/services/app/User/AdminUpdatePassword',
      method: 'post',
      data
    })
  }
  
