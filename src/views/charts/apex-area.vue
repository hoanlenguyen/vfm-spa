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
              <h4>Basic Area</h4>
            </div>
            <div class="card-body">
              <area-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Area With Missing Data</h4>
            </div>
            <div class="card-body">
              <area-with-missing-data />
            </div>
          </div>
        </el-col>
        <!-- <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Area - Github style</h4>
            </div>
            <div class="card-body">
              <area-github-style />
            </div>
          </div>
        </el-col> -->
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>TimeSeries With Irregular Data</h4>
            </div>
            <div class="card-body">
              <area-irregular/>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stacked Area</h4>
            </div>
            <div class="card-body">
              <area-stacked />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Area with Negative - Stacked</h4>
            </div>
            <div class="card-body">
              <area-negative-stacked />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Area Spline</h4>
            </div>
            <div class="card-body">
              <area-spline />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Area Datetime</h4>
            </div>
            <div class="card-body">
              <area-datetime />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import AreaBasic from "./components/area/area-basic";
import AreaDatetime from "./components/area/area-datetime";
import AreaWithMissingData from "./components/area/area-with-missing-data";
//import AreaGithubStyle from "./components/area/area-github-style";
 import AreaStacked from "./components/area/area-stacked";
 import AreaSpline from "./components/area/area-spline";
 import AreaNegativeStacked from "./components/area/area-negative-stacked";
 import AreaIrregular from "./components/area/area-irregular";

export default {
  name: "ChartArea",
  components: {
    AreaBasic,
    AreaDatetime,
    AreaWithMissingData,
    //AreaGithubStyle,
     AreaStacked,
     AreaSpline,
     AreaNegativeStacked,
     AreaIrregular,
  },
};
</script>

