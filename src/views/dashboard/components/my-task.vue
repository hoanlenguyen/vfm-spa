
<template>
  <div class="todo-container">
    <el-row type="flex" justify="center" align="center" class="align-self-stretch w-100">
      <el-col :span="activedItem ? 24 : 24" class>
        <div
          class="d-flex justify-content-between align-items-center todo-header p-5x"
          v-if="activedMenu"
        >
          <h4>
            <s-icon :icon="activedMenu.icon" class="mr-3" />
            <span>{{activedMenu.name}}</span>
          </h4>
          <el-button type="success" class="btn-text" plain size="small">
            <s-icon icon="el-icon-more"></s-icon>
          </el-button>
        </div>
        <el-scrollbar class="disable-horizontal-scroll scroll-bar-wrapper">
          <div class="todo-tasks" v-if="activeTaskItems && activeTaskItems.length > 0">
            <div
              class="d-flex justify-content-between align-items-center task-item rounded-sm mb-2"
              :class="{'completed' : item.completed}"
              v-for="item in activeTaskItems"
              :key="item.id + '' + activedMenu.id"
            >
              <span class="check mr-4 ml-4">
                <s-icon
                  icon="far fa-circle"
                  size="2rem"
                  class="check-circle"
                  @click.native="handleTaskCompleted(item)"
                />
                <s-icon
                  icon="far fa-check-circle"
                  size="2rem"
                  class="checked-circle"
                  @click.native="handleTaskCompleted(item)"
                />
              </span>
              <div class="py-2 flex-grow-1" @click="handleTaskSelected(item)">
                <span class="name">{{item.name}}</span>
                <div
                  class="mt-2 text-muted"
                  v-if="(item.subTasks && item.subTasks.length > 0) || (item.dueDate) || (item.remindMe)"
                >
                  <small
                    class="mr-4"
                    v-if="item.subTasks && item.subTasks.length > 0"
                  >{{item.subTasks.filter(p=>p.completed).length}} of {{item.subTasks.length}}</small>
                  <small v-if="item.dueDate" class="mr-4">
                    <s-icon icon="el-icon-date mr-1" size="1.2rem"></s-icon>
                    <span>{{item.dueDate | date}}</span>
                  </small>
                  <small v-if="item.remindMe" class="mr-4">
                    <s-icon icon="el-icon-alarm-clock mr-1" size="1.2rem"></s-icon>
                    <span>{{item.remindMe | date}}</span>
                  </small>
                </div>
              </div>
              <el-tooltip content="Mark as important" placement="top">
                <s-icon
                  v-if="item.isImportant"
                  icon="fas fa-star"
                  class="c-warning ml-4 mr-4 pointer"
                  size="1.4rem"
                  @click.native="handleTaskImportant(item)"
                ></s-icon>
                <s-icon
                  v-else
                  icon="far fa-star"
                  class="ml-4 mr-4 pointer"
                  size="1.4rem"
                  @click.native="handleTaskImportant(item)"
                ></s-icon>
              </el-tooltip>
            </div>
          </div>
        </el-scrollbar>
        <div class="todo-footer p-4">
          <div
            class="task-add rounded-sm p-4 w-100 d-flex justify-content-center align-items-center"
          >
            <s-icon icon="el-icon-plus" class="mr-3" size="2rem"></s-icon>
            <el-input
              placeholder="Add a task"
              v-model="addNewTaskModel.name"
              @keyup.enter.native="handleAddNewTask"
            ></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import { deepClone } from "@/utils";

export default {
  name: "Todo",
  components: {},
  props: {},
  data() {
    return {
      activeMenuId: null,
      activedMenu: null,
      activeTaskItems: null,
      activedItem: null,
      addNewTaskModel: { id: null, name: null },
      addNewSubTaskModel: { id: null, name: null },
      todoMenus: [
        { id: 1, name: "My Day", icon: "el-icon-sunny" },
        { id: 2, name: "Important", icon: "el-icon-star-off" },
        { id: 3, name: "Planned", icon: "el-icon-date" },
        { id: 4, name: "Assign to you", icon: "el-icon-user" },
        { id: 5, name: "Tasks", icon: "el-icon-house" },
      ],
      todoItems: [
        {
          id: 1,
          isMyDay: true,
          isImportant: false,
          remindMe: "2020/08/30",
          dueDate: "2020/08/30",
          isRepeat: false,
          name: "Company Meeting",
          note: "",
          completed: false,
          subTasks: [
            {
              id: 9,
              isMyDay: true,
              isImportant: false,
              remindMe: "2020/08/30",
              dueDate: "2020/08/31",
              isRepeat: false,
              name:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus.",
              note: "",
              completed: false,
            },
          ],
        },
        {
          id: 2,
          isMyDay: false,
          isImportant: true,
          remindMe: "2020/08/30",
          dueDate: "2020/08/30",
          isRepeat: false,
          name: "Post new article",
          note: "",
          completed: false,
          subTasks: [],
        },
        {
          id: 9,
          isMyDay: true,
          isImportant: false,
          remindMe: "2020/08/30",
          dueDate: "2020/08/31",
          isRepeat: false,
          name: "Discuss with Sale team about new project",
          note: "",
          completed: false,
          subTasks: [],
        },
        {
          id: 10,
          isMyDay: false,
          isImportant: false,
          remindMe: "2020/08/30",
          dueDate: "2020/08/30",
          isRepeat: false,
          name: "Welcome party",
          note: "",
          completed: false,
          subTasks: [],
        },
        {
          id: 11,
          isMyDay: false,
          isImportant: true,
          remindMe: "2020/08/30",
          dueDate: "2020/08/30",
          isRepeat: false,
          name: "Marketing team meeting at Highland Coffee",
          note: "",
          completed: false,
          subTasks: [],
        },
        {
          id: 12,
          isMyDay: false,
          isImportant: false,
          remindMe: "2020/08/30",
          dueDate: "2020/08/30",
          isRepeat: false,
          name: "Check order #45551",
          note: "",
          completed: false,
          subTasks: [],
        },
        {
          id: 13,
          isMyDay: true,
          isImportant: false,
          remindMe: "2020/08/30",
          dueDate: "2020/08/30",
          isRepeat: false,
          name: "Verification card transaction",
          note: "",
          completed: false,
          subTasks: [],
        },
        {
          id: 14,
          isMyDay: true,
          isImportant: false,
          remindMe: "2020/08/30",
          dueDate: "2020/08/30",
          isRepeat: false,
          name: "Conference call with Mr. John",
          note: "",
          completed: false,
          subTasks: [],
        },
        {
          id: 15,
          isMyDay: true,
          isImportant: false,
          assignToMe: true,
          remindMe: "2020/08/30",
          dueDate: "2020/08/30",
          isRepeat: false,
          name: "Fix issue on production",
          note: "",
          completed: false,
          subTasks: [],
        },
      ],
    };
  },
  mounted() {
    this.setRandomDate();
    this.handleMenuSelect("1", "");
  },
  computed: {},
  methods: {
    handleMenuSelect(index, indexPath) {
      index = parseInt(index);
      this.activeMenuId = index;
      this.activedMenu = this.todoMenus.find((p) => p.id == index);
      this.activeTaskItems = this.getTaskItems(index);
    },
    setRandomDate() {
      var me = this;
      this.todoItems.forEach(function (item) {
        item.remindMe = me.randomDate(new Date());
        item.dueDate = me.randomDate(new Date());
      });
    },
    randomDate(today) {
      var boolRandom = [0, 1];
      if (boolRandom[Math.floor(Math.random() * boolRandom.length)]) {
        var adjustDays = [-5, -1, 0, 1, 2, 3, 4, 5, 6, 7];
        var dayAdd = adjustDays[Math.floor(Math.random() * adjustDays.length)];
        return new Date(today.setDate(today.getDate() + dayAdd));
      }
      return null;
    },
    getTaskItems(menuId) {
      switch (menuId) {
        case 1: // My Day
          return this.todoItems.filter((p) => p.isMyDay);
          break;
        case 2: // Important
          return this.todoItems.filter((p) => p.isImportant);
          break;
        case 3: // Planned
          return this.todoItems.filter((p) => p.dueDate);
          break;
        case 4: // Assign to you
          return this.todoItems.filter((p) => p.assignToMe);
          break;
        case 5: // Tasks
          return this.todoItems;
          break;
        default:
          return [];
      }
    },
    getTaskItemsCount(menuId) {
      return this.getTaskItems(menuId).length;
    },

    handleTaskCompleted(item) {
      item.completed = !item.completed;
    },
    handleTaskImportant(item) {
      item.isImportant = !item.isImportant;
    },
    handleTaskSelected(item) {
      //if (item != this.activedItem) this.activedItem = item;
      //else
      this.activedItem = null;
    },
    handleAddNewTask() {
      this.addNewTaskModel.id = this.todoItems.length * 2 + 1;
      this.todoItems.unshift(deepClone(this.addNewTaskModel));
      this.addNewTaskModel = { id: null, name: null };
    },
    handleAddNewSubTask(currentTask) {
      this.addNewSubTaskModel.id = currentTask.subTasks.length + 1;
      currentTask.subTasks.push(deepClone(this.addNewSubTaskModel));
      this.addNewSubTaskModel = { id: null, name: null };
    },
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.todo-container {
  height: 454px;
  display: flex;

  .task-container {
    background-color: #d5f1e5;
    transition: all 0.4s;
  }
  .el-menu {
    border-right: 0;
  }
  .menu-item {
    &.is-active {
      background-color: #f1f3fa;
    }
    .count {
      right: 20px;
      position: absolute;
    }
  }

  .todo-header h4 {
    color: #1F84F4;
  }
  .scroll-bar-wrapper {
    height: calc(100% - 156px);
  }
  .todo-tasks {
    .task-item {
      &:hover {
        background: #f5f5f5;
      }
    }
  }

  .task-item {
    background: #fff;

    .checked-circle {
      display: none;
      cursor: pointer;
    }
    .check-circle {
      display: block;
      cursor: pointer;
    }
    &.completed .check,
    .check:hover {
      .check-circle {
        display: none;
      }
      .checked-circle {
        display: block;
      }
    }
    &.completed {
      .name {
        text-decoration: line-through;
      }
    }
  }

  .task-detail {
    transition: all 0.4s;
    background: #f5f5f5;

    .el-menu-item {
      height: 48px;
      line-height: 48px;
    }

    .name {
      font-weight: 500;
      > textarea {
        padding: 6px 0px 0px !important;
        border: 0px !important;

        border-radius: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 110%;
      }
    }
  }
  .todo-footer {
    .task-add {
      background: rgba(31,132,244, 0.9);
    }
  }
}
</style>

<style lang="scss">
.el-textarea {
  &.name textarea {
    padding: 3px 0px 0px !important;
    border: 0px !important;
    font-weight: 500;
    border-radius: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 110%;
  }

  &.note textarea {
    border: 0px !important;
    border-radius: 0px;
  }
}

.task-add {
  color: #fff;
  .el-input__inner {
    border: 0;
    padding: 0;
    margin: 0;
    height: 16px;
    line-height: 16px;
    background: transparent;
    color: #fff;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
    }
  }
}

.subtask-add {
  .el-input__inner {
    border: 0;
    padding: 0;
    margin: 0;
    height: 16px;
    line-height: 16px;
    background: transparent;
  }
}
</style>