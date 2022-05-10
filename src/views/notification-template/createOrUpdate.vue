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
            v-if="isAllowEdit && model.id"
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
            <el-col :sm="24">
              <el-form-item prop="topic">
                <span slot="label">
                  {{ $t("Loại tin nhắn") }}
                </span>
                <el-radio-group v-model="model.topic">
                  <el-radio
                    :label="item.value"
                    v-for="(item, index) in notificationTopics"
                    :key="index"
                    border
                    class="mr-2"
                    >{{ item.label }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :sm="24">
              <div class="d-flex">
                <el-form-item prop="isSendNow">
                  <span slot="label">
                    {{ $t("Chọn lịch gửi thông báo") }}
                  </span>
                  <el-radio-group v-model="model.isSendNow">
                    <el-radio :label="true" border class="mr-2">{{
                      $t("Gửi ngay")
                    }}</el-radio>
                    <el-radio :label="false" border class="mr-2">{{
                      $t("Chọn thời gian gửi")
                    }}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item prop="notificationTime" v-if="!model.isSendNow">
                  <span slot="label" class="mb-1">
                    {{ $t("Chọn ngày") }}
                  </span>
                  <el-date-picker
                    style="margin-top:1px"
                    v-model="model.notificationTime"
                    type="datetime"
                    :placeholder="$t('Chọn một ngày')"
                    format="yyyy/MM/dd HH:mm:ss"
                    value-format="yyyy/MM/dd HH:mm:ss"
                    :picker-options="datePickerOptions"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :sm="24">
              <el-form-item prop="isSendAllUser">
                <span slot="label">
                  {{ $t("Người nhận:") }}
                  <el-tooltip placement="bottom">
                    <div slot="content">
                      {{ $t("Gửi thông báo đến người dùng có 2 hình thức:") }}
                      <br />
                      -
                      {{
                        $t(
                          "Gửi thông báo đến tất cả người dùng: cho phép gửi thông báo đến tất cả người dùng."
                        )
                      }}
                      <br />
                      <div>
                        <p style="font-size:12px">
                          -
                          {{
                            $t(
                              "Tìm kiếm người dùng nhận thông báo: cho phép tìm kiếm dùng nhận thông báo."
                            )
                          }}
                        </p>
                        <p style="font-size:12px">
                          +
                          {{
                            $t(
                              "Gửi thông báo đến tất cả người dùng theo bộ lọc. (Mặc định)"
                            )
                          }}
                        </p>
                        <p class="mb-0" style="font-size:12px">
                          + {{ $t("Chọn người dùng nhận thông báo") }}
                        </p>
                      </div>
                    </div>
                    <i class="el-icon-info" />
                  </el-tooltip>
                </span>
                <el-radio-group v-model="model.isSendAllUser">
                  <el-radio-button :label="true">{{
                    $t("Gửi thông báo đến tất cả người dùng")
                  }}</el-radio-button>
                  <el-radio-button :label="false">{{
                    $t("Tìm kiếm người dùng nhận thông báo")
                  }}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :sm="24">
              <el-row :gutter="16">
                <el-col :sm="24" v-if="!model.isSendAllUser">
                  <el-form ref="sendUserForm" :model="filter">
                    <div
                      class="d-flex flex-column flex-md-row align-items-center justify-content-start"
                    >
                      <div>
                        <p class="ml-2">{{ $t("Ngày duyệt tài khoản") }}</p>
                        <div class="d-flex">
                          <div class="m-2">
                            <el-date-picker
                              v-model="filter.fromDate"
                              style="width: 150px;"
                              format="yyyy/MM/dd"
                              value-format="yyyy-MM-dd"
                              type="date"
                              :placeholder="$t('Từ ngày')"
                              clearable
                            />
                          </div>
                          <div class="m-2">
                            <el-date-picker
                              v-model="filter.toDate"
                              style="width: 150px;"
                              format="yyyy/MM/dd"
                              value-format="yyyy-MM-dd"
                              type="date"
                              :placeholder="$t('Đến ngày')"
                              clearable
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p class="ml-2">{{ $t("Ngày sinh") }}</p>
                        <div class="d-flex">
                          <div class="m-2">
                            <el-date-picker
                              v-model="filter.dateOfBirth"
                              style="width: 150px;"
                              format="yyyy/MM/dd"
                              value-format="yyyy-MM-dd"
                              type="date"
                              :placeholder="$t('Chọn ngày')"
                              clearable
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p class="ml-2">{{ $t("Giới tính") }}</p>
                        <el-select
                          v-model="filter.gender"
                          :placeholder="$t('Chọn giới tính')"
                          class="filter-item w-100"
                          style="width: 150px;"
                          clearable
                          filterable
                        >
                          <el-option
                            v-for="item in genderTypes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>
                      <div class="pt-4 mt-1">
                        <div class="m-2">
                          <el-input
                            v-model="filter.filterKeyword"
                            style="width:53rem"
                            :placeholder="
                              $t(
                                'Tìm theo tên, số điện thoại, địa chỉ email, mã khách hàng, số DKSH'
                              )
                            "
                            clearable
                            @clear="filter.filterKeyword = null"
                            @keyup.enter.native="handleSearch"
                          />
                        </div>
                      </div>

                      <div class="d-flex justify-content-end pt-4 mt-1">
                        <div class="m-2">
                          <el-button plain type="success" @click="handleSearch">
                            <i class="las la-search" />
                            <span>{{ $t("Tìm kiếm") }}</span>
                          </el-button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p class="ml-2">
                        {{ $t("Danh sách người gửi") }}
                        <el-tooltip placement="bottom">
                          <div slot="content">
                            {{ $t("Nhập danh sách mã khách hàng, CMND/CCCD") }}
                            <br />
                            <br />
                            {{ $t("Các giá trị cách nhau bởi dấu phẩy") }}
                            <br />
                            <br />
                            {{ $t("VD: 999C011107, 999C011109") }}
                          </div>
                          <i class="el-icon-info" />
                        </el-tooltip>
                      </p>
                      <el-form-item
                        :rules="customerListRules"
                        prop="customerList"
                      >
                        <el-input
                          v-model="filter.customerList"
                          :rows="3"
                          type="textarea"
                          style="width: 1170px;"
                        />
                      </el-form-item>
                    </div>
                  </el-form>
                  <div class="notHasFilter" v-show="!isHasFilter">
                    <p>
                      {{
                        $t(
                          "Vui lòng sử dụng bộ lọc để tìm kiếm người dùng cần gửi thông báo"
                        )
                      }}
                    </p>
                  </div>
                  <div v-show="isHasFilter" class="mt-5">
                    <div class="relative">
                      <input
                        type="checkbox"
                        v-model="isCheckAll"
                        class="checkBoxAll"
                        @change="handleCheckAll($event.target.checked)"
                      />
                      <el-table
                        v-loading="listLoading"
                        class="border-0 rounded-0"
                        :data="list"
                        fit
                        show-overflow-tooltip
                        stripe
                        @sort-change="handleSort"
                      >
                        <el-table-column align="left" prop="id" width="55px">
                          <template slot-scope="scope">
                            <div>
                              <input
                                type="checkbox"
                                :checked="lstSelectUser.includes(scope.row.id)"
                                @change="selectUser(scope.row.id)"
                              />
                            </div>
                          </template>
                        </el-table-column>

                        <el-table-column
                          :label="$t('Id')"
                          align="left"
                          prop="id"
                          sortable="custom"
                          width="150px"
                        >
                          <template slot-scope="scope">
                            <span>{{ scope.row.customerId }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          :label="$t('Tên đầy đủ')"
                          min-width="200px"
                          prop="fullName"
                          sortable="custom"
                        >
                          <template slot-scope="scope">
                            <div
                              class="py-1 w-max-100 text-ellipsis pointer c-blue d-inline-block"
                              :title="`${scope.row.fullName}`"
                              @click="handleEdit(scope.row)"
                            >
                              {{ scope.row.fullName }}
                            </div>
                          </template>
                        </el-table-column>
                        <el-table-column
                          :label="$t('Địa chỉ email')"
                          align="left"
                          prop="emailAddress"
                          width="270px"
                        >
                          <template slot-scope="scope">
                            <div class="w-max-100 text-ellipsis">
                              <span :title="scope.row.emailAddress">{{
                                scope.row.emailAddress
                              }}</span>
                            </div>
                          </template>
                        </el-table-column>
                        <el-table-column
                          :label="$t('Số DKSH')"
                          align="center"
                          prop="dkshNumber"
                          width="200px"
                        >
                          <template slot-scope="scope">
                            <span>{{ scope.row.dkshNumber }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          :label="$t('Số điện thoại')"
                          align="center"
                          prop="phoneNumber"
                          width="200px"
                        >
                          <template slot-scope="scope">
                            <span>{{ scope.row.phoneNumber }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          :label="$t('Giới tính')"
                          align="center"
                          prop="gender"
                          width="200px"
                        >
                          <template slot-scope="scope">
                            <span v-if="scope.row.gender == 'F'">{{
                              $t("Nữ")
                            }}</span>
                            <span v-else-if="scope.row.gender == 'M'">{{
                              $t("Nam")
                            }}</span>
                            <span v-else>---</span>
                          </template>
                        </el-table-column>

                        <el-table-column
                          :label="$t('Ngày sinh')"
                          align="center"
                          prop="dateOfBirth"
                          width="170px"
                        >
                          <template slot-scope="scope">
                            <span>{{ scope.row.dateOfBirth | date }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          :label="$t('Ngày duyệt tài khoản')"
                          align="center"
                          prop="approveTime"
                          width="170px"
                        >
                          <template slot-scope="scope">
                            <span>{{ scope.row.approveTime | dateTime }}</span>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                    <s-pagination
                      v-if="total > 0"
                      :current-page.sync="paging.page"
                      :page-size.sync="filter.rowsPerPage"
                      :page-sizes="[10, 20, 50, 100, 200, 500, 1000]"
                      :total="total"
                      auto-scroll
                      background
                      layout="total, sizes, prev, pager, next, jumper"
                      @size-change="loadData"
                      @current-change="loadData"
                    />
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :sm="24">
              <el-form-item prop="type">
                <span slot="label">
                  {{ $t("Hiển thị:") }}
                </span>
                <el-radio-group v-model="model.notificationPlatformType">
            <el-radio-button v-for="item in notificationPlatformType" :key="item" :label="item.value">{{item.label}}
            </el-radio-button>
                </el-radio-group>
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
                            message: $t('Vui lòng nhập tên thông báo'),
                            trigger: 'blur'
                          }"
                          prop="name"
                        >
                          <span slot="label">
                            <b>{{ $t("Tiêu đề") }}</b>
                          </span>
                          <el-input v-model="item.name" />
                        </el-form-item>
                      </el-col>
                      <el-col :md="24" :sm="24">
                        <el-form-item
                          prop="content"
                          :label="$t('Nội dung')"
                          :rules="{
                            required: true,
                            message: $t('Vui lòng nhập nội dung thông báo'),
                            trigger: 'blur'
                          }"
                        >
                          <el-input
                            v-model="item.content"
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4 }"
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
        <div id="history" class="mt-5">
          <div class="section-title">{{ $t("Lịch sử thông báo") }}</div>
          <div class="mt-5" v-if="model.id">
            <el-table
              v-loading="isLoadingHistory"
              class="border-0 rounded-0"
              :data="lstHistory"
              fit
              show-overflow-tooltip
              stripe
            >
              <el-table-column
                :label="$t('Tiêu đề')"
                min-width="200px"
                prop="fullName"
              >
                <template slot-scope="scope">
                  <div class="py-1 w-max-100 text-ellipsis">
                    {{ scope.row.name }}
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                :label="$t('Nội dung')"
                min-width="200px"
                prop="content"
              >
                <template slot-scope="scope">
                  <div class="py-1 w-max-100 text-ellipsis">
                    {{ scope.row.content }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('Hiển thị')"
                min-width="200px"
                prop="type">
                <template slot-scope="scope">
                  <div class="py-1 w-max-100 text-ellipsis">
                    <span v-if="scope.row.type == 0">{{ $t("Cả hai") }}</span>
                    <span v-if="scope.row.type == 1"> {{ $t("Web") }}</span>
                    <span v-if="scope.row.type == 2"> {{ $t("App") }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('Loại tin nhắn')"
                width="200px"
                prop="topic"
              >
                <template slot-scope="scope">
                  <div class="py-1 w-max-100 text-ellipsis">
                    <span>{{
                      notificationTopics.find(p => p.value == scope.row.topic)
                        ? notificationTopics.find(
                            p => p.value == scope.row.topic
                          ).label
                        : ""
                    }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('Hình thức gửi')"
                width="200px"
                prop="isSendNow"
              >
                <template slot-scope="scope">
                  <div class="py-1 w-max-100 text-ellipsis">
                    <span v-if="scope.row.isSendNow">{{ $t("Gửi ngay") }}</span>
                    <span v-else>{{ $t("Hẹn giờ") }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('Thời gian gửi')"
                align="center"
                prop="notificationTime"
                width="200px"
              >
                <template slot-scope="scope">
                  <span>{{ scope.row.notificationTime | dateTimeFull }}</span>
                </template>
              </el-table-column>

              <el-table-column
                :label="$t('Trạng thái')"
                width="200px"
                prop="notificationStatus"
              >
                <template slot-scope="scope">
                  <div class="py-1 w-max-100 text-ellipsis">
                    <el-tag
                      type="info"
                      v-if="scope.row.notificationStatus == 0"
                      style="width:108px;
                            background-color: #f4f4f5;
                            border-color: #e9e9eb;
                            color: #909399;"
                    >
                      {{ $t("Đang chờ gửi") }}</el-tag
                    >
                    <el-tag
                      v-if="scope.row.notificationStatus == 1"
                      style="width:108px"
                    >
                      {{ $t("Đang xử lý") }}</el-tag
                    >
                    <el-tag
                      type="success"
                      v-if="scope.row.notificationStatus == 2"
                      style="width:108px"
                    >
                      {{ $t("Gửi thành công") }}</el-tag
                    >
                    <el-tag
                      type="danger"
                      v-if="scope.row.notificationStatus == 3"
                      style="width:108px"
                    >
                      {{ $t("Gửi thất bại") }}</el-tag
                    >
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                :label="$t('Ngày tạo')"
                align="center"
                prop="creationTime"
                width="200px"
              >
                <template slot-scope="scope">
                  <span>{{ scope.row.creationTime | dateTimeFull }}</span>
                </template>
              </el-table-column>
            </el-table>
            <s-pagination
              :current-page.sync="pagingHistory.page"
              :page-size.sync="filterHistory.rowsPerPage"
              :page-sizes="[10, 20, 50, 100, 200, 500, 1000]"
              :total="totalHistory"
              auto-scroll
              background
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="loadHistory"
              @current-change="loadHistory"
            />
          </div>
          <div v-else class="mt-5 p-5">
            <p>
              {{
                $t(
                  "Bạn chưa có lịch sử thông báo. Vui lòng tạo thông báo trước khi xem lịch sử."
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import {
  createOrUpdate,
  getForEdit,
  getListUser,
  getAllUserIdByFilter,
  getListHistory
} from "@/api/notificationTemplate";
import { NotificationTopics, GenderTypes } from "@/utils/enums";
import pageLoading from "@/components/Loading/pageLoading";
import { NotificationPlatformType } from "@/utils/enums";

export default {
  components: { pageLoading },
  props: ["reloadData", "isAllowCreate", "isAllowEdit"],
  data() {
    const validatecustomerList = (rule, value, callback) => {
      if (!value) {
        return callback();
      }
      // check invalid value
      if(/[^A-Za-z0-9,\s]/g.test(value.trim())) {
        return callback(
          new Error("Chỉ nhận các giá trị cách nhau bởi dấu phẩy")
        );
      }
      
      // check invalid format
      var values = value.trim().match(/[^,\s][^\,]*[^,\s]*/g);
      if(values && values.length) {
        values.forEach(item => {
          if(/[\s]/g.test(item.trim())) {
            return callback(
              new Error("Chỉ nhận các giá trị cách nhau bởi dấu phẩy")
            );
          }
        });
      }
      
      callback();
    };
    return {
      showDialog: false,
      model: {
        isSendNow: true,
        isSendAllUser: true
      },
      customerListRules: { validator: validatecustomerList, trigger: "blur" },
      lstSelectUser: [],
      lstUnselectUser: [],
      datePickerOptions: {
        disabledDate(date) {
          var d = new Date();
          d.setDate(d.getDate() - 1);
          return date <= d;
        }
      },
      defaultFilter: {
        rowsPerPage: 10,
        gender: null,
        sortBy: "id",
        sortDirection: "desc",
        filterKeyword: ""
      },
      filter: {},
      notificationPlatformType:NotificationPlatformType,
      paging: {
        page: 1
      },
      isHasFilter: false,
      isLoading: false,
      isSubmit: false,
      tabs: [
        {
          name: "general",
          label: "Tổng quan"
        },
        {
          name: "history",
          label: "Lịch sử gửi thông báo"
        }
      ],
      activeTab: "general",
      tabTranslationActive: "lang-0", // default show first tab
      invalidTranslations: [],
      isTranslationValid: true,
      notificationTopics: NotificationTopics,
      listLoading: false,
      isShowCheckbox: false,
      list: [],
      total: 0,
      isCheckAll: false,
      lstHistory: [],
      isLoadingHistory: false,
      totalHistory: 0,
      filterHistory: {
        rowsPerPage: 10
      },
      pagingHistory: {
        page: 1
      },
      genderTypes: GenderTypes
    };
  },
  computed: {
    formTitle() {
      return this.$route.query.id
        ? "Chi tiết - " + this.model.name
        : "Tạo thông báo";
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
          if (!this.model.id) {
            this.model.isSendNow = true;
            this.model.isSendAllUser = true;
          }
          if (this.model.notificationTime) {
            this.model.notificationTime = this.dateTimeFormat(
              this.model.notificationTime,
              "/"
            );
          }
          if (this.model.id) {
            this.filterHistory.notificationTemplateId = this.model.id;
            this.loadHistory();
          }

          if (this.model.userIds) {
            let arr = this.model.userIds.split(",");
            if (arr && arr.length > 0) {
              this.lstSelectUser = arr.map(p => Number(p));
            }
          }

          if (this.model.jsonFilter) {
            let filter = JSON.parse(this.model.jsonFilter);

            if (filter) {
              this.filter = { ...filter };
              this.loadData();
              this.isHasFilter = true;
              if (this.lstSelectUser.length == 0) {
                this.isCheckAll = true;
                setTimeout(() => {
                  this.getAllUserIdByFilter();
                }, 100);
              }
            }
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
        });
    },
    saveItem() {
      this.$refs["model"].validate(valid => {
        if (valid) {
          this.isTranslationValid = this.validateTranslation();
          if (this.isTranslationValid) {
            if (!this.model.isSendAllUser && !this.isHasFilter) {
              this.$message({
                type: "error",
                message: this.$t(
                  "Vui lòng chọn hình thức nhận thống báo hoặc sử dụng bộ lọc để tìm kiếm người dùng nhận thông báo."
                ),
                showClose: true
              });
              return;
            }

            if (
              this.isHasFilter &&
              !this.isCheckAll &&
              this.lstSelectUser.length == 0
            ) {
              this.$message({
                type: "error",
                message: this.$t("Vui lòng chọn người dùng nhận thông báo."),
                showClose: true
              });
              return;
            }

            if (!this.model.isSendNow && !this.model.notificationTime) {
              this.$message({
                type: "error",
                message: this.$t("Vui lòng chọn ngày để gửi thông báo"),
                showClose: true
              });
              return;
            }

            if (
              !this.model.isSendNow &&
              new Date(this.model.notificationTime) <= new Date()
            ) {
              this.$message({
                type: "error",
                message: this.$t(
                  "Thời gian gửi thông báo phải lớn hơn ngày hiện tại"
                ),
                showClose: true
              });
              return;
            }
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
    selectUser(userId) {
      this.isCheckAll = false;
      let index = this.lstSelectUser.indexOf(userId);
      if (index > -1) {
        this.lstSelectUser.splice(index, 1);
        return;
      }
      this.lstSelectUser.push(userId);
    },
    loadData() {
      this.listLoading = true;
      getListUser({ ...this.filter, ...this.paging })
        .then(response => {
          if (response.data.result) {
            this.list = response.data.result.items;
            this.total = response.data.result.totalCount;
          }
        })
        .catch(error => {
          if (error.response) {
            this.$message({
              type: "error",
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true
            });
          }
        })
        .finally(() => {
          this.listLoading = false;
        });
    },
    loadHistory() {
      this.isLoadingHistory = true;
      getListHistory({ ...this.filterHistory, ...this.pagingHistory })
        .then(response => {
          if (response.data.result) {
            this.lstHistory = response.data.result.items;
            this.totalHistory = response.data.result.totalCount;
          }
        })
        .finally(() => {
          this.isLoadingHistory = false;
        });
    },
    handleSearch() {
      this.$refs["sendUserForm"].validate(valid => {
        if (!valid) {
          this.$message({
            type: "error",
            message: this.$t("Danh sách người gửi không hợp lệ"),
            showClose: true
          });
        } else {
          if (!this.isHasFilter) {
            this.filter = {
              ...this.defaultFilter,
              ...this.filter
            };
          }
          this.isHasFilter = true;
          this.isShowCheckbox = false;
          this.lstSelectUser = [];
          this.isCheckAll = false;
          this.loadData();
        }
      });
    },
    handleSort({ prop, order }) {
      if (!prop) return;
      this.filter.sortBy = prop;
      this.filter.sortDirection = order || "descending";
      this.loadData();
    },
    createOrUpdate() {
      this.isSubmit = true;
      if (!this.model.isSendAllUser) {
        this.model.jsonFilter = JSON.stringify(this.filter);
        if (!this.isCheckAll) {
          this.model.userIds = this.lstSelectUser.join(",");
        } else {
          this.model.userIds = "";
        }
      } else {
        this.model.jsonFilter = "";
        this.model.userIds = "";
      }

      let message =
        "Bạn có chắc muốn lưu thông báo này.<br/> Lưu ý: Thông báo gửi đi sẽ không thu hồi lại được.";
      if (this.model.isSendNow) {
        this.model.notificationTime = null;
        message = `Bạn có chắc muốn lưu thông báo này.<br/> Lưu ý: Bạn đang chọn hình thức "Gửi ngay" <br/> Thông báo gửi đi sẽ không thu hồi lại được.`;
      }

      this.$confirm(`${this.$t(message)}`, `${this.$t("Cảnh báo")}`, {
        confirmButtonText: this.$t("Tiếp tục"),
        cancelButtonText: this.$t("Hủy"),
        type: "warning",
        dangerouslyUseHTMLString: true
      })
        .then(() => {
          return createOrUpdate(this.model)
            .then(response => {
              if (response.data.success) {
                this.$emit("reloadData");
                if (!this.model.id) {
                  this.$message({
                    type: "success",
                    message: this.$t("Tạo thông báo thành công"),
                    showClose: true
                  });
                } else {
                  this.$message({
                    type: "success",
                    message: this.$t("Sửa thông báo thành công"),
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
        })
        .finally(() => {
          this.isSubmit = false;
        });
    },
    restFilter() {
      this.filter = {};
      this.isShowCheckbox = false;
      this.lstSelectUser = [];
      this.total = 0;
      this.list = [];
      this.page = 1;
      this.isLoading = false;
      this.isSubmit = false;
      this.isHasFilter = false;
      this.isCheckAll = false;
      this.model = {
        isSendNow: true,
        isSendAllUser: true
      };
    },
    closeDialog() {
      this.isTranslationValid = true;
      this.tabTranslationActive = "lang-0";
      this.$refs.model.clearValidate();
      this.$router.replace({});
      this.showDialog = false;
      this.isHasFilter = false;
      this.restFilter();
    },
    getAllUserIdByFilter() {
      this.isLoading = true;
      getAllUserIdByFilter({ ...this.filter })
        .then(rsp => {
          this.lstSelectUser = rsp.data.result;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handleCheckAll(val) {
      if (val) {
        this.getAllUserIdByFilter();
        return;
      }
      this.lstSelectUser = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.notHasFilter {
  width: 100%;
  padding: 50px;
  text-align: center;
  padding: 2rem 1.25rem;
  margin-top: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}
.relative {
  position: relative;
  .checkBoxAll {
    position: absolute;
    width: 13px;
    height: 13px;
    top: 12px;
    left: 24px;
    z-index: 100;
  }
}
</style>
