<template>
  <apexchart type="pie" width="385px" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "ChartPieBasic",
  components: { apexchart },
  data() {
    return {
      series: [44, 33, 54, 45],
      chartOptions: {
        chart: {
          width: 385,
          type: "pie",
        },
        colors: ["#93C3EE", "#E5C6A0", "#669DB5", "#94A74A"],
        fill: {
          type: "image",
          opacity: 0.85,
          image: {
            src: [
              "static/chart-images/stripes.jpg",
              "static/chart-images/1101098.png",
              "static/chart-images/4679113782_ca13e2e6c0_z.jpg",
              "static/chart-images/2979121308_59539a3898_z.jpg",
            ],
            width: 25,
            imagedHeight: 25,
          },
        },
        stroke: {
          width: 4,
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#111"],
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            borderWidth: 0,
          },
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