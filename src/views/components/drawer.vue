<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Drawer</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">
            Sometimes,
            <code>Dialog</code> does not always satisfy our requirements, let's say you have a massive form, or you need space to display something like
            <code>terms &amp; conditions</code>,
            <code>Drawer</code> has almost identical API with
            <code>Dialog</code>, but it introduces different user experience.
          </p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Callout a temporary drawer, from multiple direction.</p>
            <p class="mt-2 text-lg">
              You must set
              <code>visible</code> for
              <code>Drawer</code> like
              <code>Dialog</code> does to control the visibility of
              <code>Drawer</code> itself, it's
              <code>boolean</code> type.
              <code>Drawer</code> has to parts:
              <code>title</code> &amp;
              <code>body</code>, the
              <code>title</code> is a named slot, you can also set the title through attribute named
              <code>title</code>, default to an empty string, the
              <code>body</code> part is the main area of
              <code>Drawer</code>, which contains user defined content. When opening,
              <code>Drawer</code> expand itself from the
              <strong>right corner to left</strong> which size is
              <strong>30%</strong> of the browser window by default. You can change that default behavior by setting
              <code>direction</code> and
              <code>size</code> attribute. This show case also demonstrated how to use the
              <code>before-close</code> API, check the Attribute section for more detail.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-radio-group v-model="direction1" class="d-flex flex-column">
                  <el-radio label="ltr" class="my-3">left to right</el-radio>
                  <el-radio label="rtl" class="my-3">right to left</el-radio>
                  <el-radio label="ttb" class="my-3">top to bottom</el-radio>
                  <el-radio label="btt" class="my-3">bottom to top</el-radio>
                </el-radio-group>

                <el-button @click="drawer1 = true" type="primary" class="m-2">Open</el-button>

                <el-drawer
                  title="I am the title"
                  :visible.sync="drawer1"
                  :direction="direction1"
                  :before-close="handleClose1"
                >
                  <span class="p-5">Hi, there!</span>
                </el-drawer>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-radio-group v-model=&#x22;direction&#x22;&#x3E;
  &#x3C;el-radio label=&#x22;ltr&#x22;&#x3E;left to right&#x3C;/el-radio&#x3E;
  &#x3C;el-radio label=&#x22;rtl&#x22;&#x3E;right to left&#x3C;/el-radio&#x3E;
  &#x3C;el-radio label=&#x22;ttb&#x22;&#x3E;top to bottom&#x3C;/el-radio&#x3E;
  &#x3C;el-radio label=&#x22;btt&#x22;&#x3E;bottom to top&#x3C;/el-radio&#x3E;
&#x3C;/el-radio-group&#x3E;

&#x3C;el-button @click=&#x22;drawer = true&#x22; type=&#x22;primary&#x22; style=&#x22;margin-left: 16px;&#x22;&#x3E;
  open
&#x3C;/el-button&#x3E;

&#x3C;el-drawer
  title=&#x22;I am the title&#x22;
  :visible.sync=&#x22;drawer&#x22;
  :direction=&#x22;direction&#x22;
  :before-close=&#x22;handleClose&#x22;&#x3E;
  &#x3C;span&#x3E;Hi, there!&#x3C;/span&#x3E;
&#x3C;/el-drawer&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">No Title</h3>
            <p
              class="mt-2 text-lg"
            >When you no longer need a title, you can remove title from drawer.</p>
            <p class="mt-2 text-lg">
              Set the
              <code>withHeader</code> attribute to
              <strong>false</strong>, you can remove the title from drawer, thus your drawer can have more space on screen. If you want to be accessible, make sure to set the
              <code>title</code> attribute.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button @click="drawer2 = true" type="primary" style="margin-left: 16px;">open</el-button>

                <el-drawer title="I am the title" :visible.sync="drawer2" :with-header="false">
                  <span class="p-5">Hi, there!</span>
                </el-drawer>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button @click=&#x22;drawer = true&#x22; type=&#x22;primary&#x22; style=&#x22;margin-left: 16px;&#x22;&#x3E;
  open
&#x3C;/el-button&#x3E;

&#x3C;el-drawer
  title=&#x22;I am the title&#x22;
  :visible.sync=&#x22;drawer&#x22;
  :with-header=&#x22;false&#x22;&#x3E;
  &#x3C;span&#x3E;Hi there!&#x3C;/span&#x3E;
&#x3C;/el-drawer&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Customization Content</h3>
            <p class="mt-2 text-lg">
              Like
              <code>Dialog</code>,
              <code>Drawer</code> can do many diverse interaction as you wanted.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button type="primary" class="m-2" plain @click="table = true">Open Drawer with nested table</el-button>
                <el-button type="primary" class="m-2" plain @click="dialog = true">Open Drawer with nested form</el-button>
                <el-drawer
                  title="I have a nested table inside!"
                  :visible.sync="table"
                  direction="rtl"
                  size="50%"
                >
                  <div class="p-5">
                    <el-table :data="gridData">
                      <el-table-column property="date" label="Date" width="150"></el-table-column>
                      <el-table-column property="name" label="Name" width="200"></el-table-column>
                      <el-table-column property="address" label="Address"></el-table-column>
                    </el-table>
                  </div>
                </el-drawer>

                <el-drawer
                  title="I have a nested form inside!"
                  :before-close="handleClose2"
                  :visible.sync="dialog"
                  direction="ltr"
                  custom-class="demo-drawer"
                  ref="drawer"
                >
                  <div class="p-5 d-flex flex-column h-100">
                    <el-form :model="form" class="flex-grow-1">
                      <el-form-item label="Name" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="Area" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="Please select activity area">
                          <el-option label="Area1" value="shanghai"></el-option>
                          <el-option label="Area2" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-form>
                    <div class="d-flex">
                      <el-button class="flex-grow-1" @click="cancelForm">Cancel</el-button>
                      <el-button
                        class="flex-grow-1"
                        type="primary"
                        @click="$refs.drawer.closeDrawer()"
                        :loading="loading"
                      >{{ loading ? 'Submitting ...' : 'Submit' }}</el-button>
                    </div>
                  </div>
                </el-drawer>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button type=&#x22;primary&#x22; plain @click=&#x22;table = true&#x22;&#x3E;Open Drawer with nested table&#x3C;/el-button&#x3E;
&#x3C;el-button type=&#x22;primary&#x22; plain @click=&#x22;dialog = true&#x22;&#x3E;Open Drawer with nested form&#x3C;/el-button&#x3E;
&#x3C;el-drawer
  title=&#x22;I have a nested table inside!&#x22;
  :visible.sync=&#x22;table&#x22;
  direction=&#x22;rtl&#x22;
  size=&#x22;50%&#x22;
&#x3E;
  &#x3C;div class=&#x22;p-5&#x22;&#x3E;
    &#x3C;el-table :data=&#x22;gridData&#x22;&#x3E;
      &#x3C;el-table-column property=&#x22;date&#x22; label=&#x22;Date&#x22; width=&#x22;150&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
      &#x3C;el-table-column property=&#x22;name&#x22; label=&#x22;Name&#x22; width=&#x22;200&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
      &#x3C;el-table-column property=&#x22;address&#x22; label=&#x22;Address&#x22;&#x3E;&#x3C;/el-table-column&#x3E;
    &#x3C;/el-table&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/el-drawer&#x3E;

&#x3C;el-drawer
  title=&#x22;I have a nested form inside!&#x22;
  :before-close=&#x22;handleClose2&#x22;
  :visible.sync=&#x22;dialog&#x22;
  direction=&#x22;ltr&#x22;
  custom-class=&#x22;demo-drawer&#x22;
  ref=&#x22;drawer&#x22;
&#x3E;
  &#x3C;div class=&#x22;p-5 d-flex flex-column h-100&#x22;&#x3E;
    &#x3C;el-form :model=&#x22;form&#x22; class=&#x22;flex-grow-1&#x22;&#x3E;
      &#x3C;el-form-item label=&#x22;Name&#x22; :label-width=&#x22;formLabelWidth&#x22;&#x3E;
        &#x3C;el-input v-model=&#x22;form.name&#x22; autocomplete=&#x22;off&#x22;&#x3E;&#x3C;/el-input&#x3E;
      &#x3C;/el-form-item&#x3E;
      &#x3C;el-form-item label=&#x22;Area&#x22; :label-width=&#x22;formLabelWidth&#x22;&#x3E;
        &#x3C;el-select v-model=&#x22;form.region&#x22; placeholder=&#x22;Please select activity area&#x22;&#x3E;
          &#x3C;el-option label=&#x22;Area1&#x22; value=&#x22;shanghai&#x22;&#x3E;&#x3C;/el-option&#x3E;
          &#x3C;el-option label=&#x22;Area2&#x22; value=&#x22;beijing&#x22;&#x3E;&#x3C;/el-option&#x3E;
        &#x3C;/el-select&#x3E;
      &#x3C;/el-form-item&#x3E;
    &#x3C;/el-form&#x3E;
    &#x3C;div class=&#x22;d-flex&#x22;&#x3E;
      &#x3C;el-button class=&#x22;flex-grow-1&#x22; @click=&#x22;cancelForm&#x22;&#x3E;Cancel&#x3C;/el-button&#x3E;
      &#x3C;el-button
        class=&#x22;flex-grow-1&#x22;
        type=&#x22;primary&#x22;
        @click=&#x22;$refs.drawer.closeDrawer()&#x22;
        :loading=&#x22;loading&#x22;
      &#x3E;{{ loading ? &#x27;Submitting ...&#x27; : &#x27;Submit&#x27; }}&#x3C;/el-button&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/el-drawer&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Nested Drawer</h3>
            <p class="mt-2 text-lg">
              You can also have multiple layer of
              <code>Drawer</code> just like
              <code>Dialog</code>.
            </p>
            <p class="mt-2 text-lg">
              If you need multiple Drawer in different layer, you must set the
              <code>append-to-body</code> attribute to
              <strong>true</strong>
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button @click="drawer3 = true" type="primary" style="margin-left: 16px;">open</el-button>

                <el-drawer title="I'm outer Drawer" :visible.sync="drawer3" size="50%">
                  <div>
                    <div class="p-5"><el-button @click="innerDrawer = true">Click me!</el-button></div>
                    <el-drawer
                      title="I'm inner Drawer"
                      :append-to-body="true"
                      :before-close="handleClose3"
                      :visible.sync="innerDrawer"
                    >
                      <p class="p-5">Hello</p>
                    </el-drawer>
                  </div>
                </el-drawer>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-button @click=&#x22;drawer = true&#x22; type=&#x22;primary&#x22; style=&#x22;margin-left: 16px;&#x22;&#x3E;
  open
&#x3C;/el-button&#x3E;

&#x3C;el-drawer
  title=&#x22;I&#x27;m outer Drawer&#x22;
  :visible.sync=&#x22;drawer&#x22;
  size=&#x22;50%&#x22;&#x3E;
  &#x3C;div&#x3E;
   &#x3C;el-button @click=&#x22;innerDrawer = true&#x22;&#x3E;Click me!&#x3C;/el-button&#x3E;
   &#x3C;el-drawer
     title=&#x22;I&#x27;m inner Drawer&#x22;
     :append-to-body=&#x22;true&#x22;
     :before-close=&#x22;handleClose&#x22;
     :visible.sync=&#x22;innerDrawer&#x22;&#x3E;
     &#x3C;p&#x3E;_(:&#x437;&#x309D;&#x2220;)_&#x3C;/p&#x3E;
   &#x3C;/el-drawer&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/el-drawer&#x3E;
                </code>
            </pre>
            </div>
          </div>
          <div class="mt-3">
            <p>
              The content inside Drawer should be lazy rendered, which means that the content inside Drawer will not impact the initial render performance, therefore any DOM operation should be performed through
              <code>ref</code> or after
              <code>open</code> event emitted.
            </p>
          </div>
          <div class="mt-3">
            <p>
              Drawer provides an API called
              <code>destroyOnClose</code>, which is a flag variable that indicates should destroy the children content inside Drawer after Drawer was closed. You can use this API when you need your
              <code>mounted</code> life cycle to be called every time the Drawer opens.
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
              <el-table-column label="Parameter" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameter" />
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
              <el-table-column label="Acceptable values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptablevalues" />
                </template>
              </el-table-column>
              <el-table-column label="Defaults" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.defaults" />
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
            <h3 class="mt-8x">Methods</h3>
            <el-table :data="methodsApi" class="mt-2">
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
              <el-table-column label="Parameter">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameter" />
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
  name: "Drawer",
  components: {},
  data() {
    return {
      drawer3: false,
      innerDrawer: false,
      table: false,
      dialog: false,
      loading: false,
      gridData: [
        {
          date: "2016-05-02",
          name: "Peter Parker",
          address: "Queens, New York City",
        },
        {
          date: "2016-05-04",
          name: "Peter Parker",
          address: "Queens, New York City",
        },
        {
          date: "2016-05-01",
          name: "Peter Parker",
          address: "Queens, New York City",
        },
        {
          date: "2016-05-03",
          name: "Peter Parker",
          address: "Queens, New York City",
        },
      ],
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
      formLabelWidth: "80px",
      timer: null,
      drawer2: false,
      drawer1: false,
      direction1: "rtl",
      loadingIndexes: [10],
      attributeApi: [
        {
          parameter: "append-to-body",
          description:
            "Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to <strong>true</strong>",
          type: "boolean",
          acceptablevalues: "—",
          defaults: "false",
        },
        {
          parameter: "before-close",
          description: "If set, closing procedure will be halted",
          type:
            "function(done), done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure",
          acceptablevalues: "—",
          defaults: "—",
        },
        {
          parameter: "close-on-press-escape",
          description: "Indicates whether Drawer can be closed by pressing ESC",
          type: "boolean",
          acceptablevalues: "—",
          defaults: "true",
        },
        {
          parameter: "custom-class",
          description: "Extra class names for Drawer",
          type: "string",
          acceptablevalues: "—",
          defaults: "—",
        },
        {
          parameter: "destroy-on-close",
          description:
            "Indicates whether children should be destroyed after Drawer closed",
          type: "boolean",
          acceptablevalues: "-",
          defaults: "false",
        },
        {
          parameter: "modal",
          description: "Should show shadowing layer",
          type: "boolean",
          acceptablevalues: "—",
          defaults: "true",
        },
        {
          parameter: "modal-append-to-body",
          description:
            "Indicates should shadowing layer be insert into DocumentBody element",
          type: "boolean",
          acceptablevalues: "—",
          defaults: "true",
        },
        {
          parameter: "direction",
          description: "Drawer's opening direction",
          type: "Direction",
          acceptablevalues: "rtl / ltr / ttb / btt",
          defaults: "rtl",
        },
        {
          parameter: "show-close",
          description: "Should show close button at the top right of Drawer",
          type: "boolean",
          acceptablevalues: "—",
          defaults: "true",
        },
        {
          parameter: "size",
          description:
            "Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is <code>number</code> type, it describes the size by unit of pixels; when size is <code>string</code> type, it should be used with <code>x%</code> notation, other wise it will be interpreted to pixel unit",
          type: "number / string",
          acceptablevalues: "-",
          defaults: "'30%'",
        },
        {
          parameter: "title",
          description:
            "Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form",
          type: "string",
          acceptablevalues: "—",
          defaults: "—",
        },
        {
          parameter: "visible",
          description:
            "Should Drawer be displayed, also support the <code>.sync</code> notation",
          type: "boolean",
          acceptablevalues: "—",
          defaults: "false",
        },
        {
          parameter: "wrapperClosable",
          description:
            "Indicates whether user can close Drawer by clicking the shadowing layer.",
          type: "boolean",
          acceptablevalues: "-",
          defaults: "true",
        },
        {
          parameter: "withHeader",
          description:
            "Flag that controls the header section's existance, default to true, when withHeader set to false, both <code>title attribute</code> and <code>title slot</code> won't work",
          type: "boolean",
          acceptablevalues: "-",
          defaults: "true",
        },
      ],
      slotApi: [
        { name: "—", description: "Drawer's Content" },
        { name: "title", description: "Drawer Title Section" },
      ],
      methodsApi: [
        {
          name: "closeDrawer",
          description:
            "In order to close Drawer, this method will call <code>before-close</code>.",
        },
      ],
      eventApi: [
        {
          eventname: "open",
          description: "Triggered before Drawer opening animation begins",
          parameter: "—",
        },
        {
          eventname: "opened",
          description: "Triggered after Drawer opening animation ended",
          parameter: "—",
        },
        {
          eventname: "close",
          description: "Triggered before Drawer closing animation begins",
          parameter: "—",
        },
        {
          eventname: "closed",
          description: "Triggered after Drawer closing animation ended",
          parameter: "—",
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
    handleClose1(done) {
      this.$confirm("Are you sure you want to close this?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleClose2(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("Do you want to submit?")
        .then((_) => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // animation takes time
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch((_) => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    handleClose3(done) {
      this.$confirm("You still have unsaved data, proceed?")
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
