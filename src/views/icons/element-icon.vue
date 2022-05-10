<template>
  <div class="card">
    <div class="card-header">
      <el-row type="flex" justify="space-between" align="middle">
        <h3 class="card-title">
          <span class="card-label">Element Icons</span>
          <span class="card-sub-label">Element provides a set of {{iconList.length}} common icons.</span>
        </h3>
        <div class="d-flex ml-4">
          <el-button
            type="default"
            @click="handleChangeColor('secondary')"
            :plain="currentColor != 'secondary'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-style" />
          </el-button>
          <el-button
            type="primary"
            @click="handleChangeColor('primary')"
            :plain="currentColor != 'primary'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-style" />
          </el-button>
          <el-button
            type="success"
            @click="handleChangeColor('success')"
            :plain="currentColor != 'success'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-style" />
          </el-button>
          <el-button
            type="info"
            @click="handleChangeColor('info')"
            :plain="currentColor != 'info'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-style" />
          </el-button>
          <el-button
            type="warning"
            @click="handleChangeColor('warning')"
            :plain="currentColor != 'warning'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-style" />
          </el-button>
          <el-button
            type="danger"
            @click="handleChangeColor('danger')"
            :plain="currentColor != 'danger'"
            class="btn-icon btn-light"
          >
            <s-icon icon="material-style" />
          </el-button>
        </div>
      </el-row>
    </div>
    <div class="card-body">
      <el-row :gutter="16">
        <el-col :xl="4" :md="6" :sm="12" :xs="24" v-for="item of iconList" :key="item">
          <el-button
            @click="handleClipboard(generateIconCode(item),$event)"
            :type="currentColor"
            plain
            class="btn-icon btn-light icon-box"
          >
            <s-icon :icon="'el-icon-' + item"></s-icon>
            <span class="icon-name ml-4">{{ 'el-icon-' + item }}</span>
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import clipboard from "@/utils/clipboard";

export default {
  name: "Icons",
  data() {
    return {
      currentColor: "success",
      iconList: [
        "platform-eleme",
        "eleme",
        "delete-solid",
        "delete",
        "s-tools",
        "setting",
        "user-solid",
        "user",
        "phone",
        "phone-outline",
        "more",
        "more-outline",
        "star-on",
        "star-off",
        "s-goods",
        "goods",
        "warning",
        "warning-outline",
        "question",
        "info",
        "remove",
        "circle-plus",
        "success",
        "error",
        "zoom-in",
        "zoom-out",
        "remove-outline",
        "circle-plus-outline",
        "circle-check",
        "circle-close",
        "s-help",
        "help",
        "minus",
        "plus",
        "check",
        "close",
        "picture",
        "picture-outline",
        "picture-outline-round",
        "upload",
        "upload2",
        "download",
        "camera-solid",
        "camera",
        "video-camera-solid",
        "video-camera",
        "message-solid",
        "bell",
        "s-cooperation",
        "s-order",
        "s-platform",
        "s-fold",
        "s-unfold",
        "s-operation",
        "s-promotion",
        "s-home",
        "s-release",
        "s-ticket",
        "s-management",
        "s-open",
        "s-shop",
        "s-marketing",
        "s-flag",
        "s-comment",
        "s-finance",
        "s-claim",
        "s-custom",
        "s-opportunity",
        "s-data",
        "s-check",
        "s-grid",
        "menu",
        "share",
        "d-caret",
        "caret-left",
        "caret-right",
        "caret-bottom",
        "caret-top",
        "bottom-left",
        "bottom-right",
        "back",
        "right",
        "bottom",
        "top",
        "top-left",
        "top-right",
        "arrow-left",
        "arrow-right",
        "arrow-down",
        "arrow-up",
        "d-arrow-left",
        "d-arrow-right",
        "video-pause",
        "video-play",
        "refresh",
        "refresh-right",
        "refresh-left",
        "finished",
        "sort",
        "sort-up",
        "sort-down",
        "rank",
        "loading",
        "view",
        "c-scale-to-original",
        "date",
        "edit",
        "edit-outline",
        "folder",
        "folder-opened",
        "folder-add",
        "folder-remove",
        "folder-delete",
        "folder-checked",
        "tickets",
        "document-remove",
        "document-delete",
        "document-copy",
        "document-checked",
        "document",
        "document-add",
        "printer",
        "paperclip",
        "takeaway-box",
        "search",
        "monitor",
        "attract",
        "mobile",
        "scissors",
        "umbrella",
        "headset",
        "brush",
        "mouse",
        "coordinate",
        "magic-stick",
        "reading",
        "data-line",
        "data-board",
        "pie-chart",
        "data-analysis",
        "collection-tag",
        "film",
        "suitcase",
        "suitcase-1",
        "receiving",
        "collection",
        "files",
        "notebook-1",
        "notebook-2",
        "toilet-paper",
        "office-building",
        "school",
        "table-lamp",
        "house",
        "no-smoking",
        "smoking",
        "shopping-cart-full",
        "shopping-cart-1",
        "shopping-cart-2",
        "shopping-bag-1",
        "shopping-bag-2",
        "sold-out",
        "sell",
        "present",
        "box",
        "bank-card",
        "money",
        "coin",
        "wallet",
        "discount",
        "price-tag",
        "news",
        "guide",
        "male",
        "female",
        "thumb",
        "cpu",
        "link",
        "connection",
        "open",
        "turn-off",
        "set-up",
        "chat-round",
        "chat-line-round",
        "chat-square",
        "chat-dot-round",
        "chat-dot-square",
        "chat-line-square",
        "message",
        "postcard",
        "position",
        "turn-off-microphone",
        "microphone",
        "close-notification",
        "bangzhu",
        "time",
        "odometer",
        "crop",
        "aim",
        "switch-button",
        "full-screen",
        "copy-document",
        "mic",
        "stopwatch",
        "medal-1",
        "medal",
        "trophy",
        "trophy-1",
        "first-aid-kit",
        "discover",
        "place",
        "location",
        "location-outline",
        "location-information",
        "add-location",
        "delete-location",
        "map-location",
        "alarm-clock",
        "timer",
        "watch-1",
        "watch",
        "lock",
        "unlock",
        "key",
        "service",
        "mobile-phone",
        "bicycle",
        "truck",
        "ship",
        "basketball",
        "football",
        "soccer",
        "baseball",
        "wind-power",
        "light-rain",
        "lightning",
        "heavy-rain",
        "sunrise",
        "sunrise-1",
        "sunset",
        "sunny",
        "cloudy",
        "partly-cloudy",
        "cloudy-and-sunny",
        "moon",
        "moon-night",
        "dish",
        "dish-1",
        "food",
        "chicken",
        "fork-spoon",
        "knife-fork",
        "burger",
        "tableware",
        "sugar",
        "dessert",
        "ice-cream",
        "hot-water",
        "water-cup",
        "coffee-cup",
        "cold-drink",
        "goblet",
        "goblet-full",
        "goblet-square",
        "goblet-square-full",
        "refrigerator",
        "grape",
        "watermelon",
        "cherry",
        "apple",
        "pear",
        "orange",
        "coffee",
        "ice-tea",
        "ice-drink",
        "milk-tea",
        "potato-strips",
        "lollipop",
        "ice-cream-square",
        "ice-cream-round",
      ],
    };
  },
  methods: {
    generateIconCode(symbol) {
      return `<s-icon icon="el-icon-${symbol}" />`;
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
.icon-box {
  padding: 2rem 1.5rem !important;
  margin-bottom: 1rem !important;
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
  [class^="el-icon-"],
  [class*=" el-icon-"] {
    font-size: 2rem;
    line-height: 2rem;
  }
}
</style>
