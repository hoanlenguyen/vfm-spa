<template>
  <div>
    <el-button @click="toggleFullscreen" size="mini" type="default" plain class="btn-text">
      <s-icon icon="material-fullscreen-exit" v-if="isFullscreen"/>
      <s-icon icon="material-fullscreen"  v-else/>
    </el-button>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "SFullScreen",
  data() {
    return {
      isFullscreen: false,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    toggleFullscreen() {
      if (!screenfull.enabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off("change", this.change);
      }
    },
  },
};
</script>