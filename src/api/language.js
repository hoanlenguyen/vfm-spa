import request from '@/utils/request'

export function getLanguages() {
    return request({
        url: '/api/services/app/Language/GetLanguages',
        method: 'get'
    })
}
export function getLanguageTexts(data) {
    return request({
        url: '/api/services/app/Language/GetLanguageTexts',
        method: 'get',
        params: data
    })
}

  
export function updateLanguageText(data) {
    return request({
        url: '/api/services/app/Language/UpdateLanguageText',
        method: 'put',
        data: {
            languageName: data.languageName,
            sourceName: data.sourceName,
            key: data.key,
            value: data.targetValue
        }
    })
}
export function fetchList(data) {
    return request({
        url: '/api/services/app/Language/GetAllLanguageTexts',
        method: 'get',
        params: data
    })
  }
  export function getLanguageTextsByKey(keyText) {
    return request({
      url: "/api/services/app/Language/GetLanguageTextsByKey",
      method: "get",
      params: { keyText: keyText }
    });
  }
  export function updateLanguageTextByKey(data) {
    //create
    return request({
      url: "/api/services/app/Language/UpdateLanguageTextByKey",
      method: "PUT",
      data
    });
  }