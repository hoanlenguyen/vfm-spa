<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Sao kê hợp đồng") }}</span>
        </h3>
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
            v-model="filterFromDate"
            class="w-100"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            type="date"
            :placeholder="$t('Từ ngày')"
            clearable
          />
        </div>
        <div class="m-2">
          <el-date-picker
            v-model="filterToDate"
            class="w-100"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            type="date"
            :placeholder="$t('Đến ngày')"
            clearable
          />
        </div>
        <div class="m-2">
          <el-button
            size="medium"
            type="success"
            @click="exportExcel"
            :loading="downloadLoading"
            >{{ $t("Export Danh sách Esign") }}
          </el-button>
        </div>
        <div class="m-2">
          <el-input
            v-model="filterKeyword"
            style="width: 53rem"
            :placeholder="
              $t(
                'Tìm theo tên, số điện thoại, địa chỉ email, mã khách hàng, số DKSH'
              )
            "
            clearable
            @clear="filter.filterKeyword = null"
            @keyup.enter.native="handleFilterKeyword"
          />
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
          :label="$t('Tên')"
          prop="fullName"
          sortable="custom"
          width="300px"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer"
              :title="scope.row.fullName"
            >
              {{ scope.row.fullName }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mã khách hàng')"
          prop="customerId"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer"
              :title="scope.row.customerId"
            >
              {{ scope.row.customerId }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Hợp đồng mở tk')"
          align="left"
          prop="signedContractUrl"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <a
                v-if="scope.row.signedContractUrl"
                @click.prevent="
                  downloadFile(
                    scope.row.signedContractUrl,
                    `SignedContract_${scope.row.customerId}.pdf`
                  )
                "
                >Download</a
              >
            </div>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Phiếu Online trading')"
          align="left"
          prop="signedVfITradeContractUrl"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <a
                v-if="scope.row.signedVfITradeContractUrl"
                @click.prevent="
                  downloadFile(
                    scope.row.signedVfITradeContractUrl,
                    `VFiTrade_${scope.row.customerId}.pdf`
                  )
                "
                >Download</a
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Phiếu Đề nghị cung cấp TT')"
          align="left"
          prop="signedProvideInformationUrl"
          sortable="custom"
          width="220px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <el-dropdown
                v-if="
                  activeProvideRow != scope.row.id &&
                  scope.row.provideInformationHistories &&
                  scope.row.provideInformationHistories.length > 1
                "
                trigger="click"
              >
                <el-button plain size="mini">
                  <i
                    title="Xem thêm"
                    class="el-icon-more"
                    style="cursor: pointer; color: blue"
                  ></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="(item, index) in scope.row
                      .provideInformationHistories"
                    :key="index"
                  >
                    <div
                      @click.prevent="
                        downloadFile(
                          getFullUrl(item.provideInformationUrl),
                          `DCVFM_PartnerProvideInfo_${scope.row.customerId}.pdf`
                        )
                      "
                    >
                      <a class="mb-2">Download</a>
                      Đối tác:
                      <span>{{ item.partnerName }}</span>
                    </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

              <a
                class="mr-5"
                v-else-if="
                  scope.row.signedProvideInformationUrl &&
                  activeProvideRow != scope.row.id
                "
                @click.prevent="
                  downloadFile(
                    getFullUrl(scope.row.signedProvideInformationUrl),
                    `DCVFM_PartnerProvideInfo_${scope.row.customerId}.pdf`
                  )
                "
                >Download</a
              >

              <div v-show="activeProvideRow == scope.row.id">
                <p class="pb-4"></p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Phiếu Đề nghị cung cấp TT')"
          align="left"
          prop="signedProvideInformationUrl"
          sortable="custom"
          width="220px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <a
                v-if="scope.row.signedProvideInformationUrl"
                @click.prevent="
                  downloadFile(
                    getFullUrl(scope.row.signedProvideInformationUrl),
                    `DCVFM_PartnerProvideInfo_${scope.row.customerId}.pdf`
                  )
                "
                >Download</a
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Phiếu thay đổi TT')"
          align="left"
          prop="changingInformationFormUrl"
          sortable="custom"
          width="220px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <el-dropdown
                v-if="
                  activeRow != scope.row.id &&
                  scope.row.changeUserInformationHistories &&
                  scope.row.changeUserInformationHistories.length > 1
                "
                trigger="click"
              >
                <el-button plain size="mini">
                  <i
                    title="Xem thêm"
                    class="el-icon-more"
                    style="cursor: pointer; color: blue"
                  ></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="(item, index) in scope.row
                      .changeUserInformationHistories"
                    :key="index"
                  >
                    <a
                      @click.prevent="
                        downloadFile(
                          getFullUrl(item.changingInformationFormUrl),
                          `ChangingInformation_${scope.row.customerId}.pdf`
                        )
                      "
                      class="mb-2"
                      >Download</a
                    >
                    Ngày duyệt:
                    <span>{{ item.approvedTime | dateTime }}</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <a
                class="mr-5"
                v-else-if="
                  scope.row.changingInformationFormUrl &&
                  activeRow != scope.row.id
                "
                @click.prevent="
                  downloadFile(
                    getFullUrl(scope.row.changingInformationFormUrl),
                    `ChangingInformation_${scope.row.customerId}.pdf`
                  )
                "
                >Download</a
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Đối tác')"
          align="left"
          sortable="custom"
          prop="shortPartnerName"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer"
              :title="scope.row.shortPartnerName"
            >
              {{ scope.row.shortPartnerName }}
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
import { fetchList, getESignHistoryExcel } from "@/api/customerForms";

export default {
  name: "CustomerForms",
  components: {},
  data() {
    return {
      listLoading: false,
      total: 0,
      list: null,
      // roleTypes: roleTypes,
      paging: {
        page: 1,
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "descending",
        filterKeyword: "",
        // roleId: ''
      },
      filterKeyword: "",
      filterPhoneNumber: "",
      filterCustomerId: "",
      filterFromDate: null,
      filterToDate: null,
      storageUrl: process.env.VUE_APP_STORAGE_FILE + "/userdocument",
      downloadLoading: false,
      activeRow: "",
      activeProvideRow: "",
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
  },
  methods: {
    testClick(v) {
      console.log(v);
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
      this.$set(this.filter, "customerId", this.filterCustomerId);
      this.$set(this.filter, "phoneNumber", this.filterPhoneNumber);
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
    getFileNameFromUrl(url) {
      var array = url.split("/");
      return array.pop();
    },
    exportExcel() {
      let excelFilter = {
        sortBy: "id",
        sortDirection: "descending",
        phoneNumber: this.filterPhoneNumber,
        customerId: this.filterCustomerId,
        fromDate: this.filterFromDate,
        toDate: this.filterToDate,
      };
      this.exportExcelData(
        this,
        getESignHistoryExcel,
        excelFilter,
        "ESign_history",
        20
      );
    },
    rowClicked(row) {
      this.$refs.myTableData.toggleRowExpansion(row);
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

.customizedHeader {
  font-size: 10px;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  width: 100%;
}

.customizeCollapse * {
  background-color: transparent !important;
}
</style>
