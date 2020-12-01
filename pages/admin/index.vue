<template>
  <div>
    <div class="row px-0 mx-0">
      <div
        class="col-sm-11 col-md-5 mx-auto border border-dark rounded m-5 pt-3 pb-3"
      >
        <h4 class="text-center">Create Role</h4>
        <hr class="mt-0" />
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Select Role</label>
          <select class="form-control" v-model="role">
            <!-- <option selected>Role......</option> -->
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="principal">Principal</option>
          </select>
        </div>
        <div class="form-group">
          <button class="btn btn-sm btn-success float-right" @click="createAcc">
            Create
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button @click="getuserss">Get user</button>
      </div>
    </div>
    <!-- {{ user.AccessToken }} -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  layout: 'users',
  data() {
    return {
      email: '',
      role: 'Role',
    }
  },
  computed: {
    ...mapGetters('modules/user', ['user']),
  },
  methods: {
    createAcc() {
      console.log(this.email)
      console.log(this.role)
      this.$axios({
        method: 'POST',
        url: process.env.ADMIN_AUTH,
        data: {
          pool_id: process.env.POOL_ID,
          adminauth: 'create_user',
          user: this.email,
          role: this.role,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log('create', JSON.parse(res.data))
        // this.listusers()
      })
    },
    getuserss() {
      this.$axios({
        method: 'POST',
        url: process.env.AUTH,
        data: {
          auth: 'getuser',
          acc_token: this.user.AccessToken,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log('get user', res.data)
        // this.listusers()
      })
    },
  },
  
}
</script>

<style scoped></style>
