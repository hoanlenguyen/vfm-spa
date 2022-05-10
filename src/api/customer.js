import request from '@/utils/request'

export function fetchCategory(query) {
  return request({
    url: '/stonehub-vue-admin-template/customer/categoryList',
    method: 'get',
    params: query
  })
}

export function fetchList(query) {
  return request({
    url: '/stonehub-vue-admin-template/customer/list',
    method: 'get',
    params: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/stonehub-vue-admin-template/customer/delete',
    method: 'get',
    params: query
  })
}

export function getForEdit(id) {
  return request({
    url: '/stonehub-vue-admin-template/customer/getForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  return request({
    url: '/stonehub-vue-admin-template/customer/createOrUpdate',
    method: 'post',
    data
  })
}