<template>
  <div class="historyItemContainer">
    <el-dialog
      v-cloak
      :close-on-click-modal="false"
      :show-close="false"
      :title="formTitle"
      :visible.sync="showDialog"
      custom-class="dialogFullscreen"
      fullscreen
      @before-close="showDialog = false"
    >
      <template #title>
        <div class="dialogFullscreen__title">
          <span class="el-dialog__title">{{ formTitle }}</span>
          <el-button @click="closeDialog">{{ $t("Đóng") }}</el-button>
        </div>
      </template>
      <div class="dialogFullscreen__content">
        <el-table
          v-loading="isLoading"
          class="border-0 rounded-0"
          :data="this.model"
          fit
          show-overflow-tooltip
          stripe
        >
          <el-table-column :label="$t('No')" align="center" width="70px">
            <template slot-scope="scope">
              <span>{{
                filter.rowsPerPage * (paging.page - 1) + scope.$index + 1
              }}</span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('Job')"
            prop="backgroundJobDescription"
            width="500px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.backgroundJobDescription }}</span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('Thời điểm bắt đầu')"
            prop="startTime"
            width="300px"
          >
            <template slot-scope="scope">
              <span>{{ formatDate(scope.row.startTime) }}</span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('Thời điểm kết thúc')"
            prop="endTime"
            width="300px"
          >
            <template slot-scope="scope">
              <span>{{ formatDate(scope.row.endTime) }}</span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('Kết quả')"
            prop="endTime"
            fixed="right"
            width="180px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.status }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('Ghi chú')" prop="endTime">
            <template slot-scope="scope">
              <span>{{ scope.row.note }}</span>
            </template>
          </el-table-column>
        </el-table>
        <s-pagination
          v-if="total > 0"
          :current-page.sync="paging.page"
          :page-size.sync="filter.rowsPerPage"
          :page-sizes="[15, 20, 25, 50, 100, 200, 500, 1000]"
          :total="total"
          auto-scroll
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="getDetail"
          @current-change="getDetail"
        />
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { getRecurringJobHistory } from "@/api/settings";
import pageLoading from "@/components/Loading/pageLoading";
import Tinymce from "@/components/Tinymce";
import moment from "moment";
export default {
  components: { pageLoading, Tinymce },
  props: ["reloadData"],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    total: 0,
    paging: {
      page: 1,
    },
    filter: {
      rowsPerPage: 15,
      sortBy: "startTime",
      sortDirection: "descending",
      filterKeyword: "",
    },
  }),
  computed: {
    formTitle() {
      return this.$t("Lịch sử");
    },
  },
  watch: {
    "$route.query.id": function (val) {
      if (typeof val !== "undefined") {
        this.filter.id = val;
        this.getDetail();
      }
    },
    showDialog: function (val) {
      if (!val) {
        this.closeDialog();
      }
    },
  },
  mounted() {
    if (typeof this.$route.query.id !== "undefined") {
      this.filter.id = this.$route.query.id;
      this.getDetail();
    }
  },
  methods: {
    getDetail() {
      this.isLoading = true;
      getRecurringJobHistory({ ...this.filter, ...this.paging })
        .then((response) => {
          this.showDialog = true;
          this.model = response.data.result.items;
          this.total = response.data.result.totalCount;
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true,
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    closeDialog() {
      this.paging.page = 1;
      this.model = {};
      this.$router.replace({});
      this.showDialog = false;
    },
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD HH:MM:SS");
    },
  },
};
</script>
