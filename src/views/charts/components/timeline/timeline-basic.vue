<template>
  <apexchart type="rangeBar" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "ChartTimelineBasic",
  components: { apexchart },
  data() {
    return {
      series: [
        {
          data: [
            {
              x: "Code",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-04").getTime(),
              ],
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-04").getTime(),
                new Date("2019-03-08").getTime(),
              ],
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-12").getTime(),
              ],
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-12").getTime(),
                new Date("2019-03-18").getTime(),
              ],
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "rangeBar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          type: "datetime",
        },
      },
    };
  },
};
</script>