<template>
  <apexchart type="donut" width="380px" :options="chartOptions" :series="series"></apexchart>
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
          type: "donut",
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