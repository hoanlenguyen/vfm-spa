<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <h3 class="card-title mb-3">
          <span class="card-label">{{ $t("Danh mục FAQ") }}</span>
        </h3>
        <div
          class="d-flex flex-column flex-md-row align-items-stretch align-items-sm-center justify-content-end"
        >
          <div class="d-flex justify-content-end">
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
        <div class="m-2">
          <el-input
            v-model="filterKeyword"
            class="w-abs-220"
            :placeholder="$t('Tìm theo tên')"
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
    <div class="card-body p-0">
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
          min-width="300px"
          prop="name"
          sortable
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer c-blue"
              :title="scope.row.name"
              @click.prevent="handleEdit(scope.row)"
            >
              {{ scope.row.name }}
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column
          :label="$t('Hiển thị trên trang chủ')"
          align="center"
          prop="isShowOnHomepage"
          sortable
          width="220px"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.isShowOnHomepage"
              class="tableTag"
              size="small"
              type="success"
            >{{ $t('Hiện') }}
            </el-tag>
            <el-tag
              v-else
              class="tableTag"
              size="small"
              type="danger"
            >{{ $t('Ẩn') }}
            </el-tag>
          </template>
        </el-table-column> -->
        <el-table-column
          :label="$t('Hiển thị')"
          align="center"
          prop="isActive"
          sortable
          width="105px"
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
          :label="$t('Thứ tự hiển thị')"
          align="center"
          prop="displayOrder"
          sortable
          width="160px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.displayOrder }}</span>
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
               <i class="el-icon-edit" v-if='isAllowEdit' />
               <i class="el-icon-view" v-else-if="isAllowView"/>
            </el-button>
            <el-button
              class="btn-icon btn-light"
              plain
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
              v-if="isAllowDelete"
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
      :isAllowCreate="isAllowCreate"
      :isAllowEdit="isAllowEdit"
    />
  </div>
</template>

<script>
import {
  fetchList,
  fetchParentForDropdown,
  deleteItem
} from "@/api/faqCategory";
import createOrUpdate from "./createOrUpdate";
import { FAQ } from "@/utils/app-permission.js";

export default {
  name: "FAQCategoryList",
  components: { createOrUpdate },
  data() {
    return {
      listLoading: false,
      isLoading: false,
      list: null,
      total: 0,
      isParentCategoryLoading: false,
      parentCategories: [],
      paging: {
        page: 1
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "descending",
        filterKeyword: "",
        parentId: null
      },
      filterKeyword: ""
    };
  },
  computed: {
    isAllowCreate() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(FAQ.FAQ_Create)
      );
    },
    isAllowEdit() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(FAQ.FAQ_Edit)
      );
    },
    isAllowDelete() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(FAQ.FAQ_Delete)
      );
    },
    isAllowView() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(FAQ.FAQ_GetList)
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
    // this.loadParentCategoryData()
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
    loadParentCategoryData() {
      this.isParentCategoryLoading = true;
      fetchParentForDropdown()
        .then(response => {
          if (response.data.result) {
            this.parentCategories = response.data.result;
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
          this.isParentCategoryLoading = false;
        });
    },
    reloadData() {
      this.paging.page = 1;
      this.loadData();
    },
    handleFilterKeyword() {
      this.$set(this.filter, "filterKeyword", this.filterKeyword);
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
    handleEdit(item) {
      this.$router.push({
        path: this.$route.path,
        query: { id: item.id }
      });
    },
    handleDelete(id) {
      this.$confirm(
        `${this.$t("Bạn có chắc muốn xóa danh mục này?")}`,
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
                  message: `${this.$t("Xóa danh mục thành công")}`,
                  showClose: true
                });
                this.reloadData();
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
            });
        })
        .catch(_ => {});
    }
  }
};
</script>
