<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Pagination</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >If you have too much data to display in one page, use pagination.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">
              Set
              <code>layout</code> with different pagination elements you wish to display separated with a comma. Pagination elements are:
              <code>prev</code> (a button navigating to the previous page),
              <code>next</code> (a button navigating to the next page),
              <code>pager</code> (page list),
              <code>jumper</code> (a jump-to input),
              <code>total</code> (total item count),
              <code>size</code> (a select to determine page size) and
              <code>-&gt;</code>(every element after this symbol will be pulled to the right).
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="block">
                  <span class="demonstration">When you have few pages</span>
                  <s-pagination layout="prev, pager, next" :total="50"></s-pagination>
                </div>
                <div class="block">
                  <span class="demonstration">When you have more than 7 pages</span>
                  <s-pagination layout="prev, pager, next" :total="1000"></s-pagination>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;span class=&#x22;demonstration&#x22;&#x3E;When you have few pages&#x3C;/span&#x3E;
  &#x3C;s-pagination
    layout=&#x22;prev, pager, next&#x22;
    :total=&#x22;50&#x22;&#x3E;
  &#x3C;/s-pagination&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;span class=&#x22;demonstration&#x22;&#x3E;When you have more than 7 pages&#x3C;/span&#x3E;
  &#x3C;s-pagination
    layout=&#x22;prev, pager, next&#x22;
    :total=&#x22;1000&#x22;&#x3E;
  &#x3C;/s-pagination&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Number of pagers</h3>
            <p class="mt-2 text-lg">
              By default, Pagination collapses extra pager buttons when it has more than 7 pages. This can be configured with the
              <code>pager-count</code> attribute.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <s-pagination
                  :page-size="20"
                  :pager-count="11"
                  layout="prev, pager, next"
                  :total="1000"
                ></s-pagination>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;s-pagination
  :page-size=&#x22;20&#x22;
  :pager-count=&#x22;11&#x22;
  layout=&#x22;prev, pager, next&#x22;
  :total=&#x22;1000&#x22;&#x3E;
&#x3C;/s-pagination&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Buttons with background color</h3>
            <p class="mt-2 text-lg">
              Set the
              <code>background</code> attribute and the buttons will have a background color.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <s-pagination background layout="prev, pager, next" :total="1000"></s-pagination>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;s-pagination
  background
  layout=&#x22;prev, pager, next&#x22;
  :total=&#x22;1000&#x22;&#x3E;
&#x3C;/s-pagination&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Small Pagination</h3>
            <p class="mt-2 text-lg">Use small pagination in the case of limited space.</p>
            <p class="mt-2 text-lg">
              Just set the
              <code>small</code> attribute to
              <code>true</code> and the Pagination becomes smaller.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <s-pagination small layout="prev, pager, next" :total="50"></s-pagination>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;s-pagination
  small
  layout=&#x22;prev, pager, next&#x22;
  :total=&#x22;50&#x22;&#x3E;
&#x3C;/s-pagination&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">More elements</h3>
            <p class="mt-2 text-lg">Add more modules based on your scenario.</p>
            <p class="mt-2 text-lg">
              This example is a complete use case. It uses
              <code>size-change</code> and
              <code>current-change</code> event to handle page size changes and current page changes.
              <code>page-sizes</code> accepts an array of integers, each of which represents a different page size in the
              <code>sizes</code> select options, e.g.
              <code>[100, 200, 300, 400]</code> indicates that the select will have four options: 100, 200, 300 or 400 items per page.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <div class="block">
                  <span class="demonstration">Total item count</span>
                  <s-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000"
                  ></s-pagination>
                </div>
                <div class="block">
                  <span class="demonstration">Change page size</span>
                  <s-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage2"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="sizes, prev, pager, next"
                    :total="1000"
                  ></s-pagination>
                </div>
                <div class="block">
                  <span class="demonstration">Jump to</span>
                  <s-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000"
                  ></s-pagination>
                </div>
                <div class="block">
                  <span class="demonstration">All combined</span>
                  <s-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                  ></s-pagination>
                </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Total item count&#x3C;/span&#x3E;
  &#x3C;s-pagination
    @size-change=&#x22;handleSizeChange&#x22;
    @current-change=&#x22;handleCurrentChange&#x22;
    :current-page.sync=&#x22;currentPage1&#x22;
    :page-size=&#x22;100&#x22;
    layout=&#x22;total, prev, pager, next&#x22;
    :total=&#x22;1000&#x22;&#x3E;
  &#x3C;/s-pagination&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Change page size&#x3C;/span&#x3E;
  &#x3C;s-pagination
    @size-change=&#x22;handleSizeChange&#x22;
    @current-change=&#x22;handleCurrentChange&#x22;
    :current-page.sync=&#x22;currentPage2&#x22;
    :page-sizes=&#x22;[100, 200, 300, 400]&#x22;
    :page-size=&#x22;100&#x22;
    layout=&#x22;sizes, prev, pager, next&#x22;
    :total=&#x22;1000&#x22;&#x3E;
  &#x3C;/s-pagination&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;span class=&#x22;demonstration&#x22;&#x3E;Jump to&#x3C;/span&#x3E;
  &#x3C;s-pagination
    @size-change=&#x22;handleSizeChange&#x22;
    @current-change=&#x22;handleCurrentChange&#x22;
    :current-page.sync=&#x22;currentPage3&#x22;
    :page-size=&#x22;100&#x22;
    layout=&#x22;prev, pager, next, jumper&#x22;
    :total=&#x22;1000&#x22;&#x3E;
  &#x3C;/s-pagination&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;block&#x22;&#x3E;
  &#x3C;span class=&#x22;demonstration&#x22;&#x3E;All combined&#x3C;/span&#x3E;
  &#x3C;s-pagination
    @size-change=&#x22;handleSizeChange&#x22;
    @current-change=&#x22;handleCurrentChange&#x22;
    :current-page.sync=&#x22;currentPage4&#x22;
    :page-sizes=&#x22;[100, 200, 300, 400]&#x22;
    :page-size=&#x22;100&#x22;
    layout=&#x22;total, sizes, prev, pager, next, jumper&#x22;
    :total=&#x22;400&#x22;&#x3E;
  &#x3C;/s-pagination&#x3E;
&#x3C;/div&#x3E;
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
  name: "Pagination",
  components: {},
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "small",
          description: "whether to use small pagination",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "background",
          description: "whether the buttons have a background color",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "page-size",
          description: "item count of each page, supports the .sync modifier",
          type: "number",
          acceptedvalues: "—",
          default: "10",
        },
        {
          attribute: "total",
          description: "total item count",
          type: "number",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "page-count",
          description:
            "total page count. Set either <code>total</code> or <code>page-count</code> and pages will be displayed; if you need <code>page-sizes</code>, <code>total</code> is required",
          type: "number",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "pager-count",
          description:
            "number of pagers. Pagination collapses when the total page count exceeds this value",
          type: "number",
          acceptedvalues: "odd number between 5 and 21",
          default: "7",
        },
        {
          attribute: "current-page",
          description: "current page number, supports the .sync modifier",
          type: "number",
          acceptedvalues: "—",
          default: "1",
        },
        {
          attribute: "layout",
          description: "layout of Pagination, elements separated with a comma",
          type: "string",
          acceptedvalues:
            "<code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code>",
          default: "'prev, pager, next, jumper, -&gt;, total'",
        },
        {
          attribute: "page-sizes",
          description: "options of item count per page",
          type: "number[]",
          acceptedvalues: "—",
          default: "[10, 20, 30, 40, 50, 100]",
        },
        {
          attribute: "popper-class",
          description: "custom class name for the page size Select's dropdown",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "prev-text",
          description: "text for the prev button",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "next-text",
          description: "text for the next button",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "disabled",
          description: "whether Pagination is disabled",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "hide-on-single-page",
          description: "whether to hide when there's only one page",
          type: "boolean",
          acceptedvalues: "—",
          default: "-",
        },
      ],
      slotApi: [
        {
          name: "—",
          description:
            "custom content. To use this, you need to declare <code>slot</code> in <code>layout</code>",
        },
      ],
      eventApi: [
        {
          eventname: "size-change",
          description: "triggers when <code>page-size</code> changes",
          parameters: "the new page size",
        },
        {
          eventname: "current-change",
          description: "triggers when <code>current-page</code> changes",
          parameters: "the new current page",
        },
        {
          eventname: "prev-click",
          description:
            "triggers when the prev button is clicked and current page changes",
          parameters: "the new current page",
        },
        {
          eventname: "next-click",
          description:
            "triggers when the next button is clicked and current page changes",
          parameters: "the new current page",
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
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
