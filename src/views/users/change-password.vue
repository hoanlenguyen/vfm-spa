<template>
  <el-row justify="center" type="flex">
    <el-col :lg="12" :md="18" :sm="24" :xl="8" :xs="24">
      <div class="card">
        <el-row
          class="p-5 mb-0"
          align="middle"
          justify="space-between"
          type="flex"
        >
          <div>
            <h4>{{ $t('Đổi mật khẩu') }}</h4>
            <span class="mt-2">{{ $t('Các cài đặt này giúp bạn giữ an toàn cho tài khoản của mình') }}.</span>
          </div>
        </el-row>
        <el-form
          ref="model"
          class="px-5 pt-2"
          :model="model"
          label-position="top"
          label-width="100px"
        >
          <el-form-item
            :label="$t('Mật khẩu cũ')"
            :rules="[
              { required: true, trigger: 'blur', message: $t('Vui lòng nhập mật khẩu cũ') },
              { validator: minLengthValidator, trigger: ['blur', 'change'] },
            ]"
            prop="currentPassword"
          >
            <el-input
              v-model="model.currentPassword"
              show-password
              type="password"
            />
          </el-form-item>
          <el-form-item
            :rules="[
              { required: true, trigger: 'blur', message: $t('Vui lòng nhập mật khẩu mới') },
              { validator: checkNewPassword, trigger: ['blur', 'change'] },
              { validator: minLengthValidator, trigger: ['blur', 'change'] },
            ]"
            prop="newPassword"
          >
            <span
              slot="label"
            >{{ $t('Mật khẩu mới') }}
              <el-tooltip
                :tabindex="-1"
                :content="
                  $t(
                    'Mật khẩu phải có ít nhất 6 ký tự'
                  )
                "
                placement="bottom"
              >
                <i class="el-icon-info" />
              </el-tooltip>
            </span>
            <el-input
              v-model="model.newPassword"
              show-password
              type="password"
            />
          </el-form-item>
          <el-form-item
            :label="$t('Nhập lại mật khẩu mới')"
            :rules="[
              { required: true, trigger: 'blur', message: $t('Vui lòng nhập lại mất khẩu mới') },
              { validator: confirmValidator, trigger: ['blur', 'change'] },
              { validator: minLengthValidator, trigger: ['blur', 'change'] },
            ]"
            prop="confirmPassword"
          >
            <el-input v-model="model.confirmPassword" show-password type="password" />
          </el-form-item>
        </el-form>

        <div class="p-5">
          <el-button
            class="w-100"
            type="primary"
            @click="changePassword"
          >{{ $t('Lưu') }}
          </el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { changeAdminPassword } from '@/api/profile'

export default {
  name: 'ChangePassword',
  components: {},
  data() {
    return {
      model: { currentPassword: '', newPassword: '', confirmPassword: '' },
      minLengthPassword: 6
      // currentPasswordRules: [
      //   (v) => !!v || this.L("Vui lòng nhập mật khẩu hiện tại"),
      //   (v) =>
      //     (v || "").length < 6 ? this.L("Mật khẩu ít nhất 6 ký tự") : true,
      //   // (v) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{6,}$/.test(v) || this.L("Mật khẩu phải có ít nhất một ký tự đặc biệt, một chữ số, một chữ thường và một chữ in hoa"),
      // ],
      // newPasswordRules: [
      //   (v) => !!v || this.L("Vui lòng nhập mật khẩu mới"),
      //   (v) =>
      //     (v || "").length < 6 ? this.L("Mật khẩu ít nhất 6 ký tự") : true,
      //   (v) =>
      //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{6,}$/.test(
      //       v
      //     ) ||
      //     this.L(
      //       "Mật khẩu phải có ít nhất một ký tự đặc biệt, một chữ số, một chữ thường và một chữ in hoa"
      //     ),
      //   (v) =>
      //     v && v === this.model.currentPassword
      //       ? this.L("Mật khẩu mới phải khác với mật khẩu hiện tại")
      //       : true,
      // ],
      // confirmPasswordRules: [
      //   (v) => !!v || this.L("Vui lòng xác nhận mật khẩu mới"),
      //   (v) =>
      //     (v || "").length < 6 ? this.L("Mật khẩu ít nhất 6 ký tự") : true,
      //   (v) =>
      //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{6,}$/.test(
      //       v
      //     ) ||
      //     this.L(
      //       "Mật khẩu phải có ít nhất một ký tự đặc biệt, một chữ số, một chữ thường và một chữ in hoa"
      //     ),
      //   (v) =>
      //     v && v !== this.model.newPassword
      //       ? this.L("Mật khẩu xác nhận không khớp với mật khẩu mới")
      //       : true,
      // ],
    }
  },
  methods: {
    checkNewPassword(rule, value, callback) {
      if (value == this.model.currentPassword) {
        callback(new Error('Mật khẩu mới phải khác với mật khẩu hiện tại'))
      } else {
        callback()
      }
    },
    confirmValidator(rule, value, callback) {
      if (value !== this.model.newPassword) {
        callback(new Error('Nhập lại mật khẩu không chính xác'))
      } else {
        callback()
      }
    },
    minLengthValidator(rule, value, callback) {
      if (value.length < this.minLengthPassword) {
        callback(
          new Error(`Mật khẩu không thể ít hơn ${this.minLengthPassword} ký tự`)
        )
      } else {
        callback()
      }
    },
    changePassword() {
      this.$refs.model.validate((isValid) => {
        if (isValid) {
          changeAdminPassword(this.model)
            .then((response) => {
              if (response.data.success) {
                this.$message({
                  type: 'success',
                  message: this.$t('Cập nhật thành công'),
                  showClose: true
                })
                this.logout()
              }
            })
            .catch((error) => {
              if (error.response.data.error) {
                this.$message({
                  type: 'error',
                  message: this.$t(`Lỗi: ${error.response.data.error.message}`),
                  showClose: true
                })
              }
            })
        } else {
          this.$message({
            type: 'error',
            message: this.$t('Bạn chưa nhập đủ thông tin'),
            showClose: true
          })
        }
      })
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
