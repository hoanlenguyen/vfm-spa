<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Transfer</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              Data is passed to Transfer via the
              <code>data</code> attribute. The data needs to be an object array, and each object should have these attributes:
              <code>key</code> being the identification of the data item,
              <code>label</code> being the displayed text, and
              <code>disabled</code> indicating if the data item is disabled. Items inside the target list are in sync with the variable binding to
              <code>v-model</code>, and the value of that variable is an array of target item keys. So, if you don't want the target list be initially empty, you can initialize the
              <code>v-model</code> with an array.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-transfer v-model="value1" :data="data1"></el-transfer>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;span class=&#x22;demonstration&#x22;&#x3E;With default value&#x3C;/span&#x3E;
  &#x3C;el-color-picker v-model=&#x22;color1&#x22;&#x3E;&#x3C;/el-color-picker&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;span class=&#x22;demonstration&#x22;&#x3E;With no default value&#x3C;/span&#x3E;
  &#x3C;el-color-picker v-model=&#x22;color2&#x22;&#x3E;&#x3C;/el-color-picker&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Filterable</h3>
            <p class="mt-2 text-lg">You can search and filter data items.</p>
            <p class="mt-2 text-lg">
              Set the
              <code>filterable</code> attribute to
              <code>true</code> to enable filter mode. By default, if the data item
              <code>label</code> contains the search keyword, it will be included in the search result. Also, you can implement you own filter method with the
              <code>filter-method</code> attribute. It takes a method and passes search keyword and each data item to it whenever the keyword changes. For a certain data item, if the method returns true, it will be included in the result list.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-transfer
                  filterable
                  :filter-method="filterMethod"
                  filter-placeholder="State Abbreviations"
                  v-model="value2"
                  :data="data2"
                ></el-transfer>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-transfer
    filterable
    :filter-method=&#x22;filterMethod&#x22;
    filter-placeholder=&#x22;State Abbreviations&#x22;
    v-model=&#x22;value&#x22;
    :data=&#x22;data&#x22;&#x3E;
  &#x3C;/el-transfer&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Customizable</h3>
            <p
              class="mt-2 text-lg"
            >You can customize list titles, button texts, render function for data items, checking status texts in list footer and list footer contents.</p>
            <p class="mt-2 text-lg">
              Use
              <code>titles</code>,
              <code>button-texts</code>,
              <code>render-content</code> and
              <code>format</code> to respectively customize list titles, button texts, render function for data items, checking status texts in list header. Plus, you can also use scoped slot to customize data items. For list footer contents, two named slots are provided:
              <code>left-footer</code> and
              <code>right-footer</code>. Plus, if you want some items initially checked, you can use
              <code>left-default-checked</code> and
              <code>right-default-checked</code>. Finally, this example demonstrate the
              <code>change</code> event. Note that this demo can't run in jsfiddle because it doesn't support JSX syntax. In a real project,
              <code>render-content</code> will work if relevant dependencies are correctly configured.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <p
                  style="text-align: center; margin: 0 0 20px"
                >Customize data items using render-content</p>
                <div style="text-align: center">
                  <el-transfer
                    style="text-align: left; display: inline-block"
                    v-model="value3"
                    filterable
                    :left-default-checked="[2, 3]"
                    :right-default-checked="[1]"
                    :render-content="renderFunc"
                    :titles="['Source', 'Target']"
                    :button-texts="['To left', 'To right']"
                    :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
                    @change="handleChange"
                    :data="data3"
                  >
                    <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
                    <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
                  </el-transfer>
                  <p
                    style="text-align: center; margin: 50px 0 20px"
                  >Customize data items using scoped slot</p>
                  <div style="text-align: center">
                    <el-transfer
                      style="text-align: left; display: inline-block"
                      v-model="value4"
                      filterable
                      :left-default-checked="[2, 3]"
                      :right-default-checked="[1]"
                      :titles="['Source', 'Target']"
                      :button-texts="['To left', 'To right']"
                      :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }"
                      @change="handleChange"
                      :data="data3"
                    >
                      <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                      <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
                      <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
                    </el-transfer>
                  </div>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;p style=&#x22;text-align: center; margin: 0 0 20px&#x22;&#x3E;Customize data items using render-content&#x3C;/p&#x3E;
  &#x3C;div style=&#x22;text-align: center&#x22;&#x3E;
    &#x3C;el-transfer
      style=&#x22;text-align: left; display: inline-block&#x22;
      v-model=&#x22;value&#x22;
      filterable
      :left-default-checked=&#x22;[2, 3]&#x22;
      :right-default-checked=&#x22;[1]&#x22;
      :render-content=&#x22;renderFunc&#x22;
      :titles=&#x22;[&#x27;Source&#x27;, &#x27;Target&#x27;]&#x22;
      :button-texts=&#x22;[&#x27;To left&#x27;, &#x27;To right&#x27;]&#x22;
      :format=&#x22;{
        noChecked: &#x27;${total}&#x27;,
        hasChecked: &#x27;${checked}/${total}&#x27;
      }&#x22;
      @change=&#x22;handleChange&#x22;
      :data=&#x22;data&#x22;&#x3E;
      &#x3C;el-button class=&#x22;transfer-footer&#x22; slot=&#x22;left-footer&#x22; size=&#x22;small&#x22;&#x3E;Operation&#x3C;/el-button&#x3E;
      &#x3C;el-button class=&#x22;transfer-footer&#x22; slot=&#x22;right-footer&#x22; size=&#x22;small&#x22;&#x3E;Operation&#x3C;/el-button&#x3E;
    &#x3C;/el-transfer&#x3E;
    &#x3C;p style=&#x22;text-align: center; margin: 50px 0 20px&#x22;&#x3E;Customize data items using scoped slot&#x3C;/p&#x3E;
    &#x3C;div style=&#x22;text-align: center&#x22;&#x3E;
      &#x3C;el-transfer
        style=&#x22;text-align: left; display: inline-block&#x22;
        v-model=&#x22;value4&#x22;
        filterable
        :left-default-checked=&#x22;[2, 3]&#x22;
        :right-default-checked=&#x22;[1]&#x22;
        :titles=&#x22;[&#x27;Source&#x27;, &#x27;Target&#x27;]&#x22;
        :button-texts=&#x22;[&#x27;To left&#x27;, &#x27;To right&#x27;]&#x22;
        :format=&#x22;{
          noChecked: &#x27;${total}&#x27;,
          hasChecked: &#x27;${checked}/${total}&#x27;
        }&#x22;
        @change=&#x22;handleChange&#x22;
        :data=&#x22;data&#x22;&#x3E;
        &#x3C;span slot-scope=&#x22;{ option }&#x22;&#x3E;{{ option.key }} - {{ option.label }}&#x3C;/span&#x3E;
        &#x3C;el-button class=&#x22;transfer-footer&#x22; slot=&#x22;left-footer&#x22; size=&#x22;small&#x22;&#x3E;Operation&#x3C;/el-button&#x3E;
        &#x3C;el-button class=&#x22;transfer-footer&#x22; slot=&#x22;right-footer&#x22; size=&#x22;small&#x22;&#x3E;Operation&#x3C;/el-button&#x3E;
      &#x3C;/el-transfer&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Prop aliases</h3>
            <p class="mt-2 text-lg">
              By default, Transfer looks for
              <code>key</code>,
              <code>label</code> and
              <code>disabled</code> in a data item. If your data items have different key names, you can use the
              <code>props</code> attribute to define aliases.
            </p>
            <p class="mt-2 text-lg">
              The data items in this example do not have
              <code>key</code>s or
              <code>label</code>s, instead they have
              <code>value</code>s and
              <code>desc</code>s. So you need to set aliases for
              <code>key</code> and
              <code>label</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-transfer
                  v-model="value5"
                  :props="{
      key: 'value',
      label: 'desc'
    }"
                  :data="data4"
                ></el-transfer>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-transfer
    v-model=&#x22;value&#x22;
    :props=&#x22;{
      key: &#x27;value&#x27;,
      label: &#x27;desc&#x27;
    }&#x22;
    :data=&#x22;data&#x22;&#x3E;
  &#x3C;/el-transfer&#x3E;
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
            <h3 class="mt-8x">Scoped Slot</h3>
            <el-table :data="scopedslotApi" class="mt-2">
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
            <h3 class="mt-8x">Methods</h3>
            <el-table :data="methodApi" class="mt-2">
              <el-table-column label="Method" width="170px">
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
import Vue from "vue";
import clipboard from "@/utils/clipboard";
import VueCodeHighlight from "vue-code-highlight";
Vue.use(VueCodeHighlight); // registers the v-highlight directive
import "vue-code-highlight/themes/prism-okaidia.css";

export default {
  name: "Transfer",
  components: {},
  data() {
    const generateData4 = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    const generateData3 = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    const generateData2 = (_) => {
      const data = [];
      const states = [
        "California",
        "Illinois",
        "Maryland",
        "Texas",
        "Florida",
        "Colorado",
        "Connecticut ",
      ];
      const initials = ["CA", "IL", "MD", "TX", "FL", "CO", "CT"];
      states.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          initial: initials[index],
        });
      });
      return data;
    };
    const generateData1 = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data4: generateData4(),
      value5: [],
      data3: generateData3(),
      value3: [1],
      value4: [1],
      renderFunc(h, option) {
        return (
          <span>
            {option.key} - {option.label}
          </span>
        );
      },
      data2: generateData2(),
      value2: [],
      filterMethod(query, item) {
        return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
      },
      data1: generateData1(),
      value1: [1, 4],
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "value / v-model",
          description: "binding value",
          type: "array",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "data",
          description: "data source",
          type: "array[{ key, label, disabled }]",
          acceptedvalues: "—",
          default: "[ ]",
        },
        {
          attribute: "filterable",
          description: "whether Transfer is filterable",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "filter-placeholder",
          description: "placeholder for the filter input",
          type: "string",
          acceptedvalues: "—",
          default: "Enter keyword",
        },
        {
          attribute: "filter-method",
          description: "custom filter method",
          type: "function",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "target-order",
          description:
            "order strategy for elements in the target list. If set to <code>original</code>, the elements will keep the same order as the data source. If set to <code>push</code>, the newly added elements will be pushed to the bottom. If set to <code>unshift</code>, the newly added elements will be inserted on the top",
          type: "string",
          acceptedvalues: "original / push / unshift",
          default: "original",
        },
        {
          attribute: "titles",
          description: "custom list titles",
          type: "array",
          acceptedvalues: "—",
          default: "['List 1', 'List 2']",
        },
        {
          attribute: "button-texts",
          description: "custom button texts",
          type: "array",
          acceptedvalues: "—",
          default: "[ ]",
        },
        {
          attribute: "render-content",
          description: "custom render function for data items",
          type: "function(h, option)",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "format",
          description: "texts for checking status in list header",
          type: "object{noChecked, hasChecked}",
          acceptedvalues: "—",
          default:
            "{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }",
        },
        {
          attribute: "props",
          description: "prop aliases for data source",
          type: "object{key, label, disabled}",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "left-default-checked",
          description:
            "key array of initially checked data items of the left list",
          type: "array",
          acceptedvalues: "—",
          default: "[ ]",
        },
        {
          attribute: "right-default-checked",
          description:
            "key array of initially checked data items of the right list",
          type: "array",
          acceptedvalues: "—",
          default: "[ ]",
        },
      ],
      slotApi: [
        { name: "left-footer", description: "content of left list footer" },
        { name: "right-footer", description: "content of right list footer" },
      ],
      scopedslotApi: [
        {
          name: "—",
          description:
            "Custom content for data items. The scope parameter is { option }",
        },
      ],
      methodApi: [
        {
          method: "clearQuery",
          description: "clear the filter keyword of a certain panel",
          parameters: "'left' / 'right'",
        },
      ],
      eventApi: [
        {
          eventname: "change",
          description: "triggers when data items change in the right list",
          parameters:
            "key array of current data items in the right list, transfer direction (left or right), moved item keys",
        },
        {
          eventname: "left-check-change",
          description:
            "triggers when end user changes the checked state of any data item in the left list",
          parameters:
            "key array of currently checked items, key array of items whose checked state have changed",
        },
        {
          eventname: "right-check-change",
          description:
            "triggers when end user changes the checked state of any data item in the right list",
          parameters:
            "key array of currently checked items, key array of items whose checked state have changed",
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
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
