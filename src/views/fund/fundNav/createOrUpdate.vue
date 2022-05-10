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
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Loại quỹ')"
                    :rules="[
                      {
                        required: model.id ? false: true,
                        message: $t('Vui lòng chọn loại quỹ'),
                        trigger: 'blur',
                      },
                    ]"
                    prop="fundId"
                  >
                  <el-select
                    v-model="model.fundId"
                    class="filter-item"
                    clearable
                    filterable
                    :placeholder="$t('Chọn loại quỹ')"
                  >
                    <el-option
                      v-for="item in funds"
                      :key="item.id"
                      :value="item.value"
                      :label="item.label"
                    />
                  </el-select>
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('NAV')"
                    :rules="[
                      {
                        required: true,
                        message: $t('Vui lòng nhập NAV'),
                        trigger: 'blur',
                      },
                    ]"
                    prop="nav"
                  >
                    <el-input v-model="model.nav" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('PrevNav')"
                    :rules="[
                      {
                        required: true,
                        message: $t('Vui lòng nhập PrevNav'),
                        trigger: 'blur',
                      },
                    ]"
                    prop="prevNav"
                  >
                    <el-input v-model="model.prevNav" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Ngày giao dịch')"
                    :rules="[
                      {
                        required: true,
                        message: $t('Vui lòng nhập Ngày giao dịch'),
                        trigger: 'blur',
                      },
                    ]"
                    prop="dealDate"
                  >
                    <el-date-picker
                      v-model="model.dealDate"
                      type="date"
                      placeholder=""
                      :format="'dd/MM/yyyy'"
                      value-format="yyyy-MM-dd"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Nhập vào ngày')" prop="date">
                    <el-date-picker
                      v-model="model.date"
                      type="date"
                      placeholder=""
                      :format="'dd/MM/yyyy'"
                      value-format="yyyy-MM-dd"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Sub Fee')" prop="subFee">
                    <el-input v-model="model.subFee" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Redem Fee')" prop="RedemFee">
                    <el-input v-model="model.redemFee" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Trans Fee')" prop="transFee">
                    <el-input v-model="model.transFee" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Highest Lv')" prop="highestLv">
                    <el-input v-model="model.highestLv" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('Lowest Lv')" prop="lowestLv">
                    <el-input v-model="model.lowestLv" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('For Fund Unit')" prop="forFundUnit">
                    <el-input v-model="model.forFundUnit" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('For Total Value')"
                    prop="forTotalValue"
                  >
                    <el-input v-model="model.forTotalValue" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item :label="$t('For Ratio')" prop="forRatio">
                    <el-input v-model="model.forRatio" clearable />
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
import { createOrUpdate, getForEdit } from "@/api/fundNav";
import pageLoading from "@/components/Loading/pageLoading";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import Tinymce from "@/components/Tinymce";
import { fetchForDropdown } from "@/api/fund";
export default {
  components: { pageLoading, UploadCroppedImage, Tinymce },
  props: ["reloadData",'isAllowCreate','isAllowEdit'],
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
    funds: [],
    // bannerSizes: BannerSizes,
    tabTranslationActive: "lang-0", // default show first tab
    invalidTranslations: [],
    isTranslationValid: true,
  }),
  computed: {
    formTitle() {
      return this.$route.query.id ? "Chi tiết NAV" : "Tạo NAV";
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
          this.funds = response.data.result;
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
          if(this.model && !id) {
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            this.model.date = today.toISOString();
            this.model.dealDate = today.toISOString();
          }
          if(this.model && !this.model.fundId) {
              this.model.fundId = null;
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

