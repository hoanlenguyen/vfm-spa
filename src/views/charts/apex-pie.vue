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
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Basic Pie</h4>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
              <pie-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Monochrome Pie with multiline labels</h4>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
              <pie-monochrome />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Pie with Data Images</h4>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
              <pie-image />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Donut Chart with pattern</h4>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
              <pie-donutpattern />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Simple Donut</h4>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
              <pie-donut />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Gradient Donut</h4>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
              <pie-gradient />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Donut Dynamic</h4>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
              <pie-donutupdate />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import PieBasic from "./components/pie/pie-basic";
import PieDonutupdate from "./components/pie/pie-donutupdate";
import PieDonutpattern from "./components/pie/pie-donutpattern";
import PieGradient from "./components/pie/pie-gradient";
import PieMonochrome from "./components/pie/pie-monochrome";
import PieImage from "./components/pie/pie-image";
import PieDonut from "./components/pie/pie-donut";

export default {
  name: "ChartPie",
  components: {
    PieBasic,
    PieDonutupdate,
    PieDonutpattern,
    PieGradient,
    PieMonochrome,
    PieImage,
    PieDonut
  },
};
</script>

