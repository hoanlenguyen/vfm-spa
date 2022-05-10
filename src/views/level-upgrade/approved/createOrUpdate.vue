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
          <span class="el-dialog__title">{{ formTitle }}</span>
          <el-button @click="showDialog = false">{{ $t("Đóng") }}</el-button>
          <!-- <el-button
            :loading="isSubmit"
            type="primary"
            @click="saveItem"
            :disabled="model && model.isUpgradedLevel"
            v-if="isAllowEdit"
            >{{ $t("Xác nhận nâng cấp") }}</el-button
          > -->
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
            <div class="section-title">{{ $t("Thông tin chung") }}</div>
            <el-col :span="18">
              <el-row :gutter="16">
                <el-col :md="6" :sm="24">
                  <el-form-item label="CustomerId" prop="customerId">
                    <el-input v-model="model.customerId" disabled clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Họ và tên')" prop="fullName">
                    <el-input
                      :disabled="true"
                      v-model="model.fullName"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Số CMND')" prop="dkshNumber">
                    <el-input
                      :disabled="true"
                      v-model="model.dkshNumber"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item prop="emailAddress">
                    <template #label>
                      {{ $t("Địa chỉ email") }}
                      <el-tooltip :open-delay="400" placement="top">
                        <div slot="content" class="w-abs-max-350">
                          {{
                            $t(
                              "Nếu nhà đầu tư gặp bất kỳ vấn đề trong việc đăng nhập tài khoản E-Trading (VD: quên mật khẩu), địa chỉ email này được dùng để xác nhận và tái kích hoạt tài khoản của nhà đầu tư cũng như nhận tất cả các dịch vụ và thông tin từ hệ thống online E-Trading và từ Công ty VFM."
                            )
                          }}
                        </div>
                        <i class="el-icon-info" />
                      </el-tooltip>
                    </template>
                    <el-input
                      v-model="model.emailAddress"
                      :disabled="true"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item prop="phoneNumber">
                    <template #label>
                      {{ $t("Điện thoại di động") }}
                      <el-tooltip :open-delay="400" placement="top">
                        <div slot="content" class="w-abs-max-350">
                          {{
                            $t(
                              "Số điện thoại di động của nhà đầu tư hoạt động tại Việt Nam được sử dụng cho dịch vụ nhắn tin"
                            )
                          }}
                        </div>
                        <i class="el-icon-info" />
                      </el-tooltip>
                    </template>
                    <el-input
                      v-model="model.phoneNumber"
                      :maxlength="maxLengthPhoneNumber"
                      clearable
                      :disabled="true"
                      show-word-limit
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <p>{{ $t("Hạn mức hiện tại") }}</p>
                  <p class="mt-4">{{ getQuotaValue(model.vfmLevel) }}</p>
                </el-col>
                <el-col :md="6" :sm="24">
                  <div v-if="model.isUpgradedLevel">
                    <p>{{ $t("Đã nâng cấp hạng mức") }}</p>
                  </div>
                  <div v-else>
                    <p>{{ $t("Hạn mức yêu cầu") }}</p>
                    <p class="mt-4">
                      {{ getQuotaValue(model.requestVfmLevel) }}
                    </p>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="16" class="mt-4">
                <el-col :md="6" :sm="24">
                  <el-form-item prop="contractForUnlimitedLevelUrl">
                    <template #label>
                      {{ $t("Hợp đồng mở tài khoản có chữ ký") }}
                    </template>
                    <uploadFile
                      class="uploadFile"
                      :acceptType="'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/zip, application/x-rar-compressed, application/octet-stream, application/x-zip-compressed'"
                      :allow-multiple="true"
                      :allowDownloadFile="true"
                      :isCreatePreviewFile="false"
                      :maxFileSize="100 * 1024 * 1024"
                      :maxFiles="1"
                      :src="lstFileSrc"
                      :processTimeout="20000"
                      :folderName="`UserPortfolio/${model.hashedId}`"
                      @onUploadSuccess="
                        (value) => {
                          model.contractForUnlimitedLevelUrl = value;
                        }
                      "
                    ></uploadFile>
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Video call')" prop="dateOfBirth">
                    <uploadFile
                      class="uploadFile"
                      :acceptType="'video/mp4, application/zip, application/x-rar-compressed, application/octet-stream, application/x-zip-compressed'"
                      :allow-multiple="true"
                      :allowDownloadFile="true"
                      :isCreatePreviewFile="false"
                      :maxFileSize="5000 * 1024 * 1024"
                      :maxFiles="1"
                      :src="lstVideoSrc"
                      :processTimeout="20000"
                      :folderName="`UserPortfolio/${model.hashedId}`"
                      @onUploadSuccess="
                        (value) => {
                          model.videoCallUrl = value;
                        }
                      "
                    ></uploadFile>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <!-- <el-col :span="6">
              <el-form-item :label="$t('Lý do từ chối tài khoản')">
                <el-input
                  v-model="model.rejectedReason"
                  type="textarea"
                  :rows="5"
                  clearable
                />
              </el-form-item>
            </el-col> -->
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import pageLoading from "@/components/Loading/pageLoading";
import { createOrUpdate, getForEdit, upgradeUserLevel } from "@/api/account";
import { GenderTypes } from "@/utils/enums";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import uploadFile from "@/components/uploadFile";
export default {
  components: {
    pageLoading,
    UploadCroppedImage,
    uploadFile,
  },
  props: ["reloadData", "isAllowEdit"],
  data() {
    const self = this;
    return {
      showDialog: false,
      model: {
        user: {
          isActive: false,
          userType: 10,
        },
      },
      lstFileSrc: "",
      lstVideoSrc: "UserPortfolio/11/file_example_MP4_480_1_5MG.mp4",
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
      password: null,
      previouslyPickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      IssuedDatePickerOptions: {
        disabledDate(time) {
          if (self.model && self.model.user && self.model.user.birthday) {
            return (
              time.getTime() > Date.now() ||
              time.getTime() < self.model.user.birthday
            );
          }
          return time.getTime() > Date.now();
        },
      },
      maxLengthPhoneNumber: 10,
    };
  },
  computed: {
    formTitle() {
      const fullName = this.model.fullName;
      return this.$route.query.id
        ? `Chi tiết - ` + fullName
        : "Tạo tài khoản trading";
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
  mounted() {
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
    }
  },
  methods: {
    getDetail(id) {
      this.isLoading = true;
      getForEdit({ id: id, userType: 10 })
        .then((response) => {
          if (response.data.result) {
            this.showDialog = true;
            this.model = response.data.result;
            this.lstFileSrc = this.model.contractForUnlimitedLevelUrl;
            this.lstVideoSrc = this.model.videoCallUrl;
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
    saveItem() {
      if (this.password) this.model.password = this.password;
      this.$refs["model"].validate((valid) => {
        if (valid) {
          this.$confirm(
            `${this.$t("Bạn có chắc muốn nâng cấp cho thành viên này?")}`,
            `${this.$t("Cảnh báo")}`,
            {
              confirmButtonText: this.$t("Tiếp tục"),
              cancelButtonText: this.$t("Hủy"),
              type: "warning",
            }
          ).then(() => {
            this.upgradeUserLevel();
          });
        } else {
          this.$message({
            type: "error",
            message: this.$t("Bạn chưa nhập đủ thông tin"),
            showClose: true,
          });
        }
      });
    },
    upgradeUserLevel() {
      this.isSubmit = true;
      return upgradeUserLevel(this.model)
        .then((response) => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: this.$t("Nâng cấp hạng mức thành công"),
              showClose: true,
            });
            this.showDialog = false;
          }
        })
        .catch((error) => {
          if (error.response) {
            this.$message({
              type: "error",
              message: this.$t(`Lỗi ${error.response.data.error.message}`),
              showClose: true,
            });
          }
        })
        .finally(() => {
          this.isSubmit = false;
        });
    },
    getQuotaValue(level) {
      switch (level) {
        case 0:
          return "100,000,000 vnđ";
        case 10:
          return "300,000,000 vnđ";
        case 20:
          return "Không giới hạn";
        default:
          return "100,000,000 vnđ";
      }
    },
    getDownloadLink(shortUrl) {
      const baseUrl = process.env.VUE_APP_STORAGE_FILE;
      return `${baseUrl}/userdocument/${shortUrl}`;
    },
    getFileNameFromUrl(url) {
      if (!url) return "";
      const words = url.split("/");
      return words[words.length - 1];
    },
    closeDialog() {
      this.$refs.model.clearValidate();
      this.password = null;
      // this.model = {}
      this.$router.replace({});
      (this.lstFileSrc = null),
        (this.lstVideoSrc = null),
        (this.showDialog = false);
    },
    generatePassword() {
      this.password = this.createPassword(4, 2, 1, 1);
    },
    createPassword(numLc, numUc, numDigits, numSpecial) {
      numLc = numLc || 4;
      numUc = numUc || 4;
      numDigits = numDigits || 4;
      numSpecial = numSpecial || 2;

      const lcLetters = "abcdefghijklmnopqrstuvwxyz";
      const ucLetters = lcLetters.toUpperCase();
      const numbers = "0123456789";
      const special = "!?=#*$@+-.";

      const getRand = function (values) {
        return values.charAt(Math.floor(Math.random() * values.length));
      };

      // + Jonas Raoni Soares Silva
      // @ http://jsfromhell.com/array/shuffle [v1.0]
      function shuffle(o) {
        // v1.0
        for (
          var j, x, i = o.length;
          i;
          j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        ) {}
        return o;
      }

      const pass = [];
      for (let i = 0; i < numLc; ++i) {
        pass.push(getRand(lcLetters));
      }
      for (let i = 0; i < numUc; ++i) {
        pass.push(getRand(ucLetters));
      }
      for (let i = 0; i < numDigits; ++i) {
        pass.push(getRand(numbers));
      }
      for (let i = 0; i < numSpecial; ++i) {
        pass.push(getRand(special));
      }

      return shuffle(pass).join("");
    },
  },
};
</script>
<style lang="scss" scoped>
.btnGeneratePassword {
  margin-bottom: 1.2rem;
}
</style>

