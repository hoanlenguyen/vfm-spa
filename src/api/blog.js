import request from '@/utils/request'

export function fetchCategory(query) {
  return request({
    url: '/stonehub-vue-admin-template/blog/categoryList',
    method: 'get',
    params: query
  })
}

export function fetchList(query) {
  return request({
    url: '/stonehub-vue-admin-template/blog/list',
    method: 'get',
    params: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/stonehub-vue-admin-template/blog/delete',
    method: 'get',
    params: query
  })
}

export function getForEdit(id) {
  return request({
    url: '/stonehub-vue-admin-template/blog/getForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  return request({
    url: '/stonehub-vue-admin-template/blog/createOrUpdate',
    method: 'post',
    data
  })
}
