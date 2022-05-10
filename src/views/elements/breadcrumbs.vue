<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Breadcrumbs</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Displays the location of the current page, making it easier to browser back.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              In
              <code>el-breadcrumb</code>, each
              <code>el-breadcrumb-item</code> is a tag that stands for every level starting from homepage. This component has a
              <code>String</code> attribute
              <code>separator</code>, and it determines the separator. Its default value is '/'.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                  <el-breadcrumb-item>
                    <a href="/">promotion management</a>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-breadcrumb separator=&#x22;/&#x22;&#x3E;
  &#x3C;el-breadcrumb-item :to=&#x22;{ path: &#x27;/&#x27; }&#x22;&#x3E;homepage&#x3C;/el-breadcrumb-item&#x3E;
  &#x3C;el-breadcrumb-item&#x3E;&#x3C;a href=&#x22;/&#x22;&#x3E;promotion management&#x3C;/a&#x3E;&#x3C;/el-breadcrumb-item&#x3E;
  &#x3C;el-breadcrumb-item&#x3E;promotion list&#x3C;/el-breadcrumb-item&#x3E;
  &#x3C;el-breadcrumb-item&#x3E;promotion detail&#x3C;/el-breadcrumb-item&#x3E;
&#x3C;/el-breadcrumb&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Icon separator</h3>
            <p class="mt-2 text-lg">
              Set
              <code>separator-class</code> to use
              <code>iconfont</code> as the separator，it will cover
              <code>separator</code>
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                  <el-breadcrumb-item>promotion management</el-breadcrumb-item>
                  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-breadcrumb separator-class=&#x22;el-icon-arrow-right&#x22;&#x3E;
  &#x3C;el-breadcrumb-item :to=&#x22;{ path: &#x27;/&#x27; }&#x22;&#x3E;homepage&#x3C;/el-breadcrumb-item&#x3E;
  &#x3C;el-breadcrumb-item&#x3E;promotion management&#x3C;/el-breadcrumb-item&#x3E;
  &#x3C;el-breadcrumb-item&#x3E;promotion list&#x3C;/el-breadcrumb-item&#x3E;
  &#x3C;el-breadcrumb-item&#x3E;promotion detail&#x3C;/el-breadcrumb-item&#x3E;
&#x3C;/el-breadcrumb&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Breadcrumb API</h3>
            <p
              class="mt-2 text-lg"
            >Select your desired component from below and see the available props, slots, events and functions.</p>

            <el-table :data="attributeBreadcrumbApi" class="mt-2">
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
            <h3 class="mt-8x">Breadcrumb Item API</h3>
            <p
              class="mt-2 text-lg"
            >Select your desired component from below and see the available props, slots, events and functions.</p>

            <el-table :data="attributeBreadcrumbItemApi" class="mt-2">
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
  name: "Breadcrumbs",
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      attributeBreadcrumbApi: [
        {
          attribute: "separator",
          description: "separator character",
          type: "string",
          acceptedvalues: "—",
          default: "/",
        },
        {
          attribute: "separator-class",
          description: "class name of icon separator",
          type: "string",
          acceptedvalues: "—",
          default: "-",
        },
      ],
      attributeBreadcrumbItemApi: [
        {
          attribute: "to",
          description:
            "target route of the link, same as <code>to</code> of <code>vue-router</code>",
          type: "string/object",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "replace",
          description:
            "if <code>true</code>, the navigation will not leave a history record",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
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
