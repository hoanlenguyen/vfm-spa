<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Color Picker</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Color Picker is a color selector supporting multiple color formats.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Color Picker requires a string typed variable to be bound to v-model.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="my-2">
                  <span class="d-inline-block w-25 my-2">With default value</span>
                  <el-color-picker v-model="color1"></el-color-picker>
                </div>
                <div class="my-2">
                  <span class="d-inline-block w-25 my-2">With no default value</span>
                  <el-color-picker v-model="color2"></el-color-picker>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;my-2&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;With default value&#x3C;/span&#x3E;
  &#x3C;el-color-picker v-model=&#x22;color1&#x22;&#x3E;&#x3C;/el-color-picker&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;my-2&#x22;&#x3E;
  &#x3C;span class=&#x22;d-inline-block w-25 my-2&#x22;&#x3E;With no default value&#x3C;/span&#x3E;
  &#x3C;el-color-picker v-model=&#x22;color2&#x22;&#x3E;&#x3C;/el-color-picker&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Alpha</h3>
            <p class="mt-2 text-lg">
              ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the
              <code>show-alpha</code> attribute.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-color-picker v-model="color" show-alpha></el-color-picker>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-color-picker v-model=&#x22;color&#x22; show-alpha&#x3E;&#x3C;/el-color-picker&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Predefined colors</h3>
            <p class="mt-2 text-lg">Color Picker supports predefined color options.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-color-picker v-model="color11" show-alpha :predefine="predefineColors"></el-color-picker>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-color-picker
  v-model=&#x22;color&#x22;
  show-alpha
  :predefine=&#x22;predefineColors&#x22;&#x3E;
&#x3C;/el-color-picker&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Sizes</h3>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-color-picker v-model="color111"></el-color-picker>
                <el-color-picker v-model="color111" size="medium" class="ml-3"></el-color-picker>
                <el-color-picker v-model="color111" size="small" class="ml-3"></el-color-picker>
                <el-color-picker v-model="color111" size="mini" class="ml-3"></el-color-picker>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-color-picker v-model=&#x22;color&#x22;&#x3E;&#x3C;/el-color-picker&#x3E;
&#x3C;el-color-picker v-model=&#x22;color&#x22; size=&#x22;medium&#x22;&#x3E;&#x3C;/el-color-picker&#x3E;
&#x3C;el-color-picker v-model=&#x22;color&#x22; size=&#x22;small&#x22;&#x3E;&#x3C;/el-color-picker&#x3E;
&#x3C;el-color-picker v-model=&#x22;color&#x22; size=&#x22;mini&#x22;&#x3E;&#x3C;/el-color-picker&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">API</h3>
            <el-table :data="attributeApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="300px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues" />
                </template>
              </el-table-column>
              <el-table-column label="Default" width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default" />
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div>
            <h3 class="mt-8x">Events</h3>
            <el-table :data="eventApi" class="mt-2">
              <el-table-column label="Event Name" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.eventname" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="450px">
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
  name: "ColorPicker",
  components: {},
  data() {
    return {
      color111: "#409EFF",
      color11: "rgba(255, 69, 0, 0.68)",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],

      color: "rgba(19, 206, 102, 0.8)",

      color1: "#409EFF",
      color2: null,

      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "value / v-model",
          description: "binding value",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "disabled",
          description: "whether to disable the ColorPicker",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "size",
          description: "size of ColorPicker",
          type: "string",
          acceptedvalues: "—",
          default: "medium / small / mini",
        },
        {
          attribute: "show-alpha",
          description: "whether to display the alpha slider",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "color-format",
          description: "color format of v-model",
          type: "string",
          acceptedvalues: "hsl / hsv / hex / rgb",
          default:
            "hex (when show-alpha is false)/ rgb (when show-alpha is true)",
        },
        {
          attribute: "popper-class",
          description: "custom class name for ColorPicker's dropdown",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "predefine",
          description: "predefined color options",
          type: "array",
          acceptedvalues: "—",
          default: "—",
        },
      ],
      eventApi: [
        {
          eventname: "change",
          description: "triggers when input value changes",
          parameters: "color value",
        },
        {
          eventname: "active-change",
          description: "triggers when the current active color changes",
          parameters: "active color value",
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
