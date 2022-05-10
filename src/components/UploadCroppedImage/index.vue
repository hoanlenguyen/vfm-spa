<template>
  <div
    class="upload-cropper"
    :class="[`theme--${theme}`]"
  >
    <div
      class="wrapperPopupUpload"
    >
      <div
        class="popupUpload"
        :style="{
          paddingBottom: `${ isRounded || theme === 'emilus' ? 100 : (previewRatio.height / previewRatio.width) * 100 }%`,
        }"
      >
        <div
          v-if="imageUrl"
        >
          <img
            class="imageUpload"
            :class="[
              { 'rounded': isRounded },
              !isShowCropper ? 'contain ':'cover'
            ]"
            :src="imageUrl"
          >
          <div
            class="imageUploadOverlay"
            @click="showPopup"
          />
          <div
            class="btnRemove"
            title="Xóa ảnh"
            @click="handleRemove"
          >
            <svg
              aria-hidden="true"
              fill="currentColor"
              focusable="false"
              height="24px"
              preserveAspectRatio="xMidYMid meet"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              viewBox="0 0 32 32"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z" />
            </svg>
          </div>
        </div>
        <div
          v-else
          class="blockIcon"
          :class="[{ rounded: isRounded }]"
          @click.prevent="showPopup"
        >
          <svg
            v-if="theme === 'default'"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1175 10.8924C23.6029 10.8924 24 10.4953 24 10.0099V4.04297C24 1.81703 22.1859 0.00292969 19.9502 0.00292969H4.04985C1.819 0.00292969 0 1.81703 0 4.04297V19.958C0 22.1839 1.819 23.998 4.04985 23.998H19.9452C22.1761 23.998 23.9951 22.1839 23.9951 19.958V15.9081C23.9951 15.8934 23.9951 15.8787 23.9951 15.8591C24 15.6287 23.9117 15.3982 23.7352 15.2217L17.989 9.48036C17.8223 9.31365 17.5967 9.2205 17.3663 9.2205C17.131 9.2205 16.9054 9.31365 16.7436 9.48036L10.1736 16.0503L6.63371 12.5104C6.2905 12.1672 5.73156 12.1672 5.38345 12.5104L1.76997 16.1239V4.04297C1.76997 2.78781 2.79469 1.768 4.05475 1.768H19.9502C21.2102 1.768 22.2349 2.78781 22.2349 4.04297V10.0099C22.2349 10.4953 22.6321 10.8924 23.1175 10.8924ZM6.00613 14.3784L9.54607 17.9184C9.71767 18.09 9.94321 18.1782 10.1687 18.1782C10.3943 18.1782 10.6198 18.09 10.7914 17.9184L17.3614 11.3484L22.2251 16.2121V19.9531C22.2251 21.2082 21.2004 22.2281 19.9403 22.2281H4.04985C2.78979 22.2281 1.76507 21.2082 1.76507 19.9531V18.6195L6.00613 14.3784Z"
              fill="#888888"
            />
          </svg>
          <div
            v-if="theme === 'emilus'"
          >
            <svg
              fill="currentColor"
              focusable="false"
              height="24px"
              viewBox="64 64 896 896"
              width="24px"
            >
              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide">
      <div
        v-if="isShowPopup"
        class="customPopup"
        :class="{ show: isShowPopup }"
      >
        <div
          class="overlayPopup"
          @click="hidePopup"
        />
        <div class="popupContent">
          <div v-if="!avatarUrl" class="popupHeader">
            <div class="blockHeader">
              <div
                class="btnClose btnHover"
                @click.prevent="hidePopup"
              >
                <svg
                  class="img"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    class="nc-icon-wrapper"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    stroke-width="2"
                  >
                    <g class="nc-interact_menu-close-2-o-32">
                      <path
                        d="M2 6h28"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        transform="translate(0 10.00) rotate(45.00 16 6)"
                      />
                      <path
                        d="M2 16h28"
                        data-color="color-2"
                        fill="currentColor"
                        opacity="0"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M2 26h28"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        transform="translate(0 -10) rotate(-45 16 26)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="popupBody">
            <div
              class="uploadBox"
            >
              <div
                class="wrapperInputUpload"
                :class="[avatarUrl ? 'hasImage' : 'noImage']"
              >
                <div
                  v-if="!avatarUrl"
                  class="wrapper"
                  @click="handleUploadAvatar"
                >
                  <input
                    ref="fileUpload"
                    class="fileUpload"
                    :accept="acceptType"
                    type="file"
                    @change="uploadImage($event)"
                  >
                  <img height="130" src="@/assets/uploadImage.svg" width="130">
                  <p class="txtUploadImage">Nhấn vào để tải hình lên</p>
                  <p class="txtUpload btnHover">Tải hình lên</p>
                  <p v-if="!isRounded" class="txtSize">(<span>Kích thước hình: {{ `${previewRatio.width} x ${previewRatio.height}` }} và </span><span>{{ `tối đa ${sizeLimit}MB` }})</span>
                  </p>
                  <p v-else class="txtSizeSmall">{{ $t(`(Tối đa ${sizeLimit}MB)`) }}</p>
                  <p v-if="acceptType" class="txtTypeSupport">{{ `Hỗ trợ định dạng ${acceptType.replaceAll('.', ' ').toUpperCase()}` }}</p>
                </div>
                <div v-else>
                  <p v-if="!isRounded" class="txtSizeImage">Kích thước hình: {{ `${previewRatio.width} x ${previewRatio.height}` }}</p>
                  <div
                    class="btnClose btnHover hidePopup"
                    @click.prevent="hidePopup"
                  >
                    <svg
                      class="img tw-fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        class="nc-icon-wrapper"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="square"
                        stroke-linejoin="miter"
                        stroke-width="2"
                      >
                        <g class="nc-interact_menu-close-2-o-32">
                          <path
                            d="M2 6h28"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-miterlimit="10"
                            transform="translate(0 10.00) rotate(45.00 16 6)"
                          />
                          <path
                            d="M2 16h28"
                            data-color="color-2"
                            fill="currentColor"
                            opacity="0"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M2 26h28"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-miterlimit="10"
                            transform="translate(0 -10) rotate(-45 16 26)"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <cropper
                    v-if="isShowCropper"
                    ref="cropper"
                    class="upload-example-cropper"
                    :class="[{ isRounded }]"
                    :src="avatarUrl"
                    :stencil-component="isRounded ? 'circle-stencil' : 'rectangle-stencil'"
                    :stencil-props="stencilDefault"
                    image-restriction="stencil"
                    lines-classnames="line"
                    @change="onChange"
                    @ready="onReady"
                  />
                  <div
                    v-else
                    class="upload-example-cropper wrapperImage"
                  >
                    <div
                      class="blockImage"
                    >
                      <img :src="avatarUrl">
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="avatarUrl"
                class="blockHandleUpload"
              >
                <div
                  class="btnHover btnUploadImage"
                  :style="{ color: colorMain ,borderColor: colorMain}"
                  @click="handleUploadAvatar"
                >
                  <input
                    ref="fileUpload"
                    class="fileUpload"
                    :accept="acceptType"
                    type="file"
                    @change="uploadImage($event)"
                  >
                  <svg :fill="colorMain" height="22" t="1607511550137" version="1.1" viewBox="0 0 1024 1024" width="22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                      d="M1022.955204 556.24776c0 100.19191-81.516572 181.698249-181.718715 181.698249l-185.637977 0c-11.2973 0-20.466124-9.168824-20.466124-20.466124 0-11.307533 9.168824-20.466124 20.466124-20.466124l185.637977 0c77.628008 0 140.786467-63.148226 140.786467-140.766001 0-77.423347-62.841234-140.448776-140.203182-140.766001-0.419556 0.030699-0.828878 0.051165-1.248434 0.061398-5.935176 0.153496-11.665691-2.302439-15.666818-6.702656-4.001127-4.41045-5.884011-10.345626-5.157463-16.250102 1.330298-10.806113 1.944282-19.760043 1.944282-28.192086 0-60.763922-23.658839-117.874641-66.617234-160.833035-42.968627-42.958394-100.089579-66.617234-160.843268-66.617234-47.368844 0-92.742241 14.449084-131.208321 41.781592-37.616736 26.738991-65.952084 63.700811-81.925894 106.884332-2.425236 6.54916-8.012488 11.399631-14.827707 12.893658-6.815219 1.483794-13.927197-0.603751-18.859533-5.536087-19.289322-19.340487-44.943608-29.982872-72.245418-29.982872-56.322773 0-102.146425 45.813419-102.146425 102.125959 0 0.317225 0.040932 0.982374 0.092098 1.627057 0.061398 0.920976 0.122797 1.831718 0.153496 2.762927 0.337691 9.465582-5.863545 17.928325-15.001669 20.455891-32.356942 8.943696-61.541635 28.550243-82.181721 55.217602-21.305235 27.516704-32.571836 60.508096-32.571836 95.41307 0 86.244246 70.188572 156.422585 156.443052 156.422585l169.981393 0c11.2973 0 20.466124 9.15859 20.466124 20.466124 0 11.2973-9.168824 20.466124-20.466124 20.466124l-169.981393 0c-108.828614 0-197.3753-88.536452-197.3753-197.354833 0-44.053332 14.223956-85.712127 41.126676-120.473839 22.809495-29.450752 53.897537-52.086285 88.710414-64.816215 5.065366-74.322729 67.149353-133.2447 142.751215-133.2447 28.386514 0 55.504128 8.217149 78.651314 23.52581 19.657712-39.868009 48.842405-74.169233 85.497233-100.212376 45.434795-32.295544 99.004875-49.354058 154.918325-49.354058 71.692832 0 139.087778 27.915793 189.782368 78.600149 50.694589 50.694589 78.610382 118.089535 78.610382 189.782368 0 3.704368-0.102331 7.470135-0.296759 11.368932C952.633602 386.245901 1022.955204 463.188294 1022.955204 556.24776z"
                    />
                    <path d="M629.258611 589.106122c-3.990894 3.990894-9.230222 5.996574-14.46955 5.996574s-10.478655-2.00568-14.46955-5.996574l-67.087954-67.077721 0 358.689289c0 11.307533-9.15859 20.466124-20.466124 20.466124-11.307533 0-20.466124-9.15859-20.466124-20.466124l0-358.689289-67.087954 67.077721c-7.992021 7.992021-20.947078 7.992021-28.939099 0s-7.992021-20.957311 0-28.949332l102.023628-102.013395c7.992021-7.992021 20.947078-7.992021 28.939099 0l102.023628 102.013395C637.250632 568.148811 637.250632 581.114101 629.258611 589.106122z" />
                  </svg>
                  Thay hình
                </div>
                <button
                  v-if="avatarUrl"
                  class="btnSubmit btnHover"
                  :class="[
                    { btnDisable: isDisableUpload || !avatarUrl },
                    { 'isLoading': isDisableUpload }
                  ]"
                  :disabled="isDisableUpload || !avatarUrl"
                  :loading="isDisableUpload"
                  :style="{
                    borderColor: colorMain,
                    backgroundColor: colorMain,
                    color: colorText,
                  }"
                  @click.prevent="submit"
                >
                  <div v-show="isDisableUpload" class="btnSubmitLoading">
                    <i class="el-icon-loading" />
                  </div>
                  <div class="btnSubmitContent">
                    <svg
                      :fill="colorText"
                      height="16"
                      t="1607511792139"
                      version="1.1"
                      viewBox="0 0 1024 1024"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M928 896V314.24c0-8.32-3.488-16.64-9.6-22.72l-187.84-186.24a31.36 31.36 0 0 0-22.4-9.28H672v160c0 52.8-43.2 96-96 96H256c-52.8 0-96-43.2-96-96V96H128c-17.6 0-32 14.4-32 32v768c0 17.6 14.4 32 32 32h64v-288c0-52.8 43.2-96 96-96h448c52.8 0 96 43.2 96 96v288h64c17.632 0 32-14.4 32-32z m-160 32v-288c0-17.6-14.368-32-32-32H288c-17.6 0-32 14.4-32 32v288h512zM224 96v160c0 17.6 14.4 32 32 32h320c17.632 0 32-14.4 32-32V96H224z m739.52 150.08c18.272 17.92 28.48 42.88 28.48 68.16V896c0 52.8-43.2 96-96 96H128c-52.8 0-96-43.2-96-96V128c0-52.8 43.2-96 96-96h580.16c25.632 0 49.632 9.92 67.52 27.84l187.84 186.24zM512 256a32 32 0 0 1-32-32V160a32 32 0 0 1 64 0v64a32 32 0 0 1-32 32z" />
                    </svg>
                    <span>Cập nhật</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { UploadFile } from '@/api/imageUpload'
const lstMimeTypeSupportCropper = ['.jpg', '.jpeg', '.png']
export default {
  name: 'UploadCroppedImage',
  props: {
    uploadAvatarFunction: {
      type: Function,
      default: UploadFile
    },
    fileFormDataName: {
      type: String,
      default: 'file'
    },
    acceptType: {
      type: String,
      default: '.jpg,.jpeg,.png,.svg'
    },
    sizeLimit: {
      type: Number,
      default: 5
    },
    value: {
      type: String,
      default: ''
    },
    previewRatio: {
      type: Object,
      default: function() {
        return { width: 256, height: 256 }
      }
    },
    isDisable: {
      type: Boolean,
      default: false
    },
    isRounded: {
      type: Boolean,
      default: false
    },
    isFixed: {
      type: Boolean,
      default: true
    },

    theme: {
      type: String,
      default: 'default'
    },
    colorMain: {
      type: String,
      default: '#1fb6fd'
    },
    colorText: {
      type: String,
      default: '#fff'
    },
    folderName:{
      type: String,
      default: 'DCVFM/Images'
    },
    uploadFileName:{
      type: String,
      default: null
    }
  },
  data() {
    return {
      isShowPopup: false,
      isLoading: false,
      avatarUrl: '',
      fileName: '',
      isImageNotValid: false,
      isEditAvatar: false,
      blobSize: null,
      isDisableUpload: false,
      isShowCropper: false,
      inputFile: null,
      stencilDefault: {
        handlers: {},
        movable: false,
        scalable: false,
        aspectRatio: 1,
        previewClassname: 'preview'
      },
    }
  },
  computed: {
    imageUrl() {
      if (this.value) {
        return this.getImageUrl(this.value.replace(/\\/g, '/'))
      }
      return ''
    }
  },
  watch: {
    value: function(v) {
      this.isShowCropper = this.checkMimeTypeSupportCropper(v)
    }
  },
  created() {
    this.isShowCropper = this.checkMimeTypeSupportCropper(this.value)
  },
  beforeDestroy() {
    this.hidePopup()
  },
  methods: {
    showPopup() {
      this.avatarUrl = this.imageUrl
      this.fileName = this.imageUrl
      this.isShowCropper = this.checkMimeTypeSupportCropper(this.value)
      if (!this.isShowCropper && process.client) {
        const mimeType = this.value.split('.').pop()
        const outputFormat = 'image/' + (mimeType == 'svg' ? 'svg+xml' : mimeType)
        const me = this
        const xhr = new XMLHttpRequest()
        xhr.open('GET', this.imageUrl, true)
        xhr.responseType = 'arraybuffer'
        xhr.onload = function(e) {
          const arrayBufferView = new Uint8Array(this.response)
          const blob = new Blob([arrayBufferView], { type: outputFormat })
          const file = new File([blob], me.value, { type: blob.type })
          me.inputFile = file
        }
        xhr.send()
      }
      if (this.isDisable) return
      this.isShowPopup = true
    },
    hidePopup() {
      this.avatarUrl = ''
      this.isImageNotValid = false
      this.isEditAvatar = false
      this.blobSize = null
      this.isDisableUpload = false
      this.isShowPopup = false
      this.inputFile = null
    },
    onReady() {
      if (this.isShowCropper) this.setStencilProp()
    },
    setStencilProp() {
      if (!this.isFixed) {
        this.stencilDefault.movable = true
        this.stencilDefault.scalable = true
      }
      if (this.isRounded) {
        this.stencilDefault.aspectRatio = 1
        this.$refs.cropper.setCoordinates((coordinates, imageSize) => {
          const widthImage = imageSize.width
          const heightImage = imageSize.height
          let diameter = widthImage
          let top = 0
          let left = 0
          if (widthImage > heightImage) {
            diameter = heightImage
            left = (widthImage - diameter) / 2
          } else if (heightImage > widthImage) {
            top = (heightImage - diameter) / 2
          }

          return {
            width: diameter,
            height: diameter,
            top: top,
            left: left
          }
        })
      } else {
        const { width, height } = this.previewRatio
        const ratio = width / height
        this.stencilDefault.aspectRatio = ratio
        this.$refs.cropper.setCoordinates((coordinates, imageSize) => {
          const widthImage = imageSize.width
          const heightImage = imageSize.height
          let newWidth = 0
          let newHeight = 0
          let top = 0
          let left = 0
          newWidth = (heightImage * width) / height
          newHeight = (height * widthImage) / width
          if (heightImage > widthImage) {
            top = (heightImage - newHeight) / 2
          }

          if (newWidth !== widthImage) {
            left = (widthImage - newWidth) / 2
          }
          return {
            width: newWidth,
            height: newHeight,
            top: top,
            left: left
          }
        })
      }
      this.$refs.cropper.refresh()
    },
    onChange() {
    },
    checkMimeTypeSupportCropper(name) {
      if (!name) return true
      const mimeType = name.split('.').pop()
      return lstMimeTypeSupportCropper.includes(`.${mimeType.toLowerCase()}`)
    },
    checkMimeType(name) {
      if (!this.acceptType || !name) return true
      const arrMimeTypes = this.acceptType.toLowerCase().split(',')
      if (arrMimeTypes) {
        const mimeType = name.split('.').pop()
        return arrMimeTypes.includes(`.${mimeType.toLowerCase()}`)
      }
      return true
    },
    uploadImage(event) {
      this.isLoading = true
      const input = event.target
      this.isImageNotValid = false
      const isValidMimeType = this.checkMimeType(input.files[0].name)
      if (!isValidMimeType) {
        const strMimeTypes = this.acceptType.replaceAll('.', ' ')
        this.$message.error({
          title: 'Error',
          message: `Chỉ chấp nhận các định dạng ${
            strMimeTypes ? strMimeTypes.toUpperCase() : ''
          }`
        })
        return
      }

      if (input.files[0].size > this.sizeLimit * 1024 * 1024) {
        this.isImageNotValid = true
        this.isLoading = false
        this.$message.error({
          title: 'Error',
          message: `Ảnh tải lên cần dưới ${this.sizeLimit}MB*`
        })

        return
      }
      this.inputFile = input.files[0]
      this.isShowCropper = this.checkMimeTypeSupportCropper(
        input.files[0].name
      )

      if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.avatarUrl = e.target.result
        }
        this.fileName = input.files[0].name
        reader.readAsDataURL(input.files[0])
      }

      this.isLoading = false
    },
    handleUploadAvatar() {
      this.isEditAvatar = true
      this.$refs.fileUpload.click()
    },
    submit() {
      const me = this
      this.isImageNotValid = false
      if (this.isShowCropper) {
        const { coordinates, canvas } = this.$refs.cropper.getResult()
        if (canvas) {           
          canvas.toBlob((blob) => {
            me.blobSize = (blob.size / (1024 * 1024)).toFixed(2)
            if (me.blobSize > me.sizeLimit) {
              me.isImageNotValid = true
              return
            }

            const data = new FormData()
            const file = new File([blob], me.fileName, { type: blob.type })
            data.append(me.fileFormDataName, file)
            me.updateLoadFileToApI(data)
          }, `image/${me.fileName.split('.').pop()}`)
        }
      } else {
        const data = new FormData()
        data.append(this.fileFormDataName, this.inputFile)
        me.updateLoadFileToApI(data)
      }
    },
    updateLoadFileToApI(data) {
      this.isDisableUpload = true
      const parts =  this.fileName.split(".");
      var ext = parts[parts.length - 1];
      if(this.uploadFileName) {
        const newParts =  this.uploadFileName.split(".");
        var newExt = newParts[newParts.length - 1];
        if(!newExt) newExt= ext;
        this.fileName= newParts[0]+'_'+ this.getTimestamp()+'.'+newExt;
      }else{
        this.fileName= parts[0].trim()+'_'+ this.getTimestamp()+'.'+ext;
      }
      this.uploadAvatarFunction(data, this.folderName,this.fileName)
        .then((response) => {
          if (response.data.result) {   
            let result = `${this.folderName}/${response.data.result}`
            this.$emit('input', result)
            this.hidePopup()
          } else {
            this.$message.error({
              title: 'Error',
              message: response.data.result.message
            })
          }
        })
        .catch((error) => {
          this.$message.error({
            title: 'Error',
            message: error.response.data.errors.message
          })
        })
        .finally(() => {
          this.isDisableUpload = false
        })
    },
    handleRemove() {
      this.$emit('remove')
    }
  }
}
</script>

<style lang="scss">
.rounded {
	border-radius: 9999px !important;
}

.contain {
	object-fit: contain;
}

.cover {
	object-fit: cover;
}

.upload-cropper {
	&.theme--emilus {
		.blockIcon {
			color: #455560;
		}
	}
}

.wrapperPopupUpload {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	.popupUpload {
		position: relative;
		width: 100%;
		cursor: pointer;

		.imageUpload {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 1px dashed #8e8e90;
		}

		&:hover {
			.imageUploadOverlay, .btnRemove {
				opacity: 1;
			}
		}

		.imageUploadOverlay {
			position: absolute;
			inset: 0;
			z-index: 50;
			background-color: rgba(0, 0, 0, .5);
			opacity: 0;
			transition: opacity 200ms linear;
		}

		.blockIcon {
			position: absolute;
			top: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			border: 1px dashed #8e8e90;
		}

		.btnRemove {
			position: absolute;
			top: 0;
			right: 0;
			cursor: pointer;
			z-index: 60;
			margin-right: 7px;
			margin-top: 5px;
			color: #ededed;
			opacity: 0;

			&:hover {
				color: #ffffff;
			}
		}
	}
}

.customPopup {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1050;
	display: none;
	overflow: hidden;
	outline: 0;

	&.show {
		display: block;
	}

	.overlayPopup {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1040;
		background-color: #000;
		opacity: 0.5;
	}

	.popupContent {
		color: #fff;
		max-width: 600px;
		min-width: 600px;
		position: absolute;
		top: 50% !important;
		left: 50% !important;
		pointer-events: initial;
		transform: translate(-50%, -50%) !important;
		-webkit-transform: translate(-50%, -50%) !important;
		-moz-transform: translate(-50%, -50%) !important;
		-o-transform: translate(-50%, -50%) !important;
		-ms-transform: translate(-50%, -50%) !important;
		z-index: 1060;
		box-shadow: 0 1pt 12pt rgba(0, 0, 0, 0.15);
		background: #fff;
		border-radius: 16px;

		.popupHeader {
			padding: 10px 15px 15px;

			.blockHeader {
				display: flex;
				justify-content: flex-end;
				align-items: center;

				.btnClose {
					display: flex;
					background-color: #A8A8A9;
					color: #FFF;
					align-items: center;
					justify-content: center;
				}

				.img {
					fill: currentColor;
				}
			}
		}

		.popupBody .uploadBox {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.hasImage {
				background-color: black;
				padding-top: 40px;
				padding-bottom: 15px;
				border-top-left-radius: 16px;
				border-top-right-radius: 16px;
			}

			.noImage {
				padding: 32px;
				padding-top: 0;
			}

			.wrapperInputUpload {
				width: 100%;

				.wrapper {
					text-align: center;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					align-items: center;
					margin: auto;
					border: 2px dashed #459EFC;
					background-color: #F3F8FE;
					border-radius: 8px;
					padding: 20px;
					cursor: pointer;

					.txtUploadImage {
						font-size: 16px;
						margin-top: 8px;
						margin-bottom: 14px;
						color: #459EFC;
					}

					.txtUpload {
						min-width: 224px;
						margin-top: 0;
						padding: 14px 0;
						text-align: center;
						color: #FFF;
						border-radius: 4px;
						background-color: #459EFC;
						margin-bottom: 0;
					}

					.txtSize {
						font-size: 13px;
						color: #459EFC;
						margin-bottom: 0;
						margin-top: 10px;
					}

					.txtSizeSmall {
						font-size: 13px;
						color: #90cdf4;
						margin-bottom: 0;
						margin-top: 8px;
					}

					.txtTypeSupport {
						font-size: 13px;
						margin-top: 20px;
						padding: 12px 24px;
						color: #3F4254;
						border-radius: 4px;
						background-color: #E0EAF8;
					}
				}

				.txtSizeImage {
					position: absolute;
					z-index: 1060;
					color: #FFF;
					left: 12px;
					top: 0;
					margin-bottom: 0;
					padding: 10px;
				}

				.hidePopup {
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					top: 16px;
					right: 16px;
					z-index: 1;
				}
			}

			.blockHandleUpload {
				margin: 12px 0;
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding-left: 16px;
				padding-right: 16px;

				.btnUploadImage {
					display: flex;
					align-items: center;
					padding: 0 12px;
					border-radius: 4px;
					border: 1px solid;
					font-size: 14px;
					cursor: pointer;

					&:hover {
						background-color: rgba(0, 0, 0, 0.75);
					}

					svg {
						margin-right: 4px;
						fill: #1fb6fd;
					}
				}

			}

			.btnSubmit {
				position: relative;
				height: 40px;
				padding-left: 40px;
				padding-right: 40px;
				outline: none;
				font-size: 14px;
				font-weight: normal;
				border-radius: 4px;
				display: flex;
				align-items: center;

				&Content {
					display: flex;
					align-items: center;
				}

				&.isLoading {
					.btnSubmitContent {
						opacity: 0;
					}
				}

				&Loading {
					position: absolute;
					inset: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: rgba(255, 255, 255, 0.35);

					.el-icon-loading {
						font-size: 20px;
					}
				}

				svg {
					margin-right: 4px;
				}
			}
		}

		.btnClose {
			position: relative;
			width: 30px;
			height: 30px;
			border: 1px solid #fff;
			border-radius: 50%;
			background: transparent;
			cursor: pointer;

			.img {
				width: 20px;
				margin: auto;
			}
		}
	}
}

.fileUpload {
	display: none;
}

.btnSubmit {
	text-align: center;
	border-radius: 3px;
	cursor: pointer;
	background-color: #00b6ff;
	padding: 15px 85px;
	font-weight: bold;
	color: #fff;
	border: transparent;

	&.btnDisable {
		cursor: not-allowed;
	}
}

.slide-enter-active {
	transition: all 0.3s ease;
}

.btnHover {
	position: relative;
	overflow: hidden;

	&:hover {
		&:after {
			left: 120%;
			opacity: 0.5;
			z-index: 100;
			transition: all 0.6s ease;
		}
	}

	&::after {
		background: #fff;
		content: "";
		height: 155px;
		left: -75px;
		opacity: 0;
		position: absolute;
		top: -50px;
		transform: rotate(35deg);
		width: 50px;
		z-index: -10;
	}
}

.slide-leave-active {
	transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
	transform: translateX(10px);
	opacity: 0;
}

.upload-example-cropper {
	border: solid 1px transparent;
	height: 300px;
	min-height: 300px;
	width: 100%;
	border-radius: 10px;

	.vue-advanced-cropper__background {
		background-color: #000;
	}

	.vue-advanced-cropper__area {
		&:hover {
			cursor: all-scroll;
		}
	}

	.vue-advanced-cropper__cropper-wrapper {
		&:hover {
			cursor: all-scroll;
		}
	}

	.vue-advanced-cropper__image {
		opacity: 0.5;
	}

	.vue-line-wrapper {
		.vue-simple-line {
			border-style: solid;
			border-color: #fff;
		}
	}

	&.isRounded {
		.vue-preview-result {
			border: 2px solid #fff;
		}

		.vue-line-wrapper {
			.vue-simple-line {
				border: none;
			}
		}
	}

	&.wrapperImage {
		overflow: hidden;
		height: auto;
		display: flex;
		align-items: center;
    max-width: 300px;
    margin: auto;
    border-radius: 0;

		.blockImage {
			width: 100%;
			height: auto;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				object-fit: contain;
				object-position: center;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: 576px) {
	.popupContent {
		max-width: 100% !important;
		min-width: 100% !important;
	}
}
</style>
