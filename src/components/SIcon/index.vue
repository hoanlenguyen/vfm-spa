<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />

  <div v-else-if="isSvg" :class="svgClass">
    <svg class="svg-icon" aria-hidden="true" v-on="$listeners" :style="iconSizeStyle">
      <use :xlink:href="iconName" />
    </svg>
  </div>

  <i v-else :class="icon + ' ' + className" :style="iconSizeStyle"></i>
</template>

<script>
import { isExternal } from "@/utils/validate";

export default {
  name: "SIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    size: {
      type: [Number, String],
      default: null,
      required: false,
    },
  },
  computed: {
    iconSizeStyle() {
      var sizeValue = this.size != null
          ? typeof this.size === "number"
            ? this.size + "px"
            : this.size
          : null;
      if (sizeValue) {
        return this.isSvg
          ? "width: " + sizeValue + "; height: " + sizeValue
          : `font-size: ${sizeValue}; height: ${sizeValue}; line-height: ${sizeValue};min-width:${sizeValue}`;
      }
      return null;
    },

    isSvg() {
      if (
        this.icon.includes("el-icon") ||
        this.icon.includes("la-") ||
        this.icon.includes("fa-")
      ) {
        return false;
      } else {
        return true;
      }
    },

    // For SVG
    isExternal() {
      return isExternal(this.icon);
    },
    iconName() {
      return `#icon-${this.icon}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon-wrapper " + this.className;
      } else {
        return "svg-icon-wrapper svg-icon-" + this.icon;
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.icon}) no-repeat 50% 50%`,
        "-webkit-mask": `url(${this.icon}) no-repeat 50% 50%`,
      };
    },
  },
};
</script>