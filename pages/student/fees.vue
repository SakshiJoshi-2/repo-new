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

     

      <div id="table">
        <table class="table table-bordered table-hover table-condensed">
          <thead>
            <tr>
              <th>RowKey</th>
              <th>Total Fees</th>
              <th>Paid Fees</th>
              <th>Remaining Fees</th>
              <th>Last Paid On</th>
              <th>Last Date:</th>
              <th>Details:</th>
            </tr>
          </thead>
          <tbody>
            <td>{{ xyz[i].RowKey }}</td>
            <td>{{ xyz[i].totalFees }}</td>
            <td>{{ xyz[i].paidFees }}</td>
            <td>{{ xyz[i].remainingFees }}</td>
            <td>{{ xyz[i].lastPaidOn }}</td>
            <td>{{ xyz[i].lastDate }}</td>

            <td>
              <button type="button" class="btn btn-primary" @click="details(i)">
                Details
              </button>
            </td>
          </tbody>
        </table>
      </div>
      <div id="form">
        <MyForm
          :form="test1"
          :formPreviewData="xxx"
          :readOnly="true"
                 ></MyForm>
        <MyForm
          :form="form2"
          v-on:getFormData="paymentinfo = { ...$event }"
        ></MyForm>

        <button class="btn btn-primary" @click="close()">close</button>
        <button
          class="btn btn-primary"
          @click="
            saveinstallment()
            addpayment()
          "
        >
          Pay installement
        </button>
      </div>
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
      // myfees: fees,
      test: installement,
      test1: fees,
      feesinfo: [],
      paymentinfo: [],
      xyz: [],
      xxx: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveinstallment() {
      await this.submitvalue(true)
      if ((await this.paymentinfo) != '') {
        console.log(this.paymentinfo)
      } else {
        console.log(this.paymentinfo)
      }
    },
    addpayment() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addpayment`,
        data: {
          PartitionKey: 'student',
          RowKey: this.feesinfo.RowKey,
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
      url: `${process.env.BASE_URL}/showfees`,
      data: {
        PartitionKey: 'student',
        RowKey: '1',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.xyz = result.data
      let hide1 = document.getElementById('form')
      hide1.style.display = 'none'
      console.log('form')
    })
  },
}
</script>

<style scoped></style>
