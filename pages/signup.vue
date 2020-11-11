<template>
  <!-- <div class="container">
    <div class="wrapper">
      <div class="title">Sign up</div>

      <form>
        <MyForm :form="test" v-on:getFormData="myinfo = { ...$event }"></MyForm>

        <div class="text-center">
          <button type="button" class="btn btn-primary btn-lg">Sign up</button>
        </div>
      </form>
    </div>
  </div> -->
  <div class="row mx-0 px-0">
    <div
      class="col-4 mx-auto border border-dark mt-5 rounded py-2"
      v-if="!verification"
    >
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" :class="c.in" id="email" v-model="user" />
      </div>
      <div class="form-group">
        <label for="pass">Password</label>
        <input type="text" :class="c.in" id="pass" v-model="pass" />
      </div>
      <button class="btn btn-info" @click="signup">Sign up</button>
      <span class="mx-auto">
        <a href="/login_form" class="float-right">Already have account?</a>
      </span>
    </div>
    <div
      class="col-4 mx-auto border border-dark mt-5 rounded py-2"
      v-if="verification"
    >
      <div class="form-group">
        <!-- <label for="confirm_code">Confirmation Code</label> -->
        <p>Verification Code is send on your email "{{ user }}"</p>
        <input
          type="text"
          :class="c.in"
          id="confirm_code"
          v-model="c_code"
          placeholder="__ __ __ __ __ __"
        />
      </div>
      <div class="text-center">
        <button class="btn btn-info" @click="confirm">Verify</button>
      </div>
    </div>
  </div>
</template>
 

<script>
// import { signup_form } from '~/helper/formhh'
// import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
// import axios from 'axios'
export default {
  data() {
    return {
      // test: signup_form,
      // myinfo: [],
      c: {
        in: 'form-control',
      },
      verification: false,
      cid: '2op7hmmgg2ve3t7vqag7mfa03r',
      user: '',
      pass: '',
      c_code: '',
      school_name: 'School Name',
    }
  },
  methods: {
    signup() {
      // console.log(this.user, this.pass)
      this.$axios({
        method: 'POST',
        url: process.env.AUTH,
        data: {
          auth: 'signup',
          c_id: this.cid,
          user: this.user,
          pass: this.pass,
          school_name: this.school_name,
        },
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log('sign up response', res.data)
        this.verification = true
      })
    },
    confirm() {
      // console.log('user conform')
      this.$axios({
        method: 'POST',
        url: process.env.AUTH,
        data: {
          auth: 'confirmsignup',
          c_id: this.cid,
          user: this.user,
          c_code: this.c_code,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log('confirm', res.data)
        this.$router.push('/login_form')
      })
    },
  },
}
</script>

<style  scoped>
.wrapper {
  margin: 40px 30px 40px 350px;
  width: 380px;
  background: rgb(111, 211, 206);
  height: 590px;
}
form {
  margin-top: 30px;
}
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: rgb(16, 97, 163);
  user-select: none;
  background: #99a1a8;
}
.wrapper form .col-sm-8 .form-control {
  border-radius: 300px;
}
.wrapper form .text-center button[type='button'] {
  margin-top: 10px;
  width: 50%;
  border-radius: 30px;
}
</style>