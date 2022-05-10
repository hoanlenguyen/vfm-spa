import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/stonehub-vue-admin-template/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/stonehub-vue-admin-template/roles',
    method: 'get'
  })
}

export function fetchForDropdown(query) {
  return request({
    url: '/api/services/app/Role/GetForDropdown',
    method: 'get',
    query: query
  })
}

export function addRole(data) {
  return request({
    url: '/stonehub-vue-admin-template/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/stonehub-vue-admin-template/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/stonehub-vue-admin-template/role/${id}`,
    method: 'delete'
  })
}

export function fetchList(query) {
  return request({
    url: '/api/services/app/Role/GetAll',
    method: 'get',
    params: query
  })
}

export function getAllDynamicRolePermission() {
  return request({
    url: '/api/services/app/Role/GetAllDynamicRolePermission',
    method: 'get',
  })
}


export function getForEdit(id) {
  return request({
    url: '/api/services/app/Role/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/api/services/app/Role/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/api/services/app/Role/Update',
      method: 'put',
      data
    })
  }
}

export function deleteItem(id) {
  return request({
    url: '/api/services/app/Role/Delete',
    method: 'delete',
    params: { id }
  })
}