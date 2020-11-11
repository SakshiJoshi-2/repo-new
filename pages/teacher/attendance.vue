<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <!-- <h2 class="heading-center">
        Attendence {{ attendence
        }}<i class="fa fa-user-circle-o" aria-hidden="true"></i>
      </h2> -->
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />

      <div class="container p-2 my-2 border">
        <div class="btn-group">
          <label>Select Class</label>

          <select
            name="class"
            id="class"
            v-model="selectedclass"
          >
            <option :value="i" v-for="i in 12" :key="i">{{i}}</option>
          </select>

          <label>Select Section</label>

          <select
            name="class"
            id="class"
            v-model="selectedsection"
                     >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
        <span
          >Date: {{ date }}
          <pre> Day:  {{ day }}</pre>
        </span>{{selectedclass}}{{selectedsection}}
      </div>
      <button
        class="btn btn-primary"
        style="padding: 5px 5px; font-size: 10px"
        @click="showstudent()"
      >
        Details
      </button>

      {{ attendence }}
      <hr />

      <div
        class="card border"
        style="width: 18rem; display: inline-block; margin: 5px"
        v-for="(item, i) in abc"
        :key="i"
      >
        <img
          class="card-img-top"
          src="/user1x.png"
          alt="Card image cap"
          width="200"
          height="150"
        />
        <div class="card-body">
          <p class="card-text">{{ item.name }}</p>
          <!-- <p class="card-text">{{ abc[i].RowKey }}</p> -->
          <input
            type="radio"
            :id="item.RowKey + 'pres'"
            :name="item.RowKey"
            :value="item.RowKey"
            v-model="attendence[i]"
          />
          <label :for="item.RowKey + 'pres'">Present</label>
          <input
            type="radio"
            :id="item.RowKey + 'abs'"
            :name="item.RowKey"
            value="absent"
            v-model="attendence[i]"
          />
          <label :for="item.RowKey + 'abs'">Absent</label><br />
        </div>
      </div>
    </div>
  </div>
  <!-- && and .where('','') and where('',''), .where('','' "and, &&",'',''), -->
  <!-- </div> -->
</template>

<script>
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'teacherlayout',
  data() {
    return {
      abc: [],
      attendence: [],
      today: '',
      date: '',
      day: '',
      selectedclass: '',
      selectedsection: '',
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
      
    },
    async showstudent() {

      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/showstudent',
        data: {
          class_section: this.selectedclass+this.selectedsection,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.abc = result.data
      })
    },
    addattendance() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addpayment',
        data: {
          PartitionKey: 'attendence',
          RowKey: this.class_section,
          date: this.date,
          day: this.day,
          attendence: this.attendence,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
  },
  created() {
    this.today = new Date()
    this.date =
      this.today.getDate() +
      '-' +
      (this.today.getMonth() + 1) +
      '-' +
      this.today.getFullYear()
    this.day = this.today.getDay()
  },
}
</script>

<style type="text/css">
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
  text-align: center;
}
</style>