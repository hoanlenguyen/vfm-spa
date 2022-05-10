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
          <el-row :gutter="16">
            <div class="section-title" id="general">
              {{ $t("Thông tin chung") }}
            </div>
            <el-col :md="4" :sm="24">
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
            <el-col :md="20" :sm="24">
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
            <el-col :md="4" :sm="24">
              <el-form-item :label="$t('Ảnh đại diện')" prop="avatarUrl">
                <div class="w-95">
                  <UploadCroppedImage
                    v-model="model.avatarUrl"
                    :is-rounded="false"
                    :preview-ratio="{
                      width: 96,
                      height: 96
                    }"
                    :size-limit="2"
                    @remove="model.avatarUrl = null"
                  />
                </div>
              </el-form-item>
            </el-col>
            <!-- <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Tên')"
                :rules="[
                  {
                    required: true,
                    message: $t('Vui lòng nhập tên quỹ'),
                    trigger: 'blur',
                  },
                ]"
                prop="name"
              >
                <el-input v-model="model.name" clearable />
              </el-form-item>
            </el-col> -->
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Mã quỹ')"
                :rules="[
                  {
                    required: true,
                    message: $t('Vui lòng nhập mã quỹ'),
                    trigger: 'blur'
                  }
                ]"
                prop="fundCode"
              >
                <el-input v-model="model.fundCode" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Mô tả mã quỹ')"
                prop="fundCodeDescription"
              >
                <el-input v-model="model.fundCodeDescription" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('FSS ID')"
                :rules="[
                  {
                    required: true,
                    message: $t('Vui lòng nhập FSS ID'),
                    trigger: 'blur'
                  }
                ]"
                prop="fssFundId"
              >
                <el-input v-model="model.fssFundId" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="3" :sm="24">
              <el-form-item
                :label="$t('Danh mục')"
                prop="CategoryId"
                class="message-left w-100"
              >
                <div class="d-inline-block">
                  <el-select
                    v-model="model.categoryId"
                    class="w-100"
                    clearable
                    filterable
                    :placeholder="$t('Chọn danh mục')"
                  >
                    <el-option
                      v-for="item in fundCategories"
                      :key="item.id"
                      :value="item.value"
                      :label="item.label"
                    />
                  </el-select>
                </div>
              </el-form-item>
            </el-col>
            <el-col :md="3" :sm="24">
              <el-form-item
                :label="$t('Loại quỹ')"
                prop="CategoryId"
                class="message-left w-100"
              >
                <div class="d-inline-block">
                  <el-select
                    v-model="model.fundType"
                    class="w-100"
                    clearable
                    filterable
                    :placeholder="$t('Chọn loại quỹ')"
                  >
                    <el-option
                      v-for="item in fundTypes"
                      :key="item.id"
                      :value="item.value"
                      :label="item.label"
                    />
                  </el-select>
                </div>
              </el-form-item>
            </el-col>
            <el-col :md="3" :sm="24">
              <el-form-item
                :label="$t('Đầu tư tối thiểu cho linh hoạt')"
                prop="minLumpSumAmount"
              >
                <el-input v-model="model.minLumpSumAmount" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="3" :sm="24">
              <el-form-item
                :label="$t('Đầu tư tối thiểu cho SIP')"
                prop="minSIPAmount"
              >
                <el-input v-model="model.minSIPAmount" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="3" :sm="24">
              <el-form-item :label="$t('Min-sell')" prop="minSell">
                <el-input v-model="model.minSell" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="3" :sm="24">
              <el-form-item :label="$t('Min-remain')" prop="minRemain">
                <el-input v-model="model.minRemain" clearable />
              </el-form-item>
            </el-col>
            <!-- <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('% Trung bình trong 1 năm')"
                prop="averagedOneyear"
              >
                <el-input v-model="model.averageOneyear" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('% Trung bình trong 3 năm')"
                prop="averagedThreeYear"
              >
                <el-input v-model="model.averageThreeYear" clearable />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('% Trung bình trong 5 năm')"
                prop="averagedFiveYear"
              >
                <el-input v-model="model.averageFiveYear" clearable />
              </el-form-item>
            </el-col> -->
            <el-col :md="6" :sm="24">
              <el-form-item prop="isActive">
                <span slot="label">
                  {{ $t("Cho phép trade linh hoạt") }}
                </span>
                <el-switch v-model="model.isFlexibleTradingEnable" />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item prop="isActive">
                <span slot="label">
                  {{ $t("Cho phép trade SIP") }}
                </span>
                <el-switch v-model="model.isSipTradingEnable" />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item prop="riskLevel">
                <span slot="label">
                  {{ $t("Mức độ rủi ro") }}
                </span>
                <el-pagination
                  :current-page.sync="model.riskLevel"
                  background
                  :page-size="1"
                  layout="pager"
                  :total="10"
                >
                </el-pagination>
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Cut-off time cuối cùng trong tháng')"
                prop="lastCutOffTimeOfMonth"
              >
                <el-date-picker
                  v-model="model.lastCutOffTimeOfMonth"
                  class="w-100"
                  format="yyyy/MM/dd HH:mm:ss"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  default-time="14:30:00"
                />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('Mã ngân hàng linh hoạt')"
                prop="bankNormalCode"
              >
                <el-input v-model="model.bankNormalCode" class="w-100" />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item :label="$t('Mã ngân hàng SIP')" prop="bankSIPCode">
                <el-input v-model="model.bankSIPCode" class="w-100" clearable />
              </el-form-item>
            </el-col>
            <el-col :offset="4" :md="6" :sm="24">
              <el-form-item
                :label="$t('Tên tài khoản VA')"
                prop="vaAccountName"
              >
                <el-input
                  v-model="model.vaAccountName"
                  class="w-100"
                  clearable
                />
              </el-form-item>
            </el-col>

            <el-col :md="6" :sm="24">
              <el-form-item
                :label="$t('VA PartA linh hoạt')"
                prop="vaPartANormal"
              >
                <el-input
                  v-model="model.vaPartANormal"
                  class="w-100"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :md="6" :sm="24">
              <el-form-item :label="$t('VA PartA SIP')" prop="vaPartASIP">
                <el-input v-model="model.vaPartASIP" class="w-100" clearable />
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
                            message: $t('Vui lòng nhập tên'),
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
                        <el-form-item prop="fundComponentDescription">
                          <span slot="label">
                            <b>{{ $t("Mô tả độ rủi ro") }}</b>
                          </span>
                          <el-input
                            type="textarea"
                            :autosize="true"
                            v-model="item.fundComponentDescription"
                          />
                        </el-form-item>
                      </el-col>
                      <el-col :md="8" :sm="24">
                        <el-form-item
                          prop="statisticLabel1"
                          :label="$t('Tiêu chí 1')"
                        >
                          <el-input v-model="item.statisticLabel1" />
                        </el-form-item>
                      </el-col>
                      <el-col :md="8" :sm="24">
                        <el-form-item
                          prop="statisticLabel2"
                          :label="$t('Tiêu chí 2')"
                        >
                          <el-input v-model="item.statisticLabel2" />
                        </el-form-item>
                      </el-col>
                      <el-col :md="8" :sm="24">
                        <el-form-item
                          prop="statisticLabel3"
                          :label="$t('Tiêu chí 3')"
                        >
                          <el-input v-model="item.statisticLabel3" />
                        </el-form-item>
                      </el-col>
                      <el-col :md="8" :sm="24">
                        <el-form-item
                          prop="statisticValue1"
                          :label="$t('Giá trị tiêu chí 1')"
                        >
                          <el-input
                            type="textarea"
                            autosize
                            v-model="item.statisticValue1"
                          />
                        </el-form-item>
                      </el-col>

                      <el-col :md="8" :sm="24">
                        <el-form-item
                          prop="statisticValue2"
                          :label="$t('Giá trị tiêu chí 2')"
                        >
                          <el-input
                            type="textarea"
                            autosize
                            v-model="item.statisticValue2"
                          />
                        </el-form-item>
                      </el-col>

                      <el-col :md="8" :sm="24">
                        <el-form-item
                          prop="statisticValue3"
                          :label="$t('Giá trị tiêu chí 3')"
                        >
                          <el-input
                            type="textarea"
                            autosize
                            v-model="item.statisticValue3"
                          />
                        </el-form-item>
                      </el-col>
                      <el-col :md="12" :sm="24">
                        <el-form-item
                          prop="normalSubscriptionFee"
                          :label="$t('Phí linh hoạt')"
                        >
                          <tinymce
                            v-model="item.normalSubscriptionFee"
                            :height="400"
                          />
                        </el-form-item>
                      </el-col>
                      <el-col :md="12" :sm="24">
                        <el-form-item
                          prop="sipSubscriptionFee"
                          :label="$t('Phí SIP')"
                        >
                          <tinymce
                            v-model="item.sipSubscriptionFee"
                            :height="400"
                          />
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
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="fundInformation"
                          :label="$t('Thông tin quỹ')"
                        >
                          <tinymce
                            v-model="item.fundInformation"
                            :height="400"
                          />
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
              <div class="mt-4">
                <div class="section-title" id="landingPage">
                  {{ $t("Landing page") }}
                </div>
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
                      <el-row>
                        <el-col :md="24" :sm="24">
                          <el-form-item
                            prop="targetAndProfit"
                            :label="$t('Mục tiêu và lợi nhuận')"
                          >
                            <tinymce
                              v-model="item.targetAndProfit"
                              :height="400"
                            />
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
          </el-row>
          <div class="mt-5" id="fundComponent">
            <p class="mb-3 card-title">
              <span class="card-title section-title">{{
                $t("Danh mục đầu tư")
              }}</span>
            </p>
            <el-row>
              <el-col :md="4" :sm="24">
                <el-form-item
                  :label="$t('Ngày cập nhật danh mục đầu tư')"
                  prop="fundComponentUpdateTime"
                >
                  <el-date-picker
                    v-model="model.fundComponentUpdateTime"
                    class="w-100"
                    format="yyyy/MM/dd"
                    value-format="yyyy-MM-dd"
                    type="date"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="24">
                <fundComponentList
                  ref="fundComponentList"
                  :fundId="model.id"
                  v-if="model.id"
                />
                <p class="text-center font-weight-bold font-italic" v-else>
                  *Vui lòng tạo quỹ trước khi cập nhật danh mục đầu tư
                </p>
              </el-col>
            </el-row>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { createOrUpdate, getForEdit } from "@/api/fund";
import { FundTypes } from "@/utils/enums";
import { fetchForDropdown as fetchCategoryForDropdown } from "@/api/fundCategory";
import pageLoading from "@/components/Loading/pageLoading";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import Tinymce from "@/components/Tinymce";
import fundComponentList from "./fundComponent/list";

export default {
  components: { pageLoading, UploadCroppedImage, Tinymce, fundComponentList },
  props: ["reloadData", "isAllowCreate", "isAllowEdit"],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    tabs: [
      {
        name: "general",
        label: "Tổng quan"
      },
      {
        name: "landingPage",
        label: "Landing page"
      },
      {
        name: "fundComponent",
        label: "Danh mục đầu tư"
      }
    ],
    activeTab: "general",
    tabTranslationActive: "lang-0", // default show first tab
    invalidTranslations: [],
    isTranslationValid: true,
    tabSEOTranslationActive: "lang-0", // default show first tab
    isSEOTranslationValid: true,
    fundCategories: [],
    fundTypes: FundTypes
  }),
  computed: {
    formTitle() {
      return this.$route.query.id ? "Chi tiết quỹ" : "Tạo quỹ";
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
    this.fetchCategoryForDropdown();
  },
  methods: {
    getDetail(id) {
      this.isLoading = true;
      getForEdit(id)
        .then(response => {
          this.showDialog = true;
          this.model = response.data.result;
          if (!this.model.riskLevel) {
            this.model.riskLevel = 1;
          }
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
          if (this.model.lastCutOffTimeOfMonth) {
            this.model.lastCutOffTimeOfMonth = this.model.lastCutOffTimeOfMonth.replace(
              "T",
              " "
            );
          }
        });
    },
    fetchCategoryForDropdown() {
      fetchCategoryForDropdown()
        .then(response => {
          this.fundCategories = response.data.result;
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true
          });
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
      this.isSubmit = true;
      return createOrUpdate(this.model)
        .then(response => {
          if (response.data.success) {
            this.$emit("reloadData");
            if (!this.model.id) {
              this.$message({
                type: "success",
                message: this.$t("Tạo quỹ thành công"),
                showClose: true
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa quỹ thành công"),
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
      this.model = {};
      this.$router.replace({});
      this.showDialog = false;
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .el-pagination {
  justify-content: flex-start !important;
}
</style>
