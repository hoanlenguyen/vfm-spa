<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Loading</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Show animation while loading data.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Displays animation in a container (such as a table) while loading data.</p>
            <p class="mt-2 text-lg">
              Element provides two ways to invoke Loading: directive and service. For the custom directive
              <code>v-loading</code>, you just need to bind a
              <code>boolean</code> value to it. By default, the loading mask will append to the element where the directive is used. Adding the
              <code>body</code> modifier makes the mask append to the body element.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-table v-loading="loading" :data="tableData" style="width: 100%">
                  <el-table-column prop="date" label="Date" width="180"></el-table-column>
                  <el-table-column prop="name" label="Name" width="180"></el-table-column>
                  <el-table-column prop="address" label="Address"></el-table-column>
                </el-table>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-table
  v-loading=&#x22;loading&#x22;
  :data=&#x22;tableData&#x22;
  style=&#x22;width: 100%&#x22;&#x3E;
  &#x3C;el-table-column
    prop=&#x22;date&#x22;
    label=&#x22;Date&#x22;
    width=&#x22;180&#x22;&#x3E;
  &#x3C;/el-table-column&#x3E;
  &#x3C;el-table-column
    prop=&#x22;name&#x22;
    label=&#x22;Name&#x22;
    width=&#x22;180&#x22;&#x3E;
  &#x3C;/el-table-column&#x3E;
  &#x3C;el-table-column
    prop=&#x22;address&#x22;
    label=&#x22;Address&#x22;&#x3E;
  &#x3C;/el-table-column&#x3E;
&#x3C;/el-table&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Customization</h3>
            <p
              class="mt-2 text-lg"
            >You can customize loading text, loading spinner and background color.</p>
            <p class="mt-2 text-lg">
              Add attribute
              <code>element-loading-text</code> to the element on which
              <code>v-loading</code> is bound, and its value will be displayed under the spinner. Similarly,
              <code>element-loading-spinner</code> and
              <code>element-loading-background</code> are for customizing loading spinner class name and background color.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-table
                  v-loading="loading"
                  element-loading-text="Loading..."
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.8)"
                  :data="tableData"
                  style="width: 100%"
                >
                  <el-table-column prop="date" label="Date" width="180"></el-table-column>
                  <el-table-column prop="name" label="Name" width="180"></el-table-column>
                  <el-table-column prop="address" label="Address"></el-table-column>
                </el-table>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-table
    v-loading=&#x22;loading&#x22;
    element-loading-text=&#x22;Loading...&#x22;
    element-loading-spinner=&#x22;el-icon-loading&#x22;
    element-loading-background=&#x22;rgba(0, 0, 0, 0.8)&#x22;
    :data=&#x22;tableData&#x22;
    style=&#x22;width: 100%&#x22;&#x3E;
    &#x3C;el-table-column
      prop=&#x22;date&#x22;
      label=&#x22;Date&#x22;
      width=&#x22;180&#x22;&#x3E;
    &#x3C;/el-table-column&#x3E;
    &#x3C;el-table-column
      prop=&#x22;name&#x22;
      label=&#x22;Name&#x22;
      width=&#x22;180&#x22;&#x3E;
    &#x3C;/el-table-column&#x3E;
    &#x3C;el-table-column
      prop=&#x22;address&#x22;
      label=&#x22;Address&#x22;&#x3E;
    &#x3C;/el-table-column&#x3E;
  &#x3C;/el-table&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Full screen loading</h3>
            <p class="mt-2 text-lg">Show a full screen animation while loading data.</p>
            <p class="mt-2 text-lg">
              When used as a directive, a full screen Loading requires the
              <code>fullscreen</code> modifier, and it will be appended to body. In this case, if you wish to disable scrolling on body, you can add another modifier
              <code>lock</code>. When used as a service, Loading will be full screen by default.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-button
                  type="primary"
                  @click="openFullScreen1"
                  v-loading.fullscreen.lock="fullscreenLoading"
                >As a directive</el-button>
                <el-button type="primary" @click="openFullScreen2">As a service</el-button>
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
            <h3 class="mt-8x">Service</h3>
            <p
              class="mt-2 text-lg"
            >You can also invoke Loading with a service. Import Loading service:</p>
          </div>
          <div v-highlight language="html" class="mt-2">
            <pre class="language-js" v-pre>
                <code>
    import { Loading } from &#x27;element-ui&#x27;;
                </code>
            </pre>
          </div>
          <p class="mt-4 text-lg">Invoke it:</p>
          <div v-highlight language="html" class="mt-2">
            <pre class="language-js" v-pre>
                <code>
    Loading.service(options);
                </code>
            </pre>
          </div>
          <p class="mt-4 text-lg">
            The parameter
            <code>options</code> is the configuration of Loading, and its details can be found in the following table.
            <code>LoadingService</code> returns a Loading instance, and you can close it by invoking its
            <code>close</code> method:
          </p>
          <div v-highlight language="html" class="mt-2">
            <pre class="language-js" v-pre>
                <code>
    let loadingInstance = Loading.service(options);
    this.$nextTick(() =&#x3E; { // Loading should be closed asynchronously
        loadingInstance.close();
    });
                </code>
            </pre>
          </div>
          <p
            class="mt-4 text-lg"
          >Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:</p>
          <div v-highlight language="html" class="mt-2">
            <pre class="language-js" v-pre>
                <code>
    let loadingInstance1 = Loading.service({ fullscreen: true });
    let loadingInstance2 = Loading.service({ fullscreen: true });
    console.log(loadingInstance1 === loadingInstance2); // true
                </code>
            </pre>
          </div>
          <p class="mt-4 text-lg">
            Calling the
            <code>close</code> method on any one of them can close this full screen Loading.
          </p>
          <p class="mt-4 text-lg">
            If Element is imported entirely, a globally method
            <code>$loading</code> will be registered to Vue.prototype. You can invoke it like this:
            <code>this.$loading(options)</code>, and it also returns a Loading instance.
          </p>

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
  name: "Loading",
  components: {},
  data() {
    return {
      fullscreenLoading: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
        {
          date: "2016-05-04",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
        {
          date: "2016-05-01",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
      ],
      loading: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
        {
          date: "2016-05-04",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
        {
          date: "2016-05-01",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District",
        },
      ],
      loading: true,
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "target",
          description:
            "the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to <code>document.querySelector</code> to get the corresponding DOM node",
          type: "object/string",
          acceptedvalues: "—",
          default: "document.body",
        },
        {
          attribute: "body",
          description:
            "same as the <code>body</code> modifier of <code>v-loading</code>",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "fullscreen",
          description:
            "same as the <code>fullscreen</code> modifier of <code>v-loading</code>",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "lock",
          description:
            "same as the <code>lock</code> modifier of <code>v-loading</code>",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "text",
          description: "loading text that displays under the spinner",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "spinner",
          description: "class name of the custom spinner",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "background",
          description: "background color of the mask",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "customClass",
          description: "custom class name for Loading",
          type: "string",
          acceptedvalues: "—",
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
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
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
