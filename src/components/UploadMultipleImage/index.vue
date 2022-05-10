<template>
  <div>
    <file-pond
      ref="pond"
      :label-idle="`${$t(labelIdle)}`"
      :allow-multiple="true"
      item-insert-interval="0"
      instant-upload="false"
      :accepted-file-types="acceptType"
      :max-parallel-uploads="maxParallelUploads"
      :max-file-size="maxFileSize"
      :max-files="maxFiles"
      :server="{
        fetch: null,
        process,
      }"
      :files="myList"
      :onaddfile="onAddFile"
      :onremovefile="removeImage"
      :onprocessfilerevert="undoFile"
      style-button-remove-item-position="right"
      :label-file-processing-error="`${$t(labelFileProcessingError)}`"
      :file-validate-type-label-expected-types="`${$t(
        fileValidateTypeLabelExpectedTypes
      )}`"
      :label-file-type-not-allowed="`${$t(labelFileTypeNotAllowed)}`"
      :label-tap-to-undo="`${$t(labelTapToUndo)}`"
      :label-tap-to-cancel="''"
      :label-file-processing="`${$t(labelFileProcessing)}`"
      :label-file-processing-complete="`${labelFileProcessingComplete}`"
      :style-item-panel-aspect-ratio="`${itemRatio.height / itemRatio.width}`"
      :label-button-image-overlay="`${$t(labelButtonImageOverlay)}`"
      icon-undo="<svg width=&quot;26&quot; height=&quot;26&quot; viewBox=&quot;0 0 26 26&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z&quot; fill=&quot;currentColor&quot; fill-rule=&quot;nonzero&quot;/></svg>"
    />
  </div>
</template>
<script>
import { uploadFileUrl } from '@/api/imageUpload'
import { getToken } from '@/utils/auth'

export default {
  props: {
    acceptType: {
      type: String,
      default: 'image/jpeg, image/png, image/jpg'
    },
    src: {
      type: String,
      default: ''
    },
    getAvatarUrl: {
      type: String,
      default: `${process.env.VUE_APP_BASE_CDNURL}/Uploads/t/300`
    },
    maxFileSize: {
      type: Number,
      default: 5 * 1024 * 1024
    },
    maxFiles: {
      type: Number,
      default: null
    },
    labelIdle: {
      type: String,
      default: function() {
        return `<div class="d-flex align-items-center">
          <svg t="1608536134351" class="mr-3" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5542" width="32" height="32" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"></style></defs><path d="M917.333333 443.733333V426.666667c0-164.266667-134.4-298.666667-298.666666-298.666667-113.066667 0-215.466667 64-264.533334 162.133333-21.333333-8.533333-42.666667-12.8-66.133333-12.8C187.733333 277.333333 106.666667 358.4 106.666667 458.666667v17.066666c-64 38.4-106.666667 108.8-106.666667 185.6 0 117.333333 96 213.333333 213.333333 213.333334h106.666667c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667h-106.666667c-70.4 0-128-57.6-128-128 0-53.333333 34.133333-102.4 85.333334-119.466666 21.333333-8.533333 34.133333-32 25.6-53.333334-2.133333-10.666667-4.266667-19.2-4.266667-29.866666C192 405.333333 234.666667 362.666667 288 362.666667c21.333333 0 42.666667 6.4 59.733333 21.333333 10.666667 8.533333 25.6 10.666667 38.4 8.533333 12.8-4.266667 23.466667-14.933333 27.733334-27.733333 27.733333-89.6 110.933333-149.333333 204.8-149.333333 117.333333 0 213.333333 96 213.333333 213.333333 0 10.666667 0 21.333333-2.133333 32-2.133333 19.2 6.4 38.4 23.466666 44.8 51.2 25.6 85.333333 76.8 85.333334 134.4 0 76.8-57.6 140.8-132.266667 149.333333H704c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667h106.666667c4.266667 0 10.666667 0 14.933333-2.133334C938.666667 853.333333 1024 755.2 1024 640c0-78.933333-40.533333-153.6-106.666667-196.266667" fill="currentColor" p-id="5543"></path><path d="M512 832c23.466667 0 42.666667-19.2 42.666667-42.666667v-196.266666l34.133333 34.133333c8.533333 8.533333 19.2 12.8 29.866667 12.8 10.666667 0 21.333333-4.266667 29.866666-12.8 17.066667-17.066667 17.066667-42.666667 0-59.733333l-106.666666-106.666667c-2.133333-2.133333-4.266667-4.266667-6.4-4.266667 0 0-2.133333-2.133333-4.266667-2.133333s-2.133333-2.133333-4.266667-2.133333-2.133333 0-4.266666-2.133334c-2.133333 0-2.133333 0-4.266667-2.133333-6.4-2.133333-10.666667-2.133333-17.066667 0-2.133333 0-2.133333 0-4.266666 2.133333-2.133333 0-2.133333 0-4.266667 2.133334-2.133333 0-2.133333 2.133333-4.266667 2.133333s-2.133333 2.133333-4.266666 2.133333c-2.133333 2.133333-4.266667 4.266667-6.4 4.266667l-106.666667 106.666667c-17.066667 17.066667-17.066667 42.666667 0 59.733333 12.8 8.533333 23.466667 12.8 34.133333 12.8s21.333333-4.266667 29.866667-12.8l34.133333-34.133333V789.333333c0 23.466667 19.2 42.666667 42.666667 42.666667" fill="currentColor" p-id="5544"></path></svg>
          <p>Nhấn hoặc kéo thả hình vào đây</p>
         </div>`
      }
    },
    labelTapToUndo: {
      type: String,
      default: function() {
        return 'Nhấn để hoàn tác'
      }
    },
    labelFileProcessingComplete: {
      type: String,
      default: function() {
        return 'Tải lên thành công'
      }
    },
    labelFileTypeNotAllowed: {
      type: String,
      default: function() {
        return 'Tệp không hợp lệ'
      }
    },
    fileValidateTypeLabelExpectedTypes: {
      type: String,
      default: function() {
        return 'Tệp cho phép có định dạng {allButLastType} or {lastType}'
      }
    },
    labelFileProcessingError: {
      type: String,
      default: function() {
        return 'Tải lên không thành công'
      }
    },
    labelFileProcessing: {
      type: String,
      default: function() {
        return 'Đang tải lên'
      }
    },
    labelButtonImageOverlay: {
      type: String,
      default: function() {
        return 'Nhấn để xem hình'
      }
    },
    itemRatio: {
      type: Object,
      default: function() {
        return { width: 16, height: 9 }
      }
    },
    maxParallelUploads: {
      type: Number,
      default: 10
    },
    folderName:{
      type: String,
      default: 'DCVFM/Images'
    },
  },
  data: function() {
    return {
      imageUrls: [],
      myList: []
    }
  },
  computed: {
    process() {
      var uploadUrl = `${process.env.VUE_APP_BASE_API}${uploadFileUrl}?folder=${this.folderName}`;
      return {
        url: uploadUrl,
        method: 'POST',
        withCredentials: false,
        headers: {
          'Authorization': 'Bearer ' + getToken()
        },
        timeout: 20000,
        onload: this.uploadSuccess,
        onerror: this.uploadError,
        ondata: this.beforeUpload
      }
    }
  },
  watch: {
    'src': {
      handler() {
        this.myList = this.loadImages()
      },
      deep: true,
      immediate: true
    }
  },
  beforeDestroy() {
    this.imageUrls = []
    this.myList = []
  },
  methods: {
    // fileRenameFunction(file){
    //   debugger;
    //   let baseName = file.basename;
    //   let extention = file.extension;
    //   // change file name if it is sefie image
    //   if(this.isUploadSelfieImage) {
        
    //     let checkIsExist = true;
    //     let i = 1;
    //     baseName = `SelfieImage_${i}`
    //     while(checkIsExist) {
    //       checkIsExist = this.imageUrls.some(item => item.includes(`${this.folderName}/${baseName}`));
    //       if(checkIsExist){
    //         i+=1;
    //         baseName = `SelfieImage_${i}`
    //       }
    //     }
    //   }
    //   return `${baseName}${extention}`;
    // },
    onAddFile(error, file) {
      const fileName = file.filename
      if (!this.imageUrls.includes(fileName)) {
        this.$refs.pond.processFile(file)
      }
    },
    loadImages() {
      if (this.src) {
        const lstImageUrl = this.src.split(',')
        this.imageUrls = lstImageUrl
        return lstImageUrl.map(
          // (p) => `${this.getAvatarUrl}/${p.replace(/\\/g, '/')}`
						 p => this.getImageUrl(p.replace(/\\/g, '/'), 300)
        )
      }
      if (this.$refs && this.$refs.pond) {
        this.$refs.pond.removeFiles()
      }
      this.imageUrls = []
      this.$emit('onUploadSuccess', this.imageUrls.toString())
      return []
    },
    undoFile(file) {
      const pond = this.$refs.pond
      const fileId = file.id
      const arrId = pond
        .getFiles()
        .map((p) => p.id)
        .reverse()
      const index = arrId.findIndex((p) => p === fileId)
      if (index > -1) {
        pond.removeFile(file.id)
        this.imageUrls.splice(index, 1)
        this.$emit('onUploadSuccess', this.imageUrls.toString())
      }
    },
    removeImage(error, item) {
      if (item) {
        const index = this.imageUrls.indexOf(item.filename)
        if (index > -1) {
          this.imageUrls.splice(index, 1)
          this.$emit('onUploadSuccess', this.imageUrls.toString())
        }
      }
    },
    beforeUpload(data) {
      // Called with the formdata object right before it is sent, return extended formdata object to make changes
      return data
    },
    uploadSuccess(response) {
      // Called when server response is received, useful for getting the unique file id from the server response
      if (response) {
        const data = JSON.parse(response)
        if (data.result) {
          this.imageUrls.push(data.result)
          this.$emit('onUploadSuccess', this.imageUrls.toString())
        } else {
          this.$message.error({
            title: 'Error',
            message: data.result.message
          })
        }
      }
    },
    uploadError(response) {
      // Called when server error is received, receives the response body, useful to select the relevant error data
      if (response) {
        this.$message.error({
          title: 'Error',
          message: `${$t('Upload hình không thành công vui lòng thử lại sau.')}`
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .filepond--wrapper {
	.filepond {
		&--root {
			margin-bottom: 0;
			//height: auto !important;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			font-size: 14px;

			* {
				transform: none !important;
			}
		}

		&--credits {
			display: none;
		}

		&--panel-root {
			background-color: #FFFFFF;
		}

		&--drop-label {
			min-height: 60px;
			position: relative;
			cursor: pointer;
			border: 2px dashed #c7cfd6;
			border-radius: 10px;
			width: 100%;
		}

		&--item {
			position: relative;
			margin: 0;
		}

		&--list-scroller {
			position: relative;
			margin-top: 5px;
			margin-bottom: 0;
			transform: none !important;
			width: 100%;
			max-height: 220px;
			overflow-y: auto;
			overflow-x: hidden;
		}

		&--list {
			position: relative;
			left: unset;
			right: unset;
			display: flex;
			flex-wrap: wrap;

			.filepond--item[data-filepond-item-state="processing-error"] {
				.filepond--file-status {
					margin-right: 4.5em;
				}
				.filepond--action-retry-item-processing {
					right: 2.7em;
				}
			}
		}

		&--item {
			width: 100%;
			flex: 1;
			max-height: 70px;
			display: flex;
			flex-wrap: wrap;
			margin-top: 10px
		}

		&--item-panel {
			border-radius: 10px !important;
		}

		&--file {
			border-radius: 10px !important;
		}

		&--file-wrapper {
			flex: 1;
			background-color: #eef0f8;
			border-radius: 10px;
		}

		&--panel {
			position: relative;
			flex: 1;
			display: none;
		}

		&--file-info {
			padding-left: 70px;
			color: #3F4254;
			.filepond--download-icon, .filepond--magnify-icon {
				background-color: #3F4254;
			}

			.filepond--file-info-sub {
				color: #3F4254;
				opacity: 1;
			}
		}

		&--file-status {
			color: #3F4254;
		}

		&--image-preview-wrapper {
			height: 70px;
			width: 70px;
		}
	}
}
</style>

