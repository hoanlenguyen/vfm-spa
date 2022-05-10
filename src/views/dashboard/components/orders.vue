<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
      <h3 class="card-title">
        <h4>{{ cardTitle }}</h4>
        <span class="card-sub-label">More than 310+ new orders</span>
      </h3>

      <div class="hidden-sm-and-down">
        <el-button
          size="mini"
          type="success"
          class="btn-icon btn-light"
          :plain="groupButtonSaleByCategory != 'Month'"
          @click.prevent="handelButtonGroupClick('Month')"
        >Month</el-button>
        <el-button
          size="mini"
          type="success"
          class="btn-icon btn-light"
          :plain="groupButtonSaleByCategory != 'Week'"
          @click.prevent="handelButtonGroupClick('Week')"
        >Week</el-button>
        <el-button
          size="mini"
          type="success"
          class="btn-icon btn-light"
          :plain="groupButtonSaleByCategory != 'Day'"
          @click.prevent="handelButtonGroupClick('Day')"
        >Day</el-button>
      </div>
    </el-row>
    <div class="p-0x">
      <el-table
        v-loading="listLoading"
        :data="list"
        fit
        class="border-0 rounded-0"
        show-overflow-tooltip
        @sort-change="handleSort"
      >
        <el-table-column label="Order ID" sortable width="120px">
          <template slot-scope="scope">
            <a>#{{ scope.row.id }}</a>
          </template>
        </el-table-column>

        <el-table-column :label="$t('Date')" prop="date" sortable width="140px">
          <template slot-scope="scope">{{ scope.row.date | shortDateTime }}</template>
        </el-table-column>

        <el-table-column :label="$t('Customer')" prop="customer" sortable align="left">
          <template slot-scope="scope">
            <div class="d-flex align-items-center">
              <s-avatar
                :name="scope.row.customer"
                fit="cover"
                :size="40"
                :src="scope.row.avatar"
                @error="errorHandler"
              />
              <span class="ml-4">
                <b class="d-block text-ellipsis w-abs-max-360">{{ scope.row.customer }}</b>
                <small class="d-inline-block text-ellipsis w-abs-max-360">{{ scope.row.email }}</small>
              </span>
            </div>
          </template>
        </el-table-column>

        <el-table-column :label="$t('Total')" prop="total" sortable width="100px">
          <template slot-scope="scope">
            <span>$ {{ scope.row.total | number('0,0') }}</span>
          </template>
        </el-table-column>

        <el-table-column :label="$t('Status')" prop="isActive" sortable width="120px">
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.isActive"
              type="success"
              size="small"
              class="rounded-pill"
            >Delivered</el-tag>
            <el-tag v-else type="warning" size="small" class="rounded-pill">On Hold</el-tag>
          </template>
        </el-table-column>

        <el-table-column fixed="right" align="center" label="Actions" width="160px">
          <template>
            <el-tooltip class="item" effect="dark" content="Mark as Delivered" placement="bottom">
              <el-button type="primary" size="mini" plain class="btn-icon btn-light">
                <i class="el-icon-truck" />
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Send Invoice" placement="bottom">
              <el-button type="info" size="mini" plain class="btn-icon btn-light">
                <i class="el-icon-s-ticket" />
              </el-button>
            </el-tooltip>
            <el-dropdown trigger="click">
              <el-button type="success" plain class="btn-icon btn-light" size="mini">
                <i class="el-icon-more" />
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-view" command="edit">Order Details</el-dropdown-item>
                <el-dropdown-item icon="el-icon-truck">Mark as Delivered</el-dropdown-item>
                <el-dropdown-item icon="el-icon-money">Mark as Paid</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-ticket">Send Invoice</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete" divided>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { fetchList, fetchCategory, deleteItem } from '@/api/order'

export default {
  name: 'Orders',
  components: {},
  props: {
    cardTitle: {
      type: String,
      default: 'Orders History'
    },
    itemLimit: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      filter: {
        page: 1,
        rowsPerPage: this.itemLimit,
        sortBy: '',
        sortDirection: '',
        categoryId: null,
        keyword: ''
      },
      list: null,
      total: 0,
      listLoading: true,

      blogPostCategories: [],
      statusList: [
        { id: 0, name: 'On Hold' },
        { id: 1, name: 'Delivered' }
      ],

      groupButtonSaleByCategory: 'Month'
    }
  },
  created() {
    // this.loadData()
    // this.loadCategory()
  },
  methods: {
    loadCategory() {
      this.listLoading = true
      fetchCategory().then((response) => {
        this.blogPostCategories = response.data.result
        this.listLoading = false
      })
    },

    loadData() {
      this.listLoading = true
      fetchList(this.filter)
	      .then((response) => {
	        this.list = response.data.result.items
	        this.total = response.data.result.total
	      })
	      .catch(err => { console.log(err) })
		    .finally(() => {
			    this.listLoading = false
		    })
    },

    reloadData() {
      this.filter.page = 1
      this.loadData()
    },

    handleSort(val) {
      if (!val.prop) return
      this.filter.sortBy = val.prop
      this.filter.sortDirection = val.order
      this.loadData()
    },

    handleSearch() {
      this.filter.page = 1
      this.loadData()
    },

    handleCreate() {
      this.$router.push({
        path: this.$route.path,
        query: { id: '' }
      })
    },
    handleEdit(item) {
      this.$router.push({
        path: this.$route.path,
        query: { id: item.id }
      })
    },
    handleDelete(id) {
      deleteItem(id)
        .then((response) => {
          if (response.data.success) {
            this.$message.success({
              title: 'Alert',
              message: 'Item deleted successfully',
              showClose: true
            })
            this.reloadData()
          }
        })
        .catch((error) => {
          me.$message.error({
            title: 'Alert',
            message: `${error}`,
            showClose: true
          })
        })
    },
    handelButtonGroupClick(buttonName) {
      this.groupButtonSaleByCategory = buttonName
    },
    errorHandler() {
      return true
    }
  }
}
</script>
