const { categoryList, postList } = require('./mock-data')

module.exports = [
  {
    url: '/stonehub-vue-admin-template/blog/categoryList',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: { result: categoryList }
      }
    }
  },

  {
    url: '/stonehub-vue-admin-template/blog/list',
    type: 'get',
    response: config => {
      const { categoryId, keyword, page = 1, rowsPerPage = 20, sortBy, sortDirection } = config.query

      let mockpostList = postList;
      if (categoryId)
        mockpostList = mockpostList.filter(item => item.categoryId == categoryId + '');
      if (keyword)
        mockpostList = mockpostList.filter(item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);

      // sort
      mockpostList = mockpostList.sort(compareValues(sortBy, sortDirection));

      const pagedpostList = mockpostList.filter((item, index) => index < rowsPerPage * page && index >= rowsPerPage * (page - 1))

      return {
        code: 20000,
        data: {
          result: {
            total: mockpostList.length,
            items: pagedpostList
          }
        }
      }
    }
  },

  {
    url: '/stonehub-vue-admin-template/blog/delete',
    type: 'get',
    response: config => {
      const { id } = config.query
      //postList = postList.filter(item => item.id !== id);
      return {
        code: 20000,
        data: { success: true }
      }
    }
  },

  {
    url: '/stonehub-vue-admin-template/blog/getForEdit',
    type: 'get',
    response: config => {
      const { id } = config.query
      var post = postList.find(item => item.id == id);
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
    url: '/stonehub-vue-admin-template/blog/createOrUpdate',
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