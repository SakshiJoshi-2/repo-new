<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Syllabus</h2>
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
        <label>Subject</label>
        <input type="text" v-model="Subject" placeholder="Enter subject" />
        <br /><br />
      </div>

      <div class="col-12">
        <button
          type="button"
          class="btn btn-primary"
          @click.prevent="createsyllabus = !createsyllabus"
        >
          <span v-if="!createsyllabus">Create</span>
          <span v-if="createsyllabus">Hide</span>
        </button>
        <MyForm
          v-if="createsyllabus"
          :form="test2"
          v-on:getFormData="myinfo = { ...$event }"
        ></MyForm>

        <div class="col-12">
          <vue-editor
            v-model="topics"
            :editor-toolbar="customToolbar"
            v-if="createsyllabus"
          />
        </div>
        <div class="col-12">
          <button
            type="button"
            v-if="createsyllabus"
            class="btn btn-primary"
            @click="addSyllabus()"
          >
            Add
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateSyllabus()"
          >
            Update
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteSyllabus()"
          >
            Delete
          </button>
          <button type="button" class="btn btn-primary" @click="readSyllabus()">
            Read
          </button>
        </div>
        <div class="col-12">
          <table
            class="table table-bordered table table-hover"
            v-if="tableshow"
          >
            <thead class="thead-dark">
              <tr>
                <th colspan="5">Syllabus:</th>
              </tr>
            </thead>

            <thead>
              <tr>
                <th>Chapters</th>

                <th>Topics</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in xyz" :key="i">
                <!-- <td>{{ xyz[i].Created}}</td> -->
                <td>{{ xyz[i].RowKey }}</td>
                <td style="padding-left: 50px" v-html="xyz[i].topics"></td>
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
import { createsyllabus } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'teacherlayout',
  data() {
    return {
      Subject: '',
      test2: createsyllabus,
      myinfo: [],
      topics: '',
      PartitionKey: '',
      abc: '',
      xyz: [],
      tableshow: false,
      sectionloop: null,
      section: 'ABCD',
      selectedclass: '',
      partionkey: '',
      createsyllabus: false,
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
      await this.submitvalue(true)
      // if ((await this.myinfo) != '') {
      //   console.log(this.myinfo)
      // } else {
      //   console.log(this.myinfo)
      // }

      this.PartitionKey =
        (await this.myinfo.Class) +
        this.myinfo.syllabussection +
        this.myinfo.Subjects
    },
    async addSyllabus() {
      await this.submitvalue(true)
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addSyllabus',
        data: {
          // PartitionKey:
          //   this.myinfo.Class +
          //   this.myinfo.syllabussection +
          //   this.myinfo.Subjects,
          PartitionKey: this.partionkey + this.section + this.myinfo.Subjects,
          RowKey: this.myinfo.RowKey,
          Class: this.myinfo.Class,
          syllabussection: this.myinfo.RowKey,
          Subjects: this.myinfo.Subjects,
          topics: this.topics,
          section: this.section,
          Subject: this.Subject,
        },
      }).then((result) => {
        console.log('res', result)
      })
      this.partionkey = this.selectedclass
    },
    updateSyllabus() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/updateSyllabus',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    deleteSyllabus() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/deleteSyllabus',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },

    async readSyllabus() {
      this.partionkey = this.selectedclass
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/readSyllabus',
        data: {
          // PartitionKey:
          //   this.myinfo.Class +
          //   this.myinfo.syllabussection +
          //   this.myinfo.Subjects,
          PartitionKey: this.partionkey + this.section + this.Subject,
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
