<template>
  <div id="setting">
    <div class="app-page">
      <el-row
        align="middle"
        class="app-page-header"
        justify="space-between"
        type="flex"
      />
      <el-row class="app-page-body">
        <el-tabs type="border-card">
          <el-tab-pane :label="$t('Email(SMTP)')">
            <div v-if="Object.keys(model).length" id="security">
              <el-form :model="settingEmail" label-position="top">
                <el-row :gutter="16">
                  <el-col :md="6" :sm="24">
                    <el-form-item :label="$t('Tên hiển thị mặc định')">
                      <el-input v-model="settingEmail.defaultFromDisplayName" />
                    </el-form-item>
                    <el-form-item :label="$t('smtpHost')">
                      <el-input v-model="settingEmail.smtpHost" />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :sm="24">
                    <el-form-item :label="$t('Địa chỉ email mặc định')">
                      <el-input v-model="settingEmail.defaultFromAddress" />
                    </el-form-item>
                    <el-form-item :label="$t('smtpDomain')">
                      <el-input v-model="settingEmail.smtpDomain" />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :sm="24">
                    <el-form-item :label="$t('Tên đăng nhập')">
                      <el-input v-model="settingEmail.smtpUserName" />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :sm="24">
                    <el-form-item :label="$t('Mật khẩu')">
                      <el-input
                        v-model="settingEmail.smtpPassword"
                        auto-complete="off"
                        show-password
                        type="password"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :sm="24">
                    <el-form-item :label="$t('smtpPort')">
                      <el-input v-model="settingEmail.smtpPort" />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :sm="24">
                    <el-form-item :label="$t('Kích hoạt smtp Ssl')">
                      <el-switch v-model="settingEmail.smtpEnableSsl" />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :sm="24">
                    <el-form-item
                      :label="
                        $t('Kích hoạt Sử dụng thông tin xác thực mặc định')
                      "
                    >
                      <el-switch
                        v-model="settingEmail.smtpUseDefaultCredentials"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item>
                  <el-button
                    :loading="isSMTPLoading"
                    type="primary"
                    @click="
                      isSMTPLoading = true;
                      onSubmit();
                    "
                    >{{ $t("Lưu") }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-else>
              <h3>Bạn không có quyền truy cập</h3>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('Thông tin VA')">
            <div v-if="Object.keys(model).length" id="security">
              <el-form :model="settingVA" label-position="top">
                <el-row :gutter="16">
                  <el-col :md="12" :sm="24">
                    <el-form-item :label="$t('Kích hoạt')">
                      <el-switch v-model="settingVA.vaIsEnable" />
                    </el-form-item>
                    <el-form-item :label="$t('Tên ngân hàng')">
                      <el-input v-model="settingVA.vaAccountBankName" />
                    </el-form-item>
                    <el-form-item :label="$t('Tên tài khoản ngân hàng')">
                      <el-input v-model="settingVA.vaAccountName" />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item>
                  <el-button
                    :loading="isSMTPLoading"
                    type="primary"
                    @click="
                      isSMTPLoading = true;
                      onSubmit();
                    "
                    >{{ $t("Lưu") }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-else>
              <h3>Bạn không có quyền truy cập</h3>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('Thông tin đặt lệnh')">
            <div v-if="Object.keys(model).length" id="security">
              <el-form :model="settingOrder" label-position="top">
                <el-row :gutter="16">
                  <el-col :md="12" :sm="24">
                    <el-form-item :label="$t('Số tiền đặt sip tối thiểu')">
                      <el-input disabled v-model="settingOrder.orderMinAmountSIP"  type="number"/>
                    </el-form-item>
                    <el-form-item :label="$t('Tắt không cho hủy SIP')">
                      <el-switch v-model="settingOrder.disableCancelSIP" />
                    </el-form-item>
                    <el-form-item :label="$t('Tắt không cho chuyển đổi quỹ')">
                      <el-switch v-model="settingOrder.disableSwitchFund" />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item>
                  <el-button
                    :loading="isSMTPLoading"
                    type="primary"
                    @click="
                      isSMTPLoading = true;
                      onSubmit();
                    "
                    >{{ $t("Lưu") }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-else>
              <h3>Bạn không có quyền truy cập</h3>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row class="app-page-body mt-5">
        <el-tabs type="border-card">
          <el-tab-pane :label="$t('Cài đặt quản trị')">
            <div v-if="Object.keys(model).length" id="adminSecurity">
              <el-form :model="settingEmail" label-position="top">
                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item :label="$t('Email quản trị')">
                      <el-input-tag v-model="listAdminAddress" />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item
                      :label="$t('Email nhận thông báo Yêu cầu nâng hạn mức')"
                    >
                      <el-input-tag
                        v-model="
                          functionAdminEmails.sendRequestUpgradeUserLevelToAdmins
                        "
                      />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item
                      :label="$t('Email nhận thông báo Manual KYC')"
                    >
                      <el-input-tag
                        v-model="
                          functionAdminEmails.sendApproveCustomerInfoToAdmins
                        "
                      />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item
                      :label="
                        $t('Email nhận thông báo Yêu cầu thay đổi thông tin')
                      "
                    >
                      <el-input-tag
                        v-model="
                          functionAdminEmails.sendInformAdminToGetCustomerInfo
                        "
                      />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item
                      :label="$t('Email nhận thông báo Lệnh bán vượt hạn mức')"
                    >
                      <el-input-tag
                        v-model="
                          functionAdminEmails.sendOverTransactionQuotaToAdmins
                        "
                      />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item
                      :label="
                        $t('Email nhận thông báo Tổng tài sản vượt hạn mức')
                      "
                    >
                      <el-input-tag
                        v-model="
                          functionAdminEmails.sendOverTotalAssetsQuotaToAdmins
                        "
                      />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item
                      :label="$t('Email nhận thông báo Lỗi hệ thống')"
                    >
                      <el-input-tag
                        v-model="functionAdminEmails.sendErrorReportEmail"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item
                      :label="$t('Email nhận thông báo Lỗi khi SC trả nội dung thiếu mã khách hàng')"
                    >
                      <el-input-tag
                        v-model="functionAdminEmails.sendCustomerIdNotFoundVAToAdmins"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="16">
                  <el-col :md="24" :sm="24">
                    <el-form-item
                      :label="$t('Email nhận thông báo Khách hàng xác nhận đúng nội dung chuyển khoản')"
                    >
                      <el-input-tag
                        v-model="functionAdminEmails.sendConfirmCorrectMoneyTransferToSC"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item>
                  <el-button
                    v-if="isAllowEdit"
                    :loading="isAdminLoading"
                    type="primary"
                    @click="
                      isAdminLoading = true;
                      onSubmit();
                    "
                    >{{ $t("Lưu") }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-else>
              <h3>Bạn không có quyền truy cập</h3>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getAllSettings, updateAllSettings } from "@/api/settings";
import { System } from "@/utils/app-permission.js";

export default {
  name: "Setting",
  components: {},
  data() {
    return {
      model: {},
      modelSecurity: {},
      modelUserManager: {},
      settingEmail: {},
      settingAdminEmails: {
        sendRequestUpgradeUserLevelToAdmins: "",
        sendApproveCustomerInfoToAdmins: "",
        sendInformAdminToGetCustomerInfo: "",
        sendOverTransactionQuotaToAdmins: "",
        sendErrorReportEmail: "",
        sendOverTotalAssetsQuotaToAdmins: "",
        sendCustomerIdNotFoundVAToAdmins: "",
        sendConfirmCorrectMoneyTransferToSC: ""
      },
      settingVA: {},
      settingOrder: {},
      settingSEOHomePage: {},
      isSMTPLoading: false,
      isAdminLoading: false,
      listAdminAddress: [],
      functionAdminEmails: {
        sendRequestUpgradeUserLevelToAdmins: [],
        sendApproveCustomerInfoToAdmins: [],
        sendInformAdminToGetCustomerInfo: [],
        sendOverTransactionQuotaToAdmins: [],
        sendErrorReportEmail: [],
        sendOverTotalAssetsQuotaToAdmins: [],
        sendCustomerIdNotFoundVAToAdmins: [],
        sendConfirmCorrectMoneyTransferToSC: []
      },
    };
  },
  computed: {
    isAllowEdit() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(System.System_Edit)
      );
    },
  },
  watch: {
    "settingEmail.emailAdminAddresses"(v) {
      v && (this.listAdminAddress = v.split(","));
    },
    "settingAdminEmails.sendRequestUpgradeUserLevelToAdmins"(v) {
      v &&
        (this.functionAdminEmails.sendRequestUpgradeUserLevelToAdmins =
          v.split(","));
    },
    "settingAdminEmails.sendApproveCustomerInfoToAdmins"(v) {
      v &&
        (this.functionAdminEmails.sendApproveCustomerInfoToAdmins =
          v.split(","));
    },
    "settingAdminEmails.sendInformAdminToGetCustomerInfo"(v) {
      v &&
        (this.functionAdminEmails.sendInformAdminToGetCustomerInfo =
          v.split(","));
    },
    "settingAdminEmails.sendOverTransactionQuotaToAdmins"(v) {
      v &&
        (this.functionAdminEmails.sendOverTransactionQuotaToAdmins =
          v.split(","));
    },
    "settingAdminEmails.sendErrorReportEmail"(v) {
      v && (this.functionAdminEmails.sendErrorReportEmail = v.split(","));
    },
    "settingAdminEmails.sendOverTotalAssetsQuotaToAdmins"(v) {
      v &&
        (this.functionAdminEmails.sendOverTotalAssetsQuotaToAdmins =
          v.split(","));
    },
    "settingAdminEmails.sendCustomerIdNotFoundVAToAdmins"(v) {
      v &&
        (this.functionAdminEmails.sendCustomerIdNotFoundVAToAdmins =
          v.split(","));
    },
    "settingAdminEmails.sendConfirmCorrectMoneyTransferToSC"(v) {
      v &&
        (this.functionAdminEmails.sendConfirmCorrectMoneyTransferToSC =
          v.split(","));
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getAllSettings()
        .then((response) => {
          this.model = response.data.result;
          this.modelSecurity = response.data.result.security;
          this.modelUserManager = response.data.result.userManagement;
          this.settingEmail = response.data.result.email;
          this.settingAdminEmails = response.data.result.adminEmailList;
          this.settingOrder = response.data.result.order;
          this.settingSEOHomePage = response.data.result.seoHomePage;
          this.settingVA = response.data.result.va;
          // console.log(this.settingVA);
        })
        .catch((error) => {
          // this.$notify.error({
          //   title: "Thông báo",
          //   message: `Error: ${error.response.data.error.message}`,
          //   showClose: false
          // });
        });
    },
    onSubmit() {
      if (this.listAdminAddress.length > 0) {
        this.settingEmail.emailAdminAddresses = this.listAdminAddress.join(",");
      }
      this.settingAdminEmails.sendRequestUpgradeUserLevelToAdmins =
        this.functionAdminEmails.sendRequestUpgradeUserLevelToAdmins.join(",");

      this.settingAdminEmails.sendApproveCustomerInfoToAdmins =
        this.functionAdminEmails.sendApproveCustomerInfoToAdmins.join(",");

      this.settingAdminEmails.sendInformAdminToGetCustomerInfo =
        this.functionAdminEmails.sendInformAdminToGetCustomerInfo.join(",");

      this.settingAdminEmails.sendOverTransactionQuotaToAdmins =
        this.functionAdminEmails.sendOverTransactionQuotaToAdmins.join(",");

      this.settingAdminEmails.sendErrorReportEmail =
        this.functionAdminEmails.sendErrorReportEmail.join(",");

      this.settingAdminEmails.sendOverTotalAssetsQuotaToAdmins =
        this.functionAdminEmails.sendOverTotalAssetsQuotaToAdmins.join(",");
      
      this.settingAdminEmails.sendCustomerIdNotFoundVAToAdmins =
        this.functionAdminEmails.sendCustomerIdNotFoundVAToAdmins.join(",");

      this.settingAdminEmails.sendConfirmCorrectMoneyTransferToSC =
        this.functionAdminEmails.sendConfirmCorrectMoneyTransferToSC.join(",");
        
      updateAllSettings(this.model)
        .then((response) => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: "Cập nhật thành công",
              showClose: false,
            });
            this.loadData();
          }
        })
        .catch((error) => {
          // this.$notify.error({
          //   title: "Thông báo",
          //   message: `Error: ${error.response.data.error.message}`,
          //   showClose: false
          // });
        })
        .finally(() => {
          this.isSMTPLoading = false;
          this.isAdminLoading = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
#setting {
  .app-page .app-page-body {
    padding: 0;
  }
}
</style>
