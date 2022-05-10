import request from "@/utils/request";

export function getImageUrl(id) {
  return request({
    url: "/api/services/app/Picture/GetImageUrl",
    method: "get",
    params: { id }
  });
}

export function getImageUrls(ids) {
  return request({
    url: "/api/services/app/Picture/GetImageUrls",
    method: "get",
    params: { ids }
  });
}

export function UploadPicture(data) {
    return request({
			url: '/Picture/UploadPicture',
			method: 'post',
			data
		})
}
export function UploadFile(data, folderName = "",fileName=null){
  var url = `/api/services/app/File/UploadFile?folder=${folderName}&fileName=${fileName}`;
  return request({
    url: url,
    method: 'post',
    data
  })
}

export function uploadItem(data) {

  return {
    data: {
      result:{
        fileName: "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA AAAFCAYAAACNbyblAAAAHElEQVQI12P4\/\/8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
      }
    }
  }
  // return request({
  //   url: "/Picture/UploadPictureAsync",
  //   method: "POST",
  //   data
  // });
}

export const uploadImageUrl = '/Picture/UploadPicture'

export const uploadFileUrl = '/api/services/app/File/UploadFile'

