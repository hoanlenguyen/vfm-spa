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
         <el-button
            :loading="isSubmit"
            type="primary"
            @click="saveItem"
            v-if="isAllowCreate && !model.id"
            >{{ $t("Lưu lại") }}</el-button
          >
          <el-button
            :loading="isSubmit"
            type="primary"
            @click="saveItem"
            v-else-if="isAllowEdit && model.id"
            >{{ $t("Lưu lại") }}</el-button
          >
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
            <el-col :md="6" :sm="24">
              <el-form-item prop="isActive">
                <span slot="label">
                  {{ $t("Hiển thị") }}
                  <el-tooltip
                    :content="
                      $t(
                        'Cho phép hiển thị để danh mục FAQ của bạn sẽ được hiển thị trên website'
                      )
                    "
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-switch v-model="model.isActive" />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Thứ tự hiển thị')"
                :rules="{
                  required: true,
                  message: $t('Vui lòng chọn Thứ tự hiển thị'),
                  trigger: ['blur', 'change'],
                }"
                prop="displayOrder"
                class="message-left"
              >
                <span slot="label">
                  {{ $t("Thứ tự hiển thị") }}
                  <el-tooltip
                    :content="
                      $t(
                        'Thứ tự hiển thị giúp danh mục FAQ của bạn lên top đầu trong danh sách'
                      )
                    "
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-input-number
                  v-model="model.displayOrder"
                  :min="0"
                  controls-position="right"
                />
              </el-form-item>
            </el-col>
            <!-- <el-col :md="6" :sm="24">
              <el-form-item
                prop="isShowOnHomepage"
              >
                <span slot="label">
                  {{ $t('Hiển thị trên trang chủ') }}
                  <el-tooltip
                    :content="$t('Cho phép danh mục FAQ của bạn sẽ được hiển thị trên trang chủ của website')"
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-switch v-model="model.isShowOnHomepage" />
              </el-form-item>
            </el-col> -->
            <el-col :md="6" :sm="24">
              <el-form-item prop="categoryId">
                <span slot="label">
                  {{ $t("Danh mục") }}
                  <el-tooltip
                    :content="
                      $t(
                        'Cho phép danh mục FAQ của bạn sẽ được hiển thị trên trang chủ của website'
                      )
                    "
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-select
                  v-model="model.categoryId"
                  :placeholder="$t('Thêm danh mục')"
                  clearable
                >
                  <el-option
                    v-for="item in faqCategories"
                    :key="item.id"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
                    <el-col :md="6" :sm="24">
              <el-form-item prop="sourceType">
                <span slot="label">
                  {{ $t("Loại thông tin") }}
                  <el-tooltip
                    :content="
                      $t(
                        'Cho phép danh mục FAQ của bạn sẽ được hiển thị trên trang chủ của website'
                      )
                    "
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-select
                  v-model="model.sourceType"
                  :placeholder="$t('Chọn loại thông tin')"
                  clearable
                >
                  <el-option
                    v-for="item in FaqTypes"
                    :key="item.id"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <!-- <el-col :md="6" :sm="24">
              <el-form-item
                class="message-left"
                :label="$t('Ảnh đại diện')"
                prop="avatarUrl"
              >
                <div class="w-abs-max-250">
                  <UploadCroppedImage
                    ref="uploadAvatar"
                    v-model="model.avatarUrl"
                    :is-rounded="false"
                    :preview-ratio="{ width: 264, height: 264 }"
                    :size-limit="2"
                  />
                </div>
              </el-form-item>
            </el-col> -->
            <el-col class="mt-5" :sm="24">
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
                            message: $t('Vui lòng nhập tên'),
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
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="shortDescription"
                          :label="$t('Mô tả ngắn')"
                        >
                          <tinymce
                            v-model="item.shortDescription"
                            :height="400"
                          />
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
          <!-- <el-row id="seo" class="mt-5" :gutter="16">
            <div
              class="section-title"
            >{{ $t('SEO') }}
            </div>
            <el-col :sm="24">
              <el-tabs
                v-model="tabSEOTranslationActive"
                :class="{ error: !isSEOTranslationValid }"
                type="border-card"
              >
                <el-tab-pane
                  v-for="(item, index) in model.translations"
                  :key="index"
                  :label="item.language"
                  :name="`lang-${index}`"
                >
                  <el-form
                    :ref="`seo-language${index}`"
                    :model="item"
                    label-position="top"
                  >
                    <el-row :gutter="16">
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="metaTitle"
                        >
                          <span slot="label">
                            <b>{{ $t('Meta title') }}</b>
                          </span>
                          <el-input
                            v-model="item.metaTitle"
                            :maxlength="70"
                            show-word-limit
                          />
                        </el-form-item>
                      </el-col>
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="metaDescription"
                        >
                          <span slot="label">
                            <b>{{ $t('Meta description') }}</b>
                          </span>
                          <el-input
                            v-model="item.metaDescription"
                            :maxlength="160"
                            show-word-limit
                          />
                        </el-form-item>
                      </el-col>
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="slug"
                        >
                          <span slot="label">
                            <b>{{ $t('Url') }}</b>
                          </span>
                          <el-input
                            v-model="item.slug"
                          />
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row> -->
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { getForEdit, createOrUpdate } from "@/api/faq";
import { getForDropdown } from "@/api/faqCategory";
import pageLoading from "@/components/Loading/pageLoading";
import Tinymce from "@/components/Tinymce";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import { FaqTypes } from "@/utils/enums";

export default {
  components: { pageLoading, Tinymce, UploadCroppedImage },
  props: ["reloadData", "isAllowCreate", "isAllowEdit"],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    isParentCategoryLoading: false,
    faqCategories: [],
    FaqTypes,
    tabs: [
      {
        name: "general",
        label: "Tổng quan",
      },
      // {
      //   name: 'seo',
      //   label: 'SEO'
      // }
    ],
    activeTab: "general",
    tabTranslationActive: "lang-0", // default show first tab
    invalidTranslations: [],
    isTranslationValid: true,
    tabSEOTranslationActive: "lang-0", // default show first tab
    isSEOTranslationValid: true,
  }),
  computed: {
    formTitle() {
      return this.$route.query.id
        ? "Chi tiết - " + this.model.name
        : "Tạo danh mục FAQ";
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
  },
  mounted() {
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
    }
    this.loadCategoryDropdown();
  },
  methods: {
    loadCategoryDropdown() {
      this.isParentCategoryLoading = true;
      getForDropdown()
        .then((response) => {
          if (response.data.result) {
            this.faqCategories = response.data.result;
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
          this.isParentCategoryLoading = false;
        });
    },
    getDetail(id) {
      this.isLoading = true;
      getForEdit(id)
        .then((response) => {
          if (response.data.result) {
            this.showDialog = true;
            this.model = response.data.result;
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
          this.isLoading = false;
        });
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
    createOrUpdate() {
      this.isSubmit = true;
      return createOrUpdate(this.model)
        .then((response) => {
          if (response.data.success) {
            this.$emit("reloadData");
            if (!this.model.id) {
              this.$message({
                type: "success",
                message: this.$t("Tạo danh mục thành công"),
                showClose: true,
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa danh mục thành công"),
                showClose: true,
              });
            }
            this.showDialog = false;
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
    closeDialog() {
      this.isTranslationValid = true;
      this.tabTranslationActive = "lang-0";
      this.tabSEOTranslationActive = "lang-0";
      this.$refs.model.clearValidate();
      this.model = {};
      this.$router.replace({});
      this.showDialog = false;
    },
  },
};
</script>

