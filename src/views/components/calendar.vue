<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Calendar</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Display date.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic</h3>
            <p
              class="mt-2 text-lg"
            >Set <code>value</code> to specify the currently displayed month. If <code>value</code> is not specified, current month is displayed. <code>value</code> supports two-way binding.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-calendar v-model="value">
</el-calendar>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-calendar v-model=&#x22;value&#x22;&#x3E;
&#x3C;/el-calendar&#x3E;
                </code>
            </pre>
            </div>
          </div>

<div>
            <h3 class="mt-8x">Custom Content</h3>
            <p
              class="mt-2 text-lg"
            >Customize what is displayed in the calendar cell by setting <code>scoped-slot</code> named <code>dateCell</code>. In <code>scoped-slot</code> you can get the date (the date of the current cell), data (including the type, isSelected, day attribute). For details, please refer to the API documentation below.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-calendar>
  <!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax-->
  <template
    slot="dateCell"
    slot-scope="{data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>

                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Range</h3>
            <p
              class="mt-2 text-lg"
            >Set the <code>range</code> attribute to specify the display range of the calendar. Start time must be Monday, end time must be Sunday, and the time span cannot exceed two months.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-calendar :range=&#x22;[&#x27;2019-03-04&#x27;, &#x27;2019-03-24&#x27;]&#x22;&#x3E;
&#x3C;/el-calendar&#x3E;
                </code>
            </pre>
            </div>
          </div>

 

          <div>
            <h3 class="mt-8x">API</h3>
            <p
              class="mt-2 text-lg"
            >Select your desired component from below and see the available props, slots, events and functions.</p>

            <el-table :data="attributeApi" class="mt-2">
              <el-table-column label="Attribute" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues" />
                </template>
              </el-table-column>
              <el-table-column label="Default" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default" />
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Slot</h3>
            <el-table :data="slotApi" class="mt-2">
              <el-table-column label="Attribute" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
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
import Vue from 'vue'
import clipboard from '@/utils/clipboard'
import VueCodeHighlight from 'vue-code-highlight'
Vue.use(VueCodeHighlight) // registers the v-highlight directive
import 'vue-code-highlight/themes/prism-okaidia.css'

export default {
  name: 'Calendar',
  components: {},
  data() {
    return {
        value: new Date(),
      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"Date/string/number","acceptedvalues":"—","default":"—"},{"attribute":"range","description":"time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.","type":"Array","acceptedvalues":"—","default":"—"},{"attribute":"first-day-of-week","description":"fisrt day of week","type":"Number","acceptedvalues":"1 to 7","default":"1"}],
      slotApi: [{"attribute":"date","description":"date the cell represents","type":"Date","acceptedvalues":"—","default":"—"},{"attribute":"data","description":"{ type, isSelected, day}. <code>type</code> indicates which month the date belongs, optional values are prev-month, current-month, next-month; <code>isSelected</code> indicates whether the date is selected; <code>day</code> is the formatted date in the format yyyy-MM-dd","type":"Object","acceptedvalues":"—","default":"—"}],
    }
  },

  methods: {
    randomKey() {
      return new Date() + (Math.random() * 1000).toFixed(0)
    },

    handleState(index) {
      return this.loadingIndexes.indexOf(index) > -1
    },
    handleLoading(index) {
      this.loadingIndexes.push(index)

      setTimeout(() => {
        this.isLoading = false
        this.index = 0

        this.loadingIndexes = this.loadingIndexes.filter((p) => p != index)
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
