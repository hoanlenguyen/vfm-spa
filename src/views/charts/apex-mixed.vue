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
              <h4>Line &amp; Area</h4>
            </div>
            <div class="card-body">
              <mixed-linearea />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Line, Column &amp; Area</h4>
            </div>
            <div class="card-body">
              <mixed-linecolumnarea />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Line &amp; Scatter</h4>
            </div>
            <div class="card-body">
              <mixed-linescatter />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Line &amp; Column</h4>
            </div>
            <div class="card-body">
              <mixed-linecolumn />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Multiple Y Axis Chart</h4>
            </div>
            <div class="card-body">
              <mixed-multipleyaxes />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import MixedLinearea from "./components/mixed/mixed-linearea";
import MixedLinecolumn from "./components/mixed/mixed-linecolumn";
import MixedLinecolumnarea from "./components/mixed/mixed-linecolumnarea";
import MixedLinescatter from "./components/mixed/mixed-linescatter";
import MixedMultipleyaxes from "./components/mixed/mixed-multipleyaxes";

export default {
  name: "ChartMixed",
  components: {
    MixedLinearea,
    MixedLinecolumn,
    MixedLinecolumnarea,
    MixedLinescatter,
    MixedMultipleyaxes,
  },
};
</script>

