import request from "@/utils/request";
import moment from "moment";
import XLSX from "xlsx-js-style";
const ImageHubConfig = {
  prefix: "vfm",
  folderName: "images",
  subFolder: "s",
  endpoint: process.env.VUE_APP_STORAGE_FILE,
  container: "userdocument",
};
var myMixin = {
  methods: {
    downloadFile(url, name) {
      request({
        url: "/api/services/app/File/DownloadFileFromBlob",
        method: "get",
        params: {
          fileUrl: url,
          fileName: name,
        },
        responseType: "blob",
      }).then((res) => {
        const { data, headers } = res;
        const fileName = name;
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
    },
    downloadBuffer(reportName, bufferData) {
      let typeFile = reportName.slice(reportName.lastIndexOf(".") + 1);
      var blob = new Blob([bufferData], { type: `application/${typeFile}` });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      var fileName = reportName;
      link.download = fileName;
      link.click();
      link.remove();
    },
    getFullUrl(fileName) {
      return `${ImageHubConfig.endpoint}/${ImageHubConfig.container}/${fileName}`;
    },
    getFileNameFromUrl(url) {
      var array = url.split("/");
      return array.pop();
    },
    convertArrayToObj(array) {
      return array.reduce((acc, item) => {
        acc[item.value] = item.label || item.text;
        return acc;
      }, {});
    },
    getImageUrl(imgUrl, width = 300, height = 300) {
      const newImageUrl = `${ImageHubConfig.endpoint}/${ImageHubConfig.container}/${imgUrl}`;
      return newImageUrl;
    },
    getPictureUrl(imgUrl, width, height) {
      const cdnUrl = process.env.VUE_APP_BASE_CDNURL;
      if (!imgUrl) return "";
      if (width === undefined || width == 0) {
        return `${cdnUrl}/images/t/m/${imgUrl}`;
      }
      if (width <= 300) {
        return `${cdnUrl}/images/t/s/${imgUrl}`;
      }
      if (width <= 700) {
        return `${cdnUrl}/images/t/m/${imgUrl}`;
      }
      if (width <= 1200) {
        return `${cdnUrl}/images/t/l/${imgUrl}`;
      }
      return `${cdnUrl}/images/t/xl/${imgUrl}`;
    },
    getPictureUrls(imgUrls, width, height) {
      if (imgUrls) {
        const arrImages = imgUrls.split("|");
        if (arrImages && arrImages.length > 0) {
          const arrImageUrls = [];
          arrImages.forEach((imgUrl) => {
            const strImgUrl = this.getPictureUrl(imgUrl, width, height);
            if (strImgUrl) {
              arrImageUrls.push(strImgUrl);
            }
          });
          return arrImageUrls;
        }
      }
      return [];
    },
    exportExcel(url, filter) {
      // var  url= this.buildParams(filter)
      // return Promise.resolve() !_.isEmpty(filter) ? `${url}?${this.buildParams(filter)}` :
      return request({
        url: url,
        method: "GET",
        params: filter,
      }).then((response) => {
        var FileSaver = require("file-saver");
        const blob = new Blob(
          [
            this.base64toBlob(
              response.data.result.base64,
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            ),
          ],
          {}
        );

        FileSaver.saveAs(blob, response.data.result.fileName);
      });
    },
    base64toBlob(base64Data, contentType) {
      contentType = contentType || "";
      const sliceSize = 1024;
      const byteCharacters = atob(base64Data);
      const bytesLength = byteCharacters.length;
      const slicesCount = Math.ceil(bytesLength / sliceSize);
      const byteArrays = new Array(slicesCount);
      for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, bytesLength);

        const bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return new Blob(byteArrays, { type: contentType });
    },
    exportExcelData(me, request, filter = {}, excelName, wch = null) {
      me.downloadLoading = true;
      request(filter)
        .then((resp) => {
          var result = resp.data.result;
          var animalWS = XLSX.utils.json_to_sheet(result);
          if (wch && result && result.length) {
            var size = Object.keys(result[0]).length;
            if (size) {
              var wscols = Array(size).fill({ wch: wch });
              animalWS["!cols"] = wscols;
            }
          }
          var wb = XLSX.utils.book_new(); // make Workbook of Excel
          XLSX.utils.book_append_sheet(wb, animalWS, "Sheet1"); // sheetAName is name of Worksheet
          XLSX.writeFile(
            wb,
            `${excelName}_${moment(new Date()).format("YYYYMMDD-HHmm")}.xlsx`
          ); // name of the file is 'book.xlsx'
        })
        .finally(() => {
          me.downloadLoading = false;
        });
    },
    downloadExcelData(result, excelName, wch = null) {
      var animalWS = XLSX.utils.json_to_sheet(result);
      if (wch && result && result.length) {
        var size = Object.keys(result[0]).length;
        if (size) {
          var wscols = Array(size).fill({ wch: wch });
          animalWS["!cols"] = wscols;
        }
      }
      var wb = XLSX.utils.book_new(); // make Workbook of Excel
      XLSX.utils.book_append_sheet(wb, animalWS, "Sheet1"); // sheetAName is name of Worksheet
      XLSX.writeFile(
        wb,
        `${excelName}_${moment(new Date()).format("YYYYMMDD.HHmm")}.xlsx`
      ); // name of the file is 'book.xlsx'
    },
    dateTimeFormat(value, separator = "-") {
      if (!value) return "";
      let format = `YYYY${separator}MM${separator}DD HH:mm:ss`;
      return moment(String(value)).format(format);
    },
    getTimestamp() {
      return Math.round(new Date().getTime() / 1000);
    },
    verifyDateTime(d) {
      var re =
        /^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01]) (0\d|1[01]):[0-5]\d:[0-5]\d$/;
      //         yyyy -       MM      -       dd           hh     :   mm  :   ss
      return re.test(d);
    },
    dateTimeFileFormat(value) {
      if (!value) return "";
      return moment(String(value)).format("YYYY-MM-DD_HH-mm-ss");
    },
    camelCase(string) {
      if (!string) return string;
      return string.charAt(0).toLowerCase() + string.slice(1);
    },
    convertArrayToObjects(array, key = "value", text = "text") {
      return array.reduce((acc, item) => {
        acc[item[key]] = item[text];
        return acc;
      }, {});
    },
    convertArrayToObj(array) {
      return array.reduce((acc, item) => {
        acc[item.value] = item.label || item.text;
        return acc;
      }, {});
    },
    toCleanVietnamese(str) {
      if (!str) return "";
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      return str;
    },
  },
};
export default myMixin;
