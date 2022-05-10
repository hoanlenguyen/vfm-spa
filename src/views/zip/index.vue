<template>
  <div class="card card-transparent">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="card-title">
          <span>Export Zip</span>
          <span class="card-sub-label">Enter the file name and click Export button.</span>
        </h3>
        <div class="d-flex justify-content-end align-items-center">
          <el-input
            v-model="filename"
            :placeholder="$t('zip.placeholder')"
            class="w-abs-360 mr-3"
          />
          <el-button
            :loading="downloadLoading"
            type="primary"
            icon="el-icon-document"
            @click="handleDownload"
          >{{ $t('zip.export') }} Zip</el-button>
        </div>
      </div>
    </div>
    <div class="card-body p-0 rounded-md overflow-hidden shadow-sm">
      <el-table
        v-loading="listLoading"
        :data="list"
        fit
        stripe
        class="border-0 rounded-0"
        show-overflow-tooltip
        @sort-change="handleSort"
        :default-sort="{prop: 'displayOrder', order: 'descending'}"
      >
      <el-table-column label="ID" width="80" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column :label="$t('Name')" min-width="150px" prop="name" sortable>
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>

        <el-table-column :label="$t('Category')" width="250px" prop="categoryName" sortable>
          <template slot-scope="scope">
            <div class="w-max-100 text-ellipsis">
              <span>{{ scope.row.categoryName }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column :label="$t('Posted')" width="150px" prop="creationTime" sortable align="right">
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
</template>

<script>
import { fetchList } from "@/api/blog";

export default {
  name: "ExportZip",
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: "",
      filter: {
        page: 1,
        rowsPerPage: 100000,
        sortBy: "",
        sortDirection: "",
        categoryId: null,
        keyword: ""
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {

      this.listLoading = true;
      fetchList(this.filter).then(response => {
        this.list = response.data.result.items;
        this.total = response.data.result.total;
        this.listLoading = false;
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Zip").then((zip) => {
        const tHeader = ["Id", "Name", "Category", "Posted", "Display Order", "Status"];
        const filterVal = [
          "id",
          "name",
          "categoryName",
          "creationTime",
          "displayOrder",
          "isActive"
        ];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        zip.export_txt_to_zip(tHeader, data, this.filename, this.filename);
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
  },
};
</script>
