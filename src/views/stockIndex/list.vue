<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Chỉ số thị trường") }}</span>
        </h3>
        <div
          class="d-flex flex-column flex-md-row align-items-stretch align-items-sm-center justify-content-end"
        >
          <div class="d-flex justify-content-end">
            <div class="m-2">
              <el-button
                icon="el-icon-circle-plus-outline"
                size="medium"
                type="primary"
                @click="handleImportExcel"
                >{{ $t("Import excel") }}
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
        <div class="mt-2">
          <el-date-picker
            v-model="filter.date"
            class="w-100"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            type="date"
            :placeholder="$t('Tìm theo ngày')"
            clearable
          />
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.stockIndexTypeId"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo loại chỉ số thị trường')"
          >
            <el-option
              v-for="item in stockIndexTypes"
              :key="item.id"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
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
          :label="$t('Loại chỉ số thị trường')"
          width="300px"
          prop="stockIndexTypeName"
          sortable
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer c-blue"
              :title="scope.row.stockIndexTypeName"
              @click.prevent="handleEdit(scope.row)"
            >
              {{ scope.row.stockIndexTypeName }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Giá trị')"
          align="right"
          prop="value"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.value }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tăng giảm')"
          align="right"
          prop="changePercent"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.changePercent }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Vào ngày')"
          align="center"
          prop="date"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.date | date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Thao tác')"
          align="center"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button
              class="btn-icon btn-light"
              plain
              size="mini"
              type="primary"
              @click="handleEdit(scope.row)"
             
            >
             <i class="el-icon-edit" v-if='isAllowEdit' />
              <i class="el-icon-view" v-else-if="isAllowView"/>
            </el-button>
            <el-button
              class="btn-icon btn-light"
              plain
              size="mini"
              type="danger"
              v-if="isAllowDelete"
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
      @reloadData="reloadData"
      :isAllowEdit="isAllowEdit"
      :isAllowCreate="isAllowCreate"
    />
    <importFromExcel @reloadData="reloadData" />
  </div>
</template>

<script>
import { fetchList, deleteItem } from "@/api/stockIndex";
import createOrUpdate from "./createOrUpdate";
import importFromExcel from "./importFromExcel";
import { fetchForDropdown } from "@/api/stockIndexType";
import { StockIndex } from "@/utils/app-permission.js";

export default {
  name: "stockIndexList",
  components: { createOrUpdate, importFromExcel },
  data() {
    return {
      listLoading: false,
      total: 0,
      list: null,
      stockIndexTypes: [],
      paging: {
        page: 1
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "descending",
        filterKeyword: ""
      },
      filterKeyword: ""
    };
  },
  computed: {
    isAllowCreate() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(
          StockIndex.StockIndex_Create
        )
      );
    },
    isAllowEdit() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(StockIndex.StockIndex_Edit)
      );
    },
    isAllowDelete() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(
          StockIndex.StockIndex_Delete
        )
      );
    },
    isAllowView() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(
          StockIndex.StockIndex_GetList
        )
      );
    }
  },
  watch: {
    filter: {
      handler: function() {
        this.reloadData();
      },
      deep: true
    }
  },
  created() {
    this.loadData();
    this.fetchForDropdown();
  },
  methods: {
    loadData() {
      this.listLoading = true;
      fetchList({ ...this.filter, ...this.paging })
        .then(response => {
          if (response.data.result) {
            this.list = response.data.result.items;
            this.total = response.data.result.totalCount;
          }
        })
        .catch(error => {
          if (error.response) {
            this.$message({
              type: "error",
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true
            });
          }
        })
        .finally(() => {
          this.listLoading = false;
        });
    },
    handleFilterKeyword() {
      this.$set(this.filter, "filterKeyword", this.filterKeyword);
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
        query: { id: "" }
      });
    },
    handleImportExcel() {
      this.$router.push({
        path: this.$route.path,
        query: { import: "excel" }
      });
    },
    handleEdit(item) {
      this.$router.push({
        path: this.$route.path,
        query: { id: item.id }
      });
    },
    fetchForDropdown() {
      fetchForDropdown()
        .then(response => {
          this.stockIndexTypes = response.data.result;
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true
          });
        });
    },
    handleDelete(id) {
      this.$confirm(
        `${this.$t("Bạn có chắc muốn xóa loại quỹ này?")}`,
        `${this.$t("Cảnh báo")}`,
        {
          confirmButtonText: this.$t("Tiếp tục"),
          cancelButtonText: this.$t("Hủy"),
          type: "warning"
        }
      )
        .then(() => {
          deleteItem(id)
            .then(response => {
              if (response.data.success) {
                this.$message({
                  type: "success",
                  message: `${this.$t("Xóa thành công")}`,
                  showClose: true
                });
                this.reloadData();
              }
            })
            .catch(error => {
              if (error.response) {
                this.$message({
                  type: "error",
                  message: `${error.response.data.error}`,
                  showClose: true
                });
              }
            });
        })
        .catch(_ => {});
    }
  }
};
</script>
