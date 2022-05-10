<template>
  <el-row type="flex" justify="center" :gutter="16">
    <el-col :xs="24" :sm="24" :md="18" :lg="12" :xl="12">
      <div class="card border-0 shadow-sm p-5">
        <div class="p-5 text-center">
          <router-link target="_blank" to="/pdf/download">
            <el-button type="primary">Click here to download PDF</el-button>
          </router-link>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

