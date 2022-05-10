<template>
  <div class="board-column">
    <div class="board-column-header">
      <span>{{ headerText }}</span>
      <div>
        <el-button plain class="btn-text" size="mini">
          <i class="el-icon-more" />
        </el-button>
        <el-button plain class="btn-text" size="mini">
          <i class="el-icon-plus" />
        </el-button>
      </div>
    </div>
    <draggable :list="list" v-bind="$attrs" class="board-column-content" :set-data="setData">
      <div v-for="element in list" :key="element.name +  randomKey()" class="board-item">
        <span class="item-name">{{ element.name }}</span>
        <img :src="element.avatar" v-if="element.avatar" class="item-avatar" />
      </div>
    </draggable>
     <el-button plain class="btn-text mt-2" size="mini" type="primary">
          <i class="el-icon-plus" /> 
          <span>New Item</span>
        </el-button>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "SKanban",
  components: {
    draggable,
  },
  props: {
    headerText: {
      type: String,
      default: "Header",
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    setData(dataTransfer) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData("Text", "");
    },
    randomKey() {
      return new Date() + (Math.random() * 1000).toFixed(0);
    },
  },
};
</script>
<style lang="scss" scoped>
.board-column {
   width: 300px;
   min-width: 300px;
  // min-height: 100px;
  // height: auto;
  // overflow: hidden;
  border-radius: 3px;

    /* width: 300px; */
    min-height: 100px;
    height: auto;
    /* overflow: hidden; */
    /* border-radius: 3px; */
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 400px;

  + .board-column {
    margin-left: 1.6rem;
  }
  .board-column-header {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #fff;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 7px;
    border-top: 2px solid transparent;
        justify-content: space-between;
    align-items: center;
  }

  .board-column-content {
    height: auto;
    overflow: hidden;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    .board-item {
      cursor: pointer;
      width: 100%;
      margin: 8px 0;
      background-color: #fff;
      text-align: left;
      padding: 16px 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-between;
      border-radius: 4px;

      .item-avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-left: 0.8rem;
      }
    }
  }
}
</style>

