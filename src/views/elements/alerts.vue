<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Alert</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Displays important alert messages.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Alert components are non-overlay elements in the page that does not disappear automatically.</p>
            <p class="mt-2 text-lg">
              Alert provides 4 types of themes defined by <code>type</code>, whose default value is <code>info</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-alert
                  title="success alert"
                  type="success"
                />
                <el-alert
                  title="info alert"
                  type="info"
                />
                <el-alert
                  title="warning alert"
                  type="warning"
                />
                <el-alert
                  title="error alert"
                  type="error"
                />
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-alert
    title=&#x22;success alert&#x22;
    type=&#x22;success&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;info alert&#x22;
    type=&#x22;info&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;warning alert&#x22;
    type=&#x22;warning&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;error alert&#x22;
    type=&#x22;error&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Theme</h3>
            <p
              class="mt-2 text-lg"
            >Alert provide two different themes, <code>light</code> and <code>dark</code>.</p>
            <p class="mt-2 text-lg">
              Set <code>effect</code> to change theme, default is <code>light</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-alert
                  title="success alert"
                  type="success"
                  effect="dark"
                />
                <el-alert
                  title="info alert"
                  type="info"
                  effect="dark"
                />
                <el-alert
                  title="warning alert"
                  type="warning"
                  effect="dark"
                />
                <el-alert
                  title="error alert"
                  type="error"
                  effect="dark"
                />
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-alert
    title=&#x22;success alert&#x22;
    type=&#x22;success&#x22;
    effect=&#x22;dark&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;info alert&#x22;
    type=&#x22;info&#x22;
    effect=&#x22;dark&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;warning alert&#x22;
    type=&#x22;warning&#x22;
    effect=&#x22;dark&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;error alert&#x22;
    type=&#x22;error&#x22;
    effect=&#x22;dark&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Customizable close button</h3>
            <p
              class="mt-2 text-lg"
            >Customize the close button as texts or other symbols.</p>
            <p class="mt-2 text-lg">
              Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. <code>closable</code> attribute decides if the component can be closed or not. It accepts <code>boolean</code>, and the default is <code>true</code>. You can set <code>close-text</code> attribute to replace the default cross symbol as the close button. Be careful that <code>close-text</code> must be a string. <code>close</code> event fires when the component is closed.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-alert
                  title="unclosable alert"
                  type="success"
                  :closable="false"
                />
                <el-alert
                  title="customized close-text"
                  type="info"
                  close-text="Gotcha"
                />
                <el-alert
                  title="alert with callback"
                  type="warning"
                  @close="hello"
                />
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
            <h3 class="mt-8x">With icon</h3>
            <p
              class="mt-2 text-lg"
            >Displaying an icon improves readability.</p>
            <p class="mt-2 text-lg">
              Setting the <code>show-icon</code> attribute displays an icon that corresponds with the current Alert type.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-alert
                  title="success alert"
                  type="success"
                  show-icon
                />
                <el-alert
                  title="info alert"
                  type="info"
                  show-icon
                />
                <el-alert
                  title="warning alert"
                  type="warning"
                  show-icon
                />
                <el-alert
                  title="error alert"
                  type="error"
                  show-icon
                />
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
   &#x3C;el-alert
    title=&#x22;success alert&#x22;
    type=&#x22;success&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;info alert&#x22;
    type=&#x22;info&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;warning alert&#x22;
    type=&#x22;warning&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;error alert&#x22;
    type=&#x22;error&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Centered text</h3>
            <p class="mt-2 text-lg">
              Use the <code>center</code> attribute to center the text.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-alert
                  title="success alert"
                  type="success"
                  center
                  show-icon
                />
                <el-alert
                  title="info alert"
                  type="info"
                  center
                  show-icon
                />
                <el-alert
                  title="warning alert"
                  type="warning"
                  center
                  show-icon
                />
                <el-alert
                  title="error alert"
                  type="error"
                  center
                  show-icon
                />
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;el-alert
    title=&#x22;success alert&#x22;
    type=&#x22;success&#x22;
    center
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;info alert&#x22;
    type=&#x22;info&#x22;
    center
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;warning alert&#x22;
    type=&#x22;warning&#x22;
    center
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;error alert&#x22;
    type=&#x22;error&#x22;
    center
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">With description</h3>
            <p
              class="mt-2 text-lg"
            >Description includes a message with more detailed information.</p>
            <p class="mt-2 text-lg">
              Besides the required <code>title</code> attribute, you can add a <code>description</code> attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-alert
                  title="with description"
                  type="success"
                  description="This is a description."
                />
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
 &#x3C;el-alert
    title=&#x22;with description&#x22;
    type=&#x22;success&#x22;
    description=&#x22;This is a description.&#x22;&#x3E;
  &#x3C;/el-alert&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">With icon and description</h3>
            <p
              class="mt-2 text-lg"
            >At last, this is an example with both icon and description.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-alert
                  title="success alert"
                  type="success"
                  description="more text description"
                  show-icon
                />
                <el-alert
                  title="info alert"
                  type="info"
                  description="more text description"
                  show-icon
                />
                <el-alert
                  title="warning alert"
                  type="warning"
                  description="more text description"
                  show-icon
                />
                <el-alert
                  title="error alert"
                  type="error"
                  description="more text description"
                  show-icon
                />
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
 &#x3C;el-alert
    title=&#x22;success alert&#x22;
    type=&#x22;success&#x22;
    description=&#x22;more text description&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;info alert&#x22;
    type=&#x22;info&#x22;
    description=&#x22;more text description&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;warning alert&#x22;
    type=&#x22;warning&#x22;
    description=&#x22;more text description&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
  &#x3C;el-alert
    title=&#x22;error alert&#x22;
    type=&#x22;error&#x22;
    description=&#x22;more text description&#x22;
    show-icon&#x3E;
  &#x3C;/el-alert&#x3E;
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
import Vue from 'vue'
import clipboard from '@/utils/clipboard'
import VueCodeHighlight from 'vue-code-highlight'
Vue.use(VueCodeHighlight) // registers the v-highlight directive
import 'vue-code-highlight/themes/prism-okaidia.css'

export default {
  name: 'Alerts',
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      attributeApi: [{ 'attribute': 'title', 'description': 'title', 'type': 'string', 'acceptedvalues': '—', 'default': '—' }, { 'attribute': 'type', 'description': 'Component type', 'type': 'string', 'acceptedvalues': 'success/warning/info/error', 'default': 'info' }, { 'attribute': 'description', 'description': 'Descriptive text. Can also be passed with the default slot', 'type': 'string', 'acceptedvalues': '—', 'default': '—' }, { 'attribute': 'closable', 'description': 'If closable or not', 'type': 'boolean', 'acceptedvalues': '—', 'default': 'true' }, { 'attribute': 'center', 'description': 'Whether to center the text', 'type': 'boolean', 'acceptedvalues': '—', 'default': 'false' }, { 'attribute': 'close-text', 'description': 'Customized close button text', 'type': 'string', 'acceptedvalues': '—', 'default': '—' }, { 'attribute': 'show-icon', 'description': 'If a type icon is displayed', 'type': 'boolean', 'acceptedvalues': '—', 'default': 'false' }, { 'attribute': 'effect', 'description': 'Choose theme', 'type': 'string', 'acceptedvalues': 'light/dark', 'default': 'light' }],
      slotApi: [{ 'name': '—', 'description': 'description' }, { 'name': 'title', 'description': 'content of the Alert title' }],
      eventApi: [{ 'eventname': 'close', 'description': 'fires when alert is closed', 'parameters': '—' }]
    }
  },

  methods: {
    randomKey() {
      return new Date() + (Math.random() * 1000).toFixed(0)
    },

    handleState(index) {
      return this.loadingIndexes.indexOf(index) > -1
    },
    handleLoading(index) {
      this.loadingIndexes.push(index)

      setTimeout(() => {
        this.isLoading = false
        this.index = 0

        this.loadingIndexes = this.loadingIndexes.filter((p) => p != index)
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
