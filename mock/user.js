
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: '',
    name: 'Stonehub Admin',
    title: 'Web Developer',
    dateOfBirth: '12 Jun 1988',
    address: 'New York, USA',
    email: 'stonehubvn@gmail.com',
    phone: '+84 902 054 965',
    language: 'English (United State)'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: '',
    name: 'Stonehub Editor',
    title: 'Web Developer',
    dateOfBirth: '12 Jun 1988',
    address: 'New York, USA',
    email: 'stonehubvn@gmail.com',
    phone: '+84 902 054 965',
    language: 'English (United State)'
  }
}

module.exports = [
  // user login
  {
    url: '/stonehub-vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/stonehub-vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/stonehub-vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
