<template>
  <div>
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
       <MyForm
          :form="test1"
          :formPreviewData="zzz"
          :readOnly="true"
          v-on:getFormData="myinfo = { ...$event }"
        ></MyForm>
       <button type="button" class="btn btn-primary" @click="showstudent()">
          Profile
        </button>
      <pre>{{zzz}}</pre>
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
  layout: 'studentlayout',
  data() {
    return {
      
      test1: myprofile,
      myinfo:[],
      zzz:[],
    }},
     methods: {
         showstudent() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/showstudent',
        data: {
          PartitionKey1: 'ww',
       
        },
      }).then((result) => {
        console.log('res', result.data)
        this.zzz = result.data[0]
      })
    },
  },
    
  }
</script>

<style lang="scss" scoped>

</style>