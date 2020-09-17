import { auth } from '../../plugins/firebaseConfig'
import Cookies from 'js-cookie'

export const state = () => ({
  //   uid: null,
  user: null,
  profile: null
})

export const getters = {
  
  user(state) {
    return state.user
  },

  profile(state) {
    return state.profile
  }

  // isAuthenticated(state) {
  //   return !!state.user
  // }
}

export const actions = {
  async userlogin({ dispatch }, user) {
    try {
      const token = await auth.currentUser.getIdToken(true)
      const userInfo = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        uid: user.uid,
        phone: user.phoneNumber,
        isInstructor: user.Instructor,
        isStudent: user.Student,
        isAdmin: user.Admin
      }
      //   let expiry = Date.now() + 1000 * 60 * 60 * 24 * 1

      Cookies.set('access_token', token)

      //   Cookies.set('expirationDate', expiry)
      await dispatch('setUSER', userInfo)
     
    } catch (err) {
      console.log(err)
    }
  },

  async logout({ commit }, payload) {
    try {
      if (payload === 'User Deleted') {
        Cookies.remove('access_token')
        Cookies.remove('expirationDate')
        commit('setUSER', null)
        commit('saveUID', null)

      } else {
        await auth.signOut()
        Cookies.remove('access_token')
        Cookies.remove('expirationDate')
        commit('setUSER', null)
        commit('saveUID', null)

      }
    } catch (error) {
      console.log(error)
    }
  },

  setUSER({ commit }, user) {
    commit('setUSER', user)
  },

  setProfile({ commit }, profile) {
    commit('setProfile', profile)
  }
  
}

export const mutations = {
  //   saveUID(state, uid) {
  //     state.uid = uid
  //   },
  setUSER(state, user) {
    state.user = user
  },
  setProfile(state, profile) {
    state.profile = profile
  }

}
