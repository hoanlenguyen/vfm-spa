<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Dialog</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Informs users while preserving the current page state.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Dialog pops up a dialog box, and it's quite customizable.</p>
            <p class="mt-2 text-lg">
              Set the
              <code>visible</code> attribute with a
              <code>Boolean</code>, and Dialog shows when it is
              <code>true</code>. The Dialog has two parts:
              <code>body</code> and
              <code>footer</code>, and the latter requires a
              <code>slot</code> named
              <code>footer</code>. The optional
              <code>title</code> attribute (empty by default) is for defining a title. Finally, this example demonstrates how
              <code>before-close</code> is used.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button
                  type="primary"
                  plain
                  @click="dialogVisible = true"
                >click to Open the Dialog</el-button>

                <el-dialog
                  title="Tips"
                  :visible.sync="dialogVisible"
                  width="350px"
                  :before-close="handleClose"
                >
                  <span>This is a message</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                  </span>
                </el-dialog>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;primary&#x22; plain @click=&#x22;dialogVisible = true&#x22;&#x3E;click to Open the Dialog&#x3C;/el-button&#x3E;

&#x3C;el-dialog
  title=&#x22;Tips&#x22;
  :visible.sync=&#x22;dialogVisible&#x22;
  width=&#x22;30%&#x22;
  :before-close=&#x22;handleClose&#x22;&#x3E;
  &#x3C;span&#x3E;This is a message&#x3C;/span&#x3E;
  &#x3C;span slot=&#x22;footer&#x22; class=&#x22;dialog-footer&#x22;&#x3E;
    &#x3C;el-button @click=&#x22;dialogVisible = false&#x22;&#x3E;Cancel&#x3C;/el-button&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;dialogVisible = false&#x22;&#x3E;Confirm&#x3C;/el-button&#x3E;
  &#x3C;/span&#x3E;
&#x3C;/el-dialog&#x3E;
                </code>
            </pre>
            </div>
          </div>
          <div class="mt-3">
            <p>
              <code>before-close</code> only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the
              <code>footer</code> named slot, you can add what you would do with
              <code>before-close</code> in the buttons' click event handler.
            </p>
          </div>

          <div>
            <h3 class="mt-8x">Customizations</h3>
            <p
              class="mt-2 text-lg"
            >The content of Dialog can be anything, even a table or a form. This example shows how to use Element Table and Form with Dialog.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <!-- Table -->
                <el-button
                  class="m-2"
                  type="primary"
                  plain
                  @click="dialogTableVisible = true"
                >Open a Table nested Dialog</el-button>

                <el-dialog :fullscreen="device == 'mobile'" class="is-fullscreen-mobile" title="Shipping address" :visible.sync="dialogTableVisible">
                  <el-table :data="gridData">
                    <el-table-column property="date" label="Date" width="150"></el-table-column>
                    <el-table-column property="name" label="Name" width="200"></el-table-column>
                    <el-table-column property="address" label="Address" min-width="200px"></el-table-column>
                  </el-table>
                </el-dialog>

                <!-- Form -->
                <el-button
                  class="m-2"
                  type="primary"
                  plain
                  @click="dialogFormVisible = true"
                >Open a Form nested Dialog</el-button>

                <el-dialog :fullscreen="device == 'mobile'" title="Shipping address" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="Promotion name" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Zones" :label-width="formLabelWidth">
                      <el-select v-model="form.region" placeholder="Please select a zone">
                        <el-option label="Zone No.1" value="shanghai"></el-option>
                        <el-option label="Zone No.2" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
                  </span>
                </el-dialog>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;!-- Table --&#x3E;
&#x3C;el-button type=&#x22;primary&#x22; plain @click=&#x22;dialogTableVisible = true&#x22;&#x3E;open a Table nested Dialog&#x3C;/el-button&#x3E;

&#x3C;el-dialog title=&#x22;Shipping address&#x22; :visible.sync=&#x22;dialogTableVisible&#x22;&#x3E;
  &#x3C;el-table :data=&#x22;gridData&#x22;&#x3E;
    &#x3C;el-table-column property=&#x22;date&#x22; label=&#x22;Date&#x22; width=&#x22;150&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
    &#x3C;el-table-column property=&#x22;name&#x22; label=&#x22;Name&#x22; width=&#x22;200&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
    &#x3C;el-table-column property=&#x22;address&#x22; label=&#x22;Address&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
  &#x3C;/el-table&#x3E;
&#x3C;/el-dialog&#x3E;

&#x3C;!-- Form --&#x3E;
&#x3C;el-button type=&#x22;primary&#x22; plain @click=&#x22;dialogFormVisible = true&#x22;&#x3E;open a Form nested Dialog&#x3C;/el-button&#x3E;

&#x3C;el-dialog title=&#x22;Shipping address&#x22; :visible.sync=&#x22;dialogFormVisible&#x22;&#x3E;
  &#x3C;el-form :model=&#x22;form&#x22;&#x3E;
    &#x3C;el-form-item label=&#x22;Promotion name&#x22; :label-width=&#x22;formLabelWidth&#x22;&#x3E;
      &#x3C;el-input v-model=&#x22;form.name&#x22; autocomplete=&#x22;off&#x22;&#x3E;&#x3C;/el-input&#x3E;
    &#x3C;/el-form-item&#x3E;
    &#x3C;el-form-item label=&#x22;Zones&#x22; :label-width=&#x22;formLabelWidth&#x22;&#x3E;
      &#x3C;el-select v-model=&#x22;form.region&#x22; placeholder=&#x22;Please select a zone&#x22;&#x3E;
        &#x3C;el-option label=&#x22;Zone No.1&#x22; value=&#x22;shanghai&#x22;&#x3E;&#x3C;/el-option&#x3E;
        &#x3C;el-option label=&#x22;Zone No.2&#x22; value=&#x22;beijing&#x22;&#x3E;&#x3C;/el-option&#x3E;
      &#x3C;/el-select&#x3E;
    &#x3C;/el-form-item&#x3E;
  &#x3C;/el-form&#x3E;
  &#x3C;span slot=&#x22;footer&#x22; class=&#x22;dialog-footer&#x22;&#x3E;
    &#x3C;el-button @click=&#x22;dialogFormVisible = false&#x22;&#x3E;Cancel&#x3C;/el-button&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;dialogFormVisible = false&#x22;&#x3E;Confirm&#x3C;/el-button&#x3E;
  &#x3C;/span&#x3E;
&#x3C;/el-dialog&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Nested Dialog</h3>
            <p class="mt-2 text-lg">
              If a Dialog is nested in another Dialog,
              <code>append-to-body</code> is required.
            </p>
            <p class="mt-2 text-lg">
              Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set
              <code>append-to-body</code> of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button type="primary" plain @click="outerVisible = true">Open the outer Dialog</el-button>

                <el-dialog width="350px" title="Outer Dialog" :visible.sync="outerVisible">
                  <el-dialog
                    width="350px"
                    title="Inner Dialog"
                    :visible.sync="innerVisible"
                    append-to-body
                  ></el-dialog>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="outerVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="innerVisible = true">Open the inner Dialog</el-button>
                  </div>
                </el-dialog>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-button type=&#x22;primary&#x22; plain @click=&#x22;outerVisible = true&#x22;&#x3E;Open the outer Dialog&#x3C;/el-button&#x3E;
  
  &#x3C;el-dialog title=&#x22;Outer Dialog&#x22; :visible.sync=&#x22;outerVisible&#x22;&#x3E;
    &#x3C;el-dialog
        width=&#x22;30%&#x22;
        title=&#x22;Inner Dialog&#x22;
        :visible.sync=&#x22;innerVisible&#x22;
        append-to-body&#x3E;
    &#x3C;/el-dialog&#x3E;
    &#x3C;div slot=&#x22;footer&#x22; class=&#x22;dialog-footer&#x22;&#x3E;
      &#x3C;el-button @click=&#x22;outerVisible = false&#x22;&#x3E;Cancel&#x3C;/el-button&#x3E;
      &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;innerVisible = true&#x22;&#x3E;Open the inner Dialog&#x3C;/el-button&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/el-dialog&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Centered content</h3>
            <p class="mt-2 text-lg">Dialog's content can be centered.</p>
            <p class="mt-2 text-lg">
              Setting
              <code>center</code> to
              <code>true</code> will center dialog's header and footer horizontally.
              <code>center</code> only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button
                  type="primary"
                  plain
                  @click="centerDialogVisible = true"
                >Click to Open the Dialog</el-button>

                <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="350px" center>
                  <span>It should be noted that the content will not be aligned in center by default</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
                  </span>
                </el-dialog>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;primary&#x22; plain @click=&#x22;centerDialogVisible = true&#x22;&#x3E;Click to Open the Dialog&#x3C;/el-button&#x3E;

&#x3C;el-dialog
  title=&#x22;Warning&#x22;
  :visible.sync=&#x22;centerDialogVisible&#x22;
  width=&#x22;30%&#x22;
  center&#x3E;
  &#x3C;span&#x3E;It should be noted that the content will not be aligned in center by default&#x3C;/span&#x3E;
  &#x3C;span slot=&#x22;footer&#x22; class=&#x22;dialog-footer&#x22;&#x3E;
    &#x3C;el-button @click=&#x22;centerDialogVisible = false&#x22;&#x3E;Cancel&#x3C;/el-button&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; @click=&#x22;centerDialogVisible = false&#x22;&#x3E;Confirm&#x3C;/el-button&#x3E;
  &#x3C;/span&#x3E;
&#x3C;/el-dialog&#x3E;
                </code>
            </pre>
            </div>
          </div>
          <div class="mt-3">
            <p>
              The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using
              <code>ref</code>, do it in the
              <code>open</code> event callback.
            </p>
          </div>
          <div class="mt-3">
            <p>
              If the variable bound to
              <code>visible</code> is managed in Vuex store, the
              <code>.sync</code> can not work properly. In this case, please remove the
              <code>.sync</code> modifier, listen to
              <code>open</code> and
              <code>close</code> events of Dialog, and commit Vuex mutations to update the value of that variable in the event handlers.
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
import { mapGetters } from "vuex";
import VueCodeHighlight from "vue-code-highlight";
Vue.use(VueCodeHighlight); // registers the v-highlight directive
import "vue-code-highlight/themes/prism-okaidia.css";

export default {
  name: "Dialog",
  components: {},
  data() {
    return {
      centerDialogVisible: false,
      outerVisible: false,
      innerVisible: false,
      gridData: [
        {
          date: "2016-05-02",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
        {
          date: "2016-05-04",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
        {
          date: "2016-05-01",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
        {
          date: "2016-05-03",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      dialogVisible: false,
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "visible",
          description: "visibility of Dialog, supports the .sync modifier",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "title",
          description:
            "title of Dialog. Can also be passed with a named slot (see the following table)",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "width",
          description: "width of Dialog",
          type: "string",
          acceptedvalues: "—",
          default: "50%",
        },
        {
          attribute: "fullscreen",
          description: "whether the Dialog takes up full screen",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "top",
          description: "value for <code>margin-top</code> of Dialog CSS",
          type: "string",
          acceptedvalues: "—",
          default: "15vh",
        },
        {
          attribute: "modal",
          description: "whether a mask is displayed",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "modal-append-to-body",
          description:
            "whether to append modal to body element. If false, the modal will be appended to Dialog's parent element",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "append-to-body",
          description:
            "whether to append Dialog itself to body. A nested Dialog should have this attribute set to <code>true</code>",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "lock-scroll",
          description:
            "whether scroll of body is disabled while Dialog is displayed",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "custom-class",
          description: "custom class names for Dialog",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "close-on-click-modal",
          description: "whether the Dialog can be closed by clicking the mask",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "close-on-press-escape",
          description: "whether the Dialog can be closed by pressing ESC",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "show-close",
          description: "whether to show a close button",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "before-close",
          description:
            "callback before Dialog closes, and it will prevent Dialog from closing",
          type: "function(done)，done is used to close the Dialog",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "center",
          description: "whether to align the header and footer in center",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "destroy-on-close",
          description: "Destroy elements in Dialog when closed",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
      ],
      slotApi: [
        { name: "—", description: "content of Dialog" },
        { name: "title", description: "content of the Dialog title" },
        { name: "footer", description: "content of the Dialog footer" },
      ],
      eventApi: [
        {
          eventname: "open",
          description: "triggers when the Dialog opens",
          parameters: "—",
        },
        {
          eventname: "opened",
          description: "triggers when the Dialog opening animation ends",
          parameters: "—",
        },
        {
          eventname: "close",
          description: "triggers when the Dialog closes",
          parameters: "—",
        },
        {
          eventname: "closed",
          description: "triggers when the Dialog closing animation ends",
          parameters: "—",
        },
      ],
    };
  },
computed: {
    ...mapGetters(["device"]),
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
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
