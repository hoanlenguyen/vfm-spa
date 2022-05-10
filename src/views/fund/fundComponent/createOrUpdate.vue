<template>
  <div class="createItemContainer">
    <el-dialog
      v-cloak
      :close-on-click-modal="false"
      :show-close="false"
      :title="formTitle"
      :visible.sync="showDialog"
      custom-class="dialogFullscreen"
      append-to-body
      @before-close="showDialog = false"
    >
      <template #title>
        <div class="dialogFullscreen__title">
          <span class="el-dialog__title">{{ formTitle }}</span>
          <el-button @click="closeDialog">{{ $t("Hủy") }}</el-button>
          <el-button :loading="isSubmit" type="primary" @click="saveItem">{{
            $t("Lưu lại")
          }}</el-button>
        </div>
      </template>
      <div class="dialogFullscreen__content">
        <el-form ref="model" :model="model" label-position="top">
          <el-row id="general" :gutter="16">
            <div class="section-title">{{ $t("Thông tin chung") }}</div>
            <el-col class="mt-2" :sm="24">
              <el-tabs
                v-model="tabTranslationActive"
                :class="{ error: !isTranslationValid }"
                type="border-card"
              >
                <el-tab-pane
                  v-for="(item, index) in model.translations"
                  :key="index"
                  :label="item.language"
                  :name="`lang-${index}`"
                >
                  <div
                    :class="{
                      'isInvalid c-red': invalidTranslations.includes(
                        `language${index}`
                      ),
                    }"
                    slot="label"
                  >
                    {{ item.language }}
                    <i
                      v-show="invalidTranslations.includes(`language${index}`)"
                      class="el-icon-warning-outline"
                    />
                  </div>
                  <el-form
                    :ref="`language${index}`"
                    :model="item"
                    label-position="top"
                  >
                    <el-row :gutter="16">
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          :rules="{
                            required: true,
                            message: $t('Vui lòng nhập Tên'),
                            trigger: 'blur',
                          }"
                          prop="name"
                        >
                          <span slot="label">
                            <b>{{ $t("Tên") }}</b>
                          </span>
                          <el-input v-model="item.name" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col class="mt-4" :sm="24">
              <el-row :gutter="24">
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Phần trăm tỷ trọng')"
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
import { createOrUpdate, getForEdit } from "@/api/fundComponent";
import pageLoading from "@/components/Loading/pageLoading";
import Tinymce from "@/components/Tinymce";

export default {
  components: { pageLoading, Tinymce },
  props: ["funds", "fundId"],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    activeTab: "general",
    stockIndexType: [],
    tabTranslationActive: "lang-0", // default show first tab
    invalidTranslations: [],
    isTranslationValid: true,
  }),
  computed: {
    formTitle() {
      return this.$route.query.id
        ? "Chi tiết danh mục đầu tư"
        : "Tạo danh mục đầu tư";
    },
  },
  watch: {
    showDialog: function (val) {
      if (!val) {
        this.closeDialog();
      }
    },
  },
  methods: {
    handleShowDialog(id = null) {
      this.getDetail(id);
    },
    getDetail(id) {
      this.isLoading = true;
      getForEdit(id)
        .then((response) => {
          this.showDialog = true;
          this.model = response.data.result;
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
    validateTranslation() {
      if (this.model.translations && this.model.translations.length > 0) {
        this.model.translations.forEach((item, index) => {
          this.$refs[`language${index}`][0].validate((valid) => {
            if (valid) {
              this.invalidTranslations = this.invalidTranslations.filter(
                (item) => item !== `language${index}`
              );
            } else {
              this.invalidTranslations.push(`language${index}`);
            }
          });
        });

        return this.invalidTranslations.length === 0;
      }
    },
    saveItem() {
      this.$refs["model"].validate((valid) => {
        if (valid) {
          this.isTranslationValid = this.validateTranslation();
          if (this.isTranslationValid) {
            this.createOrUpdate();
          } else {
            this.$message({
              type: "error",
              message: this.$t("Bạn chưa nhập đủ thông tin"),
              showClose: true,
            });
          }
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
      this.model.fundId = this.fundId;
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

