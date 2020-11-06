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
    <button class="btn btn-primary" style="padding:5px 5px; font-size: 10px" @click="showstudent()">
      Details </button>
       <button class="btn btn-primary" style="padding:5px 5px; font-size: 10px" @click="saveDataIndatabase()">
      Date </button>
      <button class="btn btn-primary" style="padding:5px 5px; font-size: 10px" @click="attendance='Present'">
      at </button>
    
    <div class="container">
  <h3 class="text-center">1st</h3>
          <!-- <div class="student"
          v-for="(student,i) in card" :key="i" :class="student.class"> -->
<div class="card-columns">
 <div class="card" style="width: 15em; " v-for="(item, i) in abc" :key="i" >
  
  <img class="card-img-top" src="\passport_gate.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">{{ abc[i]. name }}</p>
    <button class=" btn btn-success" style="padding:5px 5px; font-size: 10px" @click="attendance='Present'">
      Present </button>
      
      <button class="btn btn-danger" style="padding:5px 5px; font-size: 10px" @click="attendance='Absent'">
      Absent </button>
      <button class="btn btn-primary" style="padding:5px 5px; font-size: 10px">
      Details </button>
  </div></div>
  {{date}}{{attendance}}
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
    data(){
      return{
        abc:[],
     attendance:[],
        today : '',
         date : ''
      
    }},
    
    methods: {
       ...mapMutations('modules/context', ['submitvalue']),
    async saveDataIndatabase() {
      await this.submitvalue(true)
      if ((await this.myinfo) != '') {
        console.log(this.myinfo)
      } else {
        console.log(this.myinfo)
      }
       
        this.today = new Date();
             this.date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();

    },
       async showstudent() {
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/showstudent',
        data: {
          // PartitionKey: 'student',
         std: 'X',
          
        },
      }).then((result) => {
        console.log('res', result.data)
        this.abc =result.data
       
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