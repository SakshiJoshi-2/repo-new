<template>
  <div class="row1">
    <div class="col-12" style="margin-left:8% ;margin-right:8px ">
      <h2 class="heading-center">
        <i class="fa fa-user-circle-o"></i>{{ data.name }}
      </h2>
  
      <!-- <MyForm :form="test1" :formPreviewData="data" :readOnly="true"></MyForm> -->
    
      <div class="row">
        <div class="col-6">    <hr />
            Standard : {{ data.std }}<br />
        Section : {{ data.section }}<br />
        D.O.B : {{ data.dob }}<br />
        Age : {{ data.age }}<br />
        Blood Group : {{ data.bloodGroup }}<br />
        Address: {{data.address}}<br /><br /></div>
         <div class="col-6">
           <img src="/schoolprofile.jfif" alt="schoolboy" width="200" >
         </div>
      </div>
      <h2>Contact Information:</h2>
        <hr />
      <div class="row">
        
       
        <div class="col-5">
          Contact Number : {{ data.contact1 }} </div>
          <div class="col-5">Alternate Contact Number :
          {{ data.contact2 }}<br>
        </div></div>
              <div class="row">
        <div class="col-5">
          Email Address : {{ data.email1 }} </div>
          <div class="col-5">Alternate Email Address :
          {{ data.email2 }}<br><br>
        </div>
      </div>
       <h2>Parents Information:</h2>
        <hr />
      
      <div class="row">
   
           <div class="col-4"> Father's Name : {{ data.f_name }} </div>
        <div class="col-3"> Contact No:{{ data.f_contact  }}</div>    
       <div class="col-4"> Email Address:{{ data.f_email }}<br></div></div>
         <div class="row">
       <div class="col-4"> Mother's Name : {{ data.f_name }}</div>
        <div class="col-3">  Contact No : {{ data.m_contact }}</div>
       <div class="col-4"> Email Address : {{ data.m_email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { myprofile } from '../../Config/form.js'

import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
      test1: myprofile,
      data: [],
    }
  },
  created: function studentprofile() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/studentprofile`,
      data: {
        RowKey: 'b54ec7e7-87b6-4e85-a35c-5db770b7e8fe',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data[0]
    })
  },
}
</script>

<style  scoped>
.row1{
  font-size:20px;
  border: 3px solid  #25274D;
 padding:5%;
}
h2{
  color: #25274D
}
img {
  border-radius: 50%;
 border: 3px solid  #25274D;
 
}
</style>

