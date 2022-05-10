<template>
  <div>
    <router-link to="/level-upgrade/pending">
    <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
      <span class="el-button el-button--success btn-text focus disabled">
        <s-icon size="3.2rem" icon="el-icon-upload2"></s-icon>
      </span>
      <div class="text-right">
        <h3>{{data}}</h3>
        <span>Số lượng hồ sơ chờ duyệt hạn mức</span>
      </div>
    </el-row>
    </router-link>
    <apexchart
      width="100%"
      :height="height"
      type="bar"
      :options="weeklySaleChartOptions"
      :series="weeklySaleChartSeries"
    ></apexchart>
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";

export default {
  name: "Weekly",
  components: { apexchart: ApexChart, },
  props: {
      height: {
          type: Number,
          default: 200
      },
      data: {
          type: Number,
          default: 0,
    },
  },
  data() {
    return {
      // Weekly Revenue
      weeklySaleChartOptions: {
        colors: ["#1F84F4", "#51bb25", "#8950FC"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        markers: {
          size: 4,
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          },
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
        chart: {
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
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
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
              left: 0,
              right: 0,
            },
          },
        ],
        // tooltip: {
        //   x: {
        //     show: true,
        //     format: "dd/MM/yy"
        //   }
        // },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$" + val + " thousands";
            },
          },
        },
      },

      weeklySaleChartSeries: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
    };
  },
};
</script>