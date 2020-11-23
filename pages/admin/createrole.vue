<template>
<div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 220px">
    <div id='table'>
      <table
        id="example"
        class="table border border-dark bg-white responsive sortable"
      >
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Designation </th>
            <th>Department</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in data" :key="i++">
            <td>{{ i++ }}</td>
            <td>{{ item.Name }}</td>
            <td>{{ item.Designation }}</td>
            <td>{{ item.Department}}</td>
            <td>
              <button type="button" class="btn" @click.prevent="data(item.id)">
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table></div>
      <div class='form'>
      <h1>Create role </h1>
         <MyForm
        :form="test"
        :formPreviewData="data"
        :readOnly="readOnly"
        v-on:getFormData="myinfo = { ...$event }"
      ></MyForm> 
     </div>
      {{data}}
    
      
    </div>
</template>

<script>
import { create_role } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
    export default {
     layout:'adminlayout',
    
  data(){
    return{
      test:create_role,
        myinfo: [],
        uid: uuidv4(),
        data:[],
             readOnly:false,

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
    },
  },
  created(){
   
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/showcandidate',
      data: {
        PartitionKey: 'candidate',
        RowKey: this.myinfo.RowKey,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data

    })
  },
  }
        
    
</script>

<style lang="scss" scoped>


</style>
