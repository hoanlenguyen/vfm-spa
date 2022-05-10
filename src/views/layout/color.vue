<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Color</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Color should always be used in meaningful and intentional ways in order to create patterns and visual cues.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Main Color</h3>

            <el-row class="mt-4" :gutter="24">
              <el-col :md="12">
                <div class="rounded-sm overflow-hidden">
                  <el-row>
                    <el-col :span="24" class="bg-primary px-5 py-4">
                      <h5 class="c-white">Primary Color</h5>
                      <p class="c-white">#1F84F4</p>
                    </el-col>
                  </el-row>
                  <el-row class="mt-0" type="flex">
                    <el-col v-for="n in 9" :key="n" class="p-4" :class="['bg-primary-light-'+ n]"></el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>

          <div>
            <h3 class="mt-8x">Secondary Color</h3>
            <p
              class="mt-2 text-lg"
            >Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)</p>
            <el-row :gutter="24">
              <el-col :md="12" class="mt-5">
                <div class="rounded-sm overflow-hidden">
                  <el-row>
                    <el-col :span="24" class="bg-success px-5 py-4">
                      <h5 class="c-white">Success Color</h5>
                      <p class="c-white">#51bb25</p>
                    </el-col>
                  </el-row>
                  <el-row class="mt-0" type="flex">
                    <el-col v-for="n in 9" :key="n" class="p-4" :class="['bg-success-light-'+ n]"></el-col>
                  </el-row>
                </div>
              </el-col>

              <el-col :md="12" class="mt-5">
                <div class="rounded-sm overflow-hidden">
                  <el-row>
                    <el-col :span="24" class="bg-warning px-5 py-4">
                      <h5 class="c-white">Warning Color</h5>
                      <p class="c-white">#FFA800</p>
                    </el-col>
                  </el-row>
                  <el-row class="mt-0" type="flex">
                    <el-col v-for="n in 9" :key="n" class="p-4" :class="['bg-warning-light-'+ n]"></el-col>
                  </el-row>
                </div>
              </el-col>

              <el-col :md="12" class="mt-5">
                <div class="rounded-sm overflow-hidden">
                  <el-row>
                    <el-col :span="24" class="bg-info px-5 py-4">
                      <h5 class="c-white">Info Color</h5>
                      <p class="c-white">#9F0AE4</p>
                    </el-col>
                  </el-row>
                  <el-row class="mt-0" type="flex">
                    <el-col v-for="n in 9" :key="n" class="p-4" :class="['bg-info-light-'+ n]"></el-col>
                  </el-row>
                </div>
              </el-col>

              <el-col :md="12" class="mt-5">
                <div class="rounded-sm overflow-hidden">
                  <el-row>
                    <el-col :span="24" class="bg-danger px-5 py-4">
                      <h5 class="c-white">Danger Color</h5>
                      <p class="c-white">#F72D1D</p>
                    </el-col>
                  </el-row>
                  <el-row class="mt-0" type="flex">
                    <el-col v-for="n in 9" :key="n" class="p-4" :class="['bg-danger-light-'+ n]"></el-col>
                  </el-row>
                </div>
              </el-col>

              <el-col :md="12" class="mt-5">
                <div class="rounded-sm overflow-hidden border">
                  <el-row>
                    <el-col :span="24" class="bg-white px-5 py-4">
                      <h5 class="c-black">White Color</h5>
                      <p class="c-black">#FFFFFF</p>
                    </el-col>
                  </el-row>
                  <el-row class="mt-0" type="flex">
                    <el-col v-for="n in 9" :key="n" class="p-4" :class="['bg-white-light-'+ n]"></el-col>
                  </el-row>
                </div>
              </el-col>

              <el-col :md="12" class="mt-5">
                <div class="rounded-sm overflow-hidden">
                  <el-row>
                    <el-col :span="24" class="bg-dark px-5 py-4">
                      <h5 class="c-white">Dark Color</h5>
                      <p class="c-white">#000000</p>
                    </el-col>
                  </el-row>
                  <el-row class="mt-0" type="flex">
                    <el-col v-for="n in 9" :key="n" class="p-4" :class="['bg-dark-light-'+ n]"></el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>

            <el-table :data="brandColors" class="mt-4">
              <el-table-column label="Name" width="150px">
                <template slot-scope="scope">
                  <span>{{scope.row.name | capitalize}}</span>
                </template>
              </el-table-column>
              <el-table-column label="Text Color" min-width="150px">
                <template slot-scope="scope">
                  <code>.c-{{ scope.row.name }}</code>
                  <template v-if="scope.row.name != 'white'">
                    <br />
                    <span v-for="n in 9" :key="n" class="m-2">
                      <code>.c-{{scope.row.name}}-light-{{n}}</code>
                    </span>
                  </template>
                </template>
              </el-table-column>
              <el-table-column label="Background Color" min-width="150px">
                <template slot-scope="scope">
                  <code>.bg-{{ scope.row.name }}</code>
                  <template v-if="scope.row.name != 'white'">
                    <br />
                    <span v-for="n in 9" :key="n" class="m-2">
                      <code>.bg-{{scope.row.name}}-light-{{n}}</code>
                    </span>
                  </template>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Colors",
  components: {},
  data() {
    return {
      brandColors: [
        { name: "primary" },
        { name: "success" },
        { name: "warning" },
        { name: "info" },
        { name: "danger" },
        { name: "white" },
        { name: "dark" },
      ],
    };
  },

  methods: {
  },
};
</script>