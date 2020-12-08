<template>
  <div class="">
    <div class="container">
      <h1 style="text-align: center">
        <i
          class="fa fa-calendar"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Timetable
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />
    </div>
    <div class="container">
      <table class="table table-bordered table table-hover">
        <thead class="thead-dark">
          <tr>
            <th>{{ 'Days|Time' }}</th>
            <th>{{ time.col1 }}</th>
            <th>{{ time.col2 }}</th>
            <th>{{ time.col3 }}</th>
            <th>{{ time.col4 }}</th>
            <th>{{ time.col5 }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in subject" :key="i">
            <!-- <td>{{subject[i].RowKey}}</td> -->
            <td style="font-weight: bold">{{ subject[i].days }}</td>
            <td>{{ subject[i].col1 }}</td>
            <td>{{ subject[i].col2 }}</td>
            <td>{{ subject[i].col3 }}</td>
            <td>{{ subject[i].col4 }}</td>
            <td>{{ subject[i].col5 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { teachertimetable } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
      test: teachertimetable,
      myinfo: [],
      time: [],
      subject: [],
      PartitionKey: '',
      RowKey: '',
      count: '',
      col1: '',
      col2: '',
      col3: '',
      col4: '',
      col5: '',
      days: '',
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveDataIndatabase() {
      await this.submitvalue(true)
      if ((await this.myinfo) != '') {
        console.log(this.myinfo)
      } else {
        console.log(this.myinfo)
      }
      this.PartitionKey = this.myinfo.class + this.myinfo.teachersection
      if ((await this.myinfo.RowKey) == 0) {
        this.col1 = this.myinfo.lecture1
        this.col2 = this.myinfo.lecture2
        this.col3 = this.myinfo.lecture3
        this.col4 = this.myinfo.lecture4
        this.col5 = this.myinfo.lecture5
      } else {
        this.col1 = this.myinfo.subject1
        this.col2 = this.myinfo.subject2
        this.col3 = this.myinfo.subject3
        this.col4 = this.myinfo.subject4
        this.col5 = this.myinfo.subject5
      }

      this.days = this.myinfo.days
    },

    test1(days) {
      if (days == 'mon') {
        return 1
      }
      if (days == 'thu') {
        return 2
      }
    },

   
  },
  created: function readtimetable() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/readtimetable`,
      data: {
        PartitionKey: 'class1A',
        // teachersection:"A",
      },
    }).then((result) => {
      console.log('res', result.data)
      ;[this.time, ...this.subject] = result.data
      // this.time = result.data[0]
      // this.subject = result.data
    })
  },
}
</script>
<style lang="scss" scoped></style>
