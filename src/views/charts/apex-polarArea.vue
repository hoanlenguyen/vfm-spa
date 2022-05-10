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
      </el-row>
      <el-row :gutter="24" type="flex" justify="center" align="center" class="align-items-stretch">
        <el-col :xl="12">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-header">
              <h4>Simple PolarArea</h4>
            </div>
            <div class="card-body">
              <polararea-basic />
            </div>
          </div>
        </el-col>
        <el-col :xl="12">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-header">
              <h4>Polar Area - Style 2</h4>
            </div>
            <div class="card-body">
              <polararea-monochrome />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import PolarareaBasic from "./components/polararea/polararea-basic";
import PolarareaMonochrome from "./components/polararea/polararea-monochrome";

export default {
  name: "ChartPolararea",
  components: {
    PolarareaBasic,
    PolarareaMonochrome,
  },
};
</script>

