<template>
  <div v-if="exceptionLogs.length>0">
    <el-badge :is-dot="true" style="line-height: 1" @click.native="dialogTableVisible=true">
      <el-button size="mini" type="danger" plain class="btn-text">
        <s-icon icon="material-bug-report" />
      </el-button>
    </el-badge>

    <el-dialog :visible.sync="dialogTableVisible" width="80%" append-to-body>
      <div slot="title" class="el-dialog__title">
        <span>Exception Log</span>
        <el-button
          plain
          class="ml-3"
          size="mini"
          type="danger"
          icon="el-icon-delete"
          @click="clearAll"
        >Clear All</el-button>
      </div>
      <el-table :data="exceptionLogs" border>
        <el-table-column label="Message">
          <template slot-scope="{row}">
            <div>
              <span class="message-title">Msg:</span>
              <el-tag type="danger">{{ row.err.message }}</el-tag>
            </div>
            <br />
            <div>
              <span class="message-title" style="padding-right: 10px;">Info:</span>
              <el-tag type="warning">{{ row.vm.$vnode.tag }} error in {{ row.info }}</el-tag>
            </div>
            <br />
            <div>
              <span class="message-title" style="padding-right: 16px;">Url:</span>
              <el-tag type="success">{{ row.url }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Stack">
          <template slot-scope="scope">{{ scope.row.err.stack }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SExceptionLog",
  data() {
    return {
      dialogTableVisible: false,
    };
  },
  computed: {
    exceptionLogs() {
      return this.$store.getters.exceptionLogs;
    },
  },
  methods: {
    clearAll() {
      this.dialogTableVisible = false;
      this.$store.dispatch("exceptionLog/clearExceptionLog");
    },
  },
};
</script>

<style scoped>
.message-title {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  padding-right: 8px;
}
</style>
