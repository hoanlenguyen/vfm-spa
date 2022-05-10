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
              <h4>Circle Gauge Chart</h4>
            </div>
            <div class="card-body">
              <radialbar-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Circle Concept 2</h4>
            </div>
            <div class="card-body">
              <radialbar-gradient />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Circle Gauge Chart With Image</h4>
            </div>
            <div class="card-body">
              <radialbar-image />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stroked Gauge</h4>
            </div>
            <div class="card-body">
              <radialbar-stroked />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Circle Custom Angle</h4>
            </div>
            <div class="card-body">
              <radialbar-angle />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Circle Gauge Chart - Multiple</h4>
            </div>
            <div class="card-body">
              <radialbar-multi />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Semi Circle Chart</h4>
            </div>
            <div class="card-body">
              <radialbar-semi />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import RadialbarBasic from "./components/radialbar/radialbar-basic";
import RadialbarMulti from "./components/radialbar/radialbar-multi";
import RadialbarImage from "./components/radialbar/radialbar-image";
import RadialbarAngle from "./components/radialbar/radialbar-angle";
import RadialbarGradient from "./components/radialbar/radialbar-gradient";
import RadialbarSemi from "./components/radialbar/radialbar-semi";
import RadialbarStroked from "./components/radialbar/radialbar-stroked";

export default {
  name: "ChartRadialbar",
  components: {
    RadialbarBasic,
    RadialbarMulti,
    RadialbarImage,
    RadialbarAngle,
    RadialbarGradient,
    RadialbarSemi,
    RadialbarStroked
  },
};
</script>

