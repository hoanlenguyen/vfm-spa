<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Slider</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Drag the slider within a fixed range.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >The current value is displayed when the slider is being dragged.</p>
            <p
              class="mt-2 text-lg"
            >Customize the initial value of the slider by setting the binding value.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div class="block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Customized initial value</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Hide Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Format Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Disabled</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Default value&#x3C;/span&#x3E;
    &#x3C;el-slider v-model=&#x22;value1&#x22;&#x3E;&#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Customized initial value&#x3C;/span&#x3E;
    &#x3C;el-slider v-model=&#x22;value2&#x22;&#x3E;&#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Hide Tooltip&#x3C;/span&#x3E;
    &#x3C;el-slider v-model=&#x22;value3&#x22; :show-tooltip=&#x22;false&#x22;&#x3E;&#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Format Tooltip&#x3C;/span&#x3E;
    &#x3C;el-slider v-model=&#x22;value4&#x22; :format-tooltip=&#x22;formatTooltip&#x22;&#x3E;&#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Disabled&#x3C;/span&#x3E;
    &#x3C;el-slider v-model=&#x22;value5&#x22; disabled&#x3E;&#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Discrete values</h3>
            <p
              class="mt-2 text-lg"
            >The options can be discrete.</p>
            <p
              class="mt-2 text-lg"
            >Set step size with the <code>step</code> attribute. You can display breakpoints by setting the <code>show-stops</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div class="block">
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider
      v-model="value11"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value22"
      :step="10"
      show-stops>
    </el-slider>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Breakpoints not displayed&#x3C;/span&#x3E;
    &#x3C;el-slider
      v-model=&#x22;value1&#x22;
      :step=&#x22;10&#x22;&#x3E;
    &#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Breakpoints displayed&#x3C;/span&#x3E;
    &#x3C;el-slider
      v-model=&#x22;value2&#x22;
      :step=&#x22;10&#x22;
      show-stops&#x3E;
    &#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Slider with input box</h3>
            <p
              class="mt-2 text-lg"
            >Set value via a input box.</p>
            <p
              class="mt-2 text-lg"
            >Set the <code>show-input</code> attribute to display an input box on the right.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;el-slider
      v-model=&#x22;value&#x22;
      show-input&#x3E;
    &#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Range selection</h3>
            <p
              class="mt-2 text-lg"
            >Selecting a range of values is supported.</p>
            <p
              class="mt-2 text-lg"
            >Setting the <code>range</code> attribute activates range mode, where the binding value is an array made up of two boundary values.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div class="block">
    <el-slider
      v-model="value6"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;el-slider
      v-model=&#x22;value&#x22;
      range
      show-stops
      :max=&#x22;10&#x22;&#x3E;
    &#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Vertical mode</h3>
            <p
              class="mt-2 text-lg"
            >Setting the <code>vertical</code> attribute to <code>true</code> enables vertical mode. In vertical mode, the <code>height</code> attribute is required.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;el-slider
      v-model=&#x22;value&#x22;
      vertical
      height=&#x22;200px&#x22;&#x3E;
    &#x3C;/el-slider&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

           <div>
            <h3 class="mt-8x">Show marks</h3>
            <p
              class="mt-2 text-lg"
            >Setting this <code>marks</code> attribute can show mark on slider.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div class="block">
    <el-slider
      v-model="value7"
      range
      :marks="marks">
    </el-slider>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div class=&#x22;block&#x22;&#x3E;
    &#x3C;el-slider
      v-model=&#x22;value&#x22;
      range
      :marks=&#x22;marks&#x22;&#x3E;
    &#x3C;/el-slider&#x3E;
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
              <el-table-column label="Description" width="350px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="170px">
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
              <el-table-column label="Description" width="520px">
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
  name: 'Slider',
  components: {},
  data() {
    return {
        value7: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        },
        value6: [4, 8],
        value: 0,
        value11: 0,
        value22: 0,
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"number","acceptedvalues":"—","default":"0"},{"attribute":"min","description":"minimum value","type":"number","acceptedvalues":"—","default":"0"},{"attribute":"max","description":"maximum value","type":"number","acceptedvalues":"—","default":"100"},{"attribute":"disabled","description":"whether Slider is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"step","description":"step size","type":"number","acceptedvalues":"—","default":"1"},{"attribute":"show-input","description":"whether to display an input box, works when <code>range</code> is false","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"show-input-controls","description":"whether to display control buttons when <code>show-input</code> is true","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"input-size","description":"size of the input box","type":"string","acceptedvalues":"large / medium / small / mini","default":"small"},{"attribute":"show-stops","description":"whether to display breakpoints","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"show-tooltip","description":"whether to display tooltip value","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"format-tooltip","description":"format to display tooltip value","type":"function(value)","acceptedvalues":"—","default":"—"},{"attribute":"range","description":"whether to select a range","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"vertical","description":"vertical mode","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"height","description":"Slider height, required in vertical mode","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"label","description":"label for screen reader","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"debounce","description":"debounce delay when typing, in milliseconds, works when <code>show-input</code> is true","type":"number","acceptedvalues":"—","default":"300"},{"attribute":"tooltip-class","description":"custom class name for the tooltip","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"marks","description":"marks， type of key must be <code>number</code> and must in closed interval <code>[min, max]</code>, each mark can custom style","type":"object","acceptedvalues":"—","default":"—"}],
      eventApi: [{"eventname":"change","description":"triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)","parameters":"value after changing"},{"eventname":"input","description":"triggers when the data changes (It'll be emitted in real time during sliding)","parameters":"value after changing"}]
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
    formatTooltip(val) {
        return val / 100;
    }
  }
}
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
