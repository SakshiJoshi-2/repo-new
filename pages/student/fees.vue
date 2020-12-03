<template>
<div class="row">
  <div class="col-12">
       <h1 class="heading-center"><i class="fa fa-rupee"></i>Fees</h1>
      <hr />
      Total Fees: {{data.totalFees}}<br>
      Paid Fees: {{data.paidFees}}<br>
      Remaining Fees: {{data.remainingFees}}<br>
      Number of Installment: <br>
      Monthly Installment: {{data.monthlyInstallment}}<br>
      Last Date to Pay Next Installment:{{data.lastDate}}<br>



    <!-- <MyForm :form="form1" :formPreviewData="data" :readOnly="true"></MyForm> -->
    <h3> Installment Details:</h3><hr>
      
        <table class="table table-bordered table-hover table-condensed">
          <thead>
            <tr>
              <th>installmentNo</th>
              <th>amount</th>
              <th>dateofpayment</th>
                        </tr>
          </thead>
          <tbody>
            <td>{{data.installmentNo}}</td>
              <td>{{data.amount}}</td>
                <td>{{data.dateofpayment}}</td>
            </tbody>
            </table>
     <MyForm
          :form="form2"
          v-on:getFormData="paymentinfo = { ...$event }"
        ></MyForm>
        <button
                    type="button"
                    class="btn btn-secondary"
                  @click="addpayment"
                  >
                Add Installment
                  </button>{{ paymentinfo}}
   </div></div>
</template>

<script>
import { fees, installement } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
      form1: fees,
      form2: installement,
         paymentinfo: [],
      feesinfo: [],
      data: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
         async  addpayment() {
      await this.submitvalue(true)
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addpayment`,
        data: {
          PartitionKey: 'student',
          RowKey: '12',
          installmentNo: this.paymentinfo.installmentNo,
          amount: this.paymentinfo.amount,
          dateofpayment: this.paymentinfo.dateofpayment,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
  },
  created() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/showfeestostudent`,
      data: {
        PartitionKey: 'student',
        RowKey: '12',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data[0]
    })
  },
}
</script>

