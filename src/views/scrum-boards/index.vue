<template>
  <div>
    <el-scrollbar class="board-container" wrap-class="board-wrapper">
      <div class="board">
        <s-kanban :key="1" :list="list1" :group="group" class="kanban memo" header-text="Memo" />
        <s-kanban
          :key="2"
          :list="list2"
          :group="group"
          class="kanban roadblocks"
          header-text="Roadblocks"
        />
        <s-kanban
          :key="3"
          :list="list3"
          :group="group"
          class="kanban priorities"
          header-text="Current Priorities"
        />
        <s-kanban
          :key="4"
          :list="list4"
          :group="group"
          class="kanban hold"
          header-text="Items on Hold"
        />
        <!-- <s-kanban
          :key="5"
          :list="list5"
          :group="group"
          class="kanban files"
          header-text="Link to Files"
        />
        <s-kanban
          :key="6"
          :list="list6"
          :group="group"
          class="kanban completed"
          header-text="Completed"
        /> -->
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import SKanban from "@/components/SKanban";

export default {
  name: "DragKanbanDemo",
  components: {
    SKanban,
  },
  data() {
    return {
      avatars: [
        "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1454&q=80",
        "https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
        "https://images.unsplash.com/photo-1447966129673-88517d4367f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1975&q=80",
        "https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
        "https://images.unsplash.com/photo-1538709034622-ef769aba06eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1588462708722-0c26bcd2bead?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      ],

      group: "mission",
      list1: [
        {
          name:
            'Notes and other things. This is also where emails show up when you "Email to board."',
        },
        { name: "Make your own headers!" },
        { name: "M: 1p Tue This means meeting" },
        { name: "E: This means email - need to follow up" },
        { name: "C: 1p Wed This means call" },
        { name: "Z: This means Zoom meeting" },
        { name: "Friday is a Holiday!" },
      ],
      list2: [
        { name: "Things getting in the way of progress" },
        {
          name: "Waiting to hear back from IT on the new computer",
          avatar:
            "https://images.unsplash.com/photo-1538709034622-ef769aba06eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        },
      ],
      list3: [
        { name: "Projects currently working on" },
        { name: "August Newsletter" },
      ],
      list4: [
        { name: "These items have been put on the back-burner..." },
        {
          name: "Computer system update",
          avatar:
            "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
        },
        { name: "All Fundraising has been canceled for the time being" },
      ],
      list5: [
        {
          name:
            "Any files you refer to often should be placed here. Training guides, templates, report links, log-ins, phone numbers and contact info, benefits and policies",
        },
        { name: "Override code for alarm system" },
        { name: "Phone number for Thursday calls" },
        { name: "Website link for new project" },
        { name: "PTO Policy" },
        { name: "Company Benefits" },
        { name: "Phone number for Thursday calls" },
      ],
      list6: [
        {
          name:
            "All done with this stuff! Move completed tasks/projects here so you can see all that you've accomplished.",
        },
      ],
    };
  },
  mounted() {
    for (let i = 0; i < this.list1.length; i++) {
      let idx = Math.floor(Math.random() * this.avatars.length);
      var avatar = this.avatars[idx];

      this.list1[i].avatar = avatar;
    }

    console.log(this.list1);
  },
  methods: {
    randomKey() {
      return new Date() + (Math.random() * 1000).toFixed(0);
    },
  },
};
</script>
<style lang="scss">
.hasTagsView .board-container{
  min-height: calc(100vh - 175px);
}

.board-container{
  min-height: calc(100vh - 140px);

  .board-wrapper{
    overflow-x: hidden;
  }
}
.board {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
}
.kanban {
  &.memo {
    .board-column-header {
      border-top-color: #4a9ff9;
    }
  }
  &.roadblocks {
    .board-column-header {
      border-top-color: #f9944a;
    }
  }
  &.priorities {
    .board-column-header {
      border-top-color: #E65100;
    }
  }

  &.hold {
    .board-column-header {
      border-top-color: #F900EA;
    }
  }

  &.files {
    .board-column-header {
      border-top-color: rgb(191, 85, 236);
    }
  }

  &.completed {
    .board-column-header {
      border-top-color: rgb(107, 201, 80);
    }
  }
}
</style>

