<template>
  <div class="createItemContainer">
    <el-dialog
      v-cloak
      :close-on-click-modal="false"
      :show-close="false"
      :title="formTitle"
      width="70%"
      :visible.sync="showDialog"
      custom-class="dialogFullscreen"
      @before-close="showDialog = false"
    >
      <template #title>
        <div class="dialogFullscreen__title">
          <span class="el-dialog__title">{{ formTitle }}</span>
          <el-button @click="closeDialog">{{ $t("Hủy") }}</el-button>
          <el-button
            :loading="isSubmit"
            type="primary"
            :disabled="!items"
            @click="saveItem"
            >{{ $t("Lưu lại") }}</el-button
          >
        </div>
      </template>
      <div class="dialogFullscreen__content">
        <upload-excel :key="this.showDialog" @tableData="uploadData" />
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import pageLoading from "@/components/Loading/pageLoading";
import uploadExcel from "@/views/excel/upload-excel";
import { bulkImport } from "@/api/account";

export default {
  components: { pageLoading, uploadExcel },
  props: ["reloadData"],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    items: [],
  }),
  computed: {
    formTitle() {
      return "Import NAV";
    },
  },
  watch: {
    "$route.query.import": function (val) {
      if (typeof val !== "undefined") {
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
    if (typeof this.$route.query.import !== "undefined") {
      this.getDetail();
    }
  },
  methods: {
    getDetail() {
      this.showDialog = true;
    },
    closeDialog() {
      this.items = [];
      this.$router.replace({});
      this.showDialog = false;
    },
    uploadData(input) {
      this.items = input;
    },
    saveItem() {
      if (!this.items) {
        this.$message({
          type: "warning",
          message: this.$t("Không tìm thấy dữ liệu"),
          showClose: true,
        });
        return false;
      }
      this.isSubmit = true;
      bulkImport(this.items)
        .then((response) => {
          if (response.data.result) {
            this.$emit("reloadData");
            this.$message({
              type: "success",
              message: this.$t("Import thành công"),
              showClose: true,
            });
            this.closeDialog();
          }
        })
        .catch((error) => {
          if (error.response) {
            this.$message({
              type: "error",
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true,
            });
          }
        })
        .finally(() => {
          this.listLoading = false;
          this.isSubmit = false;
        });
    },
  },
};
</script>

