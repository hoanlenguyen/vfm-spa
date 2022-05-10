<template>
  <div class="page-wrapper d-flex justify-content-center h-min-100vh">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col w-abs-max-480 flex-column d-flex justify-content-between h-min-100vh"
        >
          <div class="form-wrapper card card-shadowed rounded-sm">
            <el-form
              ref="loginForm"
              :model="loginForm"
              :rules="loginRules"
              autocomplete="on"
              label-position="left"
              class="card-body"
            >
              <div class="text-center mb-5">
                <a
                  href="https://stonehub-admin.yoong.vn"
                  target="_blank"
                  rel="https://stonehub-admin.yoong.vn"
                >
                  <img src="@/assets/logo-full.svg" alt="Stonehub" />
                </a>
                <p class="mt-3 px-5">
                  Power your website with a CMS <br />that makes it easy to grow
                  better.
                </p>
              </div>

              <div v-if="isShowSwitchTenantControl">
                <el-form-item style="margin-bottom: 10px">
                  <span style="margin-right: 5px">{{
                    $t("Switch To Tenant")
                  }}</span>
                  <el-switch v-model="switchToTenant" />
                </el-form-item>
                <el-form-item prop="tenant">
                  <el-input
                    v-model="loginForm.tenant"
                    :placeholder="$t('Tenancy name')"
                    name="password"
                    :disabled="!switchToTenant"
                    @keyup.enter.native="handleLogin"
                  />
                </el-form-item>
              </div>

              <el-form-item prop="username">
                <el-input
                  ref="username"
                  v-model="loginForm.username"
                  :placeholder="$t('login.username')"
                  name="username"
                  type="text"
                  tabindex="1"
                  autocomplete="on"
                />
              </el-form-item>

              <el-tooltip
                v-model="capsTooltip"
                content="Caps lock is On"
                placement="right"
                manual
              >
                <el-form-item prop="password">
                  <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    :placeholder="$t('login.password')"
                    name="password"
                    tabindex="2"
                    autocomplete="on"
                    @keyup.native="checkCapslock"
                    @blur="capsTooltip = false"
                    @keyup.enter.native="handleLogin"
                  >
                    <s-icon
                      slot="suffix"
                      class="el-input__icon pointer"
                      :icon="
                        passwordType === 'password'
                          ? 'material-visibility'
                          : 'material-visibility-off'
                      "
                      @click="showPwd"
                    />
                  </el-input>
                </el-form-item>
              </el-tooltip>
              <el-button
                :loading="loading"
                type="primary"
                class="w-100"
                @click.native.prevent="handleLogin"
                >{{ $t("login.logIn") }}
              </el-button>
            </el-form>
            <div class="card-footer text-center">
              <router-link to="/forgot-password">Forgot Password?</router-link>
            </div>
          </div>
          <div class="w-full mb-4 mt-4 text-center">
            Powered by
            <a
              href="https://yoong.vn/en/"
              target="_blank"
              rel="https://yoong.vn/en/"
            >
              <img
                src="@/assets/YOONG-blue-logo.svg"
                alt="YOONG"
                height="15px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { switchTenantToken } from "@/settings";
import { getTenancyName } from "@/utils/tenant";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Vui lòng nhập UserName"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("Vui lòng nhập mật khẩu"));
      } else if (value.length < 6) {
        callback(new Error("Mật khẩu phải có ít nhất 6 ký tự"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
        tenant: getTenancyName(),
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", validator: null }],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      currentSwitchTenantToken: null,
      switchToTenant: true,
    };
  },
  computed: {
    isShowSwitchTenantControl() {
      return this.currentSwitchTenantToken === switchTenantToken;
    },
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.currentSwitchTenantToken = query.s;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
    switchToTenant(val) {
      if (!val) {
        this.loginForm.tenant = "";
      } else {
        this.loginForm.tenant = getTenancyName();
      }
    },
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery,
              });
              this.loading = false;
            })
            .catch((e) => {
              let message = "";
              if (!e.response) {
                message = this.$t("Lỗi kết nối máy chủ");
              } else {
                message = this.$t(
                  e.response?.data?.error?.details ??
                    "Tên hoặc mật khẩu không đúng"
                );
              }
              this.$message({
                type: "error",
                message: message,
                showClose: true,
              });
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
    // todo: disable tenant, open when project require to support multi tenancy
    async validateTenant(tenancyName) {
      return true;
      //   if (!tenancyName) {
      //     removeTenantId();
      //     return Promise.resolve();
      //   }
      //   return await isTenantAvailable(tenancyName);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  background: #eef0f8;
}

.form-wrapper {
  margin-top: 40%;
  border-top: 3px solid #26a9e1;

  @media (max-width: 576px) {
    margin-top: 20%;
  }
}
</style>
