<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Date Time Picker</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Select date and time in one picker.</p>
          <div class="tip"><p>DateTimePicker is derived from DatePicker and TimePicker. For a more detailed explanation on pickerOptions and other attributes, you can refer to DatePicker and TimePicker.</p></div>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Date and time</h3>
            <p
              class="mt-2 text-lg"
            >You can select date and time in one picker at the same time by setting <code>type</code> to <code>datetime</code>. The way to use shortcuts is the same as Date Picker.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select date and time"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">With default time</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      default-time="12:00:00">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Default&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value1&#x22;
      type=&#x22;datetime&#x22;
      placeholder=&#x22;Select date and time&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;With shortcuts&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value2&#x22;
      type=&#x22;datetime&#x22;
      placeholder=&#x22;Select date and time&#x22;
      :picker-options=&#x22;pickerOptions&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;With default time&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value3&#x22;
      type=&#x22;datetime&#x22;
      placeholder=&#x22;Select date and time&#x22;
      default-time=&#x22;12:00:00&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Date and time range</h3>
            <p
              class="mt-2 text-lg"
            >You can select date and time range by setting <code>type</code> to <code>datetimerange</code>.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Default</span>
    <el-date-picker
      v-model="value11"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">With shortcuts</span>
    <el-date-picker
      v-model="value22"
      type="datetimerange"
      :picker-options="pickerOptions2"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      align="right">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Default&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value1&#x22;
      type=&#x22;datetimerange&#x22;
      range-separator=&#x22;To&#x22;
      start-placeholder=&#x22;Start date&#x22;
      end-placeholder=&#x22;End date&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;With shortcuts&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value2&#x22;
      type=&#x22;datetimerange&#x22;
      :picker-options=&#x22;pickerOptions&#x22;
      range-separator=&#x22;To&#x22;
      start-placeholder=&#x22;Start date&#x22;
      end-placeholder=&#x22;End date&#x22;
      align=&#x22;right&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Default time value for start date and end date</h3>
            <p
              class="mt-2 text-lg"
            >When picking date range on the date panel with type <code>datetimerange</code>, <code>00:00:00</code> will be used as the default time value for start and end date. We can control it with the <code>default-time</code> attribute. <code>default-time</code> accepts an array of up to two strings. The first item controls time value of the start date and the second item controls time value of the end date.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="my-2">
    <span class="d-inline-block w-25 my-2">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value111"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="value222"
      type="datetimerange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Start date time 12:00:00&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value1&#x22;
      type=&#x22;datetimerange&#x22;
      start-placeholder=&#x22;Start Date&#x22;
      end-placeholder=&#x22;End Date&#x22;
      :default-time=&#x22;[&#x27;12:00:00&#x27;]&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Start date time 12:00:00, end date time 08:00:00&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value2&#x22;
      type=&#x22;datetimerange&#x22;
      align=&#x22;right&#x22;
      start-placeholder=&#x22;Start Date&#x22;
      end-placeholder=&#x22;End Date&#x22;
      :default-time=&#x22;[&#x27;12:00:00&#x27;, &#x27;08:00:00&#x27;]&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
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
            <h3 class="mt-8x">Picker Options</h3>
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
            <h3 class="mt-8x">Shortcuts</h3>
            <el-table :data="shortcutsApi" class="mt-2">
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
  name: 'DateTimePicker',
  components: {},
  data() {
    return {
        value111: '',
        value222: '',

        pickerOptions2: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value11: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value22: '',

        pickerOptions: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',

      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"date (DateTimePicker)/ array (DateTimeRangePicker)","acceptedvalues":"—","default":"—"},{"attribute":"readonly","description":"whether DatePicker is read only","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"disabled","description":"whether DatePicker is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"editable","description":"whether the input is editable","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"clearable","description":"whether to show clear button","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"size","description":"size of Input","type":"string","acceptedvalues":"large/small/mini","default":"—"},{"attribute":"placeholder","description":"placeholder in non-range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"start-placeholder","description":"placeholder for the start date in range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"end-placeholder","description":"placeholder for the end date in range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"time-arrow-control","description":"whether to pick time using arrow buttons","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"type","description":"type of the picker","type":"string","acceptedvalues":"year / month / date / datetime / week / datetimerange / daterange","default":"date"},{"attribute":"format","description":"format of the displayed value in the input box","type":"string","acceptedvalues":"see <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a>","default":"yyyy-MM-dd HH:mm:ss"},{"attribute":"align","description":"alignment","type":"left/center/right","acceptedvalues":"left","default":""},{"attribute":"popper-class","description":"custom class name for DateTimePicker's dropdown","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"picker-options","description":"additional options, check the table below","type":"object","acceptedvalues":"—","default":"{}"},{"attribute":"range-separator","description":"range separator","type":"string","acceptedvalues":"-","default":"'-'"},{"attribute":"default-value","description":"optional, default date of the calendar","type":"Date","acceptedvalues":"anything accepted by <code>new Date()</code>","default":"—"},{"attribute":"default-time","description":"the default time value after picking a date","type":"non-range: string / range: string[]","acceptedvalues":"non-range: a string like <code>12:00:00</code>, range: array of two strings, and the first item is for the start date and second for the end date. <code>00:00:00</code> will be used if not specified","default":"—"},{"attribute":"value-format","description":"optional, format of binding value. If not specified, the binding value will be a Date object","type":"string","acceptedvalues":"see <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a>","default":"—"},{"attribute":"name","description":"same as <code>name</code> in native input","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"unlink-panels","description":"unllink two date-panels in range-picker","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"prefix-icon","description":"Custom prefix icon class","type":"string","acceptedvalues":"—","default":"el-icon-date"},{"attribute":"clear-icon","description":"Custom clear icon class","type":"string","acceptedvalues":"—","default":"el-icon-circle-close"}],
      pickerApi: [{"attribute":"shortcuts","description":"a { text, onClick } object array to set shortcut options, check the table below","type":"object[]","acceptedvalues":"—","default":"—"},{"attribute":"disabledDate","description":"a function determining if a date is disabled with that date as its parameter. Should return a Boolean","type":"function","acceptedvalues":"—","default":"—"},{"attribute":"cellClassName","description":"set custom className","type":"Function(Date)","acceptedvalues":"—","default":"—"},{"attribute":"firstDayOfWeek","description":"first day of week","type":"Number","acceptedvalues":"1 to 7","default":"7"}],
      shortcutsApi: [{"attribute":"text","description":"title of the shortcut","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"onClick","description":"callback function, triggers when the shortcut is clicked, with the <code>vm</code> as its parameter. You can change the picker value by emitting the <code>pick</code> event. Example: <code>vm.$emit('pick', new Date())</code>","type":"function","acceptedvalues":"—","default":"—"}],
      slotApi: [{ 'name': '—', 'description': 'description' }, { 'name': 'title', 'description': 'content of the Alert title' }],
      eventApi: [{"eventname":"change","description":"triggers when user confirms the value","parameters":"component's binding value"},{"eventname":"blur","description":"triggers when Input blurs","parameters":"component instance"},{"eventname":"focus","description":"triggers when Input focuses","parameters":"component instance"}],
      methodsApi: [{"method":"focus","description":"focus the Input component","parameters":"—"}]
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
