<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Notification</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Displays a global notification message at a corner of the page.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              Element has registered the
              <code>$notify</code> method and it receives an object as its parameter. In the simplest case, you can set the
              <code>title</code> field and the
              <code>message</code> field for the title and body of the notification. By default, the notification automatically closes after 4500ms, but by setting
              <code>duration</code> you can control its duration. Specifically, if set to
              <code>0</code>, it will not close automatically. Note that
              <code>duration</code> receives a
              <code>Number</code> in milliseconds.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button class="m-2" plain @click="open1">Closes automatically</el-button>
                <el-button class="m-2" plain @click="open2">Won't close automatically</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button
    plain
    @click=&#x22;open1&#x22;&#x3E;
    Closes automatically
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    plain
    @click=&#x22;open2&#x22;&#x3E;
    Won&#x27;t close automatically
    &#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">With types</h3>
            <p class="mt-2 text-lg">We provide four types: success, warning, info and error.</p>
            <p class="mt-2 text-lg">
              Element provides four notification types:
              <code>success</code>,
              <code>warning</code>,
              <code>info</code> and
              <code>error</code>. They are set by the
              <code>type</code> field, and other values will be ignored. We also registered methods for these types that can be invoked directly like
              <code>open3</code> and
              <code>open4</code> without passing a
              <code>type</code> field.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button class="m-2" plain @click="opena">Success</el-button>
                <el-button class="m-2" plain @click="openb">Warning</el-button>
                <el-button class="m-2" plain @click="openc">Info</el-button>
                <el-button class="m-2" plain @click="opend">Error</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button
    plain
    @click=&#x22;open1&#x22;&#x3E;
    Success
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    plain
    @click=&#x22;open2&#x22;&#x3E;
    Warning
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    plain
    @click=&#x22;open3&#x22;&#x3E;
    Info
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    plain
    @click=&#x22;open4&#x22;&#x3E;
    Error
  &#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom position</h3>
            <p class="mt-2 text-lg">Notification can emerge from any corner you like.</p>
            <p class="mt-2 text-lg">
              Setting the
              The
              <code>position</code> attribute defines which corner Notification slides in. It can be
              <code>top-right</code>,
              <code>top-left</code>,
              <code>bottom-right</code> or
              <code>bottom-left</code>. Defaults to
              <code>top-right</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button class="m-2" plain @click="open11">Top Right</el-button>
                <el-button class="m-2" plain @click="open22">Bottom Right</el-button>
                <el-button class="m-2" plain @click="open33">Bottom Left</el-button>
                <el-button class="m-2" plain @click="open44">Top Left</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button
    plain
    @click=&#x22;open1&#x22;&#x3E;
    Top Right
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    plain
    @click=&#x22;open2&#x22;&#x3E;
    Bottom Right
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    plain
    @click=&#x22;open3&#x22;&#x3E;
    Bottom Left
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    plain
    @click=&#x22;open4&#x22;&#x3E;
    Top Left
  &#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">With offset</h3>
            <p class="mt-2 text-lg">Customize Notification's offset from the edge of the screen.</p>
            <p class="mt-2 text-lg">
              Set the
              <code>offset</code> attribute to customize Notification's offset from the edge of the screen. Note that every Notification instance of the same moment should have the same offset.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button plain @click="open3">Notification with offset</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button
    plain
    @click=&#x22;open&#x22;&#x3E;
    Notification with offset
  &#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Use HTML string</h3>
            <p class="mt-2 text-lg">
              <code>message</code> supports HTML string.
            </p>
            <p class="mt-2 text-lg">
              Set
              <code>dangerouslyUseHTMLString</code> to true and
              <code>message</code> will be treated as an HTML string.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button plain @click="open4">Use HTML String</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button
    plain
    @click=&#x22;open&#x22;&#x3E;
    Use HTML String
  &#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div class="mt-3">
            <p>
              Although
              <code>message</code> property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to
              <a
                href="https://en.wikipedia.org/wiki/Cross-site_scripting"
              >XSS attacks</a>. So when
              <code>dangerouslyUseHTMLString</code> is on, please make sure the content of
              <code>message</code> is trusted, and
              <strong>never</strong> assign
              <code>message</code> to user-provided content.
            </p>
          </div>

          <div>
            <h3 class="mt-8x">Hide close button</h3>
            <p class="mt-2 text-lg">It is possible to hide the close button.</p>
            <p class="mt-2 text-lg">
              Set the
              <code>showClose</code> attribute to
              <code>false</code> so the notification cannot be closed by the user.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button plain @click="open5">Hide close button</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button
    plain
    @click=&#x22;open&#x22;&#x3E;
    Hide close button
    &#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Local import</h3>
            <p class="mt-2 text-lg">
              Import
              <code>Notification</code>:
            </p>
            <div class="card-shadowed mt-4"></div>
            <div v-highlight language="js" class="mt-4x">
              <pre class="language-js" v-pre>
                <code>
import { Notification } from &#x27;element-ui&#x27;;
                </code>
            </pre>
            </div>
          </div>

          <div class="mt-3">
            <p>
              In this case you should call
              <code>Notification(options)</code>. We have also registered methods for different types, e.g.
              <code>Notification.success(options)</code>. You can call
              <code>Notification.closeAll()</code> to manually close all the instances.
            </p>
          </div>

          <div>
            <h3 class="mt-8x">Options</h3>
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
              <code>Notification</code> and
              <code>this.$notify</code> returns the current Notification instance. To manually close the instance, you can call
              <code>close</code> on it.
            </p>
            <el-table :data="methodApi" class="mt-2">
              <el-table-column label="Method" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method" />
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
import Vue from "vue";
import clipboard from "@/utils/clipboard";
import VueCodeHighlight from "vue-code-highlight";
Vue.use(VueCodeHighlight); // registers the v-highlight directive
import "vue-code-highlight/themes/prism-okaidia.css";

export default {
  name: "Notification",
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "title",
          description: "title",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "message",
          description: "description text",
          type: "string / Vue.VNode",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "dangerouslyUseHTMLString",
          description: "whether <code>message</code> is treated as HTML string",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "type",
          description: "notification type",
          type: "string",
          acceptedvalues: "success / warning / info / error",
          default: "—",
        },
        {
          attribute: "iconClass",
          description:
            "custom icon's class. It will be overridden by <code>type</code>",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "customClass",
          description: "custom class name for Notification",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "duration",
          description:
            "duration before close. It will not automatically close if set 0",
          type: "number",
          acceptedvalues: "—",
          default: "4500",
        },
        {
          attribute: "position",
          description: "custom position",
          type: "string",
          acceptedvalues: "top-right / top-left / bottom-right / bottom-left",
          default: "top-right",
        },
        {
          attribute: "showClose",
          description: "whether to show a close button",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "onClose",
          description: "callback function when closed",
          type: "function",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "onClick",
          description: "callback function when notification clicked",
          type: "function",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "offset",
          description:
            "offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset",
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
      ],
      methodApi: [{ method: "close", description: "close the Notification" }],
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
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: "Title",
        message: h("i", { style: "color: teal" }, "This is a reminder"),
      });
    },

    open2() {
      this.$notify({
        title: "Prompt",
        message: "This is a message that does not automatically close",
        duration: 0,
      });
    },
    opena() {
      this.$notify({
        title: "Success",
        message: "This is a success message",
        type: "success",
      });
    },

    openb() {
      this.$notify({
        title: "Warning",
        message: "This is a warning message",
        type: "warning",
      });
    },

    openc() {
      this.$notify.info({
        title: "Info",
        message: "This is an info message",
      });
    },

    opend() {
      this.$notify.error({
        title: "Error",
        message: "This is an error message",
      });
    },
    open11() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the top right corner",
      });
    },

    open22() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the bottom right corner",
        position: "bottom-right",
      });
    },

    open33() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the bottom left corner",
        position: "bottom-left",
      });
    },

    open44() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the top left corner",
        position: "top-left",
      });
    },
    open3() {
      this.$notify.success({
        title: "Success",
        message: "This is a success message",
        offset: 100,
      });
    },
    open4() {
      this.$notify({
        title: "HTML String",
        dangerouslyUseHTMLString: true,
        message: "<strong>This is <i>HTML</i> string</strong>",
      });
    },
    open5() {
      this.$notify.success({
        title: "Info",
        message: "This is a message without close button",
        showClose: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
