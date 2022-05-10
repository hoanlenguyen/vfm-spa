import request from '@/utils/request'

export function fetchCategory(query) {
  return request({
    url: '/stonehub-vue-admin-template/product/categoryList',
    method: 'get',
    params: query
  })
}

export function fetchList(query) {
  return request({
    url: '/stonehub-vue-admin-template/Product/GetList',
    method: 'get',
    params: query
  })
}

export function fetchForDropdown(query) {
  return request({
    url: '/stonehub-vue-admin-template/Product/GetForDropdown',
    method: 'get',
    params: query
  })
}

export function fetchForAutoComplete(query) {
  return request({
    url: '/stonehub-vue-admin-template/Product/GetForAutoComplete',
    method: 'get',
    params: query
  })
}

export function fetchForDropdownByBrandId(brandId) {
  return request({
    url: '/stonehub-vue-admin-template/Product/GetByRelatedBrandForDropdown',
    method: 'get',
    params: { brandId }
  })
}

export function fetchForDropdownByProductCategoryId(categoryId) {
  return request({
    url: '/stonehub-vue-admin-template/Product/GetByRelatedProductCategoryForDropdown',
    method: 'get',
    params: { categoryId }
  })
}

export function deleteItem(id) {
  return request({
    url: '/stonehub-vue-admin-template/Product/Delete',
    method: 'delete',
    params: { id }
  })
}

export function getForEdit(id) {
  return request({
    url: '/stonehub-vue-admin-template/Product/GetForEdit',
    method: 'get',
    params: { id }
  })
}

export function getTechnicalSpecProductForEdit(id = null) {
  return request({
    url: '/stonehub-vue-admin-template/Product/GetTechnicalSpecProductForEdit',
    method: 'get',
    params: { id }
  })
}

export function createOrUpdate(data) {
  if (!data.id) {
    return request({
      url: '/stonehub-vue-admin-template/Product/Create',
      method: 'post',
      data
    })
  } else {
    return request({
      url: '/stonehub-vue-admin-template/Product/Update',
      method: 'put',
      data
    })
  }
}
