<template>
  <div class="page-wrapper d-flex justify-content-center h-min-100vh">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col w-abs-max-480 flex-column d-flex justify-content-between h-min-100vh">
          <div class="form-wrapper card card-shadowed rounded-sm">
            <el-form
              ref="model"
              :model="model"
              :rules="formRules"
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
                <h4 class="mt-4">{{$t('Forgotten Password ?')}}</h4>
              </div>
              <el-alert
                class="mb-4"
                title="Enter your email to reset your password"
                type="info"
                show-icon
              ></el-alert>

              <el-form-item prop="email">
                <el-input
                  ref="email"
                  v-model="model.email"
                  placeholder="Email"
                  name="email"
                  type="text"
                  tabindex="1"
                  autocomplete="on"
                />
              </el-form-item>

              <el-button :loading="loading" type="primary" class="w-100 mt-2">Submit</el-button>
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
  name: "ForgotPassword",
  data() {
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error("Please enter the correct email"));
      } else {
        callback();
      }
    };
    return {
      model: {
        email: "",
      },
      formRules: {
        email: [{ required: true, trigger: "blur", validator: validateEmail }],
      },
      loading: false,
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
    if (this.model.email === "") {
      this.$refs.email.focus();
    }
  },
  methods: {
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