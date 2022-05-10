<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Layout</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Quickly and easily create layouts with the basic 24-column.</p>
          <hr class="section-divider">

          <div>
            <h3 class="mt-8x">Basic layout</h3>
            <p
              class="mt-2 text-lg"
            >Create basic grid layout using columns.</p>
            <p
              class="mt-2 text-lg"
            >With <code>row</code> and <code>col</code>, we can easily manipulate the layout using the <code>span</code> attribute.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;24&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-dark&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Column spacing</h3>
            <p
              class="mt-2 text-lg"
            >Column spacing is supported.</p>
            <p
              class="mt-2 text-lg"
            ><p>Row provides <code>gutter</code> attribute to specify spacings between columns, and its default value is 0.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row :gutter=&#x22;20&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Hybrid layout</h3>
            <p
              class="mt-2 text-lg"
            >Form a more complex hybrid layout by combining the basic 1/24 columns.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row :gutter=&#x22;20&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;16&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row :gutter=&#x22;20&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;8&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row :gutter=&#x22;20&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;16&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;4&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Column offset</h3>
            <p
              class="mt-2 text-lg"
            >You can specify column offsets.</p>
            <p
              class="mt-2 text-lg"
            >You can specify the number of column offset by setting the value of <code>offset</code> attribute of Col.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row :gutter=&#x22;20&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22; :offset=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row :gutter=&#x22;20&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22; :offset=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22; :offset=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row :gutter=&#x22;20&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22; :offset=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Alignment</h3>
            <p
              class="mt-2 text-lg"
            >Use the flex layout to make flexible alignment of columns.</p>
            <p
              class="mt-2 text-lg"
            >You can enable flex layout by setting <code>type</code> attribute to 'flex', and define the layout of child elements by setting <code>justify</code> attribute with start, center, end, space-between or space-around.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-row type="flex" class="row-bg">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="end">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row type=&#x22;flex&#x22; class=&#x22;row-bg&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row type=&#x22;flex&#x22; class=&#x22;row-bg&#x22; justify=&#x22;center&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row type=&#x22;flex&#x22; class=&#x22;row-bg&#x22; justify=&#x22;end&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row type=&#x22;flex&#x22; class=&#x22;row-bg&#x22; justify=&#x22;space-between&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row type=&#x22;flex&#x22; class=&#x22;row-bg&#x22; justify=&#x22;space-around&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;6&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Responsive Layout</h3>
            <p
              class="mt-2 text-lg"
            >Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg and xl.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row :gutter=&#x22;10&#x22;&#x3E;
  &#x3C;el-col :xs=&#x22;8&#x22; :sm=&#x22;6&#x22; :md=&#x22;4&#x22; :lg=&#x22;3&#x22; :xl=&#x22;1&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :xs=&#x22;4&#x22; :sm=&#x22;6&#x22; :md=&#x22;8&#x22; :lg=&#x22;9&#x22; :xl=&#x22;11&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :xs=&#x22;4&#x22; :sm=&#x22;6&#x22; :md=&#x22;8&#x22; :lg=&#x22;9&#x22; :xl=&#x22;11&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
  &#x3C;el-col :xs=&#x22;8&#x22; :sm=&#x22;6&#x22; :md=&#x22;4&#x22; :lg=&#x22;3&#x22; :xl=&#x22;1&#x22;&#x3E;&#x3C;div class=&#x22;grid-content bg-purple-light&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Row API</h3>
            <el-table :data="rowattributeApi" class="mt-2">
              <el-table-column label="Attribute" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="370px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="200px">
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
            <h3 class="mt-8x">Col API</h3>
            <el-table :data="colrowattributeApi" class="mt-2">
              <el-table-column label="Attribute" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.attribute" />
                </template>
              </el-table-column>
              <el-table-column label="Description" width="370px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description" />
                </template>
              </el-table-column>
              <el-table-column label="Type" width="200px">
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
  name: 'Layout',
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      rowattributeApi: [{"attribute":"gutter","description":"grid spacing","type":"number","acceptedvalues":"—","default":"0"},{"attribute":"type","description":"layout mode, you can use flex, works in modern browsers","type":"string","acceptedvalues":"—","default":"—"},{"attribute":"justify","description":"horizontal alignment of flex layout","type":"string","acceptedvalues":"start/end/center/space-around/space-between","default":"start"},{"attribute":"align","description":"vertical alignment of flex layout","type":"string","acceptedvalues":"top/middle/bottom","default":"top"},{"attribute":"tag","description":"custom element tag","type":"string","acceptedvalues":"*","default":"div"}],
      colrowattributeApi: [{"attribute":"span","description":"number of column the grid spans","type":"number","acceptedvalues":"—","default":"24"},{"attribute":"offset","description":"number of spacing on the left side of the grid","type":"number","acceptedvalues":"—","default":"0"},{"attribute":"push","description":"number of columns that grid moves to the right","type":"number","acceptedvalues":"—","default":"0"},{"attribute":"pull","description":"number of columns that grid moves to the left","type":"number","acceptedvalues":"—","default":"0"},{"attribute":"xs","description":"<code>&lt;768px</code> Responsive columns or column props object","type":"number/object (e.g. {span: 4, offset: 4})","acceptedvalues":"—","default":"—"},{"attribute":"sm","description":"<code>≥768px</code> Responsive columns or column props object","type":"number/object (e.g. {span: 4, offset: 4})","acceptedvalues":"—","default":"—"},{"attribute":"md","description":"<code>≥992px</code> Responsive columns or column props object","type":"number/object (e.g. {span: 4, offset: 4})","acceptedvalues":"—","default":"—"},{"attribute":"lg","description":"<code>≥1200px</code> Responsive columns or column props object","type":"number/object (e.g. {span: 4, offset: 4})","acceptedvalues":"—","default":"—"},{"attribute":"xl","description":"<code>≥1920px</code> Responsive columns or column props object","type":"number/object (e.g. {span: 4, offset: 4})","acceptedvalues":"—","default":"—"},{"attribute":"tag","description":"custom element tag","type":"string","acceptedvalues":"*","default":"div"}]
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
