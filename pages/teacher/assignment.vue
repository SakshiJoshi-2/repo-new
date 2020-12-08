<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Assignment</h2>
      {{ selectedclass }}
      {{ partionkey }}
      {{ topics }} <br />
      {{ selectedclass }}{{ section }}{{ addsection }}

      <div id="ex">
        <div class="container p-2 my-2 border">
          <!-- <div class="btn-group">
            <button
              class="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Class
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" >1st</a>
              <a class="dropdown-item" >2nd</a>
              <a class="dropdown-item" >3rd</a>
            </div><button @click='readtAssignment()'>read</button>
          </div> -->
          <!-- <label for="cars">Class</label>
          <select name="class" id="class" @change="select()">
            <option value="class1">class1</option>
            <option value="class2">class2</option>
          </select> -->

          <label> Class</label>

          <select
            name="class"
            id="class"
            v-model="selectedclass"
            @click="partionkey = selectedclass"
          >
            <option :value="i" v-for="i in 12" :key="i">{{ i }}</option>
          </select>
          <label> Section</label>

          <select
            name="Section"
            id="Section"
            v-model="section"
            @click="section"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="add">Add</option></select
          ><input
            type="text"
            v-model="addsection"
            placeholder="Enter section"
          />
          <br /><br />

          <!-- <input type="submit" value="Submit" /> -->
          <!-- <div class="btn-group">
            <button class="btn btn-secondary btn-sm" type="button">
              Subject
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
              <a class="dropdown-item" href="#">Maths</a>
              <a class="dropdown-item" href="#">Science</a>
              <a class="dropdown-item" href="#">History</a>
            </div>
          </div> -->
        </div>
        <div>
          <div class="text-center">
            <!-- Button trigger modal -->
            <!-- <button
              type="button"
              class="btn btn-secondary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Create Assignment
            </button> -->

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Assignment
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body"></div>
                </div>
              </div>
            </div>
            <MyForm
              :form="test"
              v-on:getFormData="myinfo = { ...$event }"
            ></MyForm>
            <div class="col-12">
              <vue-editor v-model="topics" />
            </div>

            <button
              type="button"
              class="btn btn-primary"
              @click="
                saveDataIndatabase()
                addAssignment()
              "
            >
              Add Assignment
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateAssignment()"
            >
              Update Assignment
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="deleteAssignment()"
            >
              Delete Assignment
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="readtAssignment()"
            >
              Read Assignment
            </button>
          </div>
        </div>
        <hr />
        <div class="container">
          <table
            class="table table-bordered table table-hover"
            v-if="tableshow"
          >
            <thead class="thead-dark">
              <tr>
                <th colspan="5">Personal Details:</th>
              </tr>
            </thead>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Created In</th>
                <th>Submit In</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in xyz" :key="i">
                <td>{{ xyz[i].RowKey }}</td>

                <td>{{ xyz[i].Cassignment }}</td>
            
                <td style="padding-left: 50px" v-html="xyz[i].topics"></td>

                <td>{{ xyz[i].Dassignment }}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#odalCenter"
                    @click="aaa(i)"
                  >
                    Details
                  </button>
                </td>
                <!-- <div
                  class="modal fade"
                  id="odalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="odalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="odalLongTitle">
                          Assignment
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body"></div>

                      <MyForm
                        :form="test1"
                        :formPreviewData="xxx"
                        :readOnly="true"
                        v-on:getFormData="myinfo = { ...$event }"
                      ></MyForm>
                       
                    </div>
                  </div>
                </div> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let VueEditor
if (process.client) {
  VueEditor = require('vue2-editor').VueEditor
}
import { teacherassignment } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
      date_today: '',
      test: teacherassignment,
      test1: teacherassignment,
      myinfo: [],
      xyz: [],
      xxx: [],
      partionkey: '',
      selectedclass: '',
      tableshow: false,
      topics: '',
      section: null,
      addsection: null,
    }
  },
  components: {
    VueEditor,
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

    aaa(i) {
      let aa = i
      this.xxx = this.xyz[aa]
    },
    // select() {
    //   this.partionkey = this.selectedclass
    // },

    readdetails() {
      this.partionkey = this.selectedclass

      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/readdetails`,
        data: {
          PartitionKey: this.partionkey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xxx = result.data
      })
    },

    async addAssignment() {
      if (this.section == 'add') {
        this.section = this.addsection
      }
      await this.submitvalue(true)
      await this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addAssignment`,
        data: {
          PartitionKey: this.partionkey + this.section,
          section: this.section,
          RowKey: this.myinfo.RowKey,
              topics: this.topics,
          Cassignment: this.myinfo.Cassignment,
          Dassignment: this.myinfo.Dassignment,
        },
      }).then((result) => {
        console.log('res', result)
      })
      this.partionkey = this.selectedclass
    },
    updateAssignment() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/updateAssignment`,
        data: {
            PartitionKey: this.partionkey + this.section,
          RowKey: this.myinfo.RowKey,
              section: this.section,
                 topics: this.topics,
          Cassignment: this.myinfo.Cassignment,
          Dassignment: this.myinfo.Dassignment,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    deleteAssignment() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/deleteAssignment`,
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },

    readtAssignment() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/readtAssignment`,
        data: {
          PartitionKey: this.partionkey + this.section,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xyz = result.data
        this.tableshow = true
      })
    },
  },
  //   created(){
  //      this.$axios({
  //       method: 'post',
  //       url: `${process.env.BASE_URL}/readtAssignment`,
  //       data: {
  //         PartitionKey: 'class1',
  //         RowKey: this.myinfo.RowKey,
  //       },
  //     }).then((result) => {
  //       console.log('res', result.data)
  //       this.xyz= result.data
  //     })

  // }
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
.btn {
  text-align: center;
  margin: 4px 2px;
}
</style>
