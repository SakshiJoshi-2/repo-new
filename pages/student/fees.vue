<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 220px"
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

     
      
          <MyForm
          :form="form1"
          :formPreviewData="data"
          :readOnly="true"
                 ></MyForm>
        <MyForm
          :form="form2"
          v-on:getFormData="paymentinfo = { ...$event }"
        ></MyForm> 
        
     
        <button type="button" class="btn btn-primary" @click="addpayment()">
          Pay installement
        </button>
      </div>
    </div>
  
</template>

<script>
import { fees, installement } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'studentlayout',
  data() {
    return {
      // myfees: fees,
     form2: installement,
      form1: fees,
      feesinfo:[],
      paymentinfo: [],
      data: [],
  
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
   async addpayment() {
        await this.submitvalue(true)
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addpayment',
        data: {
          PartitionKey:'student',
          RowKey: this.feesinfo.RowKey,
          installmentNo:this.paymentinfo.installmentNo,
          amount:this.paymentinfo.amount,
          dateofpayment:this.paymentinfo.dateofpayment,
        },
      }).then((result) => {
         console.log('res', result)
      })
    },

  },

  created() {
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/showfeestostudent',
      data: {
        PartitionKey: 'student',
        RowKey: '1',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data
    })
 
  },
}
</script>
