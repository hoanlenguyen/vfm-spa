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
      @before-close="showDialog=false"
    >
      <template #title>
        <div class="dialogFullscreen__title">
          <span class="el-dialog__title">{{ formTitle }}</span>
          <el-button @click="closeDialog">{{ $t('Đóng') }}</el-button>
        </div>
      </template>
      <s-tabs
        :active-tab="activeTab"
        :tabs="tabs"
        class="dialogFullscreen__tabs"
      />
      <div class="dialogFullscreen__content">
        <el-form
          ref="model"
          :model="model"
          label-position="top"
        >
          <el-row id="general" :gutter="16">
            <div
              class="section-title"
            >{{ $t('Thông tin chung') }}
            </div>
            <el-col :span="24">
              <el-row :gutter="16">
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Mã lệnh')"
                    prop="orderId"
                  >
                    <el-input
                      v-model="model.orderId"
                      clearable
                      readonly
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Hình thức đầu tự')"
                    prop="orderType"
                  >
                    <el-select
                      v-model="model.orderType"
                      :placeholder="$t('Chọn hình thức đầu tự')"
                      class="filter-item w-100"
                      clearable
                      disabled
                      filterable
                    >
                      <el-option
                        v-for="item in OrderTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Loại lệnh')"
                    prop="srType"
                  >
                    <el-select
                      v-model="model.srType"
                      :placeholder="$t('Chọn loại lệnh')"
                      class="filter-item w-100"
                      clearable
                      disabled
                      filterable
                    >
                      <el-option
                        v-for="item in SRTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Mã CCQ')"
                    prop="codeName"
                  >
                    <el-input
                      v-model="model.codeName"
                      clearable
                      readonly
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Giá trị')"
                    prop="amount"
                  >
                    <vue-numeric
                      v-model="model.amount"
                      :currency="$t('đ')"
                      :min="0"
                      class="input-numeric"
                      currency-symbol-position="suffix"
                      read-only
                      read-only-class="input-numeric"
                      separator="."
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Khối lượng bán')"
                    prop="quantity"
                  >
                    <el-input
                      v-model="model.quantity"
                      :min="0"
                      clearable
                      readonly
                      type="number"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Trạng thái lệnh')"
                    prop="orderStatus"
                  >
                    <el-select
                      v-model="model.orderStatus"
                      :placeholder="$t('Chọn')"
                      class="filter-item w-100"
                      clearable
                      disabled
                      filterable
                    >
                      <el-option
                        v-for="item in OrderStatusTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Mã khách hàng')"
                    prop="customerId"
                  >
                    <el-input
                      v-model="model.customerId"
                      clearable
                      readonly
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Tên khách hàng')"
                    prop="customerName"
                  >
                    <el-input
                      v-model="model.customerName"
                      clearable
                      readonly
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Ngày đặt lệnh')"
                    prop="creationTime"
                  >
                    <el-date-picker
                      v-model="model.creationTime"
                      format="yyyy/MM/dd"
                      value-format="yyyy-MM-dd"
                      readonly
                      type="date"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Cut-off Time')"
                    prop="cutOffTime"
                  >
                    <el-date-picker
                      v-model="model.cutOffTime"
                      format="yyyy/MM/dd"
                      value-format="yyyy-MM-dd"
                      readonly
                      type="date"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Ngày giao dịch')"
                    prop="tradingDate"
                  >
                    <el-date-picker
                      v-model="model.tradingDate"
                      format="yyyy/MM/dd"
                      value-format="yyyy-MM-dd"
                      readonly
                      type="date"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Ngày cập nhật')"
                    prop="lastModificationTime"
                  >
                    <el-date-picker
                      v-model="model.lastModificationTime"
                      format="yyyy/MM/dd"
                      value-format="yyyy-MM-dd"
                      readonly
                      type="date"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  v-if="model.orderHistories && model.orderHistories.length > 0"
                  class="w-abs-max-620"
                  :md="12" :sm="24"
                >
                  <el-form-item
                    :label="$t('Lịch sử đặt lệnh')"
                    prop="orderHistories"
                  >
                    <el-table
                      :data="model.orderHistories"
                      class="mt-3 rounded-md"
                      fit
                      show-overflow-tooltip
                      stripe
                    >
                      <el-table-column
                        :label="$t('Mã lệnh')"
                        prop="orderId"
                        sortable
                        width="200px"
                      >
                        <template slot-scope="scope">
                          <div
                            class="py-1 w-max-100 text-ellipsis-1 pointer c-blue"
                          >{{ scope.row.orderId }}
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column
                        :label="$t('Trạng thái lệnh')"
                        align="left"
                        min-width="200px"
                        prop="orderStatus"
                        sortable
                      >
                        <template slot-scope="scope">
                          <span>{{ convertArrayToObj(OrderStatusTypes)[scope.row.orderStatus] }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column
                        :label="$t('Ngày cập nhật')"
                        align="center"
                        prop="lastModificationTime"
                        sortable
                        width="170px"
                      >
                        <template slot-scope="scope">
                          <span>{{ scope.row.lastModificationTime | dateTime }}</span>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading"/>
  </div>
</template>

<script>
import {getDetail} from '@/api/order'
import pageLoading from '@/components/Loading/pageLoading'
import Tinymce from '@/components/Tinymce'
import {OrderStatusTypes, OrderTypes, OrderTypeList, SRTypes} from "@/utils/enums";

export default {
  components: {pageLoading, Tinymce},
  props: ['reloadData'],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    tabs: [
      {
        name: 'general',
        label: 'Tổng quan'
      }
    ],
    activeTab: 'general',
    OrderTypes,
    OrderTypeList,
    OrderStatusTypes,
    SRTypes,
  }),
  computed: {
    formTitle() {
      return this.model ? `#${this.model.orderId}` : this.$t('Đặt lệnh')
    }
  },
  watch: {
    '$route.query.id': function (val) {
      if (typeof val !== 'undefined') {
        this.getDetail(val)
      }
    },
    showDialog: function (val) {
      if (!val) {
        this.closeDialog()
      }
    }
  },
  mounted() {
    if (typeof this.$route.query.id !== 'undefined') {
      this.getDetail(this.$route.query.id)
    }
  },
  methods: {
    getDetail(id) {
      this.isLoading = true
      getDetail(id)
        .then((response) => {
          this.showDialog = true
          this.model = response.data.result
          if (this.model.orderType === OrderTypeList.Normal) {
            this.model.orderStatus = String(this.model.orderStatus);
          }
        })
        .catch((error) => {
          this.$message({
            type: 'error',
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    closeDialog() {
      this.model = {}
      this.$router.replace({})
      this.showDialog = false
    }
  }
}
</script>
