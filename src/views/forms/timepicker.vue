<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Time Picker</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Use Time Picker for time input.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Fixed time picker</h3>
            <p
              class="mt-2 text-lg"
            >Provide a list of fixed time for users to choose.</p>
            <p class="mt-2 text-lg">
              Use <code>el-time-select</code> label, then assign start time, end time and time step with <code>start</code>, <code>end</code> and <code>step</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="Select time">
</el-time-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-time-select
  v-model=&#x22;value&#x22;
  :picker-options=&#x22;{
    start: &#x27;08:30&#x27;,
    step: &#x27;00:15&#x27;,
    end: &#x27;18:30&#x27;
  }&#x22;
  placeholder=&#x22;Select time&#x22;&#x3E;
&#x3C;/el-time-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Arbitrary time picker</h3>
            <p class="mt-2 text-lg">
              Can pick an arbitrary time.</p>
            <p
              class="mt-2 text-lg"
            >Use <code>el-time-picker</code> label, and you can limit the time range by specifying <code>selectableRange</code>. By default, you can scroll the mouse wheel to pick time, alternatively you can use the control arrows when the <code>arrow-control</code> attribute is set.</p>
            <p class="mt-2 text-lg">
              Set <code>effect</code> to change theme, default is <code>light</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
  <el-time-picker
  class="ml-3"
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-time-picker
    v-model=&#x22;value1&#x22;
    :picker-options=&#x22;{
      selectableRange: &#x27;18:30:00 - 20:30:00&#x27;
    }&#x22;
    placeholder=&#x22;Arbitrary time&#x22;&#x3E;
  &#x3C;/el-time-picker&#x3E;
  &#x3C;el-time-picker
    arrow-control
    v-model=&#x22;value2&#x22;
    :picker-options=&#x22;{
      selectableRange: &#x27;18:30:00 - 20:30:00&#x27;
    }&#x22;
    placeholder=&#x22;Arbitrary time&#x22;&#x3E;
  &#x3C;/el-time-picker&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Fixed time range.</h3>
            <p
              class="mt-2 text-lg"
            >If start time is picked at first, then the end time will change accordingly.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-time-select
    placeholder="Start time"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    class="ml-3"
    placeholder="End time"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
 &#x3C;el-time-select
    placeholder=&#x22;Start time&#x22;
    v-model=&#x22;startTime&#x22;
    :picker-options=&#x22;{
      start: &#x27;08:30&#x27;,
      step: &#x27;00:15&#x27;,
      end: &#x27;18:30&#x27;
    }&#x22;&#x3E;
  &#x3C;/el-time-select&#x3E;
  &#x3C;el-time-select
    placeholder=&#x22;End time&#x22;
    v-model=&#x22;endTime&#x22;
    :picker-options=&#x22;{
      start: &#x27;08:30&#x27;,
      step: &#x27;00:15&#x27;,
      end: &#x27;18:30&#x27;,
      minTime: startTime
    }&#x22;&#x3E;
  &#x3C;/el-time-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Arbitrary time range</h3>
            <p
              class="mt-2 text-lg"
            >Can pick an arbitrary time range.</p>
            <p class="mt-2 text-lg">
              We can pick a time range by adding an <code>is-range</code> attribute. Also, <code>arrow-control</code> is supported in range mode.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-time-picker
    is-range
    v-model="value11"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
  <el-time-picker
    class="ml-3"
    is-range
    arrow-control
    v-model="value22"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-time-picker
    is-range
    v-model=&#x22;value1&#x22;
    range-separator=&#x22;To&#x22;
    start-placeholder=&#x22;Start time&#x22;
    end-placeholder=&#x22;End time&#x22;&#x3E;
  &#x3C;/el-time-picker&#x3E;
  &#x3C;el-time-picker
    is-range
    arrow-control
    v-model=&#x22;value2&#x22;
    range-separator=&#x22;To&#x22;
    start-placeholder=&#x22;Start time&#x22;
    end-placeholder=&#x22;End time&#x22;&#x3E;
  &#x3C;/el-time-picker&#x3E;
                </code>
            </pre>
            </div>
          </div>


          <div>
            <h3 class="mt-8x">API</h3>
            <el-table :data="attributeApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="300px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="180px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues" />
                </template>
              </el-table-column>
              <el-table-column label="Default" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default" />
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Time Select Options</h3>
            <el-table :data="selectApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="300px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="180px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues" />
                </template>
              </el-table-column>
              <el-table-column label="Default" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default" />
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Time Picker Options</h3>
            <el-table :data="pickerApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="300px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="180px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues" />
                </template>
              </el-table-column>
              <el-table-column label="Default" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default" />
                </template>
              </el-table-column>
            </el-table>
          </div>


          <div>
            <h3 class="mt-8x">Methods</h3>
            <el-table :data="methodsApi" class="mt-2">
              <el-table-column label="Method" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="480px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Parameters">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameters" />
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Events</h3>
            <el-table :data="eventApi" class="mt-2">
              <el-table-column label="Event Name" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.eventname" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="480px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Parameters">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameters" />
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
  name: 'Time Picker',
  components: {},
  data() {
    return {
        value11: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value22: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],

        startTime: '',
        endTime: '',

        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40),

        value: '',

      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"date(TimePicker) / string(TimeSelect)","acceptedvalues":"-","default":"-"},{"attribute":"readonly","description":"whether TimePicker is read only","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"disabled","description":"whether TimePicker is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"editable","description":"whether the input is editable","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"clearable","description":"whether to show clear button","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"size","description":"size of Input","type":"string","acceptedvalues":"medium / small / mini","default":"—"},{"attribute":"placeholder","description":"placeholder in non-range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"start-placeholder","description":"placeholder for the start time in range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"end-placeholder","description":"placeholder for the end time in range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"is-range","description":"whether to pick a time range, only works with <code>&lt;el-time-picker&gt;</code>","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"arrow-control","description":"whether to pick time using arrow buttons, only works with <code>&lt;el-time-picker&gt;</code>","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"align","description":"alignment","type":"left / center / right","acceptedvalues":"left","default":""},{"attribute":"popper-class","description":"custom class name for TimePicker's dropdown","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"picker-options","description":"additional options, check the table below","type":"object","acceptedvalues":"—","default":"{}"},{"attribute":"range-separator","description":"range separator","type":"string","acceptedvalues":"-","default":"'-'"},{"attribute":"default-value","description":"optional, default date of the calendar","type":"Date for TimePicker, string for TimeSelect","acceptedvalues":"anything accepted by <code>new Date()</code> for TimePicker, selectable value for TimeSelect","default":"—"},{"attribute":"value-format","description":"optional, only for TimePicker, format of binding value. If not specified, the binding value will be a Date object","type":"string","acceptedvalues":"see <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a>","default":"—"},{"attribute":"name","description":"same as <code>name</code> in native input","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"prefix-icon","description":"Custom prefix icon class","type":"string","acceptedvalues":"—","default":"el-icon-time"},{"attribute":"clear-icon","description":"Custom clear icon class","type":"string","acceptedvalues":"—","default":"el-icon-circle-close"}],
      selectApi: [{"attribute":"start","description":"start time","type":"string","acceptedvalues":"—","default":"09:00"},{"attribute":"end","description":"end time","type":"string","acceptedvalues":"—","default":"18:00"},{"attribute":"step","description":"time step","type":"string","acceptedvalues":"—","default":"00:30"},{"attribute":"minTime","description":"minimum time, any time before this time will be disabled","type":"string","acceptedvalues":"—","default":"00:00"},{"attribute":"maxTime","description":"maximum time, any time after this time will be disabled","type":"string","acceptedvalues":"—","default":"—"}],
      pickerApi: [{"attribute":"selectableRange","description":"available time range, e.g.<code>'18:30:00 - 20:30:00'</code>or<code>['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</code>","type":"string / array","acceptedvalues":"—","default":"—"},{"attribute":"format","description":"format of the picker","type":"string","acceptedvalues":"hour <code>HH</code>, minute <code>mm</code>, second <code>ss</code>, AM/PM <code>A</code>","default":"HH:mm:ss"}],
      methodsApi: [{"method":"focus","description":"focus the Input component","parameters":"-"}],
      eventApi: [{"eventname":"change","description":"triggers when user confirms the value","parameters":"component's binding value"},{"eventname":"blur","description":"triggers when Input blurs","parameters":"component instance"},{"eventname":"focus","description":"triggers when Input focuses","parameters":"component instance"}]
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
