import { getUserFromCookie } from '../helper/index'

export const actions = {
    async nuxtServerInit({ dispatch, commit }, { req }) {
        try {
            const user = getUserFromCookie(req)

            if (user) {
                console.log(user)
                const { data } = await this.$axios({
                    method: 'POST',
                    url: 'http://localhost:3000/api/gettoken',
                    data: {
                        uid: user,
                    },
                })
                await commit('modules/user/setUSER', JSON.parse(data.Token))
            }
        } catch (error) {
            console.log(error)
        }
    }
}