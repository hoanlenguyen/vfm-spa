import request from '@/utils/request'

export function fetchCategory(query) {
  return request({
    url: '/stonehub-vue-admin-template/order/categoryList',
    method: 'get',
    params: query
  })
}

export function getListOrderProduct(query) {
  return request({
    url: '/stonehub-vue-admin-template/order/GetListOrderProduct',
    method: 'get',
    params: query
  })
}

export function deleteItem(id) {
  return request({
    url: '/stonehub-vue-admin-template/order/delete',
    method: 'delete',
    params: { id: id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/stonehub-vue-admin-template/order/getForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  return request({
    url: '/stonehub-vue-admin-template/order/createOrUpdate',
    method: 'post',
    data
  })
}

// Order service
export function getList(id) {
  return request({
    url: '/api/services/app/Order/GetOrdersByUserId',
    method: 'get',
    params: { id }
  })
}

export function fetchList(query) {
  return request({
    url: '/api/services/app/Order/GetList',
    method: 'get',
    params: query
  })
}
export function getOrderListExcel(query) {
  return request({
    url: '/api/services/app/Order/getOrderListExcel',
    method: 'get',
    params: query
  })
}

export function getDetail(id) {
  return request({
    url: '/api/services/app/Order/GetDetailDto',
    method: 'get',
    params: { id }
  })
}
