<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Carousel</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Loop a series of images or texts in a limited space.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              Combine
              <code>el-carousel</code> with
              <code>el-carousel-item</code>, and you'll get a carousel. Content of each slide is completely customizable, and you just need to place it inside
              <code>el-carousel-item</code> tag. By default the carousel switches when mouse hovers over an indicator. Set
              <code>trigger</code> to
              <code>click</code>, and the carousel switches only when an indicator is clicked.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row :gutter="24">
                  <el-col :md="12" :sm="24" :xs="24"  class="my-3">
                    <span>Switch when indicator is hovered (default)</span>
                    <el-carousel height="150px" class="mt-3">
                      <el-carousel-item v-for="item in 4" :key="item" class="bg-primary d-flex justify-content-center align-items-center">
                        <h3>{{ item }}</h3>
                      </el-carousel-item>
                    </el-carousel>
                  </el-col>
                  <el-col :md="12" :sm="24" :xs="24" class="my-3">
                    <span>Switch when indicator is clicked</span>
                    <el-carousel trigger="click" height="150px"  class="mt-3">
                      <el-carousel-item v-for="item in 4" :key="item" class="bg-success d-flex justify-content-center align-items-center">
                        <h3>{{ item }}</h3>
                      </el-carousel-item>
                    </el-carousel>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;11&#x22;&#x3E;
    &#x3C;span&#x3E;Switch when indicator is hovered (default)&#x3C;/span&#x3E;
    &#x3C;el-carousel height=&#x22;150px&#x22; class=&#x22;mt-3&#x22;&#x3E;
      &#x3C;el-carousel-item v-for=&#x22;item in 4&#x22; :key=&#x22;item&#x22; class=&#x22;bg-primary d-flex justify-content-center align-items-center&#x22;&#x3E;
        &#x3C;h3&#x3E;{{ item }}&#x3C;/h3&#x3E;
      &#x3C;/el-carousel-item&#x3E;
    &#x3C;/el-carousel&#x3E;
  &#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;11&#x22; :offset=&#x22;2&#x22;&#x3E;
    &#x3C;span&#x3E;Switch when indicator is clicked&#x3C;/span&#x3E;
    &#x3C;el-carousel trigger=&#x22;click&#x22; height=&#x22;150px&#x22;  class=&#x22;mt-3&#x22;&#x3E;
      &#x3C;el-carousel-item v-for=&#x22;item in 4&#x22; :key=&#x22;item&#x22; class=&#x22;bg-success d-flex justify-content-center align-items-center&#x22;&#x3E;
        &#x3C;h3&#x3E;{{ item }}&#x3C;/h3&#x3E;
      &#x3C;/el-carousel-item&#x3E;
    &#x3C;/el-carousel&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Indicators</h3>
            <p class="mt-2 text-lg">You can define when arrows are displayed.</p>
            <p class="mt-2 text-lg">
              The
              <code>arrow</code> attribute determines when arrows are displayed. By default they appear when mouse hovers over the carousel. Setting
              <code>arrow</code> to
              <code>always</code> or
              <code>never</code> shows/hides the arrows permanently.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="item in 4" :key="item"  class="bg-primary d-flex justify-content-center align-items-center">
                    <h3>{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-carousel :interval=&#x22;5000&#x22; arrow=&#x22;always&#x22;&#x3E;
  &#x3C;el-carousel-item v-for=&#x22;item in 4&#x22; :key=&#x22;item&#x22;  class=&#x22;bg-primary d-flex justify-content-center align-items-center&#x22;&#x3E;
    &#x3C;h3&#x3E;{{ item }}&#x3C;/h3&#x3E;
  &#x3C;/el-carousel-item&#x3E;
&#x3C;/el-carousel&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Arrows</h3>
            <p class="mt-2 text-lg">You can define when arrows are displayed.</p>
            <p class="mt-2 text-lg">
              The
              <code>arrow</code> attribute determines when arrows are displayed. By default they appear when mouse hovers over the carousel. Setting
              <code>arrow</code> to
              <code>always</code> or
              <code>never</code> shows/hides the arrows permanently.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="item in 4" :key="item" class="bg-primary d-flex justify-content-center align-items-center">
                    <h3>{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-carousel :interval=&#x22;5000&#x22; arrow=&#x22;always&#x22;&#x3E;
  &#x3C;el-carousel-item v-for=&#x22;item in 4&#x22; :key=&#x22;item&#x22; class=&#x22;bg-primary d-flex justify-content-center align-items-center&#x22;&#x3E;
    &#x3C;h3&#x3E;{{ item }}&#x3C;/h3&#x3E;
  &#x3C;/el-carousel-item&#x3E;
&#x3C;/el-carousel&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Card mode</h3>
            <p
              class="mt-2 text-lg"
            >When a page is wide enough but has limited height, you can activate card mode for carousels.</p>
            <p class="mt-2 text-lg">
              Setting
              <code>type</code> to
              <code>card</code> activates the card mode. Apart from the appearance, the biggest difference between card mode and common mode is that clicking the slides at both sides directly switches the carousel in card mode.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="item in 6" :key="item" class="bg-primary d-flex justify-content-center align-items-center">
                    <h3 class="medium">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-carousel :interval=&#x22;4000&#x22; type=&#x22;card&#x22; height=&#x22;200px&#x22;&#x3E;
  &#x3C;el-carousel-item v-for=&#x22;item in 6&#x22; :key=&#x22;item&#x22; class=&#x22;bg-primary d-flex justify-content-center align-items-center&#x22;&#x3E;
    &#x3C;h3 class=&#x22;medium&#x22;&#x3E;{{ item }}&#x3C;/h3&#x3E;
  &#x3C;/el-carousel-item&#x3E;
&#x3C;/el-carousel&#x3E;
                </code>
            </pre>
            </div>
            <p class="mt-2 text-lg">
              By default,
              <code>direction</code> is
              <code>horizontal</code>. Let carousel be displayed in the vertical direction by setting
              <code>direction</code> to
              <code>vertical</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-carousel height="200px" direction="vertical" :autoplay="false">
                  <el-carousel-item v-for="item in 4" :key="item" class="bg-primary d-flex justify-content-center align-items-center">
                    <h3 class="medium">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-carousel height=&#x22;200px&#x22; direction=&#x22;vertical&#x22; :autoplay=&#x22;false&#x22;&#x3E;
    &#x3C;el-carousel-item v-for=&#x22;item in 4&#x22; :key=&#x22;item&#x22;&#x3E;
      &#x3C;h3 class=&#x22;medium&#x22;&#x3E;{{ item }}&#x3C;/h3&#x3E;
    &#x3C;/el-carousel-item&#x3E;
  &#x3C;/el-carousel&#x3E;
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

          <div>
            <h3 class="mt-8x">Methods</h3>
            <el-table :data="methodsApi" class="mt-2">
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
  name: "Carousel",
  components: {},
  data() {
    return {
      currentDate: new Date(),
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "height",
          description: "height of the carousel",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "initial-index",
          description: "index of the initially active slide (starting from 0)",
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
        {
          attribute: "trigger",
          description: "how indicators are triggered",
          type: "string",
          acceptedvalues: "hover/click",
          default: "hover",
        },
        {
          attribute: "autoplay",
          description: "whether automatically loop the slides",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "interval",
          description: "interval of the auto loop, in milliseconds",
          type: "number",
          acceptedvalues: "—",
          default: "3000",
        },
        {
          attribute: "indicator-position",
          description: "position of the indicators",
          type: "string",
          acceptedvalues: "outside/none",
          default: "—",
        },
        {
          attribute: "arrow",
          description: "when arrows are shown",
          type: "string",
          acceptedvalues: "always/hover/never",
          default: "hover",
        },
        {
          attribute: "type",
          description: "type of the Carousel",
          type: "string",
          acceptedvalues: "card",
          default: "—",
        },
        {
          attribute: "loop",
          description: "display the items in loop",
          type: "boolean",
          acceptedvalues: "-",
          default: "true",
        },
        {
          attribute: "direction",
          description: "display direction",
          type: "string",
          acceptedvalues: "horizontal/vertical",
          default: "horizontal",
        },
      ],
      eventApi: [
        {
          eventname: "change",
          description: "triggers when the active slide switches",
          parameters:
            "index of the new active slide, index of the old active slide",
        },
      ],
      methodsApi: [
        {
          eventname: "change",
          description: "triggers when the active slide switches",
          parameters:
            "index of the new active slide, index of the old active slide",
        },
      ],
      itemApi: [
        {
          attribute: "name",
          description:
            "name of the item, can be used in <code>setActiveItem</code>",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "label",
          description: "text content for the corresponding indicator",
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
  },
};
</script>