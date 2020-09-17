import { vuexfireMutations } from 'vuexfire'
import { getUserFromCookie } from '../helper/index'

export const mutations = {
  ...vuexfireMutations,
}

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    try {
      const user = getUserFromCookie(req)
      if (user) {
        await dispatch('modules/user/setUSER', {
          name: user.name,
          email: user.email,
          avatar: user.picture,
          uid: user.user_id,
          phone: user.phoneNumber,
          isInstructor: user.Instructor,
          isStudent: user.Student,
          isAdmin: user.Admin,
        })
      
      }
    } catch (error) {
      console.log(error)
    }
  },
}
