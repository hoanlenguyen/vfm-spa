var faker = require('faker');
const { categoryList, postNames, postImages } = require('./mock-data')

const itemList = []
const postCount = faker.random.number({min: 50, max: 100});
for (let i = 0; i < postCount; i++) {
  var category = faker.random.arrayElement(categoryList);
  itemList.push({
    id: faker.random.number({min: 10000, max: 99999}),
    name: faker.commerce.productName(),
    sku: faker.random.number({min: 1000000000000, max: 9999999999999}),
    avatar: faker.random.arrayElement(postImages),
    price: faker.random.float({min: 10, max: 3000}),
    stock: faker.random.number({min: 100, max: 9999}),
    categoryId: category.id,
    categoryName: category.name,
    reviewAvg: faker.random.number(0, 5),
    saleCount: faker.random.number({min: 1000, max: 9999}),
    isActive: faker.random.arrayElement([1, 0]),
  })
}

module.exports = [
  // {
  //   url: '/stonehub-vue-admin-template/product/categoryList',
  //   type: 'get',
  //   response: config => {
  //     return {
  //       code: 20000,
  //       data: { result: categoryList }
  //     }
  //   }
  // },

  {
    url: '/stonehub-vue-admin-template/product/list',
    type: 'get',
    response: config => {
      const { categoryId, keyword, page = 1, rowsPerPage = 20, sortBy, sortDirection } = config.query

      let mockitemList = itemList;
      if (categoryId)
        mockitemList = mockitemList.filter( item => item.categoryId == categoryId + '');
      if (keyword)
        mockitemList = mockitemList.filter(function(item) {
          return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          || (item.sku + '').indexOf(keyword.toLowerCase()) > -1;
        });

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
    url: '/stonehub-vue-admin-template/product/delete',
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
    url: '/stonehub-vue-admin-template/product/getForEdit',
    type: 'get',
    response: config => {
      const { id } = config.query
      var post = itemList.find(item => item.id == id);
      if (post == null) {
        post = {
          id: 0,
          name: '',
          categoryId: '',
          categoryName: '',
          creationTime: '',
          author: '',
          pageviews: 0,
          isActive: 0,
          displayProduct: 0,

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
    url: '/stonehub-vue-admin-template/product/createOrUpdate',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

function compareValues(key, product = 'ascending') {
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
      (product === 'descending') ? (comparison * -1) : comparison
    );
  };
}