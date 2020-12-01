<template>
  <div>
    <div class="text-center">
      <button class="btn btn-sm btn-warning" @click="logout">Log Out</button>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('modules/user', ['user']),
  },
  methods: {
    logout() {
      if (this.user != null) {
        this.$axios({
          method: 'POST',
          url: process.env.AUTH,
          data: {
            auth: 'logout',
            acc_token: this.user.AccessToken,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(async (res) => {
          // console.log('Log out', res.data)
          await alert('User Is Log Out')

          this.$axios({
            method: 'post',
            url: `${process.env.BASE_URL}/deletetoken`,
            data: {
              uid: this.user.sub,
            },
          }).then((res) => {
            console.log(res.statusText)
            Cookies.remove('token')
            this.$store.commit('modules/user/setUSER', null)
            this.$router.push('/')
            console.log('user', this.user)
          })
        })
      } else {
        alert('No User Login')
        this.$router.go('/')
      }
    },
  },
}
</script>

<style scoped></style>
