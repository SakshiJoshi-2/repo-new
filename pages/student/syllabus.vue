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
             
               
            </div>
            <div class="col-12">
             
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
import { createsyllabus } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'studentlayout',
  data() {
    return {
      xyz: [],
    }
  },
  // components: {
  //   VueEditor,
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
  },
  created: function readSyllabus() {
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/readSyllabus',
      data: {
        PartitionKey: 'Class1AMaths',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.xyz = result.data
    })
  },
}
</script>
