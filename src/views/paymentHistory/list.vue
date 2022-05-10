<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Lịch sử thanh toán") }}</span>
        </h3>
        <div class="ml-auto">
          <el-button
            size="medium"
            type="success"
            @click="exportExcel"
            :loading="downloadLoading"
            >{{ $t("Export excel") }}
          </el-button>
        </div>
        <div
          class="d-flex flex-column flex-md-row align-items-stretch align-items-sm-center justify-content-end"
        >
          <div class="d-flex justify-content-end"></div>
        </div>
      </div>
    </div>
    <div
      class="card-toolbox d-flex flex-column flex-md-row justify-content-end align-items-stretch"
    >
      <div
        class="d-flex flex-column flex-md-row align-items-stretch align-items-sm-center justify-content-end"
      >
        <div class="m-2">
          <el-date-picker
            v-model="filter.fromTime"
            class="w-100"
            type="datetime"
            :placeholder="$t('Từ TG thanh toán')"
            clearable
          />
        </div>
        <div class="m-2">
          <el-date-picker
            v-model="filter.toTime"
            class="w-100"
            type="datetime"
            :placeholder="$t('Đến TG thanh toán')"
            clearable
          />
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.narractiveReconcile"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Đúng nội dung')"
          >
            <el-option
              v-for="item in narractiveReconcile"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.orderType"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo loại lệnh')"
          >
            <el-option
              v-for="item in OrderTypes"
              :key="item.id"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.tenantId"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo tên đối tác')"
          >
            <el-option
              v-for="item in tenants"
              :key="item.id"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-input
            class="w-abs-300"
            v-model="transactionFreeText"
            :placeholder="$t('Tìm theo nội dung chuyển khoản')"
            clearable
            @clear="filter.transactionFreeText = null"
            @keyup.enter.native="handleTransactionFreeText"
          />
        </div>
        <div class="m-2">
          <el-input
            class="w-abs-400"
            v-model="filterKeyword"
            :placeholder="
              $t('Nhập số tài khoản, số tài khoản quỹ, mã quỹ, mã VA')
            "
            clearable
            @clear="filter.filterKeyword = null"
            @keyup.enter.native="handleFilterKeyword"
          />
        </div>
        <div class="d-flex justify-content-end">
          <div class="m-2">
            <el-button plain type="success" @click="handleSearch">
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
          :label="$t('Mã đối tác')"
          min-width="120px"
          prop="name"
          sortable
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1"
              :title="scope.row.tenantId"
            >
              {{ scope.row.tenantId }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tên đối tác')"
          min-width="120px"
          prop="tenantName"
        >
          <template slot-scope="scope">
            {{ scope.row.tenantName }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Số tài khoản')"
          min-width="140px"
          prop="customerId"
        >
          <template slot-scope="scope">
            {{ scope.row.customerId }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Họ và tên')"
          min-width="250px"
          prop="fullName"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis pointer d-inline-block"
              :title="`${scope.row.fullName}`"
            >
              {{ scope.row.fullName }}
            </div>
          </template>
        </el-table-column>

        <el-table-column :label="$t('Mã VA')" min-width="200px" prop="vaNumber">
          <template slot-scope="scope">
            {{ scope.row.vaNumber }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mã quỹ')"
          min-width="150px"
          prop="fundCode"
        >
          <template slot-scope="scope">
            {{ scope.row.fundCode }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Số tài khoản quỹ')"
          min-width="200px"
          prop="bankCode"
        >
          <template slot-scope="scope">
            {{ scope.row.bankCode }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Số tiền')"
          min-width="200px"
          prop="orderAmount"
        >
          <template slot-scope="scope">
            {{
              scope.row.orderAmount
                | currency("đ", 0, {
                  symbolOnLeft: false,
                  thousandsSeparator: ".",
                })
            }}
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Số tiền nhận')"
          min-width="200px"
          prop="receivedAmount"
        >
          <template slot-scope="scope">
            {{
              scope.row.receivedAmount
                | currency("đ", 0, {
                  symbolOnLeft: false,
                  thousandsSeparator: ".",
                })
            }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Nội dung chuyển tiền')"
          min-width="450px"
          prop="transactionFreeText"
        >
          <template slot-scope="scope">
            {{ scope.row.transactionFreeText }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Cut-off Time')"
          align="center"
          prop="cutOffTime"
          sortable
          width="350px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.cutOffTime | dateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày giao dịch')"
          align="center"
          prop="tradingDate"
          sortable
          width="180px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.tradingDate | date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Thời gian thanh toán')"
          align="center"
          prop="paymentTime"
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.paymentTime | dateTimeFull }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Thời gian tạo')"
          align="center"
          prop="paymentTime"
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creationTime | dateTimeFull }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Loại lệnh')"
          min-width="150px"
          prop="orderType"
        >
          <template slot-scope="scope">
            {{ convertArrayToObj(OrderTypes)[scope.row.orderType] }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Trạng thái')"
          min-width="150px"
          prop="method"
        >
          <template slot-scope="scope">
            {{ scope.row.orderStatus }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Đúng nội dung')"
          align="center"
          prop="isActive"
          sortable
          width="130px"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.narractiveReconcile"
              class="tableTag"
              size="small"
              type="success"
              >{{ $t("Có") }}
            </el-tag>
            <el-tag v-else class="tableTag" size="small" type="danger"
              >{{ $t("Không") }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Xác nhận nội dung')"
          align="center"
          sortable
          width="230px"
        >
          <template slot-scope="scope" v-if="scope.row.confirmTransferHistory">
            <template
              v-if="scope.row.confirmTransferHistory.isCorrectTransfer == null"
            >
              <el-button
                class="btn-icon btn-light"
                plain
                size="mini"
                type="primary"
                @click="handleConfirmTransfer(scope.row.id, true)"
              >
                {{ $t("Đúng ND") }}
              </el-button>
              <el-button
                class="btn-icon btn-light"
                plain
                size="mini"
                type="danger"
                @click="handleConfirmTransfer(scope.row.id, false)"
              >
                {{ $t("Hoàn tiền") }}
              </el-button>
            </template>
            <template v-else>
              <el-button
                class="btn-icon btn-light"
                plain
                size="mini"
                :type="
                  scope.row.confirmTransferHistory.isCorrectTransfer 
                    ? 'primary'
                    : 'danger'
                "
                :disabled="true"
              >
                {{
                  scope.row.confirmTransferHistory.isCorrectTransfer
                    ? $t("Đúng ND")
                    : $t("Hoàn tiền")
                }}
              </el-button>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Biên lai chuyển tiền')"
          align="left"
          prop="transferReceiptUrl"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <a
                v-if="scope.row.transferReceiptUrl"
                @click.prevent="
                  downloadFile(
                    scope.row.transferReceiptUrl,
                    getFileNameFromUrl(scope.row.transferReceiptUrl)
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
  </div>
</template>

<script>
import {
  fetchList,
  getListExcel,
  confirmContentPayment,
} from "@/api/paymentHistory";
import { getForDropDown } from "@/api/tenant";
import { PaymentHistory } from "@/utils/app-permission.js";
import { OrderTypes } from "@/utils/enums";

export default {
  name: "PaymentHistoryList",
  data() {
    return {
      listLoading: false,
      total: 0,
      tenants: [],
      OrderTypes,
      downloadLoading: false,
      narractiveReconcile: [
        { label: "Có", value: true },
        { label: "Không", value: false },
      ],
      list: null,
      storageUrl: process.env.VUE_APP_STORAGE_FILE,
      paging: {
        page: 1,
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "descending",
        filterKeyword: "",
        transactionFreeText: "",
      },
      filterKeyword: "",
      transactionFreeText: "",
    };
  },
  computed: {
    isAllowView() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(
          PaymentHistory.PaymentHistory_GetList
        )
      );
    },
  },
  watch: {
    filter: {
      handler: function () {
        this.reloadData();
      },
      deep: true,
    },
  },
  created() {
    this.loadData();
    this.getForDropDown();
  },
  methods: {
    exportExcel() {
      this.exportExcelData(
        this,
        getListExcel,
        this.filter,
        "PaymentHistoryList",
        20
      );
    },
    getForDropDown() {
      getForDropDown().then((resp) => {
        this.tenants = resp.data.result;
        // let defaultTenantIndex = this.tenants.findIndex(
        //   (obj) => obj.value === 1
        // );
        // this.tenants[defaultTenantIndex].label = "DCVFM";
      });
    },
    loadData() {
      this.listLoading = true;
      fetchList({ ...this.filter, ...this.paging })
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
    handleSearch() {
      if (this.filterKeyword) this.handleFilterKeyword();
      if (this.transactionFreeText) this.handleTransactionFreeText();
    },
    handleFilterKeyword() {
      this.$set(this.filter, "filterKeyword", this.filterKeyword);
    },
    handleTransactionFreeText() {
      this.$set(this.filter, "transactionFreeText", this.transactionFreeText);
    },
    reloadData() {
      this.paging.page = 1;
      this.loadData();
    },
    handleConfirmTransfer(paymentHistoryId, isCorrectTransfer) {
      confirmContentPayment({ paymentHistoryId, isCorrectTransfer })
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
          this.reloadData();
        });
    },
    handleSort({ prop, order }) {
      if (!prop) return;
      this.filter.sortBy = prop;
      this.filter.sortDirection = order || "descending";
    },
  },
};
</script>
