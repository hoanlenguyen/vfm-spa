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
              <h4>Basic Line</h4>
            </div>
            <div class="card-body">
              <line-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Dashed Line Chart</h4>
            </div>
            <div class="card-body">
              <line-dashed />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Chart with Logarithmic Scale</h4>
            </div>
            <div class="card-body">
              <line-logarithmic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Line Chart with missing data</h4>
            </div>
            <div class="card-body">
              <line-missing />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Gradient Line</h4>
            </div>
            <div class="card-body">
              <line-gradient />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Line with Data Labels</h4>
            </div>
            <div class="card-body">
              <line-label />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Dynamic Updating Line Chart</h4>
            </div>
            <div class="card-body">
              <line-realtime />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Brush charts</h4>
            </div>
            <div class="card-body">
              <line-brush />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Line Chart with Annotations</h4>
            </div>
            <div class="card-body">
              <line-annotation />
            </div>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stepline Chart</h4>
            </div>
            <div class="card-body">
              <line-stepline />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Zoomable TimeSeries</h4>
            </div>
            <div class="card-body">
              <line-zoomable />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Line with Image Fill</h4>
            </div>
            <div class="card-body">
              <line-image />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Syncing charts</h4>
            </div>
            <div class="card-body">
              <line-syncing />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import LineBasic from "./components/line/line-basic";
import LineBrush from "./components/line/line-brush";
import LineDashed from "./components/line/line-dashed";
import LineGradient from "./components/line/line-gradient";
import LineAnnotation from "./components/line/line-annotation";
import LineLabel from "./components/line/line-label";
import LineMissing from "./components/line/line-missing";
import LineLogarithmic from "./components/line/line-logarithmic";
import LineRealtime from "./components/line/line-realtime";
import LineStepline from "./components/line/line-stepline";
import LineSyncing from "./components/line/line-syncing";
import LineZoomable from "./components/line/line-zoomable";
import LineImage from "./components/line/line-image";

export default {
  name: "ChartLine",
  components: {
    LineBasic,
    LineBrush,
    LineDashed,
    LineGradient,
    LineAnnotation,
    LineLabel,
    LineMissing,
    LineLogarithmic,
    LineRealtime,
    LineStepline,
    LineSyncing,
    LineZoomable,
    LineImage
  },
};
</script>

