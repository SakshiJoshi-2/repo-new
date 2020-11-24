<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h1 style="text-align: center">
        <i
          class="fa fa-calendar"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Timetable
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />

      <label for="days">Choose a Days:</label>
      <select id="days" name="days" v-model="days">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thrusday">Thrusday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option></select
      >{{ days }}

      <MyForm :form="test" v-on:getFormData="myinfo = { ...$event }"></MyForm>

      <button class="btn btn-primary" @click="addtimetable()">
        Add Timetable
      </button>
      <button class="btn btn-primary" @click="updatetimetable()">
        Update Timetable
      </button>

      <button class="btn btn-primary" @click="deletetimetable()">
        Delete Timetable
      </button>
      <button class="btn btn-primary" @click="readtimetable()">
        Read Timetable
      </button>

      {{ RowKey }}
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
// import VueTableDynamic from 'vue-table-dynamic'
import { teachertimetable } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'teacherlayout',

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

      // this.days=this.myinfo.days
    },
    async switchdays() {
      console.log('days', this.days)
      switch (this.days) {
        case 'Sunday':
          this.RowKey = '7'
          break
        case 'Monday':
          this.RowKey = '1'
          break
        case 'Tuesday':
          this.RowKey = '2'
          break
        case 'Wednesday':
          this.RowKey = '3'
          break
        case 'Thrusday':
          this.RowKey = '4'
          break
        case 'Friday':
          this.RowKey = '5'
          break
        case 'Saturday':
          this.RowKey = '6'
          break
        default:
          this.RowKey = '0'
      }
      if ((await this.RowKey) == '0') {
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
    },
    // test(){
    //   let z= this.RowKey(this.myinfo.days)
    //   console.log(this.myinfo.days,z)
    // },

    async addtimetable() {
      console.log('1')
      await this.saveDataIndatabase()
      console.log('2')
      await this.switchdays()
      console.log('3')

      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addtimetable',

        data: {
          PartitionKey: this.PartitionKey,
          RowKey: this.RowKey,
          class: this.myinfo.class,
          days: this.days,
          teachersection: this.myinfo.teachersection,

          // lecture1:this.myinfo.lecture1,
          col1: this.col1,
          col2: this.col2,
          col3: this.col3,
          col4: this.col4,
          col5: this.col5,
        },
      }).then((result) => {
        console.log('res', result)
      })
      console.log('3')
    },
    async updatetimetable() {
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/updatetimetable',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
          teacherday: this.myinfo.teacherday,
          teachersection: this.myinfo.teachersection,
          teacherhour: this.myinfo.teacherhour,
          teacherminute: this.myinfo.teacherminute,
          teachersubject: this.myinfo.teachersubject,
          teachername: this.myinfo.teachername,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    async deletetimetable() {
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/deletetimetable',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    async readtimetable() {
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/readtimetable',
        data: {
          PartitionKey: this.PartitionKey,
          // teachersection:"A",
          class_section: 'VIIA',
        },
      }).then((result) => {
        console.log('res', result.data)
        ;[this.time, ...this.subject] = result.data
        // this.time = result.data[0]
        // this.subject = result.data
      })
    },
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
