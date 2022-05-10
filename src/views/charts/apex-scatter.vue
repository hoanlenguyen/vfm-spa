<template>
  <el-row type="flex" justify="center">
    <el-col :xl="20">
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="card border-0 shadow-sm p-5">
            <span>
              ApexCharts is a modern charting library that helps developers to create beautiful and interactive visualizations for web pages. For more info please visit
              <a
                href="https://apexcharts.com/"
                target="_blank"
              >Apexcharts</a>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Scatter Chart</h4>
            </div>
            <div class="card-body">
              <scatter-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Scatter - Image Chart</h4>
            </div>
            <div class="card-body">
              <scatter-image />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Timeline Scatter Chart</h4>
            </div>
            <div class="card-body">
              <scatter-datetime />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import ScatterBasic from "./components/scatter/scatter-basic";
import ScatterDatetime from "./components/scatter/scatter-datetime";
import ScatterImage from "./components/scatter/scatter-image";

export default {
  name: "ChartScatter",
  components: {
    ScatterBasic,
    ScatterDatetime,
    ScatterImage,
  },
};
</script>

