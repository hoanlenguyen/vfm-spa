<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Quỹ") }}</span>
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
            <div class="m-2">
              <el-button
                icon="el-icon-circle-plus-outline"
                size="medium"
                type="info"
                @click="handleCreate"
                v-if='isAllowCreate'
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
          <el-select
            v-model="filter.categoryId"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo danh mục')"
          >
            <el-option
              v-for="item in fundCategories"
              :key="item.id"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-input
            v-model="filterKeyword"
            :placeholder="$t('Tìm theo tên')"
            clearable
            @clear="filter.name = null"
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
          min-width="350px"
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
        <el-table-column
          :label="$t('Mã quỹ')"
          width="190px"
          prop="fundCode"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.fundCode }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Loại quỹ')"
          width="190px"
          prop="fundType"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ convertArrayToObj(fundTypes)[scope.row.fundType] }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Danh mục')"
          width="190px"
          prop="category.Name"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.categoryName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Linh hoạt')"
          width="100px"
          prop="isFlexibleTradingEnable"
          sortable
        >
          <template slot-scope="scope">
            <i
              v-if="scope.row.isFlexibleTradingEnable"
              type="success"
              class="el-icon-check"
            ></i>
          </template>
        </el-table-column>
        <el-table-column :label="$t('SIP')" prop="isSipTradingEnable" sortable>
          <template slot-scope="scope">
            <i
              v-if="scope.row.isSipTradingEnable"
              type="success"
              class="el-icon-check"
            ></i>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tối thiểu linh hoạt')"
          width="170px"
          prop="minLumpSumAmount"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.minLumpSumAmount | number("0,0") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tối thiểu SIP')"
          width="170px"
          prop="minSIPAmount"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.minSIPAmount | number("0,0") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mức độ rủi ro')"
          align="left"
          prop="riskLevel"
          sortable
          width="150px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.riskLevel }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mã ngân hàng linh hoạt')"
          align="left"
          prop="bankNormalCode"
          sortable
          width="210px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.bankNormalCode }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Mã ngân hàng SIP')"
          align="left"
          prop="bankSIPCode"
          sortable
          width="210px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.bankSIPCode }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày tạo')"
          align="center"
          prop="creationTime"
          sortable
          width="130px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creationTime | date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày NAV')"
          align="center"
          prop="navDate"
          width="150px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.navDate | date }}</span>
          </template>
        </el-table-column>
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
              v-if='isAllowDelete'
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

    <createOrUpdate @reloadData="reloadData" :isAllowCreate='isAllowCreate' :isAllowEdit='isAllowEdit'/>
  </div>
</template>

<script>
import { fetchList, deleteItem, getListExcel } from "@/api/fund";
import createOrUpdate from "./createOrUpdate";
import { FundTypes } from "@/utils/enums";
import { fetchForDropdown as fetchCategoryForDropdown } from "@/api/fundCategory";
import {Fund} from '@/utils/app-permission.js'
export default {
  name: "BannerList",
  components: { createOrUpdate },
  data() {
    return {
      listLoading: false,
      total: 0,
      list: null,
      paging: {
        page: 1,
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "descending",
        filterKeyword: "",
        bannerType: "",
      },
      filterKeyword: "",
      fundCategories: [],
      fundTypes: FundTypes,
      downloadLoading: false
    };
  },
  computed: {
    isAllowCreate() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(Fund.Fund_Create)
      );
    },
    isAllowEdit() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(Fund.Fund_Edit)
      );
    },
    isAllowDelete() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(Fund.Fund_Delete)
      );
    },
    isAllowView() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(Fund.Fund_GetList)
      );
    }
  },
  watch: {
    filter: {
      handler: function () {
        this.reloadData();
      },
      deep: true,
    },
  },
  mounted() {
    this.loadData();
    this.fetchCategoryForDropdown();
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
    handleFilterKeyword() {
      this.$set(this.filter, "name", this.filterKeyword);
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
        `${this.$t("Bạn có chắc muốn xóa quỹ này?")}`,
        `${this.$t("Cảnh báo")}`,
        {
          confirmButtonText: this.$t("Tiếp tục"),
          cancelButtonText: this.$t("Hủy"),
          type: "warning",
        }
      )
        .then(() => {
          deleteItem(id)
            .then((response) => {
              if (response.data.success) {
                this.$message({
                  type: "success",
                  message: `${this.$t("Xóa quỹ thành công")}`,
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
        })
        .catch((_) => {});
    },
    fetchCategoryForDropdown() {
      fetchCategoryForDropdown()
        .then((response) => {
          this.fundCategories = response.data.result;
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true,
          });
        });
    },
    exportExcel() {
      this.exportExcelData(this, getListExcel, this.filter, "Fund_List", 15);
    },
  },
};
</script>
