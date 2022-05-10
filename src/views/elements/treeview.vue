<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Treeview</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Display a set of data with hierarchies.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Basic tree structure.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tree :data="data1" :props="defaultProps1" @node-click="handleNodeClick1"></el-tree>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tree :data=&#x22;data&#x22; :props=&#x22;defaultProps&#x22; @node-click=&#x22;handleNodeClick&#x22;&#x3E;&#x3C;/el-tree&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Selectable</h3>
            <p class="mt-2 text-lg">Used for node selection.</p>
            <p class="mt-2 text-lg">This example also shows how to load node data asynchronously.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tree
                  :props="props2"
                  :load="loadNode2"
                  lazy
                  show-checkbox
                  @check-change="handleCheckChange2"
                ></el-tree>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tree
  :props=&#x22;props&#x22;
  :load=&#x22;loadNode&#x22;
  lazy
  show-checkbox
  @check-change=&#x22;handleCheckChange&#x22;&#x3E;
&#x3C;/el-tree&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom leaf node in lazy mode</h3>
            <p
              class="mt-2 text-lg"
            >A node's data is not fetched until it is clicked, so the Tree cannot predict whether a node is a leaf node. That's why a drop-down button is added to each node, and if it is a leaf node, the drop-down button will disappear when clicked. That being said, you can also tell the Tree in advance whether the node is a leaf node, avoiding the render of the drop-down button before a leaf node.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tree :props="props3" :load="loadNode3" lazy show-checkbox></el-tree>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tree
  :props=&#x22;props&#x22;
  :load=&#x22;loadNode&#x22;
  lazy
  show-checkbox&#x3E;
&#x3C;/el-tree&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled checkbox</h3>
            <p class="mt-2 text-lg">The checkbox of a node can be set as disabled.</p>
            <p
              class="mt-2 text-lg"
            >In the example, 'disabled' property is declared in defaultProps, and some nodes are set as 'disabled:true'. The corresponding checkboxes are disabled and can't be clicked.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tree
                  :data="data4"
                  :props="defaultProps4"
                  show-checkbox
                  @check-change="handleCheckChange2"
                ></el-tree>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tree
  :data=&#x22;data&#x22;
  :props=&#x22;defaultProps&#x22;
  show-checkbox
  @check-change=&#x22;handleCheckChange&#x22;&#x3E;
&#x3C;/el-tree&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Default expanded and default checked</h3>
            <p class="mt-2 text-lg">Tree nodes can be initially expanded or checked.</p>
            <p class="mt-2 text-lg">
              Use
              <code>default-expanded-keys</code> and
              <code>default-checked-keys</code> to set initially expanded and initially checked nodes respectively. Note that for them to work,
              <code>node-key</code> is required. Its value is the name of a key in the data object, and the value of that key should be unique across the whole tree.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tree
                  :data="data5"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[2, 3]"
                  :default-checked-keys="[5]"
                  :props="defaultProps5"
                ></el-tree>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tree
  :data=&#x22;data&#x22;
  show-checkbox
  node-key=&#x22;id&#x22;
  :default-expanded-keys=&#x22;[2, 3]&#x22;
  :default-checked-keys=&#x22;[5]&#x22;
  :props=&#x22;defaultProps&#x22;&#x3E;
&#x3C;/el-tree&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Checking tree nodes</h3>
            <p class="mt-2 text-lg">
              This example shows how to get and set checked nodes. They both can be done in two approaches: node and key. If you are taking the key approach,
              <code>node-key</code> is required.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tree
                  :data="data6"
                  show-checkbox
                  default-expand-all
                  node-key="id"
                  ref="tree"
                  highlight-current
                  :props="defaultProps6"
                ></el-tree>

                <div class="buttons">
                  <el-button @click="getCheckedNodes6">get by node</el-button>
                  <el-button @click="getCheckedKeys6">get by key</el-button>
                  <el-button @click="setCheckedNodes6">set by node</el-button>
                  <el-button @click="setCheckedKeys6">set by key</el-button>
                  <el-button @click="resetChecked6">reset</el-button>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tree
  :data=&#x22;data&#x22;
  show-checkbox
  default-expand-all
  node-key=&#x22;id&#x22;
  ref=&#x22;tree&#x22;
  highlight-current
  :props=&#x22;defaultProps&#x22;&#x3E;
&#x3C;/el-tree&#x3E;

&#x3C;div class=&#x22;buttons&#x22;&#x3E;
  &#x3C;el-button @click=&#x22;getCheckedNodes&#x22;&#x3E;get by node&#x3C;/el-button&#x3E;
  &#x3C;el-button @click=&#x22;getCheckedKeys&#x22;&#x3E;get by key&#x3C;/el-button&#x3E;
  &#x3C;el-button @click=&#x22;setCheckedNodes&#x22;&#x3E;set by node&#x3C;/el-button&#x3E;
  &#x3C;el-button @click=&#x22;setCheckedKeys&#x22;&#x3E;set by key&#x3C;/el-button&#x3E;
  &#x3C;el-button @click=&#x22;resetChecked&#x22;&#x3E;reset&#x3C;/el-button&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom node content</h3>
            <p
              class="mt-2 text-lg"
            >The content of tree nodes can be customized, so you can add icons or buttons as you will.</p>
            <p class="mt-2 text-lg">
              There are two ways to customize template for tree nodes:
              <code>render-content</code> and scoped slot. Use
              <code>render-content</code> to assign a render function that returns the content of tree nodes. See Vue's documentation for a detailed introduction of render functions. If you prefer scoped slot, you'll have access to
              <code>node</code> and
              <code>data</code> in the scope, standing for the TreeNode object and node data of the current node respectively. Note that the
              <code>render-content</code> demo can't run in jsfiddle because it doesn't support JSX syntax. In a real project,
              <code>render-content</code> will work if relevant dependencies are correctly configured.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div class="w-50 p-4">
                    <p cla>Using render-content</p>
                    <el-tree
                      :data="data7"
                      show-checkbox
                      node-key="id"
                      default-expand-all
                      :expand-on-click-node="false"
                      :render-content="renderContent7"
                    ></el-tree>
                  </div>
                  <div class="w-50 p-4">
                    <p class="my-2">Using scoped slot</p>
                    <el-tree
                      :data="data7"
                      show-checkbox
                      node-key="id"
                      default-expand-all
                      :expand-on-click-node="false"
                    >
                      <span class="w-100 d-flex justify-content-between align-items-center" slot-scope="{ node, data }">
                        <span>{{ node.label }}</span>
                        <span>
                          <el-button plain type="primary" class="btn-text" size="mini" @click="() => append(data)">Append</el-button>
                          <el-button
                             plain type="primary" class="btn-text"
                            size="mini"
                            @click="() => remove(node, data)"
                          >Delete</el-button>
                        </span>
                      </span>
                    </el-tree>
                  </div>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-flex justify-content-between&#x22;&#x3E;
  &#x3C;div class=&#x22;w-50 p-4&#x22;&#x3E;
    &#x3C;p&#x3E;Using render-content&#x3C;/p&#x3E;
    &#x3C;el-tree
      :data=&#x22;data&#x22;
      show-checkbox
      node-key=&#x22;id&#x22;
      default-expand-all
      :expand-on-click-node=&#x22;false&#x22;
      :render-content=&#x22;renderContent&#x22;&#x3E;
    &#x3C;/el-tree&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;w-50 p-4&#x22;&#x3E;
    &#x3C;p&#x3E;Using scoped slot&#x3C;/p&#x3E;
    &#x3C;el-tree
      :data=&#x22;data&#x22;
      show-checkbox
      node-key=&#x22;id&#x22;
      default-expand-all
      :expand-on-click-node=&#x22;false&#x22;&#x3E;
      &#x3C;span class=&#x22;w-100 d-flex justify-content-between align-items-center&#x22; slot-scope=&#x22;{ node, data }&#x22;&#x3E;
        &#x3C;span&#x3E;{{ node.label }}&#x3C;/span&#x3E;
        &#x3C;span&#x3E;
          &#x3C;el-button
            type=&#x22;text&#x22;
            size=&#x22;mini&#x22;
            @click=&#x22;() =&#x3E; append(data)&#x22;&#x3E;
            Append
          &#x3C;/el-button&#x3E;
          &#x3C;el-button
            type=&#x22;text&#x22;
            size=&#x22;mini&#x22;
            @click=&#x22;() =&#x3E; remove(node, data)&#x22;&#x3E;
            Delete
          &#x3C;/el-button&#x3E;
        &#x3C;/span&#x3E;
      &#x3C;/span&#x3E;
    &#x3C;/el-tree&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Tree node filtering</h3>
            <p class="mt-2 text-lg">Tree nodes can be filtered.</p>
            <p class="mt-2 text-lg">
              Invoke the
              <code>filter</code> method of the Tree instance to filter tree nodes. Its parameter is the filtering keyword. Note that for it to work,
              <code>filter-node-method</code> is required, and its value is the filtering method.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-input placeholder="Filter keyword" v-model="filterText"></el-input>

                <el-tree
                  class="filter-tree"
                  :data="data8"
                  :props="defaultProps8"
                  default-expand-all
                  :filter-node-method="filterNode8"
                  ref="tree8"
                ></el-tree>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input
  placeholder=&#x22;Filter keyword&#x22;
  v-model=&#x22;filterText&#x22;&#x3E;
&#x3C;/el-input&#x3E;

&#x3C;el-tree
  class=&#x22;filter-tree&#x22;
  :data=&#x22;data&#x22;
  :props=&#x22;defaultProps&#x22;
  default-expand-all
  :filter-node-method=&#x22;filterNode&#x22;
  ref=&#x22;tree&#x22;&#x3E;
&#x3C;/el-tree&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Accordion</h3>
            <p class="mt-2 text-lg">Only one node among the same level can be expanded at one time.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tree
                  :data="data9"
                  :props="defaultProps9"
                  accordion
                  @node-click="handleNodeClick9"
                ></el-tree>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tree
  :data=&#x22;data&#x22;
  :props=&#x22;defaultProps&#x22;
  accordion
  @node-click=&#x22;handleNodeClick&#x22;&#x3E;
&#x3C;/el-tree&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Draggable</h3>
            <p class="mt-2 text-lg">
              You can drag and drop Tree nodes by adding a
              <code>draggable</code> attribute.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tree
                  :data="data10"
                  node-key="id"
                  default-expand-all
                  @node-drag-start="handleDragStart10"
                  @node-drag-enter="handleDragEnter10"
                  @node-drag-leave="handleDragLeave10"
                  @node-drag-over="handleDragOver10"
                  @node-drag-end="handleDragEnd10"
                  @node-drop="handleDrop10"
                  draggable
                  :allow-drop="allowDrop10"
                  :allow-drag="allowDrag10"
                ></el-tree>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tree
  :data=&#x22;data&#x22;
  node-key=&#x22;id&#x22;
  default-expand-all
  @node-drag-start=&#x22;handleDragStart&#x22;
  @node-drag-enter=&#x22;handleDragEnter&#x22;
  @node-drag-leave=&#x22;handleDragLeave&#x22;
  @node-drag-over=&#x22;handleDragOver&#x22;
  @node-drag-end=&#x22;handleDragEnd&#x22;
  @node-drop=&#x22;handleDrop&#x22;
  draggable
  :allow-drop=&#x22;allowDrop&#x22;
  :allow-drag=&#x22;allowDrag&#x22;&#x3E;
&#x3C;/el-tree&#x3E;
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
              <el-table-column label="Description" width="400px">
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
            <h3 class="mt-8x">Props</h3>
            <el-table :data="propsApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="400px">
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
            <h3 class="mt-8x">Methods</h3>
            <p class="mt-2 text-lg">
              <code>Tree</code> has the following method, which returns the currently selected array of nodes.
            </p>
            <el-table :data="methodApi" class="mt-2">
              <el-table-column label="Method" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="400px">
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
              <el-table-column label="Description" width="400px">
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
            <h3 class="mt-8x">Scoped Slot</h3>
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
let id = 1000;
import Vue from "vue";
import clipboard from "@/utils/clipboard";
import VueCodeHighlight from "vue-code-highlight";
Vue.use(VueCodeHighlight); // registers the v-highlight directive
import "vue-code-highlight/themes/prism-okaidia.css";

export default {
  watch: {
    filterText(val) {
      this.$refs.tree8.filter(val);
    },
  },
  name: "Treeview",
  components: {},
  data() {
    const data = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            children: [
              {
                id: 9,
                label: "Level three 1-1-1",
              },
              {
                id: 10,
                label: "Level three 1-1-2",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "Level one 2",
        children: [
          {
            id: 5,
            label: "Level two 2-1",
          },
          {
            id: 6,
            label: "Level two 2-2",
          },
        ],
      },
      {
        id: 3,
        label: "Level one 3",
        children: [
          {
            id: 7,
            label: "Level two 3-1",
          },
          {
            id: 8,
            label: "Level two 3-2",
          },
        ],
      },
    ];
    return {
      data10: [
        {
          label: "Level one 1",
          children: [
            {
              label: "Level two 1-1",
              children: [
                {
                  label: "Level three 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 2",
          children: [
            {
              label: "Level two 2-1",
              children: [
                {
                  label: "Level three 2-1-1",
                },
              ],
            },
            {
              label: "Level two 2-2",
              children: [
                {
                  label: "Level three 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 3",
          children: [
            {
              label: "Level two 3-1",
              children: [
                {
                  label: "Level three 3-1-1",
                },
              ],
            },
            {
              label: "Level two 3-2",
              children: [
                {
                  label: "Level three 3-2-1",
                },
              ],
            },
          ],
        },
      ],

      data9: [
        {
          label: "Level one 1",
          children: [
            {
              label: "Level two 1-1",
              children: [
                {
                  label: "Level three 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 2",
          children: [
            {
              label: "Level two 2-1",
              children: [
                {
                  label: "Level three 2-1-1",
                },
              ],
            },
            {
              label: "Level two 2-2",
              children: [
                {
                  label: "Level three 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 3",
          children: [
            {
              label: "Level two 3-1",
              children: [
                {
                  label: "Level three 3-1-1",
                },
              ],
            },
            {
              label: "Level two 3-2",
              children: [
                {
                  label: "Level three 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps9: {
        children: "children",
        label: "label",
      },

      filterText: "",
      data8: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 4,
              label: "Level two 1-1",
              children: [
                {
                  id: 9,
                  label: "Level three 1-1-1",
                },
                {
                  id: 10,
                  label: "Level three 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "Level one 2",
          children: [
            {
              id: 5,
              label: "Level two 2-1",
            },
            {
              id: 6,
              label: "Level two 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "Level one 3",
          children: [
            {
              id: 7,
              label: "Level two 3-1",
            },
            {
              id: 8,
              label: "Level two 3-2",
            },
          ],
        },
      ],
      defaultProps8: {
        children: "children",
        label: "label",
      },

      data7: JSON.parse(JSON.stringify(data)),
      data7: JSON.parse(JSON.stringify(data)),

      data6: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 4,
              label: "Level two 1-1",
              children: [
                {
                  id: 9,
                  label: "Level three 1-1-1",
                },
                {
                  id: 10,
                  label: "Level three 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "Level one 2",
          children: [
            {
              id: 5,
              label: "Level two 2-1",
            },
            {
              id: 6,
              label: "Level two 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "Level one 3",
          children: [
            {
              id: 7,
              label: "Level two 3-1",
            },
            {
              id: 8,
              label: "Level two 3-2",
            },
          ],
        },
      ],
      defaultProps6: {
        children: "children",
        label: "label",
      },

      data5: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 4,
              label: "Level two 1-1",
              children: [
                {
                  id: 9,
                  label: "Level three 1-1-1",
                },
                {
                  id: 10,
                  label: "Level three 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "Level one 2",
          children: [
            {
              id: 5,
              label: "Level two 2-1",
            },
            {
              id: 6,
              label: "Level two 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "Level one 3",
          children: [
            {
              id: 7,
              label: "Level two 3-1",
            },
            {
              id: 8,
              label: "Level two 3-2",
            },
          ],
        },
      ],
      defaultProps5: {
        children: "children",
        label: "label",
      },

      data4: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 3,
              label: "Level two 2-1",
              children: [
                {
                  id: 4,
                  label: "Level three 3-1-1",
                },
                {
                  id: 5,
                  label: "Level three 3-1-2",
                  disabled: true,
                },
              ],
            },
            {
              id: 2,
              label: "Level two 2-2",
              disabled: true,
              children: [
                {
                  id: 6,
                  label: "Level three 3-2-1",
                },
                {
                  id: 7,
                  label: "Level three 3-2-2",
                  disabled: true,
                },
              ],
            },
          ],
        },
      ],
      defaultProps4: {
        children: "children",
        label: "label",
        disabled: "disabled",
      },

      props3: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },

      props2: {
        label: "name",
        children: "zones",
      },
      count: 1,

      data1: [
        {
          label: "Level one 1",
          children: [
            {
              label: "Level two 1-1",
              children: [
                {
                  label: "Level three 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 2",
          children: [
            {
              label: "Level two 2-1",
              children: [
                {
                  label: "Level three 2-1-1",
                },
              ],
            },
            {
              label: "Level two 2-2",
              children: [
                {
                  label: "Level three 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 3",
          children: [
            {
              label: "Level two 3-1",
              children: [
                {
                  label: "Level three 3-1-1",
                },
              ],
            },
            {
              label: "Level two 3-2",
              children: [
                {
                  label: "Level three 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps1: {
        children: "children",
        label: "label",
      },

      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "data",
          description: "tree data",
          type: "array",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "empty-text",
          description: "text displayed when data is void",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "node-key",
          description:
            "unique identity key name for nodes, its value should be unique across the whole tree",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "props",
          description: "configuration options, see the following table",
          type: "object",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "render-after-expand",
          description:
            "whether to render child nodes only after a parent node is expanded for the first time",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "load",
          description:
            "method for loading subtree data, only works when <code>lazy</code> is true",
          type: "function(node, resolve)",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "render-content",
          description: "render function for tree node",
          type: "Function(h, { node, data, store }",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "highlight-current",
          description: "whether current node is highlighted",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "default-expand-all",
          description: "whether to expand all nodes by default",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "expand-on-click-node",
          description:
            "whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "check-on-click-node",
          description:
            "whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "auto-expand-parent",
          description:
            "whether to expand father node when a child node is expanded",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "default-expanded-keys",
          description: "array of keys of initially expanded nodes",
          type: "array",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "show-checkbox",
          description: "whether node is selectable",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "check-strictly",
          description:
            "whether checked state of a node not affects its father and child nodes when <code>show-checkbox</code> is <code>true</code>",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "default-checked-keys",
          description: "array of keys of initially checked nodes",
          type: "array",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "current-node-key",
          description: "key of initially selected node",
          type: "string, number",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "filter-node-method",
          description:
            "this function will be executed on each node when use filter method. if return <code>false</code>, tree node will be hidden.",
          type: "Function(value, data, node)",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "accordion",
          description:
            "whether only one node among the same level can be expanded at one time",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "indent",
          description:
            "horizontal indentation of nodes in adjacent levels in pixels",
          type: "number",
          acceptedvalues: "—",
          default: "16",
        },
        {
          attribute: "icon-class",
          description: "custome tree node icon",
          type: "string",
          acceptedvalues: "-",
          default: "-",
        },
        {
          attribute: "lazy",
          description:
            "whether to lazy load leaf node, used with <code>load</code> attribute",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "draggable",
          description: "whether enable tree nodes drag and drop",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "allow-drag",
          description:
            "this function will be executed before dragging a node. If <code>false</code> is returned, the node can not be dragged",
          type: "Function(node)",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "allow-drop",
          description:
            "this function will be executed before the dragging node is dropped. If <code>false</code> is returned, the dragging node can not be dropped at the target node. <code>type</code> has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node)",
          type: "Function(draggingNode, dropNode, type)",
          acceptedvalues: "—",
          default: "—",
        },
      ],
      propsApi: [
        {
          attribute: "label",
          description:
            "specify which key of node object is used as the node's label",
          type: "string, function(data, node)",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "children",
          description:
            "specify which node object is used as the node's subtree",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "disabled",
          description:
            "specify which key of node object represents if node's checkbox is disabled",
          type: "boolean, function(data, node)",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "isLeaf",
          description:
            "specify whether the node is a leaf node, only works when lazy load is enabled",
          type: "boolean, function(data, node)",
          acceptedvalues: "—",
          default: "—",
        },
      ],
      methodApi: [
        {
          method: "filter",
          description: "filter all tree nodes, filtered nodes will be hidden",
          parameters:
            "Accept a parameter which will be used as first parameter for filter-node-method",
        },
        {
          method: "updateKeyChildren",
          description:
            "set new data to node, only works when <code>node-key</code> is assigned",
          parameters:
            "(key, data) Accept two parameters: 1. key of node 2. new data",
        },
        {
          method: "getCheckedNodes",
          description:
            "If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of nodes",
          parameters:
            "(leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes. 2. default value is <code>false</code>. If the parameter is <code>true</code>, the return value contains halfchecked nodes",
        },
        {
          method: "setCheckedNodes",
          description:
            "set certain nodes to be checked, only works when <code>node-key</code> is assigned",
          parameters: "an array of nodes to be checked",
        },
        {
          method: "getCheckedKeys",
          description:
            "If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of node's keys",
          parameters:
            "(leafOnly) Accept a boolean type parameter whose default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes.",
        },
        {
          method: "setCheckedKeys",
          description:
            "set certain nodes to be checked, only works when <code>node-key</code> is assigned",
          parameters:
            "(keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean type parameter whose default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes.",
        },
        {
          method: "setChecked",
          description:
            "set node to be checked or not, only works when <code>node-key</code> is assigned",
          parameters:
            "(key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not.",
        },
        {
          method: "getHalfCheckedNodes",
          description:
            "If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of nodes",
          parameters: "-",
        },
        {
          method: "getHalfCheckedKeys",
          description:
            "If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of node's keys",
          parameters: "-",
        },
        {
          method: "getCurrentKey",
          description:
            "return the highlight node's key (null if no node is highlighted)",
          parameters: "—",
        },
        {
          method: "getCurrentNode",
          description:
            "return the highlight node's data (null if no node is highlighted)",
          parameters: "—",
        },
        {
          method: "setCurrentKey",
          description:
            "set highlighted node by key, only works when <code>node-key</code> is assigned",
          parameters:
            "(key) the node's key to be highlighted. If <code>null</code>, cancel the currently highlighted node",
        },
        {
          method: "setCurrentNode",
          description:
            "set highlighted node, only works when <code>node-key</code> is assigned",
          parameters: "(node) the node to be highlighted",
        },
        {
          method: "getNode",
          description: "get node by data or key",
          parameters: "(data) the node's data or key",
        },
        {
          method: "remove",
          description: "remove a node, only works when node-key is assigned",
          parameters: "(data) the node's data or node to be deleted",
        },
        {
          method: "append",
          description: "append a child node to a given node in the tree",
          parameters:
            "(data, parentNode) 1. child node's data to be appended 2. parent node's data, key or node",
        },
        {
          method: "insertBefore",
          description: "insert a node before a given node in the tree",
          parameters:
            "(data, refNode) 1. node's data to be inserted 2. reference node's data, key or node",
        },
        {
          method: "insertAfter",
          description: "insert a node after a given node in the tree",
          parameters:
            "(data, refNode) 1. node's data to be inserted 2. reference node's data, key or node",
        },
      ],
      eventApi: [
        {
          eventname: "node-click",
          description: "triggers when a node is clicked",
          parameters:
            "three parameters: node object corresponding to the node clicked, <code>node</code> property of TreeNode, TreeNode itself",
        },
        {
          eventname: "node-contextmenu",
          description: "triggers when a node is clicked by right button",
          parameters:
            "four parameters: event, node object corresponding to the node clicked, <code>node</code> property of TreeNode, TreeNode itself",
        },
        {
          eventname: "check-change",
          description: "triggers when the selected state of the node changes",
          parameters:
            "three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes",
        },
        {
          eventname: "check",
          description: "triggers after clicking the checkbox of a node",
          parameters:
            "two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys",
        },
        {
          eventname: "current-change",
          description: "triggers when current node changes",
          parameters:
            "two parameters: node object corresponding to the current node, <code>node</code> property of TreeNode",
        },
        {
          eventname: "node-expand",
          description: "triggers when current node open",
          parameters:
            "three parameters: node object corresponding to the node opened, <code>node</code> property of TreeNode, TreeNode itself",
        },
        {
          eventname: "node-collapse",
          description: "triggers when current node close",
          parameters:
            "three parameters: node object corresponding to the node closed, <code>node</code> property of TreeNode, TreeNode itself",
        },
        {
          eventname: "node-drag-start",
          description: "triggers when dragging starts",
          parameters:
            "two parameters: node object corresponding to the dragging node, event.",
        },
        {
          eventname: "node-drag-enter",
          description: "triggers when the dragging node enters another node",
          parameters:
            "three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.",
        },
        {
          eventname: "node-drag-leave",
          description: "triggers when the dragging node leaves a node",
          parameters:
            "three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.",
        },
        {
          eventname: "node-drag-over",
          description:
            "triggers when dragging over a node (like mouseover event)",
          parameters:
            "three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.",
        },
        {
          eventname: "node-drag-end",
          description: "triggers when dragging ends",
          parameters:
            "four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be <code>undefined</code>), node drop type (before / after / inner), event.",
        },
        {
          eventname: "node-drop",
          description: "triggers after the dragging node is dropped",
          parameters:
            "four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.",
        },
      ],
      slotApi: [
        {
          name: "—",
          description:
            "Custom content for tree nodes. The scope parameter is { node, data }",
        },
      ],
    };
  },

  methods: {
    randomKey() {
      return new Date() + (Math.random() * 1000).toFixed(0);
    },

    handleState(index) {
      return this.loadingIndexes.indexOf(index) > -1;
    },
    handleLoading(index) {
      this.loadingIndexes.push(index);

      setTimeout(() => {
        this.isLoading = false;
        this.index = 0;

        this.loadingIndexes = this.loadingIndexes.filter((p) => p != index);
      }, 3000);
    },
    handleNodeClick1(data) {
      console.log(data);
    },
    handleCheckChange2(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode2(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "Root1" }, { name: "Root2" }]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.name === "region1") {
        hasChild = true;
      } else if (node.data.name === "region2") {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [
            {
              name: "zone" + this.count++,
            },
            {
              name: "zone" + this.count++,
            },
          ];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    },
    loadNode3(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "region" }]);
      }
      if (node.level > 1) return resolve([]);

      setTimeout(() => {
        const data = [
          {
            name: "leaf",
            leaf: true,
          },
          {
            name: "zone",
          },
        ];

        resolve(data);
      }, 500);
    },
    getCheckedNodes6() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys6() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes6() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: "Level two 2-1",
        },
        {
          id: 9,
          label: "Level three 1-1-1",
        },
      ]);
    },
    setCheckedKeys6() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked6() {
      this.$refs.tree.setCheckedKeys([]);
    },
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent7(h, { node, data, store }) {
      return (
        <span class="w-100 d-flex justify-content-between align-items-center">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
               plain type="primary" class="btn-text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
               plain type="primary" class="btn-text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    },
    filterNode8(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleNodeClick9(data) {
      console.log(data);
    },
    handleDragStart10(node, ev) {
      console.log("drag start", node);
    },
    handleDragEnter10(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
    },
    handleDragLeave10(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
    },
    handleDragOver10(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
    },
    handleDragEnd10(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    },
    handleDrop10(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.label, dropType);
    },
    allowDrop10(draggingNode, dropNode, type) {
      if (dropNode.data.label === "Level two 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag10(draggingNode) {
      return draggingNode.data.label.indexOf("Level three 3-1-1") === -1;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
