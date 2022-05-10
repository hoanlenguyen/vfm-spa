<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
      <div class="card">
        <div class="card-header">
          <el-row type="flex" justify="space-between" align="middle">
            <h3 class="card-title">
              <span>Dropdown</span>
              <span class="card-sub-label" />
            </h3>
          </el-row>
        </div>
        <div class="card-body">
          <p class="text-xl c-grey">Toggleable menu for displaying lists of links and actions.</p>
          <hr class="section-divider" />

          <div>
            <h3 class="mt-8x">Basic usage</h3>
            <p class="mt-2 text-lg">Hover on the dropdown menu to unfold it for more actions.</p>
            <p class="mt-2 text-lg">
              The triggering element is rendered by the default
              <code>slot</code>, and the dropdown part is rendered by the
              <code>slot</code> named
              <code>dropdown</code>. By default, dropdown list shows when you hover on the triggering element without having to click it.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    Dropdown List
                    <i class="el-icon-arrow-down el-icon--right" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-dropdown&#x3E;
  &#x3C;span class=&#x22;el-dropdown-link&#x22;&#x3E;
    Dropdown List&#x3C;i class=&#x22;el-icon-arrow-down el-icon--right&#x22;&#x3E;&#x3C;/i&#x3E;
  &#x3C;/span&#x3E;
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item disabled&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item divided&#x3E;Action 5&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Triggering element</h3>
            <p class="mt-2 text-lg">Use the button to trigger the dropdown list.</p>
            <p class="mt-2 text-lg">
              Use
              <code>split-button</code> to split the triggering element into a button group with the left button being a normal button and right one the actual triggering target. If you wanna insert a separator line between item three and item four, just add a class
              <code>divider</code> to item four.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-dropdown>
                  <el-button type="primary">
                    Dropdown List
                    <i class="el-icon-arrow-down el-icon--right" />
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                    <el-dropdown-item>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown split-button type="primary" @click="handleClick">
                  Dropdown List
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                    <el-dropdown-item>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-dropdown&#x3E;
  &#x3C;el-button type=&#x22;primary&#x22;&#x3E;
    Dropdown List&#x3C;i class=&#x22;el-icon-arrow-down el-icon--right&#x22;&#x3E;&#x3C;/i&#x3E;
  &#x3C;/el-button&#x3E;
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 5&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;
&#x3C;el-dropdown split-button type=&#x22;primary&#x22; @click=&#x22;handleClick&#x22;&#x3E;
  Dropdown List
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 5&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">How to trigger</h3>
            <p class="mt-2 text-lg">Click the triggering element or hover on it.</p>
            <p class="mt-2 text-lg">
              Use the attribute
              <code>trigger</code>. By default, it is
              <code>hover</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-row class="block-col-2">
                  <el-col :span="12">
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        Hover to trigger
                        <i class="el-icon-arrow-down el-icon--right" />
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                  <el-col :span="12">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        Click to trigger
                        <i class="el-icon-arrow-down el-icon--right" />
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-row class=&#x22;block-col-2&#x22;&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;hover to trigger&#x3C;/span&#x3E;
    &#x3C;el-dropdown&#x3E;
      &#x3C;span class=&#x22;el-dropdown-link&#x22;&#x3E;
        Dropdown List&#x3C;i class=&#x22;el-icon-arrow-down el-icon--right&#x22;&#x3E;&#x3C;/i&#x3E;
      &#x3C;/span&#x3E;
      &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-plus&#x22;&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-circle-plus&#x22;&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-circle-plus-outline&#x22;&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-check&#x22;&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-circle-check&#x22;&#x3E;Action 5&#x3C;/el-dropdown-item&#x3E;
      &#x3C;/el-dropdown-menu&#x3E;
    &#x3C;/el-dropdown&#x3E;
  &#x3C;/el-col&#x3E;
  &#x3C;el-col :span=&#x22;12&#x22;&#x3E;
    &#x3C;span class=&#x22;demonstration&#x22;&#x3E;click to trigger&#x3C;/span&#x3E;
    &#x3C;el-dropdown trigger=&#x22;click&#x22;&#x3E;
      &#x3C;span class=&#x22;el-dropdown-link&#x22;&#x3E;
        Dropdown List&#x3C;i class=&#x22;el-icon-arrow-down el-icon--right&#x22;&#x3E;&#x3C;/i&#x3E;
      &#x3C;/span&#x3E;
      &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-plus&#x22;&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-circle-plus&#x22;&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-circle-plus-outline&#x22;&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-check&#x22;&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
        &#x3C;el-dropdown-item icon=&#x22;el-icon-circle-check&#x22;&#x3E;Action 5&#x3C;/el-dropdown-item&#x3E;
      &#x3C;/el-dropdown-menu&#x3E;
    &#x3C;/el-dropdown&#x3E;
  &#x3C;/el-col&#x3E;
&#x3C;/el-row&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Menu hiding behavior</h3>
            <p class="mt-2 text-lg">
              Use
              <code>hide-on-click</code> to define if menu closes on clicking.
            </p>
            <p
              class="mt-2 text-lg"
            >By default menu will close when you click on menu items, and it can be turned off by setting hide-on-click to false.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-dropdown :hide-on-click="false">
                  <span class="el-dropdown-link">
                    Dropdown List
                    <i class="el-icon-arrow-down el-icon--right" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-dropdown :hide-on-click=&#x22;false&#x22;&#x3E;
  &#x3C;span class=&#x22;el-dropdown-link&#x22;&#x3E;
    Dropdown List&#x3C;i class=&#x22;el-icon-arrow-down el-icon--right&#x22;&#x3E;&#x3C;/i&#x3E;
  &#x3C;/span&#x3E;
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item disabled&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item divided&#x3E;Action 5&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Command event</h3>
            <p
              class="mt-2 text-lg"
            >Clicking each dropdown item fires an event whose parameter is assigned by each item.</p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    Dropdown List
                    <i class="el-icon-arrow-down el-icon--right" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">Action 1</el-dropdown-item>
                    <el-dropdown-item command="b">Action 2</el-dropdown-item>
                    <el-dropdown-item command="c">Action 3</el-dropdown-item>
                    <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-dropdown @command=&#x22;handleCommand&#x22;&#x3E;
  &#x3C;span class=&#x22;el-dropdown-link&#x22;&#x3E;
    Dropdown List&#x3C;i class=&#x22;el-icon-arrow-down el-icon--right&#x22;&#x3E;&#x3C;/i&#x3E;
  &#x3C;/span&#x3E;
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item command=&#x22;a&#x22;&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item command=&#x22;b&#x22;&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item command=&#x22;c&#x22;&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item command=&#x22;d&#x22; disabled&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item command=&#x22;e&#x22; divided&#x3E;Action 5&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Sizes</h3>
            <p
              class="mt-2 text-lg"
            >Besides default size, Dropdown component provides three additional sizes for you to choose among different scenarios.</p>
            <p class="mt-2 text-lg">
              Use attribute
              <code>size</code> to set additional sizes with
              <code>medium</code>,
              <code>small</code> or
              <code>mini</code>.
            </p>
            <div class="card-shadowed mt-4">
              <div class="card-header">
                <h6 class="text-uppercase">Example</h6>
              </div>
              <div class="card-body">
                <el-dropdown split-button type="primary">
                  Default
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown size="medium" split-button type="primary">
                  Medium
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown size="small" split-button type="primary">
                  Small
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown size="mini" split-button type="primary">
                  Mini
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div v-highlight language="html" class="mt-4x">
              <pre class="language-html" v-pre>
                <code>
&#x3C;el-dropdown split-button type=&#x22;primary&#x22;&#x3E;
  Default
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;

&#x3C;el-dropdown size=&#x22;medium&#x22; split-button type=&#x22;primary&#x22;&#x3E;
  Medium
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;

&#x3C;el-dropdown size=&#x22;small&#x22; split-button type=&#x22;primary&#x22;&#x3E;
  Small
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
   &#x3C;el-dropdown-item&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
   &#x3C;el-dropdown-item&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
   &#x3C;el-dropdown-item&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
   &#x3C;el-dropdown-item&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;

&#x3C;el-dropdown size=&#x22;mini&#x22; split-button type=&#x22;primary&#x22;&#x3E;
  Mini
  &#x3C;el-dropdown-menu slot=&#x22;dropdown&#x22;&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 1&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 2&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 3&#x3C;/el-dropdown-item&#x3E;
    &#x3C;el-dropdown-item&#x3E;Action 4&#x3C;/el-dropdown-item&#x3E;
  &#x3C;/el-dropdown-menu&#x3E;
&#x3C;/el-dropdown&#x3E;
                </code>
            </pre>
            </div>
          </div>

          <div>
            <h3 class="mt-8x">Dropdown API</h3>
            <p
              class="mt-2 text-lg"
            >Select your desired component from below and see the available props, slots, events and functions.</p>

            <el-table :data="attributeDropdownApi" class="mt-2">
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
            <h3 class="mt-8x">Dropdown Menu Item API</h3>
            <p
              class="mt-2 text-lg"
            >Select your desired component from below and see the available props, slots, events and functions.</p>

            <el-table :data="attributeDropdownMenuItemApi" class="mt-2">
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
            <h3 class="mt-8x">Dropdown Slot</h3>
            <el-table :data="dropdownslotApi" class="mt-2">
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
            <h3 class="mt-8x">Dropdown Events</h3>
            <el-table :data="dropdowneventApi" class="mt-2">
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
  name: "Dropdown",
  components: {},
  data() {
    return {
      loadingIndexes: [10],
      attributeDropdownApi: [
        {
          attribute: "type",
          description:
            "menu button type, refer to <code>Button</code> Component, only works when <code>split-button</code> is true",
          type: "string",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "size",
          description: "menu size, also works on the split button",
          type: "string",
          acceptedvalues: "medium / small / mini",
          default: "—",
        },
        {
          attribute: "split-button",
          description: "whether a button group is displayed",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "placement",
          description: "placement of pop menu",
          type: "string",
          acceptedvalues:
            "top/top-start/top-end/bottom/bottom-start/bottom-end",
          default: "bottom-end",
        },
        {
          attribute: "trigger",
          description: "how to trigger",
          type: "string",
          acceptedvalues: "hover/click",
          default: "hover",
        },
        {
          attribute: "hide-on-click",
          description: "whether to hide menu after clicking menu-item",
          type: "boolean",
          acceptedvalues: "—",
          default: "true",
        },
        {
          attribute: "show-timeout",
          description:
            "Delay time before show a dropdown (only works when trigger is <code>hover</code>)",
          type: "number",
          acceptedvalues: "—",
          default: "250",
        },
        {
          attribute: "hide-timeout",
          description:
            "Delay time before hide a dropdown (only works when trigger is <code>hover</code>)",
          type: "number",
          acceptedvalues: "—",
          default: "150",
        },
        {
          attribute: "tabindex",
          description:
            '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Dropdown',
          type: "number",
          acceptedvalues: "—",
          default: "0",
        },
      ],
      attributeDropdownMenuItemApi: [
        {
          attribute: "command",
          description:
            "a command to be dispatched to Dropdown's <code>command</code> callback",
          type: "string/number/object",
          acceptedvalues: "—",
          default: "—",
        },
        {
          attribute: "disabled",
          description: "whether the item is disabled",
          type: "boolean",
          acceptedvalues: "—",
          default: "false",
        },
        {
          attribute: "divided",
          description: "whether a divider is displayed",
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
      ],
      dropdownslotApi: [
        {
          name: "—",
          description:
            "content of Dropdown. Notice: Must be a valid html dom element (ex. <code>&lt;span&gt;, &lt;button&gt; etc.</code>) or <code>el-component</code>, to attach the trigger listener",
        },
        {
          name: "dropdown",
          description:
            "content of the Dropdown Menu, usually a <code>&lt;el-dropdown-menu&gt;</code> element",
        },
      ],
      dropdowneventApi: [
        {
          eventname: "click",
          description:
            "if <code>split-button</code> is <code>true</code>, triggers when left button is clicked",
          parameters: "—",
        },
        {
          eventname: "command",
          description: "triggers when a dropdown item is clicked",
          parameters: "the command dispatched from the dropdown item",
        },
        {
          eventname: "visible-change",
          description: "triggers when the dropdown appears/disappears",
          parameters: "true when it appears, and false otherwise",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.el-dropdown + .el-dropdown {
  margin-left: 2rem;
}
</style>