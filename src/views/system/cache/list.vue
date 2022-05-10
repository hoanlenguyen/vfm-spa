<template>
  <delete-caches></delete-caches>
</template>
<script>
import deleteCaches from "./deleteCaches";
export default {
  name: "Cache",
  components: { deleteCaches },
  data() {
    return {
      itemCache: {},
      isLoading: false
    };
  },
  mounted() {},
  methods: {}
};
</script>