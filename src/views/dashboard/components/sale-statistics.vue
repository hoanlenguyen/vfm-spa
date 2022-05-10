<template>
  <div>
    <router-link to="/changing-information/pending">
    <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
      <span class="el-button el-button--warning btn-text focus disabled">
        <s-icon size="3.2rem" icon="el-icon-refresh"></s-icon>
      </span>
      <div class="text-right">
        <h3>{{data}}</h3>
        <span>Số hồ sơ chờ duyệt thay đổi thông tin</span>
      </div>
    </el-row>
    </router-link>
    <apexchart  width="100%" type="line" :height="height" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "SaleStatistic",
  components: { apexchart },
  props: {
    height: {
      type: Number,
      default: 200,
    },
    data: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      series: [
        {
          name: "TEAM A",
          type: "area",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "TEAM B",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: "TEAM C",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],
      chartOptions: {
        chart: {
          height: 200,
          type: "line",
          stacked: false,
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          width: [0, 2, 4],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
        fill: {
          opacity: [0.6, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003",
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: [{
          title: {
            text: "Points",
          },
          min: 0,
          y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
              left: 0,
              right: 0,
            },
            lines: {
              show: false,
            },
            axisBorder: {
              show: false,
            },

            labels: {
              show: false,
            },
          }],
        
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            },
          },
        },
      },
    };
  },
};
</script>