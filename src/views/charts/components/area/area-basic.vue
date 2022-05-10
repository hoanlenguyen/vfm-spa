<template>
  <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";
import series from "../../assets/stock-prices.json";

export default {
  name: "ChartAreaBasic",
  components: { apexchart },
  data() {
    return {
      series: [],
      chartOptions: {},
    };
  },
  mounted() {
    this.series = [
      {
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices,
      },
    ];
    this.chartOptions = {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left",
      },
      subtitle: {
        text: "Price Movements",
        align: "left",
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    };
  },
};
</script>