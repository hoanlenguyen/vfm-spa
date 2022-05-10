import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(permissions, route) {
  if (route.meta && route.meta.permissions) {
    let permissionsRoute = route.meta.permissions
    return  permissions.includes(permissionsRoute)
  } else {
    return true
  }

}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  getAllRoutes({ commit }){
    return new Promise(resolve => {
      let accessedRoutes =asyncRoutes || []
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
  generateRoutes({ commit }, permissions) {
    return new Promise(resolve => {
      let accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
