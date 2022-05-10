<template>
  <div class="upload-container">
    <div v-if="uploadAvatar=='uploadAvatar'" class="uploadAvatar">
      <el-upload
        v-loading="fileIsUploading"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleImageSuccess"
        class="image-uploader"
        drag
        action
        :http-request="uploadFile"
        accept=".jpg, .jpeg, .png"
      >
        <i class="el-icon-upload2" />
        <div class="image-preview image-app-preview">
          <div v-loading="fileIsUploading" class="image-preview-wrapper">
            <div
              class="image-1-1 img-background borderRadius"
              :style="{ backgroundImage: `url(${imageUrl})` }"
            />
            <div class="image-preview-action">
              <div style="float:right" class="mt-2 mr-2">
                <i title="Upload" class="el-icon-camera" @click="rmImage" />
              </div>
            </div>
          </div>
        </div>
      </el-upload>
    </div>
    <div v-else class="uploadImg">
      <div v-show="isHasValue" class="image-preview image-app-preview">
        <div v-loading="fileIsUploading" class="image-preview-wrapper">
          <div
            class="image-1-1 img-background borderRadius"
            :style="{ backgroundImage: `url(${imageUrl})` }"
          />
          <div class="image-preview-action">
            <div style="float:right" class="mt-2 mr-2">
              <el-button class="btn-icon btn-light" plain size="mini" type="danger">
                <i title="Delete" class="el-icon-delete" @click="rmImage" />
              </el-button>
            </div>
          </div>
        </div>
      </div>
      <el-upload
        v-loading="fileIsUploading"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleImageSuccess"
        class="image-uploader"
        drag
        action
        :http-request="uploadFile"
        accept=".jpg, .jpeg, .png"
      >
        <i class="el-icon-upload2" />
        <div class="el-upload__text">
          Drop files here or
          <em class="word-break">click</em>
          <br />to upload
        </div>
        <small v-if="size">
          <span v-if="size.width">
            Width:
            <span style="color:red">{{size.width}}px</span>,
          </span>
          <span v-if="size.height">
            Height:
            <span style="color:red">{{size.height}}px</span>
          </span>
        </small>
      </el-upload>
    </div>
  </div>
</template>

<script>
//import { uploadItem } from "@/api/imageUpload";
export default {
  name: "SingleImage",
  props: ["value", "uploadAvatar", "size"],
  data() {
    return {
      tempUrl: "",
      dataObj: { token: "", key: "" },
      uploadurl: "",
      fileIsUploading: false,
    };
  },
  computed: {
    isHasValue() {
      return this.value;
    },
    imageUrl() {
      if (this.isHasValue) {
        return this.value;
      }
      return "";
    },
  },
  methods: {
    uploadFile(event) {
      this.fileIsUploading = true;
      this.emitInput(URL.createObjectURL(event.file));
      this.$emit("uploadSuccessfulEvent");
      this.fileIsUploading = false;

      // this.fileIsUploading = true;
      // const data = new FormData();
      // data.append("file", event.file);
      // uploadItem(data)
      //   .then(response => {
      //     if (response.data.result.fileName) {
      //       this.emitInput(response.data.result.fileName);
      //       this.$emit("uploadSuccessfulEvent");
      //     } else {
      //       this.$message({
      //         type: "error",
      //         message: response.data.result.message
      //       });
      //     }
      //     this.fileIsUploading = false;
      //   })
      //   .catch(error => {
      //       this.$message({
      //       type: "error",
      //       message: error.response.data.errors.message
      //     });
      //   })
      //   .finally(() => {
      //     this.fileIsUploading = false;
      //   });
    },
    rmImage() {
      this.emitInput(null);
    },
    emitInput(val) {
      this.$emit("input", val);
    },
    handleImageSuccess(file) {},
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";

.uploadAvatar {
  .image-preview {
    position: absolute !important;
    top: 0;
    left: 0;
    margin: 0;
  }
}
.upload-container {
  width: 100%;
  position: relative;
  @include clearfix;

  .uploadImg,
  .uploadAvatar {
    display: flex;
  }

  .img-background {
    background-size: contain;
    background-position: 50%;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
  }
  .image-preview {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #ccccd5;
    margin-right: 15px;
    margin-bottom: 20px;
    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      right: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.3s;
      cursor: pointer;

      
      .el-icon-camera {
        font-size: 2rem;
      }
    }
    &:hover {
          border: 0;
      .image-preview-action {
        opacity: 1;
      }
    }
  }
  .image-app-preview {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #ccccd5;
    border-radius: 0.4rem;
    margin-left: 0px;
    overflow: hidden;
    border-color: #1F84F4;

    .app-fake-conver {
      height: 44px;
      position: absolute;
      width: 100%;
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
  .el-upload-dragger {
    width: 200px;
    border-radius: 0.4rem;
  }
  .image-uploader {
    width: 200px;
    height: 200px;
  }
}
</style>
