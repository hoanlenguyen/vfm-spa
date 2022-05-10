<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Nav Menu</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Menu that provides navigation for your website.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Top Bar</h3>
            <p class="mt-2 text-lg">Top bar NavMenu can be used in a variety of scenarios.</p>
            <p class="mt-2 text-lg">
              By default Menu is vertical, but you can change it to horizontal by setting the mode prop to 'horizontal'. In addition, you can use the submenu component to create a second level menu. Menu provides
              <code>background-color</code>,
              <code>text-color</code> and
              <code>active-text-color</code> to customize the colors.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-menu
                  :default-active="activeIndex"
                  class="el-menu-demo mb-5"
                  mode="horizontal"
                  @select="handleSelect"
                >
                  <el-menu-item index="1">Processing Center</el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-submenu index="2-4">
                      <template slot="title">item four</template>
                      <el-menu-item index="2-4-1">item one</el-menu-item>
                      <el-menu-item index="2-4-2">item two</el-menu-item>
                      <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="3" disabled>Info</el-menu-item>
                  <el-menu-item index="4">
                    <a href="https://stonehub-admin.yoong.vn" target="_blank">Orders</a>
                  </el-menu-item>
                </el-menu>
                <el-divider></el-divider>
                <el-menu
                  :default-active="activeIndex2"
                  class="el-menu-demo mt-5"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                >
                  <el-menu-item index="1">Processing Center</el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-submenu index="2-4">
                      <template slot="title">item four</template>
                      <el-menu-item index="2-4-1">item one</el-menu-item>
                      <el-menu-item index="2-4-2">item two</el-menu-item>
                      <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="3" disabled>Info</el-menu-item>
                  <el-menu-item index="4">
                    <a href="https://stonehub-admin.yoong.vn" target="_blank">Orders</a>
                  </el-menu-item>
                </el-menu>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-menu :default-active=&#x22;activeIndex&#x22; class=&#x22;el-menu-demo&#x22; mode=&#x22;horizontal&#x22; @select=&#x22;handleSelect&#x22;&#x3E;
  &#x3C;el-menu-item index=&#x22;1&#x22;&#x3E;Processing Center&#x3C;/el-menu-item&#x3E;
  &#x3C;el-submenu index=&#x22;2&#x22;&#x3E;
    &#x3C;template slot=&#x22;title&#x22;&#x3E;Workspace&#x3C;/template&#x3E;
    &#x3C;el-menu-item index=&#x22;2-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
    &#x3C;el-menu-item index=&#x22;2-2&#x22;&#x3E;item two&#x3C;/el-menu-item&#x3E;
    &#x3C;el-menu-item index=&#x22;2-3&#x22;&#x3E;item three&#x3C;/el-menu-item&#x3E;
    &#x3C;el-submenu index=&#x22;2-4&#x22;&#x3E;
      &#x3C;template slot=&#x22;title&#x22;&#x3E;item four&#x3C;/template&#x3E;
      &#x3C;el-menu-item index=&#x22;2-4-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;2-4-2&#x22;&#x3E;item two&#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;2-4-3&#x22;&#x3E;item three&#x3C;/el-menu-item&#x3E;
    &#x3C;/el-submenu&#x3E;
  &#x3C;/el-submenu&#x3E;
  &#x3C;el-menu-item index=&#x22;3&#x22; disabled&#x3E;Info&#x3C;/el-menu-item&#x3E;
  &#x3C;el-menu-item index=&#x22;4&#x22;&#x3E;&#x3C;a href=&#x22;https://stonehub-admin.yoong.vn&#x22; target=&#x22;_blank&#x22;&#x3E;Orders&#x3C;/a&#x3E;&#x3C;/el-menu-item&#x3E;
&#x3C;/el-menu&#x3E;
&#x3C;div class=&#x22;line&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;el-menu
  :default-active=&#x22;activeIndex2&#x22;
  class=&#x22;el-menu-demo&#x22;
  mode=&#x22;horizontal&#x22;
  @select=&#x22;handleSelect&#x22;
  background-color=&#x22;#545c64&#x22;
  text-color=&#x22;#fff&#x22;
  active-text-color=&#x22;#ffd04b&#x22;&#x3E;
  &#x3C;el-menu-item index=&#x22;1&#x22;&#x3E;Processing Center&#x3C;/el-menu-item&#x3E;
  &#x3C;el-submenu index=&#x22;2&#x22;&#x3E;
    &#x3C;template slot=&#x22;title&#x22;&#x3E;Workspace&#x3C;/template&#x3E;
    &#x3C;el-menu-item index=&#x22;2-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
    &#x3C;el-menu-item index=&#x22;2-2&#x22;&#x3E;item two&#x3C;/el-menu-item&#x3E;
    &#x3C;el-menu-item index=&#x22;2-3&#x22;&#x3E;item three&#x3C;/el-menu-item&#x3E;
    &#x3C;el-submenu index=&#x22;2-4&#x22;&#x3E;
      &#x3C;template slot=&#x22;title&#x22;&#x3E;item four&#x3C;/template&#x3E;
      &#x3C;el-menu-item index=&#x22;2-4-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;2-4-2&#x22;&#x3E;item two&#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;2-4-3&#x22;&#x3E;item three&#x3C;/el-menu-item&#x3E;
    &#x3C;/el-submenu&#x3E;
  &#x3C;/el-submenu&#x3E;
  &#x3C;el-menu-item index=&#x22;3&#x22; disabled&#x3E;Info&#x3C;/el-menu-item&#x3E;
  &#x3C;el-menu-item index=&#x22;4&#x22;&#x3E;&#x3C;a href=&#x22;https://stonehub-admin.yoong.vn&#x22; target=&#x22;_blank&#x22;&#x3E;Orders&#x3C;/a&#x3E;&#x3C;/el-menu-item&#x3E;
&#x3C;/el-menu&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Side Bar</h3>
            <p class="mt-2 text-lg">Vertical NavMenu with sub-menus.</p>
            <p
              class="mt-2 text-lg"
            >You can use the el-menu-item-group component to create a menu group, and the name of the group is determined by the title prop or a named slot.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row>
                  <el-col :span="10">
                    <h5>Default colors</h5>
                    <el-menu
                      default-active="2"
                      class="mt-3"
                      @open="handleOpen"
                      @close="handleClose"
                    >
                      <el-submenu index="1">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                          <el-menu-item index="1-1">item one</el-menu-item>
                          <el-menu-item index="1-2">item one</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                          <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                          <template slot="title">item four</template>
                          <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-submenu>
                      </el-submenu>
                      <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span>Navigator Two</span>
                      </el-menu-item>
                      <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span>Navigator Three</span>
                      </el-menu-item>
                      <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span>Navigator Four</span>
                      </el-menu-item>
                    </el-menu>
                  </el-col>
                  <el-col :span="10" :offset="4">
                    <h5>Custom colors</h5>
                    <el-menu
                      default-active="2"
                      class="mt-3"
                      @open="handleOpen"
                      @close="handleClose"
                      background-color="#545c64"
                      text-color="#fff"
                      active-text-color="#ffd04b"
                    >
                      <el-submenu index="1">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                          <el-menu-item index="1-1">item one</el-menu-item>
                          <el-menu-item index="1-2">item one</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                          <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                          <template slot="title">item four</template>
                          <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-submenu>
                      </el-submenu>
                      <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span>Navigator Two</span>
                      </el-menu-item>
                      <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span>Navigator Three</span>
                      </el-menu-item>
                      <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span>Navigator Four</span>
                      </el-menu-item>
                    </el-menu>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row&#x3E;
  &#x3C;el-col :span=&#x22;10&#x22;&#x3E;
    &#x3C;h5&#x3E;Default colors&#x3C;/h5&#x3E;
    &#x3C;el-menu
      default-active=&#x22;2&#x22;
      class=&#x22;mt-3&#x22;
      @open=&#x22;handleOpen&#x22;
      @close=&#x22;handleClose&#x22;
    &#x3E;
      &#x3C;el-submenu index=&#x22;1&#x22;&#x3E;
        &#x3C;template slot=&#x22;title&#x22;&#x3E;
          &#x3C;i class=&#x22;el-icon-location&#x22;&#x3E;&#x3C;/i&#x3E;
          &#x3C;span&#x3E;Navigator One&#x3C;/span&#x3E;
        &#x3C;/template&#x3E;
        &#x3C;el-menu-item-group title=&#x22;Group One&#x22;&#x3E;
          &#x3C;el-menu-item index=&#x22;1-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
          &#x3C;el-menu-item index=&#x22;1-2&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
        &#x3C;/el-menu-item-group&#x3E;
        &#x3C;el-menu-item-group title=&#x22;Group Two&#x22;&#x3E;
          &#x3C;el-menu-item index=&#x22;1-3&#x22;&#x3E;item three&#x3C;/el-menu-item&#x3E;
        &#x3C;/el-menu-item-group&#x3E;
        &#x3C;el-submenu index=&#x22;1-4&#x22;&#x3E;
          &#x3C;template slot=&#x22;title&#x22;&#x3E;item four&#x3C;/template&#x3E;
          &#x3C;el-menu-item index=&#x22;1-4-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
        &#x3C;/el-submenu&#x3E;
      &#x3C;/el-submenu&#x3E;
      &#x3C;el-menu-item index=&#x22;2&#x22;&#x3E;
        &#x3C;i class=&#x22;el-icon-menu&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Navigator Two&#x3C;/span&#x3E;
      &#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;3&#x22; disabled&#x3E;
        &#x3C;i class=&#x22;el-icon-document&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Navigator Three&#x3C;/span&#x3E;
      &#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;4&#x22;&#x3E;
        &#x3C;i class=&#x22;el-icon-setting&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Navigator Four&#x3C;/span&#x3E;
      &#x3C;/el-menu-item&#x3E;
    &#x3C;/el-menu&#x3E;
  &#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;10&#x22; :offset=&#x22;4&#x22;&#x3E;
    &#x3C;h5&#x3E;Custom colors&#x3C;/h5&#x3E;
    &#x3C;el-menu
      default-active=&#x22;2&#x22;
      class=&#x22;mt-3&#x22;
      @open=&#x22;handleOpen&#x22;
      @close=&#x22;handleClose&#x22;
      background-color=&#x22;#545c64&#x22;
      text-color=&#x22;#fff&#x22;
      active-text-color=&#x22;#ffd04b&#x22;
    &#x3E;
      &#x3C;el-submenu index=&#x22;1&#x22;&#x3E;
        &#x3C;template slot=&#x22;title&#x22;&#x3E;
          &#x3C;i class=&#x22;el-icon-location&#x22;&#x3E;&#x3C;/i&#x3E;
          &#x3C;span&#x3E;Navigator One&#x3C;/span&#x3E;
        &#x3C;/template&#x3E;
        &#x3C;el-menu-item-group title=&#x22;Group One&#x22;&#x3E;
          &#x3C;el-menu-item index=&#x22;1-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
          &#x3C;el-menu-item index=&#x22;1-2&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
        &#x3C;/el-menu-item-group&#x3E;
        &#x3C;el-menu-item-group title=&#x22;Group Two&#x22;&#x3E;
          &#x3C;el-menu-item index=&#x22;1-3&#x22;&#x3E;item three&#x3C;/el-menu-item&#x3E;
        &#x3C;/el-menu-item-group&#x3E;
        &#x3C;el-submenu index=&#x22;1-4&#x22;&#x3E;
          &#x3C;template slot=&#x22;title&#x22;&#x3E;item four&#x3C;/template&#x3E;
          &#x3C;el-menu-item index=&#x22;1-4-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
        &#x3C;/el-submenu&#x3E;
      &#x3C;/el-submenu&#x3E;
      &#x3C;el-menu-item index=&#x22;2&#x22;&#x3E;
        &#x3C;i class=&#x22;el-icon-menu&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Navigator Two&#x3C;/span&#x3E;
      &#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;3&#x22; disabled&#x3E;
        &#x3C;i class=&#x22;el-icon-document&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Navigator Three&#x3C;/span&#x3E;
      &#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;4&#x22;&#x3E;
        &#x3C;i class=&#x22;el-icon-setting&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;span&#x3E;Navigator Four&#x3C;/span&#x3E;
      &#x3C;/el-menu-item&#x3E;
    &#x3C;/el-menu&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Collapse</h3>
            <p class="mt-2 text-lg">Vertical NavMenu could be collapsed.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                  <el-radio-button :label="false">expand</el-radio-button>
                  <el-radio-button :label="true">collapse</el-radio-button>
                </el-radio-group>
                <el-menu
                  default-active="2"
                  class="mt-3"
                  @open="handleOpen"
                  @close="handleClose"
                  :collapse="isCollapse"
                >
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span slot="title">Navigator One</span>
                    </template>
                    <el-menu-item-group>
                      <span slot="title">Group One</span>
                      <el-menu-item index="1-1">item one</el-menu-item>
                      <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                      <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <span slot="title">item four</span>
                      <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Navigator Two</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">Navigator Three</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">Navigator Four</span>
                  </el-menu-item>
                </el-menu>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-radio-group v-model=&#x22;isCollapse&#x22; style=&#x22;margin-bottom: 20px;&#x22;&#x3E;
  &#x3C;el-radio-button :label=&#x22;false&#x22;&#x3E;expand&#x3C;/el-radio-button&#x3E;
  &#x3C;el-radio-button :label=&#x22;true&#x22;&#x3E;collapse&#x3C;/el-radio-button&#x3E;
&#x3C;/el-radio-group&#x3E;
&#x3C;el-menu default-active=&#x22;2&#x22; class=&#x22;el-menu-vertical-demo&#x22; @open=&#x22;handleOpen&#x22; @close=&#x22;handleClose&#x22; :collapse=&#x22;isCollapse&#x22;&#x3E;
  &#x3C;el-submenu index=&#x22;1&#x22;&#x3E;
    &#x3C;template slot=&#x22;title&#x22;&#x3E;
      &#x3C;i class=&#x22;el-icon-location&#x22;&#x3E;&#x3C;/i&#x3E;
      &#x3C;span slot=&#x22;title&#x22;&#x3E;Navigator One&#x3C;/span&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;el-menu-item-group&#x3E;
      &#x3C;span slot=&#x22;title&#x22;&#x3E;Group One&#x3C;/span&#x3E;
      &#x3C;el-menu-item index=&#x22;1-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
      &#x3C;el-menu-item index=&#x22;1-2&#x22;&#x3E;item two&#x3C;/el-menu-item&#x3E;
    &#x3C;/el-menu-item-group&#x3E;
    &#x3C;el-menu-item-group title=&#x22;Group Two&#x22;&#x3E;
      &#x3C;el-menu-item index=&#x22;1-3&#x22;&#x3E;item three&#x3C;/el-menu-item&#x3E;
    &#x3C;/el-menu-item-group&#x3E;
    &#x3C;el-submenu index=&#x22;1-4&#x22;&#x3E;
      &#x3C;span slot=&#x22;title&#x22;&#x3E;item four&#x3C;/span&#x3E;
      &#x3C;el-menu-item index=&#x22;1-4-1&#x22;&#x3E;item one&#x3C;/el-menu-item&#x3E;
    &#x3C;/el-submenu&#x3E;
  &#x3C;/el-submenu&#x3E;
  &#x3C;el-menu-item index=&#x22;2&#x22;&#x3E;
    &#x3C;i class=&#x22;el-icon-menu&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;span slot=&#x22;title&#x22;&#x3E;Navigator Two&#x3C;/span&#x3E;
  &#x3C;/el-menu-item&#x3E;
  &#x3C;el-menu-item index=&#x22;3&#x22; disabled&#x3E;
    &#x3C;i class=&#x22;el-icon-document&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;span slot=&#x22;title&#x22;&#x3E;Navigator Three&#x3C;/span&#x3E;
  &#x3C;/el-menu-item&#x3E;
  &#x3C;el-menu-item index=&#x22;4&#x22;&#x3E;
    &#x3C;i class=&#x22;el-icon-setting&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;span slot=&#x22;title&#x22;&#x3E;Navigator Four&#x3C;/span&#x3E;
  &#x3C;/el-menu-item&#x3E;
&#x3C;/el-menu&#x3E;
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
            <h3 class="mt-8x">Method</h3>
            <el-table :data="methodApi" class="mt-2">
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
              <el-table-column label="Parameters">
                <template slot-scope="scope">
                  <span v-html="scope.row.parameters" />
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
            <h3 class="mt-8x">Item Events</h3>
            <el-table :data="itemeventApi" class="mt-2">
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
            <h3 class="mt-8x">SubMenu API</h3>
            <el-table :data="submenuApi" class="mt-2">
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

          <div>
            <h3 class="mt-8x">Group API</h3>
            <el-table :data="groupApi" class="mt-2">
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
  name: "Nav menu",
  components: {},
  data() {
    return {
      isCollapse: true,
      activeIndex: "1",
      activeIndex2: "1",
      loadingIndexes: [10],
      attributeApi: [
        {
          attribute: "mode",
          description: "menu display mode",
          type: "string",
          acceptedvalues: "horizontal / vertical",
          default: "vertical",
        },
        {
          attribute: "collapse",
          description:
            "whether the menu is collapsed (available only in vertical mode)",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "background-color",
          description: "background color of Menu (hex format)",
          type: "string",
          acceptedvalues: "—",
          default: "#ffffff",
        },
        {
          attribute: "text-color",
          description: "text color of Menu (hex format)",
          type: "string",
          acceptedvalues: "—",
          default: "#303133",
        },
        {
          attribute: "active-text-color",
          description: "text color of currently active menu item (hex format)",
          type: "string",
          acceptedvalues: "—",
          default: "#409EFF",
        },
        {
          attribute: "default-active",
          description: "index of currently active menu",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "default-openeds",
          description:
            "array that contains indexes of currently active sub-menus",
          type: "Array",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "unique-opened",
          description: "whether only one sub-menu can be active",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "menu-trigger",
          description:
            "how sub-menus are triggered, only works when <code>mode</code> is 'horizontal'",
          type: "string",
          acceptedvalues: "hover / click",
          default: "hover",
        },
        {
          attribute: "router",
          description:
            "whether <code>vue-router</code> mode is activated. If true, index will be used as 'path' to activate the route action",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "collapse-transition",
          description: "whether to enable the collapse transition",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
      ],
      methodApi: [
        {
          name: "open",
          description: "open a specific sub-menu",
          parameters: "index: index of the sub-menu to open",
        },
        {
          name: "close",
          description: "close a specific sub-menu",
          parameters: "index: index of the sub-menu to close",
        },
      ],
      eventApi: [
        {
          eventname: "select",
          description: "callback function when menu is activated",
          parameters:
            "index: index of activated menu, indexPath: index path of activated menu",
        },
        {
          eventname: "open",
          description: "callback function when sub-menu expands",
          parameters:
            "index: index of expanded sub-menu, indexPath: index path of expanded sub-menu",
        },
        {
          eventname: "close",
          description: "callback function when sub-menu collapses",
          parameters:
            "index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu",
        },
      ],
      itemeventApi: [
        {
          eventname: "click",
          description: "callback function when menu-item is clicked",
          parameters: "el: menu-item instance",
        },
      ],
      submenuApi: [
        {
          attribute: "index",
          description: "unique identification",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "popper-class",
          description: "custom class name for the popup menu",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "show-timeout",
          description: "timeout before showing a sub-menu",
          type: "number",
          acceptedvalues: "—",
          default: "300",
        },
        {
          attribute: "hide-timeout",
          description: "timeout before hiding a sub-menu",
          type: "number",
          acceptedvalues: "—",
          default: "300",
        },
        {
          attribute: "disabled",
          description: "whether the sub-menu is disabled",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "popper-append-to-body",
          description:
            "whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop",
          type: "boolean",
          acceptedvalues: "-",
          default: "level one Submenu: true / other Submenus: false",
        },
      ],
      itemApi: [
        {
          attribute: "index",
          description: "unique identification",
          type: "string/null",
          acceptedvalues: "—",
          default: "null",
        },
        {
          attribute: "route",
          description: "Vue Router object",
          type: "object",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "disabled",
          description: "whether disabled",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
      ],
      groupApi: [
        {
          attribute: "title",
          description: "group title",
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 2rem;
}
</style>
