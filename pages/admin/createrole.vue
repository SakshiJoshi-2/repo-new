<template>
<div class="container">
 <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
   <h1>create role</h1><br/>
   <MyForm :form="test" v-on:getFormData="notification = { ...$event }"></MyForm>
      
        <button button type="button" class="btn btn-primary">Create</button>
     
  </div>
  </div>
</template>


<script>
import {create_role} from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'adminlayout',
  data(){
    return{
      test:create_role,
    }}
} 
</script>

  <style scoped>
 

.container1{
  
  box-shadow: 10px 10px 5px lightgrey;
  padding:40px;
    text-align: center;

}
  </style>
