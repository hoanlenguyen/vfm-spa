<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Borders</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Borders</h3>
            <p
              class="mt-2 text-lg"
            >Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.</p>

            <h3 class="mt-8x">Additive</h3>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="d-inline-block m-2 p-5 bg-warning-light-9 border"></div>
                <div class="d-inline-block m-2 p-5 bg-warning-light-9 border-top"></div>
                <div class="d-inline-block m-2 p-5 bg-warning-light-9 border-right"></div>
                <div class="d-inline-block m-2 p-5 bg-warning-light-9 border-bottom"></div>
                <div class="d-inline-block m-2 p-5 bg-warning-light-9 border-left"></div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border-top&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border-right&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border-bottom&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border-left&#x22;&#x3E;&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Subtractive</h3>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-0"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-top-0"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-right-0"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-bottom-0"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-left-0"></span>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-0&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-top-0&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-right-0&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-bottom-0&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-left-0&#x22;&#x3E;&#x3C;/span&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Border color</h3>
            <p
              class="mt-2 text-lg"
            >Change the border color using utilities built on our theme colors.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-primary"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-default"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-success"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-danger"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-warning"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-info"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-light"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-dark"></span>
                <span class="d-inline-block m-2 p-5 bg-warning-light-9 border border-white"></span>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-primary&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-default&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-success&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-danger&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-warning&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-info&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-light&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-dark&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-warning-light-9 border border-white&#x22;&#x3E;&#x3C;/span&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Border-radius</h3>
            <p class="mt-2 text-lg">Add classes to an element to easily round its corners.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded"></span>
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded-top"></span>
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded-right"></span>
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded-bottom"></span>
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded-left"></span>
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded-circle"></span>
                <span class="d-inline-block m-2 p-5 w-abs-160 bg-dark-light-5 rounded-pill"></span>
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded-0"></span>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded-top&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded-right&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded-bottom&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded-left&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded-circle&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 w-abs-160 bg-dark-light-5 rounded-pill&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded-0&#x22;&#x3E;&#x3C;/span&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Sizes</h3>
            <p class="mt-2 text-lg">
              Use
              <code>.rounded-lg</code> or
              <code>.rounded-sm</code> for larger or smaller border-radius.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded-lg"></span>
                <span class="d-inline-block m-2 p-5 bg-dark-light-5 rounded-sm"></span>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded-lg&#x22;&#x3E;&#x3C;/span&#x3E;
&#x3C;span class=&#x22;d-inline-block m-2 p-5 bg-dark-light-5 rounded-sm&#x22;&#x3E;&#x3C;/span&#x3E;
                </code>
            </pre>
            </div>
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
  name: "Borderss",
  components: {},
  data() {
    return {
      brandBorderss: [
        { name: "primary" },
        { name: "success" },
        { name: "warning" },
        { name: "info" },
        { name: "danger" },
        { name: "white" },
        { name: "dark" },
      ],
    };
  },

  methods: {
    getBordersCode(element) {
      return window.css(element);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
