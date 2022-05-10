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
              <h4>Inverted axis chart with Range Annotations</h4>
            </div>
            <div class="card-body">
              <misc-range />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Min Max Points example</h4>
            </div>
            <div class="card-body">
              <misc-minmax />
            </div>
          </div>
        </el-col>    
         <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Line Chart with Annotations</h4>
            </div>
            <div class="card-body">
              <misc-annotation />
            </div>
          </div>
        </el-col>  
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import MiscAnnotation from "./components/misc/misc-annotation";
import MiscMinmax from "./components/misc/misc-minmax";
import MiscRange from "./components/misc/misc-range";

export default {
  name: "ChartMisc",
  components: {
    MiscAnnotation,
    MiscMinmax,
    MiscRange
  },
};
</script>

