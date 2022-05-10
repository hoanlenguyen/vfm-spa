<template>
  <div>
    <el-button
      @click="toggleClick"
      size="medium"
      type="primary"
      plain
      class="hambuger btn-text"
      :class="{'is-active':isActive}"
    >
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 80 80"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <rect id="Rectangle" fill="currentColor" x="0" y="34" width="80" height="12" rx="6" />
          <rect id="Rectangle-Copy" fill="currentColor" x="20" y="8" width="40" height="12" rx="6" />
          <rect
            id="Rectangle-Copy-2"
            fill="currentColor"
            x="20"
            y="60"
            width="40"
            height="12"
            rx="6"
          />
        </g>
      </svg>
    </el-button>
  </div>
</template>

<script>
export default {
  name: "SHamburger",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    },
  },
};
</script>
