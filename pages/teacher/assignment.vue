<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Assignment {{ xyz.section }}</h2>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />

      <div class="container p-2 my-2 border">
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

        <select name="Section" id="Section" v-model="section">
          <option :value="item" v-for="item in sectionloop" :key="item">
            {{ item }}
          </option>
        </select>
        <!-- <input type="text" v-model="addsection" placeholder="Enter section" v-if="section=='add'"/>
          <br /><br /> -->
      </div>

      <div>
        <div class="text-center">
          <!-- Modal -->
          <!-- <div
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
          </div> -->
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="createassignment = !createassignment"
          >
            <span v-if="!createassignment">Create</span>
            <span v-if="createassignment">Hide</span>
          </button>
          <MyForm
            v-if="createassignment"
            :form="test"
            v-on:getFormData="myinfo = { ...$event }"
          ></MyForm>
          <div class="col-12">
            <vue-editor
              v-model="topics"
              :editor-toolbar="customToolbar"
              v-if="createassignment"
            />
          </div>

          <button
            type="button"
            v-if="createassignment"
            class="btn btn-primary"
            @click="
              saveDataIndatabase()
              addAssignment()
            "
          >
            Add
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateAssignment()"
          >
            Update
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteAssignment()"
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="readtAssignment()"
          >
            Read
          </button>
        </div>
      </div>
      <hr />
      <div class="container">
        <table class="table table-bordered table table-hover" v-if="tableshow">
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
              <td>{{ xyz[i].RowKey }}</td>

              <td>{{ xyz[i].Cassignment }}</td>

              <td style="padding-left: 50px" v-html="xyz[i].topics"></td>

              <td>{{ xyz[i].Dassignment }}</td>
              <!-- <td>{{ xyz[i].section }}</td> -->

              <td>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">{{xyz.RowKey}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
     this.xxx.topics
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
              </td>
            </tr>
          </tbody>
        </table>
        
        {{ selectedclass }}
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
  layout: 'teacherlayout',
  data() {
    return {
      abc: [],
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
      section: 'ABCDE',

      sectionloop: null,
      createassignment: false,
      customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: 'left' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        ['link', 'Alignments'],
      ],
    }
  },
  components: {
    VueEditor,
  },
  methods: {
    split() {
      let charac = this.section.split('')
      this.qwer = charac
    },
    ...mapMutations('modules/context', ['submitvalue']),
    async saveDataIndatabase() {
  
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
Details(){
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/Details',
        data: {
         RowKey:this.myinfo.RowKey,
         topics: this.topics
        },
      }).then((result) => {
        console.log('res', result.data)
        
      })
},
    async addAssignment() {
      if (this.section == 'add') {
        this.section = this.addsection
      }
      await this.submitvalue(true)
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addAssignment',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          PartitionKey: this.partionkey + this.section,
          section: this.section,
          RowKey: this.myinfo.RowKey,
          // Wassignment: this.myinfo.Wassignment,
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
          PartitionKey: this.partionkey + this.section,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xyz = result.data
        this.tableshow = true
      })
    },
  },

  created() {
    this.sectionloop = 'ABCDEFGHIJKLMNOPQRTUVWXYZ'.split('')
  },
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
