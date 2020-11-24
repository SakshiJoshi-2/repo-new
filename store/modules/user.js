// import Cookies from 'js-cookie'

export const state = () => ({
  user: null,
})

export const getters = {
  user(state) {
    return state.user
  },
}

export const actions = {
  async userlogin({ dispatch, commit }, user) {
    try {
      commit('setUSER', user)
    } catch (err) {
      console.log(err)
    }
  },

  setUSER({ commit }, user) {
    commit('setUSER', user)
  },
}

export const mutations = {
  setUSER(state, user) {
    state.user = user
  },
}
