import request from '@/utils/request'

export function manualCreateTradingAccount(data) {
  return request({
    url: '/api/services/app/Tps/ManualCreateTradingAccount',
    method: 'post',
    data
  })
}

