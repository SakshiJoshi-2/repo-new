<template>
<div class="row">
  <div class="col-12">
   <h1 class="heading-center"><i class="fa fa-rupee"></i>Fees</h1>
      <hr />
    

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
        <tr v-for="(item, i) in data" :key="i">
          <td>{{ data[i].RowKey }}</td>
          <td>{{ data[i].totalFees }}</td>
          <td>{{ data[i].paidFees }}</td>
          <td>{{ data[i].remainingFees }}</td>
          <td>{{ data[i].lastPaidOn }}</td>
          <td>{{ data[i].lastDate }}</td>

          <td>
            <Modal>
              <template v-slot:button>
                <button
                  type="button"
                  class="btn btn-primary btn-xs"
                  data-toggle="modal"
                  data-target="#myModal"
                  @click="details(i)"
                >
                  Details
                </button>
              </template>
              <template v-slot:header>Details </template>

              <template v-slot:body>
                <MyForm
                  :form="form1"
                  :formPreviewData="formdata"
                  :readOnly="true"
                ></MyForm>
                <MyForm
                  :form="form2"
                  v-on:getFormData="paymentinfo[i] = { ...$event }"
                ></MyForm>
              </template>
              <template v-slot:footer>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button class="btn btn-primary" @click="addpayment()">
                  Pay installement
                </button>
              </template>
            </Modal>
          </td>
        </tr>
      </tbody>
    </table>
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
      form2: installement,
      form1: fees,
      feesinfo: [],
      paymentinfo: [],
      data: [],
      formdata: [],
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
          RowKey: this.feesinfo.RowKey,
          installmentNo: this.paymentinfo.installmentNo,
          amount: this.paymentinfo.amount,
          dateofpayment: this.paymentinfo.dateofpayment,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    details(i) {
      let key = i
      this.formdata = this.data[key]
    },
  },

  created() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/showfees`,
      data: {
        PartitionKey: 'student',
        RowKey: this.feesinfo.RowKey,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data
    })
  },
}
</script>


