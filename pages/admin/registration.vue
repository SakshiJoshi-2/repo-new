<template>
  <div class="">
    <h1 class="text-center">Registration Form</h1>
    <br />
    <MyForm :form="test" v-on:getFormData="myinfo = { ...$event }"></MyForm>

    <button class="btn btn-primary" @click="addrole()">Create</button>
  </div>
</template>

<script>
import { create_role } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
export default {
  layout: 'adminlayout',
  data() {
    return {
      test: create_role,
      myinfo: [],
      uid: uuidv4(),
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
     async createtable() {
      let res = await this.$axios.get('http://localhost:3000/api/createtable')
      console.log('res')
    },
    async addrole() {
      //  let res= await this.$axios.get('http://localhost:3000/api/addstudent')
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addrole',
        data: {
          PartitionKey: 'teacher',
          // RowKey: this.myinfo.RowKey,
          RowKey: this.uid,
          name: this.myinfo.name,
          dob: this.myinfo.dob,
          gender: this.myinfo.gender,
          ms: this.myinfo.ms,
          age: this.myinfo.age,
          contact1: this.myinfo.contact1,
          contact2: this.myinfo.contact2,
          email: this.myinfo.email,
          qualification: this.myinfo.qualification,
          work_experience: this.myinfo.work_experience,
          designation: this.myinfo.designation,
          department: this.myinfo.department,
          address: this.myinfo.address,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    async updaterole() {
      //  let res= await this.$axios.get('http://localhost:3000/api/addstudent')
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/updaterole',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
          name: this.myinfo.name,
          dob: this.myinfo.dob,
          gender: this.myinfo.gender,
          ms: this.myinfo.ms,
          age: this.myinfo.age,
          contact1: this.myinfo.contact1,
          contact2: this.myinfo.contact2,
          email: this.myinfo.email,
          qualification: this.myinfo.qualification,
          work_experience: this.myinfo.work_experience,
          designation: this.myinfo.designation,
          department: this.myinfo.department,
          address: this.myinfo.address,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
  },
  async deleterole() {
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/deleterole',
      data: {
        PartitionKey: this.myinfo.PartitionKey,
        RowKey: this.myinfo.RowKey,
      },
    }).then((result) => {
      console.log('res', result)
    })
  },
}
</script>

<style scoped></style>
