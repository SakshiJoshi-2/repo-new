<template>
   <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px" >
      <h2 class="heading-center">Attendence <i class="fa fa-user-circle-o" aria-hidden="true"></i></h2>
          <hr style="height:2px;border-width:0;background-color:lightgrey" />

    <div class="container p-2 my-2 border">
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Class</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">1st</a>
            <a class="dropdown-item" href="#">2nd</a>
            <a class="dropdown-item" href="#">3rd</a>
          </div>
        </div>
    </div>
    <button class="btn btn-primary" style="padding:5px 5px; font-size: 10px" @click="showstudent">
      Details </button>
    
    <div class="container">
  <h3 class="text-center">1st</h3>
          <!-- <div class="student"
          v-for="(student,i) in card" :key="i" :class="student.class"> -->
 <div class="card" style="width: 10rem; " >
  
  <img class="card-img-top" src="\passport_gate.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Priyanshi Jain</p>
    <button class=" btn btn-success" style="padding:5px 5px; font-size: 10px">
      Present </button>
      <button class="btn btn-danger" style="padding:5px 5px; font-size: 10px">
      Absent </button>
      <button class="btn btn-primary" style="padding:5px 5px; font-size: 10px">
      Details </button>
  </div>
</div>
          
</div>
    </div>
   </div>
   <!-- </div> -->
</template>

<script>
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
    layout: 'teacherlayout',
    methods:{
       ...mapMutations('modules/context', ['submitvalue']),
    async saveDataIndatabase() {
      await this.submitvalue(true)
      if ((await this.myinfo) != '') {
        console.log(this.myinfo)
      } else {
        console.log(this.myinfo)
      }
         

    },
       async showstudent() {
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/showstudent',
        data: {
          PartitionKey: 'student',
          
        },
      }).then((result) => {
        console.log('res', result.data)
        this.abc = result.data
       
      })
    },
    
    }

}
</script>

<style type="text/css">
.container1{
  
  box-shadow: 10px 10px 5px lightgrey;
  padding:40px;
    text-align: center;

}


</style>