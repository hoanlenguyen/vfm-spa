<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Checkbox</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">A group of options for multiple choices.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Checkbox can be used alone to switch between two states.</p>
            <p
              class="mt-2 text-lg"
            >Define <code>v-model</code>(bind variable) in <code>el-checkbox</code>. The default value is a <code>Boolean</code> for single <code>checkbox</code>, and it becomes <code>true</code> when selected. Content inside the <code>el-checkbox</code> tag will become the description following the button of the checkbox.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<!-- `checked` should be true or false -->
  <el-checkbox v-model="checked">Option</el-checkbox>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;!-- &#x60;checked&#x60; should be true or false --&#x3E;
  &#x3C;el-checkbox v-model=&#x22;checked&#x22;&#x3E;Option&#x3C;/el-checkbox&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled State</h3>
            <p
              class="mt-2 text-lg"
            >Disabled state for checkbox.</p>
            <p
              class="mt-2 text-lg"
            >Set the <code>disabled</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-checkbox v-model="checked1" disabled>Option</el-checkbox>
  <el-checkbox v-model="checked2" disabled>Option</el-checkbox>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-checkbox v-model=&#x22;checked1&#x22; disabled&#x3E;Option&#x3C;/el-checkbox&#x3E;
  &#x3C;el-checkbox v-model=&#x22;checked2&#x22; disabled&#x3E;Option&#x3C;/el-checkbox&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Checkbox group</h3>
            <p
              class="mt-2 text-lg"
            >It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.</p>
            <p
              class="mt-2 text-lg"
            ><code>checkbox-group</code> element can manage multiple checkboxes in one group by using <code>v-model</code> which is bound as an <code>Array</code>. Inside the <code>el-checkbox</code> element, <code>label</code> is the value of the checkbox. If no content is nested in that tag, <code>label</code> will be rendered as the description following the button of the checkbox. <code>label</code> also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A"></el-checkbox>
    <el-checkbox label="Option B"></el-checkbox>
    <el-checkbox label="Option C"></el-checkbox>
    <el-checkbox label="disabled" disabled></el-checkbox>
    <el-checkbox label="selected and disabled" disabled></el-checkbox>
  </el-checkbox-group>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-checkbox-group v-model=&#x22;checkList&#x22;&#x3E;
    &#x3C;el-checkbox label=&#x22;Option A&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;el-checkbox label=&#x22;Option B&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;el-checkbox label=&#x22;Option C&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;el-checkbox label=&#x22;disabled&#x22; disabled&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;el-checkbox label=&#x22;selected and disabled&#x22; disabled&#x3E;&#x3C;/el-checkbox&#x3E;
  &#x3C;/el-checkbox-group&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Indeterminate</h3>
            <p
              class="mt-2 text-lg"
            >The <code>min</code> and <code>max</code> properties can help you to limit the number of checked items.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <el-checkbox-group 
    v-model="checkedCities"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-checkbox-group 
    v-model=&#x22;checkedCities&#x22;
    :min=&#x22;1&#x22;
    :max=&#x22;2&#x22;&#x3E;
    &#x3C;el-checkbox v-for=&#x22;city in cities&#x22; :label=&#x22;city&#x22; :key=&#x22;city&#x22;&#x3E;{{city}}&#x3C;/el-checkbox&#x3E;
  &#x3C;/el-checkbox-group&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Button style</h3>
            <p
              class="mt-2 text-lg"
            >Checkbox with button styles.</p>
            <p
              class="mt-2 text-lg"
            >You just need to change <code>el-checkbox</code> element into <code>el-checkbox-button</code> element. We also provide <code>size</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup2" size="medium">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup3" size="small">
      <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div&#x3E;
    &#x3C;el-checkbox-group v-model=&#x22;checkboxGroup1&#x22;&#x3E;
      &#x3C;el-checkbox-button v-for=&#x22;city in cities&#x22; :label=&#x22;city&#x22; :key=&#x22;city&#x22;&#x3E;{{city}}&#x3C;/el-checkbox-button&#x3E;
    &#x3C;/el-checkbox-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-checkbox-group v-model=&#x22;checkboxGroup2&#x22; size=&#x22;medium&#x22;&#x3E;
      &#x3C;el-checkbox-button v-for=&#x22;city in cities&#x22; :label=&#x22;city&#x22; :key=&#x22;city&#x22;&#x3E;{{city}}&#x3C;/el-checkbox-button&#x3E;
    &#x3C;/el-checkbox-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-checkbox-group v-model=&#x22;checkboxGroup3&#x22; size=&#x22;small&#x22;&#x3E;
      &#x3C;el-checkbox-button v-for=&#x22;city in cities&#x22; :label=&#x22;city&#x22; :disabled=&#x22;city === &#x27;Beijing&#x27;&#x22; :key=&#x22;city&#x22;&#x3E;{{city}}&#x3C;/el-checkbox-button&#x3E;
    &#x3C;/el-checkbox-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-checkbox-group v-model=&#x22;checkboxGroup4&#x22; size=&#x22;mini&#x22; disabled&#x3E;
      &#x3C;el-checkbox-button v-for=&#x22;city in cities&#x22; :label=&#x22;city&#x22; :key=&#x22;city&#x22;&#x3E;{{city}}&#x3C;/el-checkbox-button&#x3E;
    &#x3C;/el-checkbox-group&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">With borders</h3>
            <p
              class="mt-2 text-lg"
            >The <code>border</code> attribute adds a border to Checkboxes.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div>
    <el-checkbox v-model="checked11" label="Option1" border></el-checkbox>
    <el-checkbox v-model="checked22" label="Option2" border></el-checkbox>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox v-model="checked33" label="Option1" border size="medium"></el-checkbox>
    <el-checkbox v-model="checked44" label="Option2" border size="medium"></el-checkbox>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup11" size="small">
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border disabled></el-checkbox>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup22" size="mini" disabled>
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border></el-checkbox>
    </el-checkbox-group>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div&#x3E;
    &#x3C;el-checkbox v-model=&#x22;checked1&#x22; label=&#x22;Option1&#x22; border&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;el-checkbox v-model=&#x22;checked2&#x22; label=&#x22;Option2&#x22; border&#x3E;&#x3C;/el-checkbox&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-checkbox v-model=&#x22;checked3&#x22; label=&#x22;Option1&#x22; border size=&#x22;medium&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;el-checkbox v-model=&#x22;checked4&#x22; label=&#x22;Option2&#x22; border size=&#x22;medium&#x22;&#x3E;&#x3C;/el-checkbox&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-checkbox-group v-model=&#x22;checkboxGroup1&#x22; size=&#x22;small&#x22;&#x3E;
      &#x3C;el-checkbox label=&#x22;Option1&#x22; border&#x3E;&#x3C;/el-checkbox&#x3E;
      &#x3C;el-checkbox label=&#x22;Option2&#x22; border disabled&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;/el-checkbox-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div style=&#x22;margin-top: 20px&#x22;&#x3E;
    &#x3C;el-checkbox-group v-model=&#x22;checkboxGroup2&#x22; size=&#x22;mini&#x22; disabled&#x3E;
      &#x3C;el-checkbox label=&#x22;Option1&#x22; border&#x3E;&#x3C;/el-checkbox&#x3E;
      &#x3C;el-checkbox label=&#x22;Option2&#x22; border&#x3E;&#x3C;/el-checkbox&#x3E;
    &#x3C;/el-checkbox-group&#x3E;
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
              <el-table-column label="Options">
                <template slot-scope="scope">
                  <span v-html="scope.row.options" />
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
              <el-table-column label="Options">
                <template slot-scope="scope">
                  <span v-html="scope.row.options" />
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
              <el-table-column label="Options">
                <template slot-scope="scope">
                  <span v-html="scope.row.options" />
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
  name: 'Checkbox',
  components: {},
  data() {
    return {
        checked11: true,
        checked22: false,
        checked33: false,
        checked44: true,
        checkboxGroup11: [],
        checkboxGroup22: [],
        checkboxGroup1: ['Paris'],
        checkboxGroup2: ['Paris'],
        checkboxGroup3: ['Paris'],
        checkboxGroup4: ['Paris'],
        cities: cityOptions,
        checkedCities: ['New York', 'Paris'],
        cities: cityOptions,
        checkList: ['selected and disabled','Option A'],
        checked1: false,
        checked2: true,
        checked: true,
      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"string / number / boolean","options":"—","default":"—"},{"attribute":"label","description":"value of the Checkbox when used inside a <code>checkbox-group</code>","type":"string / number / boolean","options":"—","default":"—"},{"attribute":"true-label","description":"value of the Checkbox if it's checked","type":"string / number","options":"—","default":"—"},{"attribute":"false-label","description":"value of the Checkbox if it's not checked","type":"string / number","options":"—","default":"—"},{"attribute":"disabled","description":"whether the Checkbox is disabled","type":"boolean","options":"—","default":"false"},{"attribute":"border","description":"whether to add a border around Checkbox","type":"boolean","options":"—","default":"false"},{"attribute":"size","description":"size of the Checkbox, only works when <code>border</code> is true","type":"string","options":"medium / small / mini","default":"—"},{"attribute":"name","description":"native 'name' attribute","type":"string","options":"—","default":"—"},{"attribute":"checked","description":"if the Checkbox is checked","type":"boolean","options":"—","default":"false"},{"attribute":"indeterminate","description":"same as <code>indeterminate</code> in native checkbox","type":"boolean","options":"—","default":"false"}],
      eventApi: [{"eventname":"change","description":"triggers when the binding value changes","parameters":"the updated value"}],
      groupattributeApi: [{"attribute":"value / v-model","description":"binding value","type":"array","options":"—","default":"—"},{"attribute":"size","description":"size of checkbox buttons or bordered checkboxes","type":"string","options":"medium / small / mini","default":"—"},{"attribute":"disabled","description":"whether the nesting checkboxes are disabled","type":"boolean","options":"—","default":"false"},{"attribute":"min","description":"minimum number of checkbox checked","type":"number","options":"—","default":"—"},{"attribute":"max","description":"maximum number of checkbox checked","type":"number","options":"—","default":"—"},{"attribute":"text-color","description":"font color when button is active","type":"string","options":"—","default":"#ffffff"},{"attribute":"fill","description":"border and background color when button is active","type":"string","options":"—","default":"#409EFF"}],
      groupeventApi: [{"eventname":"change","description":"triggers when the binding value changes","parameters":"the updated value"}],
      buttonattributeApi: [{"attribute":"label","description":"value of the checkbox when used inside a <code>checkbox-group</code>","type":"string / number / boolean","options":"—","default":"—"},{"attribute":"true-label","description":"value of the checkbox if it's checked","type":"string / number","options":"—","default":"—"},{"attribute":"false-label","description":"value of the checkbox if it's not checked","type":"string / number","options":"—","default":"—"},{"attribute":"disabled","description":"whether the checkbox is disabled","type":"boolean","options":"—","default":"false"},{"attribute":"name","description":"native 'name' attribute","type":"string","options":"—","default":"—"},{"attribute":"checked","description":"if the checkbox is checked","type":"boolean","options":"—","default":"false"}]
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
const cityOptions = ['New York', 'London', 'Paris', 'Cairo'];
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
