<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h1 class="heading-center">
        <i
          class="fa fa-user-circle-o"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        My Profile
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />

      <!-- <MyForm :form="test" v-on:getFormData="myinfo = { ...$event }"></MyForm> -->
      <MyForm
        :form="test1"
        :formPreviewData="pqr"
        :readOnly="true"
        v-on:getFormData="myinfo = { ...$event }"
      >
      </MyForm>

      <!-- <button class="btn btn-primary" @click="addDetails()">
        Add Details</button>
      <pre> {{ pqr }}</pre>
      <button class="btn btn-primary" @click="updateDetails()">
        Update Details
      </button>
      <button class="btn btn-primary" @click="deleteDetails()">
        Delete Details
      </button> -->
      <!-- <button class="btn btn-primary" @click="readtDetails()">
        Read Details
      </button> -->
    </div>
  </div>
</template>
<script>
import { teacherprofile } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
  layout: 'users',
  data() {
    return {
      test: teacherprofile,
      test1: teacherprofile,
      myinfo: [],
      pqr: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveDataIndatabase() {
      await this.submitvalue(true)
      if ((await this.myinfo) != '') {
        console.log(this.myinfo)
      } else {
        console.log(this.myinfo)
      }
    },

    //   async addDetails() {
    //     await this.submitvalue(true)
    //     await this.$axios({
    //       method: 'post',
    //       url: `${process.env.BASE_URL}/addDetails`,
    //       data: {
    //         PartitionKey: this.myinfo.PartitionKey,
    //         RowKey: this.myinfo.RowKey,
    //         teachername: this.myinfo.teachername,
    //         teacheremail: this.myinfo.teacheremail,
    //         teacheraddress: this.myinfo.teacheraddress,
    //         teacherdepartment: this.myinfo.teacherdepartment,
    //         teachernumber: this.myinfo.teachernumber,
    //         teacherDOB: this.myinfo.teacherDOB,
    //         teacherExper: this.myinfo.teacherExper,
    //       },
    //     }).then((result) => {
    //       console.log('res', result)
    //     })
    //   },

    //   updateDetails() {
    //     this.$axios({
    //       method: 'post',
    //       url: `${process.env.BASE_URL}/updateDetails`,
    //       data: {
    //         PartitionKey: this.myinfo.PartitionKey,
    //         RowKey: this.myinfo.RowKey,
    //         teachername: this.myinfo.teachername,
    //         teacheremail: this.myinfo.teacheremail,
    //         teacheraddress: this.myinfo.teacheraddress,
    //         teacherdepartment: this.myinfo.teacherdepartment,
    //         teachernumber: this.myinfo.teachernumber,
    //         teacherDOB: this.myinfo.teacherDOB,
    //         teacherExper: this.myinfo.teacherExper,
    //       },
    //     }).then((result) => {
    //       console.log('res', result)
    //     })
    //   },

    // deleteDetails() {
    //   this.$axios({
    //     method: 'post',
    //     url: `${process.env.BASE_URL}/deleteDetails`,
    //     data: {
    //       PartitionKey: this.myinfo.PartitionKey,
    //       RowKey: this.myinfo.RowKey,
    //     },
    //   }).then((result) => {
    //     console.log('res', result)
    //   })
    // },
  },
  created: function readtDetails() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/readtDetails`,
      data: {
        PartitionKey: 'teacher',
        RowKey: '2',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.pqr = result.data[0]
    })
  },
}
</script>
<style type="text/css" scoped>
#form {
  margin-block: 20px;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
}
</style>
