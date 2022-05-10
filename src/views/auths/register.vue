<template>
  <div class="page-wrapper d-flex justify-content-center h-min-100vh">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col w-abs-max-480 flex-column d-flex justify-content-between h-min-100vh">
          <div class="form-wrapper card card-shadowed rounded-sm">
            <el-form
              ref="model"
              :model="model"
              :rules="loginRules"
              autocomplete="off"
              label-position="left"
              class="card-body"
            >
              <div class="text-center mb-5">
                <h3>Sign Up</h3>
                <p class="mt-2">Enter your details to create your account</p>
              </div>

              <div
                style="overflow: hidden; height: 0px;background: transparent;"
                data-description="dummyPanel for Chrome auto-fill issue"
              >
                <input
                  type="text"
                  style="height:0;background: transparent; color: transparent;border: none;"
                  data-description="dummyEmail"
                />
                <input
                  type="text"
                  name="email"
                  style="height:0;background: transparent; color: transparent;border: none;"
                  data-description="dummyEmail"
                />
                <input
                  type="password"
                  style="height:0;background: transparent; color: transparent;border: none;"
                  data-description="dummyPassword"
                />
              </div>

              <el-form-item prop="name">
                <el-input
                  ref="name"
                  v-model="model.name"
                  placeholder="Fullname"
                  name="name"
                  type="text"
                  tabindex="1"
                  autocomplete="off"
                />
              </el-form-item>

              <el-form-item prop="email">
                <el-input
                  ref="email"
                  v-model="model.email"
                  placeholder="Email"
                  name="email"
                  type="text"
                  tabindex="2"
                  autocomplete="off"
                />
              </el-form-item>

              <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                <el-form-item prop="password">
                  <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="model.password"
                    :type="passwordType"
                    :placeholder="$t('login.password')"
                    name="password"
                    tabindex="3"
                    autocomplete="off"
                    @keyup.native="checkCapslock"
                    @blur="capsTooltip = false"
                  >
                    <s-icon
                      class="el-input__icon pointer"
                      :icon="passwordType === 'password' ? 'material-visibility' : 'material-visibility-off'"
                      slot="suffix"
                      @click="showPwd"
                    ></s-icon>
                  </el-input>
                </el-form-item>
              </el-tooltip>
              <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                <el-form-item prop="confirmPassword">
                  <el-input
                    :key="passwordType"
                    ref="confirmPassword"
                    v-model="model.confirmPassword"
                    :type="passwordType"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    tabindex="4"
                    autocomplete="off"
                    @keyup.native="checkCapslock"
                    @blur="capsTooltip = false"
                  >
                    <s-icon
                      class="el-input__icon pointer"
                      :icon="passwordType === 'password' ? 'material-visibility' : 'material-visibility-off'"
                      slot="suffix"
                      @click="showPwd"
                    ></s-icon>
                  </el-input>
                </el-form-item>
              </el-tooltip>
              <el-form-item prop="isAgreeTerm">
                <el-checkbox v-model="isAgreeTerm">
                  I Agree the
                  <a href="#">terms and conditions</a>.
                </el-checkbox>
              </el-form-item>

              <el-button :loading="loading" type="primary" class="w-100">Submit</el-button>
            </el-form>
            <div class="card-footer text-center">
              <router-link to="/login">Back to Login</router-link>
            </div>
          </div>
          <div class="w-100 mb-4 mt-4 text-center">
            Powered by
            <a
              href="https://stonehub-admin.yoong.vn"
              target="_blank"
              rel="https://stonehub-admin.yoong.vn"
            >
              <img src="@/assets/logo-full.svg" alt="YOONG" height="15px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validEmail } from "@/utils/validate";

export default {
  name: "Register",
  data() {
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      model: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAgreeTerm: false,
      },
      loginRules: {},
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.model.name === "") {
      this.$refs.name.focus();
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
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
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