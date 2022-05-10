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
      series: [70],
      chartOptions: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
          },
        },
        labels: ["Cricket"],
      },
    };
  },
};
</script>