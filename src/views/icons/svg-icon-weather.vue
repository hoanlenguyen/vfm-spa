<template>
  <div class="card">
    <div class="card-header">
      <el-row type="flex" justify="space-between" align="middle">
        <h3 class="card-title">
          <span class="card-label">Weather Icons</span>
          <span class="card-sub-label">Weather Icons with 222 weather themed icons, ready to be dropped right into any project that needs high quality weather, maritime, and meteorological based icons!</span>
        </h3>
        <div class="d-flex ml-4">
          <el-button
            type="default"
            @click="handleChangeColor('secondary')"
            :plain="currentColor != 'secondary'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-format-paint"></s-icon>
          </el-button>
          <el-button
            type="primary"
            @click="handleChangeColor('primary')"
            :plain="currentColor != 'primary'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-format-paint"></s-icon>
          </el-button>
          <el-button
            type="success"
            @click="handleChangeColor('success')"
            :plain="currentColor != 'success'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-format-paint"></s-icon>
          </el-button>
          <el-button
            type="info"
            @click="handleChangeColor('info')"
            :plain="currentColor != 'info'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-format-paint"></s-icon>
          </el-button>
          <el-button
            type="warning"
            @click="handleChangeColor('warning')"
            :plain="currentColor != 'warning'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-format-paint"></s-icon>
          </el-button>
          <el-button
            type="danger"
            @click="handleChangeColor('danger')"
            :plain="currentColor != 'danger'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-format-paint"></s-icon>
          </el-button>
        </div>
      </el-row>
    </div>
    <div class="card-body">
      <s-icon icon="-404" />
      <el-row :gutter="16">
        <el-col :xl="4" :lg="6" :md="8" :sm="12" :xs="24" v-for="item of iconList" :key="item">
          <el-button
            @click="handleClipboard(generateIconCode(item),$event)"
            :type="currentColor"
            plain
            class="btn-icon btn-light icon-box"
          >
            <s-icon :icon="item" />
            <span class="icon-name ml-4">{{ item }}</span>
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import clipboard from "@/utils/clipboard";
import icons from "./svg-icons.json";

export default {
  name: "Icons",
  data() {
    return {
      currentColor: "primary",
      iconList: [],
    };
  },
  mounted(){
    this.iconList = icons.weather.icons.map(p=> 'weather-' + p);
  },
  methods: {
    generateIconCode(symbol) {
      return `<s-icon icon="${symbol}" />`;
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

<style lang="scss">
.icon-box {
  padding: 2rem 1.5rem!important;
  margin-bottom: 1rem!important;
  width: 100%;
  height: auto;
  text-align: left;
  justify-content: start;

  > span {
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
}
</style>
