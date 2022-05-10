<template>
  <el-tabs
    v-model="tab"
    type="card"
    @tab-click="handleTab"
  >
    <el-tab-pane
      v-for="(item, index) in listTab"
      :key="index"
      :label="$t(`${item.label}`)"
      :name="item.name"
    />
  </el-tabs>
</template>

<script>
export default {
  name: 'STabs',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    listTab: [],
    tab: '',
    tabObservers: null,
    isScrolling: false
  }),
  created() {
    if (this.tabs.length > 0) {
      this.listTab = this.tabs.map(tab => ({ ...tab, isIntersecting: false }))
    }
    this.tab = this.activeTab
  },
  mounted() {
    this.handleInitScroll()
  },
  destroyed() {
    this.tabObservers.disconnect()
  },
  methods: {
    handleTab(tab) {
      this.$scrollTo(`#${tab.name}`, {
        container: '.el-dialog__body',
        offset: -70,
        onStart: () => {
          this.isScrolling = true
        },
        onDone: () => {
          this.isScrolling = false
        }
      })
    },
    handleInitScroll() {
      const options = {
        rootMargin: '-100px 0px 0px',
        threshold: 0
      }
      this.tabObservers = new IntersectionObserver(
        this.handleScrollOnTab,
        options
      )
      this.listTab.forEach((tab) => {
        const tabEle = document.getElementById(tab.name)
        if (tabEle) this.tabObservers.observe(tabEle)
      })
    },
    handleScrollOnTab(entries) {
      entries.forEach((entry) => {
        this.listTab = this.listTab.map((tab) => {
          if (tab.name === entry.target.id) {
            tab.isIntersecting = entry.isIntersecting
          }
          return tab
        })
      })

      const listIntersecting = this.listTab.filter(
        (tab) => tab.isIntersecting
      )
      if (!this.isScrolling && listIntersecting.length > 0) {
        this.tab = listIntersecting[0].name
      }
    }
  }
}
</script>
