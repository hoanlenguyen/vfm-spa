<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Danh sách khách hàng") }}</span>
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
          <el-button
            size="medium"
            type="success"
            @click="exportExcel"
            :disabled="!total"
            :loading="downloadLoading"
            >{{ $t("Export excel") }}
          </el-button>
        </div>
        <div class="m-2">
          <el-input
            v-model="filterKeyword"
            class="w-abs-400"
            :placeholder="
              $t('Tìm theo tên, số điện thoại, địa chỉ email, số DKSH')
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
        <!-- <el-table-column
          :label="$t('Customer ID')"
          align="left"
          prop="customerId"
          width="150px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.customerId }}</span>
          </template>
        </el-table-column> -->
        <el-table-column :label="$t('Họ tên')" width="300px" prop="fullName">
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
          :label="$t('Email')"
          align="left"
          prop="emailAddress"
          sortable="custom"
          width="300px"
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
          align="center"
          prop="phoneNumber"
          sortable="custom"
          width="300px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.phoneNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Số Dskh')"
          align="right"
          prop="dkshNumber"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.dkshNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày sinh')"
          align="center"
          prop="dateOfBirth"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.dateOfBirth | date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Giới tính')"
          align="center"
          prop="gender"
          sortable="custom"
          width="200px"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.gender">{{
              convertArrayToObj(genderTypes)[scope.row.gender]
            }}</span>
          </template>
        </el-table-column>
       
        <!-- <el-table-column
          :label="$t('Trạng thái')"
          align="center"
          prop="registerAction"
              sortable="custom"
          width="105px"
        >
          <template>
            <el-tag
              class="tableTag"
              size="small"
              type="danger"
            >{{ $t('Bị từ chối') }}
            </el-tag>
          </template>
        </el-table-column> -->
        <el-table-column
          :label="$t('Ngày tạo')"
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
            <!-- <el-button class="btn-icon btn-light" plain size="mini" type="danger" @click="handleDelete(scope.row.id)">
              <i class="el-icon-delete" />
            </el-button> -->
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
import { fetchList, GetListExcel } from "@/api/rejectedUser";
import createOrUpdate from "./createOrUpdate";
import { GenderTypes } from "@/utils/enums";
export default {
  name: "Manual-register",
  components: { createOrUpdate },
  data() {
    return {
      listLoading: true,
      total: 0,
      list: null,
      // roleTypes: roleTypes,
      paging: {
        page: 1,
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "desc",
        filterKeyword: "",
      },
      filterKeyword: "",
      genderTypes: GenderTypes,
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
  },
  methods: {
    loadData() {
      this.listLoading = true;
      let query = {
        isRequestLevel: true,
      };
      fetchList({ ...this.filter, ...this.paging, ...query })
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
        sortDirection: "desc",
        isRequestLevel: true,
        filterKeyword: this.filter.filterKeyword
      };
      this.exportExcelData(this, GetListExcel, excelFilter, "Rejected_Account_List", 15);
    },
  },
};
</script>
