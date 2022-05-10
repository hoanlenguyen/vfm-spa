<template>
  <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "ChartLineBasic",
  components: { apexchart },
  data() {
    return {
      series: [67],
      chartOptions: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "70%",
              image: "static/chart-images/clock.png",
              imageWidth: 64,
              imageHeight: 64,
              imageClipped: false,
            },
            dataLabels: {
              name: {
                show: false,
                color: "#fff",
              },
              value: {
                show: true,
                color: "#333",
                offsetY: 70,
                fontSize: "22px",
              },
            },
          },
        },
        fill: {
          type: "image",
          image: {
            src: ["static/chart-images/4274635880_809a4b9d0d_z.jpg"],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Volatility"],
      },
    };
  },
};
</script>