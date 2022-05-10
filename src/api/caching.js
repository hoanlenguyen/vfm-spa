import request from "@/utils/request";

export function getAllCaches() {
    return request({
      url: '/api/services/app/Caching/GetAllCaches',
      method: 'GET',
    })
  }
  export function clearCache(id) {
    return request({
      url: '/api/services/app/Caching/ClearCache',
      method: 'POST',
      data: {
        id: id
      }
    })
  }
  export function clearAllCaches() {
    return request({
      url: '/api/services/app/Caching/ClearAllCaches',
      method: 'POST',
    })
  }