<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Popconfirm</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">A simple confirmation dialog of an element click action.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.</p>
            <p class="mt-2 text-lg">
              Only
              <code>title</code> attribute is avaliable in Popconfirm,
              <code>content</code> will be ignored.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-popconfirm
                  title="Are you sure to delete this?"
                  confirmButtonText="Yes"
                  cancelButtonText="No"
                  cancelButtonType="default"
                >
                  <el-button slot="reference">Delete</el-button>
                </el-popconfirm>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-popconfirm
  title=&#x22;Are you sure to delete this?&#x22;
&#x3E;
  &#x3C;el-button slot=&#x22;reference&#x22;&#x3E;Delete&#x3C;/el-button&#x3E;
&#x3C;/el-popconfirm&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Customise</h3>
            <p class="mt-2 text-lg">You can customise Popconfirm like:</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-popconfirm
                  confirmButtonText="OK"
                  cancelButtonText="No, Thanks"
                  cancelButtonType="default"
                  icon="el-icon-info"
                  iconColor="red"
                  title="Are you sure to delete this?"
                >
                  <el-button slot="reference">Delete</el-button>
                </el-popconfirm>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-popconfirm
  confirmButtonText=&#x27;OK&#x27;
  cancelButtonText=&#x27;No, Thanks&#x27;
  icon=&#x22;el-icon-info&#x22;
  iconColor=&#x22;red&#x22;
  title=&#x22;Are you sure to delete this?&#x22;
&#x3E;
  &#x3C;el-button slot=&#x22;reference&#x22;&#x3E;Delete&#x3C;/el-button&#x3E;
&#x3C;/el-popconfirm&#x3E;
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
  name: "Popconfirm",
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "title",
          description: "Title",
          type: "String",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "confirmButtonText",
          description: "Confirm button text",
          type: "String",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "cancelButtonText",
          description: "Cancel button text",
          type: "String",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "confirmButtonType",
          description: "Confirm button type",
          type: "String",
          acceptedvalues: "—",
          default: "Primary",
        },
        {
          attribute: "cancelButtonType",
          description: "Cancel button type",
          type: "String",
          acceptedvalues: "—",
          default: "Text",
        },
        {
          attribute: "icon",
          description: "Icon",
          type: "String",
          acceptedvalues: "—",
          default: "el-icon-question",
        },
        {
          attribute: "iconColor",
          description: "Icon color",
          type: "String",
          acceptedvalues: "—",
          default: "#f90",
        },
        {
          attribute: "hideIcon",
          description: "is hide Icon",
          type: "Boolean",
          acceptedvalues: "—",
          default: "false",
        },
      ],
      slotApi: [
        {
          name: "reference",
          description: "HTML element that triggers Popconfirm",
        },
      ],
      eventApi: [
        {
          eventname: "onConfirm",
          description: "triggers when click confirm button",
          parameters: "—",
        },
        {
          eventname: "onCancel",
          description: "triggers when click cancel button",
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
