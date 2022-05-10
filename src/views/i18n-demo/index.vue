<template>
  <div>
    <el-row type="flex" justify="center" :gutter="16">
      <el-col :xs="24" :sm="24" :md="18" :lg="12" :xl="12">
        <div class="card border-0 shadow-sm">
          <el-row type="flex" justify="space-between" align="middle" class="p-5 mb-0">
            <div>
              <h4>{{ $t('i18nView.title') }}</h4>
              <span>{{ $t('i18nView.note') }}.</span>
            </div>
          </el-row>
          <div class="px-5 pb-5 pt-2">
            <el-radio-group v-model="lang" size="small">
              <el-radio label="en">English</el-radio>
              <el-radio label="es">Español</el-radio>
              <el-radio label="zh">简体中文</el-radio>
              <el-radio label="ja">日本語</el-radio>
            </el-radio-group>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" :gutter="16" class="align-self-stretch">
      <el-col :xs="24" :sm="24" :md="18" :lg="6" :xl="6">
        <div class="card border-0 shadow-sm h-100">
          <div class="p-5 text-center">
            <el-form label-position="top" label-width="100px" :model="model">
              <el-form-item>
                <el-date-picker
                  v-model="date"
                  :placeholder="$t('i18nView.datePlaceholder')"
                  type="date"
                />
              </el-form-item>
              <el-form-item class="mb-0">
                <el-select v-model="value" :placeholder="$t('i18nView.selectPlaceholder')">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="6" :xl="6">
        <div class="card border-0 shadow-sm h-100">
          <div class="p-5 text-center">
            <el-button class="mb-3">{{ $t('i18nView.default') }}</el-button>
            <el-button class="mb-3" type="primary">{{ $t('i18nView.primary') }}</el-button>
            <el-button class="mb-3" type="success">{{ $t('i18nView.success') }}</el-button>
            <el-button class="mb-3" type="info">{{ $t('i18nView.info') }}</el-button>
            <el-button class="mb-3" type="warning">{{ $t('i18nView.warning') }}</el-button>
            <el-button class="mb-3" type="danger">{{ $t('i18nView.danger') }}</el-button>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" :gutter="16">
      <el-col :xs="24" :sm="24" :md="18" :lg="12" :xl="12">
        <div class="card border-0 shadow-sm">
          <el-table :data="tableData" fit highlight-current-row class="w-100 border-0">
            <el-table-column
              :label="$t('i18nView.tableName')"
              prop="name"
              width="100"
              align="center"
            />
            <el-table-column
              :label="$t('i18nView.tableDate')"
              prop="date"
              width="180"
              align="center"
            />
            <el-table-column :label="$t('i18nView.tableAddress')" prop="address" />
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import local from "./local";
const viewName = "i18nView";

export default {
  name: "I18n",
  data() {
    return {
      date: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      options: [],
      value: "",
    };
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.app.language;
      },
      set(lang) {
        this.$i18n.locale = lang;
        this.$store.dispatch("app/setLanguage", lang);
      },
    },
  },
  watch: {
    lang() {
      this.setOptions();
    },
  },
  created() {
    if (!this.$i18n.getLocaleMessage("en")[viewName]) {
      this.$i18n.mergeLocaleMessage("en", local.en);
      this.$i18n.mergeLocaleMessage("zh", local.zh);
      this.$i18n.mergeLocaleMessage("es", local.es);
      this.$i18n.mergeLocaleMessage("ja", local.ja);
    }
    this.setOptions(); // set default select options
  },
  methods: {
    setOptions() {
      this.options = [
        {
          value: "1",
          label: this.$t("i18nView.one"),
        },
        {
          value: "2",
          label: this.$t("i18nView.two"),
        },
        {
          value: "3",
          label: this.$t("i18nView.three"),
        },
      ];
    },
  },
};
</script>