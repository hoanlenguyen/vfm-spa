<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Tabs</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Divide data collections which are related yet belong to different types.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Basic and concise tabs.</p>
            <p class="mt-2 text-lg">
              Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the
              <code>value</code> attribute.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="User" name="first">User</el-tab-pane>
                  <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                  <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                  <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tabs v-model=&#x22;activeName&#x22; @tab-click=&#x22;handleClick&#x22;&#x3E;
    &#x3C;el-tab-pane label=&#x22;User&#x22; name=&#x22;first&#x22;&#x3E;User&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Config&#x22; name=&#x22;second&#x22;&#x3E;Config&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Role&#x22; name=&#x22;third&#x22;&#x3E;Role&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Task&#x22; name=&#x22;fourth&#x22;&#x3E;Task&#x3C;/el-tab-pane&#x3E;
  &#x3C;/el-tabs&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Card Style</h3>
            <p class="mt-2 text-lg">Tabs styled as cards.</p>
            <p class="mt-2 text-lg">
              Set
              <code>type</code> to
              <code>card</code> can get a card-styled tab.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tabs type="card" @tab-click="handleClick">
                  <el-tab-pane label="User">User</el-tab-pane>
                  <el-tab-pane label="Config">Config</el-tab-pane>
                  <el-tab-pane label="Role">Role</el-tab-pane>
                  <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
 &#x3C;el-tabs type=&#x22;card&#x22; @tab-click=&#x22;handleClick&#x22;&#x3E;
    &#x3C;el-tab-pane label=&#x22;User&#x22;&#x3E;User&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Config&#x22;&#x3E;Config&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Role&#x22;&#x3E;Role&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Task&#x22;&#x3E;Task&#x3C;/el-tab-pane&#x3E;
  &#x3C;/el-tabs&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Border card</h3>
            <p class="mt-2 text-lg">Border card tabs.</p>
            <p class="mt-2 text-lg">
              Set
              <code>type</code> to
              <code>border-card</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tabs type="border-card">
                  <el-tab-pane label="User">User</el-tab-pane>
                  <el-tab-pane label="Config">Config</el-tab-pane>
                  <el-tab-pane label="Role">Role</el-tab-pane>
                  <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tabs type=&#x22;border-card&#x22;&#x3E;
  &#x3C;el-tab-pane label=&#x22;User&#x22;&#x3E;User&#x3C;/el-tab-pane&#x3E;
  &#x3C;el-tab-pane label=&#x22;Config&#x22;&#x3E;Config&#x3C;/el-tab-pane&#x3E;
  &#x3C;el-tab-pane label=&#x22;Role&#x22;&#x3E;Role&#x3C;/el-tab-pane&#x3E;
  &#x3C;el-tab-pane label=&#x22;Task&#x22;&#x3E;Task&#x3C;/el-tab-pane&#x3E;
&#x3C;/el-tabs&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Tab position</h3>
            <p class="mt-2 text-lg">
              You can use
              <code>tab-position</code> attribute to set the tab's position.
            </p>
            <p class="mt-2 text-lg">
              You can choose from four directions:
              <code>tabPosition="left|right|top|bottom"</code>
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                  <el-radio-button label="top">top</el-radio-button>
                  <el-radio-button label="right">right</el-radio-button>
                  <el-radio-button label="bottom">bottom</el-radio-button>
                  <el-radio-button label="left">left</el-radio-button>
                </el-radio-group>

                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                  <el-tab-pane label="User">User</el-tab-pane>
                  <el-tab-pane label="Config">Config</el-tab-pane>
                  <el-tab-pane label="Role">Role</el-tab-pane>
                  <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-radio-group v-model=&#x22;tabPosition&#x22; style=&#x22;margin-bottom: 30px;&#x22;&#x3E;
    &#x3C;el-radio-button label=&#x22;top&#x22;&#x3E;top&#x3C;/el-radio-button&#x3E;
    &#x3C;el-radio-button label=&#x22;right&#x22;&#x3E;right&#x3C;/el-radio-button&#x3E;
    &#x3C;el-radio-button label=&#x22;bottom&#x22;&#x3E;bottom&#x3C;/el-radio-button&#x3E;
    &#x3C;el-radio-button label=&#x22;left&#x22;&#x3E;left&#x3C;/el-radio-button&#x3E;
  &#x3C;/el-radio-group&#x3E;

  &#x3C;el-tabs :tab-position=&#x22;tabPosition&#x22; style=&#x22;height: 200px;&#x22;&#x3E;
    &#x3C;el-tab-pane label=&#x22;User&#x22;&#x3E;User&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Config&#x22;&#x3E;Config&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Role&#x22;&#x3E;Role&#x3C;/el-tab-pane&#x3E;
    &#x3C;el-tab-pane label=&#x22;Task&#x22;&#x3E;Task&#x3C;/el-tab-pane&#x3E;
  &#x3C;/el-tabs&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom Tab</h3>
            <p class="mt-2 text-lg">You can use named slot to customize the tab label content.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tabs type="border-card">
                  <el-tab-pane>
                    <span slot="label">
                      <i class="el-icon-date"></i> Route
                    </span>
                    Route
                  </el-tab-pane>
                  <el-tab-pane label="Config">Config</el-tab-pane>
                  <el-tab-pane label="Role">Role</el-tab-pane>
                  <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tabs type=&#x22;border-card&#x22;&#x3E;
  &#x3C;el-tab-pane&#x3E;
    &#x3C;span slot=&#x22;label&#x22;&#x3E;&#x3C;i class=&#x22;el-icon-date&#x22;&#x3E;&#x3C;/i&#x3E; Route&#x3C;/span&#x3E;
    Route
  &#x3C;/el-tab-pane&#x3E;
  &#x3C;el-tab-pane label=&#x22;Config&#x22;&#x3E;Config&#x3C;/el-tab-pane&#x3E;
  &#x3C;el-tab-pane label=&#x22;Role&#x22;&#x3E;Role&#x3C;/el-tab-pane&#x3E;
  &#x3C;el-tab-pane label=&#x22;Task&#x22;&#x3E;Task&#x3C;/el-tab-pane&#x3E;
&#x3C;/el-tabs&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Add and close tab</h3>
            <p class="mt-2 text-lg">Only card type Tabs support addable and closeable.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
                  <el-tab-pane
                    v-for="item in editableTabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
                  >{{item.content}}</el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-highlight language="js" class="mt-4x">
              <pre class="language-js" v-pre>
                <code>
&#x3C;el-tabs v-model=&#x22;editableTabsValue&#x22; type=&#x22;card&#x22; editable @edit=&#x22;handleTabsEdit&#x22;&#x3E;
  &#x3C;el-tab-pane
    v-for=&#x22;item in editableTabs&#x22;
    :key=&#x22;item.name&#x22;
    :label=&#x22;item.title&#x22;
    :name=&#x22;item.name&#x22;
  &#x3E;
    {{item.content}}
  &#x3C;/el-tab-pane&#x3E;
&#x3C;/el-tabs&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Customized trigger button of new tab</h3>
            <p class="mt-2 text-lg">At last, this is an example with both icon and description.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div style="margin-bottom: 20px;">
                  <el-button size="small" @click="addTab(editableTabsValue)">add tab</el-button>
                </div>
                <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                  <el-tab-pane
                    v-for="item in editableTabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
                  >{{item.content}}</el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
 &#x3C;el-alert
    title=&#x22;success alert&#x22;
    type=&#x22;success&#x22;
    description=&#x22;more text description&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;info alert&#x22;
    type=&#x22;info&#x22;
    description=&#x22;more text description&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;warning alert&#x22;
    type=&#x22;warning&#x22;
    description=&#x22;more text description&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;error alert&#x22;
    type=&#x22;error&#x22;
    description=&#x22;more text description&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
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
              <el-table-column label="Attribute" width="180px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="250px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Accepted values" width="150px">
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
            <h3 class="mt-8x">Tab-pane Attributes</h3>
            <el-table :data="TabpaneAttributes" class="mt-2">
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
              <el-table-column label="Type" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Accepted values" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues" />
                </template>
              </el-table-column>
              <el-table-column label="Default" width="250px">
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
import Vue from "vue";
import clipboard from "@/utils/clipboard";
import VueCodeHighlight from "vue-code-highlight";
Vue.use(VueCodeHighlight); // registers the v-highlight directive
import "vue-code-highlight/themes/prism-okaidia.css";

export default {
  name: "Tabs",
  components: {},
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
      tabPosition: "left",
      activeName: "first",
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "value / v-model",
          description: "binding value, name of the selected tab",
          type: "string",
          acceptedvalues: "—",
          default: "name of first tab",
        },
        {
          attribute: "type",
          description: "type of Tab",
          type: "string",
          acceptedvalues: "card/border-card",
          default: "—",
        },
        {
          attribute: "closable",
          description: "whether Tab is closable",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "addable",
          description: "whether Tab is addable",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "editable",
          description: "whether Tab is addable and closable",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "tab-position",
          description: "position of tabs",
          type: "string",
          acceptedvalues: "top/right/bottom/left",
          default: "top",
        },
        {
          attribute: "stretch",
          description: "whether width of tab automatically fits its container",
          type: "boolean",
          acceptedvalues: "-",
          default: "false",
        },
        {
          attribute: "before-leave",
          description:
            "hook function before switching tab. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, switching will be prevented",
          type: "Function(activeName, oldActiveName)",
          acceptedvalues: "—",
          default: "—",
        },
      ],
      TabpaneAttributes: [
        {
          attribute: "label",
          description: "title of the tab",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "disabled",
          description: "whether Tab is disabled",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "name",
          description:
            "identifier corresponding to the name of Tabs, representing the alias of the tab-pane",
          type: "string",
          acceptedvalues: "—",
          default:
            "ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '1'",
        },
        {
          attribute: "closable",
          description: "whether Tab is closable",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "lazy",
          description: "whether Tab is lazily rendered",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
      ],
      eventApi: [
        {
          eventname: "tab-click",
          description: "triggers when a tab is clicked",
          parameters: "clicked tab",
        },
        {
          eventname: "tab-remove",
          description: "triggers when tab-remove button is clicked",
          parameters: "name of the removed tab",
        },
        {
          eventname: "tab-add",
          description: "triggers when tab-add button is clicked",
          parameters: "—",
        },
        {
          eventname: "edit",
          description: "triggers when tab-add button or tab-remove is clicked",
          parameters: "(targetName, action)",
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content",
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      }
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
