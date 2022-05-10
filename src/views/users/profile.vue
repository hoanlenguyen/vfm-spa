<template>
  <div class="app-container dialogFullscreen__content">
    <el-form ref="model" :model="model" label-position="top">
      <div class="section-title">{{ $t("Thông tin chung") }}</div>
      <el-row :gutter="30" type="flex">
        <el-col :md="4" :sm="24">
          <UploadCroppedImage
            ref="uploadAvatar"
            v-model="model.avatarUrl"
            :is-rounded="true"
            :preview-ratio="{ width: 400, height: 400 }"
            :size-limit="5"
            @remove="model.avatarUrl = null"
          />
        </el-col>
        <el-col :md="20" :sm="24">
          <el-row id="general" :gutter="16">
            <!-- <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Họ và tên đệm')"
                :rules="[
                  {
                    required: true,
                    message: $t('Vui lòng nhập họ và tên đệm'),
                    trigger: 'blur'
                  }
                ]"
                prop="surname"
              >
                <el-input v-model="model.surname" clearable />
              </el-form-item>
            </el-col> -->
            <el-col :md="8" :sm="24">
              <el-form-item
                :label="$t('Họ tên')"
                :rules="[
                  {
                    required: true,
                    message: $t('Vui lòng nhập họ tên'),
                    trigger: 'blur',
                  },
                ]"
                prop="fullName"
              >
                <el-input v-model="model.fullName" clearable />
              </el-form-item>
            </el-col>

            <el-col :md="6" :sm="24">
              <el-form-item :label="$t('Số điện thoại')" prop="phoneNumber">
                <el-input v-model="model.phoneNumber" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Địa chỉ email')"
                :rules="[
                  {
                    required: true,
                    message: $t('Vui lòng nhập địa chỉ email'),
                    trigger: 'blur',
                  },
                ]"
                prop="emailAddress"
              >
                <el-input disabled v-model="model.emailAddress" clearable />
              </el-form-item>
            </el-col>
            <!-- <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Ngày sinh')"
                prop="dateOfBirth"
              >
                <el-date-picker
                  v-model="model.dateOfBirth"
                  class="w-100"
                  :picker-options="pickerOptions"
                  format="yyyy/MM/dd"
                  type="date"
                />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item :label="$t('Giới tính')" prop="gender">
                <el-select
                  v-model="model.gender"
                  class="filter-item w-100"
                  :placeholder="$t('Chọn giới tính')"
                  clearable
                  filterable
                >
                  <el-option
                    v-for="item in genderTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" :sm="24">
              <el-form-item :label="$t('Địa chỉ')" prop="address">
                <el-input v-model="model.address" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="24" :sm="24">
              <el-form-item :label="$t('Tóm tắt')" prop="summary">
                <el-input
                  v-model="model.summary"
                  :rows="3"
                  clearable
                  type="textarea"
                />
              </el-form-item>
            </el-col> -->
          </el-row>
          <el-button type="primary" @click="updateCurrentProfile"
            >{{ $t("Lưu lại") }}
          </el-button>
        </el-col>
      </el-row>
    </el-form>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { getCurrentProfile, updateCurrentProfile } from "@/api/profile";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import pageLoading from "@/components/Loading/pageLoading";
import { GenderTypes } from "@/utils/enums";

export default {
  components: { UploadCroppedImage, pageLoading },
  props: [],
  data: () => ({
    model: {},
    isLoading: false,
    genderTypes: GenderTypes,
    pickerOptions: {
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
    },
  }),
  computed: {},
  watch: {},
  mounted() {
    this.getCurrentProfile();
  },
  methods: {
    getCurrentProfile() {
      this.isLoading = true;
      getCurrentProfile()
        .then((response) => {
          if (response.data.result) {
            this.model = response.data.result;
            this.isLoading = false;
          }
        })
        .catch((error) => {
          if (error.response) {
            this.$message({
              type: "error",
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true,
            });
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    updateCurrentProfile() {
      this.$refs["model"].validate((valid) => {
        if (valid) {
          this.isLoading = true;
          updateCurrentProfile(this.model)
            .then((response) => {
              if (response.data.success) {
                this.$message({
                  type: "success",
                  message: this.$t("Lưu thông tin thành công"),
                  showClose: true,
                });
              }
            })
            .catch((error) => {
              if (error.response) {
                this.$message({
                  type: "error",
                  message: this.$t(`Lỗi: ${error.response.data.error.message}`),
                  showClose: true,
                });
              }
            })
            .finally(() => {
              this.isLoading = false;
            });
        } else {
          this.$message.error({
            title: "Alert",
            message: this.$t("Bạn chưa nhập đủ thông tin"),
            showClose: false,
          });
        }
      });
    },
  },
};
</script>
