import request from '@/utils/request'
import { setTenantId } from '@/utils/tenant'

export function getAllSettings() {
  return request({
    url: '/api/services/app/HostSettings/GetAllSettings',
    method: 'get'
  })
}
export function updateAllSettings(data) {
  return request({
    url: '/api/services/app/HostSettings/UpdateAllSettings',
    method: 'put',
    data
  })
}

export function getRecurringJobSettings() {
  return request({
    url: '/api/services/app/BackgroundJob/GetListAzureBackgroundJobs',
    method: 'get'
  })
}

export function getRecurringJobHistory(query) {
  return request({
    url: '/api/services/app/BackgroundJob/GetHistoies',
    method: 'get',
    params: query
  })
}

export function updateRecurringJobSettings(data) {
  return request({
    url: '/api/services/app/BackgroundJob/UpdateJobStatus',
    method: 'put',
    data
  })
}

export function isTenantAvailable(tenancyName) {
  return request({
    url: '/api/services/app/Account/IsTenantAvailable',
    method: 'post',
    data: {
      tenancyName
    }
  }).then(resp => {
    if (resp.data.result && resp.data.result.tenantId) {
      setTenantId(resp.data.result.tenantId)
    }
  })
}
