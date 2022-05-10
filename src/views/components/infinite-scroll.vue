<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Infinite Scroll</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Load more data while reach bottom of the page.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg"></p>
            <p>
              Add
              <code>v-infinite-scroll</code> to the list to automatically execute loading method when scrolling to the bottom.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div v-infinite-scroll="load" style="overflow:auto; height:300px">
                  <div
                    v-for="i in count"
                    class="bg-success m-3 d-flex justify-content-center align-items-center"
                    style="height:50px"
                    :key="i"
                  >{{ i }}</div>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div v-infinite-scroll=&#x22;load&#x22; style=&#x22;overflow:auto; height:300px&#x22;&#x3E;
  &#x3C;div
    v-for=&#x22;i in count&#x22;
    class=&#x22;bg-success m-3 d-flex justify-content-center align-items-center&#x22;
    style=&#x22;height:50px&#x22;
    :key=&#x22;i&#x22;
  &#x3E;{{ i }}&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disable Loading</h3>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                  <div
                    v-infinite-scroll="load2"
                    style="overflow:auto; height:300px"
                    infinite-scroll-disabled="disabled"
                  >
                    <div
                      v-for="i in count2"
                      class="bg-success m-3 d-flex justify-content-center align-items-center"
                      style="height:50px"
                      :key="i"
                    >{{ i }}</div>
                  </div>
                  <p v-if="loading">Loading...</p>
                  <p v-if="noMore">No more</p>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div
  v-infinite-scroll=&#x22;load2&#x22;
  style=&#x22;overflow:auto; height:300px&#x22;
  infinite-scroll-disabled=&#x22;disabled&#x22;
&#x3E;
  &#x3C;div
    v-for=&#x22;i in count2&#x22;
    class=&#x22;bg-success m-3 d-flex justify-content-center align-items-center&#x22;
    style=&#x22;height:50px&#x22;
    :key=&#x22;i&#x22;
  &#x3E;{{ i }}&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;p v-if=&#x22;loading&#x22;&#x3E;Loading...&#x3C;/p&#x3E;
&#x3C;p v-if=&#x22;noMore&#x22;&#x3E;No more&#x3C;/p&#x3E;
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
  name: "Infinite Scroll",
  components: {},
  data() {
    return {
      count2: 10,
      loading: false,
      count: 0,
      currentDate: new Date(),
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "infinite-scroll-disabled",
          description: "is disabled",
          type: "boolean",
          acceptedvalues: "-",
          default: "false",
        },
        {
          attribute: "infinite-scroll-delay",
          description: "throttle delay (ms)",
          type: "number",
          acceptedvalues: "-",
          default: "200",
        },
        {
          attribute: "infinite-scroll-distance",
          description: "trigger distance (px)",
          type: "number",
          acceptedvalues: "-",
          default: "0",
        },
        {
          attribute: "infinite-scroll-immediate",
          description:
            "Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state.",
          type: "boolean",
          acceptedvalues: "-",
          default: "true",
        },
      ],
    };
  },
  computed: {
    noMore() {
      return this.count2 >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
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
    load() {
      this.count += 2;
    },
    load2() {
      this.loading = true;
      setTimeout(() => {
        this.count2 += 2;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
