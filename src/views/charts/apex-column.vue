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
              <h4>Basic Column - Grouped</h4>
            </div>
            <div class="card-body">
              <column-basic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Column with rotate negative Data Labels</h4>
            </div>
            <div class="card-body">
              <column-rotateddata />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Range Column Chart</h4>
            </div>
            <div class="card-body">
              <column-range />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Dynamic Loaded Column Chart</h4>
            </div>
            <div class="card-body">
              <column-dynamic />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Basic Column - Grouped</h4>
            </div>
            <div class="card-body">
              <column-color />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Column with Data Labels</h4>
            </div>
            <div class="card-body">
              <column-label />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stacked Column</h4>
            </div>
            <div class="card-body">
              <column-stacked />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Column with Rotates Labels</h4>
            </div>
            <div class="card-body">
              <column-rotated />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Distributed Bar</h4>
            </div>
            <div class="card-body">
              <column-distributed />
            </div>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stacked Column</h4>
            </div>
            <div class="card-body">
              <column-stacked100 />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Basic Bar</h4>
            </div>
            <div class="card-body">
              <column-negative />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-5">
          <div class="card border-0 shadow-sm">
            <div class="card-header">
              <h4>Stacked Column with line</h4>
            </div>
            <div class="card-body">
              <column-stackedline />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import ColumnBasic from "./components/column/column-basic";
import ColumnRotated from "./components/column/column-rotated";
import ColumnRotateddata from "./components/column/column-rotateddata";
import ColumnColor from "./components/column/column-color";
import ColumnDistributed from "./components/column/column-distributed";
import ColumnLabel from "./components/column/column-label";
import ColumnDynamic from "./components/column/column-dynamic";
import ColumnRange from "./components/column/column-range";
import ColumnStacked from "./components/column/column-stacked";
import ColumnStacked100 from "./components/column/column-stacked100";
import ColumnStackedline from "./components/column/column-stackedline";
import ColumnNegative from "./components/column/column-negative";

export default {
  name: "ChartColumn",
  components: {
    ColumnBasic,
    ColumnRotated,
    ColumnRotateddata,
    ColumnColor,
    ColumnDistributed,
    ColumnLabel,
    ColumnDynamic,
    ColumnRange,
    ColumnStacked,
    ColumnStacked100,
    ColumnStackedline,
    ColumnNegative
  },
};
</script>

