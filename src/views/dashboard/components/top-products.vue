<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
      <h3 class="card-title">
        <h4>{{ cardTitle }}</h4>
        <span class="card-sub-label">More than 310+ new products</span>
      </h3>

      <div>
        <el-dropdown trigger="click">
          <el-button type="info" plain size="mini" class="btn-text">
            <i class="el-icon-download" />
          </el-button>
          <el-dropdown-menu slot="dropdown" class="w-abs-min-120">
            <el-dropdown-item>Excel</el-dropdown-item>
            <el-dropdown-item>CSV</el-dropdown-item>
            <el-dropdown-item>PDF</el-dropdown-item>
            <el-dropdown-item>Print</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="info" plain size="mini" class="btn-text ml-3">
          <i class="el-icon-more" />
        </el-button>
      </div>
    </el-row>
    <div class="p-0x">
      <el-table v-loading="listLoading" :data="list" fit stripe class="border-0 rounded-0">
        <el-table-column :label="$t('Name')" prop="name" sortable min-width="300px">
          <template slot-scope="scope">
            <div class="d-flex align-items-center">
              <s-avatar :name="scope.row.name" :size="40" :src="scope.row.avatar" />
              <span class="ml-4">
                <b class="d-block w-abs-200 text-ellipsis">{{ scope.row.name }}</b>
                <el-tooltip class="item" effect="dark" content="Product SKU" placement="bottom">
                  <small class="text-ellipsis">{{ scope.row.sku }}</small>
                </el-tooltip>
              </span>
            </div>
          </template>
        </el-table-column>

        <el-table-column :label="$t('Price')" width="110px" prop="price" sortable align="right">
          <template slot-scope="scope">
            <span>$ {{ scope.row.price | number('0,0') }}</span>
          </template>
        </el-table-column>

        <el-table-column :label="$t('Stock')" width="90px" prop="stock" sortable align="right">
          <template slot-scope="scope">
            <span>{{ scope.row.stock | number('0,0') }}</span>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Rating Avg')"
          width="120px"
          prop="reviewAvg"
          sortable
          align="left"
        >
          <template slot-scope="scope">
            <el-rate v-model="scope.row.reviewAvg" disabled disabled-void-color="#DEDEDE" />
          </template>
        </el-table-column>

        <el-table-column :label="$t('Status')" width="120px" prop="isActive" sortable>
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.isActive"
              type="success"
              size="small"
              class="rounded-pill"
            >Published</el-tag>
            <el-tag v-else type="danger" size="small" class="rounded-pill">Draft</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import { fetchList, fetchCategory, deleteItem } from "@/api/product";

export default {
  name: 'ProductList',
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

      productPostCategories: []
    }
  },
  created() {
    this.loadData()
    this.loadCategory()
  },
  methods: {
    loadCategory() {
      this.listLoading = true
      fetchCategory().then((response) => {
        this.productPostCategories = response.data.result
        this.listLoading = false
      })
    },

    loadData() {
      this.listLoading = true
      fetchList(this.filter).then((response) => {
        this.list = response.data.result.items
        this.total = response.data.result.total
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
      // this.$router.push({
      //   path: this.$route.path,
      //   query: { id: "" },
      // });
    },
    handleEdit(item) {
      // this.$router.push({
      //   path: this.$route.path,
      //   query: { id: item.id },
      // });
    },
    handleDelete(id) {
      // deleteItem(id)
      //   .then((response) => {
      //     if (response.data.success) {
      //       this.$message.success({
      //         title: "Alert",
      //         message: "Item deleted successfully",
      //         showClose: true,
      //       });
      //       this.reloadData();
      //     }
      //   })
      //   .catch((error) => {
      //     me.$message.error({
      //       title: "Alert",
      //       message: `${error}`,
      //       showClose: true,
      //     });
      //   });
    }
  }
}
</script>
<style lang="scss">
.el-rate__icon {
  margin-right: 0;
}
</style>
