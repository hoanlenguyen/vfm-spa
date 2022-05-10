var faker = require('faker');
const { categoryList, avatars } = require('./mock-data')

const registerMethods = [
  'Email',
  'Facebook',
  'Google',
  'Phone Number'
]

const itemList = []
const postCount = faker.random.number({min: 100, max: 200});
itemList.push({
  id: 100,
  avatar: faker.random.arrayElement(avatars),
  title: faker.name.prefix(),
  name: faker.name.findName(),
  address: faker.address.streetAddress(),
  email: faker.internet.email(),
  company: faker.company.companyName(),
  phone: faker.phone.phoneNumberFormat(),
  country: faker.address.country(),
  city: faker.address.city(),
  lastOrder: faker.date.past(),
  dateOfBirth: faker.date.past(),
  joiningDate: faker.date.past(),
  registerMethod: faker.random.arrayElement(registerMethods),
  isActive: faker.random.arrayElement([1, 0]),
  emailVerified: faker.random.arrayElement([1, 0]),
  adminNotes: [
    {
      content: faker.lorem.paragraphs(),
      creationTime: faker.date.past(),
      author: faker.name.findName(),
    },
    {
      content: faker.lorem.paragraphs(),
      creationTime: faker.date.past(),
      author: faker.name.findName(),
    },
    {
      content: faker.lorem.paragraphs(),
      creationTime: faker.date.past(),
      author: faker.name.findName(),
    }
  ],
  totalNoOrderCompleted: faker.random.number({min:10, max: 100}),
  totalNoOrderInProgress: faker.random.number({min: 2, max: 10}),
  totalOrderCompleted: faker.random.number({ min: 1000, max: 990000 }),
  totalOrderInProgress: faker.random.number({ min: 1000, max: 3900 }),
  lastLogin: faker.date.past(),
  registerAt: faker.date.past(),
  groups: faker.lorem.words().split(' ')
})

for (let i = 0; i < postCount; i++) {
  itemList.push({
    id: faker.random.number(10, 999),
    avatar: faker.random.arrayElement(avatars),
    title: faker.name.prefix(),
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    company: faker.company.companyName(),
    phone: faker.phone.phoneNumberFormat(),
    country: faker.address.country(),
    city: faker.address.city(),
    lastOrder: faker.date.past(),
    dateOfBirth: faker.date.past(),
    joiningDate: faker.date.past(),
    registerMethod: faker.random.arrayElement(registerMethods),
    isActive: faker.random.arrayElement([1, 0]),
    emailVerified: faker.random.arrayElement([1, 0]),
    adminNotes: [
      {
        content: faker.lorem.paragraphs(),
        creationTime: faker.date.past(),
        author: faker.name.findName(),
      },
      {
        content: faker.lorem.paragraphs(),
        creationTime: faker.date.past(),
        author: faker.name.findName(),
      },
      {
        content: faker.lorem.paragraphs(),
        creationTime: faker.date.past(),
        author: faker.name.findName(),
      }
    ],
    totalNoOrderCompleted: faker.random.number({min:10, max: 100}),
    totalNoOrderInProgress: faker.random.number({min: 2, max: 10}),
    totalOrderCompleted: faker.random.number({ min: 1000, max: 990000 }),
    totalOrderInProgress: faker.random.number({ min: 1000, max: 3900 }),
    lastLogin: faker.date.past(),
    registerAt: faker.date.past(),
    groups: faker.lorem.words().split(' ')
  })
}

module.exports = [
  {
    url: '/stonehub-vue-admin-template/customer/categoryList',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: { result: categoryList }
      }
    }
  },

  {
    url: '/stonehub-vue-admin-template/customer/list',
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
    url: '/stonehub-vue-admin-template/customer/delete',
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
    url: '/stonehub-vue-admin-template/customer/getForEdit',
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
    url: '/stonehub-vue-admin-template/customer/createOrUpdate',
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