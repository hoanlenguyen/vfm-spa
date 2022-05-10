
<template>
  <div class="todo-container card p-0 border-0 shadow">
    <el-row type="flex" justify="center" align="center" class="align-self-stretch w-100">
      <el-col :span="4" class="hidden-md-and-down">
        <div class="text-center py-5">
          <s-icon icon="material-check-box" size="3rem" class="c-success" />
          <h4 class="mt-3">TODO LIST</h4>
        </div>
        <el-menu :default-active="activeMenuId + ''" @select="handleMenuSelect">
          <el-menu-item
            v-for="menu in todoMenus"
            :key="menu.id"
            :index="menu.id + ''"
            class="menu-item"
          >
            <s-icon :icon="menu.icon" />
            <span class="ml-2">{{menu.name}}</span>
            <span
              class="count"
              v-if="getTaskItemsCount(menu.id) > 0"
            >{{getTaskItemsCount(menu.id) | number('0,0')}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :lg="activedItem ? 15 : 20" :md="24" class="task-container p-5">
        <div
          class="d-flex justify-content-between align-items-center todo-header mt-4 mb-5"
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
              <div class="py-4 flex-grow-1" @click="handleTaskSelected(item)">
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
        <div class="todo-footer">
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
      <el-col :span="5" v-if="activedItem" class="task-detail hidden-md-and-down">
        <div class="task-item p-4 w-100" :class="{'completed' : activedItem.completed}">
          <div class="d-flex justify-content-between align-items-center w-100 mb-5">
            <span class="check mr-4">
              <s-icon
                icon="far fa-circle"
                size="2rem"
                class="check-circle"
                @click.native="handleTaskCompleted(activedItem)"
              />
              <s-icon
                icon="far fa-check-circle"
                size="2rem"
                class="checked-circle"
                @click.native="handleTaskCompleted(activedItem)"
              />
            </span>
            <el-input
              type="textarea"
              class="name overflow-hidden"
              autosize
              placeholder="Add a task"
              v-model="activedItem.name"
            ></el-input>
            <span>
              <s-icon
                v-if="activedItem.isImportant"
                icon="fas fa-star"
                class="c-warning ml-4 pointer"
                size="1.4rem"
                @click.native="handleTaskImportant(activedItem)"
              ></s-icon>
              <s-icon
                v-else
                icon="far fa-star pointer"
                class="ml-4"
                size="1.4rem"
                @click.native="handleTaskImportant(activedItem)"
              ></s-icon>
            </span>
          </div>

          <div
            class="d-flex justify-content-between align-items-center task-item"
            :class="{'completed' : item.completed}"
            v-for="item in activedItem.subTasks"
            :key="item.id + '' + activedItem.id"
          >
            <span class="check mr-4">
              <s-icon
                icon="far fa-circle"
                size="1.6rem"
                class="check-circle"
                @click.native="handleTaskCompleted(item)"
              />
              <s-icon
                icon="far fa-check-circle"
                size="1.6rem"
                class="checked-circle"
                @click.native="handleTaskCompleted(item)"
              />
            </span>
            <span class="name flex-grow-1 py-4 border-bottom">{{item.name}}</span>
          </div>

          <div class="subtask-add py-4 w-100 d-flex justify-content-center align-items-center">
            <s-icon icon="el-icon-plus" class="mr-3" size="1.6rem"></s-icon>
            <el-input
              placeholder="Add step"
              v-model="addNewSubTaskModel.name"
              @keyup.enter.native="handleAddNewSubTask(activedItem)"
            ></el-input>
          </div>
        </div>
        <div class="px-3 pt-3">
          <el-menu>
            <el-menu-item>
              <s-icon icon="el-icon-sunny" />
              <span class="ml-2">Add to My Day</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="px-3 pt-3">
          <el-menu>
            <el-menu-item class="d-flex justify-content-center align-items-center">
              <s-icon icon="el-icon-alarm-clock" />
              <span class="ml-2 flex-grow-1 border-bottom">Remind me</span>
            </el-menu-item>
            <el-menu-item class="d-flex justify-content-center align-items-center">
              <s-icon icon="el-icon-date" />
              <span class="ml-2 flex-grow-1 border-bottom">Add due date</span>
            </el-menu-item>
            <el-menu-item>
              <s-icon icon="el-icon-refresh-right" />
              <span class="ml-2">Repeat</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="px-3 pt-3">
          <el-menu>
            <el-menu-item>
              <s-icon icon="el-icon-paperclip" />
              <span class="ml-2">Add file</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="px-3 pt-3">
          <el-input
            class="note"
            type="textarea"
            :rows="2"
            placeholder="Add note"
            v-model="activedItem.note"
          ></el-input>
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
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
          name:
            "Discuss with Sale team about new project Discuss with Sale team about new project.",
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
      console.log(this.todoItems);
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
      if (item != this.activedItem) this.activedItem = item;
      else this.activedItem = null;
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
.hasTagsView .todo-container {
  height: calc(100vh - 175px);
}

.todo-container {
  height: calc(100vh - 140px);
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
    color: #1e704d;
  }
  .scroll-bar-wrapper {
    height: calc(100% - 126px);
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
      background: rgba(0, 0, 0, 0.2);
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