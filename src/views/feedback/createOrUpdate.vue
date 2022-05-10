<template>
  <div class="createItemContainer">
    <el-dialog
      v-cloak
      :close-on-click-modal="false"
      :show-close="false"
      :title="formTitle"
      :visible.sync="showDialog"
      custom-class="dialogFullscreen"
      fullscreen
      @before-close="showDialog=false"
    >
      <template #title>
        <div class="dialogFullscreen__title">
          <span class="el-dialog__title">{{ formTitle }}</span>
          <el-button @click="closeDialog">{{ $t('Hủy') }}</el-button>
          <!-- <el-button :loading="isSubmit" type="primary" @click="saveItem">{{ $t('Lưu lại') }}</el-button> -->
        </div>
      </template>
      <s-tabs
        class="dialogFullscreen__tabs"
        :active-tab="activeTab"
        :tabs="tabs"
      />
      <div class="dialogFullscreen__content">
        <el-form
          ref="model"
          :model="model"
          label-position="top"
        >
          <el-row id="general" :gutter="16">
            <div
              class="section-title"
            >{{ $t('Thông tin chung') }}
            </div>
            <el-col :span="24">
              <el-row :gutter="16">
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Họ và tên')"
                    prop="fullName"
                  >
                    <el-input
                      v-model="model.fullName"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Địa chỉ email')"
                    :rules="[{
                      required: true,
                      message: $t('Vui lòng nhập địa chỉ email'),
                      trigger: 'blur'
                    }]"
                    prop="email"
                  >
                    <el-input
                      v-model="model.email"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Số điện thoại')"
                    :rules="[{
                      required: true,
                      message: $t('Vui lòng nhập số điện thoại'),
                      trigger: ['blur']
                    }]"
                    prop="phoneNumber"
                  >
                    <el-input
                      v-model="model.phoneNumber"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Màn hình')"
                    prop="screenName"
                  >
                      <el-input
                      v-model="model.screenName"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-row :gutter="16">
                    <el-col :span="24">
                      <el-form-item
                        :label="$t('Nội dung')"
                        :rules="[{
                          required: true,
                          message: $t('Vui lòng nhập nội dung'),
                          trigger: ['blur']
                        }]"
                        prop="content"
                      >
                        <el-input
                          v-model="model.content"
                          :placeholder="$t('Nội dung')"
                          :rows="5"
                          type="textarea"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { createOrUpdate, getForEdit } from '@/api/contact'
import pageLoading from '@/components/Loading/pageLoading'
import UploadCroppedImage from '@/components/UploadCroppedImage'
import Tinymce from '@/components/Tinymce'
import {
  GenderTypes,
  ContactTypes
} from '@/utils/enums'

export default {
  components: { pageLoading, UploadCroppedImage, Tinymce },
  props: ['reloadData'],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    tabs: [
      {
        name: 'general',
        label: 'Tổng quan'
      }
    ],
    activeTab: 'general',
    genderTypes: GenderTypes,
    pickerOptions: {
      disabledDate(time) {
        return time.getTime() > Date.now()
      }
    },
    contactTypes: ContactTypes
  }),
  computed: {
    formTitle() {
      return this.$route.query.id
        ? 'Chi tiết liên hệ'
        : 'Tạo liên hệ'
    }
  },
  watch: {
    '$route.query.id': function(val) {
      if (typeof val !== 'undefined') {
        this.getDetail(val)
      }
    },
    showDialog: function(val) {
      if (!val) {
        this.closeDialog()
      }
    }
  },
  mounted() {
    if (typeof this.$route.query.id !== 'undefined') {
      this.getDetail(this.$route.query.id)
    }
  },
  methods: {
    getDetail(id) {
      this.isLoading = true
      getForEdit(id)
        .then((response) => {
          this.showDialog = true
          this.model = response.data.result
        })
        .catch((error) => {
          this.$message({
            type: 'error',
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    saveItem() {
      this.$refs['model'].validate((valid) => {
        if (valid) {
          this.createOrUpdate()
        } else {
          this.$message({
            type: 'error',
            message: this.$t('Bạn chưa nhập đủ thông tin'),
            showClose: true
          })
        }
      })
    },
    createOrUpdate() {
      this.isSubmit = true
      return createOrUpdate(this.model)
        .then((response) => {
          if (response.data.success) {
            this.$emit('reloadData')
            if (!this.model.id) {
              this.$message({
                type: 'success',
                message: this.$t('Tạo liên hệ thành công'),
                showClose: true
              })
            } else {
              this.$message({
                type: 'success',
                message: this.$t('Sửa liên hệ thành công'),
                showClose: true
              })
            }
            this.showDialog = false
          }
        })
        .catch((error) => {
          this.$message({
            type: 'error',
            message: this.$t(`Lỗi ${error.response.data.error.message}`),
            showClose: true
          })
        })
        .finally(() => {
          this.isSubmit = false
        })
    },
    closeDialog() {
      this.isTranslationValid = true
      this.$refs.model.clearValidate()
      this.model = {}
      this.$router.replace({})
      this.showDialog = false
    }
  }
}
</script>

