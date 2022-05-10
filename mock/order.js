var faker = require('faker');
const { categoryList, avatars } = require('./mock-data')

const itemList = []
const postCount = faker.random.number({min: 100, max: 200});
for (let i = 0; i < postCount; i++) {
  itemList.push({
    id: faker.random.number({min: 10000, max: 99999}),
    date: faker.date.past(),
    isActive: faker.random.arrayElement([0, 1]),
    total: faker.random.float({min: 10, max: 3000}),
    customer: faker.name.findName(),
    avatar: faker.random.arrayElement(avatars),
    email: faker.internet.email(),
  })
}

module.exports = [
  {
    url: '/stonehub-vue-admin-template/order/categoryList',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: { result: categoryList }
      }
    }
  },

  {
    url: '/stonehub-vue-admin-template/order/list',
    type: 'get',
    response: config => {
      const { statusId, keyword, page = 1, rowsPerPage = 20, sortBy, sortDirection } = config.query

      let mockitemList = itemList;
      if (statusId)
        mockitemList = mockitemList.filter(item => item.isActive == statusId + '');
      if (keyword)
        mockitemList = mockitemList.filter(item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);

      // sort
      mockitemList = mockitemList.sort(compareValues(sortBy, sortDirection));

      const pageditemList = mockitemList.filter((item, index) => index < rowsPerPage * page && index >= rowsPerPage * (page - 1))

      return {
        code: 20000,
        data: {
          result: {
            total: mockitemList.length,
            items: pageditemList
          }
        }
      }
    }
  },

  {
    url: '/stonehub-vue-admin-template/order/delete',
    type: 'get',
    response: config => {
      const { id } = config.query
      //itemList = itemList.filter(item => item.id !== id);
      return {
        code: 20000,
        data: { success: true }
      }
    }
  },

  {
    url: '/stonehub-vue-admin-template/order/getForEdit',
    type: 'get',
    response: config => {
      const { id } = config.query
      var post = itemList.find(item => item.id == id);
      if (post == null) {
        post = {
          id: 0,
          name: '',
          statusId: '',
          categoryName: '',
          creationTime: '',
          author: '',
          pageviews: 0,
          isActive: 0,
          displayOrder: 0,

          shortDescription: '',
          fullDescription: '',
        }
      }
      return {
        code: 20000,
        data: { result: post }
      }
    }
  },

  {
    url: '/stonehub-vue-admin-template/order/createOrUpdate',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

function compareValues(key, order = 'ascending') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'descending') ? (comparison * -1) : comparison
    );
  };
}