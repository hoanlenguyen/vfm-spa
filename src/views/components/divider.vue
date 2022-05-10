<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Divider</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">The dividing line that separates the content.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p
              class="mt-2 text-lg"
            >Divide the text of different paragraphs.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div>
    <span>I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.</span>
    <el-divider></el-divider>
    <span>There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.</span>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div&#x3E;
    &#x3C;span&#x3E;I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.&#x3C;/span&#x3E;
    &#x3C;el-divider&#x3E;&#x3C;/el-divider&#x3E;
    &#x3C;span&#x3E;There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.&#x3C;/span&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>


        <div>
            <h3 class="mt-8x">Custom Content</h3>
            <p
              class="mt-2 text-lg"
            >You can customize the content on the divider line.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <el-divider content-position="left">Rabindranath Tagore</el-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
    <el-divider content-position="right">Rabindranath Tagore</el-divider>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div&#x3E;
    &#x3C;span&#x3E;What you are you do not see, what you see is your shadow. &#x3C;/span&#x3E;
    &#x3C;el-divider content-position=&#x22;left&#x22;&#x3E;Rabindranath Tagore&#x3C;/el-divider&#x3E;
    &#x3C;span&#x3E;I cannot choose the best. The best chooses me.&#x3C;/span&#x3E;
    &#x3C;el-divider&#x3E;&#x3C;i class=&#x22;el-icon-star-on&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/el-divider&#x3E;
    &#x3C;span&#x3E;My wishes are fools, they shout across thy song, my Master. Let me but listen.&#x3C;/span&#x3E;
    &#x3C;el-divider content-position=&#x22;right&#x22;&#x3E;Rabindranath Tagore&#x3C;/el-divider&#x3E;
  &#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Vertical divider</h3>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
  <div>
    <span>Rain</span>
    <el-divider direction="vertical"></el-divider>
    <span>Home</span>
    <el-divider direction="vertical"></el-divider>
    <span>Grass</span>
  </div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
  &#x3C;div&#x3E;
    &#x3C;span&#x3E;Rain&#x3C;/span&#x3E;
    &#x3C;el-divider direction=&#x22;vertical&#x22;&#x3E;&#x3C;/el-divider&#x3E;
    &#x3C;span&#x3E;Home&#x3C;/span&#x3E;
    &#x3C;el-divider direction=&#x22;vertical&#x22;&#x3E;&#x3C;/el-divider&#x3E;
    &#x3C;span&#x3E;Grass&#x3C;/span&#x3E;
  &#x3C;/div&#x3E;
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
  name: 'Divider',
  components: {},
  data() {
    return {
        value: new Date(),
      loadingIndexes: [10],
      attributeApi: [{"attribute":"direction","description":"Set divider's direction","type":"string","acceptedvalues":"horizontal / vertical","default":"horizontal"},{"attribute":"content-position","description":"customize the content on the divider line","type":"String","acceptedvalues":"left / right / center","default":"center"}]
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
