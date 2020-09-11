<template>
  <div class="body">
    <div class="wrapper">
      <div class="title">Login</div>
      <!-- <form action="#"> -->
      <form>
        <div class="field">
          <input type="email" required v-model="email" />
          <label>Username</label>
        </div>
        <div class="field">
          <input type="password" required v-model="pass" />
          <label>Password</label>
        </div>
        <div class="content">
          <div class="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div class="field" @click.prevent="login">
          <input type="submit" value="Login" />
        </div>
        <div class="signup-link border border-dark" @click="signup">
          <a href="#">SignUp now</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { auth } from '../../plugins/firebaseConfig'
export default {
  data() {
    return {
      email: '',
      pass: '',
    }
  },
  methods: {
    async login() {
      let { user } = await auth.signInWithEmailAndPassword(
        this.email,
        this.pass
      )
      console.log('user', user)
    },
    async signup() {
      let { user } = await auth.createUserWithEmailAndPassword(
        this.email,
        this.pass
      )
      console.log('user', user)
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  background: #f5faf7;
}
.wrapper {
  margin: 40px 30px 60px 400px;
  width: 380px;
  background: rgb(111, 211, 206);
}
/* 1st div */
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: rgb(16, 97, 163);
  user-select: none;
  background: #99a1a8;
}
/* padding of wrapper */
.wrapper form {
  padding: 10px 30px 50px 30px;
}
/* between input fields */
.wrapper form .field {
  height: 50px;
  width: 100%;
  margin-top: 30px;
  position: relative;
}
/* input fields */
.wrapper form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 30px;
  transition: all 0.3s ease;
}
/* user and pass label */
.wrapper form .field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-size: 17px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
/* username and password */
form .field input:focus ~ label,
form .field input:valid ~ label {
  top: 0%;
  font-size: 16px;
  color: #228bb4;
  background: #fff;
  transform: translateY(-50%);
}
/* forgot password */
form .content {
  display: flex;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}
/* login button */
form .field input[type='submit'] {
  color: #fff;
  border: none;
  margin-top: -10px;
  font-size: 20px;
  background: rgb(16, 97, 163);
  transition: all 0.3s ease;
  border-radius: 30px;
}
/* active login button */
form .field input[type='submit']:active {
  transform: scale(0.95);
}
/* sigupnow */
form .signup-link {
  margin-top: 20px;
  text-align: center;
}
/* links */
form .pass-link a,
form .signup-link a {
  color: #4158d0;
}
/* under below links on hover*/
form .pass-link a:hover,
form .signup-link a:hover {
  text-decoration: underline;
}
</style>
