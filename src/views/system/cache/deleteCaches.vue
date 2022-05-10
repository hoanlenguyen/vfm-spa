<template>
  <div class="app-page">
    <el-row class="app-page-header" justify="space-between" align="middle" type="flex">
      <h3>Danh sách cache</h3>
      <div>
        <el-button
          type="danger"
          icon="el-icon-delete"
          @click="handleClearAll"
        >{{ $t('Xóa tất cả') }}</el-button>
      </div>
    </el-row>
    <el-row class="app-page-body">
      <div class="tableContainer">
        <div class="el-table-wrapper">
          <el-table
            v-loading="listLoading"
            :data="itemCache"
            size="mini"
            height="600px"
            fit
            stripe
            show-overflow-tooltip
            :default-sort="{prop: 'displayOrder', order: 'descending'}"
          >
            <el-table-column min-width="350px" :label="$t('Name')" sortable='custom'>
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column fixed="right" align="center" label="Actions" width="110px">
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  size="mini"
                  icon="el-icon-delete"
                  @click="handleClear(scope.row.name)"
                >{{$t('Xóa')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
import { getAllCaches, clearCache, clearAllCaches } from "@/api/caching";
export default {
  name: "",
  data() {
    return {
      itemCache: [],
      id: "",
      listLoading: true
    };
  },
  mounted() {
    this.loadData();
  },
  computed: {},
  methods: {
    loadData() {
      this.listLoading = true;
      getAllCaches()
        .then(response => {
          this.itemCache = response.data.result.items;
          this.id = this.itemCache.name;
        })
        .catch(error => {
        //this.$notify.error({
          //   title: "Thông báo",
          //   message: `Error: ${error.response.data.error.message}`,
          //   showClose: false
          // });
        })
        .finally(() => {
          this.listLoading = false;
        });
    },
    reloadData() {
      this.loadData();
    },

    handleClearAll() {
      clearAllCaches()
        .then(response => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: "Xóa danh mục thành công",
              showClose: false
            });
            this.loadData();
          }
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: `${error.response.data.error.message}`,
            showClose: false
          });
        });
    },
    handleClear(id) {
      clearCache(id)
        .then(response => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: "Xóa danh mục thành công",
              showClose: false
            });
            this.loadData();
          }
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: `${error.response.data.error.message}`,
            showClose: false
          });
        });
    }
  }
};
</script>
<style lang="stylesheet" lang="scss" scoped>
.headerContainer {
  margin: 10px 5px 20px 10px;
}
</style>