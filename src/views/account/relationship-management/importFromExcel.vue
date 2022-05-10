<template>
  <div class="createItemContainer">
    <el-dialog
      v-cloak
      :close-on-click-modal="false"
      :show-close="false"
      :title="formTitle"
      width="85%"
      :visible.sync="showDialog"
      custom-class="dialogFullscreen"
      @before-close="showDialog = false"
    >
      <template #title>
        <div class="dialogFullscreen__title">
          <span class="el-dialog__title">{{ formTitle }}</span>
          <el-button @click="closeDialog">{{ $t("Đóng") }}</el-button>
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
        <div
          v-show="isShowResult"
          style="display: flex; align-items: center; margin-bottom: 20px"
        >
          <p class="py-2">Tổng số tạo mới: {{ resultDto.insertCount }}</p>
          <p class="py-2 ml-5">Tổng số cập nhật: {{ resultDto.updateCount }}</p>
          <el-button
            size="medium"
            type="success"
            class="ml-5"
            v-if="resultDto.importResult.length > 0"
            @click="getImportExcelResult(resultDto.importResult)"
            >{{ $t("Chi tiết import") }}
          </el-button>
          <el-button
            size="medium"
            type="danger"
            class="ml-5"
            v-if="resultDto.errorList.length > 0"
            @click="getErrorExcelResult(resultDto.errorList)"
            >{{ $t("Chi tiết lỗi import") }}
          </el-button>
        </div>
        <upload-excel
          :key="showDialog"
          @tableData="uploadData"
          :listTableKey="listTableKey"
          :errorList="resultDto.errorList"
        />
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import pageLoading from "@/components/Loading/pageLoading";
import uploadExcel from "@/views/excel/upload-excel";
import { bulkImport } from "@/api/rm";
import XLSX from "xlsx-js-style";
import moment from "moment";
import { string } from "jszip/lib/support";
export default {
  components: { pageLoading, uploadExcel },
  props: ["reloadData"],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    isShowResult: false,
    resultDto: {
      insertCount: 0,
      updateCount: 0,
      importResult: [],
      errorList: [],
    },
    defaultResultDto: {
      insertCount: 0,
      updateCount: 0,
      importResult: [],
      errorList: [],
    },
    items: [],
    listTableKey: [
      "STT",
      "RMCode",
      "FullName",
      "RMBranchCode",
      "RMBranchName",
      "RMAreaCode",
      "RMAreaName",
      "RMShortBankName",
      "EmailAddress",
      "IsActive",
      "PhoneNumber",
      "RMNote",
    ],
  }),
  computed: {
    formTitle() {
      return "Import RM";
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
      this.resultDto = { ...this.defaultResultDto };
      this.showDialog = false;
      this.isShowResult = false;
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
      this.resultDto = { ...this.defaultResultDto };
      bulkImport(this.items)
        .then((response) => {
          if (response.data.result) {
            this.isShowResult = true;
            this.resultDto = response.data.result;
            if (this.resultDto.errorList.length == 0) {
              this.$emit("reloadData");
              this.$message({
                type: "success",
                message: this.$t("Import thành công"),
                showClose: true,
              });
            } else {
              this.$message({
                type: "error",
                message:
                  "Import danh sách RM không thành công, vui lòng kiểm tra danh sách lỗi bên dưới",
                showClose: true,
              });
            }
            // this.closeDialog();
          } else {
            this.resultDto = { ...this.defaultResultDto };
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
          this.isSubmit = false;
        });
    },
    getErrorExcelResult(data, fileName = "RM_Import_Error_List") {
      if (!data || data.length == 0) return;
      let wch = 15;
      var ws1 = XLSX.utils.json_to_sheet(data);
      if (wch && data && data.length) {
        var size = Object.keys(data[0]).length;
        if (size) {
          var wscols = Array(size).fill({ wch: wch });
          ws1["!cols"] = wscols;
        }
      }

      var ws2 = XLSX.utils.json_to_sheet(this.items);
      if (wch && this.items && this.items.length) {
        size = Object.keys(this.items[0]).length;
        if (size) {
          wscols = Array(size).fill({ wch: wch });
          ws2["!cols"] = wscols;
        }
      }
      // let alphabets = "ABCDEFGHIJK";
      // for (let i = 0; i < data.length; i++) {
      //   data[i]["Ghi chú"].forEach((item) => {
      //     let cell =
      //       alphabets[this.listTableKey.indexOf(item)] +
      //       String(Number(data[i]["STT"]) + 1);
      //     ws2[cell].s = {
      //       fill: {
      //         fgColor: {
      //           rgb: "FFFF00",
      //         },
      //       },
      //       border: {
      //         top: { style: "thin", color: { auto: 1 } },
      //         right: { style: "thin", color: { auto: 1 } },
      //         bottom: { style: "thin", color: { auto: 1 } },
      //         left: { style: "thin", color: { auto: 1 } },
      //       },
      //     };
      //   });
      // }

      var wb = XLSX.utils.book_new(); // make Workbook of Excel
      XLSX.utils.book_append_sheet(wb, ws1, "Sheet1"); // sheetAName is name of Worksheet
      XLSX.utils.book_append_sheet(wb, ws2, "Sheet2"); // sheetAName is name of Worksheet
      XLSX.writeFile(
        wb,
        `${fileName}_${moment(new Date()).format("YYYYMMDD.HHmm")}.xlsx`
      ); // name of the file is 'book.xlsx'
    },
    getImportExcelResult(data, fileName = "RM_Import_Result") {
      if (!data || data.length == 0) return;
      this.downloadExcelData(data, fileName, 15);
    },
  },
};
</script>
