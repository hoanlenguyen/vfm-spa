<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Steps</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Simple step bar.</p>
            <p class="mt-2 text-lg">
              Set
              <code>active</code> attribute with
              <code>Number</code> type, which indicates the index of steps and starts from 0. You can set
              <code>space</code> attribute when the width of the step needs to be fixed which accepts
              <code>Number</code> type. The unit of the
              <code>space</code> attribute is
              <code>px</code>. If not set, it is responsive. Setting the
              <code>finish-status</code> attribute can change the state of the steps that have been completed.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-steps :active="active" finish-status="success">
                  <el-step title="Step 1"></el-step>
                  <el-step title="Step 2"></el-step>
                  <el-step title="Step 3"></el-step>
                </el-steps>

                <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-steps :active=&#x22;active&#x22; finish-status=&#x22;success&#x22;&#x3E;
  &#x3C;el-step title=&#x22;Step 1&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 2&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 3&#x22;&#x3E;&#x3C;/el-step&#x3E;
&#x3C;/el-steps&#x3E;

&#x3C;el-button style=&#x22;margin-top: 12px;&#x22; @click=&#x22;next&#x22;&#x3E;Next step&#x3C;/el-button&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Step bar that contains status</h3>
            <p class="mt-2 text-lg">Shows the status of the step for each step.</p>
            <p class="mt-2 text-lg">
              Use
              <code>title</code> attribute to set the name of the step, or override the attribute by using a named
              <code>slot</code>. We have listed all the slot names for you at the end of this page.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-steps :space="200" :active="1" finish-status="success">
                  <el-step title="Done"></el-step>
                  <el-step title="Processing"></el-step>
                  <el-step title="Step 3"></el-step>
                </el-steps>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-steps :space=&#x22;200&#x22; :active=&#x22;1&#x22; finish-status=&#x22;success&#x22;&#x3E;
  &#x3C;el-step title=&#x22;Done&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Processing&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 3&#x22;&#x3E;&#x3C;/el-step&#x3E;
&#x3C;/el-steps&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Center</h3>
            <p class="mt-2 text-lg">Title and desription can be centered.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-steps :active="2" align-center>
                  <el-step title="Step 1" description="Some description"></el-step>
                  <el-step title="Step 2" description="Some description"></el-step>
                  <el-step title="Step 3" description="Some description"></el-step>
                  <el-step title="Step 4" description="Some description"></el-step>
                </el-steps>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-steps :active=&#x22;2&#x22; align-center&#x3E;
  &#x3C;el-step title=&#x22;Step 1&#x22; description=&#x22;Some description&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 2&#x22; description=&#x22;Some description&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 3&#x22; description=&#x22;Some description&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 4&#x22; description=&#x22;Some description&#x22;&#x3E;&#x3C;/el-step&#x3E;
&#x3C;/el-steps&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Step bar with description</h3>
            <p class="mt-2 text-lg">There is description for each step.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-steps :active="1">
                  <el-step title="Step 1" description="Some description"></el-step>
                  <el-step title="Step 2" description="Some description"></el-step>
                  <el-step title="Step 3" description="Some description"></el-step>
                </el-steps>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-steps :active=&#x22;1&#x22;&#x3E;
  &#x3C;el-step title=&#x22;Step 1&#x22; description=&#x22;Some description&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 2&#x22; description=&#x22;Some description&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 3&#x22; description=&#x22;Some description&#x22;&#x3E;&#x3C;/el-step&#x3E;
&#x3C;/el-steps&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Step bar with icon</h3>
            <p class="mt-2 text-lg">A variety of custom icons can be used in the step bar.</p>
            <p class="mt-2 text-lg">
              The icon is set by the
              <code>icon</code> property. The types of icons can be found in the document for the Icon component. In addition, you can customize the icon through a named
              <code>slot</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-steps :active="1">
                  <el-step title="Step 1" icon="el-icon-edit"></el-step>
                  <el-step title="Step 2" icon="el-icon-upload"></el-step>
                  <el-step title="Step 3" icon="el-icon-picture"></el-step>
                </el-steps>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-steps :active=&#x22;1&#x22;&#x3E;
  &#x3C;el-step title=&#x22;Step 1&#x22; icon=&#x22;el-icon-edit&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 2&#x22; icon=&#x22;el-icon-upload&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 3&#x22; icon=&#x22;el-icon-picture&#x22;&#x3E;&#x3C;/el-step&#x3E;
&#x3C;/el-steps&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Vertical step bar</h3>
            <p class="mt-2 text-lg">Vertical step bars.</p>
            <p class="mt-2 text-lg">
              You only need to set the
              <code>direction</code> attribute to
              <code>vertical</code> in the
              <code>el-steps</code> element.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div style="height: 300px;">
                  <el-steps direction="vertical" :active="1">
                    <el-step title="Step 1"></el-step>
                    <el-step title="Step 2"></el-step>
                    <el-step title="Step 3"></el-step>
                  </el-steps>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div style=&#x22;height: 300px;&#x22;&#x3E;
  &#x3C;el-steps direction=&#x22;vertical&#x22; :active=&#x22;1&#x22;&#x3E;
    &#x3C;el-step title=&#x22;Step 1&#x22;&#x3E;&#x3C;/el-step&#x3E;
    &#x3C;el-step title=&#x22;Step 2&#x22;&#x3E;&#x3C;/el-step&#x3E;
    &#x3C;el-step title=&#x22;Step 3&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;/el-steps&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Simple step bar</h3>
            <p class="mt-2 text-lg">
              Simple step bars, where
              <code>align-center</code>,
              <code>description</code>,
              <code>direction</code> and
              <code>space</code> will be ignored.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-steps :space="200" :active="1" simple>
                  <el-step title="Step 1" icon="el-icon-edit"></el-step>
                  <el-step title="Step 2" icon="el-icon-upload"></el-step>
                  <el-step title="Step 3" icon="el-icon-picture"></el-step>
                </el-steps>

                <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                  <el-step title="Step 1"></el-step>
                  <el-step title="Step 2"></el-step>
                  <el-step title="Step 3"></el-step>
                </el-steps>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-steps :space=&#x22;200&#x22; :active=&#x22;1&#x22; simple&#x3E;
  &#x3C;el-step title=&#x22;Step 1&#x22; icon=&#x22;el-icon-edit&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 2&#x22; icon=&#x22;el-icon-upload&#x22;&#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 3&#x22; icon=&#x22;el-icon-picture&#x22;&#x3E;&#x3C;/el-step&#x3E;
&#x3C;/el-steps&#x3E;

&#x3C;el-steps :active=&#x22;1&#x22; finish-status=&#x22;success&#x22; simple style=&#x22;margin-top: 20px&#x22;&#x3E;
  &#x3C;el-step title=&#x22;Step 1&#x22; &#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 2&#x22; &#x3E;&#x3C;/el-step&#x3E;
  &#x3C;el-step title=&#x22;Step 3&#x22; &#x3E;&#x3C;/el-step&#x3E;
&#x3C;/el-steps&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Steps API</h3>
            <el-table :data="stepsApi" class="mt-2">
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
            <h3 class="mt-8x">Step API</h3>
            <el-table :data="stepApi" class="mt-2">
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
  name: "Steps",
  components: {},
  data() {
    return {
      active: 0,
      loadingIndexes: [10],
      stepsApi: [
        {
          attribute: "space",
          description:
            "the spacing of each step, will be responsive if omitted. Supports percentage.",
          type: "number / string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "direction",
          description: "display direction",
          type: "string",
          acceptedvalues: "vertical/horizontal",
          default: "horizontal",
        },
        {
          attribute: "active",
          description: "current activation step",
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
        {
          attribute: "process-status",
          description: "status of current step",
          type: "string",
          acceptedvalues: "wait / process / finish / error / success",
          default: "process",
        },
        {
          attribute: "finish-status",
          description: "status of end step",
          type: "string",
          acceptedvalues: "wait / process / finish / error / success",
          default: "finish",
        },
        {
          attribute: "align-center",
          description: "center title and description",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "simple",
          description: "whether to apply simple theme",
          type: "boolean",
          acceptedvalues: "-",
          default: "false",
        },
      ],
      stepApi: [
        {
          attribute: "title",
          description: "step title",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "description",
          description: "step description",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "icon",
          description: "step icon",
          type:
            "step icon's class name. Icons can be passed via named slot as well",
          acceptedvalues: "string",
          default: "—",
        },
        {
          attribute: "status",
          description:
            "current status. It will be automatically set by Steps if not configured.",
          type: "wait / process / finish / error / success",
          acceptedvalues: "-",
          default: "",
        },
      ],
      slotApi: [
        { name: "icon", description: "custom icon" },
        { name: "title", description: "step title" },
        { name: "description", description: "step description" },
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
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
