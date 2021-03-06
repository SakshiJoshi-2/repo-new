import { getUserFromCookie } from '../helper/index'

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    try {
      const user = getUserFromCookie(req)
      if (user) {
        const { data } = await this.$axios({
          method: 'POST',
          url: `${process.env.BASE_URL}/gettoken`,
          data: {
            uid: user,
          },
        })
        await commit('modules/user/setUSER', JSON.parse(data.Token))
      }
    } catch (error) {
      console.log(error)
    }
  },
}
