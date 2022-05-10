<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Button</span>
              <span
                class="card-sub-label"
              >Use Stonehub’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</span>
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p
            class="text-xl c-grey"
          >ElementUI includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button>Default</el-button>
                  <el-button type="primary">Primary</el-button>
                  <el-button type="success">Success</el-button>
                  <el-button type="info">Info</el-button>
                  <el-button type="warning">Warning</el-button>
                  <el-button type="danger">Danger</el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
  &#x3C;el-button&#x3E;Default&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22;&#x3E;Primary&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22;&#x3E;Success&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22;&#x3E;Info&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;warning&#x22;&#x3E;Warning&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22;&#x3E;Danger&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Icon Buttons</h3>
            <p class="mt-2 text-lg">
              Use
              <code>btn-light</code>
              <code>btn-icon</code> and
              <code>type</code> to have a custom button style with a lighter background color and dark font color.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button class="btn-icon btn-light">
                    <s-icon icon="material-call-split" />
                  </el-button>
                  <el-button type="primary" class="btn-icon btn-light">
                    <s-icon icon="weather-moonrise" />
                  </el-button>
                  <el-button type="success" class="btn-icon btn-light">
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button type="info" class="btn-icon btn-light" icon="el-icon-data-line"></el-button>
                  <el-button type="warning" class="btn-icon btn-light">
                    <i class="el-icon-data-line"></i>
                  </el-button>
                  <el-button type="danger" class="btn-icon btn-light">
                    <i class="las la-random" />
                  </el-button>
                </el-row>
                <el-row>
                  <el-button circle class="btn-icon btn-light">
                    <s-icon icon="material-call-split" />
                  </el-button>
                  <el-button circle type="primary" class="btn-icon btn-light">
                    <s-icon icon="weather-moonrise" />
                  </el-button>
                  <el-button circle type="success" class="btn-icon btn-light">
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button circle type="info" class="btn-icon btn-light" icon="el-icon-data-line"></el-button>
                  <el-button circle type="warning" class="btn-icon btn-light">
                    <i class="el-icon-data-line"></i>
                  </el-button>
                  <el-button circle type="danger" class="btn-icon btn-light">
                    <i class="las la-random" />
                  </el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
&#x3C;el-button class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;material-call-split&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button type=&#x22;primary&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;weather-moonrise&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button type=&#x22;success&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button type=&#x22;info&#x22; class=&#x22;btn-icon btn-light&#x22; icon=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/el-button&#x3E;
&#x3C;el-button type=&#x22;warning&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;i class=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;i class=&#x22;las la-random&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
&#x3C;el-button circle class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;material-call-split&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button circle type=&#x22;primary&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;weather-moonrise&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button circle type=&#x22;success&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button circle type=&#x22;info&#x22; class=&#x22;btn-icon btn-light&#x22; icon=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/el-button&#x3E;
&#x3C;el-button circle type=&#x22;warning&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;i class=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button circle type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
  &#x3C;i class=&#x22;las la-random&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Plain Icon Buttons</h3>
            <p class="mt-2 text-lg">
              Use
              <code>btn-light</code>
              <code>btn-icon</code>
              <code>plain</code> and
              <code>type</code> to have a custom button style with a lighter background color and dark font color.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button plain class="btn-icon btn-light">
                    <s-icon icon="material-call-split" />
                  </el-button>
                  <el-button plain type="primary" class="btn-icon btn-light">
                    <s-icon icon="weather-moonrise" />
                  </el-button>
                  <el-button plain type="success" class="btn-icon btn-light">
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button plain type="info" class="btn-icon btn-light" icon="el-icon-data-line"></el-button>
                  <el-button plain type="warning" class="btn-icon btn-light">
                    <i class="el-icon-data-line"></i>
                  </el-button>
                  <el-button plain type="danger" class="btn-icon btn-light">
                    <i class="las la-random" />
                  </el-button>
                </el-row>
                <el-row>
                  <el-button plain circle class="btn-icon btn-light">
                    <s-icon icon="material-call-split" />
                  </el-button>
                  <el-button plain circle type="primary" class="btn-icon btn-light">
                    <s-icon icon="weather-moonrise" />
                  </el-button>
                  <el-button plain circle type="success" class="btn-icon btn-light">
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button
                    plain
                    circle
                    type="info"
                    class="btn-icon btn-light"
                    icon="el-icon-data-line"
                  ></el-button>
                  <el-button plain circle type="warning" class="btn-icon btn-light">
                    <i class="el-icon-data-line"></i>
                  </el-button>
                  <el-button plain circle type="danger" class="btn-icon btn-light">
                    <i class="las la-random" />
                  </el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
  &#x3C;el-button plain class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;material-call-split&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;primary&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;weather-moonrise&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;success&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;info&#x22; class=&#x22;btn-icon btn-light&#x22; icon=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;warning&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;i class=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/i&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;i class=&#x22;las la-random&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-button plain circle class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;material-call-split&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain circle type=&#x22;primary&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;weather-moonrise&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain circle type=&#x22;success&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    plain
    circle
    type=&#x22;info&#x22;
    class=&#x22;btn-icon btn-light&#x22;
    icon=&#x22;el-icon-data-line&#x22;
  &#x3E;&#x3C;/el-button&#x3E;
  &#x3C;el-button plain circle type=&#x22;warning&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;i class=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/i&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain circle type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;i class=&#x22;las la-random&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Buttons With Icons</h3>
            <p class="mt-2 text-lg">
              Use buttons with a wide range of Stonehub's awesome
              <a
                href="/#/icons/svg-icon-material"
                target="_blank"
              >Icon Collections</a>
            </p>
            <p class="mt-2">
              Use
              <code>btn-light</code>
              <code>btn-icon</code>
              <code>plain</code> and
              <code>type</code> to have a custom button style with a lighter background color and dark font color.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button plain class="btn-light">
                    <s-icon icon="material-call-split" />
                    <span>Call Split</span>
                  </el-button>
                  <el-button plain type="primary" class="btn-light">
                    <s-icon icon="weather-moonrise" />
                    <span>Moon Rise</span>
                  </el-button>
                  <el-button plain type="success" class="btn-light">
                    <s-icon icon="entypo-adjust" />
                    <span>Adjust</span>
                  </el-button>
                  <el-button plain type="info" class="btn-light" icon="el-icon-data-line">Dashboard</el-button>
                  <el-button plain type="warning" class="btn-light">
                    <i class="el-icon-data-line"></i>
                    <span>Dashboard</span>
                  </el-button>
                  <el-button plain type="danger" class="btn-light">
                    <i class="far fa-arrow-alt-circle-left" />
                    <span>Back</span>
                  </el-button>
                  <el-button plain type="danger" class="btn-light">
                    <span>Next</span>
                    <i class="far fa-arrow-alt-circle-right" />
                  </el-button>
                </el-row>
                <el-row>
                  <el-button plain>
                    <s-icon icon="material-call-split" />
                    <span>Call Split</span>
                  </el-button>
                  <el-button plain type="primary">
                    <s-icon icon="weather-moonrise" />
                    <span>Moon Rise</span>
                  </el-button>
                  <el-button plain type="success">
                    <s-icon icon="entypo-adjust" />
                    <span>Adjust</span>
                  </el-button>
                  <el-button plain type="info" icon="el-icon-data-line">Dashboard</el-button>
                  <el-button plain type="warning">
                    <i class="el-icon-data-line"></i>
                    <span>Dashboard</span>
                  </el-button>
                  <el-button plain type="danger">
                    <span>Return</span>
                    <s-icon icon="material-keyboard-return" />
                  </el-button>
                </el-row>

                <el-row>
                  <el-button class="btn-icon btn-light">
                    <s-icon icon="material-call-split" />
                    <span>Call Split</span>
                  </el-button>
                  <el-button type="primary" class="btn-icon btn-light">
                    <s-icon icon="weather-moonrise" />
                    <span>Moon Rise</span>
                  </el-button>
                  <el-button type="success" class="btn-icon btn-light">
                    <s-icon icon="entypo-adjust" />
                    <span>Adjust</span>
                  </el-button>
                  <el-button
                    type="info"
                    class="btn-icon btn-light"
                    icon="el-icon-data-line"
                  >Dashboard</el-button>
                  <el-button type="warning" class="btn-icon btn-light">
                    <i class="el-icon-data-line"></i>
                    <span>Dashboard</span>
                  </el-button>
                  <el-button type="danger" class="btn-icon btn-light">
                    <i class="las la-random" />
                    <span>Random</span>
                  </el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
  &#x3C;el-button plain class=&#x22;btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;material-call-split&#x22; /&#x3E;
    &#x3C;span&#x3E;Call Split&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;primary&#x22; class=&#x22;btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;weather-moonrise&#x22; /&#x3E;
    &#x3C;span&#x3E;Moon Rise&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;success&#x22; class=&#x22;btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
    &#x3C;span&#x3E;Adjust&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;info&#x22; class=&#x22;btn-light&#x22; icon=&#x22;el-icon-data-line&#x22;&#x3E;Dashboard&#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;warning&#x22; class=&#x22;btn-light&#x22;&#x3E;
    &#x3C;i class=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;span&#x3E;Dashboard&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;danger&#x22; class=&#x22;btn-light&#x22;&#x3E;
    &#x3C;i class=&#x22;far fa-arrow-alt-circle-left&#x22; /&#x3E;
    &#x3C;span&#x3E;Back&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;danger&#x22; class=&#x22;btn-light&#x22;&#x3E;
    &#x3C;span&#x3E;Next&#x3C;/span&#x3E;
    &#x3C;i class=&#x22;far fa-arrow-alt-circle-right&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-button plain&#x3E;
    &#x3C;s-icon icon=&#x22;material-call-split&#x22; /&#x3E;
    &#x3C;span&#x3E;Call Split&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;primary&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;weather-moonrise&#x22; /&#x3E;
    &#x3C;span&#x3E;Moon Rise&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;success&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
    &#x3C;span&#x3E;Adjust&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;info&#x22; icon=&#x22;el-icon-data-line&#x22;&#x3E;Dashboard&#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;warning&#x22;&#x3E;
    &#x3C;i class=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;span&#x3E;Dashboard&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button plain type=&#x22;danger&#x22;&#x3E;
    &#x3C;span&#x3E;Return&#x3C;/span&#x3E;
    &#x3C;s-icon icon=&#x22;material-keyboard-return&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;

&#x3C;el-row&#x3E;
  &#x3C;el-button class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;material-call-split&#x22; /&#x3E;
    &#x3C;span&#x3E;Call Split&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;weather-moonrise&#x22; /&#x3E;
    &#x3C;span&#x3E;Moon Rise&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
    &#x3C;span&#x3E;Adjust&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button
    type=&#x22;info&#x22;
    class=&#x22;btn-icon btn-light&#x22;
    icon=&#x22;el-icon-data-line&#x22;
  &#x3E;Dashboard&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;warning&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;i class=&#x22;el-icon-data-line&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;span&#x3E;Dashboard&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;i class=&#x22;las la-random&#x22; /&#x3E;
    &#x3C;span&#x3E;Random&#x3C;/span&#x3E;
  &#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Text Button</h3>
            <p class="mt-2 text-lg">Buttons without border.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button  type="primary" plain class="btn-text">
                    <s-icon icon="material-skip-previous" />
                    <span>Play Previous</span>
                  </el-button>
                  <el-button  type="primary" plain class="btn-text">
                    <span>Play Next</span>
                    <s-icon icon="material-skip-next" />
                  </el-button>
                  <el-button  type="default" plain class="btn-text">Text Button</el-button>
                  <el-button  type="success" plain class="btn-text">Text Button</el-button>
                  <el-button  type="info" plain class="btn-text">Text Button</el-button>
                  <el-button  type="warning" plain class="btn-text">Text Button</el-button>
                  <el-button  type="danger" plain class="btn-text">Text Button</el-button>
                </el-row>
                
                <el-row>
                  <el-button size="medium" type="primary" plain class="btn-text">
                    <s-icon icon="material-skip-previous" />
                    <span>Play Previous</span>
                  </el-button>
                  <el-button size="medium" type="primary" plain class="btn-text">
                    <span>Play Next</span>
                    <s-icon icon="material-skip-next" />
                  </el-button>
                  <el-button size="medium" type="default" plain class="btn-text">Text Button</el-button>
                  <el-button size="medium" type="success" plain class="btn-text">Text Button</el-button>
                  <el-button size="medium" type="info" plain class="btn-text">Text Button</el-button>
                  <el-button size="medium" type="warning" plain class="btn-text">Text Button</el-button>
                  <el-button size="medium" type="danger" plain class="btn-text">Text Button</el-button>
                </el-row>

                <el-row>
                  <el-button size="small" type="primary" plain class="btn-text">
                    <s-icon icon="material-skip-previous" />
                    <span>Play Previous</span>
                  </el-button>
                  <el-button size="small" type="primary" plain class="btn-text">
                    <span>Play Next</span>
                    <s-icon icon="material-skip-next" />
                  </el-button>
                  <el-button size="small" type="default" plain class="btn-text">Text Button</el-button>
                  <el-button size="small" type="success" plain class="btn-text">Text Button</el-button>
                  <el-button size="small" type="info" plain class="btn-text">Text Button</el-button>
                  <el-button size="small" type="warning" plain class="btn-text">Text Button</el-button>
                  <el-button size="small" type="danger" plain class="btn-text">Text Button</el-button>
                </el-row>

                <el-row>
                  <el-button size="mini" type="primary" plain class="btn-text">
                    <s-icon icon="material-skip-previous" />
                    <span>Play Previous</span>
                  </el-button>
                  <el-button size="mini" type="primary" plain class="btn-text">
                    <span>Play Next</span>
                    <s-icon icon="material-skip-next" />
                  </el-button>
                  <el-button size="mini" type="default" plain class="btn-text">Text Button</el-button>
                  <el-button size="mini" type="success" plain class="btn-text">Text Button</el-button>
                  <el-button size="mini" type="info" plain class="btn-text">Text Button</el-button>
                  <el-button size="mini" type="warning" plain class="btn-text">Text Button</el-button>
                  <el-button size="mini" type="danger" plain class="btn-text">Text Button</el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
&#x3C;el-button  type=&#x22;primary&#x22; plain class=&#x22;btn-text&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;material-skip-previous&#x22; /&#x3E;
  &#x3C;span&#x3E;Play Previous&#x3C;/span&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button  type=&#x22;primary&#x22; plain class=&#x22;btn-text&#x22;&#x3E;
  &#x3C;span&#x3E;Play Next&#x3C;/span&#x3E;
  &#x3C;s-icon icon=&#x22;material-skip-next&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button  type=&#x22;default&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button  type=&#x22;success&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button  type=&#x22;info&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button  type=&#x22;warning&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button  type=&#x22;danger&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;

&#x3C;el-row&#x3E;
&#x3C;el-button size=&#x22;medium&#x22; type=&#x22;primary&#x22; plain class=&#x22;btn-text&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;material-skip-previous&#x22; /&#x3E;
  &#x3C;span&#x3E;Play Previous&#x3C;/span&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;medium&#x22; type=&#x22;primary&#x22; plain class=&#x22;btn-text&#x22;&#x3E;
  &#x3C;span&#x3E;Play Next&#x3C;/span&#x3E;
  &#x3C;s-icon icon=&#x22;material-skip-next&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;medium&#x22; type=&#x22;default&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;medium&#x22; type=&#x22;success&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;medium&#x22; type=&#x22;info&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;medium&#x22; type=&#x22;warning&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;medium&#x22; type=&#x22;danger&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;

&#x3C;el-row&#x3E;
&#x3C;el-button size=&#x22;small&#x22; type=&#x22;primary&#x22; plain class=&#x22;btn-text&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;material-skip-previous&#x22; /&#x3E;
  &#x3C;span&#x3E;Play Previous&#x3C;/span&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;small&#x22; type=&#x22;primary&#x22; plain class=&#x22;btn-text&#x22;&#x3E;
  &#x3C;span&#x3E;Play Next&#x3C;/span&#x3E;
  &#x3C;s-icon icon=&#x22;material-skip-next&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;small&#x22; type=&#x22;default&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;small&#x22; type=&#x22;success&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;small&#x22; type=&#x22;info&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;small&#x22; type=&#x22;warning&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;small&#x22; type=&#x22;danger&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;

&#x3C;el-row&#x3E;
&#x3C;el-button size=&#x22;mini&#x22; type=&#x22;primary&#x22; plain class=&#x22;btn-text&#x22;&#x3E;
  &#x3C;s-icon icon=&#x22;material-skip-previous&#x22; /&#x3E;
  &#x3C;span&#x3E;Play Previous&#x3C;/span&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;mini&#x22; type=&#x22;primary&#x22; plain class=&#x22;btn-text&#x22;&#x3E;
  &#x3C;span&#x3E;Play Next&#x3C;/span&#x3E;
  &#x3C;s-icon icon=&#x22;material-skip-next&#x22; /&#x3E;
&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;mini&#x22; type=&#x22;default&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;mini&#x22; type=&#x22;success&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;mini&#x22; type=&#x22;info&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;mini&#x22; type=&#x22;warning&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;el-button size=&#x22;mini&#x22; type=&#x22;danger&#x22; plain class=&#x22;btn-text&#x22;&#x3E;Text Button&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Button Block</h3>
            <p class="mt-2 text-lg">
              Create block level buttons—those that span the full width of a parent—by adding
              <code>.w-100</code>
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-col :span="12">
                    <el-button type="success" class="w-100 btn-light" plain>Block level button</el-button>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="18">
                    <el-button type="info" class="w-100">Block level button</el-button>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-button type="primary" class="w-100">Block level button</el-button>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22;&#x3E;
    &#x3C;el-button type=&#x22;success&#x22; class=&#x22;w-100 btn-light&#x22; plain&#x3E;Block level button&#x3C;/el-button&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;18&#x22;&#x3E;
    &#x3C;el-button type=&#x22;info&#x22; class=&#x22;w-100&#x22;&#x3E;Block level button&#x3C;/el-button&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;24&#x22;&#x3E;
    &#x3C;el-button type=&#x22;primary&#x22; class=&#x22;w-100&#x22;&#x3E;Block level button&#x3C;/el-button&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Button Styles</h3>
            <p class="mt-2 text-lg">
              Use
              <code>type</code>
              <code>plain</code>
              <code>round</code> and
              <code>circle</code> to define Button's style.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button plain>Plain</el-button>
                  <el-button type="primary" plain>Primary</el-button>
                  <el-button type="success" plain>Success</el-button>
                  <el-button type="info" plain>Info</el-button>
                  <el-button type="warning" plain>Warning</el-button>
                  <el-button type="danger" plain>Danger</el-button>
                </el-row>

                <el-row>
                  <el-button round>Round</el-button>
                  <el-button type="primary" round>Primary</el-button>
                  <el-button type="success" round>Success</el-button>
                  <el-button type="info" round>Info</el-button>
                  <el-button type="warning" round>Warning</el-button>
                  <el-button type="danger" round>Danger</el-button>
                </el-row>

                <el-row>
                  <el-button icon="el-icon-date" circle></el-button>
                  <el-button type="primary" icon="el-icon-edit" circle></el-button>
                  <el-button type="success" icon="el-icon-check" circle></el-button>
                  <el-button type="info" icon="el-icon-message" circle></el-button>
                  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
  &#x3C;el-button plain&#x3E;Plain&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; plain&#x3E;Primary&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; plain&#x3E;Success&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; plain&#x3E;Info&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;warning&#x22; plain&#x3E;Warning&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; plain&#x3E;Danger&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;

&#x3C;el-row&#x3E;
  &#x3C;el-button round&#x3E;Round&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; round&#x3E;Primary&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; round&#x3E;Success&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; round&#x3E;Info&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;warning&#x22; round&#x3E;Warning&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; round&#x3E;Danger&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;

&#x3C;el-row&#x3E;
  &#x3C;el-button icon=&#x22;el-icon-date&#x22; circle&#x3E;&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; icon=&#x22;el-icon-edit&#x22; circle&#x3E;&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; icon=&#x22;el-icon-check&#x22; circle&#x3E;&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; icon=&#x22;el-icon-message&#x22; circle&#x3E;&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;warning&#x22; icon=&#x22;el-icon-star-off&#x22; circle&#x3E;&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; icon=&#x22;el-icon-delete&#x22; circle&#x3E;&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Sizes</h3>
            <p
              class="mt-2 text-lg"
            >Besides default size, Button component provides three additional sizes for you to choose among different scenarios.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button type="success">Default</el-button>
                  <el-button type="success" size="medium">Medium</el-button>
                  <el-button type="success" size="small">Small</el-button>
                  <el-button type="success" size="mini">Mini</el-button>
                </el-row>
                <el-row>
                  <el-button type="primary" round>Default</el-button>
                  <el-button type="primary" size="medium" round>Medium</el-button>
                  <el-button type="primary" size="small" round>Small</el-button>
                  <el-button type="primary" size="mini" round>Mini</el-button>
                </el-row>
                <el-row>
                  <el-button type="info" class="btn-icon btn-light">
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button type="info" class="btn-icon btn-light" size="medium">
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button type="info" class="btn-icon btn-light" size="small">
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button type="info" class="btn-icon btn-light" size="mini">
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                </el-row>
                <el-row>
                  <el-button type="danger" class="btn-icon btn-light" plain round>
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button type="danger" class="btn-icon btn-light" size="medium" plain round>
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button type="danger" class="btn-icon btn-light" size="small" plain round>
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                  <el-button type="danger" class="btn-icon btn-light" size="mini" plain round>
                    <s-icon icon="entypo-adjust" />
                  </el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
  &#x3C;el-button type=&#x22;success&#x22;&#x3E;Default&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; size=&#x22;medium&#x22;&#x3E;Medium&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; size=&#x22;small&#x22;&#x3E;Small&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; size=&#x22;mini&#x22;&#x3E;Mini&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; round&#x3E;Default&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; size=&#x22;medium&#x22; round&#x3E;Medium&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; size=&#x22;small&#x22; round&#x3E;Small&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; size=&#x22;mini&#x22; round&#x3E;Mini&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; class=&#x22;btn-icon btn-light&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; class=&#x22;btn-icon btn-light&#x22; size=&#x22;medium&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; class=&#x22;btn-icon btn-light&#x22; size=&#x22;small&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; class=&#x22;btn-icon btn-light&#x22; size=&#x22;mini&#x22;&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
&#x3C;el-row&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22; plain round&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22; size=&#x22;medium&#x22; plain round&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22; size=&#x22;small&#x22; plain round&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; class=&#x22;btn-icon btn-light&#x22; size=&#x22;mini&#x22; plain round&#x3E;
    &#x3C;s-icon icon=&#x22;entypo-adjust&#x22; /&#x3E;
  &#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Loading Button</h3>
            <p class="mt-2 text-lg">
              Set
              <code>loading</code> attribute to
              <code>true</code> to display loading state.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button :loading="handleState(1)" @click="handleLoading(1)">Default</el-button>
                  <el-button
                    :loading="handleState(2)"
                    @click="handleLoading(2)"
                    type="primary"
                  >Primary</el-button>
                  <el-button
                    :loading="handleState(3)"
                    @click="handleLoading(3)"
                    type="success"
                  >Success</el-button>
                  <el-button :loading="handleState(4)" @click="handleLoading(4)" type="info">Info</el-button>
                  <el-button
                    :loading="handleState(5)"
                    @click="handleLoading(5)"
                    type="warning"
                  >Warning</el-button>
                  <el-button
                    :loading="handleState(6)"
                    @click="handleLoading(6)"
                    type="danger"
                  >Danger</el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
  &#x3C;el-button :loading=&#x22;handleState(1)&#x22; @click=&#x22;handleLoading(1)&#x22;&#x3E;Default&#x3C;/el-button&#x3E;
  &#x3C;el-button
    :loading=&#x22;handleState(2)&#x22;
    @click=&#x22;handleLoading(2)&#x22;
    type=&#x22;primary&#x22;
  &#x3E;Primary&#x3C;/el-button&#x3E;
  &#x3C;el-button
    :loading=&#x22;handleState(3)&#x22;
    @click=&#x22;handleLoading(3)&#x22;
    type=&#x22;success&#x22;
  &#x3E;Success&#x3C;/el-button&#x3E;
  &#x3C;el-button :loading=&#x22;handleState(4)&#x22; @click=&#x22;handleLoading(4)&#x22; type=&#x22;info&#x22;&#x3E;Info&#x3C;/el-button&#x3E;
  &#x3C;el-button
    :loading=&#x22;handleState(5)&#x22;
    @click=&#x22;handleLoading(5)&#x22;
    type=&#x22;warning&#x22;
  &#x3E;Warning&#x3C;/el-button&#x3E;
  &#x3C;el-button
    :loading=&#x22;handleState(6)&#x22;
    @click=&#x22;handleLoading(6)&#x22;
    type=&#x22;danger&#x22;
  &#x3E;Danger&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
            </code>
</pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Disabled Button</h3>
            <p class="mt-2 text-lg">
              The
              <code>disabled</code> attribute determines if the button is disabled.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-button disabled>Default</el-button>
                  <el-button type="primary" disabled>Primary</el-button>
                  <el-button type="success" disabled>Success</el-button>
                  <el-button type="info" disabled>Info</el-button>
                  <el-button type="warning" disabled>Warning</el-button>
                  <el-button type="danger" disabled>Danger</el-button>
                </el-row>

                <el-row>
                  <el-button plain disabled>Plain</el-button>
                  <el-button type="primary" plain disabled>Primary</el-button>
                  <el-button type="success" plain disabled>Success</el-button>
                  <el-button type="info" plain disabled>Info</el-button>
                  <el-button type="warning" plain disabled>Warning</el-button>
                  <el-button type="danger" plain disabled>Danger</el-button>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
  <code>
&#x3C;el-row&#x3E;
  &#x3C;el-button disabled&#x3E;Default&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; disabled&#x3E;Primary&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; disabled&#x3E;Success&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; disabled&#x3E;Info&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;warning&#x22; disabled&#x3E;Warning&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; disabled&#x3E;Danger&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;

&#x3C;el-row&#x3E;
  &#x3C;el-button plain disabled&#x3E;Plain&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22; plain disabled&#x3E;Primary&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;success&#x22; plain disabled&#x3E;Success&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;info&#x22; plain disabled&#x3E;Info&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;warning&#x22; plain disabled&#x3E;Warning&#x3C;/el-button&#x3E;
  &#x3C;el-button type=&#x22;danger&#x22; plain disabled&#x3E;Danger&#x3C;/el-button&#x3E;
&#x3C;/el-row&#x3E;
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
                  <span v-html="scope.row.attribute"></span>
                </template>
              </el-table-column>
              <el-table-column label="Description" min-width="200px">
                <template slot-scope="scope">
                  <span v-html="scope.row.description"></span>
                </template>
              </el-table-column>
              <el-table-column label="Type" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.type"></span>
                </template>
              </el-table-column>
              <el-table-column label="Accepted values">
                <template slot-scope="scope">
                  <span v-html="scope.row.acceptedvalues"></span>
                </template>
              </el-table-column>
              <el-table-column label="Default" width="120px">
                <template slot-scope="scope">
                  <span v-html="scope.row.default"></span>
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
Vue.use(VueCodeHighlight); //registers the v-highlight directive
import "vue-code-highlight/themes/prism-okaidia.css";

export default {
  name: "Buttons",
  components: {
    //VueCodeHighlight,
  },
  data() {
    return {
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "size",
          description: "button size",
          type: "string",
          acceptedvalues: "medium / small / mini",
          default: "—",
        },
        {
          attribute: "type",
          description: "button type",
          type: "string",
          acceptedvalues: "primary / success / warning / danger / info / text",
          default: "—",
        },
        {
          attribute: "plain",
          description: "determine whether it's a plain button",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "round",
          description: "determine whether it's a round button",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "circle",
          description: "determine whether it's a circle button",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "loading",
          description: "determine whether it's loading",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "disabled",
          description: "disable the button",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "icon",
          description: "icon class name",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "autofocus",
          description:
            "\n                    same as native button's\n                    <code>autofocus</code>\n                  ",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "native-type",
          description:
            "\n                    same as native button's\n                    <code>type</code>\n                  ",
          type: "string",
          acceptedvalues: "button / submit / reset",
          default: "button",
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