<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Radio</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Single selection among multiple options.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Radio should not have too many options. Otherwise, use the Select component instead.</p>
            <p
              class="mt-2 text-lg"
            >Creating a radio component is easy, you just need to bind a variable to Radio's <code>v-model</code>. It equals to the value of <code>label</code> of the chosen radio. The type of <code>label</code> is <code>String</code>, <code>Number</code> or <code>Boolean</code>.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-radio v-model="radio" label="1">Option A</el-radio>
  <el-radio v-model="radio" label="2">Option B</el-radio>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-radio v-model=&#x22;radio&#x22; label=&#x22;1&#x22;&#x3E;Option A&#x3C;/el-radio&#x3E;
  &#x3C;el-radio v-model=&#x22;radio&#x22; label=&#x22;2&#x22;&#x3E;Option B&#x3C;/el-radio&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled</h3>
            <p
              class="mt-2 text-lg"
            ><code>disabled</code> attribute is used to disable the radio.</p>
            <p
              class="mt-2 text-lg"
            >You just need to add the <code>disabled</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-radio disabled v-model="radio2" label="disabled">Option A</el-radio>
  <el-radio disabled v-model="radio2" label="selected and disabled">Option B</el-radio>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-radio disabled v-model=&#x22;radio&#x22; label=&#x22;disabled&#x22;&#x3E;Option A&#x3C;/el-radio&#x3E;
  &#x3C;el-radio disabled v-model=&#x22;radio&#x22; label=&#x22;selected and disabled&#x22;&#x3E;Option B&#x3C;/el-radio&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Radio button group</h3>
            <p
              class="mt-2 text-lg"
            >Suitable for choosing from some mutually exclusive options.</p>
            <p
              class="mt-2 text-lg"
            >Combine <code>el-radio-group</code> with <code>el-radio</code> to display a radio group. Bind a variable with <code>v-model</code> of <code>el-radio-group</code> element and set label value in <code>el-radio</code>. It also provides <code>change</code> event with the current value as its parameter.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-radio-group v-model="radio3">
  <el-radio :label="3">Option A</el-radio>
  <el-radio :label="6">Option B</el-radio>
  <el-radio :label="9">Option C</el-radio>
</el-radio-group>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-radio-group v-model=&#x22;radio&#x22;&#x3E;
  &#x3C;el-radio :label=&#x22;3&#x22;&#x3E;Option A&#x3C;/el-radio&#x3E;
  &#x3C;el-radio :label=&#x22;6&#x22;&#x3E;Option B&#x3C;/el-radio&#x3E;
  &#x3C;el-radio :label=&#x22;9&#x22;&#x3E;Option C&#x3C;/el-radio&#x3E;
&#x3C;/el-radio-group&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Button style</h3>
            <p
              class="mt-2 text-lg"
            >Radio with button styles.</p>
            <p
              class="mt-2 text-lg"
            >You just need to change <code>el-radio</code> element into <code>el-radio-button</code> element. We also provide <code>size</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div>
    <el-radio-group v-model="radio11">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio22" size="medium">
      <el-radio-button label="New York" ></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio33" size="small">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington" disabled ></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio44" disabled size="mini">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div&#x3E;
    &#x3C;el-radio-group v-model=&#x22;radio1&#x22;&#x3E;
      &#x3C;el-radio-button label=&#x22;New York&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Washington&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Los Angeles&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Chicago&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
    &#x3C;/el-radio-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-radio-group v-model=&#x22;radio2&#x22; size=&#x22;medium&#x22;&#x3E;
      &#x3C;el-radio-button label=&#x22;New York&#x22; &#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Washington&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Los Angeles&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Chicago&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
    &#x3C;/el-radio-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-radio-group v-model=&#x22;radio3&#x22; size=&#x22;small&#x22;&#x3E;
      &#x3C;el-radio-button label=&#x22;New York&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Washington&#x22; disabled &#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Los Angeles&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Chicago&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
    &#x3C;/el-radio-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-radio-group v-model=&#x22;radio4&#x22; disabled size=&#x22;mini&#x22;&#x3E;
      &#x3C;el-radio-button label=&#x22;New York&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Washington&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Los Angeles&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
      &#x3C;el-radio-button label=&#x22;Chicago&#x22;&#x3E;&#x3C;/el-radio-button&#x3E;
    &#x3C;/el-radio-group&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">With borders</h3>
            <p
              class="mt-2 text-lg"
            >The <code>border</code> attribute adds a border to Radios.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div>
    <el-radio v-model="radio111" label="1" border>Option A</el-radio>
    <el-radio v-model="radio111" label="2" border>Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio v-model="radio222" label="1" border size="medium">Option A</el-radio>
    <el-radio v-model="radio222" label="2" border size="medium">Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio333" size="small">
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border disabled>Option B</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio444" size="mini" disabled>
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border>Option B</el-radio>
    </el-radio-group>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div&#x3E;
    &#x3C;el-radio v-model=&#x22;radio1&#x22; label=&#x22;1&#x22; border&#x3E;Option A&#x3C;/el-radio&#x3E;
    &#x3C;el-radio v-model=&#x22;radio1&#x22; label=&#x22;2&#x22; border&#x3E;Option B&#x3C;/el-radio&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-radio v-model=&#x22;radio2&#x22; label=&#x22;1&#x22; border size=&#x22;medium&#x22;&#x3E;Option A&#x3C;/el-radio&#x3E;
    &#x3C;el-radio v-model=&#x22;radio2&#x22; label=&#x22;2&#x22; border size=&#x22;medium&#x22;&#x3E;Option B&#x3C;/el-radio&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-radio-group v-model=&#x22;radio3&#x22; size=&#x22;small&#x22;&#x3E;
      &#x3C;el-radio label=&#x22;1&#x22; border&#x3E;Option A&#x3C;/el-radio&#x3E;
      &#x3C;el-radio label=&#x22;2&#x22; border disabled&#x3E;Option B&#x3C;/el-radio&#x3E;
    &#x3C;/el-radio-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-radio-group v-model=&#x22;radio4&#x22; size=&#x22;mini&#x22; disabled&#x3E;
      &#x3C;el-radio label=&#x22;1&#x22; border&#x3E;Option A&#x3C;/el-radio&#x3E;
      &#x3C;el-radio label=&#x22;2&#x22; border&#x3E;Option B&#x3C;/el-radio&#x3E;
    &#x3C;/el-radio-group&#x3E;
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
              <el-table-column label="Type" width="200px">
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
            <h3 class="mt-8x">Group API</h3>
            <el-table :data="groupattributeApi" class="mt-2">
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
              <el-table-column label="Type" width="200px">
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
            <h3 class="mt-8x">Group Events</h3>
            <el-table :data="groupeventApi" class="mt-2">
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
            <h3 class="mt-8x">Button API</h3>
            <el-table :data="buttonattributeApi" class="mt-2">
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
              <el-table-column label="Type" width="200px">
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
  name: 'Radio',
  components: {},
  data() {
    return {
        radio111: '1',
        radio222: '1',
        radio333: '1',
        radio444: '1',
        radio11: 'New York',
        radio22: 'New York',
        radio33: 'New York',
        radio44: 'New York',
        radio3: 3,
        radio2: 'selected and disabled',
        radio: '1',
      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"string / number / boolean","acceptedvalues":"—","default":"—"},{"attribute":"label","description":"the value of Radio","type":"string / number / boolean","acceptedvalues":"—","default":"—"},{"attribute":"disabled","description":"whether Radio is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"border","description":"whether to add a border around Radio","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"size","description":"size of the Radio, only works when <code>border</code> is true","type":"string","acceptedvalues":"medium / small / mini","default":"—"},{"attribute":"name","description":"native 'name' attribute","type":"string","acceptedvalues":"—","default":"—"}],
      eventApi: [{"eventname":"change","description":"triggers when the bound value changes","parameters":"the label value of the chosen radio"}],
      groupattributeApi: [{"attribute":"value / v-model","description":"binding value","type":"string / number / boolean","acceptedvalues":"—","default":"—"},{"attribute":"size","description":"the size of radio buttons or bordered radios","type":"string","acceptedvalues":"medium / small / mini","default":"—"},{"attribute":"disabled","description":"whether the nesting radios are disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"text-color","description":"font color when button is active","type":"string","acceptedvalues":"—","default":"#ffffff"},{"attribute":"fill","description":"border and background color when button is active","type":"string","acceptedvalues":"—","default":"#409EFF"}],
      groupeventApi: [{"eventname":"change","description":"triggers when the bound value changes","parameters":"the label value of the chosen radio"}],
      buttonattributeApi: [{"attribute":"label","description":"the value of radio","type":"string / number","acceptedvalues":"—","default":"—"},{"attribute":"disabled","description":"whether radio is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"name","description":"native 'name' attribute","type":"string","acceptedvalues":"—","default":"—"}]
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
