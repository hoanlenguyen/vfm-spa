<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-stretch">
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t('Beta launch feedback') }}</span>
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
            style="width:40rem"
            :placeholder="$t('Tìm theo tên, địa chỉ email hoặc màn hình')"
            clearable
            @clear="filter.filterKeyword = null"
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
          sortable
          width="200px"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis-1 pointer c-blue"
              :title="scope.row.fullName"
              @click.prevent="handleEdit(scope.row)"
            >{{ scope.row.fullName }}
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
          :label="$t('Màn hình')"
          align="left"
          prop="screenName"
          sortable
          width="150px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.screenName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Nội dung liên hệ')"
          align="left"
          prop="content"
          sortable
        >
          <template slot-scope="scope">
            <el-tooltip
              :open-delay="400"
              placement="bottom"
            >
              <div class="d-inline-block">
                <span class="text-ellipsis-5">{{ scope.row.content }}</span>
              </div>
              <template slot="content">
                <span class="d-block w-abs-max-600">{{ scope.row.content }}</span>
              </template>
            </el-tooltip>
          </template>
        </el-table-column>
    
        <el-table-column
          :label="$t('Ngày đăng')"
          align="center"
          prop="creationTime"
          sortable
          width="150px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creationTime | date }}</span>
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
import { fetchList, deleteItem } from '@/api/contact'
import createOrUpdate from './createOrUpdate'

export default {
  name: 'ContactList',
  components: {
    createOrUpdate
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
        filterKeyword: '',
        contactType:40,
        // roleId: ''
      },
      filterKeyword: '',
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
    handleEdit(item) {
      this.$router.push({
        path: this.$route.path,
        query: { id: item.id }
      })
    },
    handleDelete(id) {
      this.$confirm(
        `${this.$t('Bạn có chắc muốn xóa liên hệ này?')}`,
        `${this.$t('Cảnh báo')}`,
        {
          confirmButtonText: this.$t('Tiếp tục'),
          cancelButtonText: this.$t('Hủy'),
          type: 'warning'
        })
        .then(() => {
          deleteItem(id)
            .then((response) => {
              if (response.data.success) {
                this.$message({
                  type: 'success',
                  message: `${this.$t('Xóa liên hệ thành công')}`,
                  showClose: true
                })
                this.reloadData()
              }
            })
            .catch((error) => {
              if (error.response.data) {
                this.$message({
                  type: 'error',
                  message: `${error.response.data.error}`,
                  showClose: true
                })
              }
            })
        })
        .catch((_) => {})
    }
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
