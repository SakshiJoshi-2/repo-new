<template>
  <div
    class="container1"
    style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
  >
    <h2 class="heading-center">Staff Details</h2>
    <div id="table">
      <table
        class="table table-bordered table-hover table-condensed sortable"
        style="margin: auto"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>

            <th>Details:</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in xyz" :key="i">
            <td>{{ xyz[i].Name }}</td>
            <td>{{ xyz[i].Designation }}</td>
            <td>
              <button type="button" class="btn btn-primary" @click="details(i)">
                Details
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
  </div>
</template>
<script>
import { create_role } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  head:{
script:[
  {
    src:'https://www.kryogenix.org/code/browser/sorttable/sorttable.js'
  }
]
  },
  layout: 'adminlayout',
  data() {
    return {
      test: create_role,
      readOnly: true,
      myinfo: [],
      xyz: [],
      xxx: [],
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
    details(i) {
      
      this.xxx = this.xyz[i]
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
        url: 'http://localhost:3000/api/updaterole',
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
        url: 'http://localhost:3000/api/deleterole',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
  },
  created: function showstaffdetails() {
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/showstaffdetails',
      data: {
        PartitionKey: 'teacher',
        RowKey: this.myinfo.RowKey,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.xyz = result.data
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

<style >
.modal {
  text-align: center;
}
</style>