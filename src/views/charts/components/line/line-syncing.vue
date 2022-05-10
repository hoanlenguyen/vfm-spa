<template>
  <div id="wrapper">
    <div id="chart-line">
      <apexchart type="line" height="160" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div id="chart-line2">
      <apexchart type="line" height="160" :options="chartOptionsLine2" :series="seriesLine2"></apexchart>
    </div>
    <div id="chart-area">
      <apexchart type="area" height="160" :options="chartOptionsArea" :series="seriesArea"></apexchart>
    </div>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export default {
  name: "ChartLineSyncing",
  components: { apexchart },
  data() {
    return {
      series: [
        {
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
      ],
      chartOptions: {
        chart: {
          id: "fb",
          group: "social",
          type: "line",
          height: 160,
        },
        colors: ["#008FFB"],
        yaxis: {
          labels: {
            minWidth: 40,
          },
        },
        xaxis: {
          type: "datetime",
        },
      },

      seriesLine2: [
        {
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 30,
            }
          ),
        },
      ],
      chartOptionsLine2: {
        chart: {
          id: "tw",
          group: "social",
          type: "line",
          height: 160,
        },
        colors: ["#546E7A"],
        yaxis: {
          labels: {
            minWidth: 40,
          },
        },
        xaxis: {
          type: "datetime",
        },
      },

      seriesArea: [
        {
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
      ],
      chartOptionsArea: {
        chart: {
          id: "yt",
          group: "social",
          type: "area",
          height: 160,
        },
        colors: ["#00E396"],
        yaxis: {
          labels: {
            minWidth: 40,
          },
        },
        xaxis: {
          type: "datetime",
        },
      },
    };
  },
};
</script>