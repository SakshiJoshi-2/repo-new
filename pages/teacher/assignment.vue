<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Assignment</h2>

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
           <label for id="class">class</label>
          <input type='text' id='class' placeholder='Enter class' v-model="selectedclass">
          <br /><br />
          <button
            type="button"
            class="btn btn-primary"
            @click="select();readtAssignment()"
          >
            Read Assignment
          </button>
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
            <button
              type="button"
              class="btn btn-secondary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Create Assignment
            </button>

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

                  <MyForm
                    :form="test"
                    v-on:getFormData="myinfo = { ...$event }"
                  ></MyForm>

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
            </div>
          
          </div>
        </div>
        <hr />
        <div class="container">
          <table class="table table-bordered table table-hover">
            <thead class="thead-dark">
              <tr>
                <th colspan="5">Personal Details:</th>
              </tr>
            </thead>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Created In</th>
                <th>Topics</th>
                <th>Submit In</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in xyz" :key="i">
                <!-- <td>{{ xyz[i].Created}}</td> -->
                <td>{{ xyz[i].RowKey }}</td>
                <td>{{ xyz[i].Wassignment }}</td>
                <td>{{ xyz[i].Cassignment }}</td>
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
                <div
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
                </div>
              </tr>
            </tbody>
          </table>

          <!-- <MyForm
      :form="test1"
      :formPreviewData="xyz"
      :readOnly="true"
      v-on:getFormData="myinfo = {...$event }"
      >
      </MyForm> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { teacherassignment } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'teacherlayout',
  data() {
    return {
      date_today: '',
      test: teacherassignment,

      test1: teacherassignment,
      myinfo: [],
      xyz: [],
      xxx: [],
      partionkey: '',
      selectedclass:'class1',
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
    aaa(i) {
      let aa = i
      this.xxx = this.xyz[aa]
    },
    select(){
      this.partionkey=this.selectedclass;
    },
    // // let x= document.getElementById("table");
    // //     x.style.display = "none";
    // //     let hide1=document.getElementById("form");
    // //          hide1.style.display="block";

    // show(partionkey){
    //  let ss=partionkey;
    //  this.partionkey1=this.ss;
    //  console.log(ss)
    // },

    // select() {
    //   var class1 = document.getElementById('class')
    //   var classSelected = class1.options[class1.selectedIndex].value
    //   console.log(classSelected)

    //   var partionkey = this.classselected
    //   console.log('pp',partionkey)
      
    // },
    readdetails() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/readdetails',
        data: {
          PartitionKey: this.partionkey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xxx = result.data
      })
    },

    addAssignment() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addAssignment',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
          Wassignment: this.myinfo.Wassignment,
          Cassignment: this.myinfo.Cassignment,
          Dassignment: this.myinfo.Dassignment,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    updateAssignment() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/updateAssignment',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
          Wassignment: this.myinfo.Wassignment,
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
        url: 'http://localhost:3000/api/deleteAssignment',
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
        url: 'http://localhost:3000/api/readtAssignment',
        data: {
          PartitionKey: this.partionkey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xyz = result.data
      })
    },
  },
  //   created(){
  //      this.$axios({
  //       method: 'post',
  //       url: 'http://localhost:3000/api/readtAssignment',
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

<style type="text/css">
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
