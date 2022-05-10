<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Message Box</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >A set of modal boxes simulating system message box, mainly for alerting information, confirm operations and prompting messages.</p>
          <div class="mt-3">
            <p>
              By design MessageBox provides simulations of system's
              <code>alert</code>,
              <code>confirm</code> and
              <code>prompt</code>，so it's content should be simple. For more complicated contents, please use Dialog.
            </p>
          </div>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Alert</h3>
            <p class="mt-2 text-lg">Alert interrupts user operation until the user confirms.</p>
            <p class="mt-2 text-lg">
              Open an alert by calling the
              <code>$alert</code> method. It simulates the system's
              <code>alert</code>, and cannot be closed by pressing ESC or clicking outside the box. In this example, two parameters
              <code>message</code> and
              <code>title</code> are received. It is worth mentioning that when the box is closed, it returns a
              <code>Promise</code> object for further processing. If you are not sure if your target browsers support
              <code>Promise</code>, you should import a third party polyfill or use callbacks instead like this example.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button type="info" plain @click="open">Click to open the Message Box</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;text&#x22; @click=&#x22;open&#x22;&#x3E;Click to open the Message Box&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Confirm</h3>
            <p class="mt-2 text-lg">Confirm is used to ask users' confirmation.</p>
            <p class="mt-2 text-lg">
              Call
              <code>$confirm</code> method to open a confirm, and it simulates the system's
              <code>confirm</code>. We can also highly customize Message Box by passing a third attribute
              <code>options</code> which is a literal object. The attribute
              <code>type</code> indicates the message type, and it's value can be
              <code>success</code>,
              <code>error</code>,
              <code>info</code> and
              <code>warning</code>. Note that the second attribute
              <code>title</code> must be a
              <code>string</code>, and if it is an
              <code>object</code>, it will be handled as the attribute
              <code>options</code>. Here we use
              <code>Promise</code> to handle further processing.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button type="info" plain @click="open">Click to open the Message Box</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;text&#x22; @click=&#x22;open&#x22;&#x3E;Click to open the Message Box&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Prompt</h3>
            <p class="mt-2 text-lg">Prompt is used when user input is required.</p>
            <p class="mt-2 text-lg">
              Call
              <code>$prompt</code> method to open a prompt, and it simulates the system's
              <code>prompt</code>. You can use
              <code>inputPattern</code> parameter to specify your own RegExp pattern. Use
              <code>inputValidator</code> to specify validation method, and it should return
              <code>Boolean</code> or
              <code>String</code>. Returning
              <code>false</code> or
              <code>String</code> means the validation has failed, and the string returned will be used as the
              <code>inputErrorMessage</code>. In addition, you can customize the placeholder of the input box with
              <code>inputPlaceholder</code> parameter.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button type="info" plain @click="open">Click to open Message Box</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;text&#x22; @click=&#x22;open&#x22;&#x3E;Click to open Message Box&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Customization</h3>
            <p class="mt-2 text-lg">Can be customized to show various content.</p>
            <p class="mt-2 text-lg">
              The three methods mentioned above are repackagings of the
              <code>$msgbox</code> method. This example calls
              <code>$msgbox</code> method directly using the
              <code>showCancelButton</code> attribute, which is used to indicate if a cancel button is displayed. Besides we can use
              <code>cancelButtonClass</code> to add a custom style and
              <code>cancelButtonText</code> to customize the button text (the confirm button also has these fields, and a complete list of fields can be found at the end of this documentation). This example also uses the
              <code>beforeClose</code> attribute. It is a method and will be triggered when the MessageBox instance will be closed, and its execution will stop the instance from closing. It has three parameters:
              <code>action</code>,
              <code>instance</code> and
              <code>done</code>. Using it enables you to manipulate the instance before it closes, e.g. activating
              <code>loading</code> for confirm button; you can invoke the
              <code>done</code> method to close the MessageBox instance (if
              <code>done</code> is not called inside
              <code>beforeClose</code>, the instance will not be closed).
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button type="info" plain @click="open">Click to open Message Box</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;text&#x22; @click=&#x22;open&#x22;&#x3E;Click to open Message Box&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
            <div class="mt-3">
              <p>
                The content of MessageBox can be
                <code>VNode</code>, allowing us to pass custom components. When opening the MessageBox, Vue compares new
                <code>VNode</code> with old
                <code>VNode</code>, then figures out how to efficiently update the UI, so the components may not be completely re-rendered (
                <a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>). In this case, you can add a unique key to
                <code>VNode</code> each time MessageBox opens:
                <a href="https://jsfiddle.net/zhiyang/ezmhq2ef">example</a>.
              </p>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Use HTML String</h3>
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
                <el-button type="info" plain @click="open">Click to open Message Box</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;text&#x22; @click=&#x22;open&#x22;&#x3E;Click to open Message Box&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
            <div class="mt-3">
              <p>
                Although
                <code>message</code> property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to
                <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS attacks</a>. So when
                <code>dangerouslyUseHTMLString</code> is on, please make sure the content of
                <code>message</code> is trusted, and
                <strong>never</strong> assign
                <code>message</code> to user-provided content.
              </p>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Distinguishing cancel and close</h3>
            <p
              class="mt-2 text-lg"
            >In some cases, clicking the cancel button and close button may have different meanings.</p>
            <p class="mt-2 text-lg">
              By default, the parameters of Promise's reject callback and
              <code>callback</code> are 'cancel' when the user cancels (clicking the cancel button) and closes (clicking the close button or mask layer, pressing the ESC key) the MessageBox. If
              <code>distinguishCancelAndClose</code> is set to true, the parameters of the above two operations are 'cancel' and 'close' respectively.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button type="info" plain @click="open">Click to open Message Box</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;text&#x22; @click=&#x22;open&#x22;&#x3E;Click to open Message Box&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Centered content</h3>
            <p class="mt-2 text-lg">Content of MessageBox can be centered.</p>
            <p class="mt-2 text-lg">
              Setting
              <code>center</code> to
              <code>true</code> will center the content
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button type="info" plain @click="open">Click to open Message Box</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;text&#x22; @click=&#x22;open&#x22;&#x3E;Click to open Message Box&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Global method</h3>
            <p class="mt-2 text-lg">
              If Element is fully imported, it will add the following global methods for Vue.prototype:
              <code>$msgbox</code>,
              <code>$alert</code>,
              <code>$confirm</code> and
              <code>$prompt</code>. So in a Vue instance you can call
              <code>MessageBox</code> like what we did in this page. The parameters are:
            </p>
            <li>
              <code>$msgbox(options)</code>
            </li>
            <li>
              <code>$alert(message, title, options)</code> or
              <code>$alert(message, options)</code>
            </li>
            <li>
              <code>$confirm(message, title, options)</code> or
              <code>$confirm(message, options)</code>
            </li>
          </div>

          <div>
            <h3 class="mt-8x">Local import</h3>
            <p class="mt-2 text-lg">
              If you prefer importing
              <code>MessageBox</code> on demand:
            </p>
            <div v-highlight language="js" class="mt-4x">
              <pre class="language-js" v-pre>
                <code>
                    import { MessageBox } from &#x27;element-ui&#x27;;
                </code>
            </pre>
            </div>
            <p class="mt-2 text-lg">
              The corresponding methods are:
              <code>MessageBox</code>,
              <code>MessageBox.alert</code>,
              <code>MessageBox.confirm</code> and
              <code>MessageBox.prompt</code>. The parameters are the same as above.
            </p>
          </div>

          <div>
            <h3 class="mt-8x">Options</h3>
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
  name: "MessageBox",
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "title",
          description: "title of the MessageBox",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "message",
          description: "content of the MessageBox",
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
          attribute: "type",
          description: "message type, used for icon display",
          type: "string",
          acceptedvalues: "success / info / warning / error",
          default: "—",
        },
        {
          attribute: "iconClass",
          description: "custom icon's class, overrides <code>type</code>",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "customClass",
          description: "custom class name for MessageBox",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "callback",
          description:
            "MessageBox closing callback if you don't prefer Promise",
          type:
            "function(action), where action can be 'confirm', 'cancel' or 'close', and <code>instance</code> is the MessageBox instance. You can access to that instance's attributes and methods",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "showClose",
          description: "whether to show close icon of MessageBox",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "beforeClose",
          description:
            "callback before MessageBox closes, and it will prevent MessageBox from closing",
          type:
            "function(action, instance, done), where <code>action</code> can be 'confirm', 'cancel' or 'close'; <code>instance</code> is the MessageBox instance, and you can access to that instance's attributes and methods; <code>done</code> is for closing the instance",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "distinguishCancelAndClose",
          description:
            "whether to distinguish canceling and closing the MessageBox",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "lockScroll",
          description: "whether to lock body scroll when MessageBox prompts",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "showCancelButton",
          description: "whether to show a cancel button",
          type: "boolean",
          acceptedvalues: "—",
          default: "false (true when called with confirm and prompt)",
        },
        {
          attribute: "showConfirmButton",
          description: "whether to show a confirm button",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "cancelButtonText",
          description: "text content of cancel button",
          type: "string",
          acceptedvalues: "—",
          default: "Cancel",
        },
        {
          attribute: "confirmButtonText",
          description: "text content of confirm button",
          type: "string",
          acceptedvalues: "—",
          default: "OK",
        },
        {
          attribute: "cancelButtonClass",
          description: "custom class name of cancel button",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "confirmButtonClass",
          description: "custom class name of confirm button",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "closeOnClickModal",
          description: "whether MessageBox can be closed by clicking the mask",
          type: "boolean",
          acceptedvalues: "—",
          default: "true (false when called with alert)",
        },
        {
          attribute: "closeOnPressEscape",
          description: "whether MessageBox can be closed by pressing the ESC",
          type: "boolean",
          acceptedvalues: "—",
          default: "true (false when called with alert)",
        },
        {
          attribute: "closeOnHashChange",
          description: "whether to close MessageBox when hash changes",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "showInput",
          description: "whether to show an input",
          type: "boolean",
          acceptedvalues: "—",
          default: "false (true when called with prompt)",
        },
        {
          attribute: "inputPlaceholder",
          description: "placeholder of input",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "inputType",
          description: "type of input",
          type: "string",
          acceptedvalues: "—",
          default: "text",
        },
        {
          attribute: "inputValue",
          description: "initial value of input",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "inputPattern",
          description: "regexp for the input",
          type: "regexp",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "inputValidator",
          description:
            "validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage",
          type: "function",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "inputErrorMessage",
          description: "error message when validation fails",
          type: "string",
          acceptedvalues: "—",
          default: "Illegal input",
        },
        {
          attribute: "center",
          description: "whether to align the content in center",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "roundButton",
          description: "whether to use round button",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
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
    open() {
      this.$alert("This is a message", "Title", {
        confirmButtonText: "OK",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    open() {
      this.$confirm(
        "This will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
    open() {
      this.$prompt("Please input your e-mail", "Tip", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "Invalid Email",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "Your email is:" + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Input canceled",
          });
        });
    },
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: "Message",
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "Loading...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message({
          type: "info",
          message: "action: " + action,
        });
      });
    },
    open() {
      this.$alert(
        "<strong>This is <i>HTML</i> string</strong>",
        "HTML String",
        {
          dangerouslyUseHTMLString: true,
        }
      );
    },
    open() {
      this.$confirm("You have unsaved changes, save and proceed?", "Confirm", {
        distinguishCancelAndClose: true,
        confirmButtonText: "Save",
        cancelButtonText: "Discard Changes",
      })
        .then(() => {
          this.$message({
            type: "info",
            message: "Changes saved. Proceeding to a new route.",
          });
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message:
              action === "cancel"
                ? "Changes discarded. Proceeding to a new route."
                : "Stay in the current route",
          });
        });
    },
    open() {
      this.$confirm(
        "This will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
          center: true,
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
  },
};
</script>