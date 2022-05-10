<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Badges</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">A number or status mark on buttons and icons.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Displays the amount of new messages.</p>
            <p class="mt-2 text-lg">
              The amount is defined with
              <code>value</code> which accepts
              <code>Number</code> or
              <code>String</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-badge :value="12" class="item">
                  <el-button size="small">comments</el-button>
                </el-badge>
                <el-badge :value="3" class="item">
                  <el-button size="small">replies</el-button>
                </el-badge>
                <el-badge :value="1" class="item" type="primary">
                  <el-button size="small">comments</el-button>
                </el-badge>
                <el-badge :value="2" class="item" type="warning">
                  <el-button size="small">replies</el-button>
                </el-badge>

                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    Click Me
                    <i class="el-icon-caret-bottom el-icon--right" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">
                      comments
                      <el-badge class="mark" :value="12" />
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix">
                      replies
                      <el-badge class="mark" :value="3" />
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-badge :value=&#x22;12&#x22; class=&#x22;item&#x22;&#x3E;
  &#x3C;el-button size=&#x22;small&#x22;&#x3E;comments&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;
&#x3C;el-badge :value=&#x22;3&#x22; class=&#x22;item&#x22;&#x3E;
  &#x3C;el-button size=&#x22;small&#x22;&#x3E;replies&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;
&#x3C;el-badge :value=&#x22;1&#x22; class=&#x22;item&#x22; type=&#x22;primary&#x22;&#x3E;
  &#x3C;el-button size=&#x22;small&#x22;&#x3E;comments&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;
&#x3C;el-badge :value=&#x22;2&#x22; class=&#x22;item&#x22; type=&#x22;warning&#x22;&#x3E;
  &#x3C;el-button size=&#x22;small&#x22;&#x3E;replies&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;

&#x3C;el-dropdown trigger=&#x22;click&#x22; class=&#x22;ml-4&#x22;&#x3E;
  &#x3C;span class=&#x22;el-dropdown-link&#x22;&#x3E;
    Click Me
    &#x3C;i class=&#x22;el-icon-caret-bottom el-icon--right&#x22; /&#x3E;
  &#x3C;/span&#x3E;
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item class=&#x22;clearfix&#x22;&#x3E;
      comments
      &#x3C;el-badge class=&#x22;mark&#x22; :value=&#x22;12&#x22; /&#x3E;
    &#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item class=&#x22;clearfix&#x22;&#x3E;
      replies
      &#x3C;el-badge class=&#x22;mark&#x22; :value=&#x22;3&#x22; /&#x3E;
    &#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Max value</h3>
            <p class="mt-2 text-lg">You can customize the max value.</p>
            <p class="mt-2 text-lg">
              The max value is defined by property
              <code>max</code> which is a
              <code>Number</code>. Note that it only works when
              <code>value</code> is also a
              <code>Number</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-badge :value="200" :max="99" class="item">
                  <el-button size="small">comments</el-button>
                </el-badge>
                <el-badge :value="100" :max="10" class="item">
                  <el-button size="small">replies</el-button>
                </el-badge>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-badge :value=&#x22;200&#x22; :max=&#x22;99&#x22; class=&#x22;item&#x22;&#x3E;
  &#x3C;el-button size=&#x22;small&#x22;&#x3E;comments&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;
&#x3C;el-badge :value=&#x22;100&#x22; :max=&#x22;10&#x22; class=&#x22;item&#x22;&#x3E;
  &#x3C;el-button size=&#x22;small&#x22;&#x3E;replies&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Customizations</h3>
            <p class="mt-2 text-lg">Displays text content other than numbers.</p>
            <p class="mt-2 text-lg">
              When
              <code>value</code> is a
              <code>String</code>, it can display customized text.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-badge value="new" class="item">
                  <el-button size="small">comments</el-button>
                </el-badge>
                <el-badge value="hot" class="item">
                  <el-button size="small">replies</el-button>
                </el-badge>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-badge value=&#x22;new&#x22; class=&#x22;item&#x22;&#x3E;
  &#x3C;el-button size=&#x22;small&#x22;&#x3E;comments&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;
&#x3C;el-badge value=&#x22;hot&#x22; class=&#x22;item&#x22;&#x3E;
  &#x3C;el-button size=&#x22;small&#x22;&#x3E;replies&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Little red dot</h3>
            <p class="mt-2 text-lg">Use a red dot to mark content that needs to be noticed.</p>
            <p class="mt-2 text-lg">
              Use the attribute
              <code>is-dot</code>. It is a
              <code>Boolean</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-badge is-dot class="item">query</el-badge>
                <el-badge is-dot class="item">
                  <el-button class="share-button" icon="el-icon-share" type="primary" />
                </el-badge>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
   &#x3C;el-badge is-dot class=&#x22;item&#x22;&#x3E;query&#x3C;/el-badge&#x3E;
&#x3C;el-badge is-dot class=&#x22;item&#x22;&#x3E;
  &#x3C;el-button class=&#x22;share-button&#x22; icon=&#x22;el-icon-share&#x22; type=&#x22;primary&#x22;&#x3E;&#x3C;/el-button&#x3E;
&#x3C;/el-badge&#x3E;
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
  name: "Badges",
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "value",
          description: "display value",
          type: "string, number",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "max",
          description:
            "maximum value, shows '{max}+' when exceeded. Only works if <code>value</code> is a <code>Number</code>",
          type: "number",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "is-dot",
          description: "if a little dot is displayed",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "hidden",
          description: "hidden badge",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "type",
          description: "button type",
          type: "string",
          acceptedvalues: "primary / success / warning / danger / info",
          default: "—",
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
.el-badge + .el-badge ,
.el-badge + .el-dropdown {
  margin-left: 5rem;
}
</style>
