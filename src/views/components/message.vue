<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Message</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Displays at the top, and disappears after 3 seconds.</p>
            <p class="mt-2 text-lg">
              The setup of Message is very similar to notification, so parts of the options won't be explained in detail here. You can check the options table below combined with notification doc to understand it. Element has registered a
              <code>$message</code> method for invoking. Message can take a string or a VNode as parameter, and it will be shown as the main body.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button :plain="true" @click="open">Show message</el-button>
                <el-button :plain="true" @click="openVn">VNode</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open&#x22;&#x3E;Show message&#x3C;/el-button&#x3E;
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;openVn&#x22;&#x3E;VNode&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Types</h3>
            <p
              class="mt-2 text-lg"
            >Used to show the feedback of Success, Warning, Message and Error activities.</p>
            <p class="mt-2 text-lg">
              When you need more customizations, Message component can also take an object as parameter. For example, setting value of
              <code>type</code> can define different types, and its default is
              <code>info</code>. In such cases the main body is passed in as the value of
              <code>message</code>. Also, we have registered methods for different types, so you can directly call it without passing a type like
              <code>open4</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button class="m-2" :plain="true" @click="open2">success</el-button>
                <el-button class="m-2" :plain="true" @click="open3">warning</el-button>
                <el-button class="m-2" :plain="true" @click="open1">message</el-button>
                <el-button class="m-2" :plain="true" @click="open4">error</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open2&#x22;&#x3E;success&#x3C;/el-button&#x3E;
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open3&#x22;&#x3E;warning&#x3C;/el-button&#x3E;
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open1&#x22;&#x3E;message&#x3C;/el-button&#x3E;
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open4&#x22;&#x3E;error&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Closable</h3>
            <p class="mt-2 text-lg">A close button can be added.</p>
            <p class="mt-2 text-lg">
              A default Message cannot be closed manually. If you need a closable message, you can set
              <code>showClose</code> field. Besides, same as notification, message has a controllable
              <code>duration</code>. Default duration is 3000 ms, and it won't disappear when set to
              <code>0</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button class="m-2" :plain="true" @click="opena">message</el-button>
                <el-button class="m-2" :plain="true" @click="openb">success</el-button>
                <el-button class="m-2" :plain="true" @click="openc">warning</el-button>
                <el-button class="m-2" :plain="true" @click="opend">error</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open1&#x22;&#x3E;message&#x3C;/el-button&#x3E;
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open2&#x22;&#x3E;success&#x3C;/el-button&#x3E;
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open3&#x22;&#x3E;warning&#x3C;/el-button&#x3E;
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;open4&#x22;&#x3E;error&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Centered text</h3>
            <p class="mt-2 text-lg">
              Use the
              <code>center</code> attribute to center the text.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button :plain="true" @click="openCenter">Centered text</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
   &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;openCenter&#x22;&#x3E;Centered text&#x3C;/el-button&#x3E;
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
                <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button :plain=&#x22;true&#x22; @click=&#x22;openHTML&#x22;&#x3E;Use HTML String&#x3C;/el-button&#x3E;
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
            <h3 class="mt-8x">Global method</h3>
            <p class="mt-2 text-lg"></p>
            <p>
              Element has added a global method
              <code>$message</code> for Vue.prototype. So in a vue instance you can call
              <code>Message</code> like what we did in this page.
            </p>
          </div>

          <div>
            <h3 class="mt-8x">Local import</h3>
            <p class="mt-2 text-lg">
              Import
              <code>Message</code>
            </p>
            <div v-highlight language="js" class="mt-4x">
              <pre class="language-js" v-pre>
                <code>
import { Message } from &#x27;element-ui&#x27;;
                </code>
            </pre>
              <p class="mt-2 text-lg">
                In this case you should call
                <code>Message(options)</code>. We have also registered methods for different types, e.g.
                <code>Message.success(options)</code>. You can call
                <code>Message.closeAll()</code> to manually close all the instances.
              </p>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Options</h3>

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
            <h3 class="mt-8x">Methods</h3>
            <p class="mt-2 text-lg">
              <code>Message</code> and
              <code>this.$message</code> returns the current Message instance. To manually close the instance, you can call
              <code>close</code> on it.
            </p>
            <el-table :data="methodApi" class="mt-2">
              <el-table-column label="Method" width="150px">
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
  name: "Message",
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "message",
          description: "message text",
          type: "string / VNode",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "type",
          description: "message type",
          type: "string",
          acceptedvalues: "success/warning/info/error",
          default: "info",
        },
        {
          attribute: "iconClass",
          description: "custom icon's class, overrides <code>type</code>",
          type: "string",
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
          attribute: "customClass",
          description: "custom class name for Message",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "duration",
          description:
            "display duration, millisecond. If set to 0, it will not turn off automatically",
          type: "number",
          acceptedvalues: "—",
          default: "3000",
        },
        {
          attribute: "showClose",
          description: "whether to show a close button",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "center",
          description: "whether to center the text",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "onClose",
          description:
            "callback function when closed with the message instance as the parameter",
          type: "function",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "offset",
          description: "set the distance to the top of viewport",
          type: "number",
          acceptedvalues: "—",
          default: "20",
        },
      ],
      methodApi: [{ method: "close", description: "close the Message" }],
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
    open() {
      this.$message("This is a message.");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
      });
    },
    open1() {
      this.$message("This is a message.");
    },
    open2() {
      this.$message({
        message: "Congrats, this is a success message.",
        type: "success",
      });
    },

    open3() {
      this.$message({
        message: "Warning, this is a warning message.",
        type: "warning",
      });
    },

    open4() {
      this.$message.error("Oops, this is a error message.");
    },
    opena() {
      this.$message({
        showClose: true,
        message: "This is a message.",
      });
    },

    openb() {
      this.$message({
        showClose: true,
        message: "Congrats, this is a success message.",
        type: "success",
      });
    },

    openc() {
      this.$message({
        showClose: true,
        message: "Warning, this is a warning message.",
        type: "warning",
      });
    },

    opend() {
      this.$message({
        showClose: true,
        message: "Oops, this is a error message.",
        type: "error",
      });
    },
    openCenter() {
      this.$message({
        message: "Centered text",
        center: true,
      });
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: "<strong>This is <i>HTML</i> string</strong>",
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
