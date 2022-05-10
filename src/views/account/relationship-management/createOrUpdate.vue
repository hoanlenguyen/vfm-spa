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
          <el-button type="primary" @click="saveItem">{{
            $t("Lưu")
          }}</el-button>
          <el-button @click="showDialog = false">{{ $t("Đóng") }}</el-button>
          <!-- <el-button type="primary" @click="approveUserInformation">{{ $t("Duyệt tài khoản") }} </el-button>
          <el-button type="danger" @click="rejectUserInformation">{{ $t("Từ chối") }} </el-button> -->
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
            <h3 class="mb-4">Tổng quan</h3>
            <el-col :span="24">
              <el-row :gutter="16">
                <el-col :span="24">
                  <div class="section-title">{{ $t("Thông tin chung") }}</div>
                  <el-row>
                    <el-col :md="6" :sm="24">
                      <el-form-item prop="isActive">
                        <span slot="label">
                          {{ $t("Trạng thái") }}
                        </span>
                        <el-switch v-model="model.isActive" />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="16">
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="rmCode"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập Mã RM'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <template #label>
                          {{ $t("Mã RM") }}
                        </template>
                        <el-input v-model="model.rmCode" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Họ và tên')"
                        prop="fullName"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập họ và tên'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-input v-model="model.fullName" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Số điện thoại')"
                        prop="phoneNumber"                       
                      >
                        <el-input v-model="model.phoneNumber" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="emailAddress"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập địa chỉ email'),
                          trigger: ['blur', 'change'],
                        }"
                      >
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
                        <el-input v-model="model.emailAddress" clearable />
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="rmBranchCode"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập Mã chi nhánh'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <template #label>
                          {{ $t("Mã chi nhánh") }}
                        </template>
                        <el-input v-model="model.rmBranchCode" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="rmBranchName"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập Tên chi nhánh'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <template #label>
                          {{ $t("Tên chi nhánh") }}
                        </template>
                        <el-input v-model="model.rmBranchName" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="rmAreaCode"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập Mã khu vực'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <template #label>
                          {{ $t("Mã khu vực") }}
                        </template>
                        <el-input v-model="model.rmAreaCode" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="rmAreaName"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập Tên khu vực'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <template #label>
                          {{ $t("Tên khu vực") }}
                        </template>
                        <el-input v-model="model.rmAreaName" clearable />
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="rmShortBankName"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập Tên ngân hàng (viết tắt)'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <template #label>
                          {{ $t("Tên ngân hàng (viết tắt)") }}
                        </template>
                        <el-input v-model="model.rmShortBankName" clearable />
                      </el-form-item>
                    </el-col>

                    <el-col :md="24" :sm="24">
                      <el-form-item :label="$t('Ghi chú')" prop="rmNote">
                        <el-input
                          v-model="model.rmNote"
                          :rows="2"
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
import pageLoading from "@/components/Loading/pageLoading";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import {
  GenderTypes,
  HardCopyDocumentStatus,
  VSDStatus,
  DkshType,
  VfmLevelLables,
  VfmLevelType,
} from "@/utils/enums";
import {Countries} from '@/utils/country'
import {Provinces} from '@/utils/province'
import {Districts} from '@/utils/district'
import {Wards} from '@/utils/ward'
import { getForEdit, sendVMFContractsToUser } from "@/api/account";
import { createOrUpdate } from "@/api/rm";
import { getBanksForDropdown } from "@/api/bank";
import { getList } from "@/api/order";
import uploadFile from "@/components/uploadFile";
export default {
  components: {
    pageLoading,
    UploadCroppedImage,
    uploadFile,
  },
  props: ["isAllowCreate", "isAllowEdit"],
  data() {
    const self = this;
    return {
      showDialog: false,
      // isShowRejectDialog: false,
      model: {
        permanentAddressCountry: null,
        bankCode: null,
      },
      lstFileSrc: "",
      listAdditionalDocumentUrl: "",
      modelRejected: {
        rejectedReason: "",
      },
      vsdStatus: VSDStatus,
      dkshTypes: DkshType,
      hardCopyDocumentStatus: HardCopyDocumentStatus,
      lstHardCopyDocumentSrc: "",
      lstOnlineTradingDocumentUrl: "",
      vfmLevelLables: VfmLevelLables,
      vfmLevelType: VfmLevelType,
      currentVfmLevel: "",
      listCountry: Countries,
      listProvince: Provinces,
      listPermanentProvince: Provinces,
      listContactProvince: Provinces,
      listDistrict: Districts,
      listPermanentDistrict: [],
      listContactDistrict: [],
      listWard: Wards,
      listPermanentWard: [],
      listContactWard: [],
      listBank: [],
      listBankBranch: [],
      orders: [],
      isLoading: false,
      isSubmit: false,
      listLoading: false,
      storageUrl: process.env.VUE_APP_STORAGE_FILE + "/userdocument",
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
      maxLengthPhoneNumber: 15,
    };
  },
  computed: {
    formTitle() {
      return "Tài khoản RM";
      // let id = this.model && this.model.rmCode;
      // return id
      //   ? `Tài khoản RM - ${id}`
      //   : "Tài khoản RM";
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
    "model.bankCode"(value) {
      if (!value) {
        this.model.bankBranch = null;
        this.listBankBranch = [];
      }

      var bank = this.listBank.find((p) => p.bankCode == this.model.bankCode);

      if (!bank || !bank.bankBranches) {
        this.listBankBranch = [];
        this.model.bankBranch = null;
      } else this.listBankBranch = [...bank.bankBranches];
    },
  },
  created() {
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
      this.getOrders(this.$route.query.id);
    }
  },
  methods: {
    saveItem() {
      this.$refs["model"].validate((valid) => {
        if (valid) this.createOrUpdate();
        else {
          this.$message({
            type: "error",
            message: this.$t("Bạn chưa nhập đủ thông tin"),
            showClose: true,
          });
        }
      });
    },
    createOrUpdate() {
      this.isSubmit = true;
      return createOrUpdate(this.model)
        .then((response) => {
          if (response.data.success) {
            this.$emit("reloadData");
            if (!this.model.id) {
              this.$message({
                type: "success",
                message: this.$t("Tạo tài khoản thành công"),
                showClose: true,
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa tài khoản thành công"),
                showClose: true,
              });
            }
            this.showDialog = false;
          }
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi ${error.response.data.error.message}`),
            showClose: true,
          });
        })
        .finally(() => {
          this.isSubmit = false;
        });
    },
    update() {
      this.isLoading = true;
      updateUserProfileTradingAccount(this.model)
        .then((resp) => {
          if (resp.data.success) {
            this.$emit("reloadData");
            this.$message({
              type: "success",
              message: "Cập nhật tài khoản thành công",
              showClose: true,
            });
            this.closeDialog();
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
    sendVMFContractsToUser(id) {
      sendVMFContractsToUser({ id: id })
        .then((response) => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: `${this.$t("Gửi tài liệu thành công")}`,
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
        });
    },
    downloadRP25() {
      window.open(`${this.storageUrl}/${this.model.signedContractUrl}`);
    },
    downloadRP15() {
      window.open(`${this.storageUrl}/${this.model.signedVfITradeContractUrl}`);
    },
    getDetail(id) {
      this.isLoading = true;
      getForEdit({ id: id, userType: 10 })
        .then((response) => {
          if (response.data.result) {
            this.showDialog = true;
            this.model = response.data.result;
            this.currentVfmLevel = this.model.vfmLevel;
            if (this.model.additionalDocumentUrl) {
              this.listAdditionalDocumentUrl = this.model.additionalDocumentUrl;
            }

            this.lstFileSrc = this.model.changingInformationFormUrl;
            this.bindDataFromApi();
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
    getOrders(id) {
      getList(id)
        .then((response) => {
          if (response.data.result) {
            this.orders = response.data.result;
          }
        })
        .catch((error) => {
          // if (error.response) {
          //   this.$message({
          //     type: "error",
          //     message: this.$t(`Lỗi: ${error.response.data.error.message}`),
          //     showClose: true
          //   });
          // }
        })
        .finally(() => {});
    },
    bindDataFromApi() {
      if (this.model.permanentAddressProvince) {
        this.listPermanentDistrict = this.listDistrict.filter(
          (item) => item.parentId === this.model.permanentAddressProvince
        );
      }
      if (this.model.permanentAddressDistrict) {
        this.listPermanentWard = this.listWard.filter(
          (item) => item.parentId === this.model.permanentAddressDistrict
        );
      }
      if (this.model.contactAddressProvince) {
        this.listContactDistrict = this.listDistrict.filter(
          (item) => item.parentId === this.model.contactAddressProvince
        );
      }
      if (this.model.contactAddressDistrict) {
        this.listContactWard = this.listWard.filter(
          (item) => item.parentId === this.model.contactAddressDistrict
        );
      }
    },
    fetchBankList() {
      getBanksForDropdown()
        .then((response) => {
          if (response.data.result) {
            this.listBank = response.data.result;
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
        });
    },
    submitRejectedAccount() {
      this.$refs.ruleRejectedForm.validate((valid) => {
        if (valid) {
          this.model.rejectedReason = this.modelRejected.rejectedReason;
          this.model.isApproved = false;
          this.isLoading = true;
          updateUserInformation(this.model)
            .then((response) => {
              this.$emit("reloadData");
              this.closeDialog();
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
          this.$message({
            type: "error",
            message: this.$t("Vui lòng nhập lý do từ chối tài khoản"),
            showClose: true,
          });
        }
      });
    },
    closeDialog() {
      this.$refs.model.clearValidate();
      this.isLoading = false;
      this.showDialog = false;
      this.$router.replace({});
      this.listAdditionalDocumentUrl = null;
      // this.isShowRejectDialog = false;
      // this.$router.go(this.$router.currentRoute);
    },
    changePermanentAddressCountry() {
      this.model.permanentAddressProvince = null;
      this.model.permanentAddressDistrict = null;
      this.model.permanentAddressWard = null;
      this.listPermanentDistrict = [];
      this.listPermanentWard = [];
    },
    changePermanentAddressProvince() {
      this.model.permanentAddressDistrict = null;
      this.model.permanentAddressWard = null;
      // this.listPermanentProvince = [];
      this.listPermanentDistrict = [];
      this.listPermanentWard = [];
      if (this.model.permanentAddressProvince) {
        this.listPermanentDistrict = this.listDistrict.filter(
          (item) => item.parentId === this.model.permanentAddressProvince
        );
      }
    },
    changePermanentAddressDistrict() {
      this.model.permanentAddressWard = null;
      this.listPermanentWard = [];
      if (this.model.permanentAddressDistrict) {
        this.listPermanentWard = this.listWard.filter(
          (item) => item.parentId === this.model.permanentAddressDistrict
        );
      }
    },
    changeContactAddressCountry() {
      this.model.contactAddressProvince = null;
      this.model.contactAddressDistrict = null;
      this.model.contactAddressWard = null;
      this.listContactDistrict = [];
      this.listContactWard = [];
    },
    changeContactAddressProvince() {
      this.model.contactAddressDistrict = null;
      this.model.contactAddressWard = null;
      this.listContactDistrict = [];
      this.listContactWard = [];
      if (this.model.contactAddressProvince) {
        this.listContactDistrict = this.listDistrict.filter(
          (item) => item.parentId === this.model.contactAddressProvince
        );
      }
    },
    changeContactAddressDistrict() {
      this.model.contactAddressWard = null;
      this.listContactWard = [];
      if (this.model.contactAddressDistrict) {
        this.listContactWard = this.listWard.filter(
          (item) => item.parentId === this.model.contactAddressDistrict
        );
      }
    },
  },
};
</script>
