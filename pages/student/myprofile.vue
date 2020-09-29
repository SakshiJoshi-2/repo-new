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
      <!-- <div id="form">
      <form name="myprofile" >
       

        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="name">Name</label>
            <input class="form-control" type="text" id="name"  v-model="name" placeholder=" Enter Name" />
          </div>
          <div class="col-sm-3" style="border:1px solid lightgrey ;padding:10px">
            <label for="class">Class</label>
            <input class="form-control" type="text" id="class" v-model="myClass"  placeholder=" Enter Class"/>
          </div>
          <div class="col-sm-3" style="border:1px solid lightgrey ;padding:10px">
            <label for="section">Section</label>
            <input class="form-control" type="text" id="section" v-model="section" placeholder=" Enter Section"/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="dob">D.O.B</label>
            <input class="form-control" type="text" id="dob" v-model="dob" placeholder="Enter date of birth"/>
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="age">Age</label>
            <input class="form-control" type="number" id="age" v-model="age" placeholder="Enter Age" />
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="blood_group">Blood Group</label>
            <input class="form-control" type="text" id="blood_group" placeholder="Enter blood group" v-model="bloodGroup"/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="contact1">Contact Numbher</label>
            <input class="form-control" type="number" id="contact1" v-model="contact1" placeholder="Enter Contact Number" />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="contact2">Alternate Contact Number</label>
            <input class="form-control" type="text" id="contact2" v-model="contact2"  placeholder="Enter Alternate Contact Number"/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="email1">Email address</label>
            <input class="form-control" type="text" id="email1" v-model="email1" placeholder="Enter Email Address"/>
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="email2">Alternate Email</label>
            <input class="form-control" type="email" id="email2" v-model="email2" placeholder="Enter Alternate Email Address" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12" style="border:1px solid lightgrey ;padding:10px">
            <label for="address">Address</label>
            <input class="form-control" type="text" id="address" v-model="address" placeholder="Enter Address"/>
          </div>
        </div>
        <br />
        <h3>Parents Information:</h3>
        <hr style="height:4px;border-width:0;background-color:lightgrey" />
        <div class="row">
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="f_name">Father's Name</label>
            <input class="form-control" type="text" id="f_name" v-model="f_name" placeholder="Enter Father's Name"/>
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="f_contact">Contact Number</label>
            <input class="form-control" type="number" id="f_contact" v-model="f_contact" placeholder="Enter Father's contact No"/>
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="f_email">Email address</label>
            <input class="form-control" type="email" id="f_email" v-model="f_email" placeholder="Enter Email Address" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="m_name">Mother's Name</label>
            <input class="form-control" type="text" id="m_name" v-model="m_name"  placeholder="Enter Mother's name"/>
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="m_contact">Contact Number</label>
            <input class="form-control" type="number" id="m_contact" v-model="m_contact" placeholder="Enter Mother's Contact Number" />
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="m_email">Email address</label>
            <input class="form-control" type="email" id="m_email" v-model="m_email" placeholder="Enter Email Address" />
          </div>
        </div>
      </form> -->
      <!-- <form-builder :config="formConfig"></form-builder> -->
      <MyForm :form="test" v-on:getFormData="myinfo = { ...$event }"></MyForm>

      <button @click="saveDataIndatabase">Submit</button>
      <button type="button" class="btn btn-primary" @click="addstudent()">
        Add Student
      </button>
      {{ myinfo }}
    </div>
  </div>
</template>
<script>
import { myprofile } from '../../Config/form.js'

import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'studentlayout',

  //   data() {
  // return {
  //   name: '',
  //   myClass:'',
  //   section:'',
  //   dob:'',
  //   contact1:'',
  //   contact2:'',
  //   email1:'',
  //   email2:'',
  //   bloodGroup:'',
  //   address:'',
  //   age:' ',
  //   f_name:'',
  //   f_contact:'',
  //   f_email:'',
  //   m_name:'',
  //   m_contact:'',
  //   m_email:' ',

  // },

  data() {
    return {
      //  formdata: '',
      // sub: false,
      test: myprofile,
      myinfo: [],
    }
  },
  computed: {
    // ...mapState('modules/context', ['test2']),
    // ...mapGetters('modules/context', ['test2']),
    // asdf() {
    //   this.formdata = this.test2
    //   return this.test2
    //   // console.log('form data', this.test2)
    // },
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
    async addstudent() {
      //  let res= await this.$axios.get('http://localhost:3000/api/addstudent')
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addstudent',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
          name:this.myinfo.name,
          class:this.myinfo.class,
          dob:this.myinfo.dob,
          age:this.myinfo.age,
          bloodGroup:this.myinfo.bloodGroup,
          contact1:this.myinfo.contact1,
          contact2:this.myinfo.contact2,
          email1:this.myinfo.email1,
          email2:this.myinfo.email2,
          address:this.myinfo.address,
          f_name:this.myinfo.f_name,
          f_contact:this.myinfo.f_contact,
          f_email:this.myinfo.f_email,
          m_name:this.myinfo.m_name,
          m_contact:this.myinfo.m_contact,
          m_email:this.myinfo.m_email,

        },
      }).then((result) => {
        console.log('res', result)
      })
    },
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
