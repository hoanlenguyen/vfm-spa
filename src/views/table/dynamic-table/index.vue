<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xl="16">
        <el-row :gutter="24">
          <el-col :span="24">
            <div class="card border-0 shadow-sm p-5">
              <h4>Dynamic Table</h4>
              <span>Display multiple data with similar format. You can sort, filter, compare your data in a table.</span>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Fixed header, sorted by header order</h4>
              </div>
              <div class="card-body">
                <fixed-thead />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Not fixed header, sorted by click order</h4>
              </div>
              <div class="card-body">
                <unfixed-thead />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import FixedThead from "./components/FixedThead";
import UnfixedThead from "./components/UnfixedThead";

export default {
  name: "DynamicTable",
  components: { FixedThead, UnfixedThead },
};
</script>

