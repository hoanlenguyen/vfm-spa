<template>
  <el-dropdown trigger="click">
    <!-- <el-badge :is-dot="true" style="line-height: 1"> -->
      <el-button size="mini" type="default" plain class="btn-text">
        <s-icon icon="material-notifications-none" />
      </el-button>
    <!-- </el-badge> -->
    <el-dropdown-menu slot="dropdown" card class="w-abs-480">
      <div class="container">
        <div class="row justify-content-between pt-2 pb-3 border-bottom">
          <div class="col-auto">
            <h5>Notifications</h5>
          </div>
          <div class="col-auto">
            <el-button plain class="btn-text text-sm" type="primary" size="mini">Mark All as Read</el-button>
          </div>
        </div>
        <el-scrollbar class="row h-abs-400 h-max-64vh disable-horizontal-scroll">
          <s-notification-list></s-notification-list>
        </el-scrollbar>
        <div class="row justify-content-center pt-3 pb-1 border-top">
          <el-link type="primary text-sm">Show All Notifications</el-link>
        </div>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import SNotificationList from "./SNotificationList";

export default {
  name: "SNotificationCenter",
  components: {
    SNotificationList,
  },
  computed: {},
  methods: {},
};
</script>
