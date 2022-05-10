<template>
  <apexchart type="heatmap" height="360" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "round" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}

export default {
  name: "ChartHeatmapBasic",
  components: { apexchart },
  data() {
    return {
      series: [
        {
          name: "Oliver",
          data: generateData(15, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Harry",
          data: generateData(15, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Thomas",
          data: generateData(15, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Callum",
          data: generateData(15, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Ethan",
          data: generateData(15, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Richard",
          data: generateData(15, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "David",
          data: generateData(15, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chartOptions: {
        chart: {
          height: 360,
          type: "heatmap",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#008FFB"],
        title: {
          text: "HeatMap Chart with image fill",
        },
        fill: {
          type: "image",
          image: {
            src: "static/chart-images/ico-instagram.png",
          },
        },
      },
    };
  },
};
</script>