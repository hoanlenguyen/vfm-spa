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
              <h4>Basic Radar</h4>
            </div>
            <div class="card-body">
              <radar-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Radar - Multi Series</h4>
            </div>
            <div class="card-body">
              <radar-multi />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Radar with Polygon Fill</h4>
            </div>
            <div class="card-body">
              <radar-polygon />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import RadarBasic from "./components/radar/radar-basic";
import RadarPolygon from "./components/radar/radar-polygon";
import RadarMulti from "./components/radar/radar-multi";

export default {
  name: "ChartRadar",
  components: {
    RadarBasic,
    RadarPolygon,
    RadarMulti,
  },
};
</script>

