<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Input</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Input data using mouse or keyboard.</p>
          <div class="tip"><p>Input is a controlled component, it always shows Vue binding value.</p></div>
          <div class="tip"><p>Under normal circumstances, <code>input</code> event should be handled. Its handler should update component's binding value (or use <code>v-model</code>). Otherwise, input box's value will not change.</p></div>
          <div class="tip"><p>Do not support <code>v-model</code> modifiers.</p></div>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input placeholder="Please input" v-model="input"></el-input>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input placeholder=&#x22;Please input&#x22; v-model=&#x22;input&#x22;&#x3E;&#x3C;/el-input&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled</h3>
            <p
              class="mt-2 text-lg"
            >Disable the Input with the <code>disabled</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input
  placeholder="Please input"
  v-model="input"
  :disabled="true">
</el-input>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input
  placeholder=&#x22;Please input&#x22;
  v-model=&#x22;input&#x22;
  :disabled=&#x22;true&#x22;&#x3E;
&#x3C;/el-input&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Clearable</h3>
            <p
              class="mt-2 text-lg"
            >Make the Input clearable with the <code>clearable</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input
  placeholder="Please input"
  v-model="input"
  clearable>
</el-input>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input
  placeholder=&#x22;Please input&#x22;
  v-model=&#x22;input&#x22;
  clearable&#x3E;
&#x3C;/el-input&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Password box</h3>
            <p
              class="mt-2 text-lg"
            >Make a toggleable password Input with the <code>show-password</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input placeholder="Please input password" v-model="input" show-password></el-input>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input placeholder=&#x22;Please input password&#x22; v-model=&#x22;input&#x22; show-password&#x3E;&#x3C;/el-input&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Input with icon</h3>
            <p
              class="mt-2 text-lg"
            >Add an icon to indicate input type.</p>
            <p
              class="mt-2 text-lg"
            >To add icons in Input, you can simply use <code>prefix-icon</code> and <code>suffix-icon</code> attributes. Also, the <code>prefix</code> and <code>suffix</code> named slots works as well.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="d-flex justify-content-start align-items-center">
  <span class="mx-3">Using attributes</span>
  <el-input
  class="w-30 mx-3"
    placeholder="Pick a date"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
   class="w-30 mx-3"
    placeholder="Type something"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
</div>
<div class="d-flex justify-content-start align-items-center mt-3">
  <span class="mx-3">Using slots</span>
  <el-input
   class="w-30 mx-3"
    placeholder="Pick a date"
    v-model="input3">
    <i slot="suffix" class="el-input__icon el-icon-date"></i>
  </el-input>
  <el-input  class="w-30 mx-3"
    placeholder="Type something"
    v-model="input4">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;d-flex justify-content-start align-items-center&#x22;&#x3E;
  &#x3C;span class=&#x22;mx-3&#x22;&#x3E;Using attributes&#x3C;/span&#x3E;
  &#x3C;el-input
    placeholder=&#x22;Pick a date&#x22;
    suffix-icon=&#x22;el-icon-date&#x22;
    v-model=&#x22;input1&#x22;&#x3E;
  &#x3C;/el-input&#x3E;
  &#x3C;el-input
    placeholder=&#x22;Type something&#x22;
    prefix-icon=&#x22;el-icon-search&#x22;
    v-model=&#x22;input2&#x22;&#x3E;
  &#x3C;/el-input&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;d-flex justify-content-start align-items-center&#x22;&#x3E;
  &#x3C;span class=&#x22;mx-3&#x22;&#x3E;Using slots&#x3C;/span&#x3E;
  &#x3C;el-input
    placeholder=&#x22;Pick a date&#x22;
    v-model=&#x22;input3&#x22;&#x3E;
    &#x3C;i slot=&#x22;suffix&#x22; class=&#x22;el-input__icon el-icon-date&#x22;&#x3E;&#x3C;/i&#x3E;
  &#x3C;/el-input&#x3E;
  &#x3C;el-input
    placeholder=&#x22;Type something&#x22;
    v-model=&#x22;input4&#x22;&#x3E;
    &#x3C;i slot=&#x22;prefix&#x22; class=&#x22;el-input__icon el-icon-search&#x22;&#x3E;&#x3C;/i&#x3E;
  &#x3C;/el-input&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Textarea</h3>
            <p
              class="mt-2 text-lg"
            >Resizable for entering multiple lines of text information. Add attribute <code>type="textarea"</code> to change <code>input</code> into native <code>textarea</code>.</p>
            <p
              class="mt-2 text-lg"
            >Control the height by setting the <code>rows</code> prop.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input
  type="textarea"
  :rows="2"
  placeholder="Please input"
  v-model="textarea">
</el-input>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input
  type=&#x22;textarea&#x22;
  :rows=&#x22;2&#x22;
  placeholder=&#x22;Please input&#x22;
  v-model=&#x22;textarea&#x22;&#x3E;
&#x3C;/el-input&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Autosize Textarea</h3>
            <p
              class="mt-2 text-lg"
            >Setting the <code>autosize</code> prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to <code>autosize</code> to specify the minimum and maximum number of lines the textarea can automatically adjust.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input
  type="textarea"
  autosize
  placeholder="Please input"
  v-model="textarea1">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Please input"
  v-model="textarea2">
</el-input>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input
  type=&#x22;textarea&#x22;
  autosize
  placeholder=&#x22;Please input&#x22;
  v-model=&#x22;textarea1&#x22;&#x3E;
&#x3C;/el-input&#x3E;
&#x3C;div style=&#x22;margin: 20px 0;&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;el-input
  type=&#x22;textarea&#x22;
  :autosize=&#x22;{ minRows: 2, maxRows: 4}&#x22;
  placeholder=&#x22;Please input&#x22;
  v-model=&#x22;textarea2&#x22;&#x3E;
&#x3C;/el-input&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Mixed input</h3>
            <p
              class="mt-2 text-lg"
            >Prepend or append an element, generally a label or a button.</p>
            <p
              class="mt-2 text-lg"
            >Use <code>slot</code> to distribute elements that prepend or append to Input.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div>
  <el-input placeholder="Please input" v-model="input11">
    <template slot="prepend">Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input22">
    <template slot="append">.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input33" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="Select">
      <el-option label="Restaurant" value="1"></el-option>
      <el-option label="Order No." value="2"></el-option>
      <el-option label="Tel" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div&#x3E;
  &#x3C;el-input placeholder=&#x22;Please input&#x22; v-model=&#x22;input1&#x22;&#x3E;
    &#x3C;template slot=&#x22;prepend&#x22;&#x3E;Http://&#x3C;/template&#x3E;
  &#x3C;/el-input&#x3E;
&#x3C;/div&#x3E;
&#x3C;div style=&#x22;margin-top: 15px;&#x22;&#x3E;
  &#x3C;el-input placeholder=&#x22;Please input&#x22; v-model=&#x22;input2&#x22;&#x3E;
    &#x3C;template slot=&#x22;append&#x22;&#x3E;.com&#x3C;/template&#x3E;
  &#x3C;/el-input&#x3E;
&#x3C;/div&#x3E;
&#x3C;div style=&#x22;margin-top: 15px;&#x22;&#x3E;
  &#x3C;el-input placeholder=&#x22;Please input&#x22; v-model=&#x22;input3&#x22; class=&#x22;input-with-select&#x22;&#x3E;
    &#x3C;el-select v-model=&#x22;select&#x22; slot=&#x22;prepend&#x22; placeholder=&#x22;Select&#x22;&#x3E;
      &#x3C;el-option label=&#x22;Restaurant&#x22; value=&#x22;1&#x22;&#x3E;&#x3C;/el-option&#x3E;
      &#x3C;el-option label=&#x22;Order No.&#x22; value=&#x22;2&#x22;&#x3E;&#x3C;/el-option&#x3E;
      &#x3C;el-option label=&#x22;Tel&#x22; value=&#x22;3&#x22;&#x3E;&#x3C;/el-option&#x3E;
    &#x3C;/el-select&#x3E;
    &#x3C;el-button slot=&#x22;append&#x22; icon=&#x22;el-icon-search&#x22;&#x3E;&#x3C;/el-button&#x3E;
  &#x3C;/el-input&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Sizes</h3>
            <p
              class="mt-2 text-lg"
            >Add <code>size</code> attribute to change the size of Input. In addition to the default size, there are three other options: <code>large</code>, <code>small</code> and <code>mini</code>.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<div class="demo-input-size">
  <el-input class="mb-3"
    placeholder="Please Input"
    v-model="input111">
  </el-input>
 <el-input class="mb-3"
    size="medium"
    placeholder="Please Input"
    v-model="input222">
  </el-input>
  <el-input class="mb-3"
    size="small"
    placeholder="Please Input"
    v-model="input333">
  </el-input>
  <el-input class="mb-3"
    size="mini"
    placeholder="Please Input"
    v-model="input444">
  </el-input>
</div>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;div class=&#x22;demo-input-size&#x22;&#x3E;
  &#x3C;el-input
    placeholder=&#x22;Please Input&#x22;
    v-model=&#x22;input1&#x22;&#x3E;
  &#x3C;/el-input&#x3E;
  &#x3C;el-input
    size=&#x22;medium&#x22;
    placeholder=&#x22;Please Input&#x22;
    v-model=&#x22;input2&#x22;&#x3E;
  &#x3C;/el-input&#x3E;
  &#x3C;el-input
    size=&#x22;small&#x22;
    placeholder=&#x22;Please Input&#x22;
    v-model=&#x22;input3&#x22;&#x3E;
  &#x3C;/el-input&#x3E;
  &#x3C;el-input
    size=&#x22;mini&#x22;
    placeholder=&#x22;Please Input&#x22;
    v-model=&#x22;input4&#x22;&#x3E;
  &#x3C;/el-input&#x3E;
&#x3C;/div&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Autocomplete</h3>
            <p
              class="mt-2 text-lg"
            >You can get some recommended tips based on the current input.</p>
            <p
              class="mt-2 text-lg"
            >Autocomplete component provides input suggestions. The <code>fetch-suggestions</code> attribute is a method that returns suggested input. In this example, <code>querySearch(queryString, cb)</code> returns suggestions to Autocomplete via <code>cb(data)</code> when suggestions are ready.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="mb-3">list suggestions when activated</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="mb-3">list suggestions on input</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row class=&#x22;demo-autocomplete&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22;&#x3E;
    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;list suggestions when activated&#x3C;/div&#x3E;
    &#x3C;el-autocomplete
      class=&#x22;inline-input&#x22;
      v-model=&#x22;state1&#x22;
      :fetch-suggestions=&#x22;querySearch&#x22;
      placeholder=&#x22;Please Input&#x22;
      @select=&#x22;handleSelect&#x22;
    &#x3E;&#x3C;/el-autocomplete&#x3E;
  &#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22;&#x3E;
    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;list suggestions on input&#x3C;/div&#x3E;
    &#x3C;el-autocomplete
      class=&#x22;inline-input&#x22;
      v-model=&#x22;state2&#x22;
      :fetch-suggestions=&#x22;querySearch&#x22;
      placeholder=&#x22;Please Input&#x22;
      :trigger-on-focus=&#x22;false&#x22;
      @select=&#x22;handleSelect&#x22;
    &#x3E;&#x3C;/el-autocomplete&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Custom template</h3>
            <p
              class="mt-2 text-lg"
            >Customize how suggestions are displayed.</p>
            <p
              class="mt-2 text-lg"
            >Use <code>scoped slot</code> to customize suggestion items. In the scope, you can access the suggestion object via the <code>item</code> key.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-autocomplete
  popper-class="my-autocomplete"
  v-model="state"
  :fetch-suggestions="querySearch"
  placeholder="Please input"
  @select="handleSelect">
  <i
    class="el-icon-edit el-input__icon"
    slot="suffix"
    @click="handleIconClick">
  </i>
  <template slot-scope="{ item }">
    <div class="value">{{ item.value }}</div>
    <span class="link">{{ item.link }}</span>
  </template>
</el-autocomplete>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-autocomplete
  popper-class=&#x22;my-autocomplete&#x22;
  v-model=&#x22;state&#x22;
  :fetch-suggestions=&#x22;querySearch&#x22;
  placeholder=&#x22;Please input&#x22;
  @select=&#x22;handleSelect&#x22;&#x3E;
  &#x3C;i
    class=&#x22;el-icon-edit el-input__icon&#x22;
    slot=&#x22;suffix&#x22;
    @click=&#x22;handleIconClick&#x22;&#x3E;
  &#x3C;/i&#x3E;
  &#x3C;template slot-scope=&#x22;{ item }&#x22;&#x3E;
    &#x3C;div class=&#x22;value&#x22;&#x3E;{{ item.value }}&#x3C;/div&#x3E;
    &#x3C;span class=&#x22;link&#x22;&#x3E;{{ item.link }}&#x3C;/span&#x3E;
  &#x3C;/template&#x3E;
&#x3C;/el-autocomplete&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Remote search</h3>
            <p
              class="mt-2 text-lg"
            >Search data from server-side.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="Please input"
  @select="handleSelect"
></el-autocomplete>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-autocomplete
  v-model=&#x22;state&#x22;
  :fetch-suggestions=&#x22;querySearchAsync&#x22;
  placeholder=&#x22;Please input&#x22;
  @select=&#x22;handleSelect&#x22;
&#x3E;&#x3C;/el-autocomplete&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Limit length</h3>
            <p
              class="mt-2 text-lg"
            ><code>maxlength</code> and <code>minlength</code> are attributes of native input, they declare a limit on the number of characters a user can input. The "number of characters" is measured using JavaScript string length.Setting the <code>maxlength</code> prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting <code>show-word-limit</code> to <code>true</code> at the same time.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-input
  type="text"
  placeholder="Please input"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="Please input"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-input
  type=&#x22;text&#x22;
  placeholder=&#x22;Please input&#x22;
  v-model=&#x22;text&#x22;
  maxlength=&#x22;10&#x22;
  show-word-limit
&#x3E;
&#x3C;/el-input&#x3E;
&#x3C;div style=&#x22;margin: 20px 0;&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;el-input
  type=&#x22;textarea&#x22;
  placeholder=&#x22;Please input&#x22;
  v-model=&#x22;textarea&#x22;
  maxlength=&#x22;30&#x22;
  show-word-limit
&#x3E;
&#x3C;/el-input&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">API</h3>
            <el-table :data="attributeApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="350px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="150px">
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
            <h3 class="mt-8x">Slots</h3>
            <el-table :data="slotApi" class="mt-2">
              <el-table-column label="Name" width="170px">
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
              <el-table-column label="Event Name" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.eventname" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="500px">
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
            <el-table :data="methodApi" class="mt-2">
              <el-table-column label="Method" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="500px">
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
            <h3 class="mt-8x">Autocomplete Attributes</h3>
            <el-table :data="autoApi" class="mt-2">
              <el-table-column label="Attribute" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="350px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="150px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="Options">
                <template slot-scope="scope">
                  <span v-html="scope.row.options" />
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
            <h3 class="mt-8x">Autocomplete Scoped Slots</h3>
            <el-table :data="autoslotApi" class="mt-2">
              <el-table-column label="Name" width="170px">
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
            <h3 class="mt-8x">Autocomplete Events</h3>
            <el-table :data="autoeventApi" class="mt-2">
              <el-table-column label="Event Name" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.eventname" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="500px">
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
            <h3 class="mt-8x">Autocomplete Methods</h3>
            <el-table :data="automethodApi" class="mt-2">
              <el-table-column label="Method" width="170px">
                <template slot-scope="scope">
                  <span v-html="scope.row.method" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="500px">
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
  name: 'Input',
  components: {},
  data() {
    return {
        text: '',
        timeout:  null,
        state: '',
        links: [],
        state1: '',
        state2: '',
        input111: '',
        input222: '',
        input333: '',
        input444: '',
        input11: '',
        input22: '',
        input33: '',
        select: '',
        textarea1: '',
        textarea2: '',
        textarea: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input: '',
      loadingIndexes: [10],
      attributeApi: [{"attribute":"type","description":"type of input","type":"string","acceptedvalues":"text, textarea and other <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types\">native input types</a>","default":"text"},{"attribute":"value / v-model","description":"binding value","type":"string / number","acceptedvalues":"—","default":"—"},{"attribute":"maxlength","description":"same as <code>maxlength</code> in native input","type":"number","acceptedvalues":"—","default":"—"},{"attribute":"minlength","description":"same as <code>minlength</code> in native input","type":"number","acceptedvalues":"—","default":"—"},{"attribute":"show-word-limit","description":"whether show word count，only works when <code>type</code> is 'text' or 'textarea'","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"placeholder","description":"placeholder of Input","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"clearable","description":"whether to show clear button","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"show-password","description":"whether to show toggleable password input","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"disabled","description":"whether Input is disabled","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"size","description":"size of Input, works when <code>type</code> is not 'textarea'","type":"string","acceptedvalues":"medium / small / mini","default":"—"},{"attribute":"prefix-icon","description":"prefix icon class","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"suffix-icon","description":"suffix icon class","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"rows","description":"number of rows of textarea, only works when <code>type</code> is 'textarea'","type":"number","acceptedvalues":"—","default":"2"},{"attribute":"autosize","description":"whether textarea has an adaptive height, only works when <code>type</code> is 'textarea'. Can accept an object, e.g. { minRows: 2, maxRows: 6 }","type":"boolean / object","acceptedvalues":"—","default":"false"},{"attribute":"autocomplete","description":"same as <code>autocomplete</code> in native input","type":"string","acceptedvalues":"on/off","default":"off"},{"attribute":"auto-complete","description":"@DEPRECATED in next major version","type":"string","acceptedvalues":"on/off","default":"off"},{"attribute":"name","description":"same as <code>name</code> in native input","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"readonly","description":"same as <code>readonly</code> in native input","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"max","description":"same as <code>max</code> in native input","type":"—","acceptedvalues":"—","default":"—"},{"attribute":"min","description":"same as <code>min</code> in native input","type":"—","acceptedvalues":"—","default":"—"},{"attribute":"step","description":"same as <code>step</code> in native input","type":"—","acceptedvalues":"—","default":"—"},{"attribute":"resize","description":"control the resizability","type":"string","acceptedvalues":"none, both, horizontal, vertical","default":"—"},{"attribute":"autofocus","description":"same as <code>autofocus</code> in native input","type":"boolean","acceptedvalues":"—","default":"false"},{"attribute":"form","description":"same as <code>form</code> in native input","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"label","description":"label text","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"tabindex","description":"input tabindex","type":"string","acceptedvalues":"-","default":"-"},{"attribute":"validate-event","description":"whether to trigger form validation","type":"boolean","acceptedvalues":"-","default":"true"}],
      slotApi: [{"name":"prefix","description":"content as Input prefix, only works when <code>type</code> is 'text'"},{"name":"suffix","description":"content as Input suffix, only works when <code>type</code> is 'text'"},{"name":"prepend","description":"content to prepend before Input, only works when <code>type</code> is 'text'"},{"name":"append","description":"content to append after Input, only works when <code>type</code> is 'text'"}],
      eventApi: [{"eventname":"change","description":"triggers when input value changes","parameters":"color value"},{"eventname":"active-change","description":"triggers when the current active color changes","parameters":"active color value"}],
      methodApi: [{"method":"focus","description":"focus the input element","parameters":"—"},{"method":"blur","description":"blur the input element","parameters":"—"},{"method":"select","description":"select the text in input element","parameters":"—"}],
      autoApi: [{"attribute":"placeholder","description":"the placeholder of Autocomplete","type":"string","options":"—","default":"—"},{"attribute":"clearable","description":"whether to show clear button","type":"boolean","options":"—","default":"false"},{"attribute":"disabled","description":"whether Autocomplete is disabled","type":"boolean","options":"—","default":"false"},{"attribute":"value-key","description":"key name of the input suggestion object for display","type":"string","options":"—","default":"value"},{"attribute":"icon","description":"icon name","type":"string","options":"—","default":"—"},{"attribute":"value","description":"binding value","type":"string","options":"—","default":"—"},{"attribute":"debounce","description":"debounce delay when typing, in milliseconds","type":"number","options":"—","default":"300"},{"attribute":"placement","description":"placement of the popup menu","type":"string","options":"top / top-start / top-end / bottom / bottom-start / bottom-end","default":"bottom-start"},{"attribute":"fetch-suggestions","description":"a method to fetch input suggestions. When suggestions are ready, invoke <code>callback(data:[])</code> to return them to Autocomplete","type":"Function(queryString, callback)","options":"—","default":"—"},{"attribute":"popper-class","description":"custom class name for autocomplete's dropdown","type":"string","options":"—","default":"—"},{"attribute":"trigger-on-focus","description":"whether show suggestions when input focus","type":"boolean","options":"—","default":"true"},{"attribute":"name","description":"same as <code>name</code> in native input","type":"string","options":"—","default":"—"},{"attribute":"select-when-unmatched","description":"whether to emit a <code>select</code> event on enter when there is no autocomplete match","type":"boolean","options":"—","default":"false"},{"attribute":"label","description":"label text","type":"string","options":"—","default":"—"},{"attribute":"prefix-icon","description":"prefix icon class","type":"string","options":"—","default":"—"},{"attribute":"suffix-icon","description":"suffix icon class","type":"string","options":"—","default":"—"},{"attribute":"hide-loading","description":"whether to hide the loading icon in remote search","type":"boolean","options":"—","default":"false"},{"attribute":"popper-append-to-body","description":"whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false","type":"boolean","options":"-","default":"true"},{"attribute":"highlight-first-item","description":"whether to highlight first item in remote search suggestions by default","type":"boolean","options":"—","default":"false"}],
      autoslotApi: [{"name":"—","description":"Custom content for input suggestions. The scope parameter is { item }"}],
      autoeventApi: [{"eventname":"select","description":"triggers when a suggestion is clicked","parameters":"suggestion being clicked"},{"eventname":"change","description":"triggers when the icon inside Input value change","parameters":"(value: string | number)"}],
      automethodApi: [{"method":"focus","description":"focus the input element","parameters":"—"}]
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
    },
    querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
  },
  mounted() {
      this.links = this.loadAll();
    }
}
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
