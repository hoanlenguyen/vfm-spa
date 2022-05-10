<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Liên hệ") }}</span>
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
            :loading="downloadLoading"
            >{{ $t("Export excel") }}
          </el-button>
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.contactType"
            class="filter-item"
            clearable
            filterable
            :placeholder="$t('Tìm theo loại yêu cầu')"
          >
            <el-option
              v-for="item in contactTypes"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-input
            v-model="filterKeyword"
            class="w-abs-260"
            :placeholder="$t('Tìm theo tên hoặc địa chỉ email')"
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
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer c-blue"
              :title="scope.row.fullName"
              @click.prevent="handleEdit(scope.row)"
            >
              {{ scope.row.fullName }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Địa chỉ email')"
          align="left"
          prop="email"
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span :title="scope.row.email">{{ scope.row.email }}</span>
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
          :label="$t('Nội dung liên hệ')"
          align="left"
          min-width="300px"
          prop="content"
          sortable
        >
          <template slot-scope="scope">
            <el-tooltip :open-delay="400" placement="bottom">
              <div class="d-inline-block">
                <span class="text-ellipsis-5">{{ scope.row.content }}</span>
              </div>
              <template slot="content">
                <span class="d-block w-abs-max-600">{{
                  scope.row.content
                }}</span>
              </template>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Loại yêu cầu')"
          width="190px"
          prop="contactType"
          sortable
        >
          <template slot-scope="scope">
            <span v-if="scope.row.contactType">{{
              convertArrayToObj(contactTypes)[scope.row.contactType]
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày đăng')"
          align="left"
          prop="creationTime"
          sortable
          width="180px"
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
              <i class="el-icon-edit" v-if="isAllowEdit" />
              <i class="el-icon-view" v-else-if="isAllowView" />
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
    <createOrUpdate @reloadData="reloadData" :isAllowEdit="isAllowEdit" />
  </div>
</template>

<script>
import { fetchList, deleteItem, getListExcel } from "@/api/contact";
import createOrUpdate from "./createOrUpdate";
import { ContactTypes } from "@/utils/enums";
import { Contact } from "@/utils/app-permission.js";
import { buildExcel } from "@/utils/ExcelJsBuild";
import ExcelJS, { Workbook } from "exceljs";
import moment from "moment";
import _ from "lodash";

export default {
  name: "ContactList",
  components: {
    createOrUpdate,
  },
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
      contactTypes: ContactTypes,
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
  computed: {
    isAllowEdit() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(Contact.Contact_Edit)
      );
    },
    isAllowDelete() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(Contact.Contact_Delete)
      );
    },
    isAllowView() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(Contact.Contact_GetList)
      );
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
    handleDelete(id) {
      this.$confirm(
        `${this.$t("Bạn có chắc muốn xóa liên hệ này?")}`,
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
                  message: `${this.$t("Xóa liên hệ thành công")}`,
                  showClose: true,
                });
                this.reloadData();
              }
            })
            .catch((error) => {
              if (error.response.data) {
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
    async exportExcel() {
      this.downloadLoading = true;

      let getListExport = await getListExcel()
        .then((res) => res.data.result)
        .catch((err) => null);
      this.downloadLoading = false;
      getListExport = getListExport ?? [];
      const listConverted = getListExport.map((dc) => ({
        ...dc,
        // creationTime: moment(dc.creationTime).format("DD/MM/YYYY"),
        monthCreated:
          new Date(_.head(String(dc["Creation Time"]).split(" "))).getMonth() +
          1,
      }));
      const header = {
        "Creation Time": "NGÀY KH LIÊN HỆ",
        monthCreated: "THÁNG",
        "Full Name": "TÊN KH",
        "Phone Number": "SDT",
        Email: "EMAIL",
        // sourceType: "NGUỒN",
      };
      const bufferDownload = await buildExcel.build(header, listConverted, {
        title: "DANH SÁCH KHÁCH HÀNG LIÊN HỆ",
      });
      this.downloadBuffer(
        `Contact_List_${moment(new Date()).format("YYYYMMDD-HHmm")}.xlsx`,
        bufferDownload
      );
      // console.log(bufferDownload);
      // this.exportExcelData(this, getListExcel, this.filter, "Contact_List", 20);
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
