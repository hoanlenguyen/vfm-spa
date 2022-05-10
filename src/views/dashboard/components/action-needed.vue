<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
      <h4>Action Needed</h4>
      <el-button plain class="btn-text" size="mini">
        <s-icon icon="material-more-vert" />
      </el-button>
    </el-row>

    <div class="chart-wrapper">
      <apex-chart width="100%" height="200" type="donut" :options="options" :series="series"></apex-chart>
      <span class="chart-total">77%</span>
    </div>
    <p
      class="px-5 py-3 text-center"
      style="min-height: 58px"
    >Notes: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of.</p>
    <div class="p-5">
      <el-button type="success w-100">Download Report</el-button>
    </div>
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";

export default {
  name: "Weekly",
  components: { ApexChart },
  data() {
    return {
      options: {
        colors: ["#51bb25", "#B4E2A2"],
        //colors: ["#00B0F0", "#B9E9FA"],
        //colors: ["#8950FC", "#EEE5FF"],
        stroke: {
          curve: "smooth",
          lineCap: "round",
        },
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "86%",
              labels: {
                show: false,
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          type: "datetime",
          lines: {
            show: false,
          },
          axisBorder: {
            show: false,
          },

          labels: {
            show: false,
          },
        },
        yaxis: [
          {
            labels: {
              show: false,
            },
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
              left: 0,
              right: 0,
            },
          },
        ],
        tooltip: {
          enabled: false,
        },
      },
      series: [77, 23],
    };
  },
};
</script>

<style scoped lang="scss">
.chart-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .chart-total {
    position: absolute;
    font-size: 4rem;
    font-weight: 600;
  }
}
</style>