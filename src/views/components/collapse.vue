<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Collapse</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Use Collapse to store contents.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >You can expand multiple panels.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Consistency" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-collapse v-model=&#x22;activeNames&#x22; @change=&#x22;handleChange&#x22;&#x3E;
  &#x3C;el-collapse-item title=&#x22;Consistency&#x22; name=&#x22;1&#x22;&#x3E;
    &#x3C;div&#x3E;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Feedback&#x22; name=&#x22;2&#x22;&#x3E;
    &#x3C;div&#x3E;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Visual feedback: reflect current state by updating or rearranging elements of the page.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Efficiency&#x22; name=&#x22;3&#x22;&#x3E;
    &#x3C;div&#x3E;Simplify the process: keep operating process simple and intuitive;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Controllability&#x22; name=&#x22;4&#x22;&#x3E;
    &#x3C;div&#x3E;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
&#x3C;/el-collapse&#x3E;
                </code>
            </pre>
            </div>
          </div>



            <div>
            <h3 class="mt-8x">Accordion</h3>
            <p
              class="mt-2 text-lg"
            >In accordion mode, only one panel can be expanded at once</p>
            <p
              class="mt-2 text-lg"
            >Activate accordion mode using the <code>accordion</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-collapse v-model="activeName2" accordion>
  <el-collapse-item title="Consistency" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-collapse v-model=&#x22;activeName&#x22; accordion&#x3E;
  &#x3C;el-collapse-item title=&#x22;Consistency&#x22; name=&#x22;1&#x22;&#x3E;
    &#x3C;div&#x3E;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Feedback&#x22; name=&#x22;2&#x22;&#x3E;
    &#x3C;div&#x3E;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Visual feedback: reflect current state by updating or rearranging elements of the page.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Efficiency&#x22; name=&#x22;3&#x22;&#x3E;
    &#x3C;div&#x3E;Simplify the process: keep operating process simple and intuitive;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Controllability&#x22; name=&#x22;4&#x22;&#x3E;
    &#x3C;div&#x3E;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
&#x3C;/el-collapse&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom title</h3>
            <p
              class="mt-2 text-lg"
            ><p>Besides using the <code>title</code> attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-collapse accordion>
  <el-collapse-item name="1">
    <template slot="title">
      Consistency<i class="header-icon el-icon-info ml-2"></i>
    </template>
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-collapse accordion&#x3E;
  &#x3C;el-collapse-item name=&#x22;1&#x22;&#x3E;
    &#x3C;template slot=&#x22;title&#x22;&#x3E;
      Consistency&#x3C;i class=&#x22;header-icon el-icon-info ml-2&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;div&#x3E;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Feedback&#x22; name=&#x22;2&#x22;&#x3E;
    &#x3C;div&#x3E;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Visual feedback: reflect current state by updating or rearranging elements of the page.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Efficiency&#x22; name=&#x22;3&#x22;&#x3E;
    &#x3C;div&#x3E;Simplify the process: keep operating process simple and intuitive;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
  &#x3C;el-collapse-item title=&#x22;Controllability&#x22; name=&#x22;4&#x22;&#x3E;
    &#x3C;div&#x3E;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&#x3C;/div&#x3E;
    &#x3C;div&#x3E;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&#x3C;/div&#x3E;
  &#x3C;/el-collapse-item&#x3E;
&#x3C;/el-collapse&#x3E;
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
              <el-table-column label="Attribute" >
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" min-width="100px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues" />
                </template>
              </el-table-column>
              <el-table-column label="Default" >
                <template slot-scope="scope">
                  <span v-html="scope.row.default" />
                </template>
              </el-table-column>
            </el-table>
          </div>


        <div>
            <h3 class="mt-8x">Item Attributes</h3>
            <el-table :data="itemApi" class="mt-2">
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
              <el-table-column label="Type" min-width="100px">
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
              <el-table-column label="Event Name" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.eventname" />
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
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
  name: 'Collapse',
  components: {},
  data() {
    return {
        activeName2: '1',
        activeNames: ['1'],
      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"currently active panel","type":"string (accordion mode) / array (non-accordion mode)","acceptedvalues":"—","default":"—"},{"attribute":"accordion","description":"whether to activate accordion mode","type":"boolean","acceptedvalues":"—","default":"false"}],
      itemApi: [{"attribute":"name","description":"unique identification of the panel","type":"string/number","acceptedvalues":"—","default":"—"},{"attribute":"title","description":"title of the panel","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"disabled","description":"disable the collapse item","type":"boolean","acceptedvalues":"—","default":"—"}],
      eventApi: [{"eventname":"change","description":"triggers when active panels change","parameters":"(activeNames: array (non-accordion mode) / string (accordion mode))"}]
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
    handleChange(val) {
        console.log(val);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
