<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Syllabus</h2>

      <div id="ex">
        <div class="container p-2 my-2 border border-dark">
          <div class="row mx-0 mt-5">
            <div class="col-12">
              <MyForm
                :form="test2"
                v-on:getFormData="myinfo = { ...$event }"
              ></MyForm>
            </div>
            <div class="col-12">
              <vue-editor v-model="topics" />
            </div>
            <div class="col-12">
              <button
                type="button"
                class="btn btn-primary"
                @click="addSyllabus()"
              >
                Add Syllabus
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updateSyllabus()"
              >
                Update Syllabus
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="deleteSyllabus()"
              >
                Delete Syllabus
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="readSyllabus()"
              >
                Read Syllabus
              </button>
            </div>
            <div class="col-12">
              <table class="table table-bordered table table-hover">
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
  layout: 'users',
  data() {
    return {
      test2: createsyllabus,
      myinfo: [],
      topics: '',
      PartitionKey: '',
      abc: '',
      xyz: [],
    }
  },
  components: {
    VueEditor,
  },
  methods: {
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
        url: `${process.env.BASE_URL}/addSyllabus`,
        data: {
          PartitionKey:
            this.myinfo.Class +
            this.myinfo.syllabussection +
            this.myinfo.Subjects,
          RowKey: this.myinfo.RowKey,
          Class: this.myinfo.Class,
          syllabussection: this.myinfo.RowKey,
          Subjects: this.myinfo.Subjects,
          topics: this.topics,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    updateSyllabus() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/updateSyllabus`,
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
        url: `${process.env.BASE_URL}/deleteSyllabus`,
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },

    async readSyllabus() {
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/readSyllabus`,
        data: {
          PartitionKey:
            this.myinfo.Class +
            this.myinfo.syllabussection +
            this.myinfo.Subjects,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xyz = result.data
      })
    },
  },
}
</script>
