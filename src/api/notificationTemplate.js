import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/services/app/NotificationTemplate/GetList',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/NotificationTemplate/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/api/services/app/NotificationTemplate/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/NotificationTemplate/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/NotificationTemplate/Update',
      method: 'put',
      data
    })
  }
}

export function getListUser(query) {
  return request({
    url: '/api/services/app/NotificationTemplate/GetListUser',
    method: 'get',
    params: query
  })
}

export function adminSendNotification(notificationTemplateId) {
  return request({
    url: '/api/services/app/NotificationTemplate/AdminSendNotification?notificationTemplateId='+notificationTemplateId,
    method: 'post',
  })
}

export function getAllUserIdByFilter(query) {
  return request({
    url: '/api/services/app/NotificationTemplate/GetAllUserIdByFilter',
    method: 'get',
    params: query
  })
}


export function getListHistory(query) {
  return request({
    url: '/api/services/app/NotificationTemplate/GetListHistory',
    method: 'get',
    params: query
  })
}