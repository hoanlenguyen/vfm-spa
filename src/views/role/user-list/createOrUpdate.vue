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
            @click="saveItem"
            :loading="isSubmit"
            v-if="isAllowCreate && !model.id"
            >{{ $t("Lưu") }}</el-button
          >
          <el-button
            type="primary"
            @click="saveItem"
            :loading="isSubmit"
            v-if="isAllowEdit && model.id"
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
          <el-row id="general" :gutter="16">
            <div class="section-title">{{ $t("Thông tin chung") }}</div>

            <el-col :span="12">
              <el-col :md="24" :sm="24">
                <el-form-item prop="isActive">
                  <span slot="label">
                    {{ $t("Kích hoạt") }}
                  </span>
                  <el-switch v-model="model.isActive" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :sm="24">
                <el-form-item
                  :label="$t('Tài khoản')"
                  prop="userName"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập tài khoản'),
                    trigger: ['blur', 'change']
                  }"
                >
                  <el-input
                    v-model="model.userName"
                    clearable
                    :disabled="model.id != null"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :sm="24">
                <el-form-item
                  :label="$t('Họ và tên')"
                  prop="fullName"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập họ và tên'),
                    trigger: ['blur', 'change']
                  }"
                >
                  <el-input v-model="model.fullName" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="12" :sm="24">
                <el-form-item
                  prop="emailAddress"
                  :label="$t('Địa chỉ email')"
                  :rules="[
                    {
                      required: true,
                      message: $t('Vui lòng nhập địa chỉ email'),
                      trigger: ['blur', 'change']
                    },
                    {
                      type: 'email',
                      message: 'Địa chỉ email không đúng',
                      trigger: ['blur', 'change']
                    }
                  ]"
                >
                  <el-input
                    v-model="model.emailAddress"
                    clearable
                    :disabled="model.id != null"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :sm="24">
                <el-form-item
                  prop="phoneNumber"
                  :label="$t('Số điện thoại')"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập số điện thoại'),
                    trigger: ['blur', 'change']
                  }"
                >
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
                  v-if="!model.id"
                  prop="password"
                  :label="$t('Mật khẩu')"
                  :rules="{
                    required: true,
                    message: $t('Vui lòng nhập mật khẩu'),
                    trigger: ['blur', 'change']
                  }"
                >
                  <el-input
                    v-model="model.password"
                    type="password"
                    clearable
                    show-password
                  />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24" v-if="!model.id">
                <el-button
                  class="ml-3 btnGeneratePassword"
                  type="primary"
                  @click="generatePassword"
                  >{{ $t("Tạo mật khẩu") }}</el-button
                >
              </el-col>
              <el-col :md="12" :sm="24">
                <el-form-item :label="$t('Bộ phận')">
                  <el-select
                    class="w-100"
                    v-model="assignedRoleNames"
                    placeholder="Chọn bộ phận"
                  >
                    <el-option
                      v-for="item in lstRole"
                      :key="item.value"
                      :label="item.displayName"
                      :value="item.roleName"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
            <el-col :span="12" v-if="model.id && isAllowChangePassword">
              <el-col :md="6" :sm="24">
                <el-form-item prop="password" :label="$t('Cập nhật mật khẩu')">
                  <el-input
                    v-model="newPassword"
                    type="password"
                    clearable
                    show-password
                  />
                </el-form-item>
              </el-col>
              <el-col :md="6" :sm="24">
                <div class="d-flex">
                  <el-button
                    class="ml-3 btnGeneratePassword"
                    type="primary"
                    @click="
                      () => {
                        this.newPassword = this.createPassword(4, 2, 1, 1);
                      }
                    "
                    >{{ $t("Tạo mật khẩu") }}</el-button
                  >
                  <el-button
                    class="ml-3 btnGeneratePassword"
                    type="success"
                    :loading="isUpdatePassword"
                    @click="adminUpdatePassword"
                    >{{ $t("Cập nhật") }}</el-button
                  >
                </div>
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
import pageLoading from "@/components/Loading/pageLoading";
import {
  getForEdit,
  createOrUpdate,
  getAllRoles,
  adminUpdatePassword
} from "@/api/userAdmin";
export default {
  props: ["isAllowCreate", "isAllowEdit", "isAllowChangePassword"],
  components: {
    pageLoading
  },
  data() {
    const self = this;
    return {
      showDialog: false,
      // isShowRejectDialog: false,
      model: {},
      isLoading: false,
      isSubmit: false,
      maxLengthPhoneNumber: 15,
      tabs: [
        {
          name: "general",
          label: "Thông tin chung"
        }
      ],
      activeTab: "general",
      assignedRoleNames: "",
      lstRole: [],
      isUpdatePassword: false,
      newPassword: ""
    };
  },
  computed: {
    formTitle() {
      return this.$route.query.id ? "Chi tiết nhân sự" : "Tạo nhân sự";
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
  created() {
    this.getAllRoles();
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
    }
  },
  methods: {
    adminUpdatePassword() {
      if (!this.newPassword) {
        this.$message({
          type: "error",
          message: this.$t("Vui lòng nhập mật khẩu"),
          showClose: true
        });
        return;
      }
      let data = {
        userId: this.model.id,
        password: this.newPassword
      };
      this.isUpdatePassword = true;
      adminUpdatePassword(data)
        .then(resp => {
          this.$message({
            type: "success",
            message: this.$t("Cập nhật mật khẩu thành công"),
            showClose: true
          });
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi ${error.response.data.error.message}`),
            showClose: true
          });
        })
        .finally(() => {
          this.isUpdatePassword = false;
        });
    },
    getDetail(id) {
      this.isLoading = true;
      getForEdit(id)
        .then(response => {
          this.showDialog = true;
          this.model = response.data.result.user;
          this.assignedRoleNames = response.data.result.assignedRoleNames;
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
    getAllRoles() {
      getAllRoles().then(resp => {
        this.lstRole = resp.data.result;
      });
    },
    generatePassword() {
      this.model.password = this.createPassword(4, 2, 1, 1);
    },
    createPassword(numLc, numUc, numDigits, numSpecial) {
      numLc = numLc || 4;
      numUc = numUc || 4;
      numDigits = numDigits || 4;
      numSpecial = numSpecial || 2;

      const lcLetters = "abcdefghijklmnopqrstuvwxyz";
      const ucLetters = lcLetters.toUpperCase();
      const numbers = "0123456789";
      const special = "!?=#*$@+-.";

      const getRand = function(values) {
        return values.charAt(Math.floor(Math.random() * values.length));
      };

      // + Jonas Raoni Soares Silva
      // @ http://jsfromhell.com/array/shuffle [v1.0]
      function shuffle(o) {
        // v1.0
        for (
          var j, x, i = o.length;
          i;
          j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        ) {}
        return o;
      }

      const pass = [];
      for (let i = 0; i < numLc; ++i) {
        pass.push(getRand(lcLetters));
      }
      for (let i = 0; i < numUc; ++i) {
        pass.push(getRand(ucLetters));
      }
      for (let i = 0; i < numDigits; ++i) {
        pass.push(getRand(numbers));
      }
      for (let i = 0; i < numSpecial; ++i) {
        pass.push(getRand(special));
      }

      return shuffle(pass).join("");
    },
    saveItem() {
      if (!this.assignedRoleNames) {
        this.$message({
          type: "error",
          message: this.$t("Vui lòng chọn bộ phận"),
          showClose: true
        });
        return;
      }
      this.$refs["model"].validate(valid => {
        if (valid) {
          this.createOrUpdate();
        } else {
          this.$message({
            type: "error",
            message: this.$t("Bạn chưa nhập đủ thông tin"),
            showClose: true
          });
        }
      });
    },
    createOrUpdate() {
      this.isSubmit = true;
      this.model.name = this.model.fullName;
      this.model.surname = this.model.fullName;
      const data = {
        user: this.model,
        assignedRoleNames: this.assignedRoleNames
      };
      return createOrUpdate(data)
        .then(response => {
          if (response.data.success) {
            this.$emit("reloadData");
            if (!this.model.id) {
              this.$message({
                type: "success",
                message: this.$t("Tạo nhân sự thành công"),
                showClose: true
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa nhân sự thành công"),
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
      this.$refs.model.clearValidate();
      this.model = {};
      this.$router.replace({});
      this.showDialog = false;
      this.newPassword = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.btnGeneratePassword {
  margin-top: 24px;
}
</style>
