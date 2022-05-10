<template>
  <apexchart type="polarArea" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "ChartScatterBasic",
  components: { apexchart },
  data() {
    return {
      series: [42, 47, 52, 58, 65],
      chartOptions: {
        chart: {
          type: "polarArea",
        },
        labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
        fill: {
          opacity: 1,
        },
        stroke: {
          width: 1,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0.6,
          },
        },
      },
    };
  },
};
</script>