<template>
  <div id="app">
    <div id="wrapper">
      <div id="chart-months">
        <apexchart type="area" height="160" :options="chartOptions" :series="series"></apexchart>
      </div>

      <h5 class="github-style">
        <img
          class="userimg"
          src="https://picsum.photos/200/200/?image=1031"
          data-hovercard-user-id="634573"
          alt
          width="38"
          height="38"
        />
        <div class="userdetails">
          <a class="username">coder</a>
          <span class="cmeta">
            <span class="commits"></span> commits
          </span>
        </div>
      </h5>

      <div id="chart-years">
        <apexchart type="area" height="200" :options="chartOptionsYears" :series="seriesYears"></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";
import githubdata from "../../assets/github-data.json";

export default {
  name: "ChartAreaGithubStyle",
  components: { apexchart },
  data() {
    return {
      series: [],
      chartOptions: {},
      seriesYears: [],
      chartOptionsYears: {},
    };
  },

  mounted() {
    this.series = [
      {
        name: "commits",
        data: githubdata.series,
      },
    ];
    this.chartOptions = {
      chart: {
        id: "chartyear",
        type: "area",
        height: 160,
        background: "#F6F8FA",
        toolbar: {
          show: false,
          autoSelected: "pan",
        },
        events: {
          mounted: function (chart) {
            var commitsEl = document.querySelector(".cmeta span.commits");
            var commits = chart.getSeriesTotalXRange(
              chart.w.globals.minX,
              chart.w.globals.maxX
            );

            commitsEl.innerHTML = commits;
          },
          updated: function (chart) {
            var commitsEl = document.querySelector(".cmeta span.commits");
            var commits = chart.getSeriesTotalXRange(
              chart.w.globals.minX,
              chart.w.globals.maxX
            );

            commitsEl.innerHTML = commits;
          },
        },
      },
      colors: ["#FF7F00"],
      stroke: {
        width: 0,
        curve: "smooth",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
        type: "solid",
      },
      yaxis: {
        show: false,
        tickAmount: 3,
      },
      xaxis: {
        type: "datetime",
      },
    };

    this.seriesYears = [
      {
        name: "commits",
        data: githubdata.series,
      },
    ];
    this.chartOptionsYears = {
      chart: {
        height: 200,
        type: "area",
        background: "#F6F8FA",
        toolbar: {
          autoSelected: "selection",
        },
        brush: {
          enabled: true,
          target: "chartyear",
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("26 Jan 2014").getTime(),
            max: new Date("29 Mar 2015").getTime(),
          },
        },
      },
      colors: ["#7BD39A"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
        curve: "smooth",
      },
      fill: {
        opacity: 1,
        type: "solid",
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      xaxis: {
        type: "datetime",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 22px 35px -16px rgba(0, 0, 0, 0.1);
  max-width: 650px;
  margin: 35px auto;
}

.github-style {
  clear: both;
  font-weight: 400;
  height: 40px;
  margin-left: 6px;
}

.github-style a {
  color: #0366d6;
  font-size: 18px;
}

.github-style .cmeta {
  display: block;
  color: #777;
  font-weight: 400;
}

.github-style .userimg {
  float: left;
  display: block;
  border-radius: 3px;
}

.github-style .userdetails {
  float: left;
  margin-left: 10px;
}
</style>