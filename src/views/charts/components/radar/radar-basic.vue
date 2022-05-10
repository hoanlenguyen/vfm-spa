<template>
  <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "ChartScatterBasic",
  components: { apexchart },
  data() {
    return {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "radar",
        },
        title: {
          text: "Basic Radar Chart",
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June"],
        },
      },
    };
  },
};
</script>