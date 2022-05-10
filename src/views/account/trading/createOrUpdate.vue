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
          <el-button
            type="primary"
            @click="update"
            v-if="isAllowCreate && !model.id"
            >{{ $t("Lưu") }}</el-button
          >
          <el-button
            type="primary"
            @click="update"
            v-else-if="isAllowEdit && model.id"
            >{{ $t("Lưu") }}</el-button
          >
          <el-button @click="showDialog = false">{{ $t("Đóng") }}</el-button>
        </div>
      </template>
      <s-tabs
        :active-tab="activeTab"
        :tabs="tabs"
        class="dialogFullscreen__tabs"
      />
      <div class="dialogFullscreen__content">
        <el-form ref="model" :model="model" label-position="top">
          <el-row id="statusManagement" :gutter="16">
            <h3 class="mb-4">{{ $t("Quản lý trạng thái") }}</h3>
            <el-col :span="24">
              <el-row :gutter="16">
                <el-col :span="24">
                  <div class="section-title">
                    {{ $t("Quản lý trạng thái") }}
                  </div>
                  <el-row :gutter="16">
                    <el-col :span="6">
                      <el-form-item
                        :label="$t('Trạng thái VSD')"
                        prop="vsdStatus"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn trạng thái VSD'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-select
                          v-model="model.vsdStatus"
                          :placeholder="$t('Chọn trạng thái VSD')"
                          class="filter-item w-100"
                          filterable
                        >
                          <el-option
                            v-for="item in vsdStatus"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item
                        :label="$t('Trạng thái hồ sơ gốc')"
                        prop="hardCopyDocumentStatus"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn trạng thái hồ sơ gốc'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-select
                          v-model="model.hardCopyDocumentStatus"
                          :placeholder="$t('Chọn trạng thái hồ sơ gốc')"
                          class="filter-item w-100"
                          clearable
                          filterable
                        >
                          <el-option
                            v-for="item in hardCopyDocumentStatus"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item prop="isAgreeToTradingOnline">
                        <span slot="label">
                          {{ $t("Giao dịch trực tuyến") }}
                          <el-tooltip
                            :content="
                              $t(
                                'Giao dịch trực tuyến có được kích hoạt hay không?'
                              )
                            "
                            placement="bottom"
                          >
                            <i class="el-icon-info" />
                          </el-tooltip>
                        </span>
                        <el-switch v-model="model.isAgreeToTradingOnline" />
                      </el-form-item>
                    </el-col>

                    <el-col :span="2">
                      <el-form-item prop="hasESign">
                        <span slot="label">
                          {{ $t("Đã ký ESign") }}
                          <el-tooltip
                            :content="
                              $t('Nếu set là Không, tài khoản sẽ ký lại ESign')
                            "
                            placement="bottom"
                          >
                            <i class="el-icon-info" />
                          </el-tooltip>
                        </span>
                        <el-switch v-model="model.hasESign" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item prop="isAgreeDisclaimer">
                        <span slot="label">
                          {{ $t("Đã ký thỏa thuận cung cấp thông tin") }}
                        </span>
                        <el-switch :disabled="model.hasESignConsentLetter" v-model="hasESignConsentLetter" />
                      </el-form-item>
                    </el-col>

                    <el-col :span="6">
                      <el-form-item
                        :label="$t('Hạn mức giao dịch')"
                        prop="vfmLevel"
                      >
                        <el-select
                          v-model="model.vfmLevel"
                          :placeholder="$t('Chọn hạn mức giao dịch')"
                          class="filter-item w-100"
                          :disabled="currentVfmLevel == vfmLevelType.Unlimited"
                        >
                          <el-option
                            v-for="item in vfmLevelLables"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :span="6">
                      <el-form-item prop="hardCopyDocumentUrl">
                        <template #label>
                          {{ $t("Tài liệu hồ sơ gốc") }}
                        </template>
                        <uploadFile
                          class="uploadFile"
                          :allow-multiple="true"
                          :allow-download-file="true"
                          :is-create-preview-file="false"
                          :max-file-size="100 * 1024 * 1024"
                          :max-files="1"
                          :src="model.hardCopyDocumentUrl"
                          :process-timeout="20000"
                          :folder-name="`UserPortfolio/${model.hashedId}`"
                          @onUploadSuccess="
                            (value) => {
                              model.hardCopyDocumentUrl = value;
                            }
                          "
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item prop="onlineTradingDocumentUrl">
                        <template #label>
                          {{ $t("Tài liệu giao dịch trực tuyến") }}
                        </template>
                        <uploadFile
                          class="uploadFile"
                          :allow-multiple="true"
                          :allow-download-file="true"
                          :is-create-preview-file="false"
                          :max-file-size="100 * 1024 * 1024"
                          :max-files="1"
                          :src="model.onlineTradingDocumentUrl"
                          :process-timeout="20000"
                          :folderName="`UserPortfolio/${model.hashedId}`"
                          @onUploadSuccess="
                            (value) => {
                              model.onlineTradingDocumentUrl = value;
                            }
                          "
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item
                        :label="
                          $t('Gửi tài liệu hồ sơ gốc + giao dịch trực tuyến')
                        "
                      >
                        <el-button
                          type="primary"
                          @click="sendVMFContractsToUser(model.id)"
                          >{{ $t("Gửi tài liệu hồ sơ") }}</el-button
                        >
                      </el-form-item>
                    </el-col>
                    <!-- <el-col
                      v-if="
                        !hasESignConsentLetter && !model.hasESignConsentLetter
                      "
                      :span="6"
                    >
                      <el-form-item
                        :label="
                          $t('Gửi yêu cầu ký thỏa thuận cung cấp thông tin')
                        "
                      >
                        <el-button
                          :loading="isConsentLoading"
                          :disabled="isSendConsentLetter"
                          @click="sendCustomerConsentLetterRequest(model.id)"
                          type="primary"
                          >{{ $t("Gửi yêu cầu") }}</el-button
                        >
                      </el-form-item>
                    </el-col> -->
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-row id="upgradeLimit" :gutter="16">
            <h3 class="mb-4">Nâng cấp hạn mức</h3>
            <el-col :span="24">
              <el-row :gutter="16">
                <el-col :span="24">
                  <el-row :gutter="16">
                    <el-col :span="24">
                      <div class="section-title">
                        {{ $t("Nâng cấp hạn mức") }}
                      </div>
                      <el-row :gutter="16">
                        <el-col :span="6">
                          <el-form-item
                            :label="$t('Video call')"
                            prop="dateOfBirth"
                          >
                            <uploadFile
                              class="uploadFile"
                              :acceptType="'video/mp4, application/zip, application/x-rar-compressed, application/octet-stream, application/x-zip-compressed'"
                              :allow-multiple="true"
                              :allowDownloadFile="true"
                              :isCreatePreviewFile="false"
                              :maxFileSize="5000 * 1024 * 1024"
                              :maxFiles="1"
                              :src="lstVideoSrc"
                              :processTimeout="20000"
                              :folderName="`UserPortfolio/${model.hashedId}`"
                              @onUploadSuccess="
                                (value) => {
                                  model.videoCallUrl = value;
                                }
                              "
                            ></uploadFile>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-row id="general" :gutter="16">
            <h3 class="mb-4">Tổng quan</h3>
            <el-col :span="24">
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
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-input v-model="model.fullName" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Số CMND')"
                        prop="dkshNumber"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập số CMND'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-input v-model="model.dkshNumber" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Loại DKSH')"
                        prop="dkshType"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập loại DKSH'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-select
                          v-model="model.dkshType"
                          :placeholder="$t('Chọn loại DKSH')"
                          class="filter-item w-100"
                        >
                          <el-option
                            v-for="item in dkshTypes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="emailAddress"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập địa chỉ email'),
                          trigger: ['blur', 'change'],
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
                            <i class="el-icon-info" />
                          </el-tooltip>
                        </template>
                        <el-input v-model="model.emailAddress" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        prop="phoneNumber"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập số điện thoại'),
                          trigger: ['blur', 'change'],
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
                            <i class="el-icon-info" />
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-input v-model="model.dkshIssuedPlace" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Ngày cấp CMND')"
                        prop="dkshIssuedDate"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn ngày cấp CMND'),
                          trigger: ['blur', 'change'],
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
                      <el-form-item :label="$t('Mã RM')" prop="saleCode">
                        <el-input v-model="model.saleCode" clearable />
                      </el-form-item>
                    </el-col>
                    <el-col :md="18" :sm="24"> </el-col>
                    <el-col :md="6" :sm="24" class="mt-3">
                      <el-form-item
                        :label="`${$t('Ảnh mặt trước CMND/CCCD')}`"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng chọn ảnh CMND/CCCD'),
                          trigger: 'change',
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
                            :folderName="`UserPortfolio/${model.hashedId}`"
                            :upload-file-name="`IdCardFront_${model.hashedId}.jpg`"
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
                          trigger: 'change',
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
                            :folderName="`UserPortfolio/${model.hashedId}`"
                            :upload-file-name="`IdCardBack_${model.hashedId}.jpg`"
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
                  <el-col :md="8" :sm="24" class="mt-3">
                    <el-form-item prop="additionalDocumentUrl">
                      <template #label>
                        {{ $t("Giấy tờ khác") }}
                      </template>
                      <uploadFile
                        class="uploadFile"
                        :accept-type="'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/zip, application/x-rar-compressed, application/octet-stream, application/x-zip-compressed'"
                        :allow-multiple="true"
                        :allow-download-file="true"
                        :is-create-preview-file="false"
                        :max-file-size="100 * 1024 * 1024"
                        :src="model.additionalDocumentUrl"
                        :process-timeout="20000"
                        :folderName="`UserPortfolio/${model.hashedId}`"
                        @onUploadSuccess="
                          (value) => {
                            model.additionalDocumentUrl = value;
                          }
                        "
                      />
                    </el-form-item>
                  </el-col>
                </el-col>
                <el-col class="mt-4">
                  <div class="section-title">
                    {{ $t("Hợp đồng sao kê") }}
                  </div>
                  <el-button
                    v-if="model.signedContractUrl"
                    type="primary"
                    icon="el-icon-download"
                    @click="downloadRP25"
                    >Phiếu RP0025</el-button
                  >
                  <el-button
                    v-if="model.signedVfITradeContractUrl"
                    type="primary"
                    icon="el-icon-download"
                    @click="downloadRP15"
                    >Phiếu RP0015</el-button
                  >
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
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
                          trigger: ['blur', 'change'],
                        }"
                        v-if="listBankBranch && listBankBranch.length > 0"
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
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-input v-model="model.bankAccountNumber" clearable />
                      </el-form-item>
                    </el-col>

                    <el-col :md="6" :sm="24">
                      <el-form-item
                        :label="$t('Tên chủ tài khoản')"
                        prop="bankAccountOwner"
                        :rules="{
                          required: true,
                          message: $t('Vui lòng nhập tên chủ tài khoản'),
                          trigger: ['blur', 'change'],
                        }"
                      >
                        <el-input v-model="model.bankAccountOwner" readonly />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row id="order" :gutter="16">
            <h3 class="mt-5">Thông tin đặt lệnh</h3>
            <el-col :span="24">
              <div class="mt-5 section-title">
                {{ $t("Danh sách lệnh đã đặt") }}
              </div>
              <el-table
                v-loading="listLoading"
                class="border-0 rounded-0"
                :data="orders"
                fit
                show-overflow-tooltip
                stripe
              >
                <el-table-column
                  :label="$t('Mã lệnh')"
                  align="left"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.orderId }}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  :label="$t('Linh Hoạt/iSaving')"
                  align="left"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span>{{
                      scope.row.orderType == 0 ? "Linh Hoạt" : "iSaving"
                    }}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  :label="$t('Loại lệnh')"
                  align="left"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span>{{
                      scope.row.srType == "NS"
                        ? "Mua"
                        : scope.row.srType == "NR"
                        ? "Bán"
                        : "Chuyển đổi"
                    }}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  :label="$t('Mã CCQ')"
                  align="left"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.codeName }}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  :label="$t('Giá trị')"
                  align="right"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span v-if="scope.row.amount"
                      >{{ scope.row.amount }} đ</span
                    >
                  </template>
                </el-table-column>

                <el-table-column
                  :label="$t('Số lượng CCQ')"
                  align="right"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span v-if="scope.row.quantity">{{
                      scope.row.quantity
                    }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
          <!-- <el-row id="consenLetter" :gutter="16">
            <h3 class="mt-5">Thông tin gửi yêu cầu ký consent letter lệnh</h3>
            <el-col :span="24">
              <div class="mt-5 section-title">
                {{ $t("Danh sách yêu cầu") }}
              </div>
              <el-table
                v-loading="listLoading"
                class="border-0 rounded-0"
                :data="orders"
                fit
                show-overflow-tooltip
                stripe
              >
                <el-table-column
                  :label="$t('Thời gian gửi')"
                  align="left"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.orderId }}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  :label="$t('Người yêu cầu')"
                  align="left"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span>{{
                      scope.row.orderType == 0 ? "Linh Hoạt" : "iSaving"
                    }}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  :label="$t('Người duyệt/Người gởi')"
                  align="left"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span>{{
                      scope.row.srType == "NS"
                        ? "Mua"
                        : scope.row.srType == "NR"
                        ? "Bán"
                        : "Chuyển đổi"
                    }}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  :label="$t('Trạng thái gởi')"
                  align="left"
                  prop="id"
                  sortable
                  width="200px"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.codeId }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row> -->
        </el-form>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import pageLoading from "@/components/Loading/pageLoading";
import UploadCroppedImage from "@/components/UploadCroppedImage";
import {
  GenderTypes,
  HardCopyDocumentStatus,
  VSDStatus,
  DkshType,
  VfmLevelLables,
  VfmLevelType,
} from "@/utils/enums";
import { Countries } from "@/utils/country";
import { Provinces } from "@/utils/province";
import { Districts } from "@/utils/district";
import { Wards } from "@/utils/ward";
import {
  getForEdit,
  sendVMFContractsToUser,
  sendCustomerConsentLetterRequest,
} from "@/api/account";
import { updateUserProfileTradingAccount } from "@/api/user";
import { getBanksForDropdown } from "@/api/bank";
import { getList } from "@/api/order";
import uploadFile from "@/components/uploadFile";
export default {
  components: {
    pageLoading,
    UploadCroppedImage,
    uploadFile,
  },
  props: ["isAllowCreate", "isAllowEdit"],
  data() {
    const self = this;
    return {
      showDialog: false,
      model: {
        permanentAddressCountry: null,
        bankCode: null,
      },
      lstFileSrc: "",
      listAdditionalDocumentUrl: "",
      modelRejected: {
        rejectedReason: "",
      },
      switchESignConsentLetter: false,
      vsdStatus: VSDStatus,
      dkshTypes: DkshType,
      hardCopyDocumentStatus: HardCopyDocumentStatus,
      lstHardCopyDocumentSrc: "",
      lstOnlineTradingDocumentUrl: "",
      hasESignConsentLetter: false,
      vfmLevelLables: VfmLevelLables,
      vfmLevelType: VfmLevelType,
      currentVfmLevel: "",
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
      orders: [],
      isLoading: false,
      isSubmit: false,
      isSendConsentLetter: false,
      listLoading: false,
      storageUrl: process.env.VUE_APP_STORAGE_FILE + "/userdocument",
      tabs: [
        {
          name: "statusManagement",
          label: "Quản lý trạng thái",
        },
        {
          name: "upgradeLimit",
          label: "Nâng cấp hạn mức",
        },
        {
          name: "general",
          label: "Tổng quan",
        },
        {
          name: "order",
          label: "Thông tin đặt lệnh",
        },
        {
          name: "consenLetter",
          label: "Thông tin gửi yêu cầu ký consent letter",
        },
      ],
      activeTab: "general",
      isRoleLoading: false,
      isConsentLoading: false,
      roleForDropdown: [],
      genderTypes: GenderTypes,
      previouslyPickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      issuedDatePickerOptions: {
        disabledDate(time) {
          if (self.model && self.model.dateOfBirth) {
            return (
              time.getTime() > Date.now() ||
              time.getTime() < self.model.dateOfBirth
            );
          }
          return time.getTime() > Date.now();
        },
      },
      maxLengthPhoneNumber: 15,
      lstVideoSrc: "",
    };
  },
  computed: {
    formTitle() {
      let customerId = this.model && this.model.customerId;
      return customerId
        ? `Tài khoản trading - ${customerId}`
        : "Tài khoản trading";
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
    "model.bankCode"(value) {
      if (!value) {
        this.model.bankBranch = null;
        this.listBankBranch = [];
      }

      var bank = this.listBank.find((p) => p.bankCode == this.model.bankCode);

      if (!bank || !bank.bankBranches) {
        this.listBankBranch = [];
        this.model.bankBranch = null;
      } else this.listBankBranch = [...bank.bankBranches];
    },
  },
  created() {
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
    }
    this.fetchBankList();
  },
  methods: {
    update() {
      this.isLoading = true;
      this.model.hasESignConsentLetter = this.hasESignConsentLetter;
      updateUserProfileTradingAccount(this.model)
        .then((resp) => {
          if (resp.data.success) {
            this.$emit("reloadData");
            this.$message({
              type: "success",
              message: "Cập nhật tài khoản thành công",
              showClose: true,
            });
            this.closeDialog();
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
    sendVMFContractsToUser(id) {
      sendVMFContractsToUser({ id: id })
        .then((response) => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: `${this.$t("Gửi tài liệu thành công")}`,
              showClose: true,
            });
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
        });
    },
    sendCustomerConsentLetterRequest(id) {
      this.isConsentLoading = true;
      const ids = [];
      ids.push(id);
      sendCustomerConsentLetterRequest(ids)
        .then((response) => {
          if (response.data.success) {
            this.$message({
              type: "success",
              message: `${this.$t("Gửi tài liệu thành công")}`,
              showClose: true,
            });
            this.isSendConsentLetter = true;
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
        .finally((_) => {
          this.isConsentLoading = false;
        });
    },
    downloadRP25() {
      window.open(`${this.storageUrl}/${this.model.signedContractUrl}`);
    },
    downloadRP15() {
      window.open(`${this.storageUrl}/${this.model.signedVfITradeContractUrl}`);
    },
    getDetail(id) {
      this.isLoading = true;
      getForEdit({ id: id, userType: 10 })
        .then((response) => {
          if (response.data.result) {
            this.showDialog = true;
            this.model = response.data.result;
            this.hasESignConsentLetter = this.model.hasESignConsentLetter;
            this.lstVideoSrc = this.model.videoCallUrl;
            this.currentVfmLevel = this.model.vfmLevel;
            if (this.model.additionalDocumentUrl) {
              this.listAdditionalDocumentUrl = this.model.additionalDocumentUrl;
            }

            this.lstFileSrc = this.model.changingInformationFormUrl;
            this.bindDataFromApi();
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
      this.getOrders(id);
    },
    getOrders(id) {
      getList(id)
        .then((response) => {
          if (response.data.result) {
            this.orders = response.data.result;
          }
        })
        .catch((error) => {})
        .finally(() => {});
    },
    bindDataFromApi() {
      if (this.model.permanentAddressProvince) {
        this.listPermanentDistrict = this.listDistrict.filter(
          (item) => item.parentId === this.model.permanentAddressProvince
        );
      }
      if (this.model.permanentAddressDistrict) {
        this.listPermanentWard = this.listWard.filter(
          (item) => item.parentId === this.model.permanentAddressDistrict
        );
      }
      if (this.model.contactAddressProvince) {
        this.listContactDistrict = this.listDistrict.filter(
          (item) => item.parentId === this.model.contactAddressProvince
        );
      }
      if (this.model.contactAddressDistrict) {
        this.listContactWard = this.listWard.filter(
          (item) => item.parentId === this.model.contactAddressDistrict
        );
      }
    },
    fetchBankList() {
      getBanksForDropdown()
        .then((response) => {
          if (response.data.result) {
            this.listBank = response.data.result;
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
        });
    },
    submitRejectedAccount() {
      this.$refs.ruleRejectedForm.validate((valid) => {
        if (valid) {
          this.model.rejectedReason = this.modelRejected.rejectedReason;
          this.model.isApproved = false;
          this.isLoading = true;
          updateUserInformation(this.model)
            .then((response) => {
              this.$emit("reloadData");
              this.closeDialog();
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
        } else {
          this.$message({
            type: "error",
            message: this.$t("Vui lòng nhập lý do từ chối tài khoản"),
            showClose: true,
          });
        }
      });
    },
    closeDialog() {
      this.$refs.model.clearValidate();
      this.isLoading = false;
      this.showDialog = false;
      this.lstVideoSrc = null;
      this.$router.replace({});
      this.listAdditionalDocumentUrl = null;
      // this.isShowRejectDialog = false;
      // this.$router.go(this.$router.currentRoute);
    },
    changePermanentAddressCountry() {
      this.model.permanentAddressProvince = null;
      this.model.permanentAddressDistrict = null;
      this.model.permanentAddressWard = null;
      this.listPermanentDistrict = [];
      this.listPermanentWard = [];
    },
    changePermanentAddressProvince() {
      this.model.permanentAddressDistrict = null;
      this.model.permanentAddressWard = null;
      // this.listPermanentProvince = [];
      this.listPermanentDistrict = [];
      this.listPermanentWard = [];
      if (this.model.permanentAddressProvince) {
        this.listPermanentDistrict = this.listDistrict.filter(
          (item) => item.parentId === this.model.permanentAddressProvince
        );
      }
    },
    changePermanentAddressDistrict() {
      this.model.permanentAddressWard = null;
      this.listPermanentWard = [];
      if (this.model.permanentAddressDistrict) {
        this.listPermanentWard = this.listWard.filter(
          (item) => item.parentId === this.model.permanentAddressDistrict
        );
      }
    },
    changeContactAddressCountry() {
      this.model.contactAddressProvince = null;
      this.model.contactAddressDistrict = null;
      this.model.contactAddressWard = null;
      this.listContactDistrict = [];
      this.listContactWard = [];
    },
    changeContactAddressProvince() {
      this.model.contactAddressDistrict = null;
      this.model.contactAddressWard = null;
      this.listContactDistrict = [];
      this.listContactWard = [];
      if (this.model.contactAddressProvince) {
        this.listContactDistrict = this.listDistrict.filter(
          (item) => item.parentId === this.model.contactAddressProvince
        );
      }
    },
    changeContactAddressDistrict() {
      this.model.contactAddressWard = null;
      this.listContactWard = [];
      if (this.model.contactAddressDistrict) {
        this.listContactWard = this.listWard.filter(
          (item) => item.parentId === this.model.contactAddressDistrict
        );
      }
    },
  },
};
</script>
