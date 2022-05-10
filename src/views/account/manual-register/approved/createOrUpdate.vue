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
          <!-- <el-button type="primary" @click="update">{{ $t("Lưu") }}</el-button> -->

          <el-button @click="showDialog = false">{{ $t("Đóng") }}</el-button>
          <!-- <el-button type="primary" @click="manualCreateTradingAccount()"
            >{{ $t("Xác nhận tạo tài khoản") }}
          </el-button>
          <el-button type="danger" @click="manualCreateTradingAccount(false)"
            >{{ $t("Từ chối tạo tài khoản") }}
          </el-button> -->
        </div>
      </template>
      <s-tabs
        :active-tab="activeTab"
        :tabs="tabs"
        class="dialogFullscreen__tabs"
      />
      <div class="dialogFullscreen__content">
        <el-form ref="model" :model="model" label-position="top">
          <el-row :gutter="16">
            <!--            <el-col id="statusManagement" :span="18">-->
            <!--              <el-row :gutter="16">-->
            <!--                <el-col :span="24">-->
            <!--                   <div class="section-title">{{ $t("Quản lý trạng thái") }}</div>-->
            <!--                   <el-row :gutter="16">-->
            <!--                     <el-col :span="6">-->
            <!--                        <el-form-item-->
            <!--                          :label="$t('Trạng thái VSD')"-->
            <!--                          prop="vsdStatus"-->
            <!--                          :rules="{-->
            <!--                            required: true,-->
            <!--                            message: $t('Vui lòng chọn trạng thái VSD'),-->
            <!--                            trigger: ['blur', 'change']-->
            <!--                          }"-->
            <!--                        >-->
            <!--                          <el-select-->
            <!--                            v-model="model.vsdStatus"-->
            <!--                            :placeholder="$t('Chọn trạng thái VSD')"-->
            <!--                            class="filter-item w-100"-->
            <!--                            clearable-->
            <!--                            filterable-->
            <!--                          >-->
            <!--                            <el-option-->
            <!--                              v-for="item in vsdStatus"-->
            <!--                              :key="item.value"-->
            <!--                              :label="item.label"-->
            <!--                              :value="item.value"-->
            <!--                            />-->
            <!--                          </el-select>-->
            <!--                        </el-form-item>-->
            <!--                      </el-col>-->
            <!--                      <el-col :span="6">-->
            <!--                        <el-form-item-->
            <!--                          :label="$t('Trạng thái hồ sơ gốc')"-->
            <!--                          prop="hardCopyDocumentStatus"-->
            <!--                          :rules="{-->
            <!--                            required: true,-->
            <!--                            message: $t('Vui lòng chọn trạng thái hồ sơ gốc'),-->
            <!--                            trigger: ['blur', 'change']-->
            <!--                          }"-->
            <!--                        >-->
            <!--                          <el-select-->
            <!--                            v-model="model.hardCopyDocumentStatus"-->
            <!--                            :placeholder="$t('Chọn trạng thái hồ sơ gốc')"-->
            <!--                            class="filter-item w-100"-->
            <!--                            clearable-->
            <!--                            filterable-->
            <!--                          >-->
            <!--                            <el-option-->
            <!--                              v-for="item in hardCopyDocumentStatus"-->
            <!--                              :key="item.value"-->
            <!--                              :label="item.label"-->
            <!--                              :value="item.value"-->
            <!--                            />-->
            <!--                          </el-select>-->
            <!--                        </el-form-item>-->
            <!--                      </el-col>-->
            <!--                      <el-col :offset="3" :span="6">-->
            <!--                        <el-form-item-->
            <!--                          prop="isAgreeToTradingOnline"-->
            <!--                        >-->
            <!--                          <span slot="label">-->
            <!--                            {{ $t('Giao dịch trực tuyến') }}-->
            <!--                            <el-tooltip-->
            <!--                              :content="$t('Giao dịch trực tuyến có được kích hoạt hay không?')"-->
            <!--                              placement="bottom"-->
            <!--                            >-->
            <!--                              <i class="el-icon-info" />-->
            <!--                            </el-tooltip>-->
            <!--                          </span>-->
            <!--                          <el-switch v-model="model.isAgreeToTradingOnline" />-->
            <!--                        </el-form-item>-->
            <!--                      </el-col>-->
            <!--                      <el-col :offset="6" :md="9" :sm="24">-->
            <!--                        <el-form-item-->
            <!--                          prop="hardCopyDocumentUrl"-->
            <!--                        >-->
            <!--                          <template #label>-->
            <!--                            {{ $t('Tài liệu hồ sơ gốc') }}-->
            <!--                          </template>-->
            <!--                          <uploadFile-->
            <!--                            class="uploadFile"-->
            <!--                            :allow-multiple="true"-->
            <!--                            :allowDownloadFile="true"-->
            <!--                            :isCreatePreviewFile="false"-->
            <!--                            :maxFileSize="100 * 1024 * 1024"-->
            <!--                            :maxFiles="1"-->
            <!--                            :src="lstHardCopyDocumentSrc"-->
            <!--                            :processTimeout="20000"-->
            <!--                            :folderName="`UserPortfolio/${model.hashedId}`"-->
            <!--                            @onUploadSuccess="-->
            <!--                              (value) => {-->
            <!--                                model.hardCopyDocumentUrl = value;-->
            <!--                              }-->
            <!--                            "-->
            <!--                          ></uploadFile>-->
            <!--                        </el-form-item>-->
            <!--                      </el-col>-->
            <!--                      <el-col :md="9" :sm="24">-->
            <!--                        <el-form-item-->
            <!--                          prop="onlineTradingDocumentUrl"-->
            <!--                        >-->
            <!--                          <template #label>-->
            <!--                            {{ $t('Tài liệu giao dịch trực tuyến') }}-->
            <!--                          </template>-->
            <!--                          <uploadFile-->
            <!--                            class="uploadFile"-->
            <!--                            :allow-multiple="true"-->
            <!--                            :allowDownloadFile="true"-->
            <!--                            :isCreatePreviewFile="false"-->
            <!--                            :maxFileSize="100 * 1024 * 1024"-->
            <!--                            :maxFiles="1"-->
            <!--                            :src="lstOnlineTradingDocumentUrl"-->
            <!--                            :processTimeout="20000"-->
            <!--                            :folderName="`UserPortfolio/${model.hashedId}`"-->
            <!--                            @onUploadSuccess="-->
            <!--                              (value) => {-->
            <!--                                model.onlineTradingDocumentUrl = value;-->
            <!--                              }-->
            <!--                            "-->
            <!--                          ></uploadFile>-->
            <!--                        </el-form-item>-->
            <!--                      </el-col>-->
            <!--                   </el-row>-->
            <!--                </el-col>-->
            <!--              </el-row>-->
            <!--            </el-col>-->
            <!--            <el-col :span="6">-->
            <!--              <el-form-item :label="$t('Lý do từ chối tài khoản')">-->
            <!--                <el-input-->
            <!--                  v-model="model.rejectedReason"-->
            <!--                  type="textarea"-->
            <!--                  :rows="5"-->
            <!--                  clearable-->
            <!--                />-->
            <!--              </el-form-item>-->
            <!--            </el-col>-->
            <el-col id="general" :span="18">
              <el-row :gutter="16">
                <el-col :span="24">
                  <div class="section-title">{{ $t("Thông tin chung") }}</div>
                  <el-row :gutter="16">
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Họ và tên')"
                        prop="fullName"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập họ và tên'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-input v-model="model.fullName" clearable/>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Số CMND')"
                        prop="dkshNumber"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập số CMND'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-input v-model="model.dkshNumber" clearable/>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="emailAddress"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập địa chỉ email'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <template #label>
                          {{ $t("Địa chỉ email") }}
                          <el-tooltip :open-delay="400" placement="top">
                            <div slot="content" class="w-abs-max-350">
                              {{
                                $t(
                                  "Nếu nhà đầu tư gặp bất kỳ vấn đề trong việc đăng nhập tài khoản E-Trading (VD: quên mật khẩu), địa chỉ email này được dùng để xác nhận và tái kích hoạt tài khoản của nhà đầu tư cũng như nhận tất cả các dịch vụ và thông tin từ hệ thống online E-Trading và từ Công ty VFM."
                                )
                              }}
                            </div>
                            <i class="el-icon-info"/>
                          </el-tooltip>
                        </template>
                        <el-input v-model="model.emailAddress" clearable/>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="phoneNumber"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập số điện thoại'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <template #label>
                          {{ $t("Số điện thoại") }}
                          <el-tooltip :open-delay="400" placement="top">
                            <div slot="content" class="w-abs-max-350">
                              {{
                                $t(
                                  "Số điện thoại di động của nhà đầu tư hoạt động tại Việt Nam được sử dụng cho dịch vụ nhắn tin"
                                )
                              }}
                            </div>
                            <i class="el-icon-info"/>
                          </el-tooltip>
                        </template>
                        <el-input
                          v-model="model.phoneNumber"
                          :maxlength="maxLengthPhoneNumber"
                          clearable
                          show-word-limit
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Ngày sinh')"
                        prop="dateOfBirth"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập ngày sinh'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-date-picker
                          v-model="model.dateOfBirth"
                          :picker-options="previouslyPickerOptions"
                          class="w-100"
                          format="yyyy/MM/dd"
                          value-format="yyyy-MM-dd"
                          type="date"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Giới tính')"
                        prop="gender"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn giới tính'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.gender"
                          :placeholder="$t('Chọn giới tính')"
                          class="filter-item w-100"
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
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Nơi cấp CMND')"
                        prop="dkshIssuedPlace"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập nơi cấp CMND'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-input v-model="model.dkshIssuedPlace" clearable/>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Ngày cấp CMND')"
                        prop="dkshIssuedDate"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn ngày cấp CMND'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-date-picker
                          v-model="model.dkshIssuedDate"
                          :picker-options="issuedDatePickerOptions"
                          class="w-100"
                          format="yyyy/MM/dd"
                          value-format="yyyy-MM-dd"
                          type="date"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Mã RM')"
                        prop="saleCode"                        
                      >
                        <el-input v-model="model.saleCode" clearable/>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24" class="mt-3">
                      <el-form-item
                        :label="`${$t('Ảnh mặt trước CMND/CCCD')}`"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn ảnh CMND/CCCD'),
                          trigger: 'change'
                        }"
                        class="message-left"
                        prop="idCardFrontSideUrl"
                      >
                        <div class="w-100">
                          <UploadCroppedImage
                            ref="uploadAvatar"
                            v-model="model.idCardFrontSideUrl"
                            :is-rounded="false"
                            :preview-ratio="{ width: 1600, height: 1000 }"
                            :size-limit="2"
                            @remove="model.idCardFrontSideUrl = null"
                          />
                        </div>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24" class="mt-3">
                      <el-form-item
                        :label="`${$t('Ảnh mặt sau CMND/CCCD')}`"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn ảnh CMND/CCCD'),
                          trigger: 'change'
                        }"
                        class="message-left"
                        prop="idCardBackSideUrl"
                      >
                        <div class="w-100">
                          <UploadCroppedImage
                            ref="uploadAvatar"
                            v-model="model.idCardBackSideUrl"
                            :is-rounded="false"
                            :preview-ratio="{ width: 1600, height: 1000 }"
                            :size-limit="2"
                            @remove="model.idCardBackSideUrl = null"
                          />
                        </div>
                      </el-form-item>
                    </el-col>
                    <el-col :md="4" :sm="24" class="mt-3">
                      <el-form-item
                        :label="`${$t('Ảnh Selfie')}`"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn ảnh Selfie'),
                          trigger: 'change',
                        }"
                        class="message-left"
                        prop="selfieImageUrls"
                      >
                        <div class="w-95">
                          <UploadCroppedImage
                            ref="uploadAvatar"
                            v-model="model.selfieImageUrls"
                            :is-rounded="false"
                            :preview-ratio="{ width: 300, height: 300 }"
                            :size-limit="2"
                            :folderName="`UserPortfolio/${model.hashedId}`"
                            upload-file-name="SelfieImage_1"
                            @remove="model.selfieImageUrls = null"
                          />
                        </div>
                      </el-form-item>
                    </el-col>
                    <!-- <el-col :offset="2" :md="6" :sm="24" class="mt-3">
                      <el-form-item :label="$t('Mã giới thiệu')">
                        <el-input v-model="model.saleCode"/>
                      </el-form-item>
                    </el-col> -->
                  </el-row>
                </el-col>

                <el-col :span="24">
                  <div class="mt-5 section-title">
                    {{ $t("Địa chỉ thường trú") }}
                  </div>
                  <el-row :gutter="16">
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Quốc gia')"
                        prop="permanentAddressCountry"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn quốc gia'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.permanentAddressCountry"
                          class="filter-item w-100"
                          filterable
                          @change="changePermanentAddressCountry"
                        >
                          <el-option
                            v-for="item in listCountry"
                            :key="item.value"
                            :disabled="item.value != 234"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Tỉnh/Thành phố')"
                        prop="permanentAddressProvince"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn tỉnh/thành phố'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.permanentAddressProvince"
                          class="filter-item w-100"
                          clearable
                          filterable
                          @change="changePermanentAddressProvince"
                        >
                          <el-option
                            v-for="item in listPermanentProvince"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Quận/Huyện')"
                        prop="permanentAddressDistrict"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn quận/huyện'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.permanentAddressDistrict"
                          class="filter-item w-100"
                          clearable
                          filterable
                          @change="changePermanentAddressDistrict"
                        >
                          <el-option
                            v-for="item in listPermanentDistrict"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Phường/Xã')"
                        prop="permanentAddressWard"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn phường/xã'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.permanentAddressWard"
                          class="filter-item w-100"
                          clearable
                          filterable
                        >
                          <el-option
                            v-for="item in listPermanentWard"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :md="24" :sm="24">
                      <el-form-item
                        :label="$t('Địa chỉ')"
                        prop="permanentAddress"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập địa chỉ'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-input
                          v-model="model.permanentAddress"
                          :rows="2"
                          type="textarea"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>

                <el-col :span="24">
                  <div class="mt-5 section-title">
                    {{ $t("Địa chỉ liên lạc") }}
                  </div>
                  <el-row :gutter="16">
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Quốc gia')"
                        prop="contactAddressCountry"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn quốc gia'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.contactAddressCountry"
                          class="filter-item w-100"
                          filterable
                          @change="changeContactAddressCountry"
                        >
                          <el-option
                            v-for="item in listCountry"
                            :key="item.value"
                            :disabled="item.value != 234"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Tỉnh/Thành phố')"
                        prop="contactAddressProvince"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn tỉnh/thành phố'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.contactAddressProvince"
                          class="filter-item w-100"
                          clearable
                          filterable
                          @change="changeContactAddressProvince"
                        >
                          <el-option
                            v-for="item in listContactProvince"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Quận/Huyện')"
                        prop="contactAddressDistrict"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn quận/huyện'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.contactAddressDistrict"
                          class="filter-item w-100"
                          clearable
                          filterable
                          @change="changeContactAddressDistrict"
                        >
                          <el-option
                            v-for="item in listContactDistrict"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Phường/Xã')"
                        prop="contactAddressWard"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn phường/xã'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.contactAddressWard"
                          class="filter-item w-100"
                          clearable
                          filterable
                        >
                          <el-option
                            v-for="item in listContactWard"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :md="24" :sm="24">
                      <el-form-item
                        :label="$t('Địa chỉ')"
                        prop="contactAddress"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập địa chỉ'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-input
                          v-model="model.contactAddress"
                          :rows="2"
                          type="textarea"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>

                <el-col :span="24">
                  <div class="mt-5 section-title">
                    {{ $t("Thông tin tài khoản ngân hàng") }}
                  </div>
                  <el-row :gutter="16">
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Ngân hàng')"
                        prop="bankCode"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn ngân hàng'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-select
                          v-model="model.bankCode"
                          class="filter-item w-100"
                          clearable
                          filterable
                        >
                          <el-option
                            v-for="(item, index) in listBank"
                            :key="index"
                            :label="item.bankName"
                            :value="item.bankCode"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Chi nhánh')"
                        prop="bankBranch"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn chi nhánh ngân hàng'),
                          trigger: ['blur', 'change']
                        }"
                        v-if="listBankBranch && listBankBranch.length>0"
                      >
                        <el-select
                          v-model="model.bankBranch"
                          class="filter-item w-100"
                          clearable
                          filterable
                        >
                          <el-option
                            v-for="item in listBankBranch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Số tài khoản')"
                        prop="bankAccountNumber"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập số tài khoản'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-input v-model="model.bankAccountNumber" clearable/>
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Tên chủ tài khoản')"
                        prop="bankAccountOwner"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập tên chủ tài khoản'),
                          trigger: ['blur', 'change']
                        }"
                      >
                        <el-input v-model="model.bankAccountOwner" readonly/>
                      </el-form-item>
                    </el-col>
                  </el-row>
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
import pageLoading from '@/components/Loading/pageLoading'
import UploadCroppedImage from '@/components/UploadCroppedImage'
import {GenderTypes, HardCopyDocumentStatus, VSDStatus} from '@/utils/enums'
import {Countries} from '@/utils/country'
import {Provinces} from '@/utils/province'
import {Districts} from '@/utils/district'
import {Wards} from '@/utils/ward'
import {getForEdit, updateUserProfile} from '@/api/account'
import {getBanksForDropdown, getBankBranchesForDropdown} from '@/api/bank'
import uploadFile from '@/components/uploadFile'

export default {
  components: {
    pageLoading,
    UploadCroppedImage,
    uploadFile
  },
  props: ['reloadData'],
  data() {
    const self = this
    return {
      showDialog: false,
      model: {
        permanentAddressCountry: null,
        bankCode: null
      },
      listCountry: Countries,
      listProvince: Provinces,
      listPermanentProvince: Provinces,
      listContactProvince: Provinces,
      listDistrict: Districts,
      listPermanentDistrict: [],
      listContactDistrict: [],
      listWard: Wards,
      listPermanentWard: [],
      listContactWard: [],
      listBank: [],
      listBankBranch: [],
      selfieImageUrls: [],
      isLoading: false,
      isSubmit: false,
      tabs: [
        // {
        //   name: 'statusManagement',
        //   label: 'Quản lý trạng thái'
        // },
        {
          name: 'general',
          label: 'Tổng quan'
        }
      ],
      activeTab: 'general',
      isRoleLoading: false,
      roleForDropdown: [],
      genderTypes: GenderTypes,
      hardCopyDocumentStatus: HardCopyDocumentStatus,
      vsdStatus: VSDStatus,
      previouslyPickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      issuedDatePickerOptions: {
        disabledDate(time) {
          if (self.model && self.model.dateOfBirth) {
            return (
              time.getTime() > Date.now() ||
              time.getTime() < self.model.dateOfBirth
            )
          }
          return time.getTime() > Date.now()
        }
      },
      maxLengthPhoneNumber: 15,
      lstHardCopyDocumentSrc: '',
      lstOnlineTradingDocumentUrl: ''
    }
  },
  computed: {
    formTitle() {
      const fullName = this.model.fullName
      return this.$route.query.id
        ? `Chi tiết - ` + fullName
        : 'Tạo tài khoản trading'
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
    },
    'model.bankCode'(value){
      if(!value){
        this.model.bankBranch=null;
        this.listBankBranch= [];
      }
 
      var bank= this.listBank.find(p=>p.bankCode==this.model.bankCode);

      if(!bank || !bank.bankBranches){
        this.listBankBranch= [];
        this.model.bankBranch=null;
      }
      else  
        this.listBankBranch= [...bank.bankBranches];
    }    
  },
  created() {
    if (typeof this.$route.query.id !== 'undefined') {
      this.getDetail(this.$route.query.id)
    }
    this.fetchBankList()
  },
  methods: {
    update() {
      this.isLoading = true
      updateUserProfile(this.model)
        .then((resp) => {
          if (resp.data.success) {
            this.$emit('reloadData')
            this.$message({
              type: 'success',
              message: 'Cập nhật tài khoản thành công',
              showClose: true
            })
            this.closeDialog()
          }
        })
        .catch((error) => {
          if (error.response) {
            this.$message({
              type: 'error',
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true
            })
          }
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getDetail(id) {
      this.isLoading = true
      getForEdit({id: id, userType: 10})
        .then(response => {
          if (response.data.result) {
            this.showDialog = true
            this.model = response.data.result
            if (this.model.hardCopyDocumentUrl) {
              this.lstHardCopyDocumentSrc = this.model.hardCopyDocumentUrl
            }
            if (this.model.onlineTradingDocumentUrl) {
              this.lstOnlineTradingDocumentUrl = this.model.onlineTradingDocumentUrl
            }
            this.bindDataFromApi()
          }
        })
        .catch(error => {
          if (error.response) {
            this.$message({
              type: 'error',
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true
            })
          }
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    bindDataFromApi() {
      if (this.model.permanentAddressProvince) {
        this.listPermanentDistrict = this.listDistrict.filter(
          item => item.parentId === this.model.permanentAddressProvince
        )
      }
      if (this.model.permanentAddressDistrict) {
        this.listPermanentWard = this.listWard.filter(
          item => item.parentId === this.model.permanentAddressDistrict
        )
      }
      if (this.model.contactAddressProvince) {
        this.listContactDistrict = this.listDistrict.filter(
          item => item.parentId === this.model.contactAddressProvince
        )
      }
      if (this.model.contactAddressDistrict) {
        this.listContactWard = this.listWard.filter(
          item => item.parentId === this.model.contactAddressDistrict
        )
      }
    },
    fetchBankList() {
      getBanksForDropdown()
        .then(response => {
          if (response.data.result) {
            this.listBank = response.data.result
          }
        })
        .catch(error => {
          if (error.response) {
            this.$message({
              type: 'error',
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true
            })
          }
        })
    },
    fetchBankBranchList() {
      getBankBranchesForDropdown({bankCode: this.model.bankCode})
        .then(response => {
          if (response.data.result) {
            this.listBankBranch = response.data.result
          }
        })
        .catch(error => {
          if (error.response) {
            this.$message({
              type: 'error',
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true
            })
          }
        })
    },
    closeDialog() {
      this.$refs.model.clearValidate()
      this.isLoading = false
      this.showDialog = false
      this.$router.replace({})
      // this.$router.go(this.$router.currentRoute);
    },
    changePermanentAddressCountry() {
      this.model.permanentAddressProvince = null
      this.model.permanentAddressDistrict = null
      this.model.permanentAddressWard = null
      this.listPermanentDistrict = []
      this.listPermanentWard = []
    },
    changePermanentAddressProvince() {
      this.model.permanentAddressDistrict = null
      this.model.permanentAddressWard = null
      // this.listPermanentProvince = [];
      this.listPermanentDistrict = []
      this.listPermanentWard = []
      if (this.model.permanentAddressProvince) {
        this.listPermanentDistrict = this.listDistrict.filter(
          item => item.parentId === this.model.permanentAddressProvince
        )
      }
    },
    changePermanentAddressDistrict() {
      this.model.permanentAddressWard = null
      this.listPermanentWard = []
      if (this.model.permanentAddressDistrict) {
        this.listPermanentWard = this.listWard.filter(
          item => item.parentId === this.model.permanentAddressDistrict
        )
      }
    },
    changeContactAddressCountry() {
      this.model.contactAddressProvince = null
      this.model.contactAddressDistrict = null
      this.model.contactAddressWard = null
      this.listContactDistrict = []
      this.listContactWard = []
    },
    changeContactAddressProvince() {
      this.model.contactAddressDistrict = null
      this.model.contactAddressWard = null
      this.listContactDistrict = []
      this.listContactWard = []
      if (this.model.contactAddressProvince) {
        this.listContactDistrict = this.listDistrict.filter(
          item => item.parentId === this.model.contactAddressProvince
        )
      }
    },
    changeContactAddressDistrict() {
      this.model.contactAddressWard = null
      this.listContactWard = []
      if (this.model.contactAddressDistrict) {
        this.listContactWard = this.listWard.filter(
          item => item.parentId === this.model.contactAddressDistrict
        )
      }
    }
  }
}
</script>
