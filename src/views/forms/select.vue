<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Select</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">When there are plenty of options, use a drop-down menu to display and select desired ones.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            ><code>v-model</code> is the value of <code>el-option</code> that is currently selected.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-select v-model=&#x22;value&#x22; placeholder=&#x22;Select&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in options&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled option</h3>
            <p
              class="mt-2 text-lg"
            >Set the value of <code>disabled</code> in <code>el-option</code> to <code>true</code> to disable this option.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-select v-model="value2" placeholder="Select">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-select v-model=&#x22;value&#x22; placeholder=&#x22;Select&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in options&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;
      :disabled=&#x22;item.disabled&#x22;&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>



          <div>
            <h3 class="mt-8x">Disabled select</h3>
            <p
              class="mt-2 text-lg"
            >Disable the whole component.</p>
            <p
              class="mt-2 text-lg"
            >Set <code>disabled</code> of <code>el-select</code> to make it disabled.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-select v-model="value" disabled placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-select v-model=&#x22;value&#x22; disabled placeholder=&#x22;Select&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in options&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Clearable single select</h3>
            <p
              class="mt-2 text-lg"
            >You can clear Select using a clear icon.</p>
            <p
              class="mt-2 text-lg"
            >Set <code>clearable</code> attribute for <code>el-select</code> and a clear icon will appear. Note that <code>clearable</code> is only for single select.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-select v-model="value" clearable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-select v-model=&#x22;value&#x22; clearable placeholder=&#x22;Select&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in options&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Basic multiple select</h3>
            <p
              class="mt-2 text-lg"
            >Multiple select uses tags to display selected options.</p>
            <p
              class="mt-2 text-lg"
            >Set <code>multiple</code> attribute for <code>el-select</code> to enable multiple mode. In this case, the value of <code>v-model</code> will be an array of selected options. By default the selected options will be displayed as Tags. You can collapse them to a text by using <code>collapse-tags</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-select v-model="value1" multiple placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  
  <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-select v-model=&#x22;value1&#x22; multiple placeholder=&#x22;Select&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in options&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
  
  &#x3C;el-select
    v-model=&#x22;value2&#x22;
    multiple
    collapse-tags
    style=&#x22;margin-left: 20px;&#x22;
    placeholder=&#x22;Select&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in options&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom template</h3>
            <p
              class="mt-2 text-lg"
            >You can customize HTML templates for options.</p>
            <p
              class="mt-2 text-lg"
            >Insert customized HTML templates into the slot of <code>el-option</code>.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-select v-model=&#x22;value&#x22; placeholder=&#x22;Select&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in cities&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;&#x3E;
      &#x3C;span style=&#x22;float: left&#x22;&#x3E;{{ item.label }}&#x3C;/span&#x3E;
      &#x3C;span style=&#x22;float: right; color: #8492a6; font-size: 13px&#x22;&#x3E;{{ item.value }}&#x3C;/span&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Grouping</h3>
            <p
              class="mt-2 text-lg"
            >Display options in groups.</p>
            <p
              class="mt-2 text-lg"
            >Use <code>el-option-group</code> to group the options, and its <code>label</code> attribute stands for the name of the group.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-select v-model="value" placeholder="Select">
    <el-option-group
      v-for="group in options3"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-select v-model=&#x22;value&#x22; placeholder=&#x22;Select&#x22;&#x3E;
    &#x3C;el-option-group
      v-for=&#x22;group in options&#x22;
      :key=&#x22;group.label&#x22;
      :label=&#x22;group.label&#x22;&#x3E;
      &#x3C;el-option
        v-for=&#x22;item in group.options&#x22;
        :key=&#x22;item.value&#x22;
        :label=&#x22;item.label&#x22;
        :value=&#x22;item.value&#x22;&#x3E;
      &#x3C;/el-option&#x3E;
    &#x3C;/el-option-group&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Option filtering</h3>
            <p
              class="mt-2 text-lg"
            >You can filter options for your desired ones.</p>
            <p
              class="mt-2 text-lg"
            >Set the value of <code>filterable</code> and <code>remote</code> with <code>true</code> to enable remote search, and you should pass the <code>remote-method</code>. <code>remote-method</code> is a <code>Function</code> that gets called when the input value changes, and its parameter is the current input value. Note that if <code>el-option</code> is rendered with the <code>v-for</code> directive, you should add the <code>key</code> attribute for <code>el-option</code>. Its value needs to be unique, such as <code>item.value</code> in the following example.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-select
    v-model="value4"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="Please enter a keyword"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-select
    v-model=&#x22;value&#x22;
    multiple
    filterable
    remote
    reserve-keyword
    placeholder=&#x22;Please enter a keyword&#x22;
    :remote-method=&#x22;remoteMethod&#x22;
    :loading=&#x22;loading&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in options&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Create new items</h3>
            <p
              class="mt-2 text-lg"
            >Create and select new items that are not included in select options.</p>
            <p
              class="mt-2 text-lg"
            >By using the <code>allow-create</code> attribute, users can create new items by typing in the input box. Note that for <code>allow-create</code> to work, <code>filterable</code> must be <code>true</code>. This example also demonstrates <code>default-first-option</code>. When this attribute is set to <code>true</code>, you can select the first option in the current option list by hitting enter without having to navigate with mouse or arrow keys.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-select
    v-model="value5"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="Choose tags for your article">
    <el-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-select
    v-model=&#x22;value&#x22;
    multiple
    filterable
    allow-create
    default-first-option
    placeholder=&#x22;Choose tags for your article&#x22;&#x3E;
    &#x3C;el-option
      v-for=&#x22;item in options&#x22;
      :key=&#x22;item.value&#x22;
      :label=&#x22;item.label&#x22;
      :value=&#x22;item.value&#x22;&#x3E;
    &#x3C;/el-option&#x3E;
  &#x3C;/el-select&#x3E;
                </code>
            </pre>
            </div>
          </div>

<div class="tip"><p>If the binding value of Select is an object, make sure to assign <code>value-key</code> as its unique identity key name.</p></div>   

          <div>
            <h3 class="mt-8x">API</h3>
            <el-table :data="attributeApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="350px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="150px">
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
              <el-table-column label="Description" width="500px">
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

          <div>
            <h3 class="mt-8x">Option Group API</h3>
            <el-table :data="groupattributeApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="350px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="150px">
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
            <h3 class="mt-8x">Option API</h3>
            <el-table :data="optionattributeApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="350px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="150px">
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
            <el-table :data="methodApi" class="mt-2">
              <el-table-column label="Method" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="500px">
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
  name: 'Select',
  components: {},
  data() {
    return {
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value5: [],

        options4: [],
        value4: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"],

        options3: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        
        cities: [{
          value: 'Beijing',
          label: 'Beijing'
        }, {
          value: 'Shanghai',
          label: 'Shanghai'
        }, {
          value: 'Nanjing',
          label: 'Nanjing'
        }, {
          value: 'Chengdu',
          label: 'Chengdu'
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen'
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }],

        value1: [],
        value2: [],

        options2: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value2: '',

        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: '',
      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"boolean / string / number","acceptedvalues":"—","default":"—"},{"attribute":"multiple","description":"whether multiple-select is activated","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"disabled","description":"whether Select is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"value-key","description":"unique identity key name for value, required when value is an object","type":"string","acceptedvalues":"—","default":"value"},{"attribute":"size","description":"size of Input","type":"string","acceptedvalues":"large/small/mini","default":"—"},{"attribute":"clearable","description":"whether select can be cleared","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"collapse-tags","description":"whether to collapse tags to a text when multiple selecting","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"multiple-limit","description":"maximum number of options user can select when <code>multiple</code> is <code>true</code>. No limit when set to 0","type":"number","acceptedvalues":"—","default":"0"},{"attribute":"name","description":"the name attribute of select input","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"autocomplete","description":"the autocomplete attribute of select input","type":"string","acceptedvalues":"—","default":"off"},{"attribute":"auto-complete","description":"@DEPRECATED in next major version","type":"string","acceptedvalues":"—","default":"off"},{"attribute":"placeholder","description":"placeholder","type":"string","acceptedvalues":"—","default":"Select"},{"attribute":"filterable","description":"whether Select is filterable","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"allow-create","description":"whether creating new items is allowed. To use this, <code>filterable</code> must be true","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"filter-method","description":"custom filter method","type":"function","acceptedvalues":"—","default":"—"},{"attribute":"remote","description":"whether options are loaded from server","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"remote-method","description":"custom remote search method","type":"function","acceptedvalues":"—","default":"—"},{"attribute":"loading","description":"whether Select is loading data from server","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"loading-text","description":"displayed text while loading data from server","type":"string","acceptedvalues":"—","default":"Loading"},{"attribute":"no-match-text","description":"displayed text when no data matches the filtering query, you can also use slot <code>empty</code>","type":"string","acceptedvalues":"—","default":"No matching data"},{"attribute":"no-data-text","description":"displayed text when there is no options, you can also use slot <code>empty</code>","type":"string","acceptedvalues":"—","default":"No data"},{"attribute":"popper-class","description":"custom class name for Select's dropdown","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"reserve-keyword","description":"when <code>multiple</code> and <code>filter</code> is true, whether to reserve current keyword after selecting an option","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"default-first-option","description":"select first matching option on enter key. Use with <code>filterable</code> or <code>remote</code>","type":"boolean","acceptedvalues":"-","default":"false"},{"attribute":"popper-append-to-body","description":"whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false","type":"boolean","acceptedvalues":"-","default":"true"},{"attribute":"automatic-dropdown","description":"for non-filterable Select, this prop decides if the option menu pops up when the input is focused","type":"boolean","acceptedvalues":"-","default":"false"}],
      eventApi: [{"eventname":"change","description":"triggers when the selected value changes","parameters":"current selected value"},{"eventname":"visible-change","description":"triggers when the dropdown appears/disappears","parameters":"true when it appears, and false otherwise"},{"eventname":"remove-tag","description":"triggers when a tag is removed in multiple mode","parameters":"removed tag value"},{"eventname":"clear","description":"triggers when the clear icon is clicked in a clearable Select","parameters":"—"},{"eventname":"blur","description":"triggers when Input blurs","parameters":"(event: Event)"},{"eventname":"focus","description":"triggers when Input focuses","parameters":"(event: Event)"}],
      slotApi: [{"name":"—","description":"Option component list"},{"name":"prefix","description":"content as Select prefix"},{"name":"empty","description":"content when there is no options"}],
      groupattributeApi: [{"attribute":"label","description":"name of the group","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"disabled","description":"whether to disable all options in this group","type":"boolean","acceptedvalues":"—","default":"false"}],
      optionattributeApi: [{"attribute":"value","description":"value of option","type":"string/number/object","acceptedvalues":"—","default":"—"},{"attribute":"label","description":"label of option, same as <code>value</code> if omitted","type":"string/number","acceptedvalues":"—","default":"—"},{"attribute":"disabled","description":"whether option is disabled","type":"boolean","acceptedvalues":"—","default":"false"}],
      methodApi: [{"method":"focus","description":"focus the Input component","parameters":"-"},{"method":"blur","description":"blur the Input component, and hide the dropdown","parameters":"-"}]
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
    },
    remoteMethod(query) {
        let me = this;
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            me.loading = false;
            me.options4 = me.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
  },
  mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    }
}
</script>
