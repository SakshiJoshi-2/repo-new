<template>
  <div class="col-12" style="background-color: #ffffff">
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
    <button class="btn btn-success" @click="addfees()">Fees Info</button>
    <button class="btn btn-danger" @click="deletefees()">Delete</button>
    <button class="btn btn-primary" @click="updatefees()">Update</button>
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
      test: fees,
      feesinfo: [],
      xyz: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),

    async addfees() {
      await this.submitvalue(true)
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addfees`,
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
        url: `${process.env.BASE_URL}/deletefees`,
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
        url: `${process.env.BASE_URL}/updatefees`,
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


</style>
