import { getUserFromCookie } from '../helper/index'
export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req, redirect }) {
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
        if (data.name == 'StorageError') {
          console.log('__init__')
        } else {
          commit('modules/user/setUSER', JSON.parse(data.Token))
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
}
