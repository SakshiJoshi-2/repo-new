<template>
  <!-- Change -->
  <div>
    <h2 class="text-center">Staff Details</h2>
    <form class="form-inline space">
      <input
        class="search form-control form-control-sm"
        type="text"
        placeholder="Search"
        v-model="filter"
      />
      <i class="fa fa-search icon" aria-hidden="true"></i>
    </form>

    <div id="table">
      <table id="example" class="table border border-dark responsive sortable">
        <thead>
          <tr>
            <!-- <th>Sr. No.</th> -->
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in filteredRows" :key="i">
            <!-- <td>{{ i++ }}</td> -->
            <td>{{ item.name }}</td>
            <td>{{ item.designation }}</td>
            <td>{{ item.department }}</td>
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
                    :form="test"
                    :formPreviewData="xxx"
                    :readOnly="false"
                    v-on:getFormData="myinfo = { ...$event }"
                  ></MyForm>
                </template>
                <template v-slot:footer>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="updaterole"
                  >
                    Update</button
                  ><button
                    type="button"
                    class="btn btn-secondary"
                    @click="deleterole"
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </template>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
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
      test: create_role,
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
        const name = item.name.toLowerCase()
        const edesignation = item.designation.toLowerCase()
        const edepartment = item.department.toLowerCase()
        const searchTerm = this.filter.toLowerCase()
        return (
          name.includes(searchTerm) ||
          edesignation.includes(searchTerm) ||
          edepartment.includes(searchTerm)
        )
      })
    },
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
      let aa = i
      this.xxx = this.data[aa]
    },

    edit() {
      if (this.readOnly == true) {
        return (this.readOnly = false)
      }
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
      url: `${process.env.BASE_URL}/showcandidate`,
      data: {
        PartitionKey: 'candidate',
        RowKey: this.myinfo.RowKey,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data
    })
  },
}
</script>

<style scoped>
.modal {
  text-align: center;
}
</style>
