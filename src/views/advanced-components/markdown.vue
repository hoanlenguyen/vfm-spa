<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xl="16">
        <el-row :gutter="24">
          <el-col :span="24">
            <div class="card border-0 shadow-sm p-5">
              <h4>Markdown</h4>
              <span>
                GFM Markdown and WYSIWYG Editor - Productive and Extensible. For more info visit <a href="https://github.com/nhn/tui.editor" target="_blank">Toast UI Editor</a>
              </span>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Basic Demo</h4>
              </div>
              <div class="card-body">
                <markdown-editor
                ref="toastuiEditor1" 
                :initialValue="content1" 
                height="300px" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Markdown Mode</h4>
              </div>
              <div class="card-body">
                <markdown-editor
                  ref="markdownEditor1"
                  :initialValue="content2"
                  initialEditType="markdown"
                  previewStyle='tab'
                  :options="{hideModeSwitch:true}"
                  height="300px"
                />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Wysiwyg Mode</h4>
              </div>
              <div class="card-body">
                <markdown-editor
                  ref="markdownEditor1"
                  :initialValue="content2"
                  initialEditType="wysiwyg"
                  :options="{hideModeSwitch:true}"
                  height="300px"
                />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Customize Toolbar</h4>
              </div>
              <div class="card-body">
                <markdown-editor
                  :initialValue="content3"
                  :options="{ toolbarItems: ['heading','bold','italic']}"
                />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h4>Preview</h4>
                <el-button type="info" @click="getHtml">
                  <s-icon icon="material-low-priority" />
                  <span>Generate HTML</span>
                </el-button>
              </div>
              <div class="card-body">
                <div v-html="html" />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

const content = [
  "![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)",
  "",
  "# Heading 1",
  "## Heading 2",
  "### Heading 3",
  "#### Heading 4",
  "##### Heading 5",
  "###### Heading 6",
  "",
  "**bold** *italic* ~~strikethrough~~",
  '<span style="color:#e11d21;">Color Syntax</span>',
  "[link](https://nhn.github.io/tui.editor/)",
  "",
  "---",
  "horizontal line",
  "***",
  "",
  "> block quote",
  ">> block quote (2 depth)",
  ">>> block quote (3 depth)",
  "",
  "* list",
  "    * list indented",
  "1. ordered",
  "2. list",
  "    1. ordered list",
  "    2. indented",
  "",
  "- [ ] task",
  "- [x] list completed",
  "",
  "`inline code`",
  "",
  "    code block",
  "```js",
  'console.log("fenced code block");',
  "```",
  "<pre>**HTML block**</pre>",
  "",
  "| table | head |",
  "| ----  | ---- |",
  "| table | body |",
].join("\n");

export default {
  name: "MarkdownDemo",
  components: { markdownEditor: Editor },
  data() {
    return {
      content1: content,
      content2: content,
      content3: content,
      content4: content,
      html: ''
    };
  },

  methods: {
    getHtml() {
      this.html = this.$refs.toastuiEditor1.invoke("getHtml");
    },
  },
};
</script>