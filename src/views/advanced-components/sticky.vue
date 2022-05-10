<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xl="16">
        <el-row :gutter="24">
          <el-col :span="24">
            <div class="card border-0 shadow-sm p-5">
              <h4>Sticky</h4>
              <span>Handles s-sticky elements. Scroll down</span>
            </div>
          </el-col>
          <el-col :xs="24" class="mt-5">
            <s-sticky :z-index="10" :top="0">
              <el-menu :default-active="activeIndex" class="shadow-sm" mode="horizontal">
                <el-menu-item index="1">Sticky Header</el-menu-item>
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
            </s-sticky>
          </el-col>
          <el-col :span="18" class="mt-5">
            <div class="card border-0 shadow-sm">
              <div class="card-header">
                <h4>Basic Demo</h4>
              </div>
              <div class="card-body text-justify">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p
                  class="mt-3"
                  v-for="i in 20"
                  :key="i"
                >A Bloomberg Digital subscription provides unlimited access to Bloomberg News content across any computer or device. This includes all articles, audio versions of articles, videos, podcasts and live streaming of Bloomberg Television. A Digital subscription gets you full access to content on Bloomberg.com, Bloomberg’s flagship mobile and tablet apps, and in Apple News and Google Play Newsstand. As a subscriber, you also receive special, subscriber-only newsletters, The Bloomberg Open and The Bloomberg Close, curated by our global editors and access to special content.</p>
              </div>
            </div>
          </el-col>

          <el-col :span="6" class="mt-5">
            <s-sticky :top="91">
              <div class="card border-0 shadow-sm">
                <div class="card-header">
                  <h4>Sticky Panel</h4>
                </div>
                <div
                  class="card-body text-justify"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</div>
              </div>
            </s-sticky>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SSticky from "@/components/SSticky";

export default {
  name: "StickyDemo",
  components: { SSticky },
};
</script>