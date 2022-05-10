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
              <h4>Basic Bar</h4>
            </div>
            <div class="card-body">
              <bar-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Grouped Bar Chart</h4>
            </div>
            <div class="card-body">
              <bar-grouped />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stacked Bar Chart</h4>
            </div>
            <div class="card-body">
              <bar-stacked />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stacked Bar Chart - 100%</h4>
            </div>
            <div class="card-body">
              <bar-stacked-100 />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Bar Chart with Images</h4>
            </div>
            <div class="card-body">
              <bar-image />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Reversed Bar Chart</h4>
            </div>
            <div class="card-body">
              <bar-reversed />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stacked Bar Chart with Negative Values</h4>
            </div>
            <div class="card-body">
              <bar-with-negative />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Bar with Custom DataLabels</h4>
            </div>
            <div class="card-body">
              <bar-custom-label />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Bar Chart with Pattern Fill</h4>
            </div>
            <div class="card-body">
              <bar-patterned />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import BarBasic from "./components/bar/bar-basic";
import BarCustomLabel from "./components/bar/bar-custom-label";
import BarGrouped from "./components/bar/bar-grouped";
import BarImage from "./components/bar/bar-image";
import BarPatterned from "./components/bar/bar-patterned";
import BarReversed from "./components/bar/bar-reversed";
import BarStacked100 from "./components/bar/bar-stacked-100";
import BarStacked from "./components/bar/bar-stacked";
import BarWithNegative from "./components/bar/bar-with-negative";
export default {
  name: "ChartBar",
  components: {
    BarBasic,
    BarCustomLabel,
    BarGrouped,
    BarImage,
    BarPatterned,
    BarReversed,
    BarStacked100,
    BarStacked,
    BarWithNegative,
  },
};
</script>

