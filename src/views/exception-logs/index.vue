<template>
  <div class="card card-transparent">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="card-title">
          <span>{{ $t("Báo cáo hệ thống") }}</span>
        </h3>
      </div>
    </div>
    <div
      class="
        card-toolbox
        d-flex
        flex-column flex-md-row
        justify-content-end
        align-items-stretch
      "
    >
      <div
        class="
          d-flex
          flex-column flex-md-row
          align-items-stretch align-items-sm-center
          justify-content-end
        "
      >
        <div class="m-2">
          <el-date-picker
            v-model="filter.fromTime"
            class="w-100"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            type="date"
            :placeholder="$t('Từ ngày')"
            clearable
          />
        </div>
        <div class="m-2">
          <el-date-picker
            v-model="filter.toTime"
            class="w-100"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            type="date"
            :placeholder="$t('Đến ngày')"
            clearable
          />
        </div>
        <div class="m-2">
          <el-input
            v-model="filterKeyword"
            :placeholder="$t('Tìm theo tên')"
            clearable
            @clear="filter.filterKeyword = null"
            @keyup.enter.native="handleFilterKeyword"
          />
        </div>
        <div class="d-flex justify-content-end">
          <div class="m-2">
            <el-button plain type="success" @click="handleFilterKeyword">
              <i class="las la-search" />
              <span>{{ $t("Tìm kiếm") }}</span>
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
      >
        <el-table-column :label="$t('Tên')" prop="name" sortable>
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Ngày cập nhật')"
          align="center"
          prop="lastWriteTime"
          sortable
        >
          <template slot-scope="scope">
            <span>{{ scope.row.lastWriteTime | dateTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Kích thước')"
          align="center"
          prop="fileLenth"
          sortable
        >
          <template slot-scope="scope">
            <span>{{
              scope.row.fileLenth
                ? `${Math.round(scope.row.fileLenth / 1000)} KB`
                : ""
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('Thao tác')"
          align="center"
          fixed="right"
          width="150px"
        >
          <template slot-scope="scope">
            <el-button
              class="btn-icon btn-light"
              plain
              size="mini"
              type="success"
              @click="download(scope.row.name)"
            >
              <i class="el-icon-download" />
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { fetchList, downloadLog } from "@/api/logFile";

export default {
  name: "ExceptionLog",
  data() {
    return {
      listLoading: false,
      list: null,
      filter: {
        fromTime: null,
        toTime: null,
        filterKeyword: "",
      },
      filterKeyword: "",
    };
  },
  created() {
    this.loadData();
  },
  watch: {
    filter: {
      handler: function () {
        this.loadData();
      },
      deep: true,
    },
  },
  methods: {
    loadData() {
      this.listLoading = true;
      fetchList(this.filter)
        .then((response) => {
          if (response.data.success) {
            this.list = response.data.result;
          }
        })
        .catch((error) => {
          if (error.response.data) {
            this.$message({
              type: "error",
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true,
            });
          }
        })
        .finally(() => {
          this.listLoading = false;
        });
    },
    handleFilterKeyword() {
      this.$set(this.filter, "filterKeyword", this.filterKeyword);
    },
    download(fileName) {
      downloadLog(fileName);
    },
  },
};
</script>
