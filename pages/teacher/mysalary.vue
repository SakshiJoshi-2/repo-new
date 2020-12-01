<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">My Salary</h2>

      <div id="ex">
        <div class="container p-2 my-2 border">
          <div class="btn-group">
            <button
              class="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Year
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">2018</a>
              <a class="dropdown-item" href="#">2019</a>
              <a class="dropdown-item" href="#">2020</a>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn btn-secondary btn-sm" type="button">
              Month
            </button>
            <button
              type="button"
              class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Jan</a>
              <a class="dropdown-item" href="#">Feb</a>
              <a class="dropdown-item" href="#">Mar</a>
              <a class="dropdown-item" href="#">Apr</a>
              <a class="dropdown-item" href="#">May</a>
              <a class="dropdown-item" href="#">Jun</a>
              <a class="dropdown-item" href="#">Jul</a>
              <a class="dropdown-item" href="#">Aug</a>
              <a class="dropdown-item" href="#">Sep</a>
              <a class="dropdown-item" href="#">Oct</a>
              <a class="dropdown-item" href="#">Nov</a>
              <a class="dropdown-item" href="#">Dec</a>
            </div>
          </div>
        </div>
        <!-- <div class="container">
          <table class="table table-bordered table table-hover">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">Personal Details:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>Days Worked:</td>
              </tr>
              <tr>
                <td>Leave Taken:</td>
                <td>Joining Date:</td>
              </tr>
              <tr>
                <td>Alowed Leaves:</td>
                <td>Department:</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">Earning:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic</td>
                <td>HRA:</td>
              </tr>
              <tr>
                <td>Conv Allowance</td>
                <td>Medical Alowance</td>
              </tr>
              <tr>
                <td>Days Worked:</td>
                <td>Department:</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Payment Details:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Date of Transfer</td>
              </tr>
              <tr>
                <td>Bank Name</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Total Amount:</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div> -->
        <h4>Personal Details:</h4>
        <MyForm :form="test" v-on:getFormData="myper = { ...$event }"></MyForm>
        <button class="btn btn-primary" @click="saveDataIndatabase">
          Submit
        </button>
        <button class="btn btn-primary" @click="addSalary()">
          Add SalaryD
        </button>
        <button class="btn btn-primary" @click="updateSalary()">
          Update SalaryD
        </button>
        <button class="btn btn-primary" @click="deleteSalary()">
          Delete SalaryD
        </button>
        <button class="btn btn-primary" @click="readSalary()">
          Read SalaryD
        </button>
        {{ myper }}
      </div>
    </div>
  </div>
</template>

<script>
import { Personal } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
      test: Personal,

      myper: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveDataIndatabase() {
      await this.submitvalue(true)
      if ((await this.myper) != '') {
        console.log(this.myper)
      } else {
        console.log(this.myper)
      }
    },
    addSalary() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/add`,
        data: {
          PartitionKey: this.myper.PartitionKey,
          RowKey: this.myper.RowKey,
          Tname: this.myper.Tname,
          Tdays: this.myper.Tdays,
          TLeave: this.myper.TLeave,
          Tjoin: this.myper.Tjoin,
          Tdept: this.myper.Tdept,
          Twork: this.myper.Twork,
          TAllow: this.myper.TAllow,
          Ttotal: this.myper.Ttotal,
          THRA: this.myper.THRA,
          Tconv: this.myper.Tconv,
          Tmed: this.myper.Tmed,
          TDOT: this.myper.TDOT,
          TBname: this.myper.TBname,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
  },
}
</script>

<style scoped>
.heading-center {
  text-align: center;
}
#ex {
  border: 1px solid black;
  padding: 25px;
  background-size: auto;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
  text-align: center;
}
</style>
