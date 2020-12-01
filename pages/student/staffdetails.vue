<template>
  <!-- Change -->
  <div
    class="container1"
    style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
  >
    <h2 class="heading-center">Staff Details</h2>
    <form class="form-inline space">
      <input
        class="search form-control form-control-sm"
        type="text"
        placeholder="Search"
        v-model="filter"
      />
      <i class="fas fa-search icon" aria-hidden="true"></i>
    </form>

    <div id="table">
      <!-- <table
        class="table table-bordered table-hover table-condensed sortable"
        style="margin: auto"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>

            <th>Details:</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          
        <tr v-for="(item, i) in filteredRows" :key="i">
          
            <td>{{ item.Name }}</td>
            <td>{{ item.Designation }}</td>
            <td>{{item.Department}}</td>
            <td>
              <button class="btn btn-primary" @click="details(i)">
                Details
              </button>
            </td>
          </tr>
        </tbody>
      </table> -->

      <table
        id="example"
        class="table border border-dark bg-white responsive sortable"
      >
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Date</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in data" :key="i++">
            <td>{{ i++ }}</td>
            <td>{{ item.Name }}</td>
            <td>
              <button class="btn" @click.prevent="xyz(item.id)">
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="form">
      <button
        v-if="this.readOnly == true"
        button
        type="button"
        class="btn btn-primary"
        @click="edit()"
      >
        Edit
      </button>
      <MyForm
        :form="test"
        :formPreviewData="xxx"
        :readOnly="readOnly"
        v-on:getFormData="myinfo = { ...$event }"
      ></MyForm>
      <div v-if="this.readOnly == false">
        <button
          button
          type="button"
          class="btn btn-primary"
          @click="updaterole()"
        >
          Update Details
        </button>
        <button
          button
          type="button"
          class="btn btn-primary"
          @click="deleterole()"
        >
          Delete
        </button>
      </div>
      <button button type="button" class="btn btn-primary" @click="close()">
        Close
      </button>
    </div>
    {{ data }}
  </div>
</template>
<script>
import { create_role } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  head: {
    script: [
      {
        src: 'https://www.kryogenix.org/code/browser/sorttable/sorttable.js',
      },
    ],
  },
  layout: 'users',
  data() {
    return {
      readOnly: true,
      myinfo: [],
      data: [],
      xxx: [],
      filter: '',
    }
  },
  computed: {
    filteredRows() {
      return this.data.filter((item) => {
        const name = item.Name.toLowerCase()

        const searchTerm = this.filter.toLowerCase()

        return name.includes(searchTerm)
      })
      alert('Hello')
    },
  },
  // computed: {

  //   filteredRows() {
  //     return this.xyz.filter((item) => {

  //       const ename= item.Name.toLowerCase()
  //       const edesignation = item.Designation.toLowerCase()
  //       const edepartment = item.Department.toLowerCase()

  //       const searchTerm = this.filter.toLowerCase()

  //       return (
  //         ename.includes(searchTerm) ||
  //         edesignation.includes(searchTerm) ||
  //         edepartment.includes(searchTerm)
  //       )
  //     })
  //   },
  // },
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
    details(i) {
      this.xxx = this.data[i]
      let x = document.getElementById('table')
      x.style.display = 'none'
      let hide1 = document.getElementById('form')
      hide1.style.display = 'block'
      //   let hide2 = document.getElementById('update')
      //   hide2.style.display = 'none'
    },
    close() {
      let x = document.getElementById('table')
      x.style.display = 'block'
      let hide1 = document.getElementById('form')
      hide1.style.display = 'none'
    },
    edit() {
      if (this.readOnly == true) {
        return (this.readOnly = false)
      }
      //  let hide2 = document.getElementById('update')
      //   hide2.style.display = 'block'
    },

    async updaterole() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/updaterole`,
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
          name: this.myinfo.name,
          dob: this.myinfo.dob,
          gender: this.myinfo.gender,
          ms: this.myinfo.ms,
          age: this.myinfo.age,
          contact1: this.myinfo.contact1,
          contact2: this.myinfo.contact2,
          email: this.myinfo.email,
          qualification: this.myinfo.qualification,
          work_experience: this.myinfo.work_experience,
          designation: this.myinfo.designation,
          department: this.myinfo.department,
          address: this.myinfo.address,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },

    async deleterole() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/deleterole`,
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
  },
  created() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/showstaffdetails`,
      data: {
        PartitionKey: '12',
        RowKey: this.myinfo.RowKey,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data
      let hide1 = document.getElementById('form')
      hide1.style.display = 'none'
      console.log('form')
    })
  },
}
</script>

<style scoped>
.modal {
  text-align: center;
}
</style>
