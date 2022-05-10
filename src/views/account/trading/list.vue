<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Danh sách khách hàng") }}</span>
        </h3>
        <div
          class="d-flex flex-column flex-md-row align-items-stretch align-items-sm-center justify-content-end"
        >
          <div class="d-flex justify-content-end">
            <div class="m-2">
              <el-button
                size="medium"
                type="success"
                :disabled="!total"
                @click="exportExcel"
                :loading="downloadLoading"
                >{{ $t("Export excel") }}
              </el-button>
            </div>
            <div class="m-2">
              <el-button
                icon="el-icon-circle-plus-outline"
                size="medium"
                type="info"
                @click="handleCreate"
                v-if="isAllowCreate"
                >{{ $t("Tạo mới") }}
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
        <!--        <div class="m-2">-->
        <!--          <el-select-->
        <!--            v-model="filter.roleId"-->
        <!--            class="filter-item w-100"-->
        <!--            clearable-->
        <!--            filterable-->
        <!--            :placeholder="$t('Tìm theo loại thành viên')"-->
        <!--          >-->
        <!--            <el-option-->
        <!--              v-for="item in roleTypes"-->
        <!--              :key="item.id"-->
        <!--              :value="item"-->
        <!--              :label="item"-->
        <!--            />-->
        <!--          </el-select>-->
        <!--        </div>-->
        <div class="m-2">
          <el-date-picker
            v-model="filter.fromDate"
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
            v-model="filter.toDate"
            class="w-100"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            type="date"
            :placeholder="$t('Đến ngày')"
            clearable
          />
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
          <el-select
            v-model="filter.hasESignConsentLetter"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Trạng thái CCTT')"
          >
            <el-option
              v-for="item in booleanArrayValue"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
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
            @keyup.enter.native="handleSearch"
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
          :label="$t('Id')"
          align="left"
          prop="id"
          sortable="custom"
          width="150px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.customerId }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tên đầy đủ')"
          min-width="200px"
          prop="fullName"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis pointer c-blue d-inline-block"
              :title="`${scope.row.fullName}`"
              @click="handleEdit(scope.row)"
            >
              {{ scope.row.fullName }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Địa chỉ email')"
          align="left"
          prop="emailAddress"
          sortable="custom"
          width="270px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span :title="scope.row.emailAddress">{{
                scope.row.emailAddress
              }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Số DKSH')"
          align="left"
          prop="dkshNumber"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.dkshNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Số điện thoại')"
          align="left"
          prop="phoneNumber"
          sortable="custom"
          width="180px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.phoneNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày đăng ký')"
          align="center"
          prop="creationTime"
          sortable="custom"
          width="170px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creationTime | dateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày duyệt tài khoản')"
          align="center"
          prop="approveTime"
          sortable="custom"
          width="170px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.approveTime | dateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Người duyệt tài khoản')"
          align="center"
          prop="approvedOfAccountOpeningByName"
          sortable="custom"
          width="170px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.approvedOfAccountOpeningByName }}</span>
          </template>
        </el-table-column>
         <el-table-column
          :label="$t('Trạng thái CCTT')"
          align="center"
          prop="hasESignConsentLetter"
          sortable
          width="155px"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.hasESignConsentLetter"
              class="tableTag"
              size="small"
              type="success"
              >{{ $t("Có") }}
            </el-tag>
            <el-tag v-else class="tableTag" size="small" type="danger"
              >{{ $t("Chưa") }}
            </el-tag>
          </template>
        </el-table-column>         
        <el-table-column
          :label="$t('Kích hoạt')"
          align="center"
          prop="isActive"
          sortable="custom"
          width="125px"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.isActive"
              class="tableTag"
              size="small"
              type="success"
              >{{ $t("Hiện") }}
            </el-tag>
            <el-tag v-else class="tableTag" size="small" type="danger"
              >{{ $t("Ẩn") }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Thao tác')"
          align="center"
          fixed="right"
          width="120px"
        >
          <template slot-scope="scope">
            <el-button
              class="btn-icon btn-light"
              plain
              size="mini"
              type="primary"
              @click="handleEdit(scope.row)"
            >
              <i class="el-icon-edit" v-if="isAllowEdit" />
              <i class="el-icon-view" v-else-if="isAllowView" />
            </el-button>
            <!-- <el-button
              class="btn-icon btn-light"
              plain
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
              v-if="isAllowDelete"
            >
              <i class="el-icon-delete" />
            </el-button> -->
          </template>
        </el-table-column>
        <el-table-column :label="$t('Ternant')" align="center" width="120px">
          <template slot-scope="scope">
            <span>{{ scope.row.tenantName }}</span>
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

    <createOrUpdate
      @reloadData="reloadData"
      :isAllowEdit="isAllowEdit"
      :isAllowCreate="isAllowCreate"
    />
  </div>
</template>

<script>
import { fetchList, deleteItem, getAccountListExcel } from "@/api/account";
import createOrUpdate from "./createOrUpdate";
import { User } from "@/utils/app-permission.js";
import { getForDropDown } from "@/api/tenant";
import { booleanArrayValue } from '@/utils/enums'

export default {
  name: "CustomerList",
  components: { createOrUpdate },
  data() {
    return {
      listLoading: true,
      total: 0,
      list: null,
      paging: {
        page: 1,
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "desc",
        filterKeyword: "",
        userType: 10,
        accountFilterType: 50,
      },
      filterKeyword: "",
      filterCustomerId: "",
      downloadLoading: false,
      booleanArrayValue,
      tenants: [],
    };
  },
  computed: {
    isAllowCreate() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(User.User_Create)
      );
    },
    isAllowEdit() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(User.User_Edit)
      );
    },
    isAllowDelete() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(User.User_Delete)
      );
    },
    isAllowView() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(User.User_GetList)
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
      this.$set(this.filter, "filterKeyword", this.filterKeyword);
      this.$set(this.filter, "customerId", this.filterCustomerId);
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
    handleCreate() {
      this.$router.push({
        path: this.$route.path,
        query: { id: "" },
      });
    },
    handleEdit(item) {
      this.$router.push({
        path: this.$route.path,
        query: { id: item.id },
      });
    },
    handleDelete(id) {
      this.$confirm(
        `${this.$t("Bạn có chắc muốn xóa thành viên này?")}`,
        `${this.$t("Cảnh báo")}`,
        {
          confirmButtonText: this.$t("Tiếp tục"),
          cancelButtonText: this.$t("Hủy"),
          type: "warning",
        }
      ).then(() => {
        deleteItem(id)
          .then((response) => {
            if (response.data.success) {
              this.$message({
                type: "success",
                message: `${this.$t("Xóa thành viên thành công")}`,
                showClose: true,
              });
              this.reloadData();
            }
          })
          .catch((error) => {
            if (error.response) {
              this.$message({
                type: "error",
                message: `${error.response.data.error}`,
                showClose: true,
              });
            }
          });
      });
    },
    exportExcel() {
      let excelFilter = {
        sortBy: "id",
        sortDirection: "descending",
        accountType: 10,
        accountFilterType: 50,
        fromDate: this.filter.fromDate,
        toDate: this.filter.toDate,
        filterKeyword: this.filter.filterKeyword,
      };
      this.exportExcelData(
        this,
        getAccountListExcel,
        excelFilter,
        "Trading_Account_List",
        15
      );
    },
  },
};
</script>
