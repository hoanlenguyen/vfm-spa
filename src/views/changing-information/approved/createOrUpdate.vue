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
      @before-close="showDialog = false"
    >
      <template #title>
        <div class="dialogFullscreen__title">
          <span class="el-dialog__title"
            >{{ formTitle }} -
            {{ model.isNewFlowChangeInfo ? "Flow mới" : "Flow cũ" }}</span
          >
          <el-button @click="showDialog = false">{{ $t("Đóng") }}</el-button>
        </div>
      </template>
      <s-tabs
        :active-tab="activeTab"
        :tabs="tabs"
        class="dialogFullscreen__tabs"
      />
      <div class="dialogFullscreen__content">
        <el-form ref="model" :model="model" label-position="top">
          <el-row id="general" :gutter="16">
            <el-col :span="18">
              <el-row :gutter="16">
                <el-col :span="24">
                  <div class="section-title">
                    {{ $t("Danh sách thay đổi thông tin") }}
                  </div>
                  <el-row :gutter="16" class="mb-4 px-4">
                    <el-row
                      :gutter="16"
                      v-if="model.changingInformationList.length > 0"
                    >
                      <el-col :md="6" :sm="6"
                        ><h5 class="my-2">Nội dung thay đổi</h5></el-col
                      >
                      <el-col :md="6" :sm="6"
                        ><h5 class="my-2">Thông tin ban đầu</h5></el-col
                      >
                      <el-col :md="6" :sm="6"
                        ><h5 class="my-2">Thông tin thay đổi</h5></el-col
                      >
                    </el-row>
                    <div
                      v-for="(item, index) in model.changingInformationList"
                      :key="index"
                      class="list-complete-item"
                    >
                      <el-row :gutter="16">
                        <el-col :md="6" :sm="6"
                          ><p class="my-2">{{ item.name }}</p></el-col
                        >
                        <el-col :md="6" :sm="6">
                          <p class="my-2">
                            <span v-if="item.dataType == dataType.ImageUrl">
                              <el-image
                                :src="`${storageUrl}/${item.originalValue}`"
                                fit="contain"
                              >
                                <div slot="error" class="image-slot">
                                  <i class="el-icon-picture-outline"></i>
                                </div>
                              </el-image>
                            </span>
                            <span
                              v-else-if="
                                item.dataType == dataType.Url &&
                                item.originalValue
                              "
                            >
                              <a
                                v-for="(
                                  item, index
                                ) in item.originalValue.split(',')"
                                :key="index"
                                :href="`${storageUrl}/${item}`"
                                class="fileUrl pointer c-blue"
                                target="_blank"
                              >
                                {{ getFileName(item) }}
                              </a>
                            </span>
                            <span v-else>{{ item.originalValue }}</span>
                          </p>
                        </el-col>
                        <el-col :md="6" :sm="6">
                          <p class="my-2">
                            <span v-if="item.dataType == dataType.ImageUrl">
                              <el-image
                                :src="`${storageUrl}/${item.changedValue}`"
                                fit="contain"
                              >
                                <div slot="error" class="image-slot">
                                  <i class="el-icon-picture-outline"></i>
                                </div>
                              </el-image>
                            </span>
                            <span
                              v-else-if="
                                item.dataType == dataType.Url &&
                                item.changedValue
                              "
                            >
                              <a
                                v-for="(item, index) in item.changedValue.split(
                                  ','
                                )"
                                :key="index"
                                :href="`${storageUrl}/${item}`"
                                class="fileUrl pointer c-blue"
                                target="_blank"
                              >
                                {{ getFileName(item) }}
                              </a>
                            </span>
                            <span v-else>{{ item.changedValue }}</span>
                          </p>
                        </el-col>
                      </el-row>
                    </div>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-form-item
                :label="$t('Thời gian liên hệ khách hàng')"
                prop="contactTime"
                v-if="model.isUnlimitedLevel"
              >
                <el-select
                  v-model="model.contactTime"
                  class="filter-item w-100"
                  disabled
                >
                  <el-option
                    v-for="item in contactTimeLables"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item
                prop="changingInformationVideoCallUrl"
                v-if="model.isUnlimitedLevel"
              >
                <template #label>{{
                  $t("Video call xác nhận thay đổi thông tin")
                }}</template>
                <uploadFile
                  class="uploadFile"
                  :accept-type="'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/zip, application/x-rar-compressed, application/octet-stream, application/x-zip-compressed'"
                  :allow-multiple="false"
                  :allow-download-file="true"
                  :is-create-preview-file="false"
                  :max-file-size="500 * 1024 * 1024"
                  :src="model.changingInformationVideoCallUrl"
                  :process-timeout="20000"
                  :folderName="`UserPortfolio/${model.hashedId}`"
                  @onUploadSuccess="
                    (value) => {
                      model.changingInformationVideoCallUrl = value;
                    }
                  "
                />
              </el-form-item>
              <el-form-item
                prop="changingInformationFormUrl"
                v-if="model.changingInformationFormUrl"
              >
                <template #label>
                  {{ $t("Phiếu thay đổi thông tin") }}
                </template>
                <a
                  @click.prevent="
                    downloadFile(
                      model.changingInformationFormUrl,
                      `SignedChangingInformationForm_${model.customerId}.pdf`
                    )
                  "
                  >Download</a
                >
              </el-form-item>
              <el-form-item
                prop="updateDkshDocumentUrl"
                v-if="model.updateDkshDocumentUrl"
              >
                <template #label>
                  {{ $t("Tài liệu cập nhật thay đổi CMND/CCCD") }}
                </template>
                <a
                  @click.prevent="
                    downloadFile(
                      model.updateDkshDocumentUrl,
                      getFileNameFromUrl(model.updateDkshDocumentUrl)
                    )
                  "
                  >Download</a
                >
              </el-form-item>
              <el-form-item
                prop="signedContractUrl"
                v-if="model.signedContractUrl"
              >
                <template #label>
                  {{ $t("Hợp đồng mở tài khoản mới") }}
                </template>
                <a
                  @click.prevent="
                    downloadFile(
                      model.signedContractUrl,
                      `SignedContract_${model.customerId}.pdf`
                    )
                  "
                  >Download</a
                >
              </el-form-item>
              <el-form-item
                prop="signedVfITradeContractUrl"
                v-if="model.signedVfITradeContractUrl"
              >
                <template #label>
                  {{ $t("Phiếu trading online mới") }}
                </template>
                <a
                  @click.prevent="
                    downloadFile(
                      model.signedVfITradeContractUrl,
                      `SignedVfITrade_${model.customerId}.pdf`
                    )
                  "
                  >Download</a
                >
              </el-form-item>
              <el-form-item
                prop="signedVFMContractsUrl"
                v-if="model.signedVFMContractsUrl"
              >
                <template #label>
                  {{ $t("Tải về tất cả") }}
                </template>
                <a
                  @click.prevent="
                    downloadFile(
                      getFullUrl(model.signedVFMContractsUrl),
                      `DCVFM_Documents_${model.customerId}.pdf`
                    )
                  "
                  >Download</a
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import pageLoading from "@/components/Loading/pageLoading";
import { GenderTypes, DkshType, ContactTimeLables } from "@/utils/enums";
import { DataType } from "@/utils/enums";
import { getUserChangingInformation } from "@/api/account";
import uploadFile from "@/components/uploadFile";
export default {
  components: {
    pageLoading,
    uploadFile,
  },
  props: ["isAllowEdit"],
  data() {
    const self = this;
    return {
      showDialog: false,
      isShowRejectDialog: false,
      model: {
        changingInformationList: [],
      },
      dataType: DataType,
      isLoading: false,
      isSubmit: false,
      tabs: [
        {
          name: "general",
          label: "Tổng quan",
        },
      ],
      activeTab: "general",
      isRoleLoading: false,
      roleForDropdown: [],
      genderTypes: GenderTypes,
      dkshTypes: DkshType,
      contactTimeLables: ContactTimeLables,
      previouslyPickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      issuedDatePickerOptions: {
        disabledDate(time) {
          if (self.model && self.model.dateOfBirth) {
            return (
              time.getTime() > Date.now() ||
              time.getTime() < self.model.dateOfBirth
            );
          }
          return time.getTime() > Date.now();
        },
      },
      storageUrl: process.env.VUE_APP_STORAGE_FILE + "/userdocument",
    };
  },
  computed: {
    formTitle() {
      return "Duyệt thay đổi thông tin";
    },
  },
  watch: {
    "$route.query.id": function (val) {
      if (typeof val !== "undefined") {
        this.getDetail(val);
      }
    },
    showDialog: function (val) {
      if (!val) {
        this.closeDialog();
      }
    },
  },
  created() {
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
    }
  },
  methods: {
    getFileName(path) {
      if (!path) return;
      let arr = path.split("/");
      return arr[arr.length - 1];
    },
    getDetail(id) {
      this.isLoading = true;
      let approvalProcess = 200; //Approved
      getUserChangingInformation({ id: id, approvalProcess })
        .then((response) => {
          if (response.data.result) {
            this.showDialog = true;
            this.model = response.data.result;
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
    closeDialog() {
      this.$refs.model.clearValidate();
      this.isLoading = false;
      this.showDialog = false;
      this.$router.replace({});
      this.isShowRejectDialog = false;
    },
  },
};
</script>

