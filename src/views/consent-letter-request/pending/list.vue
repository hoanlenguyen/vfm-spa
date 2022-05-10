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
        <el-table-column
          :label="$t('Customer Id')"
          align="left"
          prop="customerId"
          width="150px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.customerId }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tên đầy đủ')"
          min-width="300px"
          prop="fullName"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span :title="scope.row.fullName">{{
                scope.row.fullName
              }}</span>
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
          :label="$t('ĐKSH')"
          align="left"
          prop="phoneNumber"
          sortable
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
        <el-table-column
          :label="$t('Ngày tạo yêu cầu')"
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
          :label="$t('RM gửi yêu cầu')"
          min-width="180px"
          prop="rmCode"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span :title="scope.row.rmCode">{{
                scope.row.rmCode
              }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Tổ chức')"
          min-width="180px"
          prop="bankName"
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span :title="scope.row.bankName">{{
                scope.row.bankName
              }}</span>
            </div>
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
              <i class="el-icon-view" v-else-if='isAllowView' />
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

    <createOrUpdate @reloadData="reloadData" :isAllowEdit='isAllowEdit'/>
  </div>
</template>

<script>
import { getConsentLetterRequestList } from "@/api/rm";
import createOrUpdate from "./createOrUpdate";
import { ConsentLetterStatus, GenderTypes } from "@/utils/enums";
import { User } from "@/utils/app-permission.js";
export default {
  name: "CustomerList",
  components: { createOrUpdate },
  data() {
    return {
      listLoading: true,
      total: 0,
      list: null,
      // roleTypes: roleTypes,
      paging: {
        page: 1
      },
      filter: {
        rowsPerPage: 10,
        sortBy: "CreationTime",
        sortDirection: "asc",
        filterKeyword: "",
        consentLetterStatus: ConsentLetterStatus.WaitingForApprove
      },
      filterKeyword: "",
      genderTypes: GenderTypes
    };
  },
  computed: {
    isAllowEdit() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(User.User_Edit)
      );
    },

    isAllowView() {
      return (
        this.$store.state.user &&
        this.$store.state.user.permissions &&
        this.$store.state.user.permissions.includes(User.User_GetList)
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
  },
  methods: {
    loadData() {
      this.listLoading = true;
      let query = {
        isRequestLevel: false
      };
      getConsentLetterRequestList({ ...this.filter, ...this.paging, ...query })
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
    handleSearch() {
      this.$set(this.filter, 'filterKeyword', this.filterKeyword)
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
        query: { id: item.id }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .el-table {
  td {
    vertical-align: top;
  }
}

.customizedHeader{
  font-size: 10px; 
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  width: 100%;
}
</style>

