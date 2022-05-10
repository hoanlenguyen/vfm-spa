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
          <el-button @click="closeDialog">{{ $t("Hủy") }}</el-button>
          <el-button
            :loading="isSubmit"
            type="primary"
            @click="saveItem"
            v-if="isAllowCreate && !model.id"
            >{{ $t("Lưu lại") }}</el-button
          >
          <el-button
            :loading="isSubmit"
            type="primary"
            @click="saveItem"
            v-else-if="isAllowEdit && model.id"
            >{{ $t("Lưu lại") }}</el-button
          >
        </div>
      </template>
      <s-tabs
        class="dialogFullscreen__tabs"
        :tabs="tabs"
        :active-tab="activeTab"
      />
      <div class="dialogFullscreen__content">
        <el-form ref="model" :model="model" label-position="top">
          <el-row id="general" :gutter="16">
            <div class="section-title">{{ $t("Thông tin chung") }}</div>
            <el-col :span="24">
              <el-col :md="6" :sm="24">
                <el-form-item prop="isActive">
                  <span slot="label">
                    {{ $t("Kích hoạt") }}
                  </span>
                  <el-switch v-model="model.isActive" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item prop="isReceiveNotifyForPartnerUser">
                  <span slot="label">
                    {{ $t("Nhận thông báo từ hệ thống") }}
                  </span>
                  <el-switch v-model="model.isReceiveNotifyForPartnerUser" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item prop="isNecessaryFaceMatching">
                  <span slot="label">
                    {{ $t("Có sử dụng FaceMatching ?") }}
                  </span>
                  <el-switch v-model="model.isNecessaryFaceMatching" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item prop="isIntermediaryAccount">
                  <span slot="label">
                    {{ $t("Tài khoản trung gian") }}
                  </span>
                  <el-switch v-model="model.isIntermediaryAccount" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  :label="$t('Tên')"
                  prop="name"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập tên'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <el-input v-model="model.name" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  :label="$t('Tên tiếng Anh')"
                  prop="englishName"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập tên tiếng Anh'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <el-input v-model="model.englishName" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  :label="$t('Tên mã')"
                  prop="tenancyName"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập tên mã'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <span slot="label">
                    {{ $t("Tên mã") }}
                    <el-tooltip
                      :content="
                        $t(
                          'Tên mã không được phép chứa khoảng trống và ký tự đặc biệt'
                        )
                      "
                      placement="bottom"
                    >
                      <i class="el-icon-info" />
                    </el-tooltip>
                  </span>
                  <el-input
                    v-model="model.tenancyName"
                    :readonly="model.id > 0"
                    clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  :label="$t('Tên viết tắt')"
                  prop="partnerShortName"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập viết tắt'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <span slot="label">
                    {{ $t("Tên viết tắt") }}
                    <el-tooltip
                      :content="
                        $t(
                          'Tên viết tắt không được phép chứa khoảng trống và ký tự đặc biệt'
                        )
                      "
                      placement="bottom"
                    >
                      <i class="el-icon-info" />
                    </el-tooltip>
                  </span>
                  <el-input v-model="model.partnerShortName" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  :label="$t('Tên viết tắt')"
                  prop="partnerAbbreviationName"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập viết tắt'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <span slot="label">
                    {{ $t("Tên tổ chức viết tắt") }}
                    <el-tooltip
                      :content="
                        $t(
                          'Tên tổ chức viết tắt không được phép chứa khoảng trống và ký tự đặc biệt'
                        )
                      "
                      placement="bottom"
                    >
                      <i class="el-icon-info" />
                    </el-tooltip>
                  </span>
                  <el-input v-model="model.partnerAbbreviationName" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  :label="$t('Mã số doanh nghiệp')"
                  prop="businessCode"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập Mã số doanh nghiệp'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <span slot="label">
                    {{ $t("Mã số doanh nghiệp") }}
                  </span>
                  <el-input v-model="model.businessCode" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  :label="$t('Địa chỉ')"
                  prop="address"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập Address'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <span slot="label">
                    {{ $t("Địa chỉ") }}
                  </span>
                  <el-input v-model="model.address" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  :label="$t('Sale code')"
                  prop="saleCode"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập tên mã'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <span slot="label">
                    {{ $t("Sale code") }}
                    <el-tooltip
                      :content="
                        $t(
                          'Sale code không được phép chứa khoảng trống và ký tự đặc biệt'
                        )
                      "
                      placement="bottom"
                    >
                      <i class="el-icon-info" />
                    </el-tooltip>
                  </span>
                  <el-input v-model="model.saleCode" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item :label="$t('FSS Bank code')" prop="bankCode">
                  <span slot="label">
                    {{ $t("FSS Bank code") }}
                    <el-tooltip
                      :content="$t('Dùng để gọi khi lấy api thanh toán')"
                      placement="bottom"
                    >
                      <i class="el-icon-info" />
                    </el-tooltip>
                  </span>
                  <el-input v-model="model.bankCode" clearable />
                </el-form-item>
              </el-col>

              <el-col :md="6" :sm="24">
                <el-form-item
                  v-if="!model.id"
                  :label="$t('Email')"
                  prop="adminEmailAddress"
                  :rules="[
                    {
                      required: true,
                      message: $t('Vui lòng nhập email'),
                      trigger: ['blur', 'change'],
                    },
                    {
                      type: 'email',
                      message: 'Địa chỉ email không đúng',
                      trigger: ['blur', 'change'],
                    },
                  ]"
                >
                  <el-input v-model="model.adminEmailAddress" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <el-form-item
                  v-if="!model.id"
                  prop="adminPassword"
                  :label="$t('Mật khẩu')"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập mật khẩu'),
                    trigger: ['blur', 'change'],
                  }"
                >
                  <el-input
                    v-model="model.adminPassword"
                    type="password"
                    clearable
                    show-password
                  />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24" v-if="!model.id">
                <el-button
                  class="ml-3 btnGeneratePassword"
                  type="primary"
                  @click="generatePassword"
                  >{{ $t("Tạo mật khẩu") }}</el-button
                >
              </el-col>
            </el-col>
          </el-row>
          <el-row
            class="mt-5"
            :gutter="16"
            v-show="model.isIntermediaryAccount"
          >
            <div class="section-title">
              {{ $t("Thông tin tài khoản trung gian") }}
            </div>
            <el-col :md="6" :sm="24">
              <el-form-item
                prop="beneficiaryAccountName"
                :rules="{
                  required: model.isIntermediaryAccount,
                  message: $t('Vui lòng nhập Tên tài khoản thụ hưởng'),
                  trigger: ['blur', 'change'],
                }"
              >
                <span slot="label">
                  {{ $t("Tên tài khoản thụ hưởng") }}
                </span>
                <el-input v-model="model.beneficiaryAccountName" />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                prop="beneficiaryAccountNumber"
                :rules="{
                  required: model.isIntermediaryAccount,
                  message: $t('Vui lòng nhập Số tài khoản thụ hưởng'),
                  trigger: ['blur', 'change'],
                }"
              >
                <span slot="label">
                  {{ $t("Số tài khoản thụ hưởng") }}
                </span>
                <el-input v-model="model.beneficiaryAccountNumber" />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Ngân hàng')"
                prop="beneficiaryBankCode"
                :rules="{
                  required: model.isIntermediaryAccount,
                  message: $t('Vui lòng chọn ngân hàng'),
                  trigger: ['blur', 'change'],
                }"
              >
                <el-select
                  v-model="model.beneficiaryBankCode"
                  class="filter-item w-100"
                  clearable
                  filterable
                >
                  <el-option
                    v-for="(item, index) in listBank"
                    :key="index"
                    :label="item.bankName"
                    :value="item.bankCode"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <div class="section-title">{{ $t("Log File") }}</div>
            <div
              class="
                card-toolbox
                d-flex
                flex-column flex-md-row
                justify-content-end
                align-items-stretch
              "
            >
              <div
                class="
                  d-flex
                  flex-column flex-md-row
                  align-items-stretch align-items-sm-center
                  justify-content-end
                "
              >
                <div class="m-2">
                  <!-- <el-input
            v-model="filterKeyword"
            :placeholder="$t('Tìm theo tên hoặc tên mã')"
            clearable
            @clear="filter.filterKeyword = null"
            @keyup.enter.native="handleFilterKeyword"
          /> -->
                </div>
                <div class="d-flex justify-content-end">
                  <div class="m-2">
                    <el-button
                      plain
                      type="success"
                      @click="handleFilterKeyword"
                    >
                      <i class="las la-search" />
                      <span>{{ $t("Tìm kiếm") }}</span>
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-0 pb-5 card-body">
              <el-table
                v-loading="listLoading"
                class="border-0 rounded-0"
                :data="list"
                fit
                show-overflow-tooltip
                stripe
                @sort-change="handleSort"
              >
                <el-table-column
          :label="$t('Ngày đăng')"
          align="left"
          prop="creationTime"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creationTime | dateTime }}</span>
          </template>
        </el-table-column>

    <el-table-column
          :label="$t('File')"
          align="left"
          prop="fileUrl"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <a
                v-if="scope.row.fileUrl"
                @click.prevent="
                  downloadFile(
                    scope.row.fileUrl,scope.row.fileName
                  )
                "
                >Download</a
              >
            </div>
          </template>
        </el-table-column>
              </el-table>

              <s-pagination
                v-if="total > 0"
                :current-page.sync="paging.page"
                :page-size.sync="filter.rowsPerPage"
                :page-sizes="[10, 20, 50, 100, 200, 500, 1000]"
                :total="total"
                auto-scroll
                background
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="loadData"
                @current-change="loadData"
              />
            </div>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { createOrUpdate, getForEdit, fetchListLogFile } from "@/api/tenant";
import pageLoading from "@/components/Loading/pageLoading";
import { getBanksForDropdown } from "@/api/bank";

export default {
  components: { pageLoading },
  props: ["reloadData", "isAllowCreate", "isAllowEdit"],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    tabs: [
      {
        name: "general",
        label: "Tổng quan",
      },
    ],
    activeTab: "general",
    tabTranslationActive: "lang-0", // default show first tab
    invalidTranslations: [],
    isTranslationValid: true,
    listBank: [],
    paging: {
      page: 1,
    },
    total: 0,
    list: [],
    listLoading: false,
    filter: {
      rowsPerPage: 10,
      sortBy: "id",
      sortDirection: "descending",
      tenantId: null,
    },
  }),
  computed: {
    formTitle() {
      return this.$route.query.id
        ? "Chi tiết - " + this.model.name
        : "Tạo đối tác";
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
    this.fetchBankList();
  },
  mounted() {
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
      this.filter.tenantId = this.$route.query.id
      this.fetchLogFileList();
    }
  },
  methods: {
    handleFilterKeyword() {
      this.fetchLogFileList();
    },
    fetchLogFileList() {
      this.listLoading = true;
      fetchListLogFile({ ...this.filter, ...this.paging })
        .then((response) => {
          if (response.data.result) {
            this.list = response.data.result.items;
            this.total = response.data.result.totalCount;
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
          this.listLoading = false;
        });
    },
    reloadDataList() {
      this.paging.page = 1;
      this.loadData();
    },
    handleSort({ prop, order }) {
      if (!prop) return;
      this.filter.sortBy = prop;
      this.filter.sortDirection = order || "descending";
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
    getDetail(id) {
      this.isLoading = true;
      getForEdit(id)
        .then((response) => {
          this.showDialog = true;
          this.model = response.data.result;
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true,
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    saveItem() {
      this.$refs["model"].validate((valid) => {
        if (valid) {
          this.createOrUpdate();
        } else {
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
                message: this.$t("Tạo đối tác thành công"),
                showClose: true,
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa đối tác thành công"),
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
    closeDialog() {
      this.isTranslationValid = true;
      this.tabTranslationActive = "lang-0";
      this.$refs.model.clearValidate();
      this.model = {};
      this.$router.replace({});
      this.showDialog = false;
    },
    generatePassword() {
      this.model.adminPassword = this.createPassword(4, 2, 1, 1);
    },
    generateSecretKey() {
      this.model.accessTokenSecretKey = this.createPassword(8, 1, 1, 1);
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
  margin-top: 24px;
}
</style>
