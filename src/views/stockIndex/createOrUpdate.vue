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
          <el-button @click="closeDialog">{{ $t("Hủy") }}</el-button>
          <el-button :loading="isSubmit" type="primary" @click="saveItem" v-if='isAllowCreate && !model.id'>{{
            $t("Lưu lại")
          }}</el-button>
          <el-button :loading="isSubmit" type="primary" @click="saveItem" v-else-if='isAllowEdit && model.id'>{{
            $t("Lưu lại")
          }}</el-button>
        </div>
      </template>
      <s-tabs
        class="dialogFullscreen__tabs"
        :tabs="tabs"
        :active-tab="activeTab"
      />
      <div class="dialogFullscreen__content">
        <el-form ref="model" :model="model" label-position="top">
          <el-row id="general" :gutter="16">
            <div class="section-title">{{ $t("Thông tin chung") }}</div>
            <el-col :sm="24">
              <el-row :gutter="24">
                <el-col :md="4" :sm="24">
                  <el-form-item
                    :label="$t('Loại chỉ số thị trường')"
                    :rules="[
                      {
                        required: true,
                        message: $t('Vui lòng chọn loại chỉ số thị trường'),
                        trigger: 'blur',
                      },
                    ]"
                    prop="stockIndexTypeId"
                  >
                  <el-select
                    v-model="model.stockIndexTypeId"
                    class="filter-item"
                    clearable
                    filterable
                    :placeholder="$t('Chọn loại chỉ số thị trường')"
                  >
                    <el-option
                      v-for="item in stockIndexType"
                      :key="item.id"
                      :value="item.value"
                      :label="item.label"
                    />
                  </el-select>
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Giá trị')"
                    :rules="[
                      {
                        required: true,
                        message: $t('Vui lòng nhập Value'),
                        trigger: 'blur',
                      },
                    ]"
                    prop="value"
                    type="number"
                  >
                    <el-input v-model="model.value" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Phần trăm tăng giảm')"
                    prop="changePercent"
                    type="number"
                  >
                    <el-input v-model="model.changePercent" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Vào Ngày')"
                    :rules="[
                      {
                        required: true,
                        message: $t('Vui lòng nhập Ngày'),
                        trigger: 'blur',
                      },
                    ]"
                    prop="date"
                  >
                    <el-date-picker
                      v-model="model.date"
                      type="date"
                      placeholder=""
                      :format="'dd/MM/yyyy'"
                      value-format="yyyy-MM-dd"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { createOrUpdate, getForEdit } from "@/api/stockIndex";
import pageLoading from "@/components/Loading/pageLoading";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import Tinymce from "@/components/Tinymce";
import { fetchForDropdown } from "@/api/stockIndexType";
export default {
  components: { pageLoading, UploadCroppedImage, Tinymce },
  props: ["reloadData",'isAllowEdit','isAllowCreate'],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    tabs: [
      {
        name: "general",
        label: "Tổng quan",
      },
    ],
    activeTab: "general",
    stockIndexType: [],
    // bannerSizes: BannerSizes,
    tabTranslationActive: "lang-0", // default show first tab
    invalidTranslations: [],
    isTranslationValid: true,
  }),
  computed: {
    formTitle() {
      return this.$route.query.id ? "Chi tiết chỉ số thị trường": "Tạo chỉ số thị trường";
    },
  },
  watch: {
    "$route.query.id": function (val) {
      if (typeof val !== "undefined") {
        this.getDetail(val);
      }
    },
    showDialog: function (val) {
      if (!val) {
        this.closeDialog();
      }
    },
    // 'model.bannerType': function(val) {
    //   const currentSize = this.bannerSizes.find(
    //     (item) => item.bannerTypeValue === val
    //   )
    //
    //   if (currentSize) {
    //     this.currentBannerSize.width = currentSize.width
    //     this.currentBannerSize.height = currentSize.height
    //   }
    // }
  },
  mounted() {
    this.fetchForDropdown();
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
    }
  },
  methods: {
    fetchForDropdown() {
      fetchForDropdown()
        .then((response) => {
          this.stockIndexType = response.data.result;
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true,
          });
        });
    },
    getDetail(id) {
      this.isLoading = true;
      getForEdit(id)
        .then((response) => {
          this.showDialog = true;
          this.model = response.data.result;
          if(!id) {
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            this.model.date = today.toISOString();
          }
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
    saveItem() {
      this.$refs["model"].validate((valid) => {
        if (valid) {
          this.createOrUpdate();
        } else {
          this.$message({
            type: "error",
            message: this.$t("Bạn chưa nhập đủ thông tin"),
            showClose: true,
          });
        }
      });
    },
    createOrUpdate() {
      this.isSubmit = true;
      return createOrUpdate(this.model)
        .then((response) => {
          if (response.data.success) {
            this.$emit("reloadData");
            if (!this.model.id) {
              this.$message({
                type: "success",
                message: this.$t("Tạo thành công"),
                showClose: true,
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa thành công"),
                showClose: true,
              });
            }
            this.showDialog = false;
          }
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi ${error.response.data.error.message}`),
            showClose: true,
          });
        })
        .finally(() => {
          this.isSubmit = false;
        });
    },
    closeDialog() {
      this.isTranslationValid = true;
      this.tabTranslationActive = "lang-0";
      this.$refs.model.clearValidate();
      this.model = {};
      this.$router.replace({});
      this.showDialog = false;
    },
  },
};
</script>

