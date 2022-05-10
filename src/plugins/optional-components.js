import Vue from 'vue'
import { Cropper } from 'vue-advanced-cropper'
Vue.use(Cropper)

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import 'filepond-plugin-image-overlay/dist/filepond-plugin-image-overlay.min.css'
import 'filepond-plugin-get-file/dist/filepond-plugin-get-file.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageOverlay from 'filepond-plugin-image-overlay'
import FilePondPluginGetFile from 'filepond-plugin-get-file'
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginFileValidateSize, FilePondPluginImageOverlay)
const UploadFilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginGetFile)

Vue.component('file-pond', FilePond)
Vue.component('upload-file-pond', UploadFilePond)

import VueNumeric from 'vue-numeric'
Vue.use(VueNumeric)

import ElInputTag from 'el-input-tag'
Vue.use(ElInputTag)
