<template>
  <apexchart type="candlestick" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";
import {
  seriesData,
  seriesDataLinear,
  seriesData7,
  seriesData2,
  seriesData3,
  seriesData4,
  seriesData5,
  seriesData6,
} from "../../assets/ohlc.js";

export default {
  name: "ChartCandleStickBar",
  components: { apexchart },
  data() {
    return {
      series: [
        {
          data: seriesData,
        },
      ],
      chartOptions: {
        chart: {
          type: "candlestick",
          height: 290,
          id: "candles",
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#3C90EB",
              downward: "#DF7D46",
            },
          },
        },
        xaxis: {
          type: "datetime",
        },
      },

      seriesBar: [
        {
          name: "volume",
          data: seriesDataLinear,
        },
      ],
      chartOptionsBar: {
        chart: {
          height: 160,
          type: "bar",
          brush: {
            enabled: true,
            target: "candles",
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date("20 Jan 2017").getTime(),
              max: new Date("10 Dec 2017").getTime(),
            },
            fill: {
              color: "#ccc",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
            colors: {
              ranges: [
                {
                  from: -1000,
                  to: 0,
                  color: "#F15B46",
                },
                {
                  from: 1,
                  to: 10000,
                  color: "#FEB019",
                },
              ],
            },
          },
        },
        stroke: {
          width: 0,
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            offsetX: 13,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    };
  },
};
</script>