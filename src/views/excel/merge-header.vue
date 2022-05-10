<template>
  <div class="card card-transparent">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="card-title">
          <span>Merge Header</span>
          <span class="card-sub-label">Import and export of Excel is based on js-xlsx</span>
        </h3>
        <div class="d-flex justify-content-end align-items-center">
          <el-switch v-model="autoWidth" active-text="AutoFit cell width?" class="mr-3"></el-switch>
          <el-input v-model="filename" :placeholder="$t('zip.placeholder')" class="w-abs-360 mr-3" />
          <el-select v-model="fileType" class="mr-3" placeholder="Select file type">
            <el-option v-for="item in options" :key="item" :label="item" :value="item" />
          </el-select>
          <el-button
            :loading="downloadLoading"
            type="primary"
            @click="handleDownload"
          >
          <s-icon icon="material-flash-on" />
          <span>Export Excel</span></el-button>
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
      >
        <el-table-column label="ID" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column label="Main Information" align="center">
          <el-table-column :label="$t('Name')" min-width="150px" prop="name">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>

          <el-table-column :label="$t('Category')" width="250px" prop="categoryName">
            <template slot-scope="scope">
              <div class="w-max-100 text-ellipsis">
                <span>{{ scope.row.categoryName }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column :label="$t('Posted')" width="150px" prop="creationTime" align="right">
            <template slot-scope="scope">
              <span>{{ scope.row.creationTime | date}}</span>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column :label="$t('Status')" width="120px" prop="isActive">
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
import { parseTime } from "@/utils";

export default {
  name: "MergeHeader",
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: "",
      autoWidth: true,
      fileType: "xlsx",
      options: ["xlsx", "csv", "txt"],
      filter: {
        page: 1,
        rowsPerPage: 100000,
        sortBy: "",
        sortDirection: "",
        categoryId: null,
        keyword: "",
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      fetchList(this.filter).then((response) => {
        this.list = response.data.result.items;
        this.total = response.data.result.total;
        this.listLoading = false;
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then((excel) => {
        const multiHeader = [["Id", "Main Information", "", "", "Status"]];
        const header = ["", "Name", "Category", "Posted", ""];
        const filterVal = [
          "id",
          "name",
          "categoryName",
          "creationTime",
          "isActive",
        ];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        const merges = ["A1:A2", "B1:D1", "E1:E2"];
        excel.export_json_to_excel({
          multiHeader,
          header,
          merges,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.fileType,
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
  },
};
</script>
