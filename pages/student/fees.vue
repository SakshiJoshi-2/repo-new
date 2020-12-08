<template>
  <div class="row">
    <div class="col-12">
      <h1 class="heading-center"><i class="fa fa-rupee"></i>Fees</h1>
      <hr />

 <div class="card-deck">
    <div class="card bg-light text-dark">
      <div class="card-body text-center">
        <p class="card-text"> Total Fees: {{ data.totalFees }}<br />
        Paid Fees: {{ data.paidFees }}<br />
        Remaining Fees: {{ data.remainingFees }}<br /></p>
    
      </div>
    </div>
    <div class="card bg-light text-dark">
      <div class="card-body text-center">
        <p class="card-text">   Number of Installment:{{ data.noOfInstallment }} <br />
        Monthly Installment: {{ data.monthlyInstallement }}<br />
        Last Date to Pay Next Installment:{{ data.lastDate }}<br /></p>
      </div>
    </div>
  
   
  </div>
     <br>  
    
      <h3>Installment Details:</h3>
      <hr />
      <div class="card bg-light text-dark">
    <div class="card-body">  <table class="table table-bordered table-hover table-condensed ">
        <thead>
          <tr>
            <th id="installmentTable">Installment No</th>
            <th id="amountTable">Amount</th>
            <th id="dateOfPaymentTable">Date of Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in NoOfInstallment" :key="i">
            <td>{{i}}</td>
            <td>{{ amounts[i] }}</td>
            <td>{{ dateopay[i] }}</td>
          </tr>
        </tbody>
      </table></div>
  </div>
    <br>
     <h3>Pay Installment</h3> <hr />

   <div class="card bg-light text-dark">
    <div class="card-body">
      <label for="installmentNo">Installment No:</label>
          <input
            type="text"
            id="installmentNo"
            name="installmentNo"
            v-model="installmentNo"
          />  &ensp;&ensp;
            <label for="amount">Installment Amount:</label>
          <input type="text" id="amount" name="amount" v-model="amount" />  &ensp;&ensp;
          <button type="button" class="btn btn-secondary" @click="addpayment">
        Add Installment
      </button>
        </div>
          </div>
  </div>
  
      
    </div>

</template>

<script>
import { fees } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
      form1: fees,
      feesinfo: [],
      data: [],
      today: '',
      date: '',
      installmentNo: '',
      amount: '',
      NoOfInstallment: null,
      amounts: [],
      dateopay:[]
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async addpayment() {
      await this.submitvalue(true)

      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addpayment`,
        data: {
          PartitionKey: 'student',
          RowKey: 'b54ec7e7-87b6-4e85-a35c-5db770b7e8fe',
          installmentNo: this.installmentNo,
          amount: this.amount,
          dateofpayment: this.date,
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
        RowKey: 'b54ec7e7-87b6-4e85-a35c-5db770b7e8fe',
      },
    }).then((result) => {
           this.data = result.data[0]
      this.NoOfInstallment = parseInt(result.data[0].noOfInstallment)

      for (var i in this.data) {
        var checkamt = i.split('')
        if (checkamt.slice(0, 6).join('') == 'amount') {
          // console.log('ghfgh', checkamt.slice(6, 7).join(''))
          // console.log(this.data[i])
          var count = checkamt.slice(6).join('')
          this.amounts[count] = this.data[i]
          // console.log('qwer', this.amounts)
        }
        if (checkamt.slice(0, 13).join('') == 'dateofpayment') {
          var count = checkamt.slice(13).join('')
          this.dateopay[count] = this.data[i]
      }}
    })
    this.today = new Date()
    this.date =
      this.today.getMonth() +
      1 +
      '-' +
      this.today.getDate() +
      '-' +
      this.today.getFullYear()
  },
}
</script>

<style scoped>
#installmentTable{
  width:10%
}
#amountTable{
  width:20%
}
#dateOfPaymentTable{
  width:20%
}

</style>