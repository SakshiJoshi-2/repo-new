<template>
<div class="row">
    <div class="col-12">
    <div class="col-12">
      <h1 class="heading-center">
        <i
          class="fa fa-user-circle-o"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Admisssion Form
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />

      <MyForm :form="test" v-on:getFormData="myinfo = { ...$event }"></MyForm>

      <button class="btn btn-success" @click="addstudent()">Add Student</button>
    </div>
  </div></div>
</template>
<script>
import { myprofile } from '../../Config/form.js'

import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export default {
  layout: 'users',
  data() {
    return {
      test: myprofile,
      myinfo: [],
      uid: uuidv4(),
    }
  },

  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async addstudent() {
      await this.submitvalue(true)
      await this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addstudent`,
        data: {
          PartitionKey: 'student',
          RowKey: this.uid,
          name: this.myinfo.name,
          std: this.myinfo.std,
          section: this.myinfo.section,
          class_section: this.myinfo.std + this.myinfo.section,
          dob: this.myinfo.dob,
          age: this.myinfo.age,
          bloodGroup: this.myinfo.bloodGroup,
          contact1: this.myinfo.contact1,
          contact2: this.myinfo.contact2,
          email1: this.myinfo.email1,
          email2: this.myinfo.email2,
          address: this.myinfo.address,
          f_name: this.myinfo.f_name,
          f_contact: this.myinfo.f_contact,
          f_email: this.myinfo.f_email,
          m_name: this.myinfo.m_name,
          m_contact: this.myinfo.m_contact,
          m_email: this.myinfo.m_email,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },

    updatestudent() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/updatestudent`,
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
          name: this.myinfo.name,
          class: this.myinfo.class,
          dob: this.myinfo.dob,
          age: this.myinfo.age,
          bloodGroup: this.myinfo.bloodGroup,
          contact1: this.myinfo.contact1,
          contact2: this.myinfo.contact2,
          email1: this.myinfo.email1,
          email2: this.myinfo.email2,
          address: this.myinfo.address,
          f_name: this.myinfo.f_name,
          f_contact: this.myinfo.f_contact,
          f_email: this.myinfo.f_email,
          m_name: this.myinfo.m_name,
          m_contact: this.myinfo.m_contact,
          m_email: this.myinfo.m_email,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    async deletestudent() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/deletestudent`,
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
  },
}
</script>
<style scoped></style>
