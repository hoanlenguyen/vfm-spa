<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Input Number</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Input numerical values with a customizable range.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Bind a variable to <code>v-model</code> in <code>&lt;el-input-number&gt;</code> element and you are set.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input-number v-model=&#x22;num&#x22; @change=&#x22;handleChange&#x22; :min=&#x22;1&#x22; :max=&#x22;10&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled</h3>
            <p
              class="mt-2 text-lg"
            >The <code>disabled</code> attribute accepts a <code>boolean</code>, and if the value is <code>true</code>, the component is disabled. If you just need to control the value within a range, you can add <code>min</code> attribute to set the minimum value and <code>max</code> to set the maximum value. By default, the minimum value is <code>0</code>.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-input-number v-model="num" :disabled="true"></el-input-number>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input-number v-model=&#x22;num&#x22; :disabled=&#x22;true&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Steps</h3>
            <p
              class="mt-2 text-lg"
            >Allows you to define incremental steps.</p>
            <p
              class="mt-2 text-lg"
            >Add <code>step</code> attribute to set the step.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input-number v-model="num2" :step="2"></el-input-number>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input-number v-model=&#x22;num&#x22; :step=&#x22;2&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Step strictly</h3>
            <p
              class="mt-2 text-lg"
            >The <code>step-strictly</code> attribute accepts a <code>boolean</code>. if this attribute is <code>true</code>, input value can only be multiple of step.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input-number v-model="num3" :step="2" step-strictly></el-input-number>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input-number v-model=&#x22;num&#x22; :step=&#x22;2&#x22; step-strictly&#x3E;&#x3C;/el-input-number&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Precision</h3>
            <p
              class="mt-2 text-lg"
            >Add <code>precision</code> attribute to set the precision of input value.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input-number v-model=&#x22;num&#x22; :precision=&#x22;2&#x22; :step=&#x22;0.1&#x22; :max=&#x22;10&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
                </code>
            </pre>
            <div class="tip"><p>The value of <code>precision</code> must be a non negative integer and should not be less than the decimal places of <code>step</code>.</p></div>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Size</h3>
            <p
              class="mt-2 text-lg"
            >Use attribute <code>size</code> to set additional sizes with <code>medium</code>, <code>small</code> or <code>mini</code>.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input-number v-model="num11" class="m-2"></el-input-number>
    <el-input-number size="medium" v-model="num22" class="m-2"></el-input-number>
    <el-input-number size="small" v-model="num33" class="m-2"></el-input-number>
    <el-input-number size="mini" v-model="num44" class="m-2"></el-input-number>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input-number v-model=&#x22;num1&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
    &#x3C;el-input-number size=&#x22;medium&#x22; v-model=&#x22;num2&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
    &#x3C;el-input-number size=&#x22;small&#x22; v-model=&#x22;num3&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
    &#x3C;el-input-number size=&#x22;mini&#x22; v-model=&#x22;num4&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Controls Position</h3>
            <p
              class="mt-2 text-lg"
            >Set <code>controls-position</code> to decide the position of control buttons.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input-number v-model=&#x22;num&#x22; controls-position=&#x22;right&#x22; @change=&#x22;handleChange&#x22; :min=&#x22;1&#x22; :max=&#x22;10&#x22;&#x3E;&#x3C;/el-input-number&#x3E;
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

          <div>
            <h3 class="mt-8x">Methods</h3>
            <el-table :data="methodApi" class="mt-2">
              <el-table-column label="Event Name" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method" />
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
  name: 'InputNumber',
  components: {},
  data() {
    return {
        num11: 1,
        num22: 1,
        num33: 1,
        num44: 1,
        num3: 2,
        num2: 5,
        num: 1,
      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"number","acceptedvalues":"—","default":"0"},{"attribute":"min","description":"the minimum allowed value","type":"number","acceptedvalues":"—","default":"<code>-Infinity</code>"},{"attribute":"max","description":"the maximum allowed value","type":"number","acceptedvalues":"—","default":"<code>Infinity</code>"},{"attribute":"step","description":"incremental step","type":"number","acceptedvalues":"—","default":"1"},{"attribute":"step-strictly","description":"whether input value can only be multiple of step","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"precision","description":"precision of input value","type":"number","acceptedvalues":"—","default":"—"},{"attribute":"size","description":"size of the component","type":"string","acceptedvalues":"large/small","default":"—"},{"attribute":"disabled","description":"whether the component is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"controls","description":"whether to enable the control buttons","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"controls-position","description":"position of the control buttons","type":"string","acceptedvalues":"right","default":"-"},{"attribute":"name","description":"same as <code>name</code> in native input","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"label","description":"label text","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"placeholder","description":"placeholder in input","type":"string","acceptedvalues":"-","default":"-"}],
      eventApi: [{"eventname":"change","description":"triggers when the value changes","parameters":"currentValue, oldValue"},{"eventname":"blur","description":"triggers when Input blurs","parameters":"(event: Event)"},{"eventname":"focus","description":"triggers when Input focuses","parameters":"(event: Event)"}],
      methodApi: [{"method":"focus","description":"focus the Input component","parameters":"-"},{"method":"select","description":"select the text in input element","parameters":"—"}]
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
    handleChange(value) {
        console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
