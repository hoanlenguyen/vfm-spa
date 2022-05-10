<template>
  <div class="createItemContainer">
    <el-dialog
      :title="formTitle"
      :visible.sync="showDialog"
      @before-close="showDialog = false"
      :close-on-click-modal="false"
    >
      <div>
        <div class="mb-3" v-for="(item, index) in model" :key="index">
          <p class="mb-4" v-if="item.languageName == 'vi'">Tiếng Việt</p>
          <p class="mb-4" v-else>English</p>
          <el-input
            placeholder="Nội dung dịch"
            type="textarea"
            :rows="4"
            v-model="item.value"
          >
          </el-input>
          <div v-if="item.languageName == 'vi'">
            <p class="mt-4">Bản gốc</p>
            <p>{{ item.key }}</p>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click.prevent="closeDialog">Hủy</el-button>
        <el-button type="primary" @click.prevent="updateLanguageText"
          >Lưu</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { updateLanguageTextByKey, getLanguageTextsByKey } from "@/api/language";
export default {
  props: ["reloadData"],
  data: () => ({
    showDialog: false,
    model: {},
    activeName: "lang-0", //default show first tab
    isLoading: false,
    isNotValid: false,
  }),
  computed: {
    formTitle() {
      return "Dịch";
    },
  },
  watch: {
    "$route.query.keyText": function (val) {
      this.getDetail(val);
    },
    showDialog: function (val) {
      if (!val) {
        this.closeDialog();
      }
    },
  },
  mounted() {
    this.getDetail(this.$route.query.keyText);
  },
  methods: {
    getDetail(keyText) {
      if (typeof keyText != "undefined") {
        this.isLoading = true;
        getLanguageTextsByKey(keyText)
          .then((response) => {
            this.showDialog = true;
            this.model = response.data.result;
          })
          .catch((error) => {
            this.$message({
              type: "error",
              message: `Đã xảy ra lỗi ${error.response.data.error.message}`,
              showClose: false,
            });
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
    updateLanguageText() {
      this.isLoading = true;
      return updateLanguageTextByKey(this.model)
        .then((response) => {
          this.$emit("reloadData");
          this.$message({
            type: "success",
            message: `Cập nhật thành công`,
            showClose: false,
          });
          this.showDialog = false;
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: `Đã xảy ra lỗi ${error.response.data.error.message}`,
            showClose: false,
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    closeDialog() {
      this.model = {};
      this.isNotValid = false;
      this.$router.replace({});
      this.showDialog = false;
      this.activeName = "lang-0";
    },
  },
};
</script>
