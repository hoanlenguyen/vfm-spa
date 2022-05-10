<template>
  <el-pagination
    :pageSize.sync="pageSizeComputed"
    :small="small"
    :total="total"
    :pageCount="pageCount"
    :pagerCount="pagerCount"
    :currentPage.sync="currentPageComputed"
    :layout="layoutComputed"
    :pageSizes="pageSizes"
    :popperClass="popperClass"
    :prevText="prevText"
    :nextText="nextText"
    :background="background"
    :disabled="disabled"
    :hideOnSinglePage="hideOnSinglePage"
    @size-change="handleSizeChange"
    @current-change="handleCurrentPageChange"
    @prev-click="handlePrevClick"
    @next-click="handleNextClick"
  />
</template>
<script>
import { scrollTo } from "@/utils/scroll-to";
import { mapGetters } from "vuex";

export default {
  name: "SPagination",
  props: {
    autoScroll: {
      type: Boolean,
      default: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    small: Boolean,
    total: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator(value) {
        return (
          (value | 0) === value && value > 4 && value < 22 && value % 2 === 1
        );
      },
      default: 7,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    layout: {
      default: "prev, pager, next, jumper, ->, total",
    },
    layoutMobile: {
      default: "prev, next, jumper, ->, total",
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      },
    },
    popperClass: String,
    prevText: String,
    nextText: String,
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean,
  },
  computed: {
    ...mapGetters(["device"]),
    layoutComputed: {
      get() {
        if (this.device == "mobile" && this.layoutMobile)
          return this.layoutMobile;
          else return this.layout;
      },
    },
    currentPageComputed: {
      get() {
        return this.currentPage;
      },
      set(val) {
        this.$emit("update:current-page", val);
      },
    },
    pageSizeComputed: {
      get() {
        return this.pageSize;
      },
      set(val) {
        this.$emit("update:page-size", val);
      },
    },
  },
  methods: {
    sizeChange(val) {
      console.log(val);
    },

    handleSizeChange(val) {
      this.$emit("size-change", val);
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handleCurrentPageChange(val) {
      this.$emit("current-change", val);
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handlePrevClick(val) {
      this.$emit("prev-click", val);
    },
    handleNextClick(val) {
      this.$emit("next-click", val);
    },
  },
};
</script>
