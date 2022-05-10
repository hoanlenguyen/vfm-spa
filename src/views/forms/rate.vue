<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Rate</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Used for rating.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              Rate divides rating scores into several levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them an array with three element to reflect three levels using the
              <code>colors</code> attribute, and their two thresholds can be defined by
              <code>low-threshold</code> and
              <code>high-threshold</code>, or you can assign them with a object which key is the threshold between two levels and value is the corresponding color.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="d-block mb-5">
                  <span class="d-block mb-2">Default</span>
                  <el-rate v-model="value1"></el-rate>
                </div>
                <div class="d-block mb-5">
                  <span class="d-block mb-2">Color for different levels</span>
                  <el-rate v-model="value2" :colors="colors"></el-rate>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-block mb-2&#x22;&#x3E;Default&#x3C;/span&#x3E;
  &#x3C;el-rate v-model=&#x22;value1&#x22;&#x3E;&#x3C;/el-rate&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-block mb-5&#x22;&#x3E;
  &#x3C;span class=&#x22;d-block mb-2&#x22;&#x3E;Color for different levels&#x3C;/span&#x3E;
  &#x3C;el-rate
    v-model=&#x22;value2&#x22;
    :colors=&#x22;colors&#x22;&#x3E;
  &#x3C;/el-rate&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">With text</h3>
            <p class="mt-2 text-lg">Using text to indicate rating score.</p>
            <p class="mt-2 text-lg">
              Add attribute
              <code>show-text</code> to display text at the right of Rate. You can assign texts for different scores using
              <code>texts</code>.
              <code>texts</code> is an array whose length should be equal to the max score
              <code>max</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-rate
                  v-model="value"
                  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
                  show-text
                ></el-rate>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-rate
  v-model=&#x22;value&#x22;
  :texts=&#x22;[&#x27;oops&#x27;, &#x27;disappointed&#x27;, &#x27;normal&#x27;, &#x27;good&#x27;, &#x27;great&#x27;]&#x22;
  show-text&#x3E;
&#x3C;/el-rate&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">More icons</h3>
            <p
              class="mt-2 text-lg"
            >You can use different icons to distinguish different rate components.</p>
            <p class="mt-2 text-lg">
              You can customize icons by passing
              <code>icon-classes</code> an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon class. In this example, we also use
              <code>void-icon-class</code> to set the icon if it is unselected.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-rate
                  v-model="value3"
                  :icon-classes="iconClasses"
                  void-icon-class="el-icon-user"
                  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                ></el-rate>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-rate
  v-model=&#x22;value&#x22;
  :icon-classes=&#x22;iconClasses&#x22;
  void-icon-class=&#x22;icon-rate-face-off&#x22;
  :colors=&#x22;[&#x27;#99A9BF&#x27;, &#x27;#F7BA2A&#x27;, &#x27;#FF9900&#x27;]&#x22;&#x3E;
&#x3C;/el-rate&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Read-only</h3>
            <p
              class="mt-2 text-lg"
            >Read-only Rate is for displaying rating score. Half star is supported.</p>
            <p class="mt-2 text-lg">
              Use attribute
              <code>disabled</code> to make the component read-only. Add
              <code>show-score</code> to display the rating score at the right side. Additionally, you can use attribute
              <code>score-template</code> to provide a score template. It must contain
              <code>{value}</code>, and
              <code>{value}</code> will be replaced with the rating score.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-rate
                  v-model="value4"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value} points"
                ></el-rate>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-rate
  v-model=&#x22;value&#x22;
  disabled
  show-score
  text-color=&#x22;#ff9900&#x22;
  score-template=&#x22;{value} points&#x22;&#x3E;
&#x3C;/el-rate&#x3E;
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
              <el-table-column label="Description" width="350px">
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
              <el-table-column label="Default" width="150px">
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
              <el-table-column label="Description" width="500px">
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
  name: "Rate",
  components: {},
  data() {
    return {
      value4: 3.7,
      value3: null,
      iconClasses: [
        "el-icon-user-solid",
        "el-icon-user-solid",
        "el-icon-user-solid",
      ], // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      value: null,
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "value / v-model",
          description: "binding value",
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
        {
          attribute: "max",
          description: "max rating score",
          type: "number",
          acceptedvalues: "—",
          default: "5",
        },
        {
          attribute: "disabled",
          description: "whether Rate is read-only",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "allow-half",
          description: "whether picking half start is allowed",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "low-threshold",
          description:
            "threshold value between low and medium level. The value itself will be included in low level",
          type: "number",
          acceptedvalues: "—",
          default: "2",
        },
        {
          attribute: "high-threshold",
          description:
            "threshold value between medium and high level. The value itself will be included in high level",
          type: "number",
          acceptedvalues: "—",
          default: "4",
        },
        {
          attribute: "colors",
          description:
            "colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color",
          type: "array/object",
          acceptedvalues: "—",
          default: "['#F7BA2A', '#F7BA2A', '#F7BA2A']",
        },
        {
          attribute: "void-color",
          description: "color of unselected icons",
          type: "string",
          acceptedvalues: "—",
          default: "#C6D1DE",
        },
        {
          attribute: "disabled-void-color",
          description: "color of unselected read-only icons",
          type: "string",
          acceptedvalues: "—",
          default: "#EFF2F7",
        },
        {
          attribute: "icon-classes",
          description:
            "class names of icons. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon class",
          type: "array/object",
          acceptedvalues: "—",
          default: "['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']",
        },
        {
          attribute: "void-icon-class",
          description: "class name of unselected icons",
          type: "string",
          acceptedvalues: "—",
          default: "el-icon-star-off",
        },
        {
          attribute: "disabled-void-icon-class",
          description: "class name of unselected read-only icons",
          type: "string",
          acceptedvalues: "—",
          default: "el-icon-star-on",
        },
        {
          attribute: "show-text",
          description: "whether to display texts",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "show-score",
          description:
            "whether to display current score. show-score and show-text cannot be true at the same time",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "text-color",
          description: "color of texts",
          type: "string",
          acceptedvalues: "—",
          default: "#1F2D3D",
        },
        {
          attribute: "texts",
          description: "text array",
          type: "array",
          acceptedvalues: "—",
          default: "['oops', 'disappointed', 'normal', 'good', 'great']",
        },
        {
          attribute: "score-template",
          description: "score template",
          type: "string",
          acceptedvalues: "—",
          default: "{value}",
        },
      ],
      eventApi: [
        {
          eventname: "change",
          description: "Triggers when rate value is changed",
          parameters: "value after changing",
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
