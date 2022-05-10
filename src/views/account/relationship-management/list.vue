<template>
  <div class="card">
    <div class="card-header">
      <div
        class="
          d-flex
          flex-column flex-md-row
          justify-content-between
          align-items-stretch
        "
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Danh sách RM") }}</span>
        </h3>
        <div
          class="
            d-flex
            flex-column flex-md-row
            align-items-stretch align-items-sm-center
            justify-content-end
          "
        >
          <div class="d-flex justify-content-end">
            <div class="m-2">
              <a :href="getImportTemplateUrl" download>
                <el-button icon="el-icon-download" size="medium" type="primary">
                  {{ $t("Download import excel template") }}
                </el-button>
              </a>
            </div>
            <div class="m-2">
              <el-button
                icon="el-icon-circle-plus-outline"
                size="medium"
                type="primary"
                @click="importExcel"
                >{{ $t("Import excel") }}
              </el-button>
            </div>
            <div class="m-2">
              <el-button
                icon="el-icon-download"
                size="medium"
                type="success"
                :disabled="!total"
                :loading="downloadLoading"
                @click="exportExcel"
                >{{ $t("Export excel") }}
              </el-button>
            </div>
            <div class="m-2">
              <el-button
                v-if="isAllowCreate"
                icon="el-icon-circle-plus-outline"
                size="medium"
                type="info"
                @click="handleCreate"
                >{{ $t("Tạo mới") }}
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            v-model="filter.isActive"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo trạng thái')"
          >
            <el-option
              v-for="item in activeLables"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-input
            v-model="filterKeyword"
            style="width: 60rem"
            :placeholder="
              $t(
                'Tìm theo tên, số điện thoại, địa chỉ email, mã RM, mã/tên vùng, mã/tên chi nhánh'
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
          :label="$t('Mã RM')"
          align="left"
          prop="id"
          sortable
          width="150px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.rmCode }}</span>
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
              :title="`${scope.row.name}`"
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
          sortable
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
          :label="$t('Số điện thoại')"
          align="left"
          prop="phoneNumber"
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.phoneNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mã CN')"
          align="left"
          prop="rmBranchCode"
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.rmBranchCode }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tên CN')"
          align="left"
          prop="rmBranchCode"
          width="200px"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.rmBranchName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mã Vùng')"
          align="left"
          width="200px"
          prop="rmAreaCode"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.rmAreaCode }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tên Vùng')"
          align="left"
          width="200px"
          prop="rmAreaCode"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.rmAreaName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày đăng ký')"
          align="center"
          prop="creationTime"
          sortable
          width="170px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creationTime | dateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Trạng thái RM')"
          align="center"
          prop="isActive"
          sortable
          width="180px"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.isActive"
              class="tableTag"
              size="small"
              type="success"
              >{{ $t("Hoạt động") }}
            </el-tag>
            <el-tag v-else class="tableTag" size="small" type="danger"
              >{{ $t("Không hoạt động") }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ghi chú')"
          align="center"
          prop="rmNote"
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.rmNote }}</span>
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
              <i v-if="isAllowEdit" class="el-icon-edit" />
              <i v-else-if="isAllowView" class="el-icon-view" />
            </el-button>
            <el-button
              v-if="isAllowDelete"
              class="btn-icon btn-light"
              plain
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
            >
              <i class="el-icon-delete" />
            </el-button>
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
      :is-allow-edit="isAllowEdit"
      :is-allow-create="isAllowCreate"
      @reloadData="reloadData"
    />
    <importFromExcel @reloadData="reloadData" />
  </div>
</template>

<script>
import { fetchList, deleteItem, getExportExcel } from "@/api/rm";
import createOrUpdate from "./createOrUpdate";
import importFromExcel from "./importFromExcel";
import { User } from "@/utils/app-permission.js";
import { ActiveLables } from '@/utils/enums'

export default {
  name: "CustomerList",
  components: { createOrUpdate, importFromExcel },
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
      baseUrl: process.env.VUE_APP_STORAGE_FILE,
      activeLables: ActiveLables
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
    getImportTemplateUrl() {
      return `${this.baseUrl}/userdocument/DCVFM/DCVFM_RM_Import_Template.xlsx`;
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
  },
  methods: {
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
    importExcel() {
      this.$router.push({
        path: this.$route.path,
        query: { import: "excel" },
      });
    },
    exportExcel() {
      const excelFilter = {
        sortBy: "id",
        sortDirection: "descending",
        accountType: 10,
        accountFilterType: 50,
        fromDate: this.filter.fromDate,
        toDate: this.filter.toDate,
        filterKeyword: this.filter.filterKeyword,
      };
      this.exportExcelData(this, getExportExcel, excelFilter, "RM_List", 15);
    },
  },
};
</script>
