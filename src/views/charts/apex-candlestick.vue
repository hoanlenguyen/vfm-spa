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
              <h4>CandleStick Chart</h4>
            </div>
            <div class="card-body">
              <candlestick-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>CandleStick Chart with Category X-axis</h4>
            </div>
            <div class="card-body">
              <candlestick-category />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>CandleStick with Line Chart</h4>
            </div>
            <div class="card-body">
              <candlestick-line />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>CandleStick Chart with Bar</h4>
            </div>
            <div class="card-body">
              <candlestick-bar />
            </div>
          </div>
        </el-col>      
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import CandlestickBasic from "./components/candlestick/candlestick-basic";
import CandlestickBar from "./components/candlestick/candlestick-bar";
import CandlestickCategory from "./components/candlestick/candlestick-category";
import CandlestickLine from "./components/candlestick/candlestick-line";

export default {
  name: "ChartCandlestick",
  components: {
    CandlestickBasic,
    CandlestickBar,
    CandlestickCategory,
    CandlestickLine,
  },
};
</script>

