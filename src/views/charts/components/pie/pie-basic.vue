<template>
  <apexchart type="pie" width="425px" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "ChartPieBasic",
  components: { apexchart },
  data() {
    return {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 425,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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