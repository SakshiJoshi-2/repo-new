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
         <MyForm :form="test" v-on:getFormData="feesinfo = { ...$event }"></MyForm>

      <!-- <button @click="saveFees">Submit</button> -->
      <button type="button" class="btn btn-success" @click="addfees()">
        Fees Info
      </button>
      <button type="button" class="btn btn-danger" @click="deletefees()">
        Delete
      </button>
      <button type="button" class="btn btn-primary" @click="updatefees()">
        Update
      </button>
     
    </div>
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
      test: fees,
      feesinfo: [],
      xyz:[],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async addfees() {
        await this.submitvalue(true)
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addfees',
        data: {
          PartitionKey: this.feesinfo.PartitionKey,
          RowKey: this.feesinfo.RowKey,
          totalFees: this.feesinfo.totalFees,
          paidFees: this.feesinfo.paidFees,
          remainingFees: this.feesinfo.remainingFees,
          monthlyInstallement: this.feesinfo.monthlyInstallement,
          paidUpto: this.feesinfo.paidUpto,
          lastPaidOn: this.feesinfo.lastPaidOn,
          lastDate: this.feesinfo.lastDate,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    async deletefees() {
        await this.submitvalue(true)
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/deletefees',
        data: {
          PartitionKey: this.feesinfo.PartitionKey,
          RowKey: this.feesinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
 
  async updatefees() {
      await this.submitvalue(true)
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/updatefees',
      data: {
        PartitionKey: this.feesinfo.PartitionKey,
        RowKey: this.feesinfo.RowKey,
        totalFees: this.feesinfo.totalFees,
        paidFees: this.feesinfo.paidFees,
        remainingFees: this.feesinfo.remainingFees,
        monthlyInstallement: this.feesinfo.monthlyInstallement,
        paidUpto: this.feesinfo.paidUpto,
        lastPaidOn: this.feesinfo.lastPaidOn,
        lastDate: this.feesinfo.lastDate,
      },
    }).then((result) => {
      console.log('res', result)
   

    })
  },
 },
}
</script>

<style type="text/css">
.heading-center {
  text-align: center;
}

.row {
  margin: 20px;
  border: 1px solid lightgrey;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  margin: auto;
  padding: 20px;
}
</style>
