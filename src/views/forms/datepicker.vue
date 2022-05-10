<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Date Picker</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Use Date Picker for date input.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Enter Date</h3>
            <p
              class="mt-2 text-lg"
            >Basic date picker measured by 'day'.</p>
            <p class="mt-2 text-lg">
              The measurement is determined by the <code>type</code> attribute. You can enable quick options by creating a <code>picker-options</code> object with <code>shortcuts</code> property. The disabled date is set by <code>disabledDate</code>, which is a function.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="my-2">
    <span class="d-inline-block w-25 my-2">Default</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Picker with quick options</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html">
                <code>
&#x3C;div class=&#x22;my-2&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Default&#x3C;/span&#x3E;
  &#x3C;el-date-picker
    v-model=&#x22;value1&#x22;
    type=&#x22;date&#x22;
    placeholder=&#x22;Pick a day&#x22;&#x3E;
  &#x3C;/el-date-picker&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;my-2&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Picker with quick options&#x3C;/span&#x3E;
  &#x3C;el-date-picker
    v-model=&#x22;value2&#x22;
    type=&#x22;date&#x22;
    placeholder=&#x22;Pick a day&#x22;
    :picker-options=&#x22;pickerOptions&#x22;&#x3E;
  &#x3C;/el-date-picker&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Other measurements</h3>
            <p
              class="mt-2 text-lg"
            >You can choose week, month, year or multiple dates by extending the standard date picker component.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="container">
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Week</span>
    <el-date-picker
      v-model="valuea"
      type="week"
      format="Week WW"
      placeholder="Pick a week">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Month</span>
    <el-date-picker
      v-model="valueb"
      type="month"
      placeholder="Pick a month">
    </el-date-picker>
  </div>
</div>
<div class="container">
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Year</span>
    <el-date-picker
      v-model="valuec"
      type="year"
      placeholder="Pick a year">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Dates</span>
    <el-date-picker
      type="dates"
      v-model="valued"
      placeholder="Pick one or more dates">
    </el-date-picker>
  </div>
</div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html">
                <code>
&#x3C;div class=&#x22;container&#x22;&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Week&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value1&#x22;
      type=&#x22;week&#x22;
      format=&#x22;Week WW&#x22;
      placeholder=&#x22;Pick a week&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Month&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value2&#x22;
      type=&#x22;month&#x22;
      placeholder=&#x22;Pick a month&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;container&#x22;&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Year&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value3&#x22;
      type=&#x22;year&#x22;
      placeholder=&#x22;Pick a year&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Dates&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      type=&#x22;dates&#x22;
      v-model=&#x22;value4&#x22;
      placeholder=&#x22;Pick one or more dates&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Date Range</h3>
            <p
              class="mt-2 text-lg"
            >Picking a date range is supported.</p>
            <p class="mt-2 text-lg">
              When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the <code>unlink-panels</code> attribute.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="my-2">
    <span class="d-inline-block w-25 my-2">Default</span>
    <el-date-picker
    class="w-50"
      v-model="valuex"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">With quick options</span>
    <el-date-picker
      v-model="valuey"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :picker-options="pickerOptions2">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html">
                <code>
&#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Default&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value1&#x22;
      type=&#x22;daterange&#x22;
      range-separator=&#x22;To&#x22;
      start-placeholder=&#x22;Start date&#x22;
      end-placeholder=&#x22;End date&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;With quick options&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value2&#x22;
      type=&#x22;daterange&#x22;
      align=&#x22;right&#x22;
      unlink-panels
      range-separator=&#x22;To&#x22;
      start-placeholder=&#x22;Start date&#x22;
      end-placeholder=&#x22;End date&#x22;
      :picker-options=&#x22;pickerOptions&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Month Range</h3>
            <p
              class="mt-2 text-lg"
            >Picking a month range is supported.</p>
            <p class="mt-2 text-lg">
              When in range mode, the left and right panels are linked by default. If you want the two panels to switch current years independently, you can use the <code>unlink-panels</code> attribute.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="my-2">
    <span class="d-inline-block w-25 my-2">Default</span>
    <el-date-picker
      v-model="value11"
      type="monthrange"
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">With quick options</span>
    <el-date-picker
      v-model="value22"
      type="monthrange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month"
      :picker-options="pickerOptions3">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html">
                <code>
&#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Default&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value1&#x22;
      type=&#x22;monthrange&#x22;
      range-separator=&#x22;To&#x22;
      start-placeholder=&#x22;Start month&#x22;
      end-placeholder=&#x22;End month&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;With quick options&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value2&#x22;
      type=&#x22;monthrange&#x22;
      align=&#x22;right&#x22;
      unlink-panels
      range-separator=&#x22;To&#x22;
      start-placeholder=&#x22;Start month&#x22;
      end-placeholder=&#x22;End month&#x22;
      :picker-options=&#x22;pickerOptions&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Default Value</h3>
            <p class="mt-2 text-lg">
              If user hasn't picked a date, shows today's calendar by default. You can use <code>default-value</code> to set another date. Its value should be parsable by <code>new Date()</code>.
            </p>
            <p class="mt-2 text-lg">
              If type is <code>daterange</code>, <code>default-value</code> sets the left side calendar.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
 <div class="my-2">
    <span class="d-inline-block w-25 my-2">date</span>
    <el-date-picker
      v-model="value111"
      type="date"
      placeholder="Pick a date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">daterange</span>
    <el-date-picker
      v-model="value222"
      type="daterange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html">
                <code>
 &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;date&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value1&#x22;
      type=&#x22;date&#x22;
      placeholder=&#x22;Pick a date&#x22;
      default-value=&#x22;2010-10-01&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;daterange&#x3C;/span&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value2&#x22;
      type=&#x22;daterange&#x22;
      align=&#x22;right&#x22;
      start-placeholder=&#x22;Start Date&#x22;
      end-placeholder=&#x22;End Date&#x22;
      default-value=&#x22;2010-10-01&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Date Formats</h3>
            <p
              class="mt-2 text-lg"
            >Use <code>format</code> to control displayed text's format in the input box. Use <code>value-format</code> to control binding value's format.</p>
            <p class="mt-2 text-lg">
              By default, the component accepts and emits a <code>Date</code> object. Below are supported format strings, using UTC 2017-01-02 03:04:05 as an example:
            </p>
            <div class="mt-3"><p>Pay attention to capitalization</p></div>
            <el-table :data="formatApi" class="mt-2">
              <el-table-column label="Format" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.format" />
                </template>
              </el-table-column>
              <el-table-column label="Meaning" width="210px">
                <template slot-scope="scope">
                  <span v-html="scope.row.meaning" />
                </template>
              </el-table-column>
              <el-table-column label="Note" >
                <template slot-scope="scope">
                  <span v-html="scope.row.note" />
                </template>
              </el-table-column>
              <el-table-column label="Example" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.example" />
                </template>
              </el-table-column>
            </el-table>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="my-2">
    <span class="d-inline-block w-25 my-2">Emits Date object</span>
    <div class="d-inline-block w-25 my-2">Value: {{ value1111 }}</div>
    <el-date-picker
      v-model="value1111"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Use value-format</span>
    <div class="d-inline-block w-25 my-2">Value: {{ value2222 }}</div>
    <el-date-picker
      v-model="value2222"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
  <div class="my-2">
    <span class="d-inline-block w-25 my-2">Timestamp</span>
    <div class="d-inline-block w-25 my-2">Value：{{ value3333 }}</div>
    <el-date-picker
      v-model="value3333"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="timestamp">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html">
                <code>
&#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Emits Date object&#x3C;/span&#x3E;
    &#x3C;div class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Value: {{ value1 }}&#x3C;/div&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value1&#x22;
      type=&#x22;date&#x22;
      placeholder=&#x22;Pick a Date&#x22;
      format=&#x22;yyyy/MM/dd&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Use value-format&#x3C;/span&#x3E;
    &#x3C;div class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Value: {{ value2 }}&#x3C;/div&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value2&#x22;
      type=&#x22;date&#x22;
      placeholder=&#x22;Pick a Date&#x22;
      format=&#x22;yyyy/MM/dd&#x22;
      value-format=&#x22;yyyy-MM-dd&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Timestamp&#x3C;/span&#x3E;
    &#x3C;div class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;Value&#xFF1A;{{ value3 }}&#x3C;/div&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value3&#x22;
      type=&#x22;date&#x22;
      placeholder=&#x22;Pick a Date&#x22;
      format=&#x22;yyyy/MM/dd&#x22;
      value-format=&#x22;timestamp&#x22;&#x3E;
    &#x3C;/el-date-picker&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Default time for start date and end date</h3>
            <p
              class="mt-2 text-lg"
            >When picking a date range, you can assign the time part for start date and end date.</p>
            <p
              class="mt-2 text-lg"
            >By default, the time part of start date and end date are both <code>00:00:00</code>. Setting <code>default-time</code> can change their time respectively. It accepts an array of up to two strings with the format of <code>12:00:00</code>. The first string sets the time for the start date, and the second for the end date.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="my-2">
    <p>Component value：{{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html">
                <code>
&#x3C;div class=&#x22;my-2&#x22;&#x3E;
    &#x3C;p&#x3E;Component value&#xFF1A;{{ value }}&#x3C;/p&#x3E;
    &#x3C;el-date-picker
      v-model=&#x22;value&#x22;
      type=&#x22;daterange&#x22;
      start-placeholder=&#x22;Start date&#x22;
      end-placeholder=&#x22;End date&#x22;
      :default-time=&#x22;[&#x27;00:00:00&#x27;, &#x27;23:59:59&#x27;]&#x22;&#x3E;
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
              <el-table-column label="Description" min-width="200px">
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
              <el-table-column label="Description" min-width="200px">
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
              <el-table-column label="Default" width="120px">
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
              <el-table-column label="Description" min-width="200px">
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
              <el-table-column label="Default" width="120px">
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
              <el-table-column label="Description" width="450px">
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
              <el-table-column label="Description" width="450px">
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
            <h3 class="mt-8x">Slot</h3>
            <el-table :data="slotApi" class="mt-2">
              <el-table-column label="Name" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.name" />
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
  name: 'DatePicker',
  components: {},
  data() {
    return {
        value: '',

        value1111: '',
        value2222: '',
        value3333: '',

        value111: '',
        value222: '',

        pickerOptions3: {
          shortcuts: [{
            text: 'This month',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: 'This year',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 6 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value11: '',
        value22: '',

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
        valuex: '',
        valuey: '',

        valuea: '',
        valueb: '',
        valuec: '',
        valued: '',

        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"date(DatePicker) / array(DateRangePicker)","acceptedvalues":"—","default":"—"},{"attribute":"readonly","description":"whether DatePicker is read only","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"disabled","description":"whether DatePicker is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"size","description":"size of Input","type":"string","acceptedvalues":"large/small/mini","default":"—"},{"attribute":"editable","description":"whether the input is editable","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"clearable","description":"whether to show clear button","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"placeholder","description":"placeholder in non-range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"start-placeholder","description":"placeholder for the start date in range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"end-placeholder","description":"placeholder for the end date in range mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"type","description":"type of the picker","type":"string","acceptedvalues":"year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange","default":"date"},{"attribute":"format","description":"format of the displayed value in the input box","type":"string","acceptedvalues":"see <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a>","default":"yyyy-MM-dd"},{"attribute":"align","description":"alignment","type":"left/center/right","acceptedvalues":"left","default":""},{"attribute":"popper-class","description":"custom class name for DatePicker's dropdown","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"picker-options","description":"additional options, check the table below","type":"object","acceptedvalues":"—","default":"{}"},{"attribute":"range-separator","description":"range separator","type":"string","acceptedvalues":"—","default":"'-'"},{"attribute":"default-value","description":"optional, default date of the calendar","type":"Date","acceptedvalues":"anything accepted by <code>new Date()</code>","default":"—"},{"attribute":"default-time","description":"optional, the time value to use when selecting date range","type":"string[]","acceptedvalues":"Array with length 2, each item is a string like <code>12:00:00</code>. The first item for the start date and then second item for the end date","default":"—"},{"attribute":"value-format","description":"optional, format of binding value. If not specified, the binding value will be a Date object","type":"string","acceptedvalues":"see <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a>","default":"—"},{"attribute":"name","description":"same as <code>name</code> in native input","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"unlink-panels","description":"unlink two date-panels in range-picker","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"prefix-icon","description":"Custom prefix icon class","type":"string","acceptedvalues":"—","default":"el-icon-date"},{"attribute":"clear-icon","description":"Custom clear icon class","type":"string","acceptedvalues":"—","default":"el-icon-circle-close"},{"attribute":"validate-event","description":"whether to trigger form validation","type":"boolean","acceptedvalues":"-","default":"true"}],
      pickerApi: [{"attribute":"shortcuts","description":"a { text, onClick } object array to set shortcut options, check the table below","type":"object[]","acceptedvalues":"—","default":"—"},{"attribute":"disabledDate","description":"a function determining if a date is disabled with that date as its parameter. Should return a Boolean","type":"function","acceptedvalues":"—","default":"—"},{"attribute":"cellClassName","description":"set custom className","type":"Function(Date)","acceptedvalues":"—","default":"—"},{"attribute":"firstDayOfWeek","description":"first day of week","type":"Number","acceptedvalues":"1 to 7","default":"7"},{"attribute":"onPick","description":"a callback that triggers when the selected date is changed. Only for <code>daterange</code> and <code>datetimerange</code>.","type":"Function({ maxDate, minDate })","acceptedvalues":"-","default":"-"}],
      shortcutsApi: [{"attribute":"text","description":"title of the shortcut","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"onClick","description":"callback function, triggers when the shortcut is clicked, with the <code>vm</code> as its parameter. You can change the picker value by emitting the <code>pick</code> event. Example: <code>vm.$emit('pick', new Date())</code>","type":"function","acceptedvalues":"—","default":"—"}],
      slotApi: [{"name":"range-separator","description":"custom range separator content"}],
      eventApi: [{"eventname":"change","description":"triggers when user confirms the value","parameters":"component's binding value"},{"eventname":"blur","description":"triggers when Input blurs","parameters":"component instance"},{"eventname":"focus","description":"triggers when Input focuses","parameters":"component instance"}],
      methodsApi: [{"method":"focus","description":"focus the Input component","parameters":"—"}],
      formatApi: [{"format":"<code>yyyy</code>","meaning":"year","note":"","example":"2017"},{"format":"<code>M</code>","meaning":"month","note":"no leading 0","example":"1"},{"format":"<code>MM</code>","meaning":"month","note":"","example":"01"},{"format":"<code>MMM</code>","meaning":"month","note":"","example":"Jan"},{"format":"<code>MMMM</code>","meaning":"month","note":"","example":"January"},{"format":"<code>W</code>","meaning":"week","note":"only for week picker's <code>format</code>; no leading 0","example":"1"},{"format":"<code>WW</code>","meaning":"week","note":"only for week picker's <code>format</code>","example":"01"},{"format":"<code>d</code>","meaning":"day","note":"no leading 0","example":"2"},{"format":"<code>dd</code>","meaning":"day","note":"","example":"02"},{"format":"<code>H</code>","meaning":"hour","note":"24-hour clock; no leading 0","example":"3"},{"format":"<code>HH</code>","meaning":"hour","note":"24-hour clock","example":"03"},{"format":"<code>h</code>","meaning":"hour","note":"12-hour clock; must be used with <code>A</code> or <code>a</code>; no leading 0","example":"3"},{"format":"<code>hh</code>","meaning":"hour","note":"12-hour clock; must be used with <code>A</code> or <code>a</code>","example":"03"},{"format":"<code>m</code>","meaning":"minute","note":"no leading 0","example":"4"},{"format":"<code>mm</code>","meaning":"minute","note":"","example":"04"},{"format":"<code>s</code>","meaning":"second","note":"no leading 0","example":"5"},{"format":"<code>ss</code>","meaning":"second","note":"","example":"05"},{"format":"<code>A</code>","meaning":"AM/PM","note":"only for <code>format</code>, uppercased","example":"AM"},{"format":"<code>a</code>","meaning":"am/pm","note":"only for <code>format</code>, lowercased","example":"am"},{"format":"<code>timestamp</code>","meaning":"JS timestamp","note":"only for <code>value-format</code>; binding value will be a <code>number</code>","example":"1483326245000"},{"format":"<code>[MM]</code>","meaning":"No escape characters","note":"To escape characters, wrap them in square brackets (e.g. [A] [MM])","example":"MM"}]
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
