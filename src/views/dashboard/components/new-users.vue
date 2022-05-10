<template>
  <div>
    <router-link to="/order">
    <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
      <span class="el-button el-button--info btn-text focus disabled">
        <s-icon size="3.2rem" icon="el-icon-notebook-2"></s-icon>
      </span>
      <div class="text-right">
        <h3 class="title">{{data}}</h3>
        <span class="sub-title">Số lượng Order</span>
      </div>
    </el-row>
    </router-link>
    <apexchart
      width="100%"
      :height="height"
      type="area"
      :options="newUserChartOptions"
      :series="newUserChartSeries"
    ></apexchart>
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";

export default {
  name: "NewUsers",
  components: { apexchart: ApexChart },
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
      newUserChartOptions: {
        //colors:['#9F0AE4'],
        colors: ["#E5E5E5"],
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
          width: 2,
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
        tooltip: {
          x: {
            show: true,
            format: "dd/MM/yy",
          },
        },
      },
      newUserChartSeries: [
        {
          name: "New Users",
          data: [],
        },
      ],
    };
  },

  mounted() {
    this.newUserChartSeries = [
      {
        name: "New Users",
        data: this.generateDayWiseTimeSeries(new Date().getTime(), 14, {
          min: 30,
          max: 90,
        }),
      },
    ];
  },
  methods: {
    generateDayWiseTimeSeries: function (baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    },
  },
};
</script>
