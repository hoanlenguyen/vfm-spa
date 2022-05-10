import request from "@/utils/request";

export function uploadFile(fileName, folder, data) {
  return request({
    url: "/api/services/app/File/SaveAndGetShortUrl",
    method: "post",
    params: { fileOriginName: fileName, folder, },
    data
  });
}


export function downloadLog() {
  return request({
    url: "/home/Getlog",
    method: "get",
    params: {},
    responseType: 'blob',
  });
}



