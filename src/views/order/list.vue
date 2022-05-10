<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Đặt lệnh") }}</span>
        </h3>
        <div
          class="d-flex flex-column flex-md-row align-items-stretch align-items-sm-center justify-content-end"
        >
          <div class="d-flex justify-content-end">
            <div class="m-2">
              <el-button
                size="medium"
                type="success"
                @click="exportExcel"
                :loading="downloadLoading"
                >{{ $t("Export excel") }}
              </el-button>
            </div>
          </div>
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
          <el-input
            v-model="filterKeyword"
            class="w-abs-400"
            :placeholder="$t('Tìm theo Mã lệnh/Mã khách hàng/Tên khách hàng')"
            clearable
            @clear="filter.filterKeyword = null"
            @keyup.enter.native="handleFilterKeyword"
          />
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.orderType"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo hình thức đầu tư')"
          >
            <el-option
              v-for="item in OrderTypes"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.srType"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo loại lệnh')"
          >
            <el-option
              v-for="item in SRTypes"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.orderStatus"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo trạng thái lệnh')"
          >
            <el-option
              v-for="item in OrderStatusTypes"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-autocomplete
            class="inline-input"
            v-model="fundSearch"
            :fetch-suggestions="querySearch"
            placeholder="Tìm theo mã CCQ"
            :debounce="100"
            clearable
            @select="
              (item) => {
                fundSearch = item.label;
                filter.fundId = item.value;
              }
            "
            @clear="
              filter.fundId = null;
              fundSearch = null;
            "
          >
            <template slot-scope="{ item }">
              <p>{{ item.label }}</p>
            </template>
          </el-autocomplete>
        </div>
        <div class="d-flex justify-content-end">
          <div class="m-2">
            <el-button plain type="success" @click="handleFilterKeyword">
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
          :label="$t('Mã lệnh')"
          prop="orderId"
          sortable
          width="180px"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer c-blue"
              :title="scope.row.orderId"
              @click.prevent="handleEdit(scope.row)"
            >
              {{ scope.row.orderId }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('STK VA')"
          prop="accountNumber"
          sortable
          width="190px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.accountNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mã khách hàng')"
          prop="customerId"
          sortable
          width="160px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.customerId }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Hình thức đầu tư')"
          prop="orderType"
          sortable
          width="170px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span>{{
                convertArrayToObj(OrderTypes)[scope.row.orderType]
              }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Loại lệnh')"
          prop="SRType"
          sortable
          width="140px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span>{{ convertArrayToObj(SRTypes)[scope.row.srType] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mã CCQ')"
          align="left"
          width="100px"
          prop="codeName"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.codeName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Giá trị')"
          align="right"
          width="160px"
          prop="amount"
          sortable
        >
          <template slot-scope="scope">
            <span>{{
              scope.row.amount
                | currency("đ", 0, {
                  symbolOnLeft: false,
                  thousandsSeparator: ".",
                })
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Khối lượng bán')"
          align="right"
          width="150px"
          prop="quantity"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.quantity }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Trạng thái lệnh')"
          align="center"
          prop="orderStatus"
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <el-tag
              class="tableTag"
              size="small"
              :type="getOrderStatusTypeTag(scope.row.orderStatus)"
            >
              <span>{{
                convertArrayToObj(OrderStatusTypes)[scope.row.orderStatus]
              }}</span>
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Tên khách hàng')"
          align="left"
          min-width="240px"
          prop="customerName"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.customerName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày đặt lệnh')"
          align="center"
          prop="creationTime"
          sortable
          width="180px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creationTime | dateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Cut-off Time')"
          align="center"
          prop="cutOffTime"
          sortable
          width="180px"
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
          :label="$t('Ngày cập nhật')"
          align="center"
          prop="lastModificationTime"
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.lastModificationTime | dateTime }}</span>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Thao tác')"
          align="center"
          fixed="right"
          width="150px"
        >
          <template slot-scope="scope">
            <el-button
              class="btn-icon btn-light"
              plain
              size="mini"
              type="primary"
              @click="handleEdit(scope.row)"
            >
              <i class="el-icon-view" />
            </el-button>
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
    <createOrUpdate @reloadData="reloadData" />
  </div>
</template>

<script>
import { fetchList, getOrderListExcel } from "@/api/order";
import { fetchCodesForDropdown as fetchFunds } from "@/api/fund";
import {
  OrderTypeList,
  OrderTypes,
  OrderStatusTypes,
  SRTypes,
} from "@/utils/enums";
import createOrUpdate from "./createOrUpdate";

export default {
  name: "OrderList",
  components: {
    createOrUpdate,
  },
  data() {
    return {
      fundSearch: null,
      listLoading: false,
      total: 0,
      list: [],
      funds: [],
      paging: {
        page: 1,
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "descending",
        filterKeyword: "",
        orderStatus: null,
        orderType: null,
        srType: null,
        fundId: null,
      },
      filterKeyword: "",
      OrderTypeList,
      OrderTypes,
      OrderStatusTypes,
      SRTypes,
      downloadLoading: false,
    };
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
    this.loadFunds();
  },
  methods: {
    loadFunds() {
      fetchFunds()
        .then((response) => {
          if (response.data.result) {
            this.funds = response.data.result;
          }
        })
        .catch((error) => {
          if (error.response.data) {
            this.$message({
              type: "error",
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true,
            });
          }
        });
    },
    querySearch(queryString, cb) {
      // queryString=queryString? queryString.toLowerCase():'';
      var results = queryString
        ? this.funds.filter((p) => p.label.includes(queryString))
        : this.funds;
      cb(results);
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
          if (error.response.data) {
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
    handleFilterKeyword() {
      this.$set(this.filter, "filterKeyword", this.filterKeyword);
      if (this.filter.filterKeyword == this.filterKeyword) this.loadData();
    },
    reloadData() {
      this.paging.page = 1;
      this.loadData();
    },
    handleSort({ prop, order }) {
      if (!prop) return;
      this.filter.sortBy = prop;
      this.filter.sortDirection = order || "descending";
    },
    handleEdit(item) {
      this.$router.push({
        path: this.$route.path,
        query: { id: item.id },
      });
    },
    getOrderStatusTypeTag(orderStatus) {
      const OrderTagTypes = {
        Success: "info",
        Pending: "warning",
        Rejected: "success",
      };

      orderStatus = String(orderStatus);

      switch (orderStatus) {
        case "2":
        case "14":
        case "20":
        case "21":
        case "8":
        case "A":
          return OrderTagTypes.Success;
        case "3":
        case "5":
        case "S":
        case "K":
        case "W":
          return OrderTagTypes.Pending;
        case "9":
        case "11":
        case "12":
        case "H":
        case "R":
        case "C":
        case "D":
        case "Z":
          return OrderTagTypes.Rejected;
        default:
          return OrderTagTypes.Pending;
      }
    },
    exportExcel() {
      this.exportExcelData(
        this,
        getOrderListExcel,
        this.filter,
        "Order_List",
        15
      );
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-table {
  td {
    vertical-align: top;
  }
}
</style>
