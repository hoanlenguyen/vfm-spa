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
        </div>
      </template>
      <s-tabs
        :active-tab="activeTab"
        :tabs="tabs"
        class="dialogFullscreen__tabs"
      />
      <div class="dialogFullscreen__content">
        <el-form ref="model" :model="model" label-position="top">
          <el-row :gutter="16">
            <el-col id="statusManagement" :span="18">
              <el-row :gutter="16">
                <el-col :span="24">
                  <div class="section-title">
                    {{ $t("Quản lý trạng thái") }}
                  </div>
                  <el-row :gutter="16">
                    <el-col :span="6">
                      <el-form-item
                        :label="$t('Trạng thái VSD')"
                        prop="vsdStatus"
                      >
                        <el-input :value="mapToList(vsdStatus, model.vsdStatus)" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item
                        :label="$t('Trạng thái hồ sơ gốc')"
                        prop="hardCopyDocumentStatus"
                      >
                        <el-input :value="mapToList(hardCopyDocumentStatus, model.hardCopyDocumentStatus)" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :offset="3" :span="6">
                      <el-form-item prop="isAgreeToTradingOnline">
                        <span slot="label">
                          {{ $t("Giao dịch trực tuyến") }}
                          <el-tooltip
                            :content="
                              $t('Giao dịch trực tuyến có được kích hoạt hay không?')
                            "
                            placement="bottom"
                          >
                            <i class="el-icon-info" />
                          </el-tooltip>
                        </span>
                        <el-switch v-model="model.isAgreeToTradingOnline" disabled/>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('Lý do từ chối tài khoản')">
                <el-input
                  v-model="model.rejectReason"
                  type="textarea"
                  :rows="5"
                  readonly
                />
              </el-form-item>
            </el-col>
            <el-col id="general" :span="18">
              <el-row :gutter="16">
                <el-col :span="24">
                  <div class="section-title">{{ $t("Thông tin chung") }}</div>
                  <el-row :gutter="16">
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Họ và tên')"
                        prop="fullName"
                      >
                        <el-input v-model="model.fullName" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Số CMND')"
                        prop="dkshNumber"
                      >
                        <el-input v-model="model.dkshNumber" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="emailAddress"
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
                        <el-input v-model="model.emailAddress" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="phoneNumber"
                      >
                        <template #label>
                          {{ $t("Số điện thoại") }}
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
                          readonly
                          show-word-limit
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Ngày sinh')"
                        prop="dateOfBirth"
                      >
                        <el-date-picker
                          v-model="model.dateOfBirth"
                          class="w-100"
                          format="yyyy/MM/dd"
                          value-format="yyyy-MM-dd"
                          type="date"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Giới tính')"
                        prop="gender"
                      >
                        <el-input :value="mapToList(genderTypes, model.gender)" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Nơi cấp CMND')"
                        prop="dkshIssuedPlace"
                      >
                        <el-input v-model="model.dkshIssuedPlace" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Ngày cấp CMND')"
                        prop="dkshIssuedDate"
                      >
                        <el-date-picker
                          v-model="model.dkshIssuedDate"
                          class="w-100"
                          format="yyyy/MM/dd"
                          value-format="yyyy-MM-dd"
                          type="date"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item :label="$t('Mã RM')" prop="saleCode">
                        <el-input v-model="model.saleCode" readonly />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>

                <el-col :span="24">
                  <div class="mt-5 section-title">
                    {{ $t("Địa chỉ thường trú") }}
                  </div>
                  <el-row :gutter="16">
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Quốc gia')"
                        prop="permanentAddressCountry"
                      >
                        <el-input :value="mapToList(listCountry, model.permanentAddressCountry)" readonly />
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Tỉnh/Thành phố')"
                        prop="permanentAddressProvince"
                      >
                        <el-input :value="mapToList(listPermanentProvince, model.permanentAddressProvince)" readonly />
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Quận/Huyện')"
                        prop="permanentAddressDistrict"
                      >
                        <el-input :value="mapToList(listPermanentDistrict,model.permanentAddressDistrict)" readonly />
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Phường/Xã')"
                        prop="permanentAddressWard"
                      >
                        <el-input :value="mapToList(listPermanentWard, model.permanentAddressWard)" readonly />
                      </el-form-item>
                    </el-col>

                    <el-col :md="24" :sm="24">
                      <el-form-item
                        :label="$t('Địa chỉ')"
                        prop="permanentAddress"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập địa chỉ'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-input
                          v-model="model.permanentAddress"
                          :rows="2"
                          type="textarea"
                          readonly
                        >
                        </el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>

                <el-col :span="24">
                  <div class="mt-5 section-title">
                    {{ $t("Địa chỉ liên lạc") }}
                  </div>
                  <el-row :gutter="16">
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Quốc gia')"
                        prop="permanentAddressCountry"
                      >
                        <el-input :value="mapToList(listCountry, model.permanentAddressCountry)" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Tỉnh/Thành phố')"
                        prop="permanentAddressProvince"
                      >
                        <el-input :value="mapToList(listPermanentProvince, model.permanentAddressProvince)" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Quận/Huyện')"
                        prop="permanentAddressDistrict"
                      >
                        <el-input :value="mapToList(listPermanentDistrict,model.permanentAddressDistrict)" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Phường/Xã')"
                        prop="permanentAddressWard"
                      >
                        <el-input :value="mapToList(listPermanentWard, model.permanentAddressWard)" readonly />
                      </el-form-item>
                    </el-col>
                    <el-col :md="24" :sm="24">
                      <el-form-item
                        :label="$t('Địa chỉ')"
                        prop="contactAddress"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập địa chỉ'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-input
                          v-model="model.contactAddress"
                          :rows="2"
                          type="textarea"
                          readonly
                        >
                        </el-input>
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
    <el-dialog
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :title="$t('Từ chối gửi yêu cầu CCTT')"
      :visible.sync="isShowRejectDialog"
      width="30%"
    >
      <el-form ref="ruleRejectedForm" :model="model">
        <div class="my-4">{{ $t("Lí do từ chối gửi yêu cầu CCTT") }}</div>
        <el-form-item
          prop="rejectReason"
        >
          <el-input
            v-model="model.rejectReason"
            :placeholder="$t('Nhập lý do từ chối gửi yêu cầu CCTT')"
            :rows="3"
            type="textarea"
          ></el-input>
        </el-form-item>
      </el-form>

<!--      <span class="dialog-footer" slot="footer">-->
<!--        <el-button @click="isShowRejectDialog = false">{{-->
<!--          $t("Hủy")-->
<!--        }}</el-button>-->
<!--        <el-button type="primary" @click="submitRejectedAccount">{{-->
<!--          $t("Xác nhận")-->
<!--        }}</el-button>-->
<!--      </span>-->
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import pageLoading from "@/components/Loading/pageLoading";
import { GenderTypes, HardCopyDocumentStatus, VSDStatus, ConsentLetterStatus } from "@/utils/enums";
import {Countries} from '@/utils/country'
import {Provinces} from '@/utils/province'
import {Districts} from '@/utils/district'
import {Wards} from '@/utils/ward'
import { getConsentLetterRequestDetail, updateConsentLetterRequestStatus } from "@/api/rm";

export default {
  components: {
    pageLoading,
  },
  props: ["isAllowEdit"],
  data() {
    const self = this;
    return {
      showDialog: false,
      isShowRejectDialog: false,
      model: {
        permanentAddressCountry: null,
        bankCode: null,
      },
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
      selfieImageUrls: [],
      isLoading: false,
      isSubmit: false,
      tabs: [
        {
          name: "statusManagement",
          label: "Quản lý trạng thái",
        },
        {
          name: "general",
          label: "Tổng quan",
        },
      ],
      activeTab: "general",
      isRoleLoading: false,
      roleForDropdown: [],
      genderTypes: GenderTypes,
      hardCopyDocumentStatus: HardCopyDocumentStatus,
      vsdStatus: VSDStatus
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
    isShowRejectDialog: function (val) {
      if (!val) {
        this.$refs.ruleRejectedForm.clearValidate();
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
    }
    // this.fetchBankList();
  },
  methods: {
    getDetail(id) {
      this.isLoading = true;
      getConsentLetterRequestDetail({ id: id })
        .then((response) => {
          if (response.data.result) {
            this.showDialog = true;
            this.model = response.data.result;
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
    closeDialog() {
      this.$refs.model.clearValidate();
      this.isLoading = false;
      this.showDialog = false;
      this.$router.replace({});
      this.isShowRejectDialog = false;
      // this.$router.go(this.$router.currentRoute);
    },
    mapToList(list, value) {
      var filter = list.filter(t => t.value === value);
      if (filter.length > 0)
        return filter[0].label;
      return "";
    }
  },
};
</script>
