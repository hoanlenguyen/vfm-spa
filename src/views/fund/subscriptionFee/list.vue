<template>
  <div class="card">
    <div class="card-header">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-stretch"
      >
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
                >{{ $t("Tạo mới") }}
              </el-button>
            </div>
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
          :label="$t('Hình thức đầu tư')"
          width="400px"
          prop="orderType"
          sortable
        >
          <template slot-scope="scope">
            <div class="w-max-100" :title="scope.row.orderType">
              <el-radio v-model="scope.row.orderType" :label="0"
                >Linh Hoạt</el-radio
              >
              <el-radio v-model="scope.row.orderType" :label="10"
                >iSaving</el-radio
              >
            </div>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Từ ngày thứ')"
          width="200px"
          prop="from"
          sortable
        >
          <template slot-scope="scope">
            <div class="w-max-100" :title="scope.row.from">
              <el-input v-model="scope.row.from" type="number" />
            </div>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Đến ngày thứ')"
          width="200px"
          prop="to"
          sortable
        >
          <template slot-scope="scope">
            <div class="w-max-100" :title="scope.row.to">
              <el-input v-model="scope.row.to" type="number" />
            </div>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('% Phí (0-1)')"
          width="200px"
          prop="interestRate"
          sortable
        >
          <template slot-scope="scope">
            <div class="w-max-100" :title="scope.row.interestRate">
              <el-input :min="0" :max="1" v-model.number="scope.row.interestRate" type="number" />
            </div>
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('Thao tác')"
          align="center"
          fixed="right"
          width="auto"
        >
          <template slot-scope="scope">
            <el-button
              class="btn-icon btn-light"
              plain
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index)"
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
        class="pagination"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "fundComponentList",
  props: ["list"],
  components: {},
  data() {
    return {
      listLoading: false,
      total: 0,
      model: {},
      defaltModel: {
        orderType: 0,
        to: null,
        from: null,
        interestRate: ""
      },
      paging: {
        page: 1
      },
      funds: [],
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "descending",
        filterKeyword: ""
      },
      filterKeyword: ""
    };
  },
  watch: {},
  created() {},
  methods: {
    handleSort({ prop, order }) {
      if (!prop) return;
      this.filter.sortBy = prop;
      this.filter.sortDirection = order || "descending";
    },
    handleCreate() {
      this.$emit("update:list", [{ ...this.defaultModel }, ...this.list]);
    },
    handleEdit(item) {
      this.$refs.createOrUpdate.handleShowDialog(item.id);
    },
    handleDelete(index) {
      const arr = [...this.list];
      arr.splice(index, 1);
      this.$emit("update:list", arr);
    }
  }
};
</script>
<style lang="scss" scoped>
.card .pagination {
  justify-content: center !important;
}
</style>
