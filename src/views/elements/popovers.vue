<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Popovers</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              Similar to Tooltip, Popover is also built with
              <code>Vue-popper</code>. So for some duplicated attributes, please refer to the documentation of Tooltip.
            </p>
            <p class="mt-2 text-lg">
              The
              <code>trigger</code> attribute is used to define how popover is triggered:
              <code>hover</code>,
              <code>click</code>,
              <code>focus</code> or
              <code>manual</code>. As for the triggering element, you can write it in two different ways: use the
              <code>slot="reference"</code> named slot, or use the
              <code>v-popover</code> directive and set it to Popover's
              <code>ref</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-around">
                  <el-popover
                    placement="top-start"
                    title="Title"
                    width="200"
                    trigger="hover"
                    content="this is content, this is content, this is content"
                  >
                    <el-button slot="reference">Hover to activate</el-button>
                  </el-popover>

                  <el-popover
                    placement="bottom"
                    title="Title"
                    width="200"
                    trigger="click"
                    content="this is content, this is content, this is content"
                  >
                    <el-button slot="reference">Click to activate</el-button>
                  </el-popover>

                  <el-popover
                    ref="popover"
                    placement="right"
                    title="Title"
                    width="200"
                    trigger="focus"
                    content="this is content, this is content, this is content"
                  ></el-popover>
                  <el-button v-popover:popover>Focus to activate</el-button>

                  <el-popover
                    placement="bottom"
                    title="Title"
                    width="200"
                    trigger="manual"
                    content="this is content, this is content, this is content"
                    v-model="visible"
                  >
                    <el-button slot="reference" @click="visible = !visible">Manual to activate</el-button>
                  </el-popover>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-popover
    placement=&#x22;top-start&#x22;
    title=&#x22;Title&#x22;
    width=&#x22;200&#x22;
    trigger=&#x22;hover&#x22;
    content=&#x22;this is content, this is content, this is content&#x22;&#x3E;
    &#x3C;el-button slot=&#x22;reference&#x22;&#x3E;Hover to activate&#x3C;/el-button&#x3E;
  &#x3C;/el-popover&#x3E;

  &#x3C;el-popover
    placement=&#x22;bottom&#x22;
    title=&#x22;Title&#x22;
    width=&#x22;200&#x22;
    trigger=&#x22;click&#x22;
    content=&#x22;this is content, this is content, this is content&#x22;&#x3E;
    &#x3C;el-button slot=&#x22;reference&#x22;&#x3E;Click to activate&#x3C;/el-button&#x3E;
  &#x3C;/el-popover&#x3E;

  &#x3C;el-popover
    ref=&#x22;popover&#x22;
    placement=&#x22;right&#x22;
    title=&#x22;Title&#x22;
    width=&#x22;200&#x22;
    trigger=&#x22;focus&#x22;
    content=&#x22;this is content, this is content, this is content&#x22;&#x3E;
  &#x3C;/el-popover&#x3E;
  &#x3C;el-button v-popover:popover&#x3E;Focus to activate&#x3C;/el-button&#x3E;

  &#x3C;el-popover
    placement=&#x22;bottom&#x22;
    title=&#x22;Title&#x22;
    width=&#x22;200&#x22;
    trigger=&#x22;manual&#x22;
    content=&#x22;this is content, this is content, this is content&#x22;
    v-model=&#x22;visible&#x22;&#x3E;
    &#x3C;el-button slot=&#x22;reference&#x22; @click=&#x22;visible = !visible&#x22;&#x3E;Manual to activate&#x3C;/el-button&#x3E;
  &#x3C;/el-popover&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Nested information</h3>
            <p
              class="mt-2 text-lg"
            >Other components can be nested in popover. Following is an example of nested table.</p>
            <p class="mt-2 text-lg">
              Replace the
              <code>content</code> attribute with a default
              <code>slot</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-popover placement="right" width="400" trigger="click">
                  <el-table :data="gridData">
                    <el-table-column width="150" property="date" label="date"></el-table-column>
                    <el-table-column width="100" property="name" label="name"></el-table-column>
                    <el-table-column width="300" property="address" label="address"></el-table-column>
                  </el-table>
                  <el-button slot="reference">Click to activate</el-button>
                </el-popover>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-popover
  placement=&#x22;right&#x22;
  width=&#x22;400&#x22;
  trigger=&#x22;click&#x22;&#x3E;
  &#x3C;el-table :data=&#x22;gridData&#x22;&#x3E;
    &#x3C;el-table-column width=&#x22;150&#x22; property=&#x22;date&#x22; label=&#x22;date&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
    &#x3C;el-table-column width=&#x22;100&#x22; property=&#x22;name&#x22; label=&#x22;name&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
    &#x3C;el-table-column width=&#x22;300&#x22; property=&#x22;address&#x22; label=&#x22;address&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
  &#x3C;/el-table&#x3E;
  &#x3C;el-button slot=&#x22;reference&#x22;&#x3E;Click to activate&#x3C;/el-button&#x3E;
&#x3C;/el-popover&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Nested operation</h3>
            <p
              class="mt-2 text-lg"
            >Of course, you can nest other operations. It's more light-weight than using a dialog.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-popover placement="top" width="250" v-model="visible">
                  <h5>Are you sure to delete this?</h5>
                  <div class="d-flex justify-content-end mt-4">
                    <el-button size="small" plain class="btn-text" @click="visible = false">Cancel</el-button>
                    <el-button type="primary" size="small" plain class="btn-text" @click="visible = false">Confirm</el-button>
                  </div>
                  <el-button slot="reference">Delete</el-button>
                </el-popover>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-popover placement=&#x22;top&#x22; width=&#x22;250&#x22; v-model=&#x22;visible&#x22;&#x3E;
  &#x3C;h5&#x3E;Are you sure to delete this?&#x3C;/h5&#x3E;
  &#x3C;div class=&#x22;d-flex justify-content-end mt-4&#x22;&#x3E;
    &#x3C;el-button size=&#x22;small&#x22; plain class=&#x22;btn-text&#x22; @click=&#x22;visible = false&#x22;&#x3E;Cancel&#x3C;/el-button&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; size=&#x22;small&#x22; plain class=&#x22;btn-text&#x22; @click=&#x22;visible = false&#x22;&#x3E;Confirm&#x3C;/el-button&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;el-button slot=&#x22;reference&#x22;&#x3E;Delete&#x3C;/el-button&#x3E;
&#x3C;/el-popover&#x3E;
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
              <el-table-column label="Name" width="150px">
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
  name: "Popovers",
  components: {},
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-04",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-01",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-03",
          name: "Jack",
          address: "New York City",
        },
      ],
      visible: false,
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "trigger",
          description: "how the popover is triggered",
          type: "string",
          acceptedvalues: "click/focus/hover/manual",
          default: "click",
        },
        {
          attribute: "title",
          description: "popover title",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "content",
          description:
            "popover content, can be replaced with a default <code>slot</code>",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "width",
          description: "popover width",
          type: "string, number",
          acceptedvalues: "—",
          default: "Min width 150px",
        },
        {
          attribute: "placement",
          description: "popover placement",
          type: "string",
          acceptedvalues:
            "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
          default: "bottom",
        },
        {
          attribute: "disabled",
          description: "whether Popover is disabled",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "value / v-model",
          description: "whether popover is visible",
          type: "Boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "offset",
          description: "popover offset",
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
        {
          attribute: "transition",
          description: "popover transition animation",
          type: "string",
          acceptedvalues: "—",
          default: "el-fade-in-linear",
        },
        {
          attribute: "visible-arrow",
          description:
            'whether a tooltip arrow is displayed or not. For more info, please refer to <a href="https://github.com/element-component/vue-popper">Vue-popper</a>',
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "popper-options",
          description:
            'parameters for <a href="https://popper.js.org/documentation.html">popper.js</a>',
          type: "object",
          acceptedvalues:
            'please refer to <a href="https://popper.js.org/documentation.html">popper.js</a>',
          default:
            "<code>{ boundariesElement: 'body', gpuAcceleration: false }</code>",
        },
        {
          attribute: "popper-class",
          description: "custom class name for popover",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "open-delay",
          description:
            "delay before appearing when <code>trigger</code> is hover, in milliseconds",
          type: "number",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "close-delay",
          description:
            "delay before disappearing when <code>trigger</code> is hover, in milliseconds",
          type: "number",
          acceptedvalues: "—",
          default: "200",
        },
        {
          attribute: "tabindex",
          description:
            '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Popover',
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
      ],
      slotApi: [
        { name: "—", description: "text content of popover" },
        {
          name: "reference",
          description: "HTML element that triggers popover",
        },
      ],
      eventApi: [
        {
          eventname: "show",
          description: "triggers when popover shows",
          parameters: "—",
        },
        {
          eventname: "after-enter",
          description: "triggers when the entering transition ends",
          parameters: "—",
        },
        {
          eventname: "hide",
          description: "triggers when popover hides",
          parameters: "—",
        },
        {
          eventname: "after-leave",
          description: "triggers when the leaving transition ends",
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
