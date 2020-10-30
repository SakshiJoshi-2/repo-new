<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Syllabus</h2>

      <div id="ex">
        <div class="container p-2 my-2 border">
          <!-- <input type='text' id='class' placeholder='Enter class' v-model="selectedclass"> -->
          <br /><br />
          <div>
            <div class="text-center">
              <!-- Button trigger modal -->

              <!-- Modal
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true" -->

              <!-- <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                     Syllabus
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
                  <div class="modal-body"></div> -->

              <MyForm
                :form="test2"
                v-on:getFormData="myinfo = { ...$event }"
              ></MyForm>

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
              <vue-editor class="" v-model="topics" />
              <button
                type="button"
                class="btn btn-secondary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Show Syllabus</button
              >{{ topics }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--           
          </div> -->
    <!-- </div> -->
    <!-- </div> -->
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
      test2: createsyllabus,
      myinfo: [],
      topics: '',
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
      this.PartitionKey = this.myinfo.class + this.myinfo.teachersection
    },
    async addSyllabus() {
      await this.saveDataIndatabase()
      await this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addSyllabus',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
          topics: this.topics,
        },
      }).then((result) => {
        console.log('res', result)
      })
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
    deleteAssignment() {
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
  },
}
</script>

<style></style>
