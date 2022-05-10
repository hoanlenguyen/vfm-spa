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
            <el-col :md="24" :sm="24">
              <el-form-item prop="isActive">
                <span slot="label">
                  {{ $t("Hiển thị") }}
                  <el-tooltip
                    :content="
                      $t(
                        'Cho phép hiển thị để banner của bạn sẽ được hiển thị trên website'
                      )
                    "
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-switch v-model="model.isActive" />
                <br />
                <el-radio-group v-model="model.notificationPlatformType">
                  <el-radio-button
                    v-for="item in notificationPlatformType"
                    :key="item"
                    :label="item.value"
                    >{{ item.label }}
                  </el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :md="24" :sm="24">
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
                        v-show="
                          invalidTranslations.includes(`language${index}`)
                        "
                        class="el-icon-warning-outline"
                      />
                    </div>
                    <el-form
                      :ref="`language${index}`"
                      :model="item"
                      label-position="top"
                    >
                      <el-row :gutter="16">
                        <el-col :md="6" :sm="24">
                          <el-form-item
                            prop="expirationTime"
                            :label="$t('Ngày thông báo hết hạn')"
                          >
                            <el-date-picker
                              v-model="model.expirationTime"
                              class="w-100"
                              format="yyyy/MM/dd HH:mm:ss"
                              type="datetime"
                              value-format="yyyy-MM-dd HH:mm:ss"
                            />
                          </el-form-item>
                        </el-col>
                        <el-col :md="24" :sm="24">
                          <el-form-item
                            :rules="{
                              required: true,
                              message: $t('Vui lòng nhập tiêu đề'),
                              trigger: 'blur',
                            }"
                            prop="title"
                          >
                            <span slot="label">
                              <b>{{ $t("Tiêu đề") }}</b>
                            </span>
                            <el-input
                              v-model="item.title"
                              maxlength="200"
                              show-word-limit
                            />
                          </el-form-item>
                        </el-col>
                        <el-col :md="24" :sm="24">
                          <el-form-item
                            prop="message"
                            :label="$t('Mô tả ngắn')"
                            :rules="{
                              required: true,
                              message: $t('Vui lòng nhập mô tả'),
                              trigger: 'blur',
                            }"
                          >
                            <el-input
                              type="textarea"
                              v-model="item.message"
                              maxlength="500"
                              show-word-limit
                            />
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                  </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { createOrUpdate, getForEdit } from "@/api/flexibleNotification";
import pageLoading from "@/components/Loading/pageLoading";
import Tinymce from "@/components/Tinymce";
import { NotificationPlatformType } from "@/utils/enums";

export default {
  components: { pageLoading, Tinymce },
  props: ["reloadData", "isAllowCreate", "isAllowEdit"],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    notificationPlatformType: NotificationPlatformType,
    tabs: [
      {
        name: "general",
        label: "Tổng quan",
      },
    ],
    activeTab: "general",
    currentBannerSize: {
      width: 480,
      height: 291,
    },
    middleBannerSize: {
      width: 503,
      height: 203,
    },
    tabTranslationActive: "lang-0", // default show first tab
    invalidTranslations: [],
    isTranslationValid: true,
  }),
  computed: {
    formTitle() {
      return this.$route.query.id ? "Chi tiết " : "Tạo mới";
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
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
    }
  },
  methods: {
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
                message: this.$t("Tạo banner thành công"),
                showClose: true,
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa banner thành công"),
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

