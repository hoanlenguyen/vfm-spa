<template>
  <apexchart type="donut" width="405px" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "ChartPieBasic",
  components: { apexchart },
  data() {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -45,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: "Gradient Donut with custom Start-angle",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>