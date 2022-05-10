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
              <h4>Simple HeatMap</h4>
            </div>
            <div class="card-body">
              <heatmap-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>HeatMap with image fill</h4>
            </div>
            <div class="card-body">
              <heatmap-imagefill />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Color Heatmap</h4>
            </div>
            <div class="card-body">
              <heatmap-color />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Heatmap with Data</h4>
            </div>
            <div class="card-body">
              <heatmap-rounded />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Range HeatMap</h4>
            </div>
            <div class="card-body">
              <heatmap-colorrange />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Color Scales flipped Vertically</h4>
            </div>
            <div class="card-body">
              <heatmap-colorscale />
            </div>
          </div>
        </el-col>       
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import HeatmapBasic from "./components/heatmap/heatmap-basic";
import HeatmapColorrange from "./components/heatmap/heatmap-colorrange";
import HeatmapImagefill from "./components/heatmap/heatmap-imagefill";
import HeatmapColor from "./components/heatmap/heatmap-color";
import HeatmapColorscale from "./components/heatmap/heatmap-colorscale";
import HeatmapRounded from "./components/heatmap/heatmap-rounded";

export default {
  name: "ChartHeatmap",
  components: {
    HeatmapBasic,
    HeatmapColorrange,
    HeatmapImagefill,
    HeatmapColor,
    HeatmapColorscale,
    HeatmapRounded
  },
};
</script>

