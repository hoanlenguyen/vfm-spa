<template>
  <div id="wrapper">
    <div id="chart-line2">
      <apexchart type="line" height="230" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div id="chart-line">
      <apexchart type="area" height="130" :options="chartOptionsLine" :series="seriesLine"></apexchart>
    </div>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";

/*
    // this function will generate output in this format
    // data = [
        [timestamp, 23],
        [timestamp, 33],
        [timestamp, 12]
        ...
    ]
  */
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

var data = generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 185, {
  min: 30,
  max: 90,
});

export default {
  name: "ChartLineBrush",
  components: { apexchart },
  data() {
    return {
      series: [
        {
          data: data,
        },
      ],
      chartOptions: {
        chart: {
          id: "chart2",
          type: "line",
          height: 230,
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
        },
        colors: ["#546E7A"],
        stroke: {
          width: 3,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 1,
        },
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
      },

      seriesLine: [
        {
          data: data,
        },
      ],
      chartOptionsLine: {
        chart: {
          id: "chart1",
          height: 130,
          type: "area",
          brush: {
            target: "chart2",
            enabled: true,
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date("19 Jun 2017").getTime(),
              max: new Date("14 Aug 2017").getTime(),
            },
          },
        },
        colors: ["#008FFB"],
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
          },
        },
        xaxis: {
          type: "datetime",
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          tickAmount: 2,
        },
      },
    };
  },
};
</script>