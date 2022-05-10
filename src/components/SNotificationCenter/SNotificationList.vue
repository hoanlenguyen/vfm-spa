<template>
  <div class="notification-list">
    <div v-if="items.length > 0">
      <h6 class="list-group-heading on-top">Recent</h6>
        <div v-if="recentItems.length > 0" class="list-container">
          <div v-for="item in recentItems" :key="item.id" class="list-item px-4x hover-visible-container" :class="{ 'bgc-blue-l44': !item.read }">
            <div class="row row-sm align-items-center">
              <div class="col-auto">
                <s-avatar :name="item.person" :size="40"></s-avatar>
              </div>
              <div class="col">
                <p><strong>{{ item.person }}</strong></p>
                <p class="text-grey text-sm">{{ item.content }}</p>
              </div>
              <div class="col-auto hover-visible-item">
                <el-button :type="item.read ? '' : 'primary'" plain class="btn-text" size="mini">
                  <i class="el-icon-more" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="py-6x text-sm text-center c-grey-l16">No items</p>
        </div>
        <h6 class="list-group-heading">Earlier</h6>
        <div v-if="earlierItems.length > 0" class="list-container">
          <div v-for="item in earlierItems" :key="item.id" class="list-item px-4x hover-visible-container" :class="{ 'bgc-blue-l44': !item.read }">
            <div class="row row-sm align-items-center">
              <div class="col-auto">
                <s-avatar :name="item.person" :size="40"></s-avatar>
              </div>
              <div class="col">
                <p><strong>{{ item.person }}</strong></p>
                <p class="text-grey text-sm">{{ item.content }}</p>
              </div>
              <div class="col-auto hover-visible-item">
                <el-button :type="item.read ? '' : 'primary'" plain class="btn-text" size="mini">
                  <i class="el-icon-more" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="py-6x text-sm text-center c-grey-l16">No items.</p>
        </div>
    </div>
    <div v-else>
      <p class="py-6x text-sm text-center c-grey-l16">No items.</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SNotificationList',
  data () {
    return {
      items: [
        {
          id: 1,
          read: false,
          person: 'Black Widow',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cum, quidem libero voluptas dicta debitis voluptate veritatis exercitationem perferendis, beatae molestiae! Delectus possimus corporis voluptates fugit maxime dolores rerum odit.'
        },
        {
          id: 2,
          read: false,
          person: 'Black Panther',
          content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
        },
        {
          id: 3,
          read: true,
          person: 'Captain America',
          content: ' Nulla et tortor mollis, finibus felis id, commodo neque. Donec sodales ligula in urna posuere rutrum'
        },
        {
          id: 4,
          read: true,
          person: 'Iron Man',
          content: 'Phasellus facilisis justo commodo metus suscipit imperdiet. Nunc tincidunt neque ut congue blandit'
        },
        {
          id: 5,
          read: true,
          person: 'Hulk',
          content: 'Maecenas dolor lectus, hendrerit eu ligula nec, rhoncus euismod arcu. Nunc ac ultrices ligula'
        },
        {
          id: 6,
          read: true,
          person: 'Black Widow',
          content: 'Nulla a condimentum nulla. Ut et finibus massa, sit amet suscipit dui. Duis odio velit, aliquet in eros ac, sagittis volutpat massa'
        },
        {
          id: 7,
          read: true,
          person: 'Thor',
          content: 'Duis mattis justo at euismod vestibulum. In non pretium tortor. Vivamus ultrices turpis nec pulvinar consequat.'
        },
        {
          id: 8,
          read: true,
          person: 'Loki',
          content: 'Vestibulum egestas condimentum orci, ut dapibus odio scelerisque ut. Nunc vel ligula justo. Cras porttitor purus augue, at interdum nibh hendrerit id. Aliquam quis finibus quam.'
        },
        {
          id: 9,
          read: true,
          person: 'Hawk Eye',
          content: 'Pellentesque suscipit scelerisque varius. In hac habitasse platea dictumst. In elit quam, iaculis ac est quis, rutrum placerat orci.'
        },
        {
          id: 10,
          read: true,
          person: 'Doctor Strange',
          content: 'In sagittis, turpis non dictum accumsan, sem nisi convallis nisl, finibus imperdiet arcu nisl non dui. Sed laoreet aliquam lectus, et feugiat sem tristique id.'
        }
      ]
    }
  },
  computed: {
    recentItems () {
      let result = []

      if (this.items.length > 3) {
        result = _.slice(this.items, 0, 3)
      } else {
        result = this.items
      }

      return result
    },
    earlierItems () {
      let result = []

      if (this.items.length > 3) {
        result = _.slice(this.items, 3, this.items.length)
      }
      
      return result
    }
  }
}
</script>