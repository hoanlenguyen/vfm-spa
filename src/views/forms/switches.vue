<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Switches</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Switch is used for switching between two opposing states.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              Bind
              <code>v-model</code> to a
              <code>Boolean</code> typed variable. The
              <code>active-color</code> and
              <code>inactive-color</code> attribute decides the background color in two states.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-switch v-model="value1" class="d-block mb-4"></el-switch>
                <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-switch v-model=&#x22;value1&#x22;&#x3E;
&#x3C;/el-switch&#x3E;
&#x3C;el-switch
  v-model=&#x22;value2&#x22;
  active-color=&#x22;#13ce66&#x22;
  inactive-color=&#x22;#ff4949&#x22;&#x3E;
&#x3C;/el-switch&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Text description</h3>
            <p class="mt-2 text-lg">
              You can add
              <code>active-text</code> and
              <code>inactive-text</code> attribute to show texts.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-switch class="d-block mb-4" v-model="value1" active-text="Pay by month" inactive-text="Pay by year"></el-switch>
                <el-switch
                  style="display: block"
                  v-model="value2"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="Pay by month"
                  inactive-text="Pay by year"
                ></el-switch>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-switch
  v-model=&#x22;value1&#x22;
  active-text=&#x22;Pay by month&#x22;
  inactive-text=&#x22;Pay by year&#x22;&#x3E;
&#x3C;/el-switch&#x3E;
&#x3C;el-switch
  style=&#x22;display: block&#x22;
  v-model=&#x22;value2&#x22;
  active-color=&#x22;#13ce66&#x22;
  inactive-color=&#x22;#ff4949&#x22;
  active-text=&#x22;Pay by month&#x22;
  inactive-text=&#x22;Pay by year&#x22;&#x3E;
&#x3C;/el-switch&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Extended value types</h3>
            <p class="mt-2 text-lg">
              You can set
              <code>active-value</code> and
              <code>inactive-value</code> attributes. They both receive a
              <code>Boolean</code>,
              <code>String</code> or
              <code>Number</code> typed value.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tooltip :content="'Switch value: ' + value" placement="top">
                  <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="100"
                    inactive-value="0"
                  ></el-switch>
                </el-tooltip>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tooltip :content=&#x22;&#x27;Switch value: &#x27; + value&#x22; placement=&#x22;top&#x22;&#x3E;
  &#x3C;el-switch
    v-model=&#x22;value&#x22;
    active-color=&#x22;#13ce66&#x22;
    inactive-color=&#x22;#ff4949&#x22;
    active-value=&#x22;100&#x22;
    inactive-value=&#x22;0&#x22;&#x3E;
  &#x3C;/el-switch&#x3E;
&#x3C;/el-tooltip&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled</h3>
            <p class="mt-2 text-lg">
              Adding the
              <code>disabled</code> attribute disables Switch.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-switch class="d-block mb-4" v-model="value11" disabled></el-switch>
                <el-switch v-model="value22" disabled></el-switch>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-switch
  v-model=&#x22;value1&#x22;
  disabled&#x3E;
&#x3C;/el-switch&#x3E;
&#x3C;el-switch
  v-model=&#x22;value2&#x22;
  disabled&#x3E;
&#x3C;/el-switch&#x3E;
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
              <el-table-column label="Type" width="250px">
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
              <el-table-column label="Description" width="550px">
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
              <el-table-column label="Method" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="550px">
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
  name: "Switches",
  components: {},
  data() {
    return {
      value11: true,
      value22: false,
      value: "100",
      value1: true,
      value2: true,
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "value / v-model",
          description: "binding value",
          type: "boolean / string / number",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "disabled",
          description: "whether Switch is disabled",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "width",
          description: "width of Switch",
          type: "number",
          acceptedvalues: "—",
          default: "40",
        },
        {
          attribute: "active-icon-class",
          description:
            "class name of the icon displayed when in <code>on</code> state, overrides <code>active-text</code>",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "inactive-icon-class",
          description:
            "class name of the icon displayed when in <code>off</code> state, overrides <code>inactive-text</code>",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "active-text",
          description: "text displayed when in <code>on</code> state",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "inactive-text",
          description: "text displayed when in <code>off</code> state",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "active-value",
          description: "switch value when in <code>on</code> state",
          type: "boolean / string / number",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "inactive-value",
          description: "switch value when in <code>off</code> state",
          type: "boolean / string / number",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "active-color",
          description: "background color when in <code>on</code> state",
          type: "string",
          acceptedvalues: "—",
          default: "#409EFF",
        },
        {
          attribute: "inactive-color",
          description: "background color when in <code>off</code> state",
          type: "string",
          acceptedvalues: "—",
          default: "#C0CCDA",
        },
        {
          attribute: "name",
          description: "input name of Switch",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "validate-event",
          description: "whether to trigger form validation",
          type: "boolean",
          acceptedvalues: "-",
          default: "true",
        },
      ],
      eventApi: [
        {
          eventname: "change",
          description: "triggers when value changes",
          parameters: "value after changing",
        },
      ],
      methodApi: [
        {
          method: "focus",
          description: "focus the Switch component",
          parameters: "—",
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
