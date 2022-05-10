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
                    :content="$t('Cho phép hiển thị bài viết')"
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
                  trigger: ['blur', 'change']
                }"
                prop="displayOrder"
                class="message-left"
              >
                <span slot="label">
                  {{ $t("Thứ tự hiển thị") }}
                  <el-tooltip
                    :content="
                      $t(
                        'Thứ tự hiển thị giúp bài viết của bạn lên top đầu trong danh sách'
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
              <el-form-item prop="isHot">
                <span slot="label">
                  {{ $t("Nổi bật") }}
                  <el-tooltip
                    :content="
                      $t('Cho phép bài viết hiển thị trên DragonConnect')
                    "
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-switch v-model="model.isHot" />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item prop="isBannerLandingPage">
                <span slot="label">
                  {{ $t("Banner landing page") }}
                  <el-tooltip
                    :content="
                      $t('Hiển thị trên banner landing page')
                    "
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-switch v-model="model.isBannerLandingPage" />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Loại thư viện')"
                prop="postType"
                :rules="{
                  required: true,
                  message: $t('Vui lòng chọn loại thư viện'),
                  trigger: ['blur', 'change']
                }"
              >
                <el-select
                  v-model="model.postType"
                  :placeholder="$t('Chọn loại thư viện')"
                  class="filter-item w-100"
                >
                  <el-option
                    v-for="item in postTypeLables"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Chọn loại category')"
                prop="postFilterTypes"                 
              >
                <span slot="label">
                  {{ $t("Chọn loại category") }}
                  <el-tooltip
                    content="Chọn category để bài viết hiện ở tab tương ứng trên web và mobile app"
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-select
                  v-model="postFilterTypes"
                  multiple
                  :placeholder="$t('Chọn loại category')"
                  class="filter-item w-100"
                >
                  <el-option
                    v-for="item in postFilterTypeLables"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Loại nền tảng')"
                prop="platformType"
                :rules="{
                  required: true,
                  message: $t('Vui lòng chọn loại nền tảng'),
                  trigger: ['blur', 'change']
                }"
              >
                <el-select
                  v-model="model.platformType"
                  :placeholder="$t('Chọn loại nền tảng')"
                  class="filter-item w-100"
                >
                  <el-option
                    v-for="item in platformTypeLables"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Tag')"
                prop="postTagLevel"
              >
                <el-select
                  v-model="model.postTagLevel"
                  :placeholder="$t('Chọn tag')"
                  class="filter-item w-100"
                  clearable
                >
                  <el-option
                    v-for="item in postTagLevelLables"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item prop="publishDate">
                <span slot="label">
                  {{ $t("Ngày đăng") }}
                  <el-tooltip
                    :content="
                      $t(
                        'Nếu để trống sẽ lấy ngày tạo trong hệ thống để làm ngày đăng'
                      )
                    "
                    placement="bottom"
                  >
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-date-picker
                  v-model="model.publishDate"
                  class="w-100"
                  format="yyyy/MM/dd"
                  value-format="yyyy-MM-dd"
                  type="date"
                />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                prop="eventTime"
                :label="$t('Ngày tổ chức sự kiện')"
              >
                <el-date-picker
                  v-model="model.eventTime"
                  class="w-100"
                  format="yyyy/MM/dd HH:mm:ss"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                prop="expirationTime"
                :label="$t('Ngày kết thúc sự kiện')"
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

            <el-col :sm="24">
              <el-row :gutter="16">
                <el-col :md="4" :sm="24" class="pr-5">
                  <el-form-item :label="$t('Ảnh avatar')" prop="avatarUrl">
                    <UploadCroppedImage
                      ref="uploadAvatar"
                      v-model="model.avatarUrl"
                      :is-rounded="false"
                      :preview-ratio="{ width: 300, height: 300 }"
                      :size-limit="2"
                      :folder-name="storageFolder.post"
                      @remove="model.avatarUrl = null"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Ảnh banner')" prop="bannerUrl">
                    <UploadCroppedImage
                      ref="uploadBanner"
                      v-model="model.bannerUrl"
                      :is-rounded="false"
                      :preview-ratio="{ width: 480, height: 291 }"
                      :size-limit="2"
                      :folderName="storageFolder.post"
                      @remove="model.bannerUrl = null"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <el-col :md="24" :sm="24">
              <el-form-item prop="videoUrl">
                <span slot="label">
                  {{ $t("Link video") }}
                </span>
                <el-input v-model="model.videoUrl" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :sm="24">
              <el-form-item prop="podcastUrl">
                <span slot="label">
                  {{ $t("Link Podcast") }}
                </span>
                <!-- <el-input v-model="model.podcastUrl" /> -->
                <uploadFile
                      class="uploadFile"
                      :allow-multiple="false"
                      :allowDownloadFile="true"
                      :isCreatePreviewFile="false"
                      :maxFileSize="500 * 1024 * 1024"
                      :maxFiles="1"
                      :src="model.podcastUrl"
                      :processTimeout="20000"
                      :folderName="storageFolder.podcast"
					            @onUploadSuccess="
                        (value) => {
                          model.podcastUrl = value;
                        }
                      "
                    ></uploadFile>
              </el-form-item>
            </el-col>
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
                      )
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
                            trigger: 'blur'
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
                          <el-input
                            v-model="item.shortDescription"
                            type="textarea"
                            :rows="2"
                          />
                        </el-form-item>
                      </el-col>
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="fullDescription"
                          :label="$t('Mô tả chi tiết')"
                        >
                          <tinymce
                            v-model="item.fullDescription"
                            :height="600"
                            :folderName="storageFolder.post"
                          />
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
import { createOrUpdate, getForEdit } from "@/api/post";
import { StorageFolder, PostTypeLables,PostTagLevelLables,PlatformTypeLables, PostFilterTypeLables } from "@/utils/enums";
import pageLoading from "@/components/Loading/pageLoading";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import Tinymce from "@/components/Tinymce";
import uploadFile from "@/components/uploadFile";

export default {
  components: { pageLoading, UploadCroppedImage, Tinymce, uploadFile },
  props: ["reloadData",'isAllowCreate','isAllowEdit'],
  data() {
    const self = this;
    return {
      showDialog: false,
      model: { eventTime: null, expirationTime: null, postFilterTypes:[] },
      postFilterTypes:[],
      isLoading: false,
      isSubmit: false,
      tabs: [
        {
          name: "general",
          label: "Tổng quan"
        }
      ],
      activeTab: "general",
      storageFolder: StorageFolder,
      tabTranslationActive: "lang-0", // default show first tab
      invalidTranslations: [],
      isTranslationValid: true,
      postTypeLables: PostTypeLables,
      postFilterTypeLables:PostFilterTypeLables,
      postTagLevelLables:PostTagLevelLables,
      platformTypeLables:PlatformTypeLables
    };
  },
  computed: {
    formTitle() {
      return this.$route.query.id
        ? "Chi tiết - " + this.model.name
        : "Tạo Education library";
    }
  },
  watch: {
    "$route.query.id": function(val) {
      if (typeof val !== "undefined") {
        this.getDetail(val);        
      }
    },
    showDialog: function(val) {
      if (!val) {
        this.closeDialog();
      }
    }
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
        .then(response => {
          this.showDialog = true;
          this.model = response.data.result;
          this.postFilterTypes = this.model.postFilterTypeList.split(",").map(Number);
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true
          });
        })
        .finally(() => {
          this.isLoading = false;
          if (this.model.eventTime) {
            this.model.eventTime = this.model.eventTime.replace("T", " ");
          }
          if (this.model.expirationTime) {
            this.model.expirationTime = this.model.expirationTime.replace("T"," ");
          }
        });
    },
    saveItem() {
      this.$refs["model"].validate(valid => {
        if (valid) {
          this.isTranslationValid = this.validateTranslation();
          if (this.isTranslationValid) {
            this.createOrUpdate();
          } else {
            this.$message({
              type: "error",
              message: this.$t("Bạn chưa nhập đủ thông tin"),
              showClose: true
            });
          }
        } else {
          this.$message({
            type: "error",
            message: this.$t("Bạn chưa nhập đủ thông tin"),
            showClose: true
          });
        }
      });
    },
    validateTranslation() {
      if (this.model.translations && this.model.translations.length > 0) {
        this.model.translations.forEach((item, index) => {
          this.$refs[`language${index}`][0].validate(valid => {
            if (valid) {
              this.invalidTranslations = this.invalidTranslations.filter(
                item => item !== `language${index}`
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
      if (this.model.eventTime && this.model.expirationTime) {
        var eventTime = new Date(this.model.eventTime);
        var expirationTime = new Date(this.model.expirationTime);
        if (expirationTime < eventTime) {
          this.$message({
            type: "error",
            message: this.$t(
              "Thời gian kết thúc sự kiện phải lớn hơn ngày tổ chức sự kiện"
            ),
            showClose: true
          });
          return;
        }
      }
      this.model.postFilterTypeList= this.postFilterTypes.join();
      this.isSubmit = true;
      return createOrUpdate(this.model)
        .then(response => {
          if (response.data.success) {
            this.$emit("reloadData");
            if (!this.model.id) {
              this.$message({
                type: "success",
                message: this.$t("Tạo mới thành công"),
                showClose: true
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa thành công"),
                showClose: true
              });
            }
            this.showDialog = false;
          }
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi ${error.response.data.error.message}`),
            showClose: true
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
      this.model = { postFilterTypes:[]};
      this.$router.replace({});
      this.showDialog = false;
    }
  }
};
</script>
