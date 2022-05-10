<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <el-button
      size="mini"
      type="default"
      plain
      class="btn-text"
    >
      <s-icon icon="entypo-language" />
    </el-button>

    <el-dropdown-menu slot="dropdown" class="w-abs-min-120">
      <el-dropdown-item :disabled="language==='en'" command="en">
        English
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='es'" command="es">
        Español
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='zh'" command="zh">
        中文
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='ja'" command="ja">
        日本語
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>
