<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Cards</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Integrate information in a card container.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Card includes title, content and operations.</p>
            <p class="mt-2 text-lg">
              Card is made up of
              <code>header</code> and
              <code>body</code>.
              <code>header</code> is optional, and its content distribution depends on a named slot.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-card>
                  <div slot="header" class="clearfix">
                    <el-row type="flex" justify="space-between" align="middle">
                      <h3 class="card-title">
                        <span>Card name</span>
                      </h3>
                      <el-button size="small">Operation button</el-button>
                    </el-row>
                  </div>
                  <div v-for="o in 4" :key="o" class="py-3">{{'List item ' + o }}</div>
                </el-card>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-card&#x3E;
  &#x3C;div slot=&#x22;header&#x22; class=&#x22;clearfix&#x22;&#x3E;
    &#x3C;el-row type=&#x22;flex&#x22; justify=&#x22;space-between&#x22; align=&#x22;middle&#x22;&#x3E;
      &#x3C;h3 class=&#x22;card-title&#x22;&#x3E;
        &#x3C;span&#x3E;Card name&#x3C;/span&#x3E;
      &#x3C;/h3&#x3E;
      &#x3C;el-button size=&#x22;small&#x22;&#x3E;Operation button&#x3C;/el-button&#x3E;
    &#x3C;/el-row&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div v-for=&#x22;o in 4&#x22; :key=&#x22;o&#x22; class=&#x22;py-3&#x22;&#x3E;{{&#x27;List item &#x27; + o }}&#x3C;/div&#x3E;
&#x3C;/el-card&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Simple card</h3>
            <p class="mt-2 text-lg">The header part can be omitted.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-card class="box-card">
                  <div v-for="o in 4" :key="o" class="text item">{{'List item ' + o }}</div>
                </el-card>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-card class=&#x22;box-card&#x22;&#x3E;
  &#x3C;div v-for=&#x22;o in 4&#x22; :key=&#x22;o&#x22; class=&#x22;text item&#x22;&#x3E;
    {{&#x27;List item &#x27; + o }}
  &#x3C;/div&#x3E;
&#x3C;/el-card&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">With images</h3>
            <p class="mt-2 text-lg">Display richer content by adding some configs.</p>
            <p class="mt-2 text-lg">
              The
              <code>body-style</code> attribute defines CSS style of custom
              <code>body</code>. This example also uses
              <code>el-col</code> for layout.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row :gutter="24">
                  <el-col :md="12" :sm="24" :xs="24" v-for="(o) in 2" :key="o">
                    <el-card :body-style="{ padding: '0px' }" class="my-3">
                      <img
                        src="https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=1566&q=80"
                        class="w-100"
                      />
                      <div class="p-3">
                        <h5>Yummy hamburger</h5>
                        <div class="bottom clearfix">
                          <el-row type="flex" justify="space-between" align="center">
                          <time class="py-2">{{ currentDate | date }}</time>
                          <el-button size="small" type="success" plain class="btn-text">Operating</el-button>
                          </el-row>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-card :body-style=&#x22;{ padding: &#x27;0px&#x27; }&#x22;&#x3E;
  &#x3C;img
    src=&#x22;https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&#x26;ixid=eyjhchbfawqiojeymdd9&#x26;auto=format&#x26;fit=crop&#x26;w=1566&#x26;q=80&#x22;
    class=&#x22;w-100&#x22;
  /&#x3E;
  &#x3C;div class=&#x22;p-3&#x22;&#x3E;
    &#x3C;h5&#x3E;Yummy hamburger&#x3C;/h5&#x3E;
    &#x3C;div class=&#x22;bottom clearfix&#x22;&#x3E;
      &#x3C;el-row type=&#x22;flex&#x22; justify=&#x22;space-between&#x22; align=&#x22;center&#x22;&#x3E;
      &#x3C;time class=&#x22;py-2&#x22;&#x3E;{{ currentDate | date }}&#x3C;/time&#x3E;
      &#x3C;el-button size=&#x22;small&#x22; type=&#x22;success&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Operating&#x3C;/el-button&#x3E;
      &#x3C;/el-row&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/el-card&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Shadow</h3>
            <p class="mt-2 text-lg">You can define when to show the card shadows.</p>
            <p class="mt-2 text-lg">
              The
              <code>shadow</code> attribute determines when the card shadows are displayed. It can be
              <code>always</code>,
              <code>hover</code> or
              <code>never</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row :gutter="12">
                  <el-col :span="8">
                    <el-card shadow="always">Always</el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card shadow="hover">Hover</el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card shadow="never">Never</el-card>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row :gutter=&#x22;12&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;
    &#x3C;el-card shadow=&#x22;always&#x22;&#x3E;
      Always
    &#x3C;/el-card&#x3E;
  &#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;
    &#x3C;el-card shadow=&#x22;hover&#x22;&#x3E;
      Hover
    &#x3C;/el-card&#x3E;
  &#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;
    &#x3C;el-card shadow=&#x22;never&#x22;&#x3E;
      Never
    &#x3C;/el-card&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
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
              <el-table-column label="Accepted values" width="150px">
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
  name: "Cards",
  components: {},
  data() {
    return {
      currentDate: new Date(),
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "header",
          description:
            "title of the card. Also accepts a DOM passed by <code>slot#header</code>",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "body-style",
          description: "CSS style of body",
          type: "object",
          acceptedvalues: "—",
          default: "{ padding: '20px' }",
        },
        {
          attribute: "shadow",
          description: "when to show card shadows",
          type: "string",
          acceptedvalues: "always / hover / never",
          default: "always",
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