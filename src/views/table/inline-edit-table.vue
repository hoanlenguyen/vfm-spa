<template>
  <div class="card card-transparent">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="card-title">
          <span>Inline Editing</span>
          <span
            class="card-sub-label"
          >In numerous scenarios there's a requirement not only to visualize data in a table structure, but to have the ability to manipulate this data and save changes. The Stonehub table widget supports data editing operations via a simple configuration</span>
        </h3>
      </div>
    </div>

    <div class="card-body p-0 rounded-md overflow-hidden shadow-sm">
      <el-table v-loading="listLoading" :data="list" fit class="border-0">
        <el-table-column label="ID" width="80" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
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

        <el-table-column min-width="300px" label="Title">
          <template slot-scope="{row}">
            <template v-if="row.edit">
              <el-input v-model="row.name" class="edit-input" size="small" />
            </template>
            <span v-else>{{ row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="Actions" width="250">
          <template slot-scope="{row}">
            <el-button
              @click="confirmEdit(row)"
              v-if="row.edit"
              type="success"
              size="mini"
              class="btn-icon btn-light"
            >
              <i class="el-icon-check"></i>
              <span>Update</span>
            </el-button>

            <el-button
              @click="cancelEdit(row)"
              v-if="row.edit"
              type="warning"
              size="mini"
              class="btn-icon btn-light"
            >
              <i class="el-icon-close"></i>
              <span>Cancel</span>
            </el-button>

            <el-button
              @click="row.edit=!row.edit"
              v-else
              type="primary"
              size="mini"
              class="btn-icon btn-light"
            >
              <i class="el-icon-edit"></i>
              <span>Edit</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { fetchList } from "@/api/blog";

export default {
  name: "InlineEditTable",
  data() {
    return {
      list: null,
      listLoading: true,
      filter: {
        page: 1,
        rowsPerPage: 10,
        sortBy: "",
        sortDirection: "",
        categoryId: null,
        keyword: "",
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      fetchList(this.filter).then((response) => {
        const items = response.data.result.items;
        this.list = items.map((v) => {
          this.$set(v, "edit", false); // https://vuejs.org/v2/guide/reactivity.html
          v.originalTitle = v.name; //  will be used when user click the cancel botton
          return v;
        });
        this.listLoading = false;
      });

      const { data } = await fetchList(this.listQuery);
    },
    cancelEdit(row) {
      row.name = row.originalTitle;
      row.edit = false;
      this.$message({
        message: "The title has been restored to the original value",
        type: "warning",
      });
    },
    confirmEdit(row) {
      row.edit = false;
      row.originalTitle = row.name;
      this.$message({
        message: "The title has been edited",
        type: "success",
      });
    },
  },
};
</script>