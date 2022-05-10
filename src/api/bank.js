import request from '@/utils/request'

export function getBanksForDropdown(query) {
  return request({
    url: '/api/services/app/Bank/GetList',
    method: 'get',
    params: query
  })
}

export function getBankBranchesForDropdown(query) {
  return request({
    url: '/api/services/app/Bank/GetBankBranchesForDropdown',
    method: 'get',
    params: query
  })
}

