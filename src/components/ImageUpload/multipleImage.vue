<template>
  <div class="upload-container">
    <el-upload
      multiple
      :show-file-list="false"
      class="image-uploader"
      drag
      action
      :http-request="uploadFile"
      v-loading="fileIsUploading"
      accept=".jpg, .jpeg, .png"
      :on-success="uploadSuccess"
      :on-change="onChangeUpload"
    >
      <i class="el-icon-upload"/>
      <div class="el-upload__text word-break">
        Kéo thả
        <em>hoặc nhấn chọn để upload</em>
      </div>
    </el-upload>
    <div v-if="imageUrls" class="w-100 mt-3">
      <draggable v-model="myList">
        <div class="image-preview image-app-preview" v-for="(item,index) in imageUrls" :key="index">
          <div class="image-preview-wrapper" v-loading="fileIsUploading">
            <div
              class="image-1-1 img-background borderRadius"
              :style="{ backgroundImage: 'url(\'' + item.path + '\')' }"
            ></div>
            <div class="image-preview-action">
              <div style="float:right" class="mt-2 mr-2">
              <el-button class="btn-icon btn-light" plain size="mini" type="danger">
                <i title="Delete" class="el-icon-delete" @click="rmImage" />
              </el-button>
            </div>
            </div>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
// import { getToken } from "@/api/qiniu";
import { uploadItem, getImageUrls } from "@/api/imageUpload";
import draggable from "vuedraggable";
import { uptime } from "os";
export default {
  name: "MultipleImage",
  components: {
    draggable
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      tempUrl: "",
      dataObj: { token: "", key: "" },
      uploadurl: "",
      imageUrls: [],
      fileIsUploading: false
    };
  },
  computed: {
    myList: {
      get() {
        return this.imageUrls;
      },
      set(value) {
        this.imageUrls = value;
        this.emitValue();
      }
    }
  },
  watch: {
    value: function(val) {
      this.getImageUrls(val);
    }
  },
  mounted() {
    this.getImageUrls(this.value);
  },
  methods: {
    getImageUrls(ids) {
      let me = this;
      this.fileIsUploading = true;
      getImageUrls(ids)
        .then(resp => {
          this.imageUrls = resp.data.result;
          this.fileIsUploading = false;
        })
        .catch(error => {
          me.fileIsUploading = false;
          me.$message({
            type: "error",
            message: error.response.data.errors.message
          });
        });
    },
    uploadFile(event) {
      let me = this;

      const data = new FormData();
      data.append("file", event.file);
      this.fileIsUploading = true;
      uploadItem(data)
        .then(response => {
          this.imageUrls.push(response.data.result);
          this.emitValue();
          this.fileIsUploading = false;
        })
        .catch(error => {
          me.fileIsUploading = false;
          me.$message({
            type: "error",
            message: error.response.data.errors.message
          });
        });
    },
    rmImage(index) {
      this.imageUrls.splice(index, 1);
      this.emitValue();
    },
    emitInput(val) {
      this.$emit("input", val);
    },
    emitValue() {
      const dataObj = this.imageUrls.map(p => p.id);
      this.emitInput(dataObj.join(","));
    },
    uploadSuccess(res, file, fileList) {
      // this.emitValue();
    },
    onChangeUpload(file, fileList) {
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.upload-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .image-uploader {
    width: 35%;
    float: left;
  }
  .image-preview {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
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

      .el-icon-delete {
        font-size: 28px;
      }
    }
    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
  .image-app-preview {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    float: left;
    margin-left: 0px;
    .app-fake-conver {
      height: 44px;
      position: absolute;
      width: 100%; // background: rgba(0, 0, 0, .1);
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
  .image-uploader {
    width: 200px;
    margin-right: 15px;
  }
}
.w-100 {
  width: 100%;
}
.borderRadius {
  border-radius: 6px;
}
</style>
