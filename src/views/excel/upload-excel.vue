<template>
  <div>
    <upload-excel-component
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    />
    <div
      v-if="tableData && tableData.length > 0"
      class="card border-0 shadow-sm p-0 mt-5"
    >
      <el-table
        :data="tableData"
        fit
        highlight-current-row
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          v-for="(item, index) in tableHeader"
          :key="index"
          :prop="item"
          :label="item"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'

export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  props: {
    listTableKey: {
      type: Array
    },
    errorList: {
      type: Array
    }
  },
  data() {
    return {
      tableData: [],
      tableHeader: []
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if(!this.errorList ||this.errorList.length==0)
        return '';
      let check= this.errorList.some(item=>item.STT==row.STT)
      if (check) 
        return 'warningRow';

        return '';
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 10
      if (isLt1M) {
        return true
      }
      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
      
      // fix trim object key name.
      if (results && results.length > 0) {
      const keyCount= this.listTableKey.length;
      const columnCount = Object.keys(results[0]).length;
      if(keyCount != columnCount){
        this.$message({
          type: "warning",
          message: this.$t("Số cột trong file import không đúng theo template"),
          showClose: true,
        });
        return;
      }
        results = results.map(item => {
          if (typeof this.listTableKey !== 'undefined') {
            if (this.listTableKey.length > 0) {
              const newItem = {}
              Object.entries(item).forEach((entry, index) => {
                if (this.listTableKey[index] && entry.length > 1) {
                  newItem[this.listTableKey[index]] = entry[1]
                }
              })
              item = newItem
            }
          } else {
            item = Object.entries(item).reduce((acc, curr) => {
              const [key, value] = curr
              acc[typeof key === 'string' ? key.trim() : key] = value
              return acc
            }, {})
          }

          return item
        })
      }

      this.$emit('tableData', results)
    }
  }
}
</script>

<style >
.warningRow {
  background: #fdf5e6 !important;
}

</style>
