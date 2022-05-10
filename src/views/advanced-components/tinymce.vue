<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xl="16">
        <el-row :gutter="24">
          <el-col :span="24">
            <div class="card border-0 shadow-sm p-5">
              <h4>TinyMCE</h4>
              <span>{{ $t('components.tinymceTips') }}</span>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Basic Demo</h4>
              </div>
              <div class="card-body">
                <tinymce v-model="content" :height="300" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Preview</h4>
              </div>
              <div class="card-body">
                <div class="editor-content" v-html="content" />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";

export default {
  name: "TinymceDemo",
  components: { Tinymce },
  data() {
    return {
      content: `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`,
    };
  },
};
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>

