<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Tooltips</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Display prompt information for mouse hover.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Tooltip has 9 placements.</p>
            <p class="mt-2 text-lg">
              Use attribute
              <code>content</code> to set the display content when hover. The attribute
              <code>placement</code> determines the position of the tooltip. Its value is
              <code>[orientation]-[alignment]</code> with four orientations
              <code>top</code>,
              <code>left</code>,
              <code>right</code>,
              <code>bottom</code> and three alignments
              <code>start</code>,
              <code>end</code>,
              <code>null</code>, and the default alignment is null. Take
              <code>placement="left-end"</code> for example, Tooltip will display on the left of the element which you are hovering and the bottom of the tooltip aligns with the bottom of the element.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="box">
                  <div class="top">
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Top Left prompts info"
                      placement="top-start"
                    >
                      <el-button>top-start</el-button>
                    </el-tooltip>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Top Center prompts info"
                      placement="top"
                    >
                      <el-button>top</el-button>
                    </el-tooltip>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Top Right prompts info"
                      placement="top-end"
                    >
                      <el-button>top-end</el-button>
                    </el-tooltip>
                  </div>
                  <div class="left mt-3">
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Left Top prompts info"
                      placement="left-start"
                    >
                      <el-button>left-start</el-button>
                    </el-tooltip>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Left Center prompts info"
                      placement="left"
                    >
                      <el-button>left</el-button>
                    </el-tooltip>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Left Bottom prompts info"
                      placement="left-end"
                    >
                      <el-button>left-end</el-button>
                    </el-tooltip>
                  </div>

                  <div class="right mt-3">
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Right Top prompts info"
                      placement="right-start"
                    >
                      <el-button>right-start</el-button>
                    </el-tooltip>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Right Center prompts info"
                      placement="right"
                    >
                      <el-button>right</el-button>
                    </el-tooltip>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Right Bottom prompts info"
                      placement="right-end"
                    >
                      <el-button>right-end</el-button>
                    </el-tooltip>
                  </div>
                  <div class="bottom mt-3">
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Bottom Left prompts info"
                      placement="bottom-start"
                    >
                      <el-button>bottom-start</el-button>
                    </el-tooltip>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Bottom Center prompts info"
                      placement="bottom"
                    >
                      <el-button>bottom</el-button>
                    </el-tooltip>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Bottom Right prompts info"
                      placement="bottom-end"
                    >
                      <el-button>bottom-end</el-button>
                    </el-tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;box&#x22;&#x3E;
  &#x3C;div class=&#x22;top&#x22;&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Top Left prompts info&#x22; placement=&#x22;top-start&#x22;&#x3E;
      &#x3C;el-button&#x3E;top-start&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Top Center prompts info&#x22; placement=&#x22;top&#x22;&#x3E;
      &#x3C;el-button&#x3E;top&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Top Right prompts info&#x22; placement=&#x22;top-end&#x22;&#x3E;
      &#x3C;el-button&#x3E;top-end&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;left&#x22;&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Left Top prompts info&#x22; placement=&#x22;left-start&#x22;&#x3E;
      &#x3C;el-button&#x3E;left-start&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Left Center prompts info&#x22; placement=&#x22;left&#x22;&#x3E;
      &#x3C;el-button&#x3E;left&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Left Bottom prompts info&#x22; placement=&#x22;left-end&#x22;&#x3E;
      &#x3C;el-button&#x3E;left-end&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
  &#x3C;/div&#x3E;

  &#x3C;div class=&#x22;right&#x22;&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Right Top prompts info&#x22; placement=&#x22;right-start&#x22;&#x3E;
      &#x3C;el-button&#x3E;right-start&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Right Center prompts info&#x22; placement=&#x22;right&#x22;&#x3E;
      &#x3C;el-button&#x3E;right&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Right Bottom prompts info&#x22; placement=&#x22;right-end&#x22;&#x3E;
      &#x3C;el-button&#x3E;right-end&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bottom&#x22;&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Bottom Left prompts info&#x22; placement=&#x22;bottom-start&#x22;&#x3E;
      &#x3C;el-button&#x3E;bottom-start&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Bottom Center prompts info&#x22; placement=&#x22;bottom&#x22;&#x3E;
      &#x3C;el-button&#x3E;bottom&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
    &#x3C;el-tooltip class=&#x22;item&#x22; effect=&#x22;dark&#x22; content=&#x22;Bottom Right prompts info&#x22; placement=&#x22;bottom-end&#x22;&#x3E;
      &#x3C;el-button&#x3E;bottom-end&#x3C;/el-button&#x3E;
    &#x3C;/el-tooltip&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Theme</h3>
            <p class="mt-2 text-lg">
              Tooltip has two themes:
              <code>dark</code> and
              <code>light</code>.
            </p>
            <p class="mt-2 text-lg">
              Set
              <code>effect</code> to modify theme, and the default value is
              <code>dark</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tooltip content="Top center" placement="top">
                  <el-button>Dark</el-button>
                </el-tooltip>
                <el-tooltip content="Bottom center" placement="bottom" effect="light">
                  <el-button>Light</el-button>
                </el-tooltip>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tooltip content=&#x22;Top center&#x22; placement=&#x22;top&#x22;&#x3E;
  &#x3C;el-button&#x3E;Dark&#x3C;/el-button&#x3E;
&#x3C;/el-tooltip&#x3E;
&#x3C;el-tooltip content=&#x22;Bottom center&#x22; placement=&#x22;bottom&#x22; effect=&#x22;light&#x22;&#x3E;
  &#x3C;el-button&#x3E;Light&#x3C;/el-button&#x3E;
&#x3C;/el-tooltip&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">More Content</h3>
            <p class="mt-2 text-lg">Display multiple lines of text and set their format.</p>
            <p class="mt-2 text-lg">
              Override attribute
              <code>content</code> of
              <code>el-tooltip</code> by adding a slot named
              <code>content</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tooltip placement="top">
                  <div slot="content">
                    multiple lines
                    <br />second line
                  </div>
                  <el-button>Top center</el-button>
                </el-tooltip>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tooltip placement=&#x22;top&#x22;&#x3E;
  &#x3C;div slot=&#x22;content&#x22;&#x3E;multiple lines&#x3C;br/&#x3E;second line&#x3C;/div&#x3E;
  &#x3C;el-button&#x3E;Top center&#x3C;/el-button&#x3E;
&#x3C;/el-tooltip&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Advanced usage</h3>
            <p
              class="mt-2 text-lg"
            >In addition to basic usages, there are some attributes that allow you to customize your own:</p>
            <p class="mt-2 text-lg">
              <code>transition</code> attribute allows you to customize the animation in which the tooltip shows or hides, and the default value is el-fade-in-linear.
            </p>
            <p class="mt-2 text-lg">
              <code>disabled</code> attribute allows you to disable
              <code>tooltip</code>. You just need set it to
              <code>true</code>.
            </p>
            <p class="mt-2 text-lg">
              In fact, Tooltip is an extension based on
              <a
                href="https://github.com/element-component/vue-popper"
              >Vue-popper</a>, you can use any attribute that are allowed in Vue-popper.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-tooltip
                  :disabled="disabled"
                  content="click to close tooltip function"
                  placement="bottom"
                  effect="light"
                >
                  <el-button
                    @click="disabled = !disabled"
                  >click to {{disabled ? 'active' : 'close'}} tooltip function</el-button>
                </el-tooltip>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-tooltip :disabled=&#x22;disabled&#x22; content=&#x22;click to close tooltip function&#x22; placement=&#x22;bottom&#x22; effect=&#x22;light&#x22;&#x3E;
    &#x3C;el-button @click=&#x22;disabled = !disabled&#x22;&#x3E;click to {{disabled ? &#x27;active&#x27; : &#x27;close&#x27;}} tooltip function&#x3C;/el-button&#x3E;
  &#x3C;/el-tooltip&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div class="mt-3">
            <p>
              The
              <code>router-link</code> component is not supported in tooltip, please use
              <code>vm.$router.push</code>.
            </p>
            <p>
              Disabled form elements are not supported for Tooltip, more information can be found at
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter"
              >MDN</a>. You need to wrap the disabled form element with a container element for Tooltip to work.
            </p>
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
  name: "Tooltips",
  components: {},
  data() {
    return {
      disabled: false,
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "effect",
          description: "Tooltip theme",
          type: "string",
          acceptedvalues: "dark/light",
          default: "dark",
        },
        {
          attribute: "content",
          description:
            "display content, can be overridden by <code>slot#content</code>",
          type: "String",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "placement",
          description: "position of Tooltip",
          type: "string",
          acceptedvalues:
            "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
          default: "bottom",
        },
        {
          attribute: "value / v-model",
          description: "visibility of Tooltip",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "disabled",
          description: "whether Tooltip is disabled",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "offset",
          description: "offset of the Tooltip",
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
        {
          attribute: "transition",
          description: "animation name",
          type: "string",
          acceptedvalues: "—",
          default: "el-fade-in-linear",
        },
        {
          attribute: "visible-arrow",
          description:
            'whether an arrow is displayed. For more information, check <a href="https://github.com/element-component/vue-popper">Vue-popper</a> page',
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "popper-options",
          description:
            '<a href="https://popper.js.org/documentation.html">popper.js</a> parameters',
          type: "Object",
          acceptedvalues:
            'refer to <a href="https://popper.js.org/documentation.html">popper.js</a> doc',
          default:
            "<code>{ boundariesElement: 'body', gpuAcceleration: false }</code>",
        },
        {
          attribute: "open-delay",
          description: "delay of appearance, in millisecond",
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
        {
          attribute: "manual",
          description:
            "whether to control Tooltip manually. <code>mouseenter</code> and <code>mouseleave</code> won't have effects if set to <code>true</code>",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "popper-class",
          description: "custom class name for Tooltip's popper",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "enterable",
          description: "whether the mouse can enter the tooltip",
          type: "Boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "hide-after",
          description: "timeout in milliseconds to hide tooltip",
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
        {
          attribute: "tabindex",
          description:
            '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Tooltip',
          type: "number",
          acceptedvalues: "—",
          default: "0",
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
