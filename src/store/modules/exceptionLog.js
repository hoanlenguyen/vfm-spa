const state = {
  logs: []
}

const mutations = {
  ADD_EXCEPTION_LOG: (state, log) => {
    state.logs.push(log)
  },
  CLEAR_EXCEPTION_LOG: (state) => {
    state.logs.splice(0)
  }
}

const actions = {
  addExceptionLog({ commit }, log) {
    commit('ADD_EXCEPTION_LOG', log)
  },
  clearExceptionLog({ commit }) {
    commit('CLEAR_EXCEPTION_LOG')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
