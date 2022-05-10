<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-stretch">
        <h3 class="mb-3 card-title">
          <span class="card-label">{{$t("Sao kê hợp đồng")}}</span>
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
          <el-input
            v-model="filterKeyword"
            class="w-abs-260"
            :placeholder="$t('Tìm theo tên hoặc địa chỉ email')"
            clearable
            @clear="filter.filterKeyword = null"
            @keyup.enter.native="handleFilterKeyword"
          />
           <el-input
            v-model="filterPhoneNumber"
            class="w-abs-260 m-2"
            :placeholder="$t('Tìm theo số điện thoại')"
            clearable
            @clear="filter.phoneNumber = null"
            @keyup.enter.native="handleFilterKeyword"
          />
           <el-input
            v-model="filterCustomerId"
            class="w-abs-260"
            :placeholder="$t('Tìm theo mã khách hàng')"
            clearable
            @clear="filter.customerId = null"
            @keyup.enter.native="handleFilterKeyword"
          />
        </div>
        <div class="d-flex justify-content-end">
          <div class="m-2">
            <el-button plain type="success" @click="handleFilterKeyword">
              <i class="las la-search" />
              <span>{{ $t('Tìm kiếm') }}</span>
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
          sortable='custom'
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer"
              :title="scope.row.fullName"
            >{{ scope.row.fullName }}
            </div>
          </template>
        </el-table-column>
                <el-table-column
          :label="$t('Mã khách hàng')"
          prop="customerId"
          sortable='custom'
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer"
              :title="scope.row.customerId"
            >{{ scope.row.customerId }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Địa chỉ email')"
          align="left"
          prop="emailAddress"
          sortable='custom'
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span :title="scope.row.emailAddress">{{ scope.row.emailAddress }}</span>
            </div>
          </template>
        </el-table-column>
             <el-table-column
          :label="$t('Số điện thoại')"
          align="left"
          prop="phoneNumber"
          sortable='custom'
        >
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span :title="scope.row.phoneNumber">{{ scope.row.phoneNumber }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Chi tiết hợp đồng')"
          align="left"
          prop="signedContractUrl"
          sortable='custom'
        >
          <template slot-scope="scope">
            <a v-if="scope.row.signedContractUrl" target="_blank" class="c-blue" :href="`${storageUrl}/${scope.row.signedContractUrl}`">Xem tại đây</a>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày tạo hợp đồng')"
          align="center"
          prop="creationTime"
          sortable='custom'
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creationTime | date }}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column
          :label="$t('Thao tác')"
          align="center"
          fixed="right"
          width="150px"
        >
          <template slot-scope="scope">
            <el-button class="btn-icon btn-light" plain size="mini" type="primary" @click="handleEdit(scope.row)">
              <i class="el-icon-edit" />
            </el-button>
            <el-button class="btn-icon btn-light" plain size="mini" type="danger" @click="handleDelete(scope.row.id)">
              <i class="el-icon-delete" />
            </el-button>
          </template>
        </el-table-column> -->
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
import { fetchListOpenTrading as fetchList } from '@/api/esignHistory'

export default {
  name: 'ContactList',
  components: {
  },
  data() {
    return {
      listLoading: false,
      total: 0,
      list: null,
      // roleTypes: roleTypes,
      paging: {
        page: 1
      },
      filter: {
        rowsPerPage: 10,
        sortBy: 'id',
        sortDirection: 'descending',
        filterKeyword: ''
        // roleId: ''
      },
      filterKeyword: '',
      filterPhoneNumber: '',
      filterCustomerId: '',
      storageUrl: process.env.VUE_APP_STORAGE_FILE + '/userdocument'
    }
  },
  watch: {
    filter: {
      handler: function() {
        this.reloadData()
      },
      deep: true
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.listLoading = true
      fetchList({ ...this.filter, ...this.paging })
        .then((response) => {
          if (response.data.result) {
            this.list = response.data.result.items
            this.total = response.data.result.totalCount
          }
        })
        .catch(error => {
          if (error.response.data) {
            this.$message({
              type: 'error',
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true
            })
          }
        })
        .finally(() => {
          this.listLoading = false
        })
    },
    handleFilterKeyword() {
      this.$set(this.filter, 'filterKeyword', this.filterKeyword)
      this.$set(this.filter, 'customerId', this.filterCustomerId)
      this.$set(this.filter, 'phoneNumber', this.filterPhoneNumber)
    },
    reloadData() {
      this.paging.page = 1
      this.loadData()
    },
    handleSort({ prop, order }) {
      if (!prop) return
      this.filter.sortBy = prop
      this.filter.sortDirection = order || 'descending'
    },
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-table {
	td {
		vertical-align: top;
	}
}
</style>
