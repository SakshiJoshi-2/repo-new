<template>
  <div class="row">
    <div class="col-12">
      <h1 class="heading-center"><i class="fa fa-rupee"></i>Fees</h1>
      <hr />
      <ClassSection v-on:getClass="select = { ...$event }" ></ClassSection> <br />
            <button type="button" class="btn btn-secondary" @click="showstudent">Click</button>
      Test 1 :- {{ select }}
      <table class="table table-bordered table-hover table-condensed">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Class</th>
            <th>Section</th>
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
            <td>{{ data[i].name }}</td>
            <td>{{ data[i].std }}</td>
            <td>{{ data[i].section }}</td>
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
                      v-on:getFormData="feesinfo = { ...$event }"
                    
                  ></MyForm>

                  <table
                    class="table table-bordered table-hover table-condensed"
                  >
                    <thead>
                      <tr>
                        <th>Installment No</th>
                        <th>Amount</th>
                        <th>Date of Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="i in NoOfInstallment" :key="i">
                        <td>{{ i }}</td>
                        <td>{{ amounts[i] }}</td>
                        <td>{{ dateopay[i] }}</td>
                      </tr>
                    </tbody>
                  </table>
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
                    <button class="btn btn-success" @click="addfees()">Fees Info</button>
    <button class="btn btn-danger" @click="deletefees()">Delete</button>
    <button class="btn btn-primary" @click="updatefees()">Update</button>
                </template>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
    {{feesdata}}
    </div>
    
  </div>
  
</template>

<script>
import ClassSection from '@/components/MyForm.vue'
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
      paymentinfo: [],
      data: [],
        feesdata: [],
      formdata: [],
      NoOfInstallment: null,
      amounts: [],
      dateopay: [],
      selectedclass: '',
      select: '',
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
          noOfInstallment: this.feesinfo.noOfInstallment,
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
          noOfinstallment: this.feesinfo.noOfinstallment,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    details(i) {
      this.formdata = this.data[i]
  if(this.data[i].noOfInstallment==null){
    this.NoOfInstallment =0
  }else{
      this.NoOfInstallment = parseInt(this.data[i].noOfInstallment)
  }
      for (var x in this.data[i]) {
        var checkamt = x.split('')
        if (checkamt.slice(0, 6).join('') == 'amount') {
          var count = checkamt.slice(6).join('')
          this.amounts[count] = this.data[i][x]
        }
        if (checkamt.slice(0, 13).join('') == 'dateofpayment') {
          var count = checkamt.slice(13).join('')
          this.dateopay[count] = this.data[i][x]
        }
      }
    },
    
    async showstudent() {
         this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/showstudent`,
      data: {
        class_section: this.select.class+this.select.section,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data
    })
     await  this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/showfees`,
      data: {
      RowKey: this.data.RowKey,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.feesdata = result.data
    })
    },
  },

 
}
</script>


