<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Cascader</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">If the options have a clear hierarchical structure, Cascader can be used to view and select them.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >There are two ways to expand child option items.</p>
            <p class="mt-2 text-lg">
              Assigning the <code>options</code> attribute to an array of options renders a Cascader. The <code>props.expandTrigger</code> attribute defines how child options are expanded.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="d-block mb-5">
  <span class="d-inline-block w-30">Child options expand when clicked (default)</span>
  <el-cascader
    v-model="value1"
    :options="options1"
    @change="handleChange1"></el-cascader>
</div>
<div class="d-block mb-5">
  <span class="d-inline-block w-30">Child options expand when hovered</span>
  <el-cascader
    v-model="value1"
    :options="options1"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange1"></el-cascader>
</div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-30&#x22;&#x3E;Child options expand when clicked (default)&#x3C;/span&#x3E;
  &#x3C;el-cascader
    v-model=&#x22;value&#x22;
    :options=&#x22;options&#x22;
    @change=&#x22;handleChange&#x22;&#x3E;&#x3C;/el-cascader&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-30&#x22;&#x3E;Child options expand when hovered&#x3C;/span&#x3E;
  &#x3C;el-cascader
    v-model=&#x22;value&#x22;
    :options=&#x22;options&#x22;
    :props=&#x22;{ expandTrigger: &#x27;hover&#x27; }&#x22;
    @change=&#x22;handleChange&#x22;&#x3E;&#x3C;/el-cascader&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled option</h3>
            <p
              class="mt-2 text-lg"
            >Disable an option by setting a disabled field in the option object.</p>
            <p class="mt-2 text-lg">
              In this example, the first item in <code>options</code> array has a <code>disabled: true</code> field, so it is disabled. By default, Cascader checks the <code>disabled</code> field in each option object; if you are using another field name to indicate whether an option is disabled, you can assign it in the <code>props.disabled</code> attribute (see the API table below for details). And of course, field name <code>value</code>, <code>label</code> and <code>children</code> can also be customized in the same way.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-cascader :options="options2"></el-cascader>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-cascader :options=&#x22;options&#x22;&#x3E;&#x3C;/el-cascader&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Clearable</h3>
            <p
              class="mt-2 text-lg"
            ><p>Set <code>clearable</code> attribute for <code>el-cascader</code> and a clear icon will appear when selected and hovered</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-cascader :options="options1" clearable></el-cascader>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-cascader :options=&#x22;options&#x22; clearable&#x3E;&#x3C;/el-cascader&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Display only the last level</h3>
            <p
              class="mt-2 text-lg"
            >The input can display only the last level instead of all levels.</p>
            <p class="mt-2 text-lg">
              The <code>show-all-levels</code> attribute defines if all levels are displayed. If it is <code>false</code>, only the last level is displayed.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-cascader :options="options1" :show-all-levels="false"></el-cascader>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-cascader :options=&#x22;options&#x22; :show-all-levels=&#x22;false&#x22;&#x3E;&#x3C;/el-cascader&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Multiple Selection</h3>
            <p class="mt-2 text-lg">
              Set <code>props.multiple = true</code> to use multiple selection.
            </p>
            <p class="mt-2 text-lg">
              When using multiple selection, all selected tags will display by default, You can set <code>collapse-tags = true</code> to fold selected tags.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="d-block mb-5">
  <span class="d-inline-block w-30">Display all tags (default)</span>
  <el-cascader
    :options="options3"
    :props="props"
    clearable></el-cascader>
</div>
<div class="d-block mb-5">
  <span class="d-inline-block w-30">Collapse tags</span>
  <el-cascader
    :options="options3"
    :props="props"
    collapse-tags
    clearable></el-cascader>
</div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-30&#x22;&#x3E;Display all tags (default)&#x3C;/span&#x3E;
  &#x3C;el-cascader
    :options=&#x22;options&#x22;
    :props=&#x22;props&#x22;
    clearable&#x3E;&#x3C;/el-cascader&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-30&#x22;&#x3E;Collapse tags&#x3C;/span&#x3E;
  &#x3C;el-cascader
    :options=&#x22;options&#x22;
    :props=&#x22;props&#x22;
    collapse-tags
    clearable&#x3E;&#x3C;/el-cascader&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Select any level of options</h3>
            <p
              class="mt-2 text-lg"
            >In single selection, only the leaf nodes can be checked, and in multiple selection, check parent nodes will lead to leaf nodes be checked eventually. When enable this feature, it can make parent and child nodes unlinked and you can select any level of options.</p>
            <p class="mt-2 text-lg">
              Set <code>props.checkStrictly = true</code> to make checked state of a node not affects its parent nodes and child nodes, and then you can select any level of options.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="d-block mb-5">
  <span class="d-inline-block w-30">Select any level of options (Single selection)</span>
  <el-cascader
    :options="options1"
    :props="{ checkStrictly: true }"
    clearable></el-cascader>
</div>
<div class="d-block mb-5">
  <span class="d-inline-block w-30">Select any level of options (Multiple selection)</span>
  <el-cascader
    :options="options1"
    :props="{ multiple: true, checkStrictly: true }"
    clearable></el-cascader>
</div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-30&#x22;&#x3E;Select any level of options (Single selection)&#x3C;/span&#x3E;
  &#x3C;el-cascader
    :options=&#x22;options&#x22;
    :props=&#x22;{ checkStrictly: true }&#x22;
    clearable&#x3E;&#x3C;/el-cascader&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-30&#x22;&#x3E;Select any level of options (Multiple selection)&#x3C;/span&#x3E;
  &#x3C;el-cascader
    :options=&#x22;options&#x22;
    :props=&#x22;{ multiple: true, checkStrictly: true }&#x22;
    clearable&#x3E;&#x3C;/el-cascader&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Dynamic loading</h3>
            <p
              class="mt-2 text-lg"
            >Dynamic load its child nodes when checked a node.</p>
            <p
              class="mt-2 text-lg"
            >Set <code>lazy = true</code> to use dynamic loading, and you have to specify how to load the data source by <code>lazyload</code>. There are two parameters of <code>lazyload</code>,the first parameter <code>node</code> is the node currently clicked, and the <code>resolve</code> is a callback that indicate loading is finished which must invoke. To display the status of node more accurately, you can add a <code>leaf</code> field (can be modified by <code>props.leaf</code>) to indicate whether it is a leaf node. Otherwise, it will be inferred by if has any child nodes.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-cascader :props="props2"></el-cascader>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-cascader :props=&#x22;props&#x22;&#x3E;&#x3C;/el-cascader&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Filterable</h3>
            <p
              class="mt-2 text-lg"
            >Search and select options with a keyword.</p>
            <p
              class="mt-2 text-lg"
            >Adding <code>filterable</code> to <code>el-cascader</code> enables filtering. Cascader will match nodes whose label or parent's label (according to <code>show-all-levels</code>) includes input keyword. Of course, you can customize search logic by <code>filter-method</code> which accepts a function, the first parameter is <code>node</code>, the second is <code>keyword</code>, and need return a boolean value indicating whether it hits.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="d-block mb-5">
  <span class="d-inline-block w-30">Filterable (Single selection)</span>
  <el-cascader
    placeholder="Try searchingL Guide"
    :options="options1"
    filterable></el-cascader>
</div>
<div class="d-block mb-5">
  <span class="d-inline-block w-30">Filterable (Multiple selection)</span>
  <el-cascader
    placeholder="Try searchingL Guide"
    :options="options1"
    :props="{ multiple: true }"
    filterable></el-cascader>
</div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-30&#x22;&#x3E;Filterable (Single selection)&#x3C;/span&#x3E;
  &#x3C;el-cascader
    placeholder=&#x22;Try searchingL Guide&#x22;
    :options=&#x22;options&#x22;
    filterable&#x3E;&#x3C;/el-cascader&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-30&#x22;&#x3E;Filterable (Multiple selection)&#x3C;/span&#x3E;
  &#x3C;el-cascader
    placeholder=&#x22;Try searchingL Guide&#x22;
    :options=&#x22;options&#x22;
    :props=&#x22;{ multiple: true }&#x22;
    filterable&#x3E;&#x3C;/el-cascader&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom option content</h3>
            <p
              class="mt-2 text-lg"
            >You can customize the content of cascader node.</p>
            <p
              class="mt-2 text-lg"
            >You can customize the content of cascader node by <code>scoped slot</code>. You'll have access to <code>node</code> and <code>data</code> in the scope,  standing for the Node object and node data of the current node respectively。</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-cascader :options="options1">
  <template slot-scope="{ node, data }">
    <span>{{ data.label }}</span>
    <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
  </template>
</el-cascader>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-cascader :options=&#x22;options&#x22;&#x3E;
  &#x3C;template slot-scope=&#x22;{ node, data }&#x22;&#x3E;
    &#x3C;span&#x3E;{{ data.label }}&#x3C;/span&#x3E;
    &#x3C;span v-if=&#x22;!node.isLeaf&#x22;&#x3E; ({{ data.children.length }}) &#x3C;/span&#x3E;
  &#x3C;/template&#x3E;
&#x3C;/el-cascader&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Cascader panel</h3>
            <p
              class="mt-2 text-lg"
            ><code>CascaderPanel</code> is the core component of <code>Cascader</code> which has various of features such as single selection, multiple selection, dynamic loading and so on.</p>
            <p
              class="mt-2 text-lg"
            >Just like <code>el-cascader</code>, you can set alternative options by <code>options</code>, and enable other features by <code>props</code>, see the API form below for details.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-cascader-panel :options="options1"></el-cascader-panel>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-cascader-panel :options=&#x22;options&#x22;&#x3E;&#x3C;/el-cascader-panel&#x3E;
                </code>
            </pre>
            </div>
          </div>


          <div>
            <h3 class="mt-8x">API</h3>
            <el-table :data="attributeApi" class="mt-2">
              <el-table-column label="Attribute" width="190px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="380px">
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
              <el-table-column label="Name" width="190px">
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
            <h3 class="mt-8x">Methods</h3>
            <el-table :data="methodApi" class="mt-2">
              <el-table-column label="Method" width="190px">
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

          <div>
            <h3 class="mt-8x">Events</h3>
            <el-table :data="eventApi" class="mt-2">
              <el-table-column label="Event Name" width="190px">
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
            <h3 class="mt-8x">Panel API</h3>
            <el-table :data="panelattributeApi" class="mt-2">
              <el-table-column label="Attribute" width="190px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="380px">
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
            <h3 class="mt-8x">Panel Slot</h3>
            <el-table :data="panelslotApi" class="mt-2">
              <el-table-column label="Name" width="190px">
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
            <h3 class="mt-8x">Panel Methods</h3>
            <el-table :data="panelmethodApi" class="mt-2">
              <el-table-column label="Method" width="190px">
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

          <div>
            <h3 class="mt-8x">Panel Events</h3>
            <el-table :data="paneleventApi" class="mt-2">
              <el-table-column label="Event Name" width="190px">
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
            <h3 class="mt-8x">Props</h3>
            <el-table :data="propsApi" class="mt-2">
              <el-table-column label="Attribute" width="190px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="380px">
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
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
let id = 0;

import Vue from 'vue'
import clipboard from '@/utils/clipboard'
import VueCodeHighlight from 'vue-code-highlight'
Vue.use(VueCodeHighlight) // registers the v-highlight directive
import 'vue-code-highlight/themes/prism-okaidia.css'

export default {
  name: 'Cascader',
  components: {},
  data() {
    return {
        props2: {
          lazy: true,
          lazyLoad (node, resolve) {
            const { level } = node;
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 })
                .map(item => ({
                  value: ++id,
                  label: `Option - ${id}`,
                  leaf: level >= 2
                }));
              // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
              resolve(nodes);
            }, 1000);
          }
        },

        props: { multiple: true },
        options3: [{
          value: 1,
          label: 'Asia',
          children: [{
            value: 2,
            label: 'China',
            children: [
              { value: 3, label: 'Beijing' },
              { value: 4, label: 'Shanghai' },
              { value: 5, label: 'Hangzhou' }
            ]
          }, {
            value: 6,
            label: 'Japan',
            children: [
              { value: 7, label: 'Tokyo' },
              { value: 8, label: 'Osaka' },
              { value: 9, label: 'Kyoto' }
            ]
          }, {
            value: 10,
            label: 'Korea',
            children: [
              { value: 11, label: 'Seoul' },
              { value: 12, label: 'Busan' },
              { value: 13, label: 'Taegu' }
            ]
          }]
        }, {
          value: 14,
          label: 'Europe',
          children: [{
            value: 15,
            label: 'France',
            children: [
              { value: 16, label: 'Paris' },
              { value: 17, label: 'Marseille' },
              { value: 18, label: 'Lyon' }
            ]
          }, {
            value: 19,
            label: 'UK',
            children: [
              { value: 20, label: 'London' },
              { value: 21, label: 'Birmingham' },
              { value: 22, label: 'Manchester' }
            ]
          }]
        }, {
          value: 23,
          label: 'North America',
          children: [{
            value: 24,
            label: 'US',
            children: [
              { value: 25, label: 'New York' },
              { value: 26, label: 'Los Angeles' },
              { value: 27, label: 'Washington' }
            ]
          }, {
            value: 28,
            label: 'Canada',
            children: [
              { value: 29, label: 'Toronto' },
              { value: 30, label: 'Montreal' },
              { value: 31, label: 'Ottawa' }
            ]
          }]
        }],

        options2: [{
          value: 'guide',
          label: 'Guide',
          disabled: true,
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }],

        value1: [],
        options1: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }],

      loadingIndexes: [10],
      attributeApi: [{"attribute":"value / v-model","description":"binding value","type":"-","acceptedvalues":"—","default":"—"},{"attribute":"options","description":"data of the options，the key of <code>value</code> and <code>label</code> can be customize by <code>Props</code>.","type":"array","acceptedvalues":"—","default":"—"},{"attribute":"props","description":"configuration options, see the following table.","type":"object","acceptedvalues":"—","default":"—"},{"attribute":"size","description":"size of input","type":"string","acceptedvalues":"medium / small / mini","default":"—"},{"attribute":"placeholder","description":"placeholder of input","type":"string","acceptedvalues":"—","default":"Select"},{"attribute":"disabled","description":"whether Cascader is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"clearable","description":"whether selected value can be cleared","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"show-all-levels","description":"whether to display all levels of the selected value in the input","type":"boolean","acceptedvalues":"—","default":"true"},{"attribute":"collapse-tags","description":"whether to collapse tags in multiple selection mode","type":"boolean","acceptedvalues":"-","default":"false"},{"attribute":"separator","description":"option label separator","type":"string","acceptedvalues":"—","default":"' / '"},{"attribute":"filterable","description":"whether the options can be searched","type":"boolean","acceptedvalues":"—","default":"—"},{"attribute":"filter-method","description":"customize search logic, the first parameter is <code>node</code>, the second is <code>keyword</code>, and need return a boolean value indicating whether it hits.","type":"function(node, keyword)","acceptedvalues":"-","default":"-"},{"attribute":"debounce","description":"debounce delay when typing filter keyword, in milliseconds","type":"number","acceptedvalues":"—","default":"300"},{"attribute":"before-filter","description":"hook function before filtering with the value to be filtered as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, filtering will be aborted","type":"function(value)","acceptedvalues":"—","default":"—"},{"attribute":"popper-class","description":"custom class name for Cascader's dropdown","type":"string","acceptedvalues":"—","default":"—"}],
      slotApi: [{"name":"-","description":"the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively."},{"name":"empty","description":"content when there is no matched options."}],
      methodApi: [{"method":"getCheckedNodes","description":"get an array of currently selected node","parameters":"(leafOnly) whether only return the leaf checked nodes, default is <code>false</code>"}],
      eventApi: [{"eventname":"change","description":"triggers when the binding value changes","parameters":"value"},{"eventname":"expand-change","description":"triggers when expand option changes","parameters":"an array of the expanding node's parent nodes"},{"eventname":"blur","description":"triggers when Cascader blurs","parameters":"(event: Event)"},{"eventname":"focus","description":"triggers when Cascader focuses","parameters":"(event: Event)"},{"eventname":"visible-change","description":"triggers when the dropdown appears/disappears","parameters":"true when it appears, and false otherwise"},{"eventname":"remove-tag","description":"triggers when remove tag in multiple selection mode","parameters":"the value of the tag which is removed"}],
      panelattributeApi: [{"attribute":"value / v-model","description":"binding value","type":"-","acceptedvalues":"—","default":"—"},{"attribute":"options","description":"data of the options，the key of <code>value</code> and <code>label</code> can be customize by <code>Props</code>.","type":"array","acceptedvalues":"—","default":"—"},{"attribute":"props","description":"configuration options, see the following table.","type":"object","acceptedvalues":"—","default":"—"}],
      panelslotApi: [{"name":"-","description":"the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively."}],
      panelmethodApi: [{"method":"getCheckedNodes","description":"get an array of currently selected node","parameters":"(leafOnly) whether only return the leaf checked nodes, default is <code>false</code>"},{"method":"clearCheckedNodes","description":"clear checked nodes","parameters":"-"}],
      paneleventApi: [{"eventname":"change","description":"triggers when the binding value changes","parameters":"value"},{"eventname":"expand-change","description":"triggers when expand option changes","parameters":"an array of the expanding node's parent nodes"}],
      propsApi: [{"attribute":"expandTrigger","description":"trigger mode of expanding options","type":"string","acceptedvalues":"click / hover","default":"'click'"},{"attribute":"multiple","description":"whether multiple selection is enabled","type":"boolean","acceptedvalues":"-","default":"false"},{"attribute":"checkStrictly","description":"whether checked state of a node not affects its parent and child nodes","type":"boolean","acceptedvalues":"-","default":"false"},{"attribute":"emitPath","description":"when checked nodes change, whether to emit an array of node's path, if false, only emit the value of node.","type":"boolean","acceptedvalues":"-","default":"true"},{"attribute":"lazy","description":"whether to dynamic load child nodes, use with <code>lazyload</code> attribute","type":"boolean","acceptedvalues":"-","default":"false"},{"attribute":"lazyLoad","description":"method for loading child nodes data, only works when <code>lazy</code> is true","type":"function(node, resolve)","acceptedvalues":"-","default":"-"},{"attribute":"value","description":"specify which key of node object is used as the node's value","type":"string","acceptedvalues":"—","default":"'value'"},{"attribute":"label","description":"specify which key of node object is used as the node's label","type":"string","acceptedvalues":"—","default":"'label'"},{"attribute":"children","description":"specify which key of node object is used as the node's children","type":"string","acceptedvalues":"—","default":"'children'"},{"attribute":"disabled","description":"specify which key of node object is used as the node's disabled","type":"string","acceptedvalues":"—","default":"'disabled'"},{"attribute":"leaf","description":"specify which key of node object is used as the node's leaf field","type":"string","acceptedvalues":"—","default":"'leaf'"}]
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
    handleChange1(value) {
        console.log(value);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
