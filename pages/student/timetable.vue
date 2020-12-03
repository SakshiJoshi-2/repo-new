<template>
<div class="row">
  <div class="col-12">
    
      <h1 class="heading-center"><i class="fa fa-calendar"></i>Timetable</h1>
      <hr />
    
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
  </div></div>
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
      //     switch (this.myinfo.days) {
      //   case 'Monday':
      //     this.RowKey = 1
      //     break;
      //   case 'Tuesday':
      //     this.RowKey = 2
      //     break;
      //   case ' Wednesday':
      //     this.RowKey = 3
      //     break;
      //   case 'Thursday':
      //     this.RowKey = 4
      //     break;
      //   case 'Friday':
      //     this.RowKey = 5
      //     break;
      //   case 'Saturday':
      //     this.RowKey = 6
      //     break;
      //   default:
      //     this.RowKey = 0
      // }
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

    // async addtimetable() {
    //   await this.saveDataIndatabase()
    //   // for(this.Rowkey=0;this.RowKey<6)
    //   // {
    //   //   this.col1=this.myinfo.subject1

    //   // }
    //   let x = this.test1('mon')
    //   console.log('x',x)

    //   // console.log(this.RowKey)
    //   console.log('2')
    //   await this.$axios({
    //     method: 'post',
    //     url: `${process.env.BASE_URL}/addtimetable`,

    //     data: {
    //       PartitionKey: this.PartitionKey,
    //       RowKey: this.x,
    //       class: this.myinfo.class,
    //       days: this.myinfo.days,
    //       teachersection: this.myinfo.teachersection,

    //       // lecture1:this.myinfo.lecture1,
    //       col1: this.col1,
    //       col2: this.col2,
    //       col3: this.col3,
    //       col4: this.col4,
    //       col5: this.col5,
    //     },
    //   }).then((result) => {
    //     console.log('res', result)
    //   })
    //   console.log('3')
    // },
    // async updatetimetable() {
    //   await this.saveDataIndatabase()
    //   await this.$axios({
    //     method: 'post',
    //     url: `${process.env.BASE_URL}/updatetimetable`,
    //     data: {
    //       PartitionKey: this.myinfo.PartitionKey,
    //       RowKey: this.myinfo.RowKey,
    //       teacherday: this.myinfo.teacherday,
    //       teachersection: this.myinfo.teachersection,
    //       teacherhour: this.myinfo.teacherhour,
    //       teacherminute: this.myinfo.teacherminute,
    //       teachersubject: this.myinfo.teachersubject,
    //       teachername: this.myinfo.teachername,
    //     },
    //   }).then((result) => {
    //     console.log('res', result)
    //   })
    // },
    // async deletetimetable() {
    //   await this.saveDataIndatabase()
    //   await this.$axios({
    //     method: 'post',
    //     url: `${process.env.BASE_URL}/deletetimetable`,
    //     data: {
    //       PartitionKey: this.myinfo.PartitionKey,
    //       RowKey: this.myinfo.RowKey,
    //     },
    //   }).then((result) => {
    //     console.log('res', result)
    //   })
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
