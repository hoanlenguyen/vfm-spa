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
                        'Cho phép hiển thị để banner của bạn sẽ được hiển thị trên website'
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
                        'Thứ tự hiển thị giúp banner của bạn lên top đầu trong danh sách'
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
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Loại banner')"
                :rules="{
                  required: true,
                  message: $t('Vui lòng chọn Loại banner'),
                  trigger: ['blur', 'change'],
                }"
                prop="bannerType"
                class="message-left"
              >
                <div class="d-inline-block">
                  <el-select
                    v-model="model.bannerType"
                    class="filter-item w-100"
                    clearable
                    filterable
                    :placeholder="$t('Chọn loại banner')"
                  >
                    <el-option
                      v-for="item in bannerTypes"
                      :key="item.id"
                      :value="item.value"
                      :label="item.label"
                    />
                  </el-select>
                </div>
              </el-form-item>
            </el-col>
            <template v-if="model.bannerType == 30">
              <el-col :sm="24">
                <el-row :gutter="16">
                  <el-col :md="6" :sm="24">
                    <el-form-item
                      :label="$t('Ảnh Background')"
                      prop="bannerUrl"
                    >
                      <UploadCroppedImage
                        ref="uploadBanner"
                        v-model="model.bannerUrl"
                        :is-rounded="false"
                        :preview-ratio="{
                          width: backgroundSize.width,
                          height: backgroundSize.height,
                        }"
                        :size-limit="2"
                        :folderName="storageFolder.banner"
                        @remove="model.bannerUrl = null"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </template>
            <template v-else>
              <el-col :sm="24">
                <el-row :gutter="16">
                  <el-col :md="6" :sm="24">
                    <el-form-item
                      :label="$t('Ảnh banner (ảnh cover video)')"
                      prop="bannerUrl"
                    >
                      <UploadCroppedImage
                        ref="uploadBanner"
                        v-model="model.bannerUrl"
                        :is-rounded="false"
                        :preview-ratio="
                          model.bannerType == 0
                            ? {
                                width: currentBannerSize.width,
                                height: currentBannerSize.height,
                              }
                            : {
                                width: middleBannerSize.width,
                                height: middleBannerSize.height,
                              }
                        "
                        :size-limit="2"
                        :folderName="storageFolder.banner"
                        @remove="model.bannerUrl = null"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :sm="24">
                    <el-form-item
                      :label="$t('Ảnh banner (ảnh cover video) mobile')"
                      prop="mobileBannerUrl"
                    >
                      <UploadCroppedImage
                        ref="uploadBanner"
                        v-model="model.mobileBannerUrl"
                        :is-rounded="false"
                        :preview-ratio="
                          model.bannerType == 0
                            ? {
                                width: currentBannerSize.width,
                                height: currentBannerSize.height,
                              }
                            : {
                                width: middleBannerSize.width,
                                height: middleBannerSize.height,
                              }
                        "
                        :size-limit="2"
                        :folderName="storageFolder.banner"
                        @remove="model.mobileBannerUrl = null"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :sm="24">
                    <el-form-item prop="attachmentUrl">
                      <template #label>
                        {{ $t("Nội dung PDF") }}
                      </template>
                      <uploadFile
                        class="uploadFile"
                        :acceptType="'application/pdf'"
                        :allow-multiple="false"
                        :allowDownloadFile="true"
                        :isCreatePreviewFile="false"
                        :maxFileSize="100 * 1024 * 1024"
                        :maxFiles="1"
                        :src="model.attachmentUrl"
                        :processTimeout="20000"
                        :folderName="`banner`"
                        @remove="model.mobileBannerUrl = null"
                        @onUploadSuccess="
                          (value) => {
                            model.attachmentUrl = value;
                          }
                        "
                      ></uploadFile>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :md="24" :sm="24">
                <el-form-item prop="videoUrl">
                  <span slot="label">
                    {{ $t("Link video(Youtube)") }}
                  </span>
                  <el-input v-model="model.videoUrl" />
                </el-form-item> </el-col
            ></template>

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
                      <!-- <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="shortDescription"
                          :label="$t('Mô tả ngắn')"
                        >
                          <tinymce
                            v-model="item.shortDescription"
                            :height="400"
                          />
                        </el-form-item>
                      </el-col> -->
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="slug"
                          :label="$t('Đường dẫn liên kết')"
                        >
                          <el-input v-model="item.slug" />
                        </el-form-item>
                      </el-col>
                      <!-- <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="urlRefBtnText"
                          :label="$t('Nội dung nút Xem chi tiết')"
                        >
                          <el-input v-model="item.urlRefBtnText" />
                        </el-form-item>
                      </el-col> -->
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="urlRef"
                          :label="$t('Đường dẫn liên kết nút Xem chi tiết')"
                        >
                          <el-input v-model="item.urlRef" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { createOrUpdate, getForEdit } from "@/api/banner";
import { BannerTypes, BannerSizes, StorageFolder } from "@/utils/enums";
import pageLoading from "@/components/Loading/pageLoading";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import Tinymce from "@/components/Tinymce";
import uploadFile from "@/components/uploadFile";

export default {
  components: { pageLoading, UploadCroppedImage, Tinymce, uploadFile },
  props: ["reloadData", "isAllowCreate", "isAllowEdit"],
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
    currentBannerSize: {
      width: 480,
      height: 291,
    },
    middleBannerSize: {
      width: 503,
      height: 203,
    },
    backgroundSize: {
      width: 360,
      height: 1350,
    },
    bannerTypes: BannerTypes,
    storageFolder: StorageFolder,
    // bannerSizes: BannerSizes,
    tabTranslationActive: "lang-0", // default show first tab
    invalidTranslations: [],
    isTranslationValid: true,
  }),
  computed: {
    formTitle() {
      return this.$route.query.id
        ? "Chi tiết - " + this.model.name
        : "Tạo banner";
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

