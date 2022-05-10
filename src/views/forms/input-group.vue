<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Input Group</span>
              <span class="card-sub-label"></span>
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Input data using mouse or keyboard.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-input placeholder="Please input" v-model="input"></el-input>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>

                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Input with icon</h3>
            <p class="mt-2 text-lg">
              To add icons in Input, you can simply use
              <code>prefix-icon</code> and
              <code>suffix-icon</code> attributes. Also, the
              <code>prefix</code> and
              <code>suffix</code> named slots works as well.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                  <el-form
                  label-position="right"
                  label-width="150px"
                  :model="formLabelAlign"
                >
                  <el-form-item label="Using attributes">
                    <el-input placeholder="Pick a date" suffix-icon="el-icon-date" v-model="input1"></el-input>
                  </el-form-item>
                  <el-form-item label="Using attributes">
                    <el-input
                    placeholder="Type something"
                    prefix-icon="el-icon-search"
                    v-model="input2"
                  ></el-input>
                  </el-form-item>
                  <el-form-item label="Using slots">
                    <el-input placeholder="Pick a date" v-model="input3">
                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                  </el-input>
                  </el-form-item>
                  <el-form-item label="Using slots">
                    <el-input placeholder="Type something" v-model="input4">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>

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
                  <span v-html="scope.row.attribute"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
              <el-table-column label="Type" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type"></span>
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues"></span>
                </template>
              </el-table-column>
              <el-table-column label="Default" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default"></span>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Slot</h3>
            <el-table :data="slotApi" class="mt-2">
              <el-table-column label="Name" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.name"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Events</h3>
            <el-table :data="eventApi" class="mt-2">
              <el-table-column label="Event Name" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.eventname"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
              <el-table-column label="Parameters">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameters"></span>
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
Vue.use(VueCodeHighlight); //registers the v-highlight directive
import "vue-code-highlight/themes/prism-okaidia.css";

export default {
  name: "InputGroup",
  components: {},
  data() {
    return {
      input: "",
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      attributeApi: [
        {
          attribute: "title",
          description: "title",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "type",
          description: "Component type",
          type: "string",
          acceptedvalues: "success/warning/info/error",
          default: "info",
        },
        {
          attribute: "description",
          description:
            "Descriptive text. Can also be passed with the default slot",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "closable",
          description: "If closable or not",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "center",
          description: "Whether to center the text",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "close-text",
          description: "Customized close button text",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "show-icon",
          description: "If a type icon is displayed",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "effect",
          description: "Choose theme",
          type: "string",
          acceptedvalues: "light/dark",
          default: "light",
        },
      ],
      slotApi: [
        { name: "—", description: "description" },
        { name: "title", description: "content of the Alert title" },
      ],
      eventApi: [
        {
          eventname: "close",
          description: "fires when alert is closed",
          parameters: "—",
        },
      ],
    };
  },

  methods: {},
};
</script>