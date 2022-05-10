<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Timeline</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Visually display timeline.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Timeline can be split into multiple activities in ascending or descending. Timestamps are important features that distinguish them from other components. Note the difference with Steps.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="block">
                  <div class="radio">
                    Order:
                    <el-radio-group v-model="reverse" class="ml-3">
                      <el-radio :label="true">descending</el-radio>
                      <el-radio :label="false">ascending</el-radio>
                    </el-radio-group>
                  </div>

                  <el-timeline :reverse="reverse" class="mt-5">
                    <el-timeline-item
                      v-for="activity in activities"
                      :key="activity.timestamp"
                      :timestamp="activity.timestamp"
                    >{{activity.content}}</el-timeline-item>
                  </el-timeline>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;div class=&#x22;radio&#x22;&#x3E;
    Order: 
    &#x3C;el-radio-group v-model=&#x22;reverse&#x22;&#x3E;
      &#x3C;el-radio :label=&#x22;true&#x22;&#x3E;descending&#x3C;/el-radio&#x3E;
      &#x3C;el-radio :label=&#x22;false&#x22;&#x3E;ascending&#x3C;/el-radio&#x3E;
    &#x3C;/el-radio-group&#x3E;
  &#x3C;/div&#x3E;

  &#x3C;el-timeline :reverse=&#x22;reverse&#x22;&#x3E;
    &#x3C;el-timeline-item
      v-for=&#x22;(activity, index) in activities&#x22;
      :key=&#x22;index&#x22;
      :timestamp=&#x22;activity.timestamp&#x22;&#x3E;
      {{activity.content}}
    &#x3C;/el-timeline-item&#x3E;
  &#x3C;/el-timeline&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom node</h3>
            <p class="mt-2 text-lg">Size, color, and icons can be customized in node.</p>
            <p class="mt-2 text-lg">
              Set
              <code>effect</code> to change theme, default is
              <code>light</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="block">
                  <el-timeline>
                    <el-timeline-item
                      v-for="(activity, index) in activities2"
                      :key="index"
                      :icon="activity.icon"
                      :type="activity.type"
                      :color="activity.color"
                      :size="activity.size"
                      :timestamp="activity.timestamp"
                    >{{activity.content}}</el-timeline-item>
                  </el-timeline>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;el-timeline&#x3E;
    &#x3C;el-timeline-item
      v-for=&#x22;(activity, index) in activities&#x22;
      :key=&#x22;index&#x22;
      :icon=&#x22;activity.icon&#x22;
      :type=&#x22;activity.type&#x22;
      :color=&#x22;activity.color&#x22;
      :size=&#x22;activity.size&#x22;
      :timestamp=&#x22;activity.timestamp&#x22;&#x3E;
      {{activity.content}}
    &#x3C;/el-timeline-item&#x3E;
  &#x3C;/el-timeline&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom timestamp</h3>
            <p
              class="mt-2 text-lg"
            >Timestamp can be placed on top of content when content is too high.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="block">
                  <el-timeline>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                      <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/12 20:46</p>
                      </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                      <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/3 20:46</p>
                      </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">
                      <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/2 20:46</p>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;el-timeline&#x3E;
    &#x3C;el-timeline-item timestamp=&#x22;2018/4/12&#x22; placement=&#x22;top&#x22;&#x3E;
      &#x3C;el-card&#x3E;
        &#x3C;h4&#x3E;Update Github template&#x3C;/h4&#x3E;
        &#x3C;p&#x3E;Tom committed 2018/4/12 20:46&#x3C;/p&#x3E;
      &#x3C;/el-card&#x3E;
    &#x3C;/el-timeline-item&#x3E;
    &#x3C;el-timeline-item timestamp=&#x22;2018/4/3&#x22; placement=&#x22;top&#x22;&#x3E;
      &#x3C;el-card&#x3E;
        &#x3C;h4&#x3E;Update Github template&#x3C;/h4&#x3E;
        &#x3C;p&#x3E;Tom committed 2018/4/3 20:46&#x3C;/p&#x3E;
      &#x3C;/el-card&#x3E;
    &#x3C;/el-timeline-item&#x3E;
    &#x3C;el-timeline-item timestamp=&#x22;2018/4/2&#x22; placement=&#x22;top&#x22;&#x3E;
      &#x3C;el-card&#x3E;
        &#x3C;h4&#x3E;Update Github template&#x3C;/h4&#x3E;
        &#x3C;p&#x3E;Tom committed 2018/4/2 20:46&#x3C;/p&#x3E;
      &#x3C;/el-card&#x3E;
    &#x3C;/el-timeline-item&#x3E;
  &#x3C;/el-timeline&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">API</h3>
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
            <h3 class="mt-8x">Item API</h3>
            <el-table :data="itemApi" class="mt-2">
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
  name: "Timeline",
  components: {},
  data() {
    return {
      activities2: [
        {
          content: "Custom icon",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "Custom color",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "Custom size",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "Default node",
          timestamp: "2018-04-03 20:46",
        },
      ],
      reverse: true,
      activities: [
        {
          content: "Event start",
          timestamp: "2018-04-15",
        },
        {
          content: "Approved",
          timestamp: "2018-04-13",
        },
        {
          content: "Success",
          timestamp: "2018-04-11",
        },
      ],
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "reverse",
          description:
            "whether the node is ascending or descending, default is ascending",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
      ],
      itemApi: [
        {
          attribute: "timestamp",
          description: "timestamp content",
          type: "string",
          acceptedvalues: "-",
          default: "—",
        },
        {
          attribute: "hide-timestamp",
          description: "whether to show timestamp",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "placement",
          description: "position of timestamp",
          type: "string",
          acceptedvalues: "top / bottom",
          default: "bottom",
        },
        {
          attribute: "type",
          description: "node type",
          type: "string",
          acceptedvalues: "primary / success / warning / danger / info",
          default: "-",
        },
        {
          attribute: "color",
          description: "background color of node",
          type: "string",
          acceptedvalues: "hsl / hsv / hex / rgb",
          default: "-",
        },
        {
          attribute: "size",
          description: "node size",
          type: "string",
          acceptedvalues: "normal / large",
          default: "normal",
        },
        {
          attribute: "icon",
          description: "icon class name",
          type: "string",
          acceptedvalues: "—",
          default: "-",
        },
      ],
      slotApi: [
        { name: "—", description: "Custom content for timeline item" },
        { name: "dot", description: "Custom defined node" },
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
