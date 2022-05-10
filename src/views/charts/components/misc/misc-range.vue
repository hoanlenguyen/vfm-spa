<template>
  <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";
import series from "../../assets/stock-prices.json";

export default {
  name: "ChartMiscBasic",
  components: { apexchart },
  data() {
    return {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      chartOptions: {
        annotations: {
          yaxis: [
            {
              y: "United Kingdom",
              y2: "South Korea",
              borderColor: "#FEB019",
              label: {
                borderColor: "#333",
                style: {
                  fontSize: "10px",
                  color: "#333",
                  background: "#FEB019",
                },
                text: "Y-axis range",
              },
            },
          ],
          xaxis: [
            {
              x: 400,
              x2: 800,
              borderColor: "#00E396",
              label: {
                borderColor: "#00E396",
                style: {
                  fontSize: "10px",
                  color: "#fff",
                  background: "#00E396",
                },
                offsetY: -10,
                text: "X-axis range",
              },
            },
          ],
        },
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ],
        },
      },
    };
  },
};
</script>