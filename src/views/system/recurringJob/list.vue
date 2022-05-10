<template>
  <div id="setting">
    <div class="app-page">
      <el-row
        align="middle"
        class="app-page-header"
        justify="space-between"
        type="flex"
      />
      <el-row class="app-page-body">
        <el-tabs type="border-card">
          <el-tab-pane :label="$t('Danh sách tác vụ')">
            <div v-if="list.length">
              <el-form label-position="top">
                <el-row :gutter="16">
                  <el-col :sm="24">
                    <el-form-item>
                      <el-button
                        :loading="isSubmitLoading"
                        type="primary"
                        @click="
                          isSubmitLoading = true;
                          onSubmit();
                        "
                        >{{ $t("Lưu") }}
                      </el-button>
                    </el-form-item>
                    <el-form-item v-for="item in list" :key="item.id">
                      <el-switch
                        v-model="item.isEnable"
                        :active-text="item.description"
                      />
                      <el-button
                        class="btn-icon btn-light ml-3"
                        plain
                        size="mini"
                        type="primary"
                        @click="viewHistory(item.id)"
                      >
                        <i class="el-icon-view" />
                      </el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <!-- <div v-else>
              <h3>Bạn không có quyền truy cập</h3>
            </div> -->
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
    <jobHistory @reloadData="reloadData" />
  </div>
</template>
<script>
import {
  getRecurringJobSettings,
  updateRecurringJobSettings,
} from "@/api/settings";
import jobHistory from "./jobHistory";

export default {
  name: "Setting",
  components: {
    jobHistory,
  },
  data() {
    return {
      list: [],
      isSubmitLoading: false,
    };
  },
  watch: {
    filter: {
      handler: function () {
        this.reloadData();
      },
      deep: true,
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    reloadData() {
      this.loadData();
    },
    loadData() {
      getRecurringJobSettings()
        .then((response) => {
          this.list = response.data.result;
        })
        .catch((error) => {
          this.$notify.error({
            title: "Thông báo",
            message: `Error: ${error.response.data.error.message}`,
            showClose: false,
          });
        });
    },
    onSubmit() {
      updateRecurringJobSettings(this.list)
        .then((response) => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: "Cập nhật thành công",
              showClose: false,
            });
            // this.loadData()
          }
        })
        .catch((error) => {
          this.$notify.error({
            title: "Thông báo",
            message: `Error: ${error.response.data.error.message}`,
            showClose: false,
          });
        })
        .finally(() => {
          this.isSubmitLoading = false;
        });
    },
    viewHistory(id) {
      this.$router.push({
        path: this.$route.path,
        query: { id },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#setting {
  .app-page .app-page-body {
    padding: 0;
  }
}
</style>
