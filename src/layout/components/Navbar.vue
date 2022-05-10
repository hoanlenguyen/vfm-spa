<template>
  <div class="navbar">
    <s-hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <s-breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <!-- <search id="header-search" class="right-menu-item" /> -->

        <!-- <div class="right-menu-item">
          <s-exception-log class="errLog-container" />
        </div> -->
        <!-- <div class="right-menu-item">
					<right-panel v-if="showSettings">
						<settings />
					</right-panel>
				</div> -->
        <!-- <div class="right-menu-item">
          <s-full-screen />
        </div> -->
        <!-- <div class="right-menu-item">
          <el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">
            <size-select id="size-select" />
          </el-tooltip>
        </div> -->
        <!-- <div class="right-menu-item">
					<lang-select />
				</div> -->
        <!-- <div class="right-menu-item">
          <s-notification-center />
        </div> -->
      </template>
      <div class="right-menu-item">
        <el-dropdown class="avatar-container" trigger="click">
          <span class="el-dropdown-link">
            <s-avatar
              :size="24"
              :src="avatarUrl"
              @error="avatarErrorHandler"
            >
              <img src="@/assets/default-avatar.svg">
            </s-avatar>
            <template v-if="device!=='mobile'">
              <span class="ml-2">{{ $store.state.user.name }}</span>
              <i class="el-icon-arrow-down el-icon--right" />
            </template>
          </span>
          <el-dropdown-menu slot="dropdown" class="w-abs-min-160">
            <router-link to="/users/profile">
              <el-dropdown-item>{{ $t('Thông tin tài khoản') }}</el-dropdown-item>
            </router-link>
            <router-link to="/users/change-password">
              <el-dropdown-item>{{ $t('Đổi mật khẩu') }}</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click.native="logout">
              <span>{{ $t('Đăng xuất') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import SBreadcrumb from '@/components/SBreadcrumb'
import SHamburger from '@/components/SHamburger'
import SExceptionLog from '@/components/SExceptionLog'
import SFullScreen from '@/components/SFullScreen'
import SizeSelect from '@/components/SizeSelect'
import LangSelect from '@/components/LangSelect'
import Search from '@/components/HeaderSearch'
import RightPanel from '@/components/RightPanel'
import Settings from '@/layout/components/Settings'
import SNotificationCenter from '@/components/SNotificationCenter'

export default {
  components: {
    SBreadcrumb,
    SHamburger,
    SExceptionLog,
    SFullScreen,
    SizeSelect,
    LangSelect,
    Search,
    RightPanel,
    Settings,
    SNotificationCenter
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'device']),
    ...mapState({
      showSettings: (state) => state.settings.showSettings
    }),
    avatarUrl() {
      if (this.$store.state.user.user && this.$store.state.user.user.avatarUrl) {
        return this.getImageUrl(this.$store.state.user.user.avatarUrl.replace(/\\/g, '/'), 300)
      }
      return ''
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('closeSideBar', { withoutAnimation: false })
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    avatarErrorHandler() {
      return true
    }
  }
}
</script>
