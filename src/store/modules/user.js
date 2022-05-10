import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
const state = {
  user: null,
  token: getToken(),
  name: '',
  avatar: '',
  email: '',
  introduction: '',
  roles: [],
  permissions:[]
}

const mutations = {

  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_AVATAR: (state, avatar) => {
    if (avatar) {
      if (avatar.startsWith(process.env.VUE_APP_BASE_API) == false) {
        avatar = avatar
      }
    }
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USER: (state, data) => {
    state.user = data
  },
  SET_PERMISSIONS: (state, data) => {
    state.permissions = data
  },
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, tenant } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password, tenant: tenant.trim() }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.result.accessToken)
        setToken(data.result.accessToken)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then((response) => {
        const data = response.data
        if (!data) {
          reject('Verification failed, please Login again.')
        }

        // const roles = data.result.roleNames;
        const roles = data.result.roleNames
        const permissions = data.result.permissions
        const email = data.result.emailAddress
        const name = data.result.name
        const avatar = data.result.avatarUrl
        const introduction = data.result.name

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        commit('SET_EMAIL', email)
        commit('SET_USER', data.result)
        commit('SET_PERMISSIONS',permissions)
        resolve({
          permissions:permissions,
          roles: data.result.roleNames,
          name: data.result.name,
          avatar: data.result.avatarUrl,
          introduction: data.result.name
        })
      }).catch(error => {
        reject(error)
      })
    })
  },

  UpdateUserInfo({ commit, state }, userInfo) {
    commit('SET_NAME', userInfo.name)
    commit('SET_INTRODUCTION', userInfo.introduction)
  },
  // Set avatar url of user
  setUserAvatar({ commit, state }, avatarUrl) {
    commit('SET_AVATAR', avatarUrl)
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise(async(resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_USER', null)
      commit('SET_PERMISSIONS',[])
      removeToken()
      resetRouter()
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
