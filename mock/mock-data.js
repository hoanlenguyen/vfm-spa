var faker = require('faker');

var categoryList = [
    { id: 1, name: 'Travel' },
    { id: 2, name: 'Life' },
    { id: 3, name: 'Sports' },
    { id: 4, name: 'Video' },
    { id: 5, name: 'Perspectives' },
    { id: 6, name: 'Energy & Environment' },
]
var postNames = [
    "Diphtheria infections soar to 93 in Central Highlands",
    "Vietnam yet to optimize renewable energy utilization as shortages loom",
    "Twitter silences some top accounts after internal systems hacked",
    "India's Reliance seen emerging as bigger threat for U.S. firms like Amazon, Walmart",
    "Communication collapse: Inside Facebook's tussle with Brazil's central bank",
    "Top EU court ditches transatlantic data transfer deal",
    "Residents at China's giant lake unfazed as rainfall breaks records",
    "Tanker off Yemen risks spilling four times as much oil as Exxon Valdez - U.N.",
    "Ethiopia dam reservoir filling as talks with Egypt, Sudan stall",
    "European shares fall as markets turn risk-averse; ECB in focus",
    "Germany’s long, lonely campaign: Battling Wirecard’s short sellers",
    "Special Report: Drug cartel ‘narco-antennas’ make life dangerous for Mexico’s cell tower repairmen",
    "Special Report: How the Trump administration secured a secret supply of execution drugs",
    "Coronavirus stalks cells of Cameroon's crowded prisons",
    "Humanoid clerk helps to cut red tape in Russia",
]
var postImages = [
    'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1454&q=80',
    'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    'https://images.unsplash.com/photo-1447966129673-88517d4367f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1975&q=80',
    'https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    'https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
    'https://images.unsplash.com/photo-1538709034622-ef769aba06eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1588462708722-0c26bcd2bead?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
]

const avatars = [
    'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f05c14dd4db49f08a789e6449604c490',
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
    'https://randomuser.me/api/portraits/women/27.jpg',
    'https://images.unsplash.com/photo-1510077143771-1b6a5ca97c3d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=618a9900d429329e336f3f08ea20ae1f',
    'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk1NzY2ODAyOF5BMl5BanBnXkFtZTgwNTE2NjExMDI@._V1_UY256_CR5,0,172,256_AL_.jpg',
    'https://images.pexels.com/photos/458718/pexels-photo-458718.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://uifaces.co/our-content/donated/L5sMj2sT.jpg',
    'https://images.unsplash.com/photo-1503593245033-a040be3f3c82?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    'https://randomuser.me/api/portraits/men/86.jpg',
    '',
    '',
    faker.image.avatar(),
    '',
    ''
  ]

var postList = []
 var postCount = faker.random.number({min: 100, max: 200});
 var category1 = faker.random.arrayElement(categoryList);

postList.push({
    id: 1,
    name: faker.random.arrayElement(postNames),
    categoryId: category1.id,
    categoryName: category1.name,
    creationTime: faker.date.past(),
    author: faker.name.findName(),
    pageviews: faker.random.number({min: 500, max: 50000}),
    isActive: faker.random.arrayElement([1, 0]),
    displayOrder: faker.random.number({min: 2, max: 5000}),
    avatarUrl: 'http://placeimg.com/200/200/any',
    bannerUrl: 'http://placeimg.com/201/201/any',

    shortDescription: faker.lorem.paragraph(),
    fullDescription: '<p>' + faker.lorem.paragraphs() + '</p>' +
       '<img src="http://placeimg.com/1000/800/any"/>' +
       '<p>' + faker.lorem.paragraphs() + '</p>'
})

postList.push({
    id: 1,
    name: faker.random.arrayElement(postNames),
    categoryId: category1.id,
    categoryName: category1.name,
    creationTime: faker.date.past(),
    author: faker.name.findName(),
    pageviews: faker.random.number({min: 500, max: 50000}),
    isActive: faker.random.arrayElement([1, 0]),
    displayOrder: faker.random.number({min: 2, max: 5000}),
    avatarUrl: faker.random.arrayElement(postImages),
    bannerUrl: faker.random.arrayElement(postImages),

shortDescription: faker.lorem.paragraph(),
    fullDescription: '<p>' + faker.lorem.paragraphs() + '</p>' +
       '<img src="http://placeimg.com/1000/800/any"/>' +
       '<p>' + faker.lorem.paragraphs() + '</p>'
})

for (let i = 2; i < postCount; i++) {
    var category = faker.random.arrayElement(categoryList);

    postList.push({
        id: ++i,
        name: faker.random.arrayElement(postNames),
        categoryId: category.id,
        categoryName: category.name,
        creationTime: faker.date.past(),
        author: faker.name.findName(),
        pageviews: faker.random.number({min: 500, max: 50000}),
        isActive: faker.random.arrayElement([1, 0]),
        displayOrder: faker.random.number({min: 2, max: 5000}),
        avatarUrl: faker.random.arrayElement(postImages),
        bannerUrl: faker.random.arrayElement(postImages),

shortDescription: faker.lorem.paragraph(),
    fullDescription: '<p>' + faker.lorem.paragraphs() + '</p>' +
       '<img src="http://placeimg.com/1000/800/any"/>' +
       '<p>' + faker.lorem.paragraphs() + '</p>'
    })
}

module.exports = {
    categoryList,
    postList,
    avatars,
    postImages,
    postNames,
  }
  