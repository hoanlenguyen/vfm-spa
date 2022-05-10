<script>
import { Avatar } from "element-ui";

export default {
  name: "SAvatar",
  extends: Avatar,
  props: {
    lighten: {
      type: Number,
      default: -80,
    },
    name: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      backgroundColors: [
        "#F44336",
        "#FF4081",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#9E9E9E",
        "#607D8B",
      ],
    };
  },
  methods: {
    initial(slotString) {
      let parts = slotString.split(/[ -]/);
      let initials = "";

      for (var i = 0; i < parts.length; i++) {
        initials += parts[i].charAt(0);
      }

      if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
        initials = initials.replace(/[a-z]+/g, "");
      }

      initials = initials.substr(0, 3).toUpperCase();

      return initials;
    },

    randomBackgroundColor(seed, colors) {
      return colors[seed % colors.length];
    },
    lightenColor(hex, amt) {
      var usePound = false;

      if (hex[0] === "#") {
        hex = hex.slice(1);
        usePound = true;
      }

      var num = parseInt(hex, 16);
      var r = (num >> 16) + amt;

      if (r > 255) r = 255;
      else if (r < 0) r = 0;

      var b = ((num >> 8) & 0x00ff) + amt;

      if (b > 255) b = 255;
      else if (b < 0) b = 0;

      var g = (num & 0x0000ff) + amt;

      if (g > 255) g = 255;
      else if (g < 0) g = 0;

      return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    },

    isValidImage() {
      const { src, isImageExist } = this;
      return isImageExist && src;
    },
    // Override
    renderAvatar() {
      const { icon, src, alt, isImageExist, srcSet, fit, name } = this;

      if (this.isValidImage()) {
        console.log(src);
        return (
          <img
            src={src}
            onError={this.handleError}
            alt={alt}
            srcSet={srcSet}
            style={{ "object-fit": fit }}
          />
        );
      }

      if (icon) {
        return <i class={icon} />;
      }

      if (name) {
        return this.initial(name);
      }

      return this.$slots.default;
    },
  },
  computed: {
    background() {
      if (!this.isValidImage() && this.name) {
        return this.randomBackgroundColor(
          this.name.length,
          this.backgroundColors
        );
      }
    },

    fontColor() {
      if (!this.isValidImage() && this.name) {
        return this.lightenColor(this.background, this.lighten);
      }
    },
  },
  // Override
  render() {
    const { avatarClass, size } = this;

    const sizeStyle =
      typeof size === "number"
        ? {
            height: `${size}px`,
            width: `${size}px`,
            fontSize: `${Math.floor(this.size / 2.5)}px`,
            lineHeight: `${size}px`,
            backgroundColor: this.background,
            color: this.fontColor,
          }
        : { backgroundColor: this.background, color: this.fontColor };
    return (
      <span class={avatarClass} style={sizeStyle}>
        {this.renderAvatar()}
      </span>
    );
  },
};
</script>
