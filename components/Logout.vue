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
            url: 'http://localhost:3000/api/deletetoken',
            data: {
              uid: this.user.sub,
            },
          }).then(async (res) => {
            console.log(res.statusText)
            await Cookies.remove('token')
            // await this.$router.push('/login')
          })
        })
      } else {
        alert('No User Login')
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style scoped></style>
