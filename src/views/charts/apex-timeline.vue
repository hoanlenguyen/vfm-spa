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
              <h4>Basic Timeline Chart</h4>
            </div>
            <div class="card-body">
              <timeline-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Controlling Colors in Timeline Chart</h4>
            </div>
            <div class="card-body">
              <timeline-controlling />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Multi-series Timeline</h4>
            </div>
            <div class="card-body">
              <timeline-multi />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Advanced Overlapping Timeline</h4>
            </div>
            <div class="card-body">
              <timeline-advanced />
            </div>
          </div>
        </el-col>      
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import TimelineBasic from "./components/timeline/timeline-basic";
import TimelineAdvanced from "./components/timeline/timeline-advanced";
import TimelineControlling from "./components/timeline/timeline-controlling";
import TimelineMulti from "./components/timeline/timeline-multi";

export default {
  name: "ChartTimeline",
  components: {
    TimelineBasic,
    TimelineAdvanced,
    TimelineControlling,
    TimelineMulti,
  },
};
</script>

