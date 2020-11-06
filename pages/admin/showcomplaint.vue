<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 220px"
    >
      <h1>
        <i
          class="fa fa-envelope"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Complain
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />
      
      <table
        class="table table-bordered table-hover table-condensed"
        id="table"
      >
        <thead>
          <tr>
            <th>PartitionKey</th>
            <th>RowKey</th>
            <th>To</th>
            <th>description</th>
            <th>Show Complaint</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in abc" :key="i">
            <td>{{ abc[i].PartitionKey }}</td>
            <td>{{ abc[i].RowKey }}</td>
            <td>{{ abc[i].to }}</td>
            <td>{{ abc[i].description }}</td>
            <td>
              <button type="button" class="btn btn-primary" @click="aaa(i)">
                Show
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="form">
        <MyForm
          :form="test1"
          :formPreviewData="xxx"
          :readOnly="true"
          v-on:getFormData="mycomplaint = { ...$event }"
        ></MyForm>
        <button type="button" class="btn btn-primary" @click="close()">
          close
        </button>
      </div>
     
    </div>
  </div>
</template>

<script>
import { complain, getfees } from '../../Config/form.js'

import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'adminlayout',
  data() {
    return {
      test: getfees,
      test1: complain,
      mycomplaint: [],
      abc: [],
      xxx: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveComplain() {
      await this.submitvalue(true)
      if ((await this.mycomplaint) != '') {
        console.log(this.mycomplaint)
      } else {
        console.log(this.mycomplaint)
      }
    },

    readcomplaint() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/readcomplaint',
        data: {
          PartitionKey1: this.mycomplaint.PartitionKey1,
          RowKey1: this.mycomplaint.RowKey1,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xxx = result.data[0]
      })
    },
    aaa(i) {
      let aa = i
      this.xxx = this.abc[aa]
      let x = document.getElementById('table')
      x.style.display = 'none'
      let hide1 = document.getElementById('form')
      hide1.style.display = 'block'

      console.log(aa)
      console.log(this.xxx)
    },
    close() {
      let x = document.getElementById('table')
      x.style.display = 'block'
      let hide1 = document.getElementById('form')
      hide1.style.display = 'none'
    },
  },
  created: function showcomplaint() {
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/showcomplaint',
      data: {
        PartitionKey1: 'complaint',
        RowKey1: this.mycomplaint.RowKey1,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.abc = result.data
      let hide1 = document.getElementById('form')
      hide1.style.display = 'none'
      console.log('form')
    })
  },
  hide() {
    let hide1 = document.getElementById('form')
    hide1.style.display = 'none'
    console.log('form')
  },
}
</script>

<style scoped>
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
  text-align: center;
}
</style>
