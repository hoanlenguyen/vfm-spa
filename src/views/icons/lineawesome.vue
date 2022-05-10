<template>
  <div class="card">
    <div class="card-header">
      <el-row type="flex" justify="space-between" align="middle">
        <h4 class="card-title">
          <span class="card-label">Lineawesome</span>
          <span class="card-sub-label">
            Line Awesome is a free alternative for Font Awesome 5.11.2. It consists of ~1380 flat icons that offer complete coverage of the main Font Awesome icon set.
            <a
              href="https://icons8.com/line-awesome"
              target="_blank"
            >Read more</a>
          </span>
        </h4>
        <div class="d-flex ml-4">
          <el-button
            type="default"
            @click="handleChangeColor('secondary')"
            :plain="currentColor != 'secondary'"
            class="btn-icon btn-light"
          >
            <i class="las la-brush" />
          </el-button>
          <el-button
            type="primary"
            @click="handleChangeColor('primary')"
            :plain="currentColor != 'primary'"
            class="btn-icon btn-light"
          >
            <i class="las la-brush" />
          </el-button>
          <el-button
            type="success"
            @click="handleChangeColor('success')"
            :plain="currentColor != 'success'"
            class="btn-icon btn-light"
          >
            <i class="las la-brush" />
          </el-button>
          <el-button
            type="info"
            @click="handleChangeColor('info')"
            :plain="currentColor != 'info'"
            class="btn-icon btn-light"
          >
            <i class="las la-brush" />
          </el-button>
          <el-button
            type="warning"
            @click="handleChangeColor('warning')"
            :plain="currentColor != 'warning'"
            class="btn-icon btn-light"
          >
            <i class="las la-brush" />
          </el-button>
          <el-button
            type="danger"
            @click="handleChangeColor('danger')"
            :plain="currentColor != 'danger'"
            class="btn-icon btn-light"
          >
            <i class="las la-brush" />
          </el-button>
        </div>
      </el-row>
    </div>
    <div class="card-body">
      <div v-for="category in categoryList" :key="category.label">
        <h5 class="mb-2">{{category.label}}</h5>
        <el-row :gutter="16">
          <template v-for="icon of category.icons">
            <el-col
              :xl="4"
              :md="6"
              :sm="12"
              :xs="24"
              v-for="style of getIconStyles(icon)"
              :key="style + ' ' + icon"
            >
              <el-button
                @click="handleClipboard(generateIconCode(icon, style),$event)"
                :type="currentColor"
                plain
                class="btn-icon btn-light icon-box"
              >
                <s-icon :icon="style +' la-' + icon"></s-icon>
                <span class="icon-name ml-4">{{ style +' la-' + icon }}</span>
              </el-button>
            </el-col>
          </template>
        </el-row>
        <hr class="section-divider" />
      </div>
    </div>
  </div>
</template>

<script>
import clipboard from "@/utils/clipboard";
import axios from "axios";
import yaml from "js-yaml";

export default {
  name: "Icons",
  data() {
    return {
      currentColor: "primary",
      categoryList: [],
      iconList: [],
    };
  },
  created() {
    this.makeIconList();
  },
  methods: {
    async makeIconList() {
      let me = this;
      await Promise.all([this.getIconList(), this.getCategoryList()]).then(
        (response) => {
          me.iconList = response[0];
          me.categoryList = response[1];
        }
      );
    },
    getIconStyles(icon) {
      return this.iconList[icon]["styles"].map(
        (value) => "la" + value.charAt(0)
      );
    },

    async getIconList() {
      return await axios
        .get(
          "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.yml"
        )
        .then((response) => {
          return yaml.load(response.data);
        })
        .catch();
    },
    async getCategoryList() {
      return await axios
        .get(
          "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/categories.yml"
        )
        .then((response) => {
          return yaml.load(response.data);
        })
        .catch();
    },

    generateIconCode(symbol, style) {
      return `<s-icon icon="${style} la-${symbol}" />`;
    },
    handleClipboard(text, event) {
      clipboard(text, event);
    },
    handleChangeColor(color) {
      this.currentColor = color;
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";

.icon-box {
  padding: 2rem 1.5rem !important;
  margin-bottom: 1rem !important;
  width: 100%;
  height: auto;
  text-align: left;
  justify-content: start;

  span {
    width: 100%;
  }

  .svg-icon {
    width: 2rem;
    height: 2rem;
  }

  .icon-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    display: inline-block;
    width: calc(100% - 3.5rem);opacity: 0.5;
  }
  [class^="lab la-"],
  [class*="lab la-"],
  [class^="las la-"],
  [class*="las la-"],
  [class^="lar la-"],
  [class*="lar la-"] {
    font-size: 3.2rem;
  }
}
</style>
