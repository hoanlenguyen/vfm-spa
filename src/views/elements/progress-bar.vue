<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Progress-bar</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Progress is used to show the progress of current operation, and inform the user the current status.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Linear progress bar</h3>
            <p class="mt-2 text-lg">
              Use
              <code>percentage</code> attribute to set the percentage. It's
              <strong>required</strong> and must be between
              <code>0-100</code>. You can custom text format by setting
              <code>format</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-progress :percentage="50"></el-progress>
                <el-progress :percentage="100" :format="format"></el-progress>
                <el-progress :percentage="100" status="success"></el-progress>
                <el-progress :percentage="100" status="warning"></el-progress>
                <el-progress :percentage="50" status="exception"></el-progress>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-progress :percentage=&#x22;50&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress :percentage=&#x22;100&#x22; :format=&#x22;format&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress :percentage=&#x22;100&#x22; status=&#x22;success&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress :percentage=&#x22;100&#x22; status=&#x22;warning&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress :percentage=&#x22;50&#x22; status=&#x22;exception&#x22;&#x3E;&#x3C;/el-progress&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Internal percentage</h3>
            <p class="mt-2 text-lg">In this case the percentage takes no additional space.</p>
            <p class="mt-2 text-lg">
              <code>stroke-width</code> attribute decides the
              <code>width</code> of progress bar, and use
              <code>text-inside</code> attribute to put description inside the progress bar.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="100"
                  status="success"
                ></el-progress>
                <el-progress
                  :text-inside="true"
                  :stroke-width="22"
                  :percentage="80"
                  status="warning"
                ></el-progress>
                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="50"
                  status="exception"
                ></el-progress>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-progress :text-inside=&#x22;true&#x22; :stroke-width=&#x22;26&#x22; :percentage=&#x22;70&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress :text-inside=&#x22;true&#x22; :stroke-width=&#x22;24&#x22; :percentage=&#x22;100&#x22; status=&#x22;success&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress :text-inside=&#x22;true&#x22; :stroke-width=&#x22;22&#x22; :percentage=&#x22;80&#x22; status=&#x22;warning&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress :text-inside=&#x22;true&#x22; :stroke-width=&#x22;20&#x22; :percentage=&#x22;50&#x22; status=&#x22;exception&#x22;&#x3E;&#x3C;/el-progress&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom color</h3>
            <p class="mt-2 text-lg">
              You can use
              <code>color</code> attr to set the progress bar color. it accepts color string, function, or array.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-progress :percentage="percentage" :color="customColor"></el-progress>

                <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

                <el-progress :percentage="percentage" :color="customColors"></el-progress>
                <div class="mt-3">
                  <el-button-group>
                    <el-button size="small" icon="el-icon-minus" @click="decrease"></el-button>
                    <el-button size="small" icon="el-icon-plus" @click="increase"></el-button>
                  </el-button-group>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;template&#x3E;
  &#x3C;el-alert
    title=&#x22;unclosable alert&#x22;
    type=&#x22;success&#x22;
    :closable=&#x22;false&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;customized close-text&#x22;
    type=&#x22;info&#x22;
    close-text=&#x22;Gotcha&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;alert with callback&#x22;
    type=&#x22;warning&#x22;
    @close=&#x22;hello&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
  export default {
    methods: {
      hello() {
        alert(&#x27;Hello World!&#x27;);
      }
    }
  }
&#x3C;/script&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Circular progress bar</h3>
            <p class="mt-2 text-lg">
              You can specify
              <code>type</code> attribute to
              <code>circle</code> to use circular progress bar, and use
              <code>width</code> attribute to change the size of circle.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-around">
                  <el-progress type="circle" :percentage="0"></el-progress>
                  <el-progress type="circle" :percentage="25"></el-progress>
                  <el-progress type="circle" :percentage="100" status="success"></el-progress>
                  <el-progress type="circle" :percentage="70" status="warning"></el-progress>
                  <el-progress type="circle" :percentage="50" status="exception"></el-progress>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-progress type=&#x22;circle&#x22; :percentage=&#x22;0&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress type=&#x22;circle&#x22; :percentage=&#x22;25&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress type=&#x22;circle&#x22; :percentage=&#x22;100&#x22; status=&#x22;success&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress type=&#x22;circle&#x22; :percentage=&#x22;70&#x22; status=&#x22;warning&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;el-progress type=&#x22;circle&#x22; :percentage=&#x22;50&#x22; status=&#x22;exception&#x22;&#x3E;&#x3C;/el-progress&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Dashboard progress bar</h3>
            <p class="mt-2 text-lg"></p>
            <p>
              You also can specify
              <code>type</code> attribute to
              <code>dashboard</code> to use dashboard progress bar.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body text-center">
                <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
                <div class="mt-3">
                  <el-button-group>
                    <el-button size="small" icon="el-icon-minus" @click="decrease"></el-button>
                    <el-button size="small" icon="el-icon-plus" @click="increase"></el-button>
                  </el-button-group>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-progress type=&#x22;dashboard&#x22; :percentage=&#x22;percentage&#x22; :color=&#x22;colors&#x22;&#x3E;&#x3C;/el-progress&#x3E;
&#x3C;div class=&#x22;mt-3&#x22;&#x3E;
  &#x3C;el-button-group&#x3E;
    &#x3C;el-button size=&#x22;small&#x22; icon=&#x22;el-icon-minus&#x22; @click=&#x22;decrease&#x22;&#x3E;&#x3C;/el-button&#x3E;
    &#x3C;el-button size=&#x22;small&#x22; icon=&#x22;el-icon-plus&#x22; @click=&#x22;increase&#x22;&#x3E;&#x3C;/el-button&#x3E;
  &#x3C;/el-button-group&#x3E;
&#x3C;/div&#x3E;
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
  name: "Progress-bar",
  components: {},
  data() {
    return {
      percentage: 10,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      percentage: 20,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "<strong>percentage</strong>",
          description: "percentage, <strong>required</strong>",
          type: "number",
          acceptedvalues: "0-100",
          default: "0",
        },
        {
          attribute: "type",
          description: "the type of progress bar",
          type: "string",
          acceptedvalues: "line/circle/dashboard",
          default: "line",
        },
        {
          attribute: "stroke-width",
          description: "the width of progress bar",
          type: "number",
          acceptedvalues: "—",
          default: "6",
        },
        {
          attribute: "text-inside",
          description:
            "whether to place the percentage inside progress bar, only works when <code>type</code> is 'line'",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "status",
          description: "the current status of progress bar",
          type: "string",
          acceptedvalues: "success/exception/warning",
          default: "—",
        },
        {
          attribute: "color",
          description:
            "background color of progress bar. Overrides <code>status</code> prop",
          type: "string/function/array",
          acceptedvalues: "—",
          default: "''",
        },
        {
          attribute: "width",
          description: "the canvas width of circle progress bar",
          type: "number",
          acceptedvalues: "—",
          default: "126",
        },
        {
          attribute: "show-text",
          description: "whether to show percentage",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "stroke-linecap",
          description: "circle/dashboard type shape at the end path",
          type: "string",
          acceptedvalues: "butt/round/square",
          default: "round",
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
    format(percentage) {
      return percentage === 100 ? "Full" : `${percentage}%`;
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-progress + .el-progress {
  margin-top: 1rem;
}
</style>
