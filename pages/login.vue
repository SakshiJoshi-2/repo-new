<template>
  <div>
    <div class="row mx-0">
      <div class="col-4 mx-auto border border-dark rounded mt-5">
        <div class="row mx-0">
          <div class="col mx-auto py-2">
            <div class="form-group" v-if="show.username">
              <label for="email">Email</label>
              <input type="email" :class="c.in" id="email" v-model="username" />
            </div>
            <div class="form-group" v-if="show.c_code">
              <label for="c-code">Confirm Code</label>
              <input type="text" :class="c.in" id="c-code" v-model="c_code" />
            </div>
            <div class="form-group" v-if="show.pass">
              <label for="pass">Password</label>
              <input type="text" :class="c.in" id="pass" v-model="pass" />
            </div>
            <div class="form-group" v-if="show.newpass">
              <label for="pass">New Password</label>
              <input type="text" :class="c.in" id="pass" v-model="newpass" />
              <small
                ><strong>Note : </strong>In Password field use your Temporary
                Password <strong>AND</strong> In New password field use your new
                Password
              </small>
            </div>
          </div>
        </div>
        <div class="row mx-0">
          <div class="col mx-auto py-2 px-0">
            <div class="text-center">
              <button
                class="btn btn-info mx-auto"
                v-if="show.login"
                @click="login"
              >
                Log In
              </button>
              <button
                class="btn btn-success"
                v-if="show.forgetPassButton"
                @click="forgotpass"
              >
                Send Password Reset Email
              </button>
              <button
                class="btn btn-success"
                v-if="show.saveNewPassword"
                @click="confirmforgotpassword"
              >
                Save New password
              </button>
              <button
                class="btn btn-success"
                v-if="show.sendVerificationCode"
                @click="resendcode"
              >
                Send Verification Code
              </button>
              <button
                class="btn btn-success"
                v-if="show.verifyAccount"
                @click="confirm"
              >
                Verify Account
              </button>
            </div>

            <div class="row mx-0 px-0">
              <div class="col text-left p-0">
                <small class="pointer" @click="showforgotpass"
                  >Forget Password</small
                >
              </div>
              <div class="col text-center p-0">
                <small class="pointer" @click="showResendCode"
                  >Verify Account</small
                >
              </div>
              <div class="col text-right p-0">
                <small>
                  <a href="/signup">Create Account</a>
                </small>
              </div>
              <!-- tempPasswordChange -->
            </div>
            <hr />
            <div class="text-center p-0">
              <button
                v-if="show.tempPasswordChangeButton"
                class="btn btn-sm btn-info m-0"
                @click="tempPasswordChange"
              >
                Temporary Password Change And LogIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row mx-0">
      <div class="col-7 border border-dark mx-auto">
        {{ user }}
      </div>
    </div> -->
  </div>
</template>

<script>
//dipakbisen2711@gmail.com
import Cookies from 'js-cookie'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      c: {
        in: 'form-control',
      },
      show: {
        username: true,
        pass: true,
        newpass: false,
        c_code: false,
        login: true,
        forgetPassButton: false,
        saveNewPassword: false,
        sendVerificationCode: false,
        verifyAccount: false,
        tempPasswordChangeButton: true,
      },
      cid: '2op7hmmgg2ve3t7vqag7mfa03r',
      username: '',
      pass: '',
      newpass: '',
      c_code: '',
    }
  },
  computed: {
    ...mapGetters('modules/user', ['user']),
  },

  methods: {
    ...mapActions('modules/user', ['userlogin']),
    login() {
      this.$axios({
        method: 'POST',
        url: process.env.AUTH,
        data: {
          auth: 'login',
          c_id: this.cid,
          user: this.username,
          pass: this.pass,
          newpass: this.newpass,
          pool_id: process.env.POOL_ID,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          console.log('res', res.data)
          let token = res.data
          if (res.data['custom:role'] == 'admin') {
            if (token) {
              this.$axios({
                method: 'post',
                url: `${process.env.BASE_URL}/create_token`,
                data: {
                  tokens: token,
                  uid: token.sub,
                },
              }).then((res) => {
                // console.log(res.statusText)
                Cookies.set('token', token.sub)
                // this.userlogin({ ...token })
                window.location.reload()
              })
            } else {
              alert('Error')
            }
          } else if (res.data['custom:role'] == 'teacher') {
            if (token) {
              this.$axios({
                method: 'post',
                url: `${process.env.BASE_URL}/create_token`,
                data: {
                  tokens: token,
                  uid: token.sub,
                },
              }).then(async (res) => {
                // console.log(res.statusText)
                await Cookies.set('token', token.sub)
                // await this.$router.push('/teacher')
                window.location.reload()
              })
            } else {
              alert('Error')
            }
          } else if (res.data['custom:role'] == 'student') {
            if (token) {
              this.$axios({
                method: 'post',
                url: `${process.env.BASE_URL}/create_token`,
                data: {
                  tokens: token,
                  uid: token.sub,
                },
              }).then(async (res) => {
                // console.log(res.statusText)
                await Cookies.set('token', token.sub)
                // await this.$router.push('/student')
                window.location.reload()
              })
            } else {
              alert('Error')
            }
          } else if (res.data['custom:role'] == 'principal') {
            if (token) {
              this.$axios({
                method: 'post',
                url: `${process.env.BASE_URL}/create_token`,
                data: {
                  tokens: token,
                  uid: token.sub,
                },
              }).then(async (res) => {
                // console.log(res.statusText)
                await Cookies.set('token', token.sub)
                // await this.$router.push('/student')
                window.location.reload()
              })
            } else {
              alert('Error')
            }
          } else if (res.data['custom:role'] == 'systemadmin') {
            if (token) {
              this.$axios({
                method: 'post',
                url: `${process.env.BASE_URL}/create_token`,
                data: {
                  tokens: token,
                  uid: token.sub,
                },
              }).then(async (res) => {
                await Cookies.set('token', token.sub)
                window.location.reload()
              })
            } else {
              alert('Error')
            }
          } else {
            if (res.data.errorType == 'NotAuthorizedException') {
              alert('ncorrect username or password.')
            } else if (res.data.errorType == 'InvalidParameterException') {
              alert('Missing required parameter Username or Password')
            } else {
              alert('User Not Found')
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    showforgotpass() {
      this.show = {
        username: true,
        pass: false,
        newpass: false,
        c_code: false,
        login: false,
        forgetPassButton: true,
        saveNewPassword: false,
        sendVerificationCode: false,
        verifyAccount: false,
      }
    },
    forgotpass() {
      this.show = {
        username: true,
        pass: true,
        newpass: true,
        c_code: true,
        login: false,
        forgetPassButton: false,
        saveNewPassword: true,
        sendVerificationCode: false,
        verifyAccount: false,
      }
      this.$axios({
        method: 'POST',
        url: process.env.AUTH,
        data: {
          auth: 'forgotpassword',
          c_id: this.cid,
          user: this.username,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log('resend confirm', res.data)
      })
    },

    async confirmforgotpassword() {
      this.$axios({
        method: 'POST',
        url: process.env.AUTH,
        data: {
          auth: 'confirmforgotpassword',
          c_id: this.cid,
          user: this.username,
          pass: this.pass,
          c_code: this.c_code,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async (res) => {
        console.log('resend confirm', res.data)
        await alert('your password is updated')
        this.show = await {
          username: true,
          pass: true,
          newpass: fasle,
          c_code: false,
          login: true,
          forgetPassButton: false,
          saveNewPassword: false,
        }
        await window.location.reload()
      })
      // alert('Password is changed')
      // window.location.reload()
    },

    showResendCode() {
      this.show = {
        username: true,
        pass: false,
        newpass: false,
        c_code: false,
        login: false,
        forgetPassButton: false,
        saveNewPassword: false,
        sendVerificationCode: true,
        verifyAccount: false,
      }
    },
    resendcode() {
      this.show = {
        username: true,
        pass: false,
        newpass: false,
        c_code: true,
        login: false,
        forgetPassButton: false,
        saveNewPassword: false,
        sendVerificationCode: false,
        verifyAccount: true,
      }
      this.$axios({
        method: 'POST',
        url: 'https://l8yeijc0pc.execute-api.ap-south-1.amazonaws.com/v1/auth',
        data: {
          auth: 'resendcode',
          c_id: 'this.cid',
          user: 'this.username',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log('resend confirm', res.data)
      })
    },

    confirm() {
      // alert('Account Verified')
      // window.location.reload()
      this.$axios({
        method: 'POST',
        url: process.env.AUTH,
        data: {
          auth: 'confirmsignup',
          c_id: this.cid,
          user: this.username,
          c_code: this.c_code,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log('confirm', res.data)
      })
    },

    tempPasswordChange() {
      this.show = {
        username: true,
        pass: true,
        newpass: true,
        c_code: false,
        login: true,
        forgetPassButton: false,
        saveNewPassword: false,
        sendVerificationCode: false,
        verifyAccount: false,
      }
    },
  },
}
</script>

<style scoped></style>
