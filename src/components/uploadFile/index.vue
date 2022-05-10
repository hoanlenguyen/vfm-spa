<template>
  <div id="uploadFile">
    <upload-file-pond
      ref="pond"
      :accepted-file-types="acceptType"
      :allow-multiple="allowMultiple"
      :allowImagePreview="false"
      :class="{ notAllowDownloadFile: !allowDownloadFile }"
      :fileValidateTypeLabelExpectedTypes="
        `${$t(fileValidateTypeLabelExpectedTypes)}`
      "
      :label-idle="lableUploadFile"
      :labelButtonDownloadItem="`${$t(labelButtonDownloadItem)}`"
      :labelFileProcessing="`${$t(labelFileProcessing)}`"
      :labelFileProcessingComplete="`${$t(labelFileProcessingComplete)}`"
      :labelFileProcessingError="`${$t(labelFileProcessingError)}`"
      :labelFileTypeNotAllowed="`${$t(labelFileTypeNotAllowed)}`"
      :labelMaxFileSize="`${$t(labelMaxFileSize)}`"
      :labelMaxFileSizeExceeded="`${$t(labelMaxFileSizeExceeded)}`"
      :labelTapToCancel="''"
      :labelTapToRetry="`${$t(labelTapToRetry)}`"
      :labelTapToUndo="`${$t(labelTapToUndo)}`"
      :maxFileSize="maxFileSize"
      :maxFiles="maxFiles"
      :maxParallelUploads="maxParallelUploads"
      :onaddfile="onAddFile"
      :onprocessfilerevert="undoFile"
      :onremovefile="removeFile"
      :server="{
        fetch: null,
        process
      }"
      iconUndo='<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>'
      instantUpload="false"
      itemInsertInterval="0"
      styleButtonRemoveItemPosition="right"
      v-bind:files="myList"
    />
  </div>
</template>
<script>
// import { uploadFileUrl } from "@/api/imageUpload";
const mime = require("mime-types");
import { getToken } from '@/utils/auth'

export default {
  props: {
    acceptType: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: ""
    },
    maxFileSize: {
      type: Number,
      default: 5 * 1024 * 1024
    },
    maxFiles: {
      type: Number,
      default: null
    },
    textTitle: {
      type: String,
      default: "Nhấn hoặc kéo thả file vào đây"
    },
    labelIdle: {
      type: String,
      default: function() {
        return `<div class="tw-flex tw-items-center tw-text-dark-800">
					<svg t="1608536134351" class="tw-mr-2" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5542" width="32" height="32" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"></style></defs><path d="M917.333333 443.733333V426.666667c0-164.266667-134.4-298.666667-298.666666-298.666667-113.066667 0-215.466667 64-264.533334 162.133333-21.333333-8.533333-42.666667-12.8-66.133333-12.8C187.733333 277.333333 106.666667 358.4 106.666667 458.666667v17.066666c-64 38.4-106.666667 108.8-106.666667 185.6 0 117.333333 96 213.333333 213.333333 213.333334h106.666667c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667h-106.666667c-70.4 0-128-57.6-128-128 0-53.333333 34.133333-102.4 85.333334-119.466666 21.333333-8.533333 34.133333-32 25.6-53.333334-2.133333-10.666667-4.266667-19.2-4.266667-29.866666C192 405.333333 234.666667 362.666667 288 362.666667c21.333333 0 42.666667 6.4 59.733333 21.333333 10.666667 8.533333 25.6 10.666667 38.4 8.533333 12.8-4.266667 23.466667-14.933333 27.733334-27.733333 27.733333-89.6 110.933333-149.333333 204.8-149.333333 117.333333 0 213.333333 96 213.333333 213.333333 0 10.666667 0 21.333333-2.133333 32-2.133333 19.2 6.4 38.4 23.466666 44.8 51.2 25.6 85.333333 76.8 85.333334 134.4 0 76.8-57.6 140.8-132.266667 149.333333H704c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667h106.666667c4.266667 0 10.666667 0 14.933333-2.133334C938.666667 853.333333 1024 755.2 1024 640c0-78.933333-40.533333-153.6-106.666667-196.266667" fill="currentColor" p-id="5543"></path><path d="M512 832c23.466667 0 42.666667-19.2 42.666667-42.666667v-196.266666l34.133333 34.133333c8.533333 8.533333 19.2 12.8 29.866667 12.8 10.666667 0 21.333333-4.266667 29.866666-12.8 17.066667-17.066667 17.066667-42.666667 0-59.733333l-106.666666-106.666667c-2.133333-2.133333-4.266667-4.266667-6.4-4.266667 0 0-2.133333-2.133333-4.266667-2.133333s-2.133333-2.133333-4.266667-2.133333-2.133333 0-4.266666-2.133334c-2.133333 0-2.133333 0-4.266667-2.133333-6.4-2.133333-10.666667-2.133333-17.066667 0-2.133333 0-2.133333 0-4.266666 2.133333-2.133333 0-2.133333 0-4.266667 2.133334-2.133333 0-2.133333 2.133333-4.266667 2.133333s-2.133333 2.133333-4.266666 2.133333c-2.133333 2.133333-4.266667 4.266667-6.4 4.266667l-106.666667 106.666667c-17.066667 17.066667-17.066667 42.666667 0 59.733333 12.8 8.533333 23.466667 12.8 34.133333 12.8s21.333333-4.266667 29.866667-12.8l34.133333-34.133333V789.333333c0 23.466667 19.2 42.666667 42.666667 42.666667" fill="currentColor" p-id="5544"></path></svg>
					<p class="tw-m-0">{textTitle}</p>
				</div>`;
      }
    },
    labelTapToUndo: {
      type: String,
      default: function() {
        return "Nhấn để hoàn tác";
      }
    },
    labelFileProcessingComplete: {
      type: String,
      default: function() {
        return "Tải lên thành công";
      }
    },
    labelFileTypeNotAllowed: {
      type: String,
      default: function() {
        return "File không hợp lệ";
      }
    },
    fileValidateTypeLabelExpectedTypes: {
      type: String,
      default: function() {
        return "File cho phép có định dạng {allButLastType} hoặc {lastType}";
      }
    },
    labelFileProcessingError: {
      type: String,
      default: function() {
        return "Tải lên không thành công";
      }
    },
    labelFileProcessing: {
      type: String,
      default: function() {
        return "Đang tải lên";
      }
    },
    labelButtonDownloadItem: {
      type: String,
      default: function() {
        return "Tải file xuống";
      }
    },
    labelMaxFileSizeExceeded: {
      type: String,
      default: function() {
        return "File quá lớn";
      }
    },
    labelMaxFileSize: {
      type: String,
      default: function() {
        return "Kích thước file tối đa là {filesize}";
      }
    },
    labelTapToRetry: {
      type: String,
      default: function() {
        return "Nhấn để thử lại";
      }
    },
    maxParallelUploads: {
      type: Number,
      default: 10
    },
    allowMultiple: {
      type: Boolean,
      default: false
    },
    folderName: {
      type: String,
      default: "default"
    },
    allowDownloadFile: {
      type: Boolean,
      default: false
    },
    processTimeout: {
      type: Number,
      default: 7000
    }
  },
  data: function() {
    return {
      myList: [],
      baseUrl: process.env.VUE_APP_STORAGE_FILE,
      baseFolder: "userdocument",
      fileUrls: [],
      tempFileUrls: []
    };
  },
  computed: {
    process() {
      return {
        url: `${process.env.VUE_APP_BASE_API}/api/services/app/File/UploadFile?folder=${this.folderName}`,
        method: "POST",
        withCredentials: false,
        headers: {
          'Authorization': 'Bearer ' + getToken()
        },
        timeout: this.processTimeout,
        onload: this.uploadSuccess,
        onerror: this.uploadError,
        ondata: this.beforeUpload
      };
    },
    getBaseFileUrl() {
      return `${this.baseUrl}/${this.baseFolder}`;
    },
    lableUploadFile() {
      let label = this.labelIdle;
      if (this.labelIdle) {
        label = this.labelIdle.replace("{textTitle}", this.$t(this.textTitle));
      }
      let extensions = this.getFileExtension(this.acceptType);
      if (extensions)
        label += `<p class="tw-my-0 tw-text-sm">${this.$t(
          "Các tập tin được cho phép"
        )}: ${extensions}.</p>`;
      return label;
    }
  },
  // mounted() {
  //   // this.myList = this.loadFiles()
  // },
  methods: {
    onAddFile(error, file) {
      let fileName = file.filename;
      let fileUrls = this.tempFileUrls;
      let fileUrl = `${this.folderName}/${fileName}`;
      if (!fileUrls.includes(fileUrl)) {
        this.$refs.pond.processFile(file);
      }else{
        this.removeFile(null,file)
      }
    },
    getFileExtension(val) {
      if (!val) return;
      let arr = val.split(",");
      let extensions = [];
      arr.forEach(item => {
        let fileExtension = mime.extension(item.trim());
        if (fileExtension) {
          extensions.push(fileExtension);
        }
      });
      return extensions.join(", ");
    },
    loadFiles() {
      let fileUrls = this.getFileUrlFromSrc();
      return fileUrls.map(p => {
        return {
          source: `${this.getBaseFileUrl}/${p.replace(/\\/g, "/")}`,
          options: {}
        };
      });
    },
    getFileUrlFromSrc() {
      this.tempFileUrls = [];
      if (this.src) {
        let lstFileUrl = this.src.split(",");
        this.tempFileUrls = lstFileUrl;
      }
      return this.tempFileUrls;
    },
    undoFile(item) {
      if (item) {
        let pond = this.$refs.pond;
        pond.removeFile(p => p.id == item.id);
        this.emitUploadSuccess();
      }
    },
    removeFile(error, item) {
      if (item) {
        let pond = this.$refs.pond;
        pond.removeFile(p => p.id == item.id);
        this.emitUploadSuccess();
      }
    },
    beforeUpload(data) {
      //Called with the formdata object right before it is sent, return extended formdata object to make changes
      return data;
    },
    emitUploadSuccess() {
      this.getFileUrlsFromFilePond();
      this.$emit("onUploadSuccess", this.fileUrls.toString());
      this.getFileUrlFromSrc()
    },
    getFileUrlsFromFilePond() {
      this.fileUrls = [];
      if (this.$refs && this.$refs.pond) {
        let pond = this.$refs.pond;
        let files = pond.getFiles();

        files.forEach(p => {
          this.fileUrls.push(`${this.folderName}/${p.filename}`);
        });
        this.tempFileUrls = this.fileUrls;
        return this.fileUrls;
      }
    },
    uploadSuccess(response) {
      //Called when server response is received, useful for getting the unique file id from the server response
      if (response) {
        let data = JSON.parse(response);
        if (data.result) {
          this.emitUploadSuccess();
          // this.fileUrls.push(data.result);
          // this.$emit("onUploadSuccess", this.fileUrls.toString());
        } else {
          this.$message.error({
            title: "Error",
            message: data.result.message
          });
        }
      }
    },
    uploadError(response) {
      //Called when server error is received, receives the response body, useful to select the relevant error data
      if (response) {
        this.$message.error({
          title: "Error",
          message: `${this.$t(
            "Tải têp lên không thành công vui lòng thử lại sau."
          )}`
        });
      }
    }
  },
  watch: {
    src: {
      handler() {
        this.myList = this.loadFiles();
      },
      deep: true,
      immediate: true
    }
  },
  beforeDestroy() {
    this.fileUrls = [];
    this.myList = [];
  }
};
</script>
<style lang="scss" scoped>
::v-deep .filepond {
  &--root {
    border: 2px dashed #c7cfd6;
    border-radius: 1rem;
    font-family: "Be Vietnam", sans-serif !important;
    margin-bottom: 0;
    min-height: 80px;
  }

  &--panel-root {
    background-color: transparent !important;
    border: unset !important;
  }

  &--file-info {
    transform: none !important;
  }

  &--file-status {
    transform: none !important;
  }

  &--download-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  &--file-action-button {
    cursor: pointer;
    color: #fff;

    &.filepond--action-process-item {
      display: none !important;
    }
  }

  &--drop-label {
    color: #555;
    min-height: 80px;
    label {
      cursor: pointer;
    }
  }

  &--credits {
    display: none;
  }

  &--item {
    &[data-filepond-item-state*="processing-error"] {
      .filepond--file {
        .filepond--action {
          &-retry-item-processing {
            right: 2.5rem;
          }
        }

        .filepond--file-status {
          margin-right: 4rem;
        }
      }
    }

    &[data-filepond-item-state*="error"],
    &[data-filepond-item-state*="invalid"],
    &[data-filepond-item-state*="load-invalid"] {
      position: relative;

      .filepond--file-status {
        transform: none !important;

        .filepond--file-status-main {
          margin-left: 0.625rem;
        }

        .filepond--file-status-sub {
          white-space: unset;
          margin-left: 0.625rem !important;
          font-size: 0.7rem !important;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      @media (max-width: 576px) {
        .filepond--file-info {
          display: none;
        }
        .filepond--file-status {
          left: 5px !important;
          width: calc(100% - 40px) !important;
          text-align: left !important;
          align-items: flex-start !important;
        }
      }
    }

    &-panel {
      border-radius: 1rem;
    }
  }

  &--file {
    border-radius: 1rem;
  }

  &--magnify-icon {
    display: none;
  }

  @media (max-width: 576px) {
    &--item {
      width: calc(100% - 0.5em) !important;
    }
    &--file-info {
      transform: translate3d(0, 0px, 0px) !important;
      margin-right: 0;
    }
  }
}

::v-deep .notAllowDownloadFile {
  .filepond--download-icon {
    display: none;
  }
}
</style>
