<template>
  <div>
    <router-link to="/trading">
    <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
      <span class="el-button el-button--primary btn-text focus disabled">
        <s-icon size="3.2rem" icon="el-icon-user-solid"></s-icon>
      </span>
      <div class="text-right">
        <h3>{{data}}</h3>
        <span>Tổng số người dùng</span>
      </div>
    </el-row>
    </router-link>
    <apexchart
      width="100%"
      type="area"
      :height="height"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";

var lastDate = 0;
var data = [];
var TICKINTERVAL = 86400000;
let XAXISRANGE = 777600000;
function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data.push({
      x,
      y,
    });
    lastDate = baseval;
    baseval += TICKINTERVAL;
    i++;
  }
}

getDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, {
  min: 10,
  max: 90,
});

function getNewSeries(baseval, yrange) {
  var newDate = baseval + TICKINTERVAL;
  lastDate = newDate;

  for (var i = 0; i < data.length - 10; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
    data[i].y = 0;
  }

  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  });
}

function resetData() {
  // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
  data = data.slice(data.length - 10, data.length);
}

export default {
  name: "ChartLineRealtime",
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
      intervalPolling1: null,
      intervalPolling2: null,
      series: [
        {
          name: "Ticket Sales",
          data: data.slice(),
        },
      ],
      chartOptions: {
        chart: {
          id: "realtime",
          height: 200,
          type: "line",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 2000,
            },
          },
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
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
          curve: "smooth",
        },
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
          range: XAXISRANGE,
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
        ],
        legend: {
          show: false,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "" + val + "";
            },
          },
        },
      },
    };
  },

  mounted() {
    var me = this;
    this.intervalPolling1 = window.setInterval(function () {
      getNewSeries(lastDate, {
        min: 10,
        max: 90,
      });

      me.$refs.chart.updateSeries([
        {
          data: data,
        },
      ]);
    }, 2000);

    // every 120 seconds, we reset the data to prevent memory leaks
    this.intervalPolling2 = window.setInterval(function () {
      resetData();

      me.$refs.chart.updateSeries(
        [
          {
            data,
          },
        ],
        false,
        true
      );
    }, 120000);
  },
  beforeDestroy: function () {
    window.clearInterval(this.intervalPolling1);
    window.clearInterval(this.intervalPolling2);
  },
};
</script>