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
      <!-- <div id="form">
      <form name="fees" >
        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="totalFees">Total Fees:</label>
            <input class="form-control" type="text" id="totalFees" v-model="totalFees" placeholder="Enter Total Fees" />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="contact2">Paid Fees:</label>
            <input class="form-control" type="text" id="paidFees" v-model="paidFees"  placeholder="Enter Paid Fees"/>
          </div></div>
          <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="remainingFees">Remaining Fees:</label>
            <input class="form-control" type="text" id="remainingFees" v-model="remainingFees" placeholder="Enter Remaining Fees " />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="monthlyInstallments">Monthly Installments:</label>
            <input class="form-control" type="text" id="monthlyInstallments" v-model="monthlyInstallments"  placeholder="Enter Monthly Installments"/>
          </div></div>
          <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="paidUpto">Paid upto:</label>
            <input class="form-control" type="text" id="paidUpto" v-model="paidUpto" placeholder="Enter last paid month" />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="lastPaidOn">Last paid on:</label>
            <input class="form-control" type="text" id="lastPaidOn" v-model="lastPaidOn"  placeholder="Enter last paid date"/>
          </div></div>
          <div class="row">
          <div class="col-sm-12" style="border:1px solid lightgrey ;padding:10px">
            <label for="lastDate">Last date to pay next installement:</label>
            <input class="form-control" type="text" id="lastDate" v-model="lastDate" placeholder="Enter last date to pay installements" />
          </div>
          </div>

        </form></div></div>
          <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 class="heading-center">
        <i class="fa fa-rupee" aria-hidden="true" style="font-size:40px;color:grey;"></i> Fees
      </h1>
       <hr style="height:2px;border-width:0;background-color:lightgrey" />
      <div id="form">
      <form name="fees" >
        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="totalFees">Total Fees:</label>
            <input class="form-control" type="text" id="totalFees" v-model="totalFees" readonly />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="contact2">Paid Fees:</label>
            <input class="form-control" type="text" id="paidFees" v-model="paidFees"  readonly/>
          </div></div>
          <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="remainingFees">Remaining Fees:</label>
            <input class="form-control" type="text" id="remainingFees" v-model="remainingFees" readonly />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="monthlyInstallments">Monthly Installments:</label>
            <input class="form-control" type="text" id="monthlyInstallments" v-model="monthlyInstallments"  readonly/>
          </div></div>
          <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="paidUpto">Paid upto:</label>
            <input class="form-control" type="text" id="paidUpto" v-model="paidUpto" readonly />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="lastPaidOn">Last paid on:</label>
            <input class="form-control" type="text" id="lastPaidOn" v-model="lastPaidOn"  readonly/>
          </div></div>
          <div class="row">
          <div class="col-sm-12" style="border:1px solid lightgrey ;padding:10px">
            <label for="lastDate">Last date to pay next installement:</label>
            <input class="form-control" type="text" id="lastDate" v-model="lastDate" readonly />
          </div>
          </div>
           -->
      <MyForm :form="test" v-on:getFormData="feesinfo = { ...$event }"></MyForm>

      <!-- <button @click="saveFees">Submit</button> -->
      <button
        class="btn btn-success"
        @click="
          saveFees()
          addfees()
        "
      >
        Fees Info
      </button>
      <button class="btn btn-danger" @click="deletefees()">Delete</button>
      <button class="btn btn-primary" @click="updatefees()">Update</button>
      {{ feesinfo }}

      <!-- <div class="text-center">
        <nuxt-link
          to="/components/Home"
          button
          type="button"
          class="btn btn-primary"
          >Pay Online</nuxt-link
        >
      </div> -->
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
      test: fees,
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
    async addfees() {
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

    updatefees() {
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
