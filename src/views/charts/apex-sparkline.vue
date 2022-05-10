<template>
  <el-row type="flex" justify="center">
    <el-col :xl="20">
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="card border-0 shadow-sm p-5">
            <span>
              ApexCharts is a modern charting library that helps developers to create beautiful and interactive visualizations for web pages. For more info please visit
              <a
                href="https://apexcharts.com/"
                target="_blank"
              >Apexcharts</a>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt-5">
          <div class="card border-0 shadow-sm pt-3">
            <apexchart type="area" height="160" :options="chartOptions" :series="series"></apexchart>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt-5">
          <div class="card border-0 shadow-sm pt-3">
            <apexchart
              type="area"
              height="160"
              :options="chartOptionsSpark2"
              :series="seriesSpark2"
            ></apexchart>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="mt-5">
          <div class="card border-0 shadow-sm pt-3">
            <apexchart
              type="area"
              height="160"
              :options="chartOptionsSpark3"
              :series="seriesSpark3"
            ></apexchart>
          </div>
        </el-col>

        <el-col :xs="24" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="table-container">
              <table class="table-default w-100 border-0">
                <thead>
                  <th>Total Value</th>
                  <th>Percentage of Portfolio</th>
                  <th>Last 10 days</th>
                  <th>Volume</th>
                </thead>
                <tbody>
                  <tr>
                    <td>$32,554</td>
                    <td>15%</td>
                    <td>
                      <div id="chart-1">
                        <apexchart
                          type="line"
                          height="35"
                          width="100"
                          :options="chartOptions1"
                          :series="series1"
                        ></apexchart>
                      </div>
                    </td>
                    <td>
                      <div id="chart-5">
                        <apexchart
                          type="bar"
                          height="35"
                          width="100"
                          :options="chartOptions5"
                          :series="series5"
                        ></apexchart>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>$23,533</td>
                    <td>7%</td>
                    <td>
                      <div id="chart-2">
                        <apexchart
                          type="line"
                          height="35"
                          width="100"
                          :options="chartOptions2"
                          :series="series2"
                        ></apexchart>
                      </div>
                    </td>
                    <td>
                      <div id="chart-6">
                        <apexchart
                          type="bar"
                          height="35"
                          width="100"
                          :options="chartOptions6"
                          :series="series6"
                        ></apexchart>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>$54,276</td>
                    <td>9%</td>
                    <td>
                      <div id="chart-3">
                        <apexchart
                          type="pie"
                          height="40"
                          width="40"
                          :options="chartOptions3"
                          :series="series3"
                        ></apexchart>
                      </div>
                    </td>
                    <td>
                      <div id="chart-7">
                        <apexchart
                          type="radialBar"
                          height="50"
                          width="50"
                          :options="chartOptions7"
                          :series="series7"
                        ></apexchart>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>$11,533</td>
                    <td>2%</td>
                    <td>
                      <div id="chart-4">
                        <apexchart
                          type="donut"
                          height="40"
                          width="40"
                          :options="chartOptions4"
                          :series="series4"
                        ></apexchart>
                      </div>
                    </td>
                    <td>
                      <div id="chart-8">
                        <apexchart
                          type="radialBar"
                          height="40"
                          width="40"
                          :options="chartOptions8"
                          :series="series8"
                        ></apexchart>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import apexchart from "vue-apexcharts";

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
// data for the sparklines that appear below header area
var sparklineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46,
];

export default {
  name: "ChartSparkline",
  components: {
    apexchart,
  },

  data() {
    return {
      series: [
        {
          data: randomizeArray(sparklineData),
        },
      ],
      chartOptions: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
          width: 3,
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["#DCE6EC"],
        title: {
          text: "$424,652",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
        subtitle: {
          text: "Sales",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
      },

      seriesSpark2: [
        {
          data: randomizeArray(sparklineData),
        },
      ],
      chartOptionsSpark2: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
          width: 3,
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["#DCE6EC"],
        title: {
          text: "$235,312",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
        subtitle: {
          text: "Expenses",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
      },

      seriesSpark3: [
        {
          data: randomizeArray(sparklineData),
        },
      ],
      chartOptionsSpark3: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
          width: 3,
        },
        fill: {
          opacity: 0.3,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        yaxis: {
          min: 0,
        },
        title: {
          text: "$135,965",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
        subtitle: {
          text: "Profits",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
      },

      series1: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        },
      ],
      chartOptions1: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        stroke: {
          width: 3,
        },
        chart: {
          type: "line",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
      },

      series2: [
        {
          data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        },
      ],
      chartOptions2: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        stroke: {
          width: 3,
        },
        chart: {
          type: "line",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
      },

      series3: [43, 32, 12, 9],
      chartOptions3: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        stroke: {
          width: 3,
        },
        chart: {
          type: "pie",
          width: 40,
          height: 40,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
        },
      },

      series4: [43, 32, 12, 9],
      chartOptions4: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        stroke: {
          width: 3,
        },
        chart: {
          type: "donut",
          width: 40,
          height: 40,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
        },
      },

      series5: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        },
      ],
      chartOptions5: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        stroke: {
          width: 3,
        },
        chart: {
          type: "bar",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
      },

      series6: [
        {
          data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        },
      ],
      chartOptions6: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        stroke: {
          width: 3,
        },
        chart: {
          type: "bar",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
      },

      series7: [45],
      chartOptions7: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        stroke: {
          width: 3,
        },
        chart: {
          type: "radialBar",
          width: 50,
          height: 50,
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
            },
            track: {
              margin: 0,
            },
            dataLabels: {
              show: false,
            },
          },
        },
      },

      series8: [53, 67],
      chartOptions8: {
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
        },
        stroke: {
          width: 3,
        },
        chart: {
          type: "radialBar",
          width: 40,
          height: 40,
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
            },
            track: {
              margin: 1,
            },
            dataLabels: {
              show: false,
            },
          },
        },
      },
    };
  },
};
</script>

