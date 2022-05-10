<template>
  <div></div>
</template>

<script>

export default {
  components: {
  },
  mounted(){
      this.logout();
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login-2`);
    }
  }
};
</script>