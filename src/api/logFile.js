import request from "@/utils/request";

export function fetchList(query) {
  return request({
    url: "/api/services/app/LogFile/GetList",
    method: "get",
    params: query,
  });
}
export const downloadLogUrl = "/home/Getlog";

export function downloadLog(fileName) {
  request({
    url: downloadLogUrl,
    method: "get",
    params: {
      fileName: fileName,
    },
    responseType: "blob",
  }).then((res) => {
    const { data, headers } = res;
    const blob = new Blob([data], { type: headers["content-type"] });
    let dom = document.createElement("a");
    let url = window.URL.createObjectURL(blob);
    dom.href = url;
    dom.download = decodeURI(fileName);
    dom.style.display = "none";
    document.body.appendChild(dom);
    dom.click();
    dom.parentNode.removeChild(dom);
    window.URL.revokeObjectURL(url);
  });
}
