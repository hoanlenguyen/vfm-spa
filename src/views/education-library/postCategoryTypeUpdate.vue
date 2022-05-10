<template>
  <div class="createItemContainer">
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
          <el-button @click="closeDialog">{{ $t("Đóng") }}</el-button>
        </div>
      </template>
      <s-tabs
        class="dialogFullscreen__tabs"
        :tabs="tabs"
        :active-tab="activeTab"
      />
      <div class="dialogFullscreen__content">
        <el-form label-position="top">
          <el-row :gutter="16">
            <el-col
              :md="24"
              :sm="24"
              v-for="(data, index) in items"
              :key="index"
            >
              <el-form-item :label="data.postCategoryName">
              <el-select
                :value="data.postTypes"
                multiple
                placeholder="Select"
                @input="handleInput($event, index)"
                class="mb-3 full-width"
              >
                <el-option
                  v-for="(item, index) in postTypeLables"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-button
                v-if="isAllowEdit"
                type="primary"
                size="medium"
                @click="updateData(data)"
                >{{ $t("Lưu") }}
              </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!-- <pageLoading :loading="isLoading" /> -->
  </div>
</template>

<script>
import { createOrUpdate, fetchList } from "@/api/postCategoryType";
import {
  StorageFolder,
  PostTypeLables,
  PostFilterTypeLables,
  PostTagLevelLables,
  PlatformTypeLables,
} from "@/utils/enums";

export default {
  components: {},
  props: ["reloadData", "isAllowCreate", "isAllowEdit"],
  data() {
    const self = this;
    return {
      showDialog: false,
      isLoading: false,
      tabs: [
        {
          name: "general",
          label: "Tổng quan",
        },
      ],
      activeTab: "general",
      storageFolder: StorageFolder,
      postTypeLables: PostTypeLables,
      postFilterTypeLables: PostFilterTypeLables,
      postTagLevelLables: PostTagLevelLables,
      platformTypeLables: PlatformTypeLables,
      items: [],
    };
  },
  computed: {
    formTitle() {
      return "Category";
    },
  },
  watch: {},
  mounted() {
    this.getList();
  },
  methods: {
    handleInput(e, index) {
      const item = this.items[index];
      item.postTypes = e;
      this.$set(this.items, index, item);
    },
    getList() {
      this.isLoading = true;
      fetchList()
        .then((response) => {
          this.items = response.data.result;
          //console.log(this.items);
          this.items.forEach((item) => {
            item.postTypes = item.postTypeList.split(",").map(Number);
            var findItem = this.postFilterTypeLables.find(
              (x) => x.value == item.postFilterType
            );
            if (findItem) item.postCategoryName = findItem.label;
          });
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
    updateData(item) {
      item.postTypeList = item.postTypes.join();
      createOrUpdate(item)
        .then((response) => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: "Cập nhật thành công",
              showClose: false,
            });
            // this.loadData();
          }
        })
        .catch((error) => {
          this.$notify.error({
            title: "Thông báo",
            message: `Error: ${error.response.data.error.message}`,
            showClose: false,
          });
        });
    },
    closeDialog() {
      this.showDialog = false;
    },
    openDialog() {
      //this.getList();
      this.showDialog = true;
    },
  },
};
</script>
