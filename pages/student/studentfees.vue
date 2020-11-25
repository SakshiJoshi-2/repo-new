<template>
    <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h1 class="heading-center">
        <i
          class="fa fa-rupee"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Fees
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />
      <div id="form1">
                      <label for="rowkey">:</label>
            <input type="text" id="rowkey" v-model="rowkey" placeholder="Enter Rowkey" />

          <button
          type="button"
          class="btn btn-primary"
          @click=" showfeestostudent()">    Fees Info
        </button>
        </div>
       
 
         <MyForm
            :form="test3"
            :formPreviewData="xyz"
            :readOnly="true"
            v-on:getFormData="feesinfo = { ...$event }"
          ></MyForm></div>
          
      {{xyz}}
      
      
      
      
      </div>
     
</template>

<script>
import { fees } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
    export default {
          layout: 'studentlayout',
  data() {
    return {
    
       rowkey:'',
      test3: fees,
      feesinfo: [],
      xyz: [],
    }
  },
    methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveFees() {
      await this.submitvalue(true)
      if ((await this.feesinfo) != '') {
        console.log(this.feesinfo)
      } else {
        console.log(this.feesinfo)
      }
    },
    showfeestostudent() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/showfeestostudent',
        data: {
          PartitionKey: 'student',
          RowKey: this.rowkey
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xyz = result.data
         
      })
    },
//       hide(){
//         let hide1=document.getElementById("form1");
//                hide1.style.display="none";
//             //       let hide2=document.getElementById("form2");
//             //    hide2.style.display="block";
               
//   }
  },
//   created: function form(){
//         let hide2=document.getElementById("form2");
//                hide2.style.display="none";
//   }

        
    }
</script>

<style scoped>

</style>