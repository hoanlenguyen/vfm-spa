<template>
  <div>
    <div class="chart-wrap">
      <div id="chart">
        <apexchart type="donut" width="380px" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <el-button type="primary" size="small" plain @click="appendData">+ ADD</el-button>

      <el-button type="primary" size="small" plain @click="removeData">- REMOVE</el-button>

      <el-button type="primary" size="small" plain @click="randomize">RANDOMIZE</el-button>

      <el-button type="primary" size="small" plain @click="reset">RESET</el-button>
    </div>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "ChartPieBasic",
  components: { apexchart },
  data() {
    return {
      series: [44, 55, 13, 33],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
        },
      },
    };
  },

  methods: {
    appendData: function () {
      var arr = this.series.slice();
      arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
      this.series = arr;
    },

    removeData: function () {
      if (this.series.length === 1) return;
      var arr = this.series.slice();
      arr.pop();
      this.series = arr;
    },

    randomize: function () {
      this.series = this.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      });
    },

    reset: function () {
      this.series = [44, 55, 13, 33];
    },
  },
};
</script>