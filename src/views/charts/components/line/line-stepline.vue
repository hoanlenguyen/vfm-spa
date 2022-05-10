<template>
  <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";
import dataSeries from "../../assets/irregular-data-series.json";

var ts2 = 1484418600000;
var data = [];
var spikes = [5, -5, 3, -3, 8, -8];
for (var i = 0; i < 30; i++) {
  ts2 = ts2 + 86400000;
  var innerArr = [ts2, dataSeries[1][i].value];
  data.push(innerArr);
}

export default {
  name: "ChartLineStepline",
  components: { apexchart },
  data() {
    return {
      series: [
        {
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
      ],
      chartOptions: {
        chart: {
          type: "line",
          height: 350,
        },
        stroke: {
          curve: "stepline",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Stepline Chart",
          align: "left",
        },
        markers: {
          hover: {
            sizeOffset: 4,
          },
        },
      },
    };
  },
};
</script>