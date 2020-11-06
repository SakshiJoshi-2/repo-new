<template>
    <div class="container" >
        <div class = "wrapper">
        <div class="title">Sign up</div>
    
     <form>
    <MyForm :form="test" v-on:getFormData="myinfo = { ...$event }"></MyForm>
   

  <div class="text-center">
        <button type="button" class="btn btn-primary btn-lg">Sign up</button>
      </div>
     
</form>
</div>
    </div>
</template>

<script>
import { signup_form } from '~/helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
    export default {
        data() {
    return {
      test: signup_form,
      myinfo: [],
    }
        }
    }
</script>

<style  scoped>

.wrapper {
  margin: 40px 30px 40px 350px;
  width: 380px;
  background: rgb(111, 211, 206);
  height : 590px;
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
.wrapper form .col-sm-8 .form-control{
  border-radius: 300px;
} 
.wrapper form .text-center button[type=button] {
  margin-top: 10px;
  width : 50%;
  border-radius: 30px;
 }
</style>