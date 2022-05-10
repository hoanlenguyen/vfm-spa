<template>
  <div>
    <div class="card card-transparent">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <h3 class="card-title">
            <span>Dragable Table</span>
            <span class="card-sub-label">Easy manage all your customers with Stonehub</span>
          </h3>
        </div>
      </div>
      <div class="card-body p-0 rounded-md overflow-hidden shadow-sm">
        <el-table
          ref="dragTable"
          v-loading="listLoading"
          :data="list"
          row-key="id"
          border
          fit
          highlight-current-row
          class="border-0"
        >
          <el-table-column label="ID" width="80" sortable>
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column :label="$t('Name')" min-width="150px" prop="name" sortable>
            <template slot-scope="scope">
              <a :title="scope.row.name">{{ scope.row.name }}</a>
            </template>
          </el-table-column>

          <el-table-column :label="$t('Category')" width="250px" prop="categoryName" sortable>
            <template slot-scope="scope">
              <div class="w-max-100 text-ellipsis">
                <span>{{ scope.row.categoryName }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            :label="$t('Posted')"
            width="150px"
            prop="creationTime"
            sortable
            align="right"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.creationTime | date}}</span>
            </template>
          </el-table-column>

          <el-table-column
            :label="$t('Display Order')"
            width="150px"
            prop="displayOrder"
            sortable
            align="right"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.displayOrder | number('0,0') }}</span>
            </template>
          </el-table-column>

          <el-table-column :label="$t('Status')" width="120px" prop="isActive" sortable>
            <template slot-scope="scope">
              <el-tag
                type="success"
                size="small"
                class="rounded-pill"
                v-if="scope.row.isActive"
              >Published</el-tag>
              <el-tag type="danger" size="small" class="rounded-pill" v-else>Draft</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="card border-0 shadow-sm mt-5">
      <div class="table-container">
        <table class="table-default w-100 border-0">
          <tbody>
            <tr>
              <td style="width: 200px">{{ $t('table.dragTips1') }}</td>
              <td>{{ oldList }}</td>
            </tr>
            <tr>
              <td>{{ $t('table.dragTips2') }}</td>
              <td>{{ newList }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchList } from "@/api/blog";
import Sortable from "sortablejs";

export default {
  name: "DragTable",
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      filter: {
        page: 1,
        rowsPerPage: 10,
        sortBy: "",
        sortDirection: "",
        categoryId: null,
        keyword: "",
      },
      sortable: null,
      oldList: [],
      newList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      fetchList(this.filter).then((response) => {
        this.list = response.data.result.items;
        this.total = response.data.result.total;
        this.listLoading = false;

        this.oldList = this.list.map((v) => v.id);
        this.newList = this.oldList.slice();
        this.$nextTick(() => {
          this.setSort();
        });
      });
    },
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      this.sortable = Sortable.create(el, {
        ghostClass: "sortable-ghost", // Class name for the drop placeholder,
        setData: function (dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData("Text", "");
        },
        onEnd: (evt) => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0];
          this.list.splice(evt.newIndex, 0, targetRow);

          // for show the changes, you can delete in you code
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
          this.newList.splice(evt.newIndex, 0, tempIndex);
        },
      });
    },
  },
};
</script>

<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #1f84f4 !important;
}
</style>

<style scoped>
.icon-star {
  margin-right: 2px;
}
.drag-handler {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d {
  margin-top: 15px;
}
</style>
