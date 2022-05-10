<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Avatar</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >Avatars can be used to represent people or objects. It supports images, Icons, or characters.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic</h3>
            <p class="mt-2 text-lg">
              use
              <code>shape</code> and
              <code>size</code> prop to set avatar's shape and size.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-col :span="12" class="border-right">
                    <h6 class="text-center">circle</h6>
                    <div class="d-flex justify-content-between align-items-center p-5">
                      <s-avatar :size="50" :src="circleUrl" />
                      <s-avatar :size="size" :src="circleUrl" v-for="size in sizeList" :key="size" />
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <h6 class="text-center">square</h6>
                    <div class="d-flex justify-content-between align-items-center p-5">
                      <s-avatar shape="square" :size="50" :src="circleUrl" />
                      <s-avatar
                        shape="square"
                        :size="size"
                        :src="circleUrl"
                        v-for="size in sizeList"
                        :key="size"
                      />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;template&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22; class=&#x22;border-right&#x22;&#x3E;
    &#x3C;h6 class=&#x22;text-center&#x22;&#x3E;circle&#x3C;/h6&#x3E;
    &#x3C;div class=&#x22;d-flex justify-content-between align-items-center p-5&#x22;&#x3E;
      &#x3C;s-avatar :size=&#x22;50&#x22; :src=&#x22;circleUrl&#x22; /&#x3E;
      &#x3C;s-avatar :size=&#x22;size&#x22; :src=&#x22;circleUrl&#x22; v-for=&#x22;size in sizeList&#x22; :key=&#x22;size&#x22; /&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22;&#x3E;
    &#x3C;h6 class=&#x22;text-center&#x22;&#x3E;square&#x3C;/h6&#x3E;
    &#x3C;div class=&#x22;d-flex justify-content-between align-items-center p-5&#x22;&#x3E;
      &#x3C;s-avatar shape=&#x22;square&#x22; :size=&#x22;50&#x22; :src=&#x22;circleUrl&#x22; /&#x3E;
      &#x3C;s-avatar shape=&#x22;square&#x22; :size=&#x22;size&#x22; :src=&#x22;circleUrl&#x22; v-for=&#x22;size in sizeList&#x22; :key=&#x22;size&#x22; /&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
  export default {
    data () {
      return {
        circleUrl: &#x22;https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png&#x22;,
        squareUrl: &#x22;https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png&#x22;,
        sizeList: [&#x22;large&#x22;, &#x22;medium&#x22;, &#x22;small&#x22;]
      }
    }
  }
&#x3C;/script&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Types</h3>
            <p class="mt-2 text-lg">It supports images, Icons, or characters</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-around align-items-center">
                  <s-avatar icon="el-icon-user-solid" />
                  <s-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  />
                  <s-avatar name="Shyann Corwin" @error="errorHandler"></s-avatar>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-flex justify-content-around align-items-center&#x22;&#x3E;
  &#x3C;s-avatar icon=&#x22;el-icon-user-solid&#x22; /&#x3E;
  &#x3C;s-avatar
    src=&#x22;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&#x22;
  /&#x3E;
  &#x3C;s-avatar name=&#x22;&#x27;Shyann Corwin&#x27;&#x22; @error=&#x22;errorHandler&#x22;&#x3E;&#x3C;/s-avatar&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Fallback when image load error</h3>
            <p class="mt-2 text-lg">Fallback when image load error.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="demo-type">
                  <s-avatar :size="60" src="https://empty" @error="errorHandler">
                    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                  </s-avatar>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;template&#x3E;
  &#x3C;div class=&#x22;demo-type&#x22;&#x3E;
    &#x3C;s-avatar :size=&#x22;60&#x22; src=&#x22;https://empty&#x22; @error=&#x22;errorHandler&#x22;&#x3E;
      &#x3C;img src=&#x22;https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png&#x22;/&#x3E;
      &#x3C;/s-avatar&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
&#x3C;/script&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">How the image fit its container</h3>
            <p class="mt-2 text-lg">
              Set how the image fit its container for an image avatar, same as
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
              >object-fit</a>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-around align-items-center">
                  <div v-for="fit in fits" :key="fit">
                    <h6 class="mb-3">{{ fit }}</h6>
                    <s-avatar shape="square" :size="100" :fit="fit" :src="url" />
                  </div>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;template&#x3E;
  &#x3C;div class=&#x22;demo-fit&#x22;&#x3E;
    &#x3C;div class=&#x22;block&#x22; v-for=&#x22;fit in fits&#x22; :key=&#x22;fit&#x22;&#x3E;
        &#x3C;span class=&#x22;title&#x22;&#x3E;{{ fit }}&#x3C;/span&#x3E;
        &#x3C;s-avatar shape=&#x22;square&#x22; :size=&#x22;100&#x22; :fit=&#x22;fit&#x22; :src=&#x22;url&#x22;&#x3E;&#x3C;/s-avatar&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
  export default {
    data() {
      return {
        fits: [&#x27;fill&#x27;, &#x27;contain&#x27;, &#x27;cover&#x27;, &#x27;none&#x27;, &#x27;scale-down&#x27;],
        url: &#x27;https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg&#x27;
      }
    }
  }
&#x3C;/script&#x3E;
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

          <div>
            <h3 class="mt-8x">Events</h3>
            <el-table :data="eventApi" class="mt-2">
              <el-table-column label="Event Name" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.eventname" />
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
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
  name: "Avatar",
  components: {},
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "icon",
          description:
            "set representation type to Icon, more info on Icon Component",
          type: "string",
          acceptedvalues: "",
          default: "",
        },
        {
          attribute: "size",
          description: "set avatar size",
          type: "number/string",
          acceptedvalues: "number / large / medium / small",
          default: "large",
        },
        {
          attribute: "shape",
          description: "set avatar shape",
          type: "string",
          acceptedvalues: "circle / square",
          default: "circle",
        },
        {
          attribute: "src",
          description: "the address of the image for an image avatar",
          type: "string",
          acceptedvalues: "",
          default: "",
        },
        {
          attribute: "srcSet",
          description:
            "A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use",
          type: "string",
          acceptedvalues: "",
          default: "",
        },
        {
          attribute: "alt",
          description:
            "This attribute defines an alternative text description of the image",
          type: "string",
          acceptedvalues: "",
          default: "",
        },
        {
          attribute: "fit",
          description:
            "set how the image fit its container for an image avatar",
          type: "string",
          acceptedvalues: "fill / contain / cover / none / scale-down",
          default: "cover",
        },
      ],
      eventApi: [
        {
          eventname: "error",
          description:
            "handler when img load error, return false to prevent default fallback behavior",
          parameters: "(e: Event)",
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
    errorHandler() {
      return true;
    },
  },
};
</script>